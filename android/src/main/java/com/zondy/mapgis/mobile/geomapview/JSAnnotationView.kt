package com.zondy.mapgis.mobile.geomapview

import com.facebook.react.bridge.*
import com.zondy.mapgis.map.view.annotation.Annotation
import com.zondy.mapgis.map.view.annotation.AnnotationView
import com.zondy.mapgis.map.view.mapview.MapView
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID

class JSAnnotationView(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun createObj(mapViewId: String?, annotationId: String?, promise: Promise) {
    try {
      val context = (getObjByID(mapViewId!!) as MapView?)!!.context
      val annotation = getObjByID(annotationId!!) as Annotation?
      val annotationView = AnnotationView(annotation, context)
      val annotationViewId = addObj(annotationView)
      val map = Arguments.createMap()
      map.putString("ObjId", annotationViewId)
      promise.resolve(map)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private const val REACT_CLASS = "JSAnnotationView"
  }
}
