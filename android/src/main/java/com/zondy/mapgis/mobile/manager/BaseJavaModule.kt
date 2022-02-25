package com.zondy.mapgis.mobile.manager;

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class BaseJavaModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return ClassName
  }

  /**
   * Create instance
   *
   * @param clsName 类名,如:java.lang.String
   * @param initParamsType 构造方法传参类型，是一个JArrayStr，如["java.lang.String","java.lang.Double"]
   * @param initParamsStr 构造方法参数，是一个JArrayStr，如：["yes",{"type":"long","value":"1233"},null,"className|uuid"]
   * @param promise
   */
  @ReactMethod
  fun createInstance(clsName: String, initParamsType: String?, initParamsStr: String?, promise: Promise) {
    MGObjManager.createInstanceForReact(clsName, initParamsType, initParamsStr, promise)
  }

  /**
   * Invoke by react
   *
   * @param clsName 类名
   * @param methodName 方法名
   * @param invokeFrom 由谁调用，此处填调用者的objID
   * @param paramsTypeStr 方法参数类型，是一个JArrayStr，如["java.lang.String","java.lang.Double"]
   * @param paramsStr 方法参数，是一个JArrayStr，如：["yes",{"type":"long","value":"1233"},null,"className|uuid"]
   * @param resultType 返回值类型，填 "obj","number" 或 "" 或，obj则会返回其注册后的objID，number自不必说，否则直接promise.resolve()返回
   * @param promise
   */
  @ReactMethod
  fun invoke(clsName: String, methodName: String, invokeFrom: String?, paramsTypeStr: String?, paramsStr: String?, resultType: String, promise: Promise) {
    MGObjManager.invokeByReact(clsName, methodName, invokeFrom, paramsTypeStr, paramsStr, resultType, promise)
  }

  @ReactMethod
  fun dispose(objID: String) {
    MGObjManager.removeObj(objID)
  }

  @ReactMethod
  fun disposeType(className: String) {
    MGObjManager.removeType(className)
  }

  @ReactMethod
  fun disposeTypeByObjID(objID: String) {
    MGObjManager.removeTypeByObjID(objID)
  }

  @ReactMethod
  fun disposeAll() {
    MGObjManager.removeAll()
  }

  init {
    MGObjManager.reactApplicationContext = reactContext
  }

  companion object {
    private const val ClassName = "BaseJavaModule"
  }
}
