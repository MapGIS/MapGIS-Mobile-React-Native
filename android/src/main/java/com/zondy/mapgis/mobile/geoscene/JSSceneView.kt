package com.zondy.mapgis.mobile.geoscene

import android.graphics.Bitmap
import android.net.Uri
import com.facebook.react.bridge.*
import com.zondy.mapgis.android.sceneview.SceneView.SceneViewScreenSnapshotCallback
import com.zondy.mapgis.core.scene.Scene
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID
import java.io.BufferedOutputStream
import java.io.File
import java.io.FileOutputStream

/**
 * @content 三维视图组件
 * @auther fangqi 2021-12-07
 */
class JSSceneView(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val mReactContext: ReactContext
  override fun getName(): String {
    return REACT_CLASS
  }

  /**
   * 设置场景 ，异步方法
   *
   * @param sceneViewId
   * @param sceneId
   * @param promise
   */
  @ReactMethod
  fun setSceneAsync(sceneViewId: String, sceneId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      val scene = getObjByID(sceneId) as Scene
      sceneView.setSceneAsync(scene) { b -> promise.resolve(b) }
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun registerSceneViewCameraListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      val sceneViewListener = SceneViewListener(sceneView, mReactContext)
      sceneView.setSceneViewCameraListener(sceneViewListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun unregisterSceneViewCameraListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.setSceneViewCameraListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun registerSceneRefreshListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      val sceneViewListener = SceneViewListener(sceneView, mReactContext)
      sceneView.setSceneRefreshListener(sceneViewListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun unregisterSceneRefreshListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.setSceneRefreshListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun registerSceneViewGraphicListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      val sceneViewListener = SceneViewListener(sceneView, mReactContext)
      sceneView.setSceneViewGraphicListener(sceneViewListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun unregisterSceneViewGraphicListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.setSceneViewGraphicListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun registerTapListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      val sceneViewListener = SceneViewListener(sceneView, mReactContext)
      sceneView.setTapListener(sceneViewListener)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  @ReactMethod
  fun unregisterTapListener(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.setTapListener(null)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.resolve(e)
    }
  }

  /**
   * 设置场景 ，异步方法
   *
   * @param sceneViewId
   * @param path
   * @param promise
   */
  @ReactMethod
  fun getScreenSnapshot(sceneViewId: String, path: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.getScreenSnapshot(object : SceneViewScreenSnapshotCallback {
        override fun onScreenSnapshot(bitmap: Bitmap) {
          val bitmapPath = outputBitmapToLocal(path, "png", bitmap)
          promise.resolve(bitmapPath)
        }

        override fun onScreenSnapshot(i: Int, i1: Int, i2: Int, i3: Int, bitmap: Bitmap) {}
      })
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getScreenSnapshotByParam(sceneViewId: String, path: String, left: Int, top: Int, width: Int, height: Int, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.getScreenSnapshot(left, top, width, height, object : SceneViewScreenSnapshotCallback {
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

  /**
   * 异步更新场景
   *
   * @param sceneViewId
   * @param promise
   */
  @ReactMethod
  fun updateSceneAsync(sceneViewId: String, promise: Promise) {
    try {
      val sceneView = getObjByID(sceneViewId) as ReactSceneView
      sceneView.updateSceneAsync { promise.resolve(true) }
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
        // 不压缩
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, bos)
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

  companion object {
    private const val REACT_CLASS = "JSSceneView"
    private const val TEMP_FILE_PREFIX = "MapViewImage"
  }

  init {
    mReactContext = reactContext
  }
}
