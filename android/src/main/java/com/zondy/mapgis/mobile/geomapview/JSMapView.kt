package com.zondy.mapgis.mobile.geomapview

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Bitmap.CompressFormat
import android.graphics.PointF
import android.net.Uri
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.ThemedReactContext
import com.zondy.mapgis.geometry.Dot
import com.zondy.mapgis.geometry.Rect
import com.zondy.mapgis.map.Document
import com.zondy.mapgis.map.Map
import com.zondy.mapgis.map.view.mapview.MapPosition
import com.zondy.mapgis.map.view.mapview.MapView
import com.zondy.mapgis.map.view.mapview.MapView.MapViewScreenSnapshotCallback
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID
import java.io.BufferedOutputStream
import java.io.File
import java.io.FileOutputStream
import java.io.IOException

/**
 * @content 地图视图组件
 * @author fangqi 2021-7-16
 */
class JSMapView(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  var m_Context: Context? = null
  var m_mapView: MapView? = null
  var mReactContext: ReactContext

  override fun getName(): String {
    return "JSMapView"
  }

  @ReactMethod
  fun setBackGroundImage(mapViewId: String?, imageId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      var imageBitmap: Bitmap? = null
      if (imageId != null) {
        imageBitmap = getObjByID(imageId) as Bitmap?
      }
      m_mapView!!.setBackGroundImage(imageBitmap)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun loadFromDocumentAsync(mapViewId: String?, docId: String?, indexOfMap: Int, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val doc = getObjByID(docId!!) as Document?
      m_mapView!!.loadFromDocumentAsync(doc, indexOfMap) { b -> promise.resolve(b) }
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun setMapAsync(mapViewId: String?, mapId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val map = getObjByID(mapId!!) as Map?
      m_mapView!!.setMapAsync(map) { b -> promise.resolve(b) }
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun stopCurRequest(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.stopCurRequest { promise.resolve(true) }
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun animatePosition(mapViewId: String?, postionID: String?, duration: Int, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapPosition = getObjByID(postionID!!) as MapPosition?
      m_mapView!!.animatePosition(mapPosition, duration) { b -> promise.resolve(b) }
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun animatePositionByViewPoint(mapViewId: String?, postionID: String?, viewCenterPointID: String?, duration: Int, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapPosition = getObjByID(postionID!!) as MapPosition?
      val viewCenterPoint = getObjByID(viewCenterPointID!!) as PointF?
      m_mapView!!.animatePosition(mapPosition, viewCenterPoint, duration) { b -> promise.resolve(b) }
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  ///////////////////////////////////////////
  //MapTool如何处理？
  @ReactMethod
  fun setMapTool(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapTool = MapViewMapTool(m_mapView!!, mReactContext)
      m_mapView!!.mapTool = mapTool
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  ////////////////////////////////
  @ReactMethod
  fun getScreenSnapshot(mapViewId: String?, path: String, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.getScreenSnapshot(object : MapViewScreenSnapshotCallback {
        override fun onScreenSnapshot(bitmap: Bitmap) {
          val bitmapPath = outputBitmapToLocal(path, "png", bitmap)
          promise.resolve(bitmapPath)
        }

        override fun onScreenSnapshot(left: Int, top: Int, width: Int, height: Int, bitmap: Bitmap) {}
      })
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getScreenSnapshotByParam(mapViewId: String?, path: String, left: Int, top: Int, width: Int, height: Int, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.getScreenSnapshot(left, top, width, height, object : MapViewScreenSnapshotCallback {
        override fun onScreenSnapshot(bitmap: Bitmap) {}
        override fun onScreenSnapshot(left: Int, top: Int, width: Int, height: Int, bitmap: Bitmap) {
          val bitmapPath = outputBitmapToLocal(path, "png", bitmap)
          val map = Arguments.createMap()
          map.putInt("left", left)
          map.putInt("top", top)
          map.putInt("width", width)
          map.putInt("height", height)
          map.putString("bitmapPath", bitmapPath)
          promise.resolve(map)
        }
      })
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getBitmap(mapViewId: String?, dispRangeId: String?, path: String, width: Int, height: Int, type: String, promise: Promise) {
    try {
      val dispRange = getObjByID(dispRangeId!!) as Rect?
      val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
      val result = m_mapView!!.getBitmap(dispRange, bitmap).toInt()
      var bitmapPath = ""
      if (result > 0) {
        bitmapPath = outputBitmapToLocal(path, type, bitmap)
      }
      promise.resolve(bitmapPath)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  /**
   * 将Bitmap输出为File
   *
   * @param path   Bitmap存储的文件夹路径
   * @param type   图片类型
   * @param bitmap 输出的Bitmap
   * @return Bitmap保存的完整路径
   */
  private fun outputBitmapToLocal(path: String, type: String, bitmap: Bitmap?): String {
    var bitmapPath = ""
    return try {
      if (bitmap != null) {
        val fileSuffix = ".$type"
        val dirFile = File(path)
        if (!dirFile.exists()) {
          dirFile.mkdirs()
        }
        val bitmapFile = File.createTempFile(TEMP_FILE_PREFIX, fileSuffix.trim { it <= ' ' }, dirFile)
        val fos = FileOutputStream(bitmapFile)
        val bos = BufferedOutputStream(fos)
        bitmap.compress(CompressFormat.PNG, 100, bos) // 不压缩
        bos.flush()
        fos.close()
        bos.close()
        bitmapPath = Uri.fromFile(bitmapFile).toString()
      }
      bitmapPath
    } catch (e: Exception) {
      e.printStackTrace()
      bitmapPath
    }
  }

  @ReactMethod
  fun getCrossBitmap(mapViewId: String, seg1Array: ReadableArray, seg2Array: ReadableArray, seg3Array: ReadableArray, width: Int, height: Int, quality: Int, type: String?, promise: Promise) {
    try {
      currentActivity!!.runOnUiThread(CrossBitmapThread(mapViewId, seg1Array, seg2Array, seg3Array, width, height, quality, type, promise))
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  internal inner class CrossBitmapThread(private val mapViewId: String, private val seg1Array: ReadableArray, private val seg2Array: ReadableArray, private val seg3Array: ReadableArray, private val width: Int, private val height: Int, private val quality: Int, private val type: String?, private val promise: Promise) : Runnable {
    override fun run() {
      try {
        var imgHeight = height
        var imgWidth = width
        if (mapViewId != "") {
          m_mapView = getObjByID(mapViewId) as MapView?
          imgHeight = m_mapView!!.height
          imgWidth = m_mapView!!.width
        }
        var seg1: Array<Dot?>? = null
        var seg2: Array<Dot?>? = null
        var seg3: Array<Dot?>? = null
        if (seg1Array.size() > 0 && seg2Array.size() > 0 && seg3Array.size() > 0) {
          seg1 = arrayOfNulls(seg1Array.size())
          seg2 = arrayOfNulls(seg2Array.size())
          seg3 = arrayOfNulls(seg3Array.size())
          for (i in 0 until seg1Array.size()) {
            val readable = seg1Array.getMap(i)
            val keyStr: String = readable.getString("ObjId")!!
            seg1[i] = getObjByID(keyStr) as Dot?
          }
          for (j in 0 until seg2Array.size()) {
            val readable = seg1Array.getMap(j)
            val keyStr: String = readable.getString("ObjId")!!
            seg2[j] = getObjByID(keyStr) as Dot?
          }
          for (k in 0 until seg3Array.size()) {
            val readable = seg1Array.getMap(k)
            val keyStr: String = readable.getString("ObjId")!!
            seg3[k] = getObjByID(keyStr) as Dot?
          }
        }
        val bitmap = Bitmap.createBitmap(imgWidth, imgHeight, Bitmap.Config.ARGB_8888)
        val result = m_mapView!!.getCrossBitmap(seg1, seg2, seg3, bitmap).toInt()
        val externalCacheDir = reactApplicationContext.externalCacheDir
        val internalCacheDir = reactApplicationContext.cacheDir
        val cacheDir: File?
        if (externalCacheDir == null && internalCacheDir == null) {
          throw IOException("No cache directory available")
        }
        cacheDir = if (externalCacheDir == null) {
          internalCacheDir
        } else if (internalCacheDir == null) {
          externalCacheDir
        } else {
          if (externalCacheDir.freeSpace > internalCacheDir.freeSpace) externalCacheDir else internalCacheDir
        }
        val suffix = ".png"
        val bitmapFile = File.createTempFile(TEMP_FILE_PREFIX, suffix, cacheDir)
        val compressFormat: CompressFormat
        compressFormat = when (type) {
          "jpeg", "jpg" -> CompressFormat.JPEG
          "webp" -> CompressFormat.WEBP
          "png" -> CompressFormat.PNG
          else -> CompressFormat.PNG
        }
        val fos = FileOutputStream(bitmapFile)
        bitmap.compress(compressFormat, quality, fos)
        fos.flush()
        fos.close()
        val uri = Uri.fromFile(bitmapFile).toString()
        val map = Arguments.createMap()
        map.putInt("result", result)
        map.putString("uri", uri)
        promise.resolve(map)
      } catch (e: Exception) {
        promise.reject(e)
      }
    }

  }

  @ReactMethod
  fun setNorthArrowImage(mapViewId: String?, imageId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      var imageBitmap: Bitmap? = null
      if (imageId != null) {
        imageBitmap = getObjByID(imageId) as Bitmap?
      }
      m_mapView!!.setNorthArrowImage(imageBitmap)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun setZoomControlsEnabled(mapViewId: String?, enabled: Boolean, promise: Promise) {
    currentActivity!!.runOnUiThread {
      try {
        val mapView = getObjByID(mapViewId!!) as MapView?
        mapView!!.isZoomControlsEnabled = enabled
        promise.resolve(true)
      } catch (e: Exception) {
        promise.reject(e)
      }
    }
  }

  @ReactMethod
  fun registerTapListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setTapListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterTapListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setTapListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerLongTapListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setLongTapListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterLongTapListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setLongTapListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerDoubleTapListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setDoubleTapListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterDoubleTapListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setDoubleTapListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerTouchListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setTouchListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterTouchListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setTouchListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerZoomChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setZoomChangedListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterZoomChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setZoomChangedListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerCenterChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setCenterChangedListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterCenterChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setCenterChangedListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerRotateChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setRotateChangedListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterRotateChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setRotateChangedListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerPositionChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setPositionChangedListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterPositionChangedListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setPositionChangedListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerAnimationListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setAnimationListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterAnimationListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setAnimationListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerRefreshListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setRefreshListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterRefreshListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setRefreshListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerMapLoadListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setMapLoadListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterMapLoadListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setMapLoadListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerAnnotationListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      val mapListener = MapListener(m_mapView!!, mReactContext)
      m_mapView!!.setAnnotationListener(mapListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun unregisterAnnotationListener(mapViewId: String?, promise: Promise) {
    try {
      m_mapView = getObjByID(mapViewId!!) as MapView?
      m_mapView!!.setAnnotationListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  companion object {
    private var curMapView: MapView? = null

    /**
     * 手机sdcard路径
     */
    private const val TEMP_FILE_PREFIX = "MapViewImage"

    /**
     * 提供给MapView视图组件用于创建MapView实例的方法。
     *
     * @param reactContext
     * @return {object} MapView
     */
    fun createInstance(reactContext: ThemedReactContext): MapView? {
      curMapView = MapView(reactContext.baseContext)
      return curMapView
    }
  }

  init {
    m_Context = reactContext.applicationContext
    mReactContext = reactContext
  }
}
