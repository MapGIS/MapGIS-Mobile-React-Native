/**
 * @content 抽象基类，用于定义所有的几何对象基类功能组件
 * @author fangqi 2021-09-09
 */
// import { NativeModules } from "react-native";
// let GeometryType = NativeModules.JSGeometryType;
// let AnnType = NativeModules.JSAnnType;
import Rect from './Rect';
import ObjectManager from '../components/ObjectManager';
// import GeoMultiPoint from './GeoMultiPoint';
// import GeoVarLine from './GeoVarLine';
// import GeoPolygon from './GeoPolygon';
// import GeoAnno from "./GeoAnno";
// import TextAnno from "./TextAnno";

/**
 * @class Geometry
 */
export default class Geometry extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOMETRY;
  }

  /**
   * 获取几何对象的类型
   * @memberOf Geometry
   * @returns {Promise} 几何对象类型
   */
  async getType(){
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 清空几何数据
   * @memberOf Geometry
   * @returns {Promise} 清空数据成功返回1，失败返回0
   */
  async empty(): Promise<number> {
    let methodName = "empty"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 计算外包围盒
   * @memberOf Geometry
   * @returns {Promise.<Rect>} 包围盒信息
   */
  async calRect(): Promise<Rect> {
    let methodName = "calRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 是否在矩形内
   * @memberOf Geometry
   * @param rect 待比较的包围盒对象
   * @returns {Promise} 在包围盒内返回1，不在返回0
   */
  async isInRect(rect: Rect) {
    let methodName = "isInRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [rect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 是否和矩形相交
   * @memberOf Geometry
   * @param rect 待比较的包围盒对象
   * @returns {Promise} 和包围盒相交返回1，不相交返回0
   */
  async isInterRect(rect: Rect) {
    let methodName = "isInterRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [rect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取几何维数
   * @memberOf Geometry
   * @return {Promise}几何维数
   */
  async getDimension() {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取存储内容长度
   * @memberOf Geometry
   * @return {Promise}存储长度
   */
  async length() {
    let methodName = "length"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 几何转JSON
   * @memberOf Geometry
   * @param geom 原几何对象
   * @return {Promise}JSON字符串
   */
  async toGeoJson(geom: Geometry) {
    let methodName = "toGeoJson"
    let paramsTypeStr = [this.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * JSON转几何
   * @memberOf Geometry
   * @param data - JSON字符串
   * @return {Promise}JSON字符串
   */
  async fromGeoJson(data: String) {
    let methodName = "fromGeoJson"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [data];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 根据返回的geometryId,geometryType，geometryAnnType构造geometry对象
   *
   * @param {String} geometryId 几何对象对应的Id
   * @param {int} geometryType  几何对象类型
   * @param {int} geometryAnnType 几何对象为GeoAnno类型时候的AnnType
   * @returns {Geometry} geometry或子类对象
   */
  static async getGeometryById(geometryId: String): Promise<Geometry>{
    // let geometry = null;
    // if (geometryId != null) {

    //   geometry = new Geometry();
    //   geometry.ObjId = geometryId;
    //   let geometryType = await geometry.getType();

    //   switch (geometryType) {
    //     case GeometryType.GeoUnknown: // GeoUnknown_Type : -1
    //       geometry = new Geometry();
    //       geometry.ObjId = geometryId;
    //       break;

    //     // case GeometryType.GeoPoint: // GeoPoint_Type : 1
    //     //   geometry = new GeoPoint();
    //     //   geometry.ObjId = geometryId;
    //     //   break;

    //     case GeometryType.GeoMultiPoint: // GeoPoints_Type : 2
    //       geometry = new GeoMultiPoint();
    //       geometry.ObjId = geometryId;
    //       break;

    //     // case 3: // GeoCir_Type : 3
    //     // geometry = new GeoCir();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 4: // GeoCir3_Type : 4
    //     // geometry = new GeoCir3();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 5: // GeoEllipse_Type : 5
    //     // geometry = new GeoEllipse();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 6: // GeoArc_Type: 6
    //     // geometry = new GeoArc();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 7: // GeoArc3_Type : 7
    //     // geometry = new GeoArc3();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 8: // GeoRect_Type : 8
    //     // geometry = new GeoRect();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 9: // GeoRect1_Type : 9
    //     // geometry = new GeoRect1();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 10: // GeoSpline_Type : 10
    //     // geometry = new GeoSpline();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     // case 11: // GeoBezier_Type : 11
    //     // geometry = new GeoBezier();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     case GeometryType.GeoVarLine: // GeoVarLine_Type : 12
    //       geometry = new GeoVarLine();
    //       geometry.ObjId = geometryId;
    //       break;

    //     // case 13: // GeoLines_Type : 13
    //     //   geometry = new GeoLines();
    //     //   geometry.ObjId = geometryId;
    //     //   break;

    //     case GeometryType.GeoPolygon: // GeoPolygon_Type : 14
    //       geometry = new GeoPolygon();
    //       geometry.ObjId = geometryId;
    //       break;

    //     // case 15: // GeoPolygons_Type : 15
    //     //   geometry = new GeoPolygons();
    //     //   geometry.ObjId = geometryId;
    //     //   break;

    //     // case 16: // GeoGeometrys_Type : 16
    //     // geometry = new GeoGeometrys();
    //     // geometry.ObjId = geometryId;
    //     // break;

    //     case GeometryType.GeoAnno: // GeoAnno_Type : 17

    //       geometry = new GeoAnno();
    //       geometry.ObjId = geometryId;
    //       let geometryAnnType = await geometry.getAnnType();

    //       switch (geometryAnnType) {
    //         case AnnType.AnnUnknown: // 未知类型:-1-AnnType.AnnUnknown，直接返回GeoAnno
    //           geometry = new GeoAnno();
    //           geometry.ObjId = geometryId;
    //           break;
    //         case AnnType.AnnText: //字符串注记类型标志:0-AnnType.AnnText
    //           geometry = new TextAnno();
    //           geometry.ObjId = geometryId;
    //           break;
    //         // case 1: // html版面注记类型标志:1-AnnType.AnnHTML
    //         // geometry = new HtmlAnno();
    //         // geometry.ObjId = geometryId;
    //         // break;
    //         // case 2: // 2-AnnType.AnnAtt
    //         //   break;
    //         // case 3: // 2-AnnType.AnnDim
    //         //   break;
    //         // case 4: // 弧注记类型标志:4-AnnType.AnnDim
    //         // geometry = new ArcAnno();
    //         // geometry.ObjId = geometryId;
    //         //   break;
    //         // case 5: // 圆注记类型标志:5-AnnType.AnnCirCle
    //         // geometry = new CircleAnno();
    //         // geometry.ObjId = geometryId;
    //         //   break;
    //         // case 6: // 图像注记类型标志:6-AnnType.AnnImage
    //         // geometry = new ImageAnno();
    //         // geometry.ObjId = geometryId;
    //         // break;
    //       }
    //       break;
    //   }
    // }else{
    //   geometry = new Geometry();
    // }

    // return geometry;

    let geometry = new Geometry();
    geometry.ObjId = geometryId;
    return geometry;
  }

}
