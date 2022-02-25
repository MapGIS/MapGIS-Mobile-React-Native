package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.`object`.Enumeration
import com.zondy.mapgis.android.sceneview.SunLightingMode

/**
 * @content 光照类型（枚举类）
 * @author fangqi 2021-11-26.
 */
class JSSunLightingMode(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val names = Enumeration.getNames(SunLightingMode::class.java)
    for (i in names.indices) {
      constants[names[i]] = names[i]
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSSunLightingMode"
  }
}
