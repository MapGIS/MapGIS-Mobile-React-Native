package com.zondy.mapgis.mobile.geoobjects

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.geodatabase.convert.ConvertOptionType

/**
 * @content 设置数据转换选项类型
 * @author fangqi 2021-11-03
 */
class JSConvertOptionType(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val values = ConvertOptionType.values()
    for (i in values.indices) {
      val enumObj = values[i]
      constants[enumObj.name] = enumObj.name
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSConvertOptionType"
  }
}
