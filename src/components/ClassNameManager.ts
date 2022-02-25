

export class ClassNameManager {

  protected readonly NULL = null;

  /**
   * 基本数据类型
   */
  protected readonly VOID = '';
  protected readonly SHORT = 'short';
  protected readonly INT = 'int';
  protected readonly LONG = 'long';
  protected readonly FLOAT = 'float';
  protected readonly DOUBLE = 'double';
  protected readonly BOOLEAN = 'boolean';
  protected readonly CHAR = 'char';
  protected readonly BYTE = 'byte';
  protected readonly STRING = 'string';
  protected readonly ARRAY = 'array|';
  protected readonly LIST = 'list|';
  protected readonly ARRAYLIST = 'arrayList|';
  protected readonly MAP = 'map';

  // protected readonly CONTEXT = 'Context';

  protected readonly OBJID = 'obj';
  protected readonly NUMBER = 'number';
  protected readonly ENUM = 'enum|';

  /**
   * 类名
   */
  protected readonly CLASS_OBJECT = 'java.lang.Object';
  protected readonly CLASS_IMAGE = 'android.graphics.Bitmap';
  protected readonly CLASS_POINTF = 'android.graphics.PointF';
  protected readonly CLASS_CALENDAR = 'java.util.Calendar';
  protected readonly CLASS_UUID = 'java.util.UUID';

  // map
  protected readonly CLASS_ENVIRONMENT = 'environment.Environment';
  protected readonly CLASS_SIZE = 'geometry.Size';

  protected readonly CLASS_MAGNIFIER_OPTION = 'mapview.MagnifierOption';
  protected readonly CLASS_MAP_POSITION = 'mapview.MapPosition';
  protected readonly CLASS_MAP_VIEW = 'mapview.MapView';
  protected readonly CLASS_ANNOTATION = 'annotation.Annotation';
  protected readonly CLASS_ANNOTATIONS_OVERLAY = 'annotation.AnnotationsOverlay';
  protected readonly CLASS_ANNOTATION_VIEW = 'annotation.AnnotationView';

  protected readonly CLASS_DOCUMENT = 'map.Document';
  protected readonly CLASS_DOCUMENT_ITEM = 'map.DocumentItem';
  protected readonly CLASS_LABEL = 'map.Label';
  protected readonly CLASS_VECTOR_LABEL = 'map.VectorLabel';
  protected readonly CLASS_GENERAL_VECTOR_LABEL = 'map.GeneralVectorLabel';
  protected readonly CLASS_SIMPLE_LABEL = 'map.SimpleLabel';
  protected readonly CLASS_LABEL_GEOM_TYPE = 'map.LabelGeomType';
  protected readonly CLASS_MAP = 'map.Map';
  protected readonly CLASS_MAPS = 'map.Maps';
  protected readonly CLASS_LAYER_ENUM = 'map.LayerEnum';
  protected readonly CLASS_MAP_LAYER = 'map.MapLayer';
  protected readonly CLASS_SCALE_RANGE = 'map.ScaleRange';
  protected readonly CLASS_VECTOR_LAYER = 'map.VectorLayer';
  protected readonly CLASS_GROUP_LAYER = 'map.GroupLayer';
  protected readonly CLASS_LAYER_STATE = 'map.LayerState';
  protected readonly CLASS_MAP_SERVER = 'map.MapServer';
  protected readonly CLASS_TILE_MAP_SERVER = 'map.TileMapServer';
  protected readonly CLASS_VECTOR_MAP_SERVER = 'map.VectorMapServer';
  protected readonly CLASS_IMAGE_LAYER = 'map.ImageLayer';
  protected readonly CLASS_MAP_SERVER_ACCESS_MODE = 'map.MapServerAccessMode';
  protected readonly CLASS_MAP_SERVER_TYPE = 'map.MapServerType';
  protected readonly CLASS_TRANSFORMATION = 'map.Transformation';
  protected readonly CLASS_LAYER_SAMPLE_INFO = 'map.LayerSampleInfo';
  protected readonly CLASS_THEME = 'map.Theme';
  protected readonly CLASS_THEMES = 'map.Themes';
  protected readonly CLASS_VECTOR_THEME = 'map.VectorTheme';
  protected readonly CLASS_UNIQUE_THEME = 'map.UniqueTheme';
  protected readonly CLASS_SIMPLE_THEME = 'map.SimpleTheme';
  protected readonly CLASS_RANGE_THEME = 'map.RangeTheme';
  protected readonly CLASS_MULTI_CLASS_THEME = 'map.MultiClassTheme';
  protected readonly CLASS_THEME_INFO = 'map.ThemeInfo';
  protected readonly CLASS_UNIQUE_THEME_INFO = 'map.UniqueThemeInfo';
  protected readonly CLASS_RANGE_THEME_INFO = 'map.RangeThemeInfo';
  protected readonly CLASS_MULTI_CLASS_THEME_INFO = 'map.MultiClassThemeInfo';
  protected readonly CLASS_REGION_PLACE_INFO = 'map.RegionPlaceInfo';
  protected readonly CLASS_POINT_PLACE_INFO = 'map.PointPlaceInfo';
  protected readonly CLASS_LINE_PLACE_INFO = 'map.LinePlaceInfo';
  protected readonly CLASS_ALL_OTHER_DATA_ITEM_INFO_SOURCE = 'map.AllOtherDataItemInfoSource';
  protected readonly CLASS_CLASS_ITEM_VALUE = 'map.ClassItemValue';
  protected readonly CLASS_CLASS_ITEM_TYPE = 'map.ClassItemType';
  protected readonly CLASS_REG_PLACE_TYPE = 'map.RegPlaceType';
  protected readonly CLASS_DUPLICATE_TYPE = 'map.DuplicateType';
  protected readonly CLASS_POINT_PLACE_TYPE = 'map.PointPlaceType';
  protected readonly CLASS_POINT_EIGHT_LOCATION_PRIORITY = 'map.PointEightLocationPriority';
  protected readonly CLASS_LINE_PLACE_TYPE = 'map.LinePlaceType';
  protected readonly CLASS_LINE_RESTRICT_TYPE = 'map.LineRestrictType';
  protected readonly CLASS_LINE_SPREAD_TYPE = 'map.LineSpreadType';
  protected readonly CLASS_LINE_REPEAT_TYPE = 'map.LineRepeatType';
  protected readonly CLASS_LABEL_BACK_TYPE = 'map.LabelBackType';
  protected readonly CLASS_LABEL_INFO = 'map.LabelInfo';

  protected readonly CLASS_COLOR = 'systemlib.Color';
  protected readonly CLASS_SYSTEM_LIBRARY = 'systemlib.SystemLibrary';
  protected readonly CLASS_SYSTEM_LIBRARYS = 'systemlib.SystemLibrarys';

  protected readonly CLASS_GRAPHIC = 'graphic.Graphic';
  protected readonly CLASS_GRAPHIC_CIRCLE = 'graphic.GraphicCircle';
  protected readonly CLASS_GRAPHIC_IMAGE = 'graphic.GraphicImage';
  protected readonly CLASS_GRAPHIC_POINT = 'graphic.GraphicPoint';
  protected readonly CLASS_GRAPHIC_MULTI_POINT = 'graphic.GraphicMultiPoint';
  protected readonly CLASS_GRAPHIC_POLYLIN = 'graphic.GraphicPolylin';
  protected readonly CLASS_GRAPHIC_POLYGON = 'graphic.GraphicPolygon';
  protected readonly CLASS_GRAPHICS_OVERLAY = 'graphic.GraphicsOverlay';
  protected readonly CLASS_GRAPHICS_OVERLAYS = 'graphic.GraphicsOverlays';
  protected readonly CLASS_GRAPHIC_TEXT = 'graphic.GraphicText';
  protected readonly CLASS_GRAPHIC_HEATMAP = 'graphic.GraphicHeatmap';
  protected readonly CLASS_HEATMAP_POINT = 'graphic.HeatmapPoint';
  protected readonly CLASS_VISUAL_MAP = 'graphic.VisualMap';
  protected readonly CLASS_GRAPHIC_STIPPLE_LINE = 'graphic.GraphicStippleLine';

  protected readonly CLASS_SKETCH_STYLE = 'sketcheditor.SketchStyle';
  protected readonly CLASS_LINE_STYLE = 'sketcheditor.LineStyle';
  protected readonly CLASS_POINT_STYLE = 'sketcheditor.PointStyle';
  protected readonly CLASS_FILL_STYLE = 'sketcheditor.FillStyle';
  protected readonly CLASS_TEXT_STYLE = 'sketcheditor.TextStyle';
  protected readonly CLASS_SKETCH_EDITOR = 'sketcheditor.SketchEditor';
  protected readonly CLASS_SNAPPING_OPTION = 'sketcheditor.SnappingOption';
  protected readonly CLASS_MEASURE_OPTION = 'sketcheditor.MeasureOption';
  protected readonly CLASS_SKETCH_DATA_TYPE = 'sketcheditor.SketchDataType';
  protected readonly CLASS_MEASURE_TYPE = 'sketcheditor.MeasureType';
  protected readonly CLASS_GEOMETRY_PARAMS = 'sketcheditor.GeometryParams';

  // base
  protected readonly CLASS_DOT = 'geometry.Dot';
  protected readonly CLASS_DOTS = 'geometry.Dots';
  protected readonly CLASS_DOT3D = 'geometry.Dot3D';
  protected readonly CLASS_DOTS3D = 'geometry.Dots3D';
  protected readonly CLASS_GEOMETRY = 'geometry.Geometry';
  protected readonly CLASS_GEOMETRY_OPERATOR = 'geometry.GeometryOperator';
  protected readonly CLASS_GEOMETRY_CLIP_TYPE = 'geometry.GeometryOperator$ClipType';
  protected readonly CLASS_GEOMETRY_CAP_STYLES = 'geometry.GeometryOperator$CapStyles';
  protected readonly CLASS_GEOMETRY_LINK_MODE = 'geometry.GeometryOperator$LinkMode';
  protected readonly CLASS_GEOMETRY_OVERLAY_TYPE = 'geometry.GeometryOperator$OverlayType';
  protected readonly CLASS_GEOMETRY_SPLIT_MODE = 'geometry.GeometryOperator$SplitMode';
  protected readonly CLASS_GEOMETRY_MR_RECT = 'geometry.GeometryOperator$MRRect';
  protected readonly CLASS_GEOMETRY_JOIN_STYLES = 'geometry.GeometryOperator$JoinStyles';
  protected readonly CLASS_GEO_VAR_LINE = 'geometry.GeoVarLine';
  protected readonly CLASS_GEO_POINT = 'geometry.GeoPoint';
  protected readonly CLASS_GEO_POLYGON = 'geometry.GeoPolygon';
  protected readonly CLASS_GEO_LINE = 'geometry.GeoLine';
  protected readonly CLASS_GEO_MULTI_LINE = 'geometry.GeoMultiLine';
  protected readonly CLASS_GEO_MULTI_POINT = 'geometry.GeoMultiPoint';
  protected readonly CLASS_GEO_ANNO = 'geometry.GeoAnno';
  protected readonly CLASS_TEXT_ANNO = 'geometry.TextAnno';
  protected readonly CLASS_RECT = 'geometry.Rect';
  protected readonly CLASS_RECT3D = 'geometry.Rect3D';
  protected readonly CLASS_GEOM_TYPE = 'geometry.GeomType';
  protected readonly CLASS_INT_REF = 'geometry.IntRef';
  protected readonly CLASS_ANN_TYPE = 'geometry.AnnType';
  protected readonly CLASS_ID_PAIR = 'geometry.IDPair';
  protected readonly CLASS_ANGLE = 'geometry.math.Angle';
  protected readonly CLASS_OBJECT_IDS = 'geometry.ObjectIDs';
  protected readonly CLASS_GEOM_TOPO_CHECK = 'topoCheck.GeomTopoCheck';
  protected readonly CLASS_GEOM_TOPO_FIX = 'topoCheck.GeomTopoFix';

  protected readonly CLASS_INT_LIST = 'common.IntList';
  protected readonly CLASS_FIELD = 'att.Field';
  protected readonly CLASS_FIELDS = 'att.Fields';
  protected readonly CLASS_EXT_FIELD = 'att.Field$ExtField';
  protected readonly CLASS_FIELD_TYPE = 'att.Field$FieldType';
  protected readonly CLASS_FIELD_SHAPE = 'att.Field$FieldShape';
  protected readonly CLASS_RECORD = 'att.Record';

  protected readonly CLASS_GEOM_INFO = 'info.GeomInfo';
  protected readonly CLASS_PNT_INFO = 'info.PntInfo';
  protected readonly CLASS_LIN_INFO = 'info.LinInfo';
  protected readonly CLASS_REG_INFO = 'info.RegInfo';
  protected readonly CLASS_LIN_HEAD_TYPE = 'info.LinHeadType';
  protected readonly CLASS_LIN_JOINT_TYPE = 'info.LinJointType';
  protected readonly CLASS_LIN_ADJUST_TYPE = 'info.LinAdjustType';
  protected readonly CLASS_LIN_STYLE_MAKE_TYPE = 'info.LinStyleMakeType';
  protected readonly CLASS_ANN_INFO = 'info.AnnInfo';
  protected readonly CLASS_TEXT_ANN_INFO = 'info.TextAnnInfo';

  protected readonly CLASS_ELP_PARAM = 'srs.ElpParam';
  protected readonly CLASS_ELP_TRANSFORMATION = 'srs.ElpTransformation';
  protected readonly CLASS_ELP_TRANS_PARAM = 'srs.ElpTransParam';
  protected readonly CLASS_SREF_DATA = 'srs.SRefData';
  protected readonly CLASS_SREF_TYPE = 'srs.SRefType';
  protected readonly CLASS_SREF_EP_TYPE = 'srs.SRefEPType';
  protected readonly CLASS_SREF_PRJ_TYPE = 'srs.SRefPrjType';
  protected readonly CLASS_SREF_ZONE_TYPE = 'srs.SRefZoneType';
  protected readonly CLASS_SREF_LEN_UNIT = 'srs.SRefLenUnit';
  protected readonly CLASS_SREF_ELEVTYPE = 'srs.SRefElevtype';
  protected readonly CLASS_SREF_VDATUM_TYPE = 'srs.SRefVDatumType';
  protected readonly CLASS_PNT3_STRUCT = 'srs.Pnt3Struct';

  protected readonly CLASS_IBAS_CLS = 'geodatabase.IBasCls';
  protected readonly CLASS_IVECTOR_CLS = 'geodatabase.IVectorCls';
  protected readonly CLASS_SFEATURE_CLS = 'geodatabase.SFeatureCls';
  protected readonly CLASS_DATA_BASE = 'geodatabase.DataBase';
  protected readonly CLASS_RECORD_SET = 'geodatabase.RecordSet';
  protected readonly CLASS_XCLS_TYPE = 'geodatabase.XClsType';
  protected readonly CLASS_QUERY_DEF = 'geodatabase.QueryDef';
  protected readonly CLASS_QUERY_MODE = 'geodatabase.SpaQueryMode';
  protected readonly CLASS_IXCLS_INFO = 'geodatabase.IXClsInfo';
  protected readonly CLASS_ACLS_INFO = 'geodatabase.AClsInfo';
  protected readonly CLASS_SFCLS_INFO = 'geodatabase.SFClsInfo';
  protected readonly CLASS_ANNOTATION_CLS = 'geodatabase.AnnotationCls';
  protected readonly CLASS_ATT_INDEX_TYPE = 'geodatabase.AttIndexType';
  protected readonly CLASS_PRECISION = 'geodatabase.Precision';
  protected readonly CLASS_LOG_USER_INFO = 'geodatabase.LogUserInfo';
  protected readonly CLASS_FILE_EXTEND_INFO = 'geodatabase.FileExtendInfo';
  protected readonly CLASS_FILE_EXTEND_MODE = 'geodatabase.FileExtendMode';
  protected readonly CLASS_FILE_EXTEND_UNIT = 'geodatabase.FileExtendUnit';
  protected readonly CLASS_DB_FILE_INFO = 'geodatabase.DBFileInfo';
  protected readonly CLASS_GDB_CREATE_PARAM = 'geodatabase.GDBCreateParam';
  protected readonly CLASS_DB_INFO = 'geodatabase.DBInfo';
  protected readonly CLASS_XCLS_ENUM_TYPE = 'geodatabase.XClsEnumType';
  protected readonly CLASS_LOG_EVENT_RECEIVER = 'geodatabase.LogEventReceiver';
  protected readonly CLASS_SERVER = 'geodatabase.Server';
  protected readonly CLASS_LOG_MNG = 'geodatabase.LogMng';
  protected readonly CLASS_LOG_TYPE = 'geodatabase.LogType';
  protected readonly CLASS_LOG_ON_INFO = 'geodatabase.LogOnInfo';
  protected readonly CLASS_LOG_SYS_INFO = 'geodatabase.LogSysInfo';
  protected readonly CLASS_GDB_SYS_INFO = 'geodatabase.GDBSysInfo';
  protected readonly CLASS_HDF_TYPE = 'geodatabase.HDFType';
  protected readonly CLASS_CONFIG_OPTION = 'config.ConfigOption';
  protected readonly CLASS_MAP_GIS_ENV = 'config.MapGisEnv';
  protected readonly CLASS_ENV_CONFIG = 'config.EnvConfig';
  protected readonly CLASS_SYS_CONFIG_TYPE = 'config.SysConfigType';
  protected readonly CLASS_SYS_CONFIG_DIR_TYPE = 'config.SysConfigDirType';

  protected readonly CLASS_DATA_CONVERT = 'convert.DataConvert';
  protected readonly CLASS_SOURCE_INFO_TYPE = 'convert.SourceInfoType';
  protected readonly CLASS_FEATURE_INFO = 'convert.FeatureInfo';
  protected readonly CLASS_CONVERT_OPTION_TYPE = 'convert.ConvertOptionType';

  protected readonly CLASS_RASTER_HISTOGRAM = 'raster.RasterHistogram';
  protected readonly CLASS_RASTER_STATISTICS = 'raster.RasterStatistics';
  protected readonly CLASS_RASTER = 'raster.Raster';
  protected readonly CLASS_IGEODATA_XFORM = 'raster.IGeodataXform';
  protected readonly CLASS_RASTER_RESAMPLING = 'raster.RasterResampling';
  protected readonly CLASS_PIXEL_TYPE = 'raster.PixelType';
  protected readonly CLASS_RASTER_FORMAT = 'raster.RasterFormat';

  protected readonly CLASS_OUTPUT_INFO_EX = 'rasteranalysis.OutputInfoEx';
  protected readonly CLASS_OUTPUT_INFO = 'rasteranalysis.OutputInfo';
  protected readonly CLASS_RASTER_SURFACE_OP = 'rasteranalysis.RasterSurfaceOp';

  protected readonly CLASS_FEATURE = 'featureservice.Feature';
  protected readonly CLASS_FEATURE_EDIT = 'featureservice.FeatureEdit';
  protected readonly CLASS_FEATURE_PAGED_RESULT = 'featureservice.FeaturePagedResult';
  protected readonly CLASS_FEATURE_QUERY = 'featureservice.FeatureQuery';

  protected readonly CLASS_SPA_CALCULATOR = 'spatial.SpaCalculator';
  protected readonly CLASS_SPA_PROJECTION = 'spatial.SpaProjection';

  protected readonly CLASS_SPATIAL_ANALYSIS = 'spatialanalysis.SpatialAnalysis';
  protected readonly CLASS_BUFFER_OPTION = 'spatialanalysis.BufferOption';
  protected readonly CLASS_BUFFER_CAP_TYPE = 'spatialanalysis.BufferCapType';
  protected readonly CLASS_OVERLAY_OPTION = 'spatialanalysis.OverlayOption';
  protected readonly CLASS_OVERLAY_ATT_OPT_TYPE = 'spatialanalysis.OverlayOption$OverlayAttOptType';
  protected readonly CLASS_OVERLAY_INFO_OPT_TYPE = 'spatialanalysis.OverlayOption$OverlayInfoOptType';
  protected readonly CLASS_OVERLAY_OPTION_OVERLAY_TYPE = 'spatialanalysis.OverlayOption$OverlayType';
  protected readonly CLASS_CLIP_LINE_MODE = 'spatialanalysis.ClipLineOption$ClipLineMode';
  protected readonly CLASS_CLIP_LINE_OPTION = 'spatialanalysis.ClipLineOption';
  protected readonly CLASS_DELETE_IDENTICAL_OPTION = 'spatialanalysis.DeleteIdenticalOption';
  protected readonly CLASS_DISSOLVE_OPTION = 'spatialanalysis.DissolveOption';
  protected readonly CLASS_ELIMINATE_REG_OPTION = 'spatialanalysis.EliminateRegOption';
  protected readonly CLASS_ELIMINATE_MODE = 'spatialanalysis.EliminateRegOption$EliminateMode';
  protected readonly CLASS_JOIN_EDGE_OPTION = 'spatialanalysis.JoinEdgeOption';
  protected readonly CLASS_LINK_LINE_OPTION = 'spatialanalysis.LinkLineOption';
  protected readonly CLASS_MULTIPLE_RING_BUFFER_OPTION = 'spatialanalysis.MultipleRingBufferOption';
  protected readonly CLASS_REBUILD_OPTION = 'spatialanalysis.RebuildOption';
  protected readonly CLASS_SPATIAL_QUERY_TYPE = 'spatialanalysis.SpatialQueryType';

  protected readonly CLASS_COORDINATE_CONVERT = 'utils.CoordinateConvert';
  protected readonly CLASS_COORDINATE_CONVERT_PARAMETER = 'utils.CoordinateConvertParameter';
  protected readonly CLASS_COORDINATE_TYPE = 'utils.CoordinateType';

  protected readonly CLASS_LAYER3D = 'scene.Layer3D';
  protected readonly CLASS_LAYER3D_TYPE = 'scene.Layer3DType';
  protected readonly CLASS_LAYER3D_ENUM = 'scene.Layer3DEnum';
  protected readonly CLASS_GROUPLAYER3D = 'scene.GroupLayer3D';
  protected readonly CLASS_SERVERLAYER3D = 'scene.ServerLayer3D';
  protected readonly CLASS_VECTORLAYER3D = 'scene.VectorLayer3D';
  protected readonly CLASS_SELECTION_STYLE = 'scene.SelectionStyle';
  protected readonly CLASS_SELECTION_PROPERTIES = 'scene.SelectionProperties';
  protected readonly CLASS_MODEL_CACHE_LAYER3D = 'scene.ModelCacheLayer3D';
  protected readonly CLASS_MAP_REF_LAYER = 'scene.MapRefLayer';
  protected readonly CLASS_SCENE = 'scene.Scene';
  protected readonly CLASS_TERRAIN_LAYER3D = 'scene.TerrainLayer3D';
  protected readonly CLASS_DRIVER_TYPE = 'scene.DriverType';
  protected readonly CLASS_SRS_TYPE = 'scene.SRSType';
  protected readonly CLASS_CAMERA = 'sceneview.Camera';
  protected readonly CLASS_SCENE_MANIPULATOR = 'sceneview.SceneManipulator';
  protected readonly CLASS_SCENE_MANIPULATOR_TYPE = 'sceneview.SceneManipulatorType';
  protected readonly CLASS_MULTI_TOUCH_SCENE_MANIPULATOR = 'sceneview.MultiTouchSceneManipulator';
  protected readonly CLASS_IDENTIFY_LAYER_RESULT = 'sceneview.IdentifyLayerResult';
  protected readonly CLASS_GEO_ELEMENT = 'sceneview.GeoElement';
  protected readonly CLASS_ATMOSPHERE_EFFECT_MODE = 'sceneview.AtmosphereEffectMode';
  protected readonly CLASS_SCENE_MODE = 'sceneview.SceneMode';
  protected readonly CLASS_SUN_LIGHTING_MODE = 'sceneview.SunLightingMode';
  protected readonly CLASS_SCENE_VIEW = 'com.zondy.mapgis.mobile.geoscene.ReactSceneView';
  protected readonly CLASS_FLY_MANAGER = 'sceneview.FlyManager';
  protected readonly CLASS_FLY_STATUS = 'sceneview.FlyStatus';
  protected readonly CLASS_VIEW_POINT = 'viewpoint.Viewpoint';
  protected readonly CLASS_FEATURE3D = 'featureservice.Feature3D';
  protected readonly CLASS_GEOMETRY3D = 'geometry.Geometry3D';
  protected readonly CLASS_FEATURE_PAGED_RESULT3D = 'featureservice.FeaturePagedResult3D';
  protected readonly CLASS_FEATURE_QUERY3D = 'featureservice.FeatureQuery3D';
  protected readonly CLASS_GRAPHIC_3DS_OVERLAY = 'graphic.Graphic3DsOverlay';
  protected readonly CLASS_GRAPHIC3D = 'graphic.Graphic3D';
  protected readonly CLASS_ALTITUDE_MODE = 'graphic.AltitudeMode';
  protected readonly CLASS_GRAPHIC_STATE = 'graphic.GraphicState';
  protected readonly CLASS_GRAPHIC_CIRCLE3D = 'graphic.GraphicCircle3D';
  protected readonly CLASS_GRAPHIC_ELLIPSE3D = 'graphic.GraphicEllipse3D';
  protected readonly CLASS_GRAPHIC_IMAGE3D = 'graphic.GraphicImage3D';
  protected readonly CLASS_GRAPHIC_MULTI_POINT3D = 'graphic.GraphicMultiPoint3D';
  protected readonly CLASS_GRAPHIC_POINT3D = 'graphic.GraphicPoint3D';
  protected readonly CLASS_GRAPHIC_POLYGON3D = 'graphic.GraphicPolygon3D';
  protected readonly CLASS_GRAPHIC_POLYLINE3D = 'graphic.GraphicPolyline3D';
  protected readonly CLASS_GRAPHIC_TEXT3D = 'graphic.GraphicText3D';
  protected readonly CLASS_GRAPHIC_TEXT_3D_ALIGNMENT_MODE = 'graphic.GraphicText3DAlignmentMode';
  protected readonly CLASS_GRAPHIC_MODEL = 'graphic.GraphicModel';
  protected readonly CLASS_GRAPHIC_PLACE_MARKER = 'graphic.GraphicPlaceMarker';
  protected readonly CLASS_GRAPHIC_IMAGE_3D_ALIGNMENT_MODE = 'graphic.GraphicImage3DAlignmentMode';
  protected readonly CLASS_GRAPHIC_TYPE3D = 'graphic.GraphicType3D';
  protected readonly CLASS_GRAPHIC_3DS_OVERLAYS = 'graphic.Graphic3DsOverlays';
  protected readonly CLASS_VIDEO_SOURCE = 'ar.VideoSource';
  protected readonly CLASS_VIDEO_SOURCE_DEFAULT = 'ar.VideoSourceDefault';
  protected readonly CLASS_IMAGE_FORMAT = 'ar.ImageFormat';
  protected readonly CLASS_DEVICE_MOTION_DATA_SOURCE = 'ar.DeviceMotionDataSource';
  protected readonly CLASS_DEVICE_MOTION_DATA_SOURCE_LBS = 'ar.DeviceMotionDataSourceLBS';
  protected readonly CLASS_DEVICE_MOTION_DATA_SOURCE_TYPE = 'ar.DeviceMotionDataSourceType';
  protected readonly CLASS_AXIS_TYPE = 'spatial.AxisType';
  protected readonly CLASS_BOMB_TYPE = 'spatial.BombType';
  protected readonly CLASS_BOMB_INFO = 'spatial.BombInfo';
  protected readonly CLASS_BOMB_INFO_AXIS = 'spatial.BombInfoAxis';
  protected readonly CLASS_TERRAIN_ANALYSIS = 'spatial.TerrainAnalysis';
  protected readonly CLASS_BOMB_ANALYSIS = 'spatial.BombAnalysis';
  protected readonly CLASS_DISTANCE_MEASUREMENT = 'spatial.DistanceMeasurement';
  protected readonly CLASS_MEASUREMENT_CHANGED_EVENT = 'spatial.MeasurementChangedEvent';
  protected readonly CLASS_BOMB_INFO_ATTRIBUTE = 'spatial.BombInfoAttribute';
  protected readonly CLASS_CUSTOM_FEATURE_ATTRIBUTE_CALL_BACK = 'spatial.CustomFeatureAttributeCallBack';
  protected readonly CLASS_BOMB_CUSTOM_FEATURE_ATTRIBUTE_CALL_BACK = 'com.zondy.mapgis.mobile.geoscene.BombCustomFeatureAttributeCallBack';

}


