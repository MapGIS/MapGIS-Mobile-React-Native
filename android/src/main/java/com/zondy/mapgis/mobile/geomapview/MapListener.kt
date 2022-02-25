package com.zondy.mapgis.mobile.geomapview

import android.graphics.PointF
import android.view.MotionEvent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.geometry.Dot
import com.zondy.mapgis.map.view.annotation.Annotation
import com.zondy.mapgis.map.view.annotation.AnnotationView
import com.zondy.mapgis.map.view.mapview.MapPosition
import com.zondy.mapgis.map.view.mapview.MapView
import com.zondy.mapgis.map.view.mapview.MapView.*
import com.zondy.mapgis.mobile.manager.MGObjManager
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj

/**
 * @content 地图监听
 * @author fagnqi 2021-7-19
 */
class MapListener(private val mMapView: MapView, private val reactContext: ReactContext) : MapViewDoubleTapListener, MapViewLongTapListener, MapViewTapListener, MapViewTouchListener, MapViewZoomChangedListener, MapViewAnimationListener, MapViewCenterChangedListener, MapViewRotateChangedListener, MapViewRefreshListener, MapViewMapLoadListener, MapViewPositionChangedListener, MapViewAnnotationListener {

  private var mMapViewId: String? = null

  override fun mapViewTap(pointF: PointF) {
    val dot = mMapView.viewPointToMapPoint(pointF)
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(SINGLE_TAP_EVENT, writableMap)
  }

  override fun mapViewDoubleTap(pointF: PointF): Boolean {
    val tapDot = mMapView.viewPointToMapPoint(pointF)
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", tapDot.x)
    writableMap.putDouble("y", tapDot.y)
    sendEvent(DOUBLE_TAP_EVENT, writableMap)
    return false
  }

  private fun sendEvent(eventName: String, params: WritableMap) {
    params.putString("ObjId", mMapViewId)
    reactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, params)
  }

  override fun mapViewLongTap(pointF: PointF): Boolean {
    val dot = mMapView.viewPointToMapPoint(pointF)
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot.x)
    writableMap.putDouble("y", dot.y)
    sendEvent(LONG_TAP_EVENT, writableMap)
    return false
  }

  override fun mapViewZoomChanged(mapView: MapView, oldResolution: Double, newResolution: Double) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("oldResolution", oldResolution)
    writableMap.putDouble("newResolution", newResolution)
    sendEvent(ZOOMCHANGED_EVENT, writableMap)
  }

  override fun mapViewRotateChanged(mapView: MapView, oldAngle: Float, newAngle: Float) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("oldAngle", oldAngle.toDouble())
    writableMap.putDouble("newAngle", newAngle.toDouble())
    sendEvent(ROTATECHANGED_EVENT, writableMap)
  }

  override fun mapViewCenterChanged(mapView: MapView, oldCenter: Dot, newCenter: Dot) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("oldCenterX", oldCenter.x)
    writableMap.putDouble("oldCenterY", oldCenter.y)
    writableMap.putDouble("newCenterX", newCenter.x)
    writableMap.putDouble("newCenterY", newCenter.y)
    sendEvent(CENTERCHANGED_EVENT, writableMap)
  }

  override fun mapViewWillStartLoadingMap(mapView: MapView, strDocPath: String) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("StartLoadingMap", true)
    sendEvent(LOADINGMAP_LISTENER_START, writableMap)
  }

  override fun mapViewDidFinishLoadingMap(mapView: MapView, strDocPath: String) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("DidFinishLoadingMap", true)
    writableMap.putString("strDocPath", strDocPath)
    sendEvent(LOADINGMAP_LISTENER_FINISH, writableMap)
  }

  override fun mapViewDidFailLoadingMap(mapView: MapView, strDocPath: String) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("DidFailLoadingMap", true)
    sendEvent(LOADINGMAP_LISTENER_FAIL, writableMap)
  }

  override fun mapViewWillStartRefresh(mapView: MapView) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("StartRefresh", true)
    sendEvent(REFRESH_LISTENER, writableMap)
  }

  override fun mapViewDidFinishRefresh(mapView: MapView) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("DidFinishRefresh", true)
    sendEvent(REFRESH_LISTENER, writableMap)
  }

  override fun mapViewAnimationStart(mapView: MapView, animationType: Int) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("animationType", animationType.toDouble())
    sendEvent(ANIMATION_LISTENER, writableMap)
  }

  override fun mapViewAnimationFinish(mapView: MapView, animationType: Int, normalFinish: Boolean) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("animationType", animationType.toDouble())
    writableMap.putBoolean("normalFinish", normalFinish)
    sendEvent(ANIMATION_LISTENER, writableMap)
  }

  override fun mapViewTouch(motionEvent: MotionEvent): Boolean {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", motionEvent.x.toDouble())
    writableMap.putDouble("y", motionEvent.y.toDouble())
    sendEvent(TOUCH_EVENT, writableMap)
    return false
  }

  override fun mapViewPositionChanged(oldMapPosition: MapPosition, newMapPosition: MapPosition) {
    val writableMap = Arguments.createMap()
    val oldMapPositionId = addObj(oldMapPosition)
    val newMapPositionId = addObj(newMapPosition)
    val map = Arguments.createMap()
    map.putString("oldMapPositionId", oldMapPositionId)
    map.putString("newMapPositionId", newMapPositionId)
    sendEvent(POSITIONCHANGED_LISTENER, writableMap)
  }

  override fun mapViewClickAnnotation(mapView: MapView, annotation: Annotation) {
    val writableMap = Arguments.createMap()
    val annotationId = addObj(annotation)
    val map = Arguments.createMap()
    map.putString("AnnotationId", annotationId)
    sendEvent(ANNOTATION_LISTENER_CLICK_ANN, writableMap)
  }

  override fun mapViewWillShowAnnotationView(mapView: MapView, annotationView: AnnotationView): Boolean {
    val writableMap = Arguments.createMap()
    val annotationViewId = addObj(annotationView)
    val map = Arguments.createMap()
    map.putString("AnnotationViewId", annotationViewId)
    sendEvent(ANNOTATION_LISTENER_SHOW_ANNVIEW, writableMap)
    return false
  }

  override fun mapViewWillHideAnnotationView(mapView: MapView, annotationView: AnnotationView): Boolean {
    val writableMap = Arguments.createMap()
    val annotationViewId = addObj(annotationView)
    val map = Arguments.createMap()
    map.putString("AnnotationViewId", annotationViewId)
    sendEvent(ANNOTATION_LISTENER_HIDE_ANNVIEW, writableMap)
    return false
  }

  override fun mapViewViewForAnnotation(mapView: MapView, annotation: Annotation): AnnotationView? {
    val writableMap = Arguments.createMap()
    val annotationId = addObj(annotation)
    val map = Arguments.createMap()
    map.putString("AnnotationId", annotationId)
    sendEvent(ANNOTATION_LISTENER_VIEW_BYANN, writableMap)
    return null
  }

  override fun mapViewClickAnnotationView(mapView: MapView, annotationView: AnnotationView) {
    val writableMap = Arguments.createMap()
    val annotationViewId = addObj(annotationView)
    val map = Arguments.createMap()
    map.putString("AnnotationViewId", annotationViewId)
    sendEvent(ANNOTATION_LISTENER_CLICK_ANNVIEW, writableMap)
  }

  companion object {
    private const val DOUBLE_TAP_EVENT = "com.mapgis.RN.Mapview.double_tap_event"
    private const val SINGLE_TAP_EVENT = "com.mapgis.RN.Mapview.single_tap_event"
    private const val LONG_TAP_EVENT = "com.mapgis.RN.Mapview.long_tap_event"
    private const val TOUCH_EVENT = "com.mapgis.RN.Mapview.touch_event"
    private const val ZOOMCHANGED_EVENT = "com.mapgis.RN.Mapview.zoomchanged_event"
    private const val ROTATECHANGED_EVENT = "com.mapgis.RN.Mapview.rotatechanged_event"
    private const val CENTERCHANGED_EVENT = "com.mapgis.RN.Mapview.centerchanged_event"
    private const val ANIMATION_LISTENER = "com.mapgis.RN.Mapview.AnimationListener"
    private const val REFRESH_LISTENER = "com.mapgis.RN.Mapview.RefreshListener"
    private const val LOADINGMAP_LISTENER_START = "com.mapgis.RN.Mapview.LoadMapListener_Start"
    private const val LOADINGMAP_LISTENER_FINISH = "com.mapgis.RN.Mapview.LoadMapListener_Finish"
    private const val LOADINGMAP_LISTENER_FAIL = "com.mapgis.RN.Mapview.LoadMapListener_Fail"
    private const val POSITIONCHANGED_LISTENER = "com.mapgis.RN.Mapview.PositionChangedListener"
    private const val ANNOTATION_LISTENER_CLICK_ANN = "com.mapgis.RN.Mapview.AnnotationListenerA_ClickAnn"
    private const val ANNOTATION_LISTENER_SHOW_ANNVIEW = "com.mapgis.RN.Mapview.AnnotationListenerA_ShowAnnView"
    private const val ANNOTATION_LISTENER_HIDE_ANNVIEW = "com.mapgis.RN.Mapview.AnnotationListenerA_HideAnnView"
    private const val ANNOTATION_LISTENER_VIEW_BYANN = "com.mapgis.RN.Mapview.AnnotationListenerA_ViewByAnn"
    private const val ANNOTATION_LISTENER_CLICK_ANNVIEW = "com.mapgis.RN.Mapview.AnnotationListenerA_ClickAnnView"
  }

  init {
    mMapViewId = MGObjManager.getObjID(mMapView)
  }

}
