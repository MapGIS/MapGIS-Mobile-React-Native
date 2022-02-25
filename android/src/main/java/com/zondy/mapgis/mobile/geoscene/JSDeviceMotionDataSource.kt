package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.android.ar.DeviceMotionDataSource
import com.zondy.mapgis.android.ar.DeviceMotionDataSource.DeviceMotionDataSourceListener
import com.zondy.mapgis.geometry.Dot3D
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content
 * @auther fangqi 2021-12-08
 */
class JSDeviceMotionDataSource(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val mReactContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun registerListener(objId: String?, promise: Promise) {
    try {
      val deviceMotionDataSource = getObjByID(objId!!) as DeviceMotionDataSource?
      deviceMotionDataSource!!.listener = mDeviceMotionDataSourceListener
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterListener(objId: String?, promise: Promise) {
    try {
      val deviceMotionDataSource = getObjByID(objId!!) as DeviceMotionDataSource?
      deviceMotionDataSource!!.listener = null
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  private val mDeviceMotionDataSourceListener: DeviceMotionDataSourceListener = object : DeviceMotionDataSourceListener {
    override fun onInitializeStart() {
      val writableMap = Arguments.createMap()
      writableMap.putBoolean("initializeStart", true)
      sendEvent(INITIALIZE_START_EVENT, writableMap)
    }

    override fun onInitializeFinish(errorCode: Int) {
      val writableMap = Arguments.createMap()
      writableMap.putInt("errorCode", errorCode)
      sendEvent(INITIALIZE_FINISH_EVENT, writableMap)
    }

    override fun onPosChange(dot3D: Dot3D, rotationMatrix: DoubleArray) {
      val writableMap = Arguments.createMap()
      writableMap.putDouble("x", dot3D.x)
      writableMap.putDouble("y", dot3D.y)
      writableMap.putDouble("z", dot3D.z)
      val writableArray = Arguments.createArray()
      for (i in rotationMatrix.indices) {
        writableArray.pushDouble(rotationMatrix[i])
      }
      writableMap.putArray("rotationMatrixData", writableArray)
      sendEvent(POS_CHANGE_EVENT, writableMap)
    }
  }

  private fun sendEvent(eventName: String, writableMap: WritableMap) {
    mReactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, writableMap)
  }

  companion object {
    private const val REACT_CLASS = "JSDeviceMotionDataSource"
    private const val INITIALIZE_START_EVENT = "com.mapgis.RN.DistanceMeasurement.InitializeStartEvent"
    private const val INITIALIZE_FINISH_EVENT = "com.mapgis.RN.DistanceMeasurement.InitializeFinishEvent"
    private const val POS_CHANGE_EVENT = "com.mapgis.RN.DistanceMeasurement.PosChangeEvent"
  }

  init {
    mReactContext = reactContext
  }
}
