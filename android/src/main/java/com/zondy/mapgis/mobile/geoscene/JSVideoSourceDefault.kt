package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.*
import com.zondy.mapgis.android.ar.VideoSourceDefault
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj

/**
 * @content
 * @auther fangqi 2021-12-08
 */
class JSVideoSourceDefault(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val mReactContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  /**
   * 构造一个新的对象
   * @param promise
   */
  @ReactMethod
  fun createObj(promise: Promise) {
    try {
      val videoSourceDefault = VideoSourceDefault(mReactContext)
      val objId = addObj(videoSourceDefault)
      val map = Arguments.createMap()
      map.putString("ObjId", objId)
      promise.resolve(map)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSVideoSourceDefault"
  }

  init {
    mReactContext = reactContext
  }
}
