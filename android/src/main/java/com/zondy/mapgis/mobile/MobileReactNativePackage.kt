package com.zondy.mapgis.mobile

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.zondy.mapgis.mobile.geoanalysis.*
import com.zondy.mapgis.mobile.geobase.JSEnvironment
import com.zondy.mapgis.mobile.geodatabase.*
import com.zondy.mapgis.mobile.geomap.*
import com.zondy.mapgis.mobile.geomapview.*
import com.zondy.mapgis.mobile.geoobjects.*
import com.zondy.mapgis.mobile.geoscene.*
import com.zondy.mapgis.mobile.manager.BaseJavaModule
import com.zondy.mapgis.mobile.original.JSImage
import com.zondy.mapgis.mobile.original.JSPointF

class MobileReactNativePackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    val modules: MutableList<NativeModule> = ArrayList()
    modules.add(BaseJavaModule(reactContext))
    modules.add(JSAllOtherDataItemInfoSource(reactContext))
    modules.add(JSAltitudeMode(reactContext))
    modules.add(JSAnnotationView(reactContext))
    modules.add(JSAnnType(reactContext))
    modules.add(JSAtmosphereEffectMode(reactContext))
    modules.add(JSAttIndexType(reactContext))
    modules.add(JSAxisType(reactContext))
    modules.add(JSBombType(reactContext))
    modules.add(JSBufferCapType(reactContext))
    modules.add(JSCapStyles(reactContext))
    modules.add(JSClassItemType(reactContext))
    modules.add(JSClipLineMode(reactContext))
    modules.add(JSClipType(reactContext))
    modules.add(JSConnectType(reactContext))
    modules.add(JSConvertOptionType(reactContext))
    modules.add(JSCoordinateConvert(reactContext))
    modules.add(JSCoordinateType(reactContext))
    modules.add(JSDataBase(reactContext))
    modules.add(JSDeviceMotionDataSource(reactContext))
    modules.add(JSDeviceMotionDataSourceLBS(reactContext))
    modules.add(JSDeviceMotionDataSourceType(reactContext))
    modules.add(JSDistanceMeasurement(reactContext))
    modules.add(JSDistanceType(reactContext))
    modules.add(JSDocumentItemType(reactContext))
    modules.add(JSDriverType(reactContext))
    modules.add(JSDuplicateType(reactContext))
    modules.add(JSEliminateMode(reactContext))
    modules.add(JSEnvironment(reactContext))
    modules.add(JSFieldType(reactContext))
    modules.add(JSFileExtendMode(reactContext))
    modules.add(JSFileExtendUnit(reactContext))
    modules.add(JSFlyManager(reactContext))
    modules.add(JSFlyStatus(reactContext))
    modules.add(JSGeometryDimension(reactContext))
    modules.add(JSGeometryType(reactContext))
    modules.add(JSGeomType(reactContext))
    modules.add(JSGraphicImage3DAlignmentMode(reactContext))
    modules.add(JSGraphicState(reactContext))
    modules.add(JSGraphicText3DAlignmentMode(reactContext))
    modules.add(JSGraphicType3D(reactContext))
    modules.add(JSHDFType(reactContext))
    modules.add(JSImage(reactContext))
    modules.add(JSImageFormat(reactContext))
    modules.add(JSImageLayer(reactContext))
    modules.add(JSJoinStyles(reactContext))
    modules.add(JSLabelBackType(reactContext))
    modules.add(JSLabelGeomType(reactContext))
    modules.add(JSLabelType(reactContext))
    modules.add(JSLayerState(reactContext))
    modules.add(JSLinePlaceType(reactContext))
    modules.add(JSLineRepeatType(reactContext))
    modules.add(JSLineRestrictType(reactContext))
    modules.add(JSLineSpreadType(reactContext))
    modules.add(JSLinkMode(reactContext))
    modules.add(JSLogEventReceiver(reactContext))
    modules.add(JSLogType(reactContext))
    modules.add(JSMapServerAccessMode(reactContext))
    modules.add(JSMapServerType(reactContext))
    modules.add(JSMapView(reactContext))
    modules.add(JSMeasureContentWillChangeListener(reactContext))
    modules.add(JSMeasureOption(reactContext))
    modules.add(JSOverlayAttOptType(reactContext))
    modules.add(JSOverlayInfoOptType(reactContext))
    modules.add(JSOverlayOptionOverlayType(reactContext))
    modules.add(JSOverlayType(reactContext))
    modules.add(JSPixelType(reactContext))
    modules.add(JSPointEightLocationPriority(reactContext))
    modules.add(JSPointF(reactContext))
    modules.add(JSPointPlaceType(reactContext))
    modules.add(JSProgressStatus(reactContext))
    modules.add(JSRasterFormat(reactContext))
    modules.add(JSRasterResampling(reactContext))
    modules.add(JSSceneManipulatorType(reactContext))
    modules.add(JSSceneMode(reactContext))
    modules.add(JSSceneView(reactContext))
    modules.add(JSSetCursorType(reactContext))
    modules.add(JSSketchDataType(reactContext))
    modules.add(JSSketchEditor(reactContext))
    modules.add(JSSourceInfoType(reactContext))
    modules.add(JSSpaQueryMode(reactContext))
    modules.add(JSSysConfigDirType(reactContext))
    modules.add(JSSysConfigType(reactContext))
    modules.add(JSSpatialQueryType(reactContext))
    modules.add(JSSplitMode(reactContext))
    modules.add(JSSRefElevtype(reactContext))
    modules.add(JSSRefEPType(reactContext))
    modules.add(JSSRefPrjType(reactContext))
    modules.add(JSSRefType(reactContext))
    modules.add(JSSRefVDatumType(reactContext))
    modules.add(JSSRefZoneType(reactContext))
    modules.add(JSSRSType(reactContext))
    modules.add(JSSunLightingMode(reactContext))
    modules.add(JSVideoSource(reactContext))
    modules.add(JSXClsEnumType(reactContext))
    modules.add(JSXClsType(reactContext))
    modules.add(JSLayer3DType(reactContext))
    return modules
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    val viewManagerLst: MutableList<ViewManager<*, *>> = ArrayList()
    viewManagerLst.add(MapViewManager())
    viewManagerLst.add(SceneViewManager())
    return viewManagerLst
  }
}
