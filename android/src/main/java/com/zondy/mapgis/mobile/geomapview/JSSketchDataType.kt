package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.`object`.Enumeration
import com.zondy.mapgis.map.view.sketcheditor.SketchDataType

/**
 * @content 草图数据类型Native功能组件
 * @author fangqi 2021-9-10.
 */
class JSSketchDataType(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val names = Enumeration.getNames(SketchDataType::class.java)
    for (i in names.indices) {
      constants[names[i]] = names[i]
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSSketchDataType"
  }
}
