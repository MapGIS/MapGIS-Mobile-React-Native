package com.zondy.mapgis.mobile.geoscene

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.N_R_EventSender

/**
 * @content 原生SceneView管理类
 * @author fangqi 2021-12-10
 */
class SceneViewManager : SimpleViewManager<ReactSceneView>() {
  private var mContext: ThemedReactContext? = null
  private var sceneView: ReactSceneView? = null
  var n_r_eventSender = N_R_EventSender()
  override fun getName(): String {
    return SCENE_VIEW_MANAGER
  }

  override fun createViewInstance(reactContext: ThemedReactContext): ReactSceneView {
    mContext = reactContext
    sceneView = ReactSceneView(reactContext)
    val sceneViewID = addObj(sceneView)
    n_r_eventSender.putString("sceneViewId", sceneViewID!!)
    return sceneView!!
  }

  @ReactProp(name = "returnId")
  fun returnId(view: ReactSceneView, b: Boolean) {
    //向JS返回SceneView的ID
    mContext!!.getJSModule(RCTEventEmitter::class.java).receiveEvent(
      view.id,
      "topChange",
      n_r_eventSender.createSender()
    )
  }

  companion object {
    private const val SCENE_VIEW_MANAGER = "SceneViewManager"
  }
}
