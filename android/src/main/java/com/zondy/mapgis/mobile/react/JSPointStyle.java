package com.zondy.mapgis.mobile.react;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.zondy.mapgis.android.tool.sketcheditor.PointStyle;
import com.zondy.mapgis.mobile.react.utils.ConvertUtil;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * 点样式（实心圆点）Native功能组件
 * Created by xiaoying on 2019/9/10.
 */
public class JSPointStyle extends ReactContextBaseJavaModule {
    private static final String REACT_CLASS = "JSPointStyle";
    private static Map<String, PointStyle> mPointStyleList = new HashMap<>();

    public JSPointStyle(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public static PointStyle getObjFromList(String id){
        return mPointStyleList.get(id);
    }

    public static String registerId(PointStyle obj){
        for(Map.Entry entry : mPointStyleList.entrySet()){
            if(obj.equals(entry.getValue())){
                String id = (String) entry.getKey();
                return id;
            }
        }
        String id = UUID.randomUUID().toString().substring(24);
        mPointStyleList.put(id,obj);
        return id;
    }

    @ReactMethod
    public void createObj(Promise promise){
        try {
            PointStyle pointStyle = new PointStyle();
            String pointStyleId = registerId(pointStyle);

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("PointStyleId", pointStyleId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void createObjByCS(String color, float size, Promise promise){
        try {
            int pointColor = ConvertUtil.ColorRGBAToInt(color);
            PointStyle pointStyle = new PointStyle(pointColor, size);
            String pointStyleId = registerId(pointStyle);

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("PointStyleId", pointStyleId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getColor(String pointStyleId, Promise promise){
        try {
            PointStyle pointStyle = getObjFromList(pointStyleId);
            int color = pointStyle.getColor();
            String strColor = ConvertUtil.ColorIntToRGBA(color);

            promise.resolve(strColor);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setColor(String pointStyleId, String color, Promise promise){
        try {
            PointStyle pointStyle = getObjFromList(pointStyleId);
            int pointColor = ConvertUtil.ColorRGBAToInt(color);
            pointStyle.setColor(pointColor);

            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getSize(String pointStyleId, Promise promise){
        try {
            PointStyle pointStyle = getObjFromList(pointStyleId);
            float size = pointStyle.getSize();

            promise.resolve(size);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setSize(String pointStyleId, float size, Promise promise){
        try {
            PointStyle pointStyle = getObjFromList(pointStyleId);
            pointStyle.setSize(size);

            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }
}
