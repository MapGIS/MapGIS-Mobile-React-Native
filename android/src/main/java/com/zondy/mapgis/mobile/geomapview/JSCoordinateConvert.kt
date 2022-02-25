package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.bridge.*
import com.zondy.mapgis.geometry.Dot
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID
import com.zondy.mapgis.utils.CoordinateConvert
import com.zondy.mapgis.utils.CoordinateConvert.ConvertCallback

/**
 * 坐标转换类Native功能组件
 * Created by xiaoying on 2019/9/11.
 */
class JSCoordinateConvert(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun convertAsync(coordinateConvertId: String?, dotId: String?, promise: Promise) {
    try {
      val coordinateConvert = getObjByID(coordinateConvertId!!) as CoordinateConvert?
      val callback: ConvertCallback = object : ConvertCallback {
        override fun convertFailed(s: String) {
          val writableMap = Arguments.createMap()
          writableMap.putBoolean("isSuccess", false)
          writableMap.putString("result", s)
          promise.resolve(writableMap)
        }

        override fun convertSuccesss(dot: Dot) {
          val writableMap = Arguments.createMap()
          var point2DId: String? = null
          if (dot != null) {
            point2DId = addObj(dot)
          }
          writableMap.putBoolean("isSuccess", true)
          writableMap.putString("result", point2DId)
          promise.resolve(writableMap)
        }
      }
      val dot = getObjByID(dotId!!) as Dot?
      coordinateConvert!!.convertAsync(dot, callback)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSCoordinateConvert"
  }
}
