package com.zondy.mapgis.mobile.react;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.zondy.mapgis.core.attr.FieldType;
import com.zondy.mapgis.core.object.Enumeration;

import java.util.HashMap;
import java.util.Map;

public class JSFieldType extends ReactContextBaseJavaModule {

    private static final String REACT_CLASS="JSFieldType";

    public JSFieldType(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        String[] names = Enumeration.getNames(FieldType.class);
        for (int i = 0; i < names.length; i++) {
            int value = Enumeration.getValueByName(FieldType.class, names[i]);
            constants.put(names[i], value);
        }
        return constants;
    }
}
