package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.core.spatial.DistanceMeasurement
import com.zondy.mapgis.core.spatial.DistanceMeasurement.DistanceMeasureChangedListener
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content 三维距离量算类。用于量算三维空间中两个点之间的直接距离、水平距离、垂直距离。
 * @auther fangqi 2021-12-07
 */
class JSDistanceMeasurement(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val mReactContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun registerMeasurementChangedListener(distanceMeasurementId: String?, promise: Promise) {
    try {
      val distanceMeasurement = getObjByID(distanceMeasurementId!!) as DistanceMeasurement?
      distanceMeasurement!!.addMeasurementChangedListener(mDistanceMeasureChangedListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterMeasurementChangedListener(distanceMeasurementId: String?, promise: Promise) {
    try {
      val distanceMeasurement = getObjByID(distanceMeasurementId!!) as DistanceMeasurement?
      distanceMeasurement!!.removeMeasurementChangedListener(mDistanceMeasureChangedListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  private val mDistanceMeasureChangedListener = DistanceMeasureChangedListener { measurementChangedEvent ->
    val writableMap = Arguments.createMap()
    writableMap.putString("ObjId", addObj(measurementChangedEvent))
    sendEvent(MEASUREMENTCHANGEDEVENT, writableMap)
  }

  private fun sendEvent(eventName: String, writableMap: WritableMap) {
    mReactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, writableMap)
  }

  companion object {
    private const val REACT_CLASS = "JSDistanceMeasurement"
    private const val MEASUREMENTCHANGEDEVENT = "com.mapgis.RN.DistanceMeasurement.MeasurementChangedEvent"
  }

  init {
    mReactContext = reactContext
  }
}
