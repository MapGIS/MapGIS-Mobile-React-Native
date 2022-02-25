package com.zondy.mapgis.mobile.geobase

import com.facebook.react.bridge.*
import com.zondy.mapgis.environment.Environment

/**
 * @content 图片对象Native组件
 * @author fangqi 2021-7-20
 */
class JSEnvironment(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
  private val mContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun initialize(environmentID: String?, strRootPath: String?, promise: Promise) {
    try {
      Environment.initialize(strRootPath, mContext)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun requestAuthorization(promise: Promise) {
    val activity = currentActivity
    activity!!.runOnUiThread {
      try {
        Environment.requestAuthorization(activity) { promise.resolve(true) }
      } catch (e: Exception) {
        promise.reject(e)
      }
    }
  }

  companion object {
    private const val REACT_CLASS = "JSEnvironment"
  }

  init {
    mContext = context
  }
}
