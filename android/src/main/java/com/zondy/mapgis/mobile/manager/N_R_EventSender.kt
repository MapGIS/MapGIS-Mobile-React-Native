package com.zondy.mapgis.mobile.manager

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableArray
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter

/**
 * @content 事件发送类
 * @author fangqi 2021-7-16
 */
class N_R_EventSender {
  var stringMap: HashMap<String, String> = HashMap()
  var doubleMap: HashMap<String, Double> = HashMap()

  fun putString(key: String, value: String) {
    stringMap[key] = value
  }

  fun createSender(): WritableMap {
    val idSet = Arguments.createMap()
    if (!stringMap.isEmpty()) {
      for ((key, value) in stringMap) {
        idSet.putString(key, value)
      }
    }
    return idSet
  }

  companion object {
    fun sendEvent(reactContext: ReactContext,
                  eventName: String,
                  params: WritableMap?) {
      reactContext
        .getJSModule(RCTDeviceEventEmitter::class.java)
        .emit(eventName, params)
    }

    fun sendEvent(reactContext: ReactContext,
                  eventName: String,
                  params: WritableArray?) {
      reactContext
        .getJSModule(RCTDeviceEventEmitter::class.java)
        .emit(eventName, params)
    }
  }

}
