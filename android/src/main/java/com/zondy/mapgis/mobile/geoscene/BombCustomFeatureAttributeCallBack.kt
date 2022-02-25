package com.zondy.mapgis.mobile.geoscene

import com.zondy.mapgis.core.spatial.CustomFeatureAttributeCallBack
import java.util.*

class BombCustomFeatureAttributeCallBack : CustomFeatureAttributeCallBack() {
  var mAttributeHashMap: HashMap<Long, String>? = null

  fun setAttributeMap(attributeMap: HashMap<Long, String>?) {
    mAttributeHashMap = attributeMap
  }

  override fun onGetFeatureAttributeValue(featureID: Long): String? {
    return mAttributeHashMap!![featureID]
  }
}
