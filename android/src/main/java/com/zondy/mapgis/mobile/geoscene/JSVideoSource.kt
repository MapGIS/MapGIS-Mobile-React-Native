package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.android.ar.VideoSource
import com.zondy.mapgis.android.ar.VideoSource.VideoSourceListener
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content
 * @auther fangqi 2021-12-07
 */
class JSVideoSource(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val mReactContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun registerListener(distanceMeasurementId: String?, promise: Promise) {
    try {
      val videoSource = getObjByID(distanceMeasurementId!!) as VideoSource?
      videoSource!!.listener = mVideoSourceListener
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterListener(distanceMeasurementId: String?, promise: Promise) {
    try {
      val videoSource = getObjByID(distanceMeasurementId!!) as VideoSource?
      videoSource!!.listener = null
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  private val mVideoSourceListener = VideoSourceListener { imageFormat, width, height, bytes ->
    val writableMap = Arguments.createMap()
    writableMap.putString("imageFormat", imageFormat.name())
    writableMap.putInt("width", width)
    writableMap.putInt("height", height)
    val writableArray = Arguments.createArray()
    for (i in bytes.indices) {
      writableArray.pushInt(bytes[i].toInt())
    }
    writableMap.putArray("imageData", writableArray)
    sendEvent(VIDEOSOURCELISTENER, writableMap)
  }

  private fun sendEvent(eventName: String, writableMap: WritableMap) {
    mReactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, writableMap)
  }

  companion object {
    private const val REACT_CLASS = "JSVideoSource"
    private const val VIDEOSOURCELISTENER = "com.mapgis.RN.FlyManager.VideoSourceListener"
  }

  init {
    mReactContext = reactContext
  }
}
