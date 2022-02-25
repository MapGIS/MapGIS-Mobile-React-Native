package com.zondy.mapgis.mobile.geoscene

import android.content.Context
import android.util.AttributeSet
import com.zondy.mapgis.android.sceneview.SceneView

/**
 * @content 三维视图组件
 * @auther fangqi 2021-12-07
 */
class ReactSceneView : SceneView {
  constructor(context: Context?) : super(context) {}
  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {}

  /**
   * @content <修改说明> 解决在ReactNative中，子视图宽高始终固定不变，导致坐标文字受挤压显示不全的问题
   * @author fangqi 2022-1-6 下午3:15:54
  </修改说明> */
  override fun requestLayout() {
    super.requestLayout()
    post(measureAndLayout)
  }

  private val measureAndLayout = Runnable {
    measure(
      MeasureSpec.makeMeasureSpec(width, MeasureSpec.EXACTLY),
      MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY))
    layout(left, top, right, bottom)
  }
}
