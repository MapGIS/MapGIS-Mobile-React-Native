package com.zondy.mapgis.mobile.geomapview

import android.graphics.PointF
import android.view.MotionEvent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.map.view.mapview.MapTool
import com.zondy.mapgis.map.view.mapview.MapView
import com.zondy.mapgis.mobile.manager.MGObjManager

class MapViewMapTool(private val mMapView: MapView, private val reactContext: ReactContext) : MapTool {

  private var mMapViewId: String? = null

  private fun sendEvent(eventName: String, params: WritableMap) {
    params.putString("ObjId", mMapViewId)
    reactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, params)
  }

  override fun panStateBegan(motionEvent: MotionEvent, mapView: MapView): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(PAN_BEGAN_EVENT, writableMap)
    return false
  }

  override fun panStateChanged(motionEvent: MotionEvent, mapView: MapView): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(PAN_CHANGED_EVENT, writableMap)
    return false
  }

  override fun panStateEnded(motionEvent: MotionEvent, mapView: MapView, velocityX: Float, velocityY: Float): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    writableMap.putDouble("scale", velocityX.toDouble())
    writableMap.putDouble("angle", velocityY.toDouble())
    sendEvent(PAN_END_EVENT, writableMap)
    return false
  }

  override fun zoomAndRotateStateBegan(motionEvent: MotionEvent, mapView: MapView): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(ZOOM_ROTATE_BEGAM_EVENT, writableMap)
    return false
  }

  override fun zoomAndRotateStateChanged(motionEvent: MotionEvent, mapView: MapView, scale: Float, angle: Float): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    writableMap.putDouble("scale", scale.toDouble())
    writableMap.putDouble("angle", angle.toDouble())
    sendEvent(ZOOM_ROTATE_CHANGED_EVENT, writableMap)
    return false
  }

  override fun zoomAndRotateStateEnded(motionEvent: MotionEvent, mapView: MapView, scale: Float, angle: Float): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    writableMap.putDouble("scale", scale.toDouble())
    writableMap.putDouble("angle", angle.toDouble())
    sendEvent(ZOOM_ROTATE_END_EVENT, writableMap)
    return false
  }

  override fun longTap(motionEvent: MotionEvent, mapView: MapView): Boolean {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(LONG_TAP_EVENT, writableMap)
    return false
  }

  override fun tap(motionEvent: MotionEvent, mapView: MapView) {
    val dot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(SINGLE_TAP_EVENT, writableMap)
  }

  override fun doubleTap(motionEvent: MotionEvent, mapView: MapView): Boolean {
    val tapDot = mMapView.viewPointToMapPoint(PointF(motionEvent.x, motionEvent.y))
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", tapDot.x)
    writableMap.putDouble("y", tapDot.y)
    sendEvent(DOUBLE_TAP_EVENT, writableMap)
    return false
  }

  companion object {
    private const val DOUBLE_TAP_EVENT = "com.mapgis.RN.Mapview.double_tap_event"
    private const val SINGLE_TAP_EVENT = "com.mapgis.RN.Mapview.single_tap_event"
    private const val LONG_TAP_EVENT = "com.mapgis.RN.Mapview.long_tap_event"
    private const val PAN_BEGAN_EVENT = "com.mapgis.RN.Mapview.panStateBegan_event"
    private const val PAN_CHANGED_EVENT = "com.mapgis.RN.Mapview.panStateChanged_event"
    private const val PAN_END_EVENT = "com.mapgis.RN.Mapview.panStateEnded_event"
    private const val ZOOM_ROTATE_BEGAM_EVENT = "com.mapgis.RN.Mapview.zoomAndRotateStateBegan_event"
    private const val ZOOM_ROTATE_CHANGED_EVENT = "com.mapgis.RN.Mapview.zoomAndRotateStateChanged_event"
    private const val ZOOM_ROTATE_END_EVENT = "com.mapgis.RN.Mapview.zoomAndRotateStateEnded_event"
  }

  init {
    mMapViewId = MGObjManager.getObjID(mMapView)
  }

}
