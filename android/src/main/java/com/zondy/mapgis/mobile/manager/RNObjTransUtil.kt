package com.zondy.mapgis.mobile.manager;

import android.util.Log
import dalvik.system.BaseDexClassLoader
import dalvik.system.DexFile
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import java.lang.reflect.Field
import java.util.concurrent.ConcurrentHashMap


object RNObjTransUtil {

  private const val TAG = "RNObjTransUtil";

  @Throws(ClassNotFoundException::class)
  fun String.getClassByName(): Class<*> {
    return when {
      this == "string"                  -> java.lang.String::class.java
      this == "object" || this == "obj" -> java.lang.Object::class.java
      this == "boolean"                 -> java.lang.Boolean.TYPE
      this == "int"                     -> Integer.TYPE
      this == "float"                   -> java.lang.Float.TYPE
      this == "long"                    -> java.lang.Long.TYPE
      this == "double"                  -> java.lang.Double.TYPE
      this == "short"                   -> java.lang.Short.TYPE
      this == "char"                    -> Character.TYPE
      this == "byte"                    -> java.lang.Byte.TYPE
      this == "map"                     -> java.util.HashMap::class.java
      this.startsWith("array|")         -> java.lang.reflect.Array.newInstance(this.substring(6).getClassByName(), 0).javaClass
      this.startsWith("list|")          -> List ::class.javaObjectType
      this.startsWith("arrayList|")     -> ArrayList ::class.javaObjectType
      this.startsWith("enum|")          -> this.substring(5).getClassByName()
      //【扩充】
      this == "Context"                 -> android.content.Context::class.java
      else                              -> {
        //尾缀匹配mapgis class
        val result = cacheClsFinderResultMap[this]
        if (result != null) {
          return result
        }
        for (item in mgClsNameList) {
          if (item.endsWith(this, true)) {
            return Class.forName(item).also { cacheClsFinderResultMap[this] = it }
          }
        }
        //匹配不到时再尝试将它看作完整类名
        Class.forName(this).also { cacheClsFinderResultMap[this] = it }
      }
    }
  }

  /**
   * Cache cls finder result map
   */
  val cacheClsFinderResultMap = ConcurrentHashMap<String, Class<*>>()

  private val mgClsNameList = ArrayList<String>()

  init {
    mgClsNameList.addAll(getAllClass {
      return@getAllClass it.startsWith("com.zondy.mapgis.")
    })
  }

  private fun getDexFiles(): List<DexFile> {
    // 这里我们做一些反射来从类加载器访问 dex 文件。
    // 这些实现细节因平台版本而异，所以我们必须小心一点，但没什么大不了的，因为这只是为了测试。它应该适用于 21+。参考来源在：
    // Android 11测试通过
    // https://android.googlesource.com/platform/libcore/+/oreo-release/dalvik/src/main/java/dalvik/system/BaseDexClassLoader.java
    val classLoader = Thread.currentThread().contextClassLoader as BaseDexClassLoader

    val pathListField = field("dalvik.system.BaseDexClassLoader", "pathList")
    val pathList = pathListField.get(classLoader) // Type is DexPathList

    val dexElementsField = field("dalvik.system.DexPathList", "dexElements")

    @Suppress("UNCHECKED_CAST")
    val dexElements = dexElementsField.get(pathList) as Array<Any> // Type is Array<DexPathList.Element>

    val dexFileField = field("dalvik.system.DexPathList\$Element", "dexFile")
    return dexElements.map {
      dexFileField.get(it) as DexFile
    }
  }

  private fun field(className: String, fieldName: String): Field {
    val clazz = Class.forName(className)
    val field = clazz.getDeclaredField(fieldName)
    field.isAccessible = true
    return field
  }

  fun getAllClass(filter: (String) -> Boolean): ArrayList<String> {
    val clsNameList = ArrayList<String>()
    val dexFiles = getDexFiles()
    for (dexFile in dexFiles) {
      for (clsName in dexFile.entries()) {
        if (filter.invoke(clsName))
          clsNameList.add(clsName)
      }
    }
    return clsNameList
  }


  @Throws(ExceptionWithoutStack::class)
  fun Any.getTypedObj(typeStr: String): Any? {
    return when {
      typeStr == "short" -> (this as Number).toShort()
      typeStr == "int" -> (this as Number).toInt()
      typeStr == "long" -> (this as Number).toLong()
      typeStr == "float" -> (this as Number).toFloat()
      typeStr == "double" -> (this as Number).toDouble()
      typeStr == "char" -> (this as Number).toChar()
      typeStr == "byte" -> (this as Number).toByte()
      typeStr == "boolean" -> this as Boolean
      typeStr == "string" || typeStr == "java.lang.String" -> this as? String
      typeStr == "map"                                     -> {//视作hashMap<String,String?>
        (this as? JSONObject)?.let {
          val hashMap = HashMap<String, String?>()
          for (key in it.keys()) {
            hashMap[key] = it.opt(key)?.toString()
          }
          hashMap
        }
      }
      typeStr.startsWith("array|")                         -> {
        val type = typeStr.substring(6).getClassByName()
        (this as? String).convert2JArray() ?: (this as? JSONArray)?.let {
          val size = it.length()
          val resultArray = java.lang.reflect.Array.newInstance(type, size)
          for (index in 0 until size) {
            java.lang.reflect.Array.set(resultArray, index, it.opt(index)?.getTypedObj(typeStr.substring(6)))
          }
          resultArray
        }
      }
      typeStr.startsWith("list|")                          -> {
//                val type = typeStr.substring(6).getClassByName()
        val list = ArrayList<Any?>()
        (this as? String).convert2JArray() ?: (this as? JSONArray)?.let {
          for (i in 0 until it.length()) {
            val setVal = it.opt(i)?.getTypedObj(typeStr.substring(5))
            list.add(setVal)
          }
          list
        }
      }
      typeStr.startsWith("arrayList|")                          -> {
//                val type = typeStr.substring(6).getClassByName()
        val list = ArrayList<Any?>()
        (this as? String).convert2JArray() ?: (this as? JSONArray)?.let {
          for (i in 0 until it.length()) {
            val setVal = it.opt(i)?.getTypedObj(typeStr.substring(10))
            list.add(setVal)
          }
          list
        }
      }
      typeStr.startsWith("enum|")                          -> {
        val enumType = typeStr.substring(5).getClassByName()
        if(enumType.isEnum){
          for (item in enumType.enumConstants.orEmpty()) {
            val value = (item as Enum<*>).name
            if (value == this) {
              return item
            }
          }
        }else if((com.zondy.mapgis.geomap.inner.Enumeration ::class.java).isAssignableFrom(enumType)){
          var clazz = enumType as Class<out com.zondy.mapgis.geomap.inner.Enumeration>
          for (item in com.zondy.mapgis.geomap.inner.Enumeration.getEnums(clazz)) {
            if (item.name() == this) {
              return item;
            }
          }
        }else if((com.zondy.mapgis.`object`.Enumeration ::class.java).isAssignableFrom(enumType)){
          var clazz = enumType as Class<out com.zondy.mapgis.`object`.Enumeration>
          for (item in com.zondy.mapgis.`object`.Enumeration.getEnums(clazz)) {
            if (item.name() == this) {
              return item;
            }
          }
        }else if((com.zondy.mapgis.analysis.inner.Enumeration ::class.java).isAssignableFrom(enumType)){
          var clazz = enumType as Class<out com.zondy.mapgis.analysis.inner.Enumeration>
          for (item in com.zondy.mapgis.analysis.inner.Enumeration.getEnums(clazz)) {
            if (item.name() == this) {
              return item;
            }
          }
        }else{
          return null
        }
        null
      }
      this is String                                       -> {
        MGObjManager.getObjByID(this)
      }
      else                                                 -> {
        this
//                throw ExceptionWithoutStack("无法转换！${this} -> $typeStr")
      }
    }
  }

  fun String.getObjArray(typeArray: JSONArray? = null): Array<Any?>? {
    typeArray ?: return null
    this.convert2JArray()?.let {
      val size = it.length()
      if (size != typeArray.length()) {
        Log.e(TAG, "参数定义与值数组长度不一！typeArraySize=${typeArray.length()},valArraySize=${size}")
        return null
      }
      val resultArray = Array(size) { index ->
        it[index].getTypedObj(typeArray.optString(index))
      }
      return resultArray
    }
    return null
  }


  /**
   * 将字符串转换成JSONObj，需该字符串格式正确，遇到null或者内容为"null"的字符串，会返回null。其他情况视作字符串格式异常，将抛出异常
   *
   * @return
   */
  @Throws(ExceptionWithoutStack::class)
  fun String?.convert2JObj(): JSONObject? {
    this ?: return null
    if (this == "null") {
      return null
    }
    return try {
      JSONObject(this)
    } catch (e: JSONException) {
      val msg = "convert 【${this}】 to JSONObject Fail!"
      Log.e(TAG, msg, e)
      throw ExceptionWithoutStack(msg)
    }
  }

  /**
   * 将字符串转换成JSONArray，需该字符串格式正确，其余逻辑同[convert2JObj]
   *
   * @return
   */
  @Throws(ExceptionWithoutStack::class)
  fun String?.convert2JArray(): JSONArray? {
    this ?: return null
    if (this == "null") {
      return null
    }
    return try {
      JSONArray(this)
    } catch (e: JSONException) {
      val msg = "convert 【${this}】 to JSONArray Fail!"
      Log.e(TAG, msg, e)
      throw ExceptionWithoutStack(msg)
    }
  }


  @Throws(ExceptionWithoutStack::class)
  fun String.getPTypeFromJArrayStr(): Array<Class<*>>? {
    if (this.isNotEmpty()) {
      val json = this.convert2JArray() ?: return null
      val size = json.length()
      if (size <= 0) {
        return null
      }
      val resultList = Array(size) {
        try {
          json.optString(it).getClassByName()
        } catch (e: ClassNotFoundException) {
          val msg = "Cls Trans Error! errorTypeStr=${this}"
          Log.e(TAG, msg, e)
          throw ExceptionWithoutStack(msg)
        }
      }
      return resultList
    }
    return null
  }
}
