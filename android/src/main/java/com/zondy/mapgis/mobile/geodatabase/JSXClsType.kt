package com.zondy.mapgis.mobile.geodatabase

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.geodatabase.XClsType

class JSXClsType(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val values = XClsType.values()
    for (i in values.indices) {
      val enumObj = values[i]
      constants[enumObj.name] = enumObj.name
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSXClsType"
  }
}
