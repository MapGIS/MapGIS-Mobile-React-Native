package com.zondy.mapgis.mobile.react;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.zondy.mapgis.core.info.GeomInfo;
import com.zondy.mapgis.core.map.AllOtherDataItemInfoSource;
import com.zondy.mapgis.core.map.RangeTheme;
import com.zondy.mapgis.core.map.RangeThemeInfo;
import com.zondy.mapgis.core.map.ThemeInfo;
import com.zondy.mapgis.core.object.Enumeration;

/**
 * 范围专题图Native功能组件
 * Created by xiaoying on 2019/9/3.
 */
public class JSRangeTheme extends JSVectorTheme {
    private static final String REACT_CLASS = "JSRangeTheme";

    public JSRangeTheme(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void createObj(Promise promise){
        try {
            RangeTheme rangeTheme = new RangeTheme();
            String rangeThemeId = registerId(rangeTheme);

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("RangeThemeId", rangeThemeId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getDefaultInfo(String rangeThemeId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            ThemeInfo themeInfo = rangeTheme.getDefaultInfo();
            String themeInfoId = null;
            if(themeInfo != null){
                themeInfoId = JSThemeInfo.registerId(themeInfo);
            }

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("ThemeInfoId",themeInfoId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setDefaultInfo(String rangeThemeId, String themeInfoId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            ThemeInfo themeInfo = JSThemeInfo.getObjFromList(themeInfoId);
            rangeTheme.setDefaultInfo(themeInfo);

            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getExpression(String rangeThemeId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            String expression = rangeTheme.getExpression();

            promise.resolve(expression);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setExpression(String rangeThemeId, String expression, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            rangeTheme.setExpression(expression);

            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getCount(String rangeThemeId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            int count = (int) rangeTheme.getCount();

            promise.resolve(count);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getAllOtherDataItemInfoSource(String rangeThemeId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            int allOtherDataItemInfoSource = rangeTheme.getAllOtherDataItemInfoSource().value();

            promise.resolve(allOtherDataItemInfoSource);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setAllOtherDataItemInfoSource(String rangeThemeId, int allOtherDataItemInfoSource, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            AllOtherDataItemInfoSource allOtherDataItemInfoSource1 = (AllOtherDataItemInfoSource) Enumeration.parse(AllOtherDataItemInfoSource.class, allOtherDataItemInfoSource);
            rangeTheme.setAllOtherDataItemInfoSource(allOtherDataItemInfoSource1);

            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void append(String rangeThemeId, String rangeThemeInfoId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            RangeThemeInfo rangeThemeInfo = (RangeThemeInfo) JSRangeThemeInfo.getObjFromList(rangeThemeInfoId);
            int index = (int) rangeTheme.append(rangeThemeInfo);

            promise.resolve(index);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void remove(String rangeThemeId, int index, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            boolean result = rangeTheme.remove(index);

            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void indexOf(String rangeThemeId, String value, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            int index = (int) rangeTheme.indexOf(value);

            promise.resolve(index);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void clear(String rangeThemeId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            boolean result = rangeTheme.clear();

            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setItem(String rangeThemeId, int index, String rangeThemeInfoId, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            RangeThemeInfo rangeThemeInfo = (RangeThemeInfo) JSRangeThemeInfo.getObjFromList(rangeThemeInfoId);
            boolean result = rangeTheme.setItem(index, rangeThemeInfo);

            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getItem(String rangeThemeId, int index, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            RangeThemeInfo rangeThemeInfo = rangeTheme.getItem(index);
            String rangeThemeInfoId = null;
            if(rangeThemeInfo != null){
                rangeThemeInfoId = JSRangeThemeInfo.registerId(rangeThemeInfo);
            }

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("RangeThemeInfoId", rangeThemeInfoId);

            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    // 底层未实现，暂时不可用
    @ReactMethod
    public void merge(String rangeThemeId, int index, int count, String geomInfoId, String caption, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            GeomInfo geomInfo = JSGeomInfo.getObjFromList(geomInfoId);
            boolean result = rangeTheme.merge(index, count, geomInfo, caption);

            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    // 底层未实现，暂时不可用
    @ReactMethod
    public void split(String rangeThemeId, int index, double splitValue, String geomInfoId1, String caption1, String geomInfoId2, String caption2, Promise promise){
        try {
            RangeTheme rangeTheme = (RangeTheme) getObjFromList(rangeThemeId);
            GeomInfo geomInfo1 = JSGeomInfo.getObjFromList(geomInfoId1);
            GeomInfo geomInfo2 = JSGeomInfo.getObjFromList(geomInfoId2);
            boolean result = rangeTheme.split(index, splitValue, geomInfo1, caption1, geomInfo2, caption2);

            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

}
