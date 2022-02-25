package com.zondy.mapgis.mobile.geomap

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.zondy.mapgis.map.ImageLayer
import com.zondy.mapgis.map.event.IImageLayerPrefetchListener
import com.zondy.mapgis.map.event.TilePrefetchListener
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content 服务图层Native对象功能组件
 * @author fangqi 2021-7-20
 */
class JSImageLayer(context: ReactApplicationContext?) : ReactContextBaseJavaModule(context) {
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun registerTilePreFetchListener(serverLayerId: String?, promise: Promise) {
    try {
      val serverLayer = getObjByID(serverLayerId!!) as ImageLayer?
      val layerTilePreFetchListener: IImageLayerPrefetchListener = TilePrefetchListener()
      serverLayer!!.setTilePreFetchListener(layerTilePreFetchListener)
      promise.resolve(1)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun removeTilePreFetchListener(serverLayerId: String?, promise: Promise) {
    try {
      val serverLayer = getObjByID(serverLayerId!!) as ImageLayer?
      serverLayer!!.setTilePreFetchListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSImageLayer"
  }

}
