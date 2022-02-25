package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.zondy.mapgis.core.scene.DriverType

/**
 * @content 驱动类型
 * @author fangqi 2021-11-26.
 */
class JSDriverType(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  override fun getConstants(): Map<String, Any>? {
    val constants: MutableMap<String, Any> = HashMap()
    constants[Driver_Type_GDAL] = DriverType.Driver_Type_GDAL
    constants[Driver_Type_MapGIS_3D] = DriverType.Driver_Type_MapGIS_3D
    constants[Driver_Type_MapGIS_Map] = DriverType.Driver_Type_MapGIS_Map
    constants[Driver_Type_Model_MapGIS_M3D] = DriverType.Driver_Type_Model_MapGIS_M3D
    constants[Driver_Type_Model_MapGIS_OP] = DriverType.Driver_Type_Model_MapGIS_OP
    constants[Driver_Type_OGR] = DriverType.Driver_Type_OGR
    constants[Driver_Type_TMS] = DriverType.Driver_Type_TMS
    constants[Driver_Type_WFS] = DriverType.Driver_Type_WFS
    constants[Driver_Type_WMS] = DriverType.Driver_Type_WMS
    constants[Driver_Type_XYZ] = DriverType.Driver_Type_XYZ
    return constants
  }

  companion object {
    private const val REACT_CLASS = "JSDriverType"

    //GDAL数据驱动.用于离线栅格数据的读取
    private const val Driver_Type_GDAL = "Driver_Type_GDAL"

    //MapGIS三维服务驱动
    private const val Driver_Type_MapGIS_3D = "Driver_Type_MapGIS_3D"

    //MapGIS地图服务驱动
    private const val Driver_Type_MapGIS_Map = "Driver_Type_MapGIS_Map"

    //MapGIS M3D模型缓存驱动
    private const val Driver_Type_Model_MapGIS_M3D = "Driver_Type_Model_MapGIS_M3D"

    //MapGIS倾斜摄影数据驱动
    private const val Driver_Type_Model_MapGIS_OP = "Driver_Type_Model_MapGIS_OP"

    //OGR数据驱动.用于离线矢量数据的读取
    private const val Driver_Type_OGR = "Driver_Type_OGR"

    //TMS服务驱动
    private const val Driver_Type_TMS = "Driver_Type_TMS"

    //OGC WFS服务驱动
    private const val Driver_Type_WFS = "Driver_Type_WFS"

    //OGC WMS服务驱动
    private const val Driver_Type_WMS = "Driver_Type_WMS"

    //标准Web墨卡托地图服务驱动.如google、百度等
    private const val Driver_Type_XYZ = "Driver_Type_XYZ"
  }
}
