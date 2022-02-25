package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.zondy.mapgis.map.view.mapview.MapView
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.N_R_EventSender

/**
 * @content 原生MapView管理类
 * @author fangqi 2021-7-16
 */
class MapViewManager : SimpleViewManager<MapView>() {
  private var mContext: ThemedReactContext? = null
  private var mMapView: MapView? = null
  var n_r_eventSender = N_R_EventSender()
  override fun getName(): String {
    return RN_MAPVIEW_CLASS
  }

  override fun createViewInstance(reactContext: ThemedReactContext): MapView {
    mContext = reactContext
    mMapView = MapView(reactContext)
    val mapViewId = addObj(mMapView)
    n_r_eventSender.putString("mapViewId", mapViewId!!)
    return mMapView!!
  }

  @ReactProp(name = "returnId")
  fun returnId(view: MapView, b: Boolean) {
    //向JS返回MapView的ID
    mContext!!.getJSModule(RCTEventEmitter::class.java).receiveEvent(
      view.id,
      "topChange",
      n_r_eventSender.createSender()
    )
  }

  companion object {
    private const val RN_MAPVIEW_CLASS = "MapviewGetInstance"
  }
}
