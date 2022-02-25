package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.zondy.mapgis.map.view.sketcheditor.MeasureOption
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content 量算参数选项类
 * @author fangqi 2021-9-28.
 */
class JSMeasureOption(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  private var mJSMeasureContentWillChangeListenerId: String? = null // 最初的自动改变单位的监听

  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun setContentWillChangeListener(measureOptionId: String?, contentWillChangeListenerId: String?, promise: Promise) {
    try {
      val measureOption = getObjByID(measureOptionId!!) as MeasureOption?
      mJSMeasureContentWillChangeListenerId = contentWillChangeListenerId
      val jsMeasureContentWillChangeListener = getObjByID(contentWillChangeListenerId!!) as JSMeasureContentWillChangeListener?
      val measureResultContentWillChangeListener = jsMeasureContentWillChangeListener!!.measureResultContentWillChangeListener
      measureOption!!.contentWillChangeListener = measureResultContentWillChangeListener
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getMeasureContentWillChangeListener(measureOptionId: String?, promise: Promise) {
    try {
      val measureOption = getObjByID(measureOptionId!!) as MeasureOption?
      promise.resolve(mJSMeasureContentWillChangeListenerId)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSMeasureOption"
  }
}
