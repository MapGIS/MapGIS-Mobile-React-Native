package com.zondy.mapgis.mobile.original

import android.graphics.PointF
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content 视图对象Native组件
 * @author fangqi 2021-7-18
 */
class JSPointF(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun getX(pointFId: String?, promise: Promise) {
    try {
      val point2D = getObjByID(pointFId!!) as PointF?
      val x = point2D!!.x
      promise.resolve(x)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getY(pointFId: String?, promise: Promise) {
    try {
      val point2D = getObjByID(pointFId!!) as PointF?
      val y = point2D!!.y
      promise.resolve(y)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun setX(pointFId: String?, x: Double, promise: Promise) {
    try {
      val point2D = getObjByID(pointFId!!) as PointF?
      point2D!!.x = x.toFloat()
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun setY(pointFId: String?, y: Double, promise: Promise) {
    try {
      val point2D = getObjByID(pointFId!!) as PointF?
      point2D!!.y = y.toFloat()
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSPointF"
  }
}
