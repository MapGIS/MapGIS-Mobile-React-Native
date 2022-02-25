package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.zondy.mapgis.internal.map.view.sketcheditor.MeasureResultContentWillChangeListenerDefault
import com.zondy.mapgis.map.view.sketcheditor.MeasureResultContentWillChangeListener
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import java.text.DecimalFormat

/**
 * Created by xiaoying on 2020/1/13.
 */
class JSMeasureContentWillChangeListener(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  private val mFormatDigit = "###0.00"
  private var mIsShowDistanceUnit = true // 是否显示距离单位
  private var mIsShowAreaUnit = true // 是否显示面积单位
  private var mIsAutoChangeDistanceUnit = true // 是否自动改变距离单位
  private var mIsAutoChangeAreaUnit = true // 是否自动改变面积单位
  private var mDistanceUnitAndScale = "米*1" // 距离单位名称_单位进制（相对于米）
  private var mAreaUnitAndScale = "平方米*1" // 面积单位名称_单位进制（相对于平方米）

  override fun getName(): String {
    return REACT_NAME
  }

  @ReactMethod
  fun createObj(promise: Promise) {
    try {
      val measureListenerId = addObj(this)
      promise.resolve(measureListenerId)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun setIsShowDistanceUnit(measureOptionListenerId: String?, isShowDistanceUnit: Boolean, promise: Promise) {
    try {
      mIsShowDistanceUnit = isShowDistanceUnit
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getIsShowDistanceUnit(measureOptionListenerId: String?, promise: Promise) {
    try {
      promise.resolve(mIsShowDistanceUnit)
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  @ReactMethod
  fun setIsShowAreaUnit(measureOptionListenerId: String?, isShowAreaUnit: Boolean, promise: Promise) {
    try {
      mIsShowAreaUnit = isShowAreaUnit
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getIsShowAreaUnit(measureOptionListenerId: String?, promise: Promise) {
    try {
      promise.resolve(mIsShowAreaUnit)
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  @ReactMethod
  fun setIsAutoChangeDistanceUnit(measureOptionListenerId: String?, isAutoChangeDistanceUnit: Boolean, promise: Promise) {
    try {
      mIsAutoChangeDistanceUnit = isAutoChangeDistanceUnit
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getIsAutoChangeDistanceUnit(measureOptionListenerId: String?, promise: Promise) {
    try {
      promise.resolve(mIsAutoChangeDistanceUnit)
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  @ReactMethod
  fun setIsAutoChangeAreaUnit(measureOptionListenerId: String?, isAutoChangeAreaUnit: Boolean, promise: Promise) {
    try {
      mIsAutoChangeAreaUnit = isAutoChangeAreaUnit
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getIsAutoChangeAreaUnit(measureOptionListenerId: String?, promise: Promise) {
    try {
      promise.resolve(mIsAutoChangeAreaUnit)
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  @ReactMethod
  fun setDistanceUnitAndScale(measureOptionListenerId: String?, distanceUnitAndScale: String, promise: Promise) {
    try {
      mDistanceUnitAndScale = distanceUnitAndScale
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getDistanceUnitAndScale(measureOptionListenerId: String?, promise: Promise) {
    try {
      promise.resolve(mDistanceUnitAndScale)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun setAreaUnitAndScale(measureOptionListenerId: String?, areaUnitAndScale: String, promise: Promise) {
    try {
      mAreaUnitAndScale = areaUnitAndScale
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getAreaUnitAndScale(measureOptionListenerId: String?, promise: Promise) {
    try {
      promise.resolve(mAreaUnitAndScale)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  var measureResultContentWillChangeListener: MeasureResultContentWillChangeListener = object : MeasureResultContentWillChangeListener {
    override fun onDistanceContentWillChange(distance: Double): String {
      return if (mIsAutoChangeDistanceUnit) {
        val measureResultContentWillChangeListenerDefault = MeasureResultContentWillChangeListenerDefault()
        measureResultContentWillChangeListenerDefault.onDistanceContentWillChange(distance)
      } else {
        formatMeasureDistance(distance)
      }
    }

    override fun onAreaContentWillChange(area: Double): String {
      return if (mIsAutoChangeAreaUnit) {
        val measureResultContentWillChangeListenerDefault = MeasureResultContentWillChangeListenerDefault()
        measureResultContentWillChangeListenerDefault.onAreaContentWillChange(area)
      } else {
        formatMeasureArea(area)
      }
    }
  }

  /**
   * 转换原始的距离
   *
   * @param distance
   * @return
   */
  private fun formatMeasureDistance(distance: Double): String {
    var desValue = distance.toString()
    var unitName = "米"
    var unitScale = 1.0
    if (isValidUnitNameAndScale(mDistanceUnitAndScale)) {
      val str = mDistanceUnitAndScale.split("\\*".toRegex()).toTypedArray()
      if (str.size > 1) {
        unitName = str[0].trim { it <= ' ' }
        unitScale = str[1].trim { it <= ' ' }.toDouble()
      }
    }
    desValue = decimalFormatValue(distance * unitScale)

    // 显示单位
    if (mIsShowDistanceUnit) {
      desValue = desValue + unitName
    }
    return desValue
  }

  /**
   * 转换原始的面积
   *
   * @param area
   * @return
   */
  private fun formatMeasureArea(area: Double): String {
    var desValue = area.toString()
    var unitScale = 1.0
    var unitName = "平方米"
    if (isValidUnitNameAndScale(mAreaUnitAndScale)) {
      val str = mAreaUnitAndScale.split("\\*".toRegex()).toTypedArray()
      if (str.size > 1) {
        unitName = str[0].trim { it <= ' ' }
        unitScale = str[1].trim { it <= ' ' }.toDouble()
      }
    }
    desValue = decimalFormatValue(area * unitScale)

    // 显示单位
    if (mIsShowAreaUnit) {
      desValue = desValue + unitName
    }
    return desValue
  }

  /**
   * 判断单位及进制字符串是否有效
   *
   * @param unitNameAndScale 单位及进制
   * @return {Boolean}
   */
  private fun isValidUnitNameAndScale(unitNameAndScale: String?): Boolean {
    var isValid = false
    if (unitNameAndScale != null && !unitNameAndScale.isEmpty() && unitNameAndScale.contains("*")) {
      isValid = true
    }
    return isValid
  }

  /**
   * 格式化数值，只保留小数点后两位
   *
   * @param value
   * @return
   */
  private fun decimalFormatValue(value: Double): String {
    val decimalFormat = DecimalFormat(mFormatDigit)
    return decimalFormat.format(value)
  }

  companion object {
    private const val REACT_NAME = "JSMeasureContentWillChangeListener"
  }
}
