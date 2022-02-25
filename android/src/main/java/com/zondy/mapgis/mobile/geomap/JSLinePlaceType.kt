package com.zondy.mapgis.mobile.geomap

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.geomap.inner.Enumeration
import com.zondy.mapgis.map.LinePlaceType

/**
 * @content 线标注分布类型对象Native功能组件
 * @author fangqi 2021-10-11.
 */
class JSLinePlaceType(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val names = Enumeration.getNames(LinePlaceType::class.java)
    for (i in names.indices) {
      constants[names[i]] = names[i]
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSLinePlaceType"
  }
}
