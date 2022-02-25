package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.`object`.Enumeration
import com.zondy.mapgis.android.sceneview.SceneMode

/**
 * @content 场景渲染类型
 * @author fangqi 2021-11-26.
 */
class JSSceneMode(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val names = Enumeration.getNames(SceneMode::class.java)
    for (i in names.indices) {
      constants[names[i]] = names[i]
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSSceneMode"
  }
}
