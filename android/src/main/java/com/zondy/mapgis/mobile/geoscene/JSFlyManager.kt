package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.android.sceneview.FlyManager
import com.zondy.mapgis.android.sceneview.FlyManager.StatusChangedListener
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content 场景飞行管理类
 * @auther fangqi 2021-12-07
 */
class JSFlyManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val mReactContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun registerStatusChangedListener(distanceMeasurementId: String?, promise: Promise) {
    try {
      val flyManager = getObjByID(distanceMeasurementId!!) as FlyManager?
      flyManager!!.setStatusChangedListener(mStatusChangedListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterStatusChangedListener(distanceMeasurementId: String?, promise: Promise) {
    try {
      val flyManager = getObjByID(distanceMeasurementId!!) as FlyManager?
      flyManager!!.setStatusChangedListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  private val mStatusChangedListener = StatusChangedListener { flyStatus ->
    val writableMap = Arguments.createMap()
    writableMap.putString("FlyStatus", flyStatus.name())
    sendEvent(FLYSTATUSCHANGEDEVENT, writableMap)
  }

  private fun sendEvent(eventName: String, writableMap: WritableMap) {
    mReactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, writableMap)
  }

  companion object {
    private const val REACT_CLASS = "JSFlyManager"
    private const val FLYSTATUSCHANGEDEVENT = "com.mapgis.RN.FlyManager.FlyStatusChangedEvent"
  }

  init {
    mReactContext = reactContext
  }
}
