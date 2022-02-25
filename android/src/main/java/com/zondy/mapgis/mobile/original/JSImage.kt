package com.zondy.mapgis.mobile.original

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.PixelFormat
import android.graphics.drawable.BitmapDrawable
import android.graphics.drawable.NinePatchDrawable
import android.net.Uri
import android.os.StrictMode
import android.os.StrictMode.ThreadPolicy
import android.text.TextUtils
import com.facebook.common.util.UriUtil
import com.facebook.react.bridge.*
import com.zondy.mapgis.mobile.manager.MGObjManager.addObj
import com.zondy.mapgis.mobile.manager.MGObjManager.getObjByID
import sun.misc.BASE64Decoder
import java.io.File
import java.io.IOException
import java.net.URL

/**
 * @content 图片对象Native组件
 * @author fangqi 2021-7-20
 */
class JSImage(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
  var m_Context: Context? = null
  private val mResourceDrawableIdMap: MutableMap<String, Int?> = HashMap()
  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactMethod
  fun createObj(promise: Promise) {
    try {
      val bitmap = getBitmapFromByte("temp".toByteArray())
      val imageId = addObj(bitmap)
      val map = Arguments.createMap()
      map.putString("ObjId", imageId)
      promise.resolve(map)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun createObjByProperty(base64Url: String?, promise: Promise) {
    try {
      val bitmap = getBitmapFromByte(base64UrlToImage(base64Url))
      val imageId = addObj(bitmap)
      val map = Arguments.createMap()
      map.putString("ObjId", imageId)
      promise.resolve(map)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun createObjByLocalPath(path: String?, promise: Promise) {
    try {
      val f = File(path)
      var bitmap: Bitmap? = null
      var imageId: String? = null
      if (f.exists()) {
        bitmap = BitmapFactory.decodeFile(path)
        if (bitmap != null) {
          imageId = addObj(bitmap)
        }
      }
      val map = Arguments.createMap()
      map.putString("ObjId", imageId)
      promise.resolve(map)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  fun loadImage(iconUri: String?, isDebug: Boolean): Bitmap? {
    if (TextUtils.isEmpty(iconUri)) {
      return null
    }
    return if (isDebug) {
      loadIcon(iconUri)
    } else {
      val uri = Uri.parse(iconUri)
      if (isLocalFile(uri)) {
        // 本地文件
        loadFile(uri)
      } else {
        loadResource(iconUri)
      }
    }
  }

  fun loadIcon(iconDevUri: String?): Bitmap? {
    return try {
      val threadPolicy = StrictMode.getThreadPolicy()
      StrictMode.setThreadPolicy(ThreadPolicy.Builder().permitNetwork().build())
      val drawable = tryLoadIcon(iconDevUri)
      StrictMode.setThreadPolicy(threadPolicy)
      drawable
    } catch (e: Exception) {
      null
    }
  }

  /**
   * 因为是开发者模式，图片资源的uri都是从package server加载的图片，所以uri是以http://开头
   * 所以我们需要用URL获取流，继而转成bitmap
   * @param iconDevUri
   * iconDevUri: http://10.0.3.2:8081/assets/Images/icon.jpg?platform=android&hash=c951e2c8cf473f91811ea292c6cd364c
   * @return
   * @throws IOException
   */
  @Throws(IOException::class)
  private fun tryLoadIcon(iconDevUri: String?): Bitmap {
    val url = URL(iconDevUri)
    //        BitmapDrawable bitmapDrawable = new BitmapDrawable(MainApplication.instance.getResources(), bitmap);
//        Log.e("JsDevImageLoader", "bitmap drawable width：" + bitmapDrawable.getIntrinsicWidth());
    return BitmapFactory.decodeStream(url.openStream())
  }

  /**
   * 判断图片是否存在手机本地目录
   * @param uri
   * @return
   */
  private fun isLocalFile(uri: Uri): Boolean {
    return FILE_SCHEME == uri.scheme
  }

  /**
   * 加载手机本地目录图片
   * @param uri
   * @return
   */
  private fun loadFile(uri: Uri): Bitmap {
    // return new BitmapDrawable(MainApplication.instance.getResources(), bitmap);
    return BitmapFactory.decodeFile(uri.path)
  }

  /**
   * 加载drawable目录下的图片
   * @param iconUri
   * @return
   */
  private fun loadResource(iconUri: String?): Bitmap? {
    return getResourceDrawable(m_Context, iconUri)
  }

  /**
   * 获取 drawable资源 id
   * @param context
   * @param name
   * @return
   */
  fun getResourceDrawableId(context: Context?, name: String?): Int {
    var name = name
    if (name == null || name.isEmpty()) {
      return 0
    }
    name = name.toLowerCase().replace("-", "_")
    if (mResourceDrawableIdMap.containsKey(name)) {
      return mResourceDrawableIdMap[name]!!
    }
    val id = context!!.resources.getIdentifier(
      name,
      "drawable",
      context.packageName)
    mResourceDrawableIdMap[name] = id
    return id
  }

  /**
   * 根据 drawable 资源 id 获取 Drawable
   * @param context
   * @param name
   * @return
   */
  fun getResourceDrawable(context: Context?, name: String?): Bitmap? {
    val resId = getResourceDrawableId(context, name)
    if (resId > 0) {
      val drawable = context!!.resources.getDrawable(resId)
      return if (drawable is BitmapDrawable) {
        drawable.bitmap
      } else if (drawable is NinePatchDrawable) {
        val bitmap = Bitmap
          .createBitmap(
            drawable.getIntrinsicWidth(),
            drawable.getIntrinsicHeight(),
            if (drawable.getOpacity() != PixelFormat.OPAQUE) Bitmap.Config.ARGB_8888 else Bitmap.Config.RGB_565)
        val canvas = Canvas(bitmap)
        drawable.setBounds(0, 0, drawable.getIntrinsicWidth(),
          drawable.getIntrinsicHeight())
        drawable.draw(canvas)
        bitmap
      } else {
        null
      }
    }
    return null
  }

  /**
   * 获取drawable资源Uri
   * @param context
   * @param name
   * @return
   */
  fun getResourceDrawableUri(context: Context?, name: String?): Uri {
    val resId = getResourceDrawableId(context, name)
    return if (resId > 0) Uri.Builder()
      .scheme(UriUtil.LOCAL_RESOURCE_SCHEME)
      .path(resId.toString())
      .build() else Uri.EMPTY
  }

  @ReactMethod
  fun setBase64Url(imageId: String?, base64Url: String?, promise: Promise) {
    try {
      var bitmap = getObjByID(imageId!!) as Bitmap?
      bitmap = getBitmapFromByte(base64UrlToImage(base64Url))
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getWidth(imageId: String?, promise: Promise) {
    try {
      val bitmap = getObjByID(imageId!!) as Bitmap?
      val width = bitmap!!.width.toDouble()
      promise.resolve(width)
    } catch (e: Exception) {
      promise.reject(e)
    }
  }

  @ReactMethod
  fun getHeight(imageId: String?, promise: Promise): Double {
    try {
      val bitmap = getObjByID(imageId!!) as Bitmap?
      val height = bitmap!!.height.toDouble()
      promise.resolve(height)
    } catch (e: Exception) {
      promise.reject(e)
    }
    return 0.0
  }

  companion object {
    private const val REACT_CLASS = "JSImage"
    private const val FILE_SCHEME = "file"

    /**
     * 根据图片base64url返回图片二进制
     *
     * @param base64Url 图片base64url
     * @return
     */
    fun base64UrlToImage(base64Url: String?): ByteArray? {
      var base64Url = base64Url
      var imageBytes: ByteArray? = null
      if (base64Url == null || base64Url.equals("", ignoreCase = true)) {
        return null
      }

      // 数据中的 "+"会因为传递变为 " "空格
      base64Url = base64Url.replace(" ".toRegex(), "+")
      val strs = base64Url.split(",".toRegex()).toTypedArray()
      if (strs.size == 2) {
        base64Url = strs[1]
      }
      val decoder = BASE64Decoder()
      try {
        imageBytes = decoder.decodeBuffer(base64Url)
        return imageBytes
      } catch (e: IOException) {
        e.printStackTrace()
      }
      return imageBytes
    }

    fun getBitmapFromByte(temp: ByteArray?): Bitmap? {
      return if (temp != null) {
        BitmapFactory.decodeByteArray(temp, 0, temp.size)
      } else {
        null
      }
    }
  }

  init {
    m_Context = context.applicationContext
  }
}
