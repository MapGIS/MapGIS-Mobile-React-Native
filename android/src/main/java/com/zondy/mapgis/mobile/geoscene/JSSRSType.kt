package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.core.scene.SRSType

/**
 * @content 空间参考系类型
 * @auther fangqi 2021-11-26.
 */
class JSSRSType(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    constants[SRS_Type_Global] = SRSType.SRS_Type_Global
    constants[SRS_Type_Global_MERCATOR] = SRSType.SRS_Type_Global_MERCATOR
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSSRSType"

    //全球,WGS84,经纬度
    private const val SRS_Type_Global = "SRS_Type_Global"

    //全球,WGS84,WEB墨卡托
    private const val SRS_Type_Global_MERCATOR = "SRS_Type_Global_MERCATOR"
  }
}
