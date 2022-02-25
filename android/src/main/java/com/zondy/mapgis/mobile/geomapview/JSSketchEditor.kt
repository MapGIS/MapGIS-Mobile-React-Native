package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.zondy.mapgis.geometry.Dot
import com.zondy.mapgis.geometry.GeoAnno
import com.zondy.mapgis.geometry.Geometry
import com.zondy.mapgis.geometry.GeometryType
import com.zondy.mapgis.map.view.sketcheditor.SketchEditor
import com.zondy.mapgis.map.view.sketcheditor.SketchEditor.SketchGeometryChangedEvent
import com.zondy.mapgis.map.view.sketcheditor.SketchEditor.SketchStateChangedListener
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

/**
 * @content 草图编辑器Native功能组件
 * @author fangqi 2021-9-10.
 */
class JSSketchEditor(private val mReactContext: ReactApplicationContext) : ReactContextBaseJavaModule(mReactContext) {
  private var mSketchStateChangedListener: SketchStateChangedListener? = null
  override fun getName(): String {
    return REACT_CLASS
  }

  private fun sendEvent(eventName: String, writableMap: WritableMap?) {
    mReactContext.getJSModule(RCTDeviceEventEmitter::class.java)
      .emit(eventName, writableMap)
  }

  @ReactMethod
  fun addStateChangedListener(sketchEditorId: String?, promise: Promise) {
    try {
      mSketchStateChangedListener = object : SketchStateChangedListener {
        override fun onGeometryChanged(sketchGeometryChangedEvent: SketchGeometryChangedEvent) {
          var eventWritableMap: WritableMap? = null
          if (sketchGeometryChangedEvent != null) {
            // 调用sketchGeometryChangedEvent.getGeometry获取几何对象
            val geometry = sketchGeometryChangedEvent.geometry
            eventWritableMap = getGeometryWritableMap(geometry)

            // 调用sketchGeometryChangedEvent.getSource获取源SketchEditor
            val sketchEditor = sketchGeometryChangedEvent.source
            var sketchEditorId: String? = null
            if (sketchEditor != null) {
              sketchEditorId = addObj(sketchEditor)
            }
            eventWritableMap.putString("ObjId", sketchEditorId)
          }
          sendEvent(GEOMETRYCHANGED, eventWritableMap)
        }

        override fun onVertexSelected(dot: Dot?, dot1: Dot?, dot2: Dot?) {
          val writableMap = Arguments.createMap()
          var dotId: String? = null
          var dotId1: String? = null
          var dotId2: String? = null
          if (dot != null) {
            dotId = addObj(dot)
          }
          if (dot1 != null) {
            dotId1 = addObj(dot1)
          }
          if (dot2 != null) {
            dotId2 = addObj(dot2)
          }
          writableMap.putString("point2DId", dotId)
          writableMap.putString("point2DId1", dotId1)
          writableMap.putString("point2DId2", dotId2)
          sendEvent(VERTEXSELECTED, writableMap)
        }

        override fun onUndoStateChanged(b: Boolean) {
          val writableMap = Arguments.createMap()
          writableMap.putBoolean("undoResult", b)
          sendEvent(UNDOSTATECHANGED, writableMap)
        }

        override fun onRedoStateChanged(b: Boolean) {
          val writableMap = Arguments.createMap()
          writableMap.putBoolean("redoResult", b)
          sendEvent(REDOSTATECHANGED, writableMap)
        }

        override fun onEditStateStateChanged(b: Boolean) {}
      }
      val sketchEditor = getObjByID(sketchEditorId!!) as SketchEditor?
      sketchEditor!!.addStateChangedListener(mSketchStateChangedListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun removeStateChangedListener(sketchEditorId: String?, promise: Promise) {
    try {
      val sketchEditor = getObjByID(sketchEditorId!!) as SketchEditor?
      sketchEditor!!.removeStateChangedListener(mSketchStateChangedListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSSketchEditor"
    private const val GEOMETRYCHANGED = "com.mapgis.RN.SketchEditor.geometry_changed"
    private const val VERTEXSELECTED = "com.mapgis.RN.SketchEditor.vertex_selected"
    private const val UNDOSTATECHANGED = "com.mapgis.RN.SketchEditor.undo_state_changed"
    private const val REDOSTATECHANGED = "com.mapgis.RN.SketchEditor.redo_state_changed"

    /**
     * 根据几何对象获取存储geometryId、geometryType、geometryAnnoType的WritableMap
     *
     * @param geometry 几何对象
     * @return WritableMap
     */
    fun getGeometryWritableMap(geometry: Geometry?): WritableMap {
      var geometryId: String? = null
      var geometryTypeValue = -1
      var geometryAnnoTypeValue = -1
      if (geometry != null) {
        val geometryType = geometry.type
        geometryId = addObj(geometry)
        if (geometryType != null) {
          geometryTypeValue = geometryType.value()
          // 当Geometry为GeoAnno
          if (geometryTypeValue == GeometryType.GeoAnno.value()) {
            val geoAnno = geometry as GeoAnno
            geometryAnnoTypeValue = geoAnno.annType.value()
          }
        }
      }
      val writableMap = Arguments.createMap()
      writableMap.putString("GeometryId", geometryId)
      writableMap.putInt("GeometryType", geometryTypeValue)
      writableMap.putInt("GeometryAnnoType", geometryAnnoTypeValue)
      return writableMap
    }
  }

}
