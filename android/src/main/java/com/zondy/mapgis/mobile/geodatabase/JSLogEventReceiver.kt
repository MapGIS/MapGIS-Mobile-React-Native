package com.zondy.mapgis.mobile.geodatabase

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.geodatabase.LogEventReceiver
import com.zondy.mapgis.geodatabase.event.IStepEndListener
import com.zondy.mapgis.geodatabase.event.IStepMessageListener
import com.zondy.mapgis.geodatabase.event.IStepStartListener
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @author fangqi 2021-11-18
 * @content 过程回调信息类
 */
class JSLogEventReceiver(private val mReactContext: ReactApplicationContext) : ReactContextBaseJavaModule(mReactContext) {
  private var mStepStartListener: IStepStartListener? = null
  private var mStepMessageListener: IStepMessageListener? = null
  private var mStepEndListener: IStepEndListener? = null
  override fun getName(): String {
    return REACT_CLASS
  }

  private fun sendEvent(eventName: String, writableMap: WritableMap) {
    mReactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, writableMap)
  }

  @ReactMethod
  fun addStepStartListener(objId: String?, promise: Promise) {
    try {
      mStepStartListener = IStepStartListener { stepName ->
        val writableMap = Arguments.createMap()
        writableMap.putString("stepName", stepName)
        sendEvent(STEPSTART, writableMap)
      }
      val logEventReceiver = getObjByID(objId!!) as LogEventReceiver?
      logEventReceiver!!.addStepStartListener(mStepStartListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun removeStepStartListener(objId: String?, promise: Promise) {
    try {
      val logEventReceiver = getObjByID(objId!!) as LogEventReceiver?
      logEventReceiver!!.removeStepStartListener(mStepStartListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun addStepMessageListener(objId: String?, promise: Promise) {
    try {
      mStepMessageListener = IStepMessageListener { message ->
        val writableMap = Arguments.createMap()
        writableMap.putString("message", message)
        sendEvent(STEPMESSAGE, writableMap)
      }
      val logEventReceiver = getObjByID(objId!!) as LogEventReceiver?
      logEventReceiver!!.addStepMessageListener(mStepMessageListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun removeStepMessageListener(objId: String?, promise: Promise) {
    try {
      val logEventReceiver = getObjByID(objId!!) as LogEventReceiver?
      logEventReceiver!!.removeStepMessageListener(mStepMessageListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun addStepEndListener(objId: String?, promise: Promise) {
    try {
      mStepEndListener = IStepEndListener { progressStatus, progress, stepName, isAppendLog ->
        val writableMap = Arguments.createMap()
        writableMap.putString("status", progressStatus.name)
        writableMap.putDouble("progress", progress)
        writableMap.putString("stepName", stepName)
        writableMap.putBoolean("isAppendLog", isAppendLog)
        sendEvent(STEPEND, writableMap)
      }
      val logEventReceiver = getObjByID(objId!!) as LogEventReceiver?
      logEventReceiver!!.addStepEndListener(mStepEndListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun removeStepEndListener(objId: String?, promise: Promise) {
    try {
      val logEventReceiver = getObjByID(objId!!) as LogEventReceiver?
      logEventReceiver!!.removeStepEndListener(mStepEndListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSLogEventReceiver"
    private const val STEPSTART = "com.mapgis.RN.LogEventReceiver.step_start"
    private const val STEPMESSAGE = "com.mapgis.RN.SketchEditor.step_message"
    private const val STEPEND = "com.mapgis.RN.SketchEditor.step_end"
  }

}
