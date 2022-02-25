package com.zondy.mapgis.mobile.manager;

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.zondy.mapgis.mobile.manager.RNObjTransUtil.convert2JArray
import com.zondy.mapgis.mobile.manager.RNObjTransUtil.getClassByName
import com.zondy.mapgis.mobile.manager.RNObjTransUtil.getObjArray
import com.zondy.mapgis.mobile.manager.RNObjTransUtil.getPTypeFromJArrayStr
import com.zondy.mapgis.mobile.manager.RNObjTransUtil.getTypedObj
import java.lang.reflect.Method
import java.util.*
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.locks.ReentrantReadWriteLock
import kotlin.concurrent.read
import kotlin.concurrent.write

object MGObjManager {
  private const val TAG = "ObjManagerInternal";

  /**
   * Obj map，通过clsName,idNo去唯一地定义到一个Obj
   */
  private val objMap = ConcurrentHashMap<String, ConcurrentHashMap<String, Any>>()
  private val writeLock = ReentrantReadWriteLock(true)//公平的可重入读写锁
  private val methodCatchMap = ConcurrentHashMap<String, Method>()

  /**
   * React application context，来自于[BaseJavaModule]模块初始化时
   */
  internal lateinit var reactApplicationContext: ReactApplicationContext

  /**
   * 对象ID标准化的实体类，注意，必须使用[isIDValid]方法判定对象ID合法之后，才能使用其中的clsName和idNO！
   *
   * @constructor
   *
   * @param objID
   */
  class ObjectID(objID: String) {
    lateinit var clsName: String
    lateinit var idNO: String
    private var valid = false

    init {
      if (objID.isNotEmpty() && objID.contains("|")) {
        val idArray = objID.split("|")
        if (idArray.size >= 2) {
          clsName = idArray[0]
          idNO = idArray[1]
          valid = true
        } else {
          clsName = ""
          idNO = ""
        }
      }
    }

    fun isIDValid(): Boolean {
      return valid
    }
  }

  private fun Class<*>.getMethodWithCache(clsName: String, methodName: String, vararg parameterTypes: Class<*>): Method {
    val methodID = "$clsName|$methodName${getPTStr(parameterTypes)}"

    fun Method.cacheMethod(id: String) {
      methodCatchMap[id] = this
    }
    return methodCatchMap[methodID]
      ?: this.getMethod(methodName, *parameterTypes).apply { cacheMethod(methodID) }
  }

  private fun getPTStr(parameterTypes: Array<out Class<*>>): String {
    var pTypesStr = ""
    for (item in parameterTypes) {
      pTypesStr += "|" + item.name
    }
    return pTypesStr
  }

  fun getContext(): ReactApplicationContext {
    return reactApplicationContext
  }

  /**
   * Get obj by ID,id组成——className|idNO
   *
   * @param objID
   * @return
   */
  fun getObjByID(objID: String): Any? {
    val o = ObjectID(objID).also { if (!it.isIDValid()) return null }
    return writeLock.read {
      objMap[o.clsName]?.get(o.idNO)
    }
  }

  private fun removeObj(clsName: String, idNO: String): Any? {
    writeLock.write {
      return objMap[clsName]?.let {
        synchronized(it) {
          it.remove(idNO)
        }
      }
    }
  }

  fun removeObj(objID: String): Boolean {
    val o = MGObjManager.ObjectID(objID).also { if (!it.isIDValid()) return false }
    removeObj(o.clsName, o.idNO)
    return true
  }

  /**
   * 传入className，移除此className下的obj
   *
   * @param clsName
   * @return
   */
  fun removeType(clsName: String): ConcurrentHashMap<String, Any>? {
    writeLock.write {
      return objMap.remove(clsName)
    }
  }

  /**
   * 传入objID，移除此objID同className的所有obj（包括此Obj）
   *
   * @param objID
   * @return
   */
  fun removeTypeByObjID(objID: String): Boolean {
    val o = MGObjManager.ObjectID(objID).also { if (!it.isIDValid()) return false }
    removeType(o.clsName)
    return true
  }

  fun removeAll() {
    writeLock.write {
      objMap.clear()
    }
  }


  private fun getUUID(length: Int = 4): String {
    return UUID.randomUUID().toString().substring(0, length)
  }

  fun addObj(obj: Any?): String? {
    obj ?: return null
    val clsName = obj::class.javaObjectType.canonicalName ?: return null
    var uuid = getUUID()
    val objTypeMap =
      writeLock.read {
        objMap[clsName]
      } ?: kotlin.run {
        val tmp = ConcurrentHashMap<String, Any>()
        writeLock.write {
          objMap[clsName] = tmp
        }
        tmp
      }
    synchronized(objTypeMap) {
      if (objTypeMap.contains(obj)) {
        for ((key, value) in objTypeMap.entries) {
          if (value == obj) {
            uuid = key
            Log.i(TAG, "obj was already in Map,id=${"$clsName|$uuid"}")
            return "$clsName|$uuid"
          }
        }
      }
      while (objTypeMap.containsKey(uuid)) {
        uuid = getUUID()
      }
      objTypeMap[uuid] = obj
    }
    Log.i(TAG, "obj was added to Map,id=${"$clsName|$uuid"}")
    return "$clsName|$uuid"
  }

  fun getObjID(obj: Any): String? {
    val clsName = obj::class.javaObjectType.canonicalName ?: return null
    val objTypeMap = writeLock.read {
      objMap[clsName]
    } ?: return null
    var uuid: String? = null
    synchronized(objTypeMap) {
      for ((key, value) in objTypeMap) {
        if (obj == value) {
          uuid = key
          break
        }
      }
    }
    uuid?.let {
      return "${clsName}|${uuid}"
    }
      ?: return null
  }

  fun removeObj(obj: Any): Boolean {
    val clsName = obj::class.javaObjectType.canonicalName ?: return false
    val objTypeMap = writeLock.read {
      objMap[clsName]
    } ?: return false
    var keyWillDel: String? = null
    synchronized(objTypeMap) {
      for ((key, value) in objTypeMap) {
        if (obj == value) {
          keyWillDel = key
          break
        }
      }
    }
    keyWillDel?.let {
      synchronized(objTypeMap) {
        objTypeMap.remove(it, obj)
      }
      return true
    } ?: return false
  }


  fun invokeByReact(clsName: String, methodName: String, invokeFrom: String?, methodParamsTypeJArray: String?, methodParamsJArray: String?, resultType: String, promise: Promise) {
    try {
      val result = invoke(clsName, methodName, invokeFrom, methodParamsTypeJArray, methodParamsJArray)
      val resolveResult: Any? = when {
        resultType == "obj"             -> addObj(result)
        resultType == "number"          -> {
          when (result) {
            is Short -> result.toInt()
            is Char  -> result.toInt()
            is Byte  -> result.toInt()    //这里Byte转换成Int可能有问题
            is Long  -> result.toDouble() //这里Long转换成Double可能有问题
            is Float -> result.toDouble()
            else     -> result
          }
        }
        resultType == "map"             -> {
          if (result is HashMap<*, *>) {
            val resultObj = Arguments.createMap()
            val type = resultType.substring(3).getClassByName()//type处理尚未做
            for ((key, value) in result) {
              when(value){
                is String -> resultObj.putString(key.toString(), value);
                is Boolean -> resultObj.putBoolean(key.toString(), value);
                is Int,Short,Char,Byte -> resultObj.putInt(key.toString(), value as Int)
                is Float,Double,Long -> resultObj.putDouble(key.toString(), value as Double)
                else -> resultObj.putString(key.toString(), addObj(value))
              }
            }
            resultObj
          } else {
            null
          }
        }
        resultType.startsWith("array|") -> {
          if (result is Array<*>) {
            val resultArray = Arguments.createArray()
            val type = resultType.substring(6).getClassByName()//type处理尚未做
            for (item in result) {
              resultArray.pushString(addObj(item))
              when(item){
                is String -> resultArray.pushString(item);
                is Boolean -> resultArray.pushBoolean(item);
                is Int,Short,Char,Byte -> resultArray.pushInt(item as Int)
                is Float,Double,Long -> resultArray.pushDouble(item as Double)
                else -> resultArray.pushString(addObj(item))
              }
            }
            resultArray
          } else {
            Log.i(TAG, "接口回调错误，该回调参数期望为array，实际判定不为array,object=${result}")
            null
          }
        }
        resultType.startsWith("list|")  -> {
          if (result is ArrayList<*>) {
            val resultList = Arguments.createArray()
            val type = resultType.substring(5).getClassByName()//type处理尚未做
            for (item in result) {
              when(item){
                is String -> resultList.pushString(item);
                is Boolean -> resultList.pushBoolean(item);
                is Int,Short,Char,Byte -> resultList.pushInt(item as Int)
                is Float,Double,Long -> resultList.pushDouble(item as Double)
                else -> resultList.pushString(addObj(item))
              }
            }
            resultList
          } else {
            Log.i(TAG, "接口回调错误，该回调参数期望为list，实际判定不为list,object=${result}")
            null
          }
        }
        resultType == "enum|"           -> {
          when {
              result == null -> null
              (Enum::class.java).isAssignableFrom(result::class.java) -> {
                (result as Enum<*>).name
              }
              (com.zondy.mapgis.geomap.inner.Enumeration ::class.java).isAssignableFrom(result::class.java) -> {
                (result as com.zondy.mapgis.geomap.inner.Enumeration).name()
              }
              (com.zondy.mapgis.`object`.Enumeration ::class.java).isAssignableFrom(result::class.java) -> {
                (result as com.zondy.mapgis.`object`.Enumeration).name()
              }
              (com.zondy.mapgis.analysis.inner.Enumeration ::class.java).isAssignableFrom(result::class.java) -> {
                (result as com.zondy.mapgis.analysis.inner.Enumeration).name()
              }
              else -> {
                null
              }
          }
        }
        else                            -> promise.resolve(result?.getTypedObj(resultType))
      }
      promise.resolve(resolveResult)
    } catch (ex: ExceptionWithoutStack) {
      Log.i(TAG, ex.message.toString())
      promise.reject(ex)
    }
  }

  @Throws(ExceptionWithoutStack::class)
  fun invoke(clsName: String, methodName: String, invokeFrom: String?, methodParamsTypeJArray: String?, methodParamsJArray: String?): Any? {
    //2021-08-09 14:18:11.715 I/MGObjManager.invoke: 用时1：23 ,cnt:4  ->13
    //2021-08-09 14:18:11.716 I/MGObjManager.invoke: 用时2：688 ,cnt:5 ->420
    //2021-08-09 14:18:11.717 I/MGObjManager.invoke: 用时3：296 ,cnt:6 ->254
    //2021-08-09 14:18:11.718 I/MGObjManager.invoke: 用时4：402 ,cnt:7 ->246
    val cls =
      try {
        clsName.getClassByName()
      } catch (ex: ClassNotFoundException) {
        throw ExceptionWithoutStack("Invoke fail! Can't find class by className,className=${clsName}")
      }
    val method: Method
    try {
      val params = methodParamsJArray?.getObjArray(methodParamsTypeJArray.convert2JArray())
      val clsArray: Array<Class<*>>? = methodParamsTypeJArray?.getPTypeFromJArrayStr()

      method =
        try {
          clsArray?.let { cls.getMethodWithCache(clsName, methodName, *it) }
            ?: cls.getMethodWithCache(clsName, methodName)
        } catch (ex: NoSuchMethodException) {
          throw ExceptionWithoutStack("Invoke fail! Can't find method in class=${clsName},methodName=${methodName},paramsType=${methodParamsTypeJArray}")
        }
      params
        ?.let { return method.invoke(invokeFrom?.let { objID -> getObjByID(objID) }, *it) }
        ?: return method.invoke(invokeFrom?.let { getObjByID(it) })
    } catch (ex: ExceptionWithoutStack) {
      throw ex
    }
  }

  fun createInstanceForReact(clsName: String, initParamsType: String?, initParamsStr: String?, promise: Promise) {
    try {
      val instance = createInstance(clsName, initParamsType, initParamsStr)
      promise.resolve(addObj(instance))
    } catch (ex: ExceptionWithoutStack) {
      Log.i(TAG, ex.message.toString())
      promise.reject(ex)
    }
  }

  @Throws(ExceptionWithoutStack::class)
  fun createInstance(clsName: String, initParamsType: String?, initParamsStr: String?): Any? {
    val cls =
      try {
        clsName.getClassByName()
      } catch (ex: ClassNotFoundException) {
        throw ExceptionWithoutStack("CreateInstance fail! Can't find class by className,className=${clsName}")
      }
    if (initParamsType.isNullOrBlank() || initParamsStr.isNullOrBlank()) {
      return cls.newInstance()
    } else {
      val constructor =
        try {
          initParamsType.getPTypeFromJArrayStr()?.let { cls.getConstructor(*it) }
            ?: return cls.newInstance()
        } catch (ex: NoSuchMethodException) {
          throw ExceptionWithoutStack("CreateInstance fail!Can't find constructor in class:${clsName},paramsType=${initParamsType}")
        }
      val params = initParamsStr.getObjArray(initParamsType.convert2JArray())
        ?: throw ExceptionWithoutStack("CreateInstance fail! Error params[initParamsStr]=${initParamsStr}")
      return constructor.newInstance(*params)
    }
  }

}
