package com.zondy.mapgis.mobile.geomap

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.map.DocumentItemType

/**
 * 文档项类型
 */
class JSDocumentItemType(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val values = DocumentItemType.values()
    for (i in values.indices) {
      val enumObj = values[i]
      constants[enumObj.name] = enumObj.name
    }
    return constants
  }

  override fun getName(): String {
    return REACT_CLASS
  }

  companion object {
    private const val REACT_CLASS = "JSDocumentItemType"
  }
}
