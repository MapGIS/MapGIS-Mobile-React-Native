package com.zondy.mapgis.mobile.geodatabase

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.geodatabase.event.ProgressStatus

/**
 * @content 子步骤开始事件结果
 * @author fangqi 2021-11-16
 */
class JSProgressStatus(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    val values = ProgressStatus.values()
    for (i in values.indices) {
      val enumObj = values[i]
      constants[enumObj.name] = enumObj.name
    }
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSProgressStatus"
  }
}
