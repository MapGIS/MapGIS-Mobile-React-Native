package com.zondy.mapgis.mobile.geodatabase

import com.facebook.react.bridge.*
import com.zondy.mapgis.geodatabase.AClsInfo
import com.zondy.mapgis.geodatabase.DataBase
import com.zondy.mapgis.geodatabase.SFClsInfo
import com.zondy.mapgis.geodatabase.XClsType
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

class JSDataBase(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun getXclsInfo(dataBaseId: String?, xClsType: Int, clsID: Int, promise: Promise) {
    try {
      val dataBase = getObjByID(dataBaseId!!) as DataBase?
      val type = XClsType.valueOf(xClsType)
      val xClsInfo = dataBase!!.getXclsInfo(type, clsID)
      val XClsInfoId = addObj(xClsInfo)
      var InfoType = -1 // 不是任何类型
      if (xClsInfo is SFClsInfo) {                // 简单要素类信息
        InfoType = 1
      } else if (xClsInfo is AClsInfo) {         // 注记类信息
        InfoType = 2
      }
      val map = Arguments.createMap()
      map.putString("XClsInfoId", XClsInfoId)
      map.putInt("XClsInfoType", InfoType)
      promise.resolve(map)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSDataBase"
  }
}
