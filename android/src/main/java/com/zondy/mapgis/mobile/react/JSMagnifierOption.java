package com.zondy.mapgis.mobile.react;

import android.graphics.PointF;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.zondy.mapgis.android.mapview.MagnifierOption;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class JSMagnifierOption extends ReactContextBaseJavaModule {

    private static final String REACT_CLASS = "JSMagnifierOption";
    private static Map<String, MagnifierOption> mMagnifierOptionList = new HashMap<String, MagnifierOption>();

    public JSMagnifierOption(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public static MagnifierOption getObjFromList(String id) {
        return mMagnifierOptionList.get(id);
    }

    public static String registerId(MagnifierOption obj) {
        for (Map.Entry entry : mMagnifierOptionList.entrySet()) {
            if (obj.equals(entry.getValue())) {
                return (String) entry.getKey();
            }
        }
        String id = UUID.randomUUID().toString().substring(24);
        mMagnifierOptionList.put(id, obj);
        return id;
    }

    @ReactMethod
    public void createObj(Promise promise) {
        try {
            MagnifierOption magnifierOption = new MagnifierOption();
            String magnifierOptionId = registerId(magnifierOption);

            WritableMap map = Arguments.createMap();
            map.putString("MagnifierOptionId", magnifierOptionId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void createObj(int size, float scale, int mode, String pointId, Promise promise) {
        try {
            PointF point = JSPointF.getObjFromList(pointId);
            MagnifierOption magnifierOption = new MagnifierOption(size,scale,mode,point);
            String magnifierOptionId = registerId(magnifierOption);

            WritableMap map = Arguments.createMap();
            map.putString("MagnifierOptionId", magnifierOptionId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setScale(String magnifierOptionId, float scale, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            MagnifierOption mgOption = magnifierOption.setScale(scale);
            String mgOptionId = registerId(mgOption);
            WritableMap map = Arguments.createMap();
            map.putString("MagnifierOptionId", mgOptionId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getScale(String magnifierOptionId, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            float scale = magnifierOption.getScale();
            promise.resolve(scale);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

   @ReactMethod
    public void setSize(String magnifierOptionId, int size, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            MagnifierOption mgOption = magnifierOption.setSize(size);
            String mgOptionId = registerId(mgOption);
            WritableMap map = Arguments.createMap();
            map.putString("MagnifierOptionId", mgOptionId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

   @ReactMethod
    public void getSize(String magnifierOptionId, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            int size = magnifierOption.getSize();
            promise.resolve(size);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setPointAdjustMode(String magnifierOptionId, int mode, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            MagnifierOption mgOption = magnifierOption.setPointAdjustMode(mode);
            String mgOptionId = registerId(mgOption);
            WritableMap map = Arguments.createMap();
            map.putString("MagnifierOptionId", mgOptionId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getPointAdjustMode(String magnifierOptionId, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            int mode = magnifierOption.getPointAdjustMode();
            promise.resolve(mode);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setPoint(String magnifierOptionId, String pointId, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            PointF point = JSPointF.getObjFromList(pointId);
            MagnifierOption mgOption = magnifierOption.setPoint(point);
            String mgOptionId = registerId(mgOption);
            WritableMap map = Arguments.createMap();
            map.putString("MagnifierOptionId", mgOptionId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getPoint(String magnifierOptionId, Promise promise)
    {
        try {
            MagnifierOption magnifierOption = getObjFromList(magnifierOptionId);
            PointF pointf = magnifierOption.getPoint();
            String pointFId = JSPointF.registerId(pointf);
            WritableMap map = Arguments.createMap();
            map.putString("PointFId", pointFId);
            map.putDouble("x", pointf.x);
            map.putDouble("y", pointf.y);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

}
