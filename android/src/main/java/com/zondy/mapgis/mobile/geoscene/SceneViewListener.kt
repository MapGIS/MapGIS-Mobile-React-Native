package com.zondy.mapgis.mobile.geoscene

import android.graphics.PointF
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.android.graphic.Graphic3DsOverlay
import com.zondy.mapgis.android.sceneview.SceneView
import com.zondy.mapgis.android.sceneview.SceneView.*
import com.zondy.mapgis.geometry.Dot3D
import com.zondy.mapgis.mobile.manager.MGObjManager
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj

/**
 * @content 场景视图监听
 * @auther fangqi 2021-12-07
 */
class SceneViewListener(private val mSceneView: ReactSceneView, private val reactContext: ReactContext) : SceneViewTapListener, SceneViewCameraChangedListener, SceneViewRefreshListener, SceneViewGraphicListener {

  private var mSceneViewId: String? = null

  private fun sendEvent(eventName: String, params: WritableMap) {
    params.putString("ObjId", MGObjManager.getObjID(mSceneView))
    reactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, params)
  }

  override fun sceneViewTap(pointF: PointF) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", pointF.x.toDouble())
    writableMap.putDouble("y", pointF.y.toDouble())
    sendEvent(SINGLE_TAP_EVENT, writableMap)
  }

  override fun SceneCameraChanged(sceneView: SceneView, dot3D: Dot3D) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot3D.x)
    writableMap.putDouble("y", dot3D.y)
    writableMap.putDouble("z", dot3D.z)
    sendEvent(CAMERA_CHANGED_EVENT, writableMap)
  }

  override fun SceneCameraAngleChanged(sceneView: SceneView, headingDeg: Double, pitchDeg: Double, rollDeg: Double) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("headingDeg", headingDeg)
    writableMap.putDouble("pitchDeg", pitchDeg)
    writableMap.putDouble("rollDeg", rollDeg)
    sendEvent(CAMERA_ANGLE_CHANGED_EVENT, writableMap)
  }

  override fun SceneFocalPositionChanged(sceneView: SceneView, dot3D: Dot3D) {
    val writableMap = Arguments.createMap()
    writableMap.putDouble("x", dot3D.x)
    writableMap.putDouble("y", dot3D.y)
    writableMap.putDouble("z", dot3D.z)
    sendEvent(FOCAL_POSITION_CHANGED_EVENT, writableMap)
  }

  override fun sceneViewWillStartRefresh(sceneView: SceneView) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("willStartRefresh", true)
    sendEvent(WILL_START_REFRESH_EVENT, writableMap)
  }

  override fun sceneViewDidFinishRefresh(sceneView: SceneView) {
    val writableMap = Arguments.createMap()
    writableMap.putBoolean("didFinishRefresh", true)
    sendEvent(DID_FINISH_REFRESH_EVENT, writableMap)
  }

  override fun sceneViewHoverEnterGraphic(graphic3DsOverlay: Graphic3DsOverlay, graphicIndex: Long, pointF: PointF) {
    val writableMap = Arguments.createMap()
    writableMap.putString("graphic3DsOverlayId", addObj(graphic3DsOverlay))
    writableMap.putDouble("graphicIndex", graphicIndex.toDouble())
    writableMap.putDouble("x", pointF.x.toDouble())
    writableMap.putDouble("y", pointF.y.toDouble())
    sendEvent(HOVER_ENTER_GRAPHIC_EVENT, writableMap)
  }

  override fun sceneViewHoverLeaveGraphic(graphic3DsOverlay: Graphic3DsOverlay, graphicIndex: Long, pointF: PointF) {
    val writableMap = Arguments.createMap()
    writableMap.putString("graphic3DsOverlayId", addObj(graphic3DsOverlay))
    writableMap.putDouble("graphicIndex", graphicIndex.toDouble())
    writableMap.putDouble("x", pointF.x.toDouble())
    writableMap.putDouble("y", pointF.y.toDouble())
    sendEvent(HOVER_LEAVE_GRAPHIC_EVENT, writableMap)
  }

  override fun sceneViewOnClickGraphic(graphic3DsOverlay: Graphic3DsOverlay, graphicIndex: Long, pointF: PointF) {
    val writableMap = Arguments.createMap()
    writableMap.putString("graphic3DsOverlayId", addObj(graphic3DsOverlay))
    writableMap.putDouble("graphicIndex", graphicIndex.toDouble())
    writableMap.putDouble("x", pointF.x.toDouble())
    writableMap.putDouble("y", pointF.y.toDouble())
    sendEvent(ONCLICK_GRAPHIC_EVENT, writableMap)
  }

  companion object {
    private const val SINGLE_TAP_EVENT = "com.mapgis.RN.SceneView.SingleTapEvent"
    private const val CAMERA_CHANGED_EVENT = "com.mapgis.RN.SceneView.CameraChangedEvent"
    private const val CAMERA_ANGLE_CHANGED_EVENT = "com.mapgis.RN.SceneView.CameraAngleChangedEvent"
    private const val FOCAL_POSITION_CHANGED_EVENT = "com.mapgis.RN.SceneView.FocalPositionChangedEvent"
    private const val WILL_START_REFRESH_EVENT = "com.mapgis.RN.SceneView.WillStartRefreshEvent"
    private const val DID_FINISH_REFRESH_EVENT = "com.mapgis.RN.SceneView.DidFinishRefreshEvent"
    private const val HOVER_ENTER_GRAPHIC_EVENT = "com.mapgis.RN.SceneView.HoverEnterGraphicEvent"
    private const val HOVER_LEAVE_GRAPHIC_EVENT = "com.mapgis.RN.SceneView.HoverLeaveGraphicEvent"
    private const val ONCLICK_GRAPHIC_EVENT = "com.mapgis.RN.SceneView.OnClickGraphicEvent"
  }

  init {
    mSceneViewId = MGObjManager.getObjID(mSceneView)
  }

}
