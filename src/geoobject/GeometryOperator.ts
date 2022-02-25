/**
 * @content 几何操作类
 * @author fangqi 2021-09-09
 */
import Geometry from './Geometry';
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import type SRefData from './SRefData';
import type GeoVarLine from './GeoVarLine';
import type Rect from './Rect';
import type GeoPolygon from './GeoPolygon';
import MRRect from './MRRect';
import type IDPair from './IDPair';
import type ElpTransParam from './ElpTransParam';
import Dot from './Dot';
import type Dots from './Dots';

/**
 * @class GeometryOperator
 */
export default class GeometryOperator extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOMETRY_OPERATOR;
  }

  /**
   * 投影变换
   * @memberOf GeometryOperator
   * @param srcGeom 原始几何
   * @param srcSRef 原始参照系
   * @param desSRef 目的参照系
   * @returns {Promise<Geometry>} 结果几何
   */
  static async project(srcGeom: Geometry, srcSRef: SRefData, desSRef: SRefData) {
    let thisObj = new GeometryOperator();
    let methodName = "project"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_SREF_DATA, thisObj.CLASS_SREF_DATA];
    let paramsStr = [srcGeom.ObjId, srcSRef.ObjId, desSRef.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 投影变换
   * @memberOf GeometryOperator
   * @param srcGeom 原始几何
   * @param srcSRef 原始参照系
   * @param desSRef 目的参照系
   * @param transParam 椭球变换参数（null，不做椭球变换）
   * @returns {Promise<Geometry>} 结果几何
   */
  static async projectByParam(srcGeom: Geometry, srcSRef: SRefData, desSRef: SRefData, transParam: ElpTransParam) {
    let thisObj = new GeometryOperator();
    let methodName = "project"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_SREF_DATA, thisObj.CLASS_SREF_DATA, thisObj.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [srcGeom.ObjId, srcSRef.ObjId, desSRef.ObjId, transParam];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 计算区面积
   * @memberOf GeometryOperator
   * @param geom 区
   * @returns {Promise<number>} 面积值
   */
  static async calculateArea(geom: Geometry): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateArea"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算三角形面积
   * @memberOf GeometryOperator
   * @param dotA0 第一个顶点
   * @param dotA1 第二个顶点
   * @param dotA2 第三个顶点
   * @returns {Promise<number>} 面积值
   */
  static async calculateTriangleArea(dotA0: Dot, dotA1: Dot, dotA2: Dot): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateTriangleArea"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotA2.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 缓冲分析
   * 
   * (区图元支持负半径缓冲，形成向内"侵蚀"的效果。若负半径值过大，则区图元将被完全侵蚀掉)
   * @memberOf GeometryOperator
   * @param geom 几何对象（点、线、区）
   * @param width 缓冲半径
   * @param capStyle 线端类型
   * @returns {Promise<Geometry>} 缓冲区结果
   */
  static async buffer(geom: Geometry, width: number, capStyle: any) {
    let thisObj = new GeometryOperator();
    let methodName = "buffer"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CAP_STYLES];
    let paramsStr = [geom.ObjId, width, capStyle];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 计算两点距离
   * @memberOf GeometryOperator
   * @param dotA0 A0点
   * @param dotA1 A1点
   * @returns {Promise<number>} 距离值
   */
  static async calculateDistance(dotA0: Dot, dotA1: Dot): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateDistance"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算折线长度
   * @memberOf GeometryOperator
   * @param geom 折线
   * @returns {Promise<number>} 折线的长度值
   */
  static async calculateLineLength(geom: Geometry): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateLineLength"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算区周长
   * @memberOf GeometryOperator
   * @param geom 区
   * @returns {Promise<number>} 区的周长值
   */
  static async calculatePolygonPerimeter(geom: Geometry): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculatePolygonPerimeter"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点到线段的距离
   * @memberOf GeometryOperator
   * @param dotSrc 目标点
   * @param dotA0 线段起点
   * @param dotA1 线段终点
   * @param dotDes 最近点坐标（如果不需要可以传null）
   * @param flagDes 最近点的位置（如果不需要可以传null）
   * @returns {Promise<number>} 距离值
   * 
   * 1.目标点P在线段A0A1的左侧，则距离为点P到点A0的距离
   * 2.目标点P在线段A0A1的中间，则距离为P到垂点的距离
   * 3.目标点P在线段A0A1的右侧，则距离为点P到点A1的距离
   * 4.flagDes:1 最近点为A0 2 最近点为A1 3 最近点为垂点）
   * 
   */
  static async calculateDistanceDotToSegment(dotSrc: Dot, dotA0: Dot, dotA1: Dot, dotDes: Dot, flagDes: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateDistanceDotToSegment"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.SHORT];
    let paramsStr = [dotSrc.ObjId, dotA0.ObjId, dotA1.ObjId, dotDes.ObjId, flagDes];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点到折线的距离
   * @memberOf GeometryOperator
   * @param dotSrc 目标点
   * @param line 折线
   * @param dotDes 最近点坐标（如果不需要可以传null）
   * @param index 最近点所在的线段索引（如果不需要可以传null）
   * @returns {Promise<number>} 距离值
   */
  static async calculateDistanceDotToLine(dotSrc: Dot, line: GeoVarLine, dotDes: Dot, index: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateDistanceDotToLine"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_GEO_VAR_LINE, thisObj.CLASS_DOT, thisObj.INT];
    let paramsStr = [dotSrc.ObjId, line.ObjId, dotDes.ObjId, index];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点到线段的距离
   * @memberOf GeometryOperator
   * @param dotSrc 目标点
   * @param dotA0 射线端点
   * @param dotA1 射线另一点（用于确定方向）
   * @param dotDes 最近点坐标（如果不需要可以传null）
   * @param flagDes 最近点的位置（如果不需要可以传null）
   * @returns {Promise<number>} 距离值
   * 
   * flagCross: 0 最近点为A0 1 最近点为垂点
   * 
   */
  static async calculateDistanceDotToRay(dotSrc: Dot, dotA0: Dot, dotA1: Dot, dotDes: Dot, flagDes: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateDistanceDotToRay"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.SHORT];
    let paramsStr = [dotSrc.ObjId, dotA0.ObjId, dotA1.ObjId, dotDes.ObjId, flagDes];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点到直线的距离
   * @memberOf GeometryOperator
   * @param dotSrc 目标点
   * @param dotA0 直线的一个点
   * @param dotA1 直线的另一个点
   * @param dotDes 垂点坐标（如果不需要可以传null）
   * @returns {Promise<number>} 距离值
   * 
   * flagCross: 0 最近点为A0 1 最近点为垂点
   * 
   */
  static async calculateDistanceDotToStraightLine(dotSrc: Dot, dotA0: Dot, dotA1: Dot, dotDes: Dot): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateDistanceDotToStraightLine"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotSrc.ObjId, dotA0.ObjId, dotA1.ObjId, dotDes.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 区裁剪几何
   * @memberOf GeometryOperator
   * @param geomSrc 被裁几何
   * @param geomClip 裁剪区（支持类型：区，多区）
   * @param clipType 裁剪类型（内裁。外裁）
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async clipGeometryByGeometry(geomSrc: Geometry, geomClip: Geometry, clipType: any, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "clipGeometryByGeometry"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CLIP_TYPE, thisObj.DOUBLE];
    let paramsStr = [geomSrc.ObjId, geomClip.ObjId, clipType, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 区数组裁剪几何数组
   * @memberOf GeometryOperator
   * @param geomsSrc 被裁区数组
   * @param geoms1Clip 裁剪框区数组（支持类型：区，多区）
   * @param clipType 裁剪类型（内裁。外裁）
   * @param tolerance 容差
   * @param geomsDes 结果几何数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async clipGeometrysByGeometrys(geomsSrc: Array<Geometry>, geomsClip: Array<Geometry>, clipType: any, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let geomsClipID = getArrayObjIds(geomsClip);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "clipGeometrysByGeometrys"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CLIP_TYPE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomsSrcID, geomsClipID, clipType, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 区数组裁剪点数组
   * @memberOf GeometryOperator
   * @param dotsSrc 被裁点数组
   * @param geomsClip 裁剪框几何数组（支持类型：区，多区）
   * @param clipType 裁剪类型（内裁。外裁）
   * @param tolerance 容差
   * @param dotsDes 结果几何数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async clipDotsByGeometrys(dotsSrc: Array<Dot>, geomsClip: Array<Geometry>, clipType: any, tolerance: number, dotsDes: Array<Dot>): Promise<number> {
    let dotsSrcID = getArrayObjIds(dotsSrc);
    let geomsClipID = getArrayObjIds(geomsClip);
    let dotsDesID = getArrayObjIds(dotsDes);

    let thisObj = new GeometryOperator();
    let methodName = "clipDotsByGeometrys"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_DOT, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CLIP_TYPE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT];
    let paramsStr = [dotsSrcID, geomsClipID, clipType, tolerance, dotsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 矩形裁剪几何
   * @memberOf GeometryOperator
   * @param geomSrc 被裁几何
   * @param rectClip 裁剪框矩形
   * @param clipType 裁剪类型（内裁。外裁）
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async clipGeometryByRect(geomSrc: Geometry, rectClip: Rect, clipType: any, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "clipGeometryByRect"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_RECT, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CLIP_TYPE, thisObj.DOUBLE];
    let paramsStr = [geomSrc.ObjId, rectClip.ObjId, clipType, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 矩形数组裁剪几何数组
   * @memberOf GeometryOperator
   * @param geomsSrc 被裁几何数组
   * @param rectsClip 裁剪框矩形数组
   * @param clipType 裁剪类型（内裁。外裁）
   * @param tolerance 容差
   * @param geomsDes 结果几何数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async clipGeometrysByRects(geomsSrc: Array<Geometry>, rectsClip: Array<Rect>, clipType: any, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let rectsClipID = getArrayObjIds(rectsClip);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "clipGeometrysByRects"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.ARRAYLIST + thisObj.CLASS_RECT, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CLIP_TYPE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomsSrcID, rectsClipID, clipType, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 矩形裁剪
   * @memberOf GeometryOperator
   * @param dotsSrc 被裁点数组
   * @param rectClip 裁剪框矩形
   * @param clipType 裁剪类型（内裁。外裁）
   * @param tolerance 容差
   * @param dotsDes 结果点数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async clipDotsByRect(dotsSrc: Array<Dot>, rectsClip: Rect, clipType: any, tolerance: number, dotsDes: Array<Dot>): Promise<number> {
    let dotsSrcID = getArrayObjIds(dotsSrc);
    let dotsDesID = getArrayObjIds(dotsDes);

    let thisObj = new GeometryOperator();
    let methodName = "clipDotsByRect"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_DOT, thisObj.CLASS_RECT, thisObj.ENUM + thisObj.CLASS_GEOMETRY_CLIP_TYPE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT];
    let paramsStr = [dotsSrcID, rectsClip.ObjId, clipType, tolerance, dotsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 融合区
   * @memberOf GeometryOperator
   * @param geomSrc0 区0
   * @param geomSrc1 区1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果区
   */
  static async dissolve(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "dissolve"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 融合区
   * @memberOf GeometryOperator
   * @param geomsSrc 待融合区数组
   * @param tolerance 容差
   * @param geomsDes 融合结果
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async dissolveByArray(geomsSrc: Array<Geometry>, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "dissolve"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomsSrcID, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 连接线
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param linkMode 连接模式
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   * 
   * 常规模式连接线：只对结点所关联的两条折线在结点处进行连接（若结点关联折线个数不为2，则不进行连接）
   * 
   */
  static async linkLine(geomSrc0: Geometry, geomSrc1: Geometry, linkMode: any, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "linkLine"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_LINK_MODE, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, linkMode, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 连接线
   * @memberOf GeometryOperator
   * @param geomsSrc 几何数组
   * @param linkMode 连接模式
   * @param tolerance 容差
   * @param geomsDes 结果几何
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   * 
   * 常规模式连接线：只对结点所关联的两条折线在结点处进行连接（若结点关联折线个数不为2，则不进行连接）
   * 
   */
  static async linkLineByArray(geomsSrc: Array<Geometry>, linkMode: any, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "linkLine"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_LINK_MODE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomsSrcID, linkMode, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 叠加分析
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param overlayType 叠加类型
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 叠加后的几何
   * 
   * 1.叠加类型传入内裁和外裁无效
   * 
   */
  static async overlay(geomSrc0: Geometry, geomSrc1: Geometry, overlayType: any, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "overlay"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_OVERLAY_TYPE, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, overlayType, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 求交
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async intersection(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "intersection"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 求并
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async union(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "union"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 求差
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async difference(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "difference"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 求对称差
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async symDifference(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "symDifference"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 更新
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async update(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "update"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 判别
   * @memberOf GeometryOperator
   * @param geomSrc0 几何0
   * @param geomSrc1 几何1
   * @param tolerance 容差
   * @returns {Promise<Geometry>} 结果几何
   */
  static async identity(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number) {
    let thisObj = new GeometryOperator();
    let methodName = "identity"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 拓扑重建
   * @memberOf GeometryOperator
   * @param geomsSrc 几何区对象（支持类型：区，多区）
   * @param saveHole 是否保留空洞（false：不保留空洞；true：保留空洞）
   * @param tolerance 容差
   * @param geomsDes 结果几何数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   * 
   * 常规模式连接线：只对结点所关联的两条折线在结点处进行连接（若结点关联折线个数不为2，则不进行连接）
   * 
   */
  static async rebuild(geomsSrc: Array<Geometry>, saveHole: boolean, tolerance: number, geomsDes: Array<GeoPolygon>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "rebuild"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.BOOLEAN, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEO_POLYGON];
    let paramsStr = [geomsSrcID, saveHole, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 线拓扑造区
   * @memberOf GeometryOperator
   * @param geomsSrc 几何线对象数组（支持的线类型：线，多线）
   * @param dataTrim 是否进行数据处理（false：构区前不对数据进行整理操作；true：构区前对数据进行整理操作）
   * @param tolerance 容差
   * @param geomsDes 结果几何数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   * 
   * 1.数据整理包括（剪断线，去除重复弧段，去除悬挂弧段）
   * 2.如果选择不整理数据，需要保证原始线数据的topo正确性
   * 
   */
  static async buildPolygon(geomsSrc: Array<Geometry>, dataTrim: boolean, tolerance: number, geomsDes: Array<GeoPolygon>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "buildPolygon"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.BOOLEAN, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEO_POLYGON];
    let paramsStr = [geomsSrcID, dataTrim, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 剪断线
   * @memberOf GeometryOperator
   * @param geomsSrc 输入线数组（支持类型：线，多线）
   * @param splitMode 剪断线模式
   * @param tolerance 容差
   * @param geomsDes 结果数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitLine(geomsSrc: Array<Geometry>, splitMode: any, tolerance: number, geomsDes: Array<GeoVarLine>): Promise<number> {
    let geomsSrcID = getArrayObjIds(geomsSrc);
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitLine"
    let paramsTypeStr = [thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY, thisObj.ENUM + thisObj.CLASS_GEOMETRY_SPLIT_MODE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEO_VAR_LINE];
    let paramsStr = [geomsSrcID, splitMode, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 几何分割线（点分割线、线分割线、区分割线）
   * @memberOf GeometryOperator
   * @param geomSrc0 被分割的线对象（支持类型：线，多线）
   * @param geomSrc1 分割点、分割线、分割区
   * @param tolerance 容差
   * @param geomsDes 分割后的结果
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitLineByGeometry(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number, geomsDes: Array<GeoVarLine>): Promise<number> {
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitLineByGeometry"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEO_VAR_LINE];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点分割线
   * @memberOf GeometryOperator
   * @param geomSr 被分割的线对象（支持类型：线，多线）
   * @param dot 分割点
   * @param tolerance 容差
   * @param geomsDes 分割后的结果
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitLineByDot(geomSrc: Geometry, dot: Dot, tolerance: number, geomsDes: Array<GeoVarLine>): Promise<number> {
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitLineByDot"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEO_VAR_LINE];
    let paramsStr = [geomSrc.ObjId, dot.ObjId, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 按距离分割线
   * @memberOf GeometryOperator
   * @param geomSrc 线对象（支持类型：线，多线）
   * @param distance 分割距离
   * @param orientation 方向(0：从线的起点开始，按距离分割； 1：从线的终点开始，按距离分割；)
   * @param tolerance 容差
   * @param geomsDes 分割后的折线
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitLineByDistance(geomSrc: Geometry, distance: number, orientation: number, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitLineByDistance"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.SHORT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomSrc.ObjId, distance, orientation, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 按百分比分割线
   * @memberOf GeometryOperator
   * @param geomSrc 线对象（支持类型：线，多线）
   * @param percentage 百分比 值的范围为[0,1]
   * @param orientation 方向(0：从线的起点开始，按距离分割； 1：从线的终点开始，按距离分割；)
   * @param tolerance 容差
   * @param geomsDes 分割后的折线
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitLineByPercentage(geomSrc: Geometry, percentage: number, orientation: number, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitLineByPercentage"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.SHORT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomSrc.ObjId, percentage, orientation, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 按相等部分分割线
   * @memberOf GeometryOperator
   * @param geomSrc 线对象（支持类型：线，多线）
   * @param partsNum 指定的几部分
   * @param tolerance 容差
   * @param geomsDes 分割后的折线
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitLineByEqualParts(geomSrc: Geometry, partsNum: number, tolerance: number, geomsDes: Array<Geometry>): Promise<number> {
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitLineByEqualParts"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.INT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEOMETRY];
    let paramsStr = [geomSrc.ObjId, partsNum, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 分割区（别名：画线分割区）
   * @memberOf GeometryOperator
   * @param geomSrc0 区对象（支持类型：区，多区）
   * @param geomSrc1 线对象（支持类型：线，多线）
   * @param tolerance 容差
   * @param geomsDes 结果区数组
   * @returns {Promise<number>} 小于等于0：失败；大于0：成功
   */
  static async splitPolygonByLine(geomSrc0: Geometry, geomSrc1: Geometry, tolerance: number, geomsDes: Array<GeoPolygon>): Promise<number> {
    let geomsDesID = getArrayObjIds(geomsDes);

    let thisObj = new GeometryOperator();
    let methodName = "splitPolygonByLine"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_GEO_POLYGON];
    let paramsStr = [geomSrc0.ObjId, geomSrc1.ObjId, tolerance, geomsDesID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 相离 
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false 不相离；true 相离
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区，点-线，点-区，线-区，线-点，区-点，区-线
   * 
   */
  static async disjoint(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "disjoint"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 相交
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false 不相交；true 相交
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区，点-线，点-区，线-区，线-点，区-点，区-线
   * 
   */
  static async intersects(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "intersects"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 相接
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false 不相接；true 相接
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：线-线，区-区，点-线，点-区，线-区，线-点，区-点，区-线
   * 
   */
  static async touches(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "touches"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 穿越相交
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false 不相交；true 相交
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：线-线，点-线，点-区，线-区，线-点，区-点，区-线
   * 
   */
  static async crosses(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "crosses"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 在内
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false geom0不在geom1内；true geom0在geom1内
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区，点-线，点-区，线-区
   * 
   */
  static async within(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "within"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 包含
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false geom0不包含geom1；true geom0包含geom1
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区，线-点，区-点，区-线
   * 
   */
  static async contains(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "contains"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 重叠
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false 不重叠；true 重叠
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区
   * 
   */
  static async overlaps(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "overlaps"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 相同
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false 不相同；true 相同
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区
   * 
   */
  static async equals(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "equals"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 覆盖
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false geom0不覆盖geom1；true geom0覆盖geom1
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区，线-点，区-点，区-线
   * 
   */
  static async covers(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "covers"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 被覆盖
   * @memberOf GeometryOperator
   * @param geom0 几何0
   * @param geom1 几何1
   * @param tolerance 容差
   * @returns {Promise<boolean>} false geom0不被覆盖geom1；true geom0被覆盖geom1
   * 
   * 1.支持几何为复合要素
   * 2.支持类型：点-点，线-线，区-区，线-点，区-点，区-线
   * 
   */
  static async coveredBy(geom0: Geometry, geom1: Geometry, tolerance: number): Promise<boolean> {
    let thisObj = new GeometryOperator();
    let methodName = "coveredBy"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom0.ObjId, geom1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 点在直线的左边（外）还是右边（内）
   * @memberOf GeometryOperator
   * @param dot 点
   * @param dotA0 直线第一个点
   * @param dotA1 直线第二个点
   * @param tolerance 容差
   * @returns {Promise<number>} -2 失败; -1 在外(左); 0 在线上; 1 在内(右)
   */
  static async dotPositionToStraightLine(dot: Dot, dotA0: Dot, dotA1: Dot, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "dotPositionToStraightLine"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dot.ObjId, dotA0.ObjId, dotA1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 相同（别名：重复点）
   * @memberOf GeometryOperator
   * @param dotA0 A0点
   * @param dotA1 A1点
   * @param tolerance 容差
   * @returns {Promise<number>} 小于0：失败；等于0：不相同；1：相同
   */
  static async equalsByDot(dotA0: Dot, dotA1: Dot, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "equals"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 三点是否共线
   * @memberOf GeometryOperator
   * @param dotA0 A0点
   * @param dotA1 A1点
   * @param dotA2 A2点
   * @param tolerance 容差
   * @returns {Promise<number>} 小于0：失败；等于0：不共线；1：共线
   */
  static async collinear(dotA0: Dot, dotA1: Dot, dotA2: Dot, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "collinear"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotA2.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点是否在线段上
   * @memberOf GeometryOperator
   * @param dot 点
   * @param dotA0 线段第一个点
   * @param dotA1 线段第二个点
   * @param tolerance 容差
   * @returns {Promise<number>} 
   * 小于0 失败
   * 等于0 点不在线段上
   * 1 在线段上,但不在端点处
   * 2 点在线段端点处，且点与dotA0相同
   * 3 点在线段端点处，且点与dotA1相同
   */
  static async dotOnSegment(dot: Dot, dotA0: Dot, dotA1: Dot, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "dotOnSegment"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dot.ObjId, dotA0.ObjId, dotA1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点是否在折线上
   * @memberOf GeometryOperator
   * @param dot 点
   * @param line 折线
   * @param tolerance 容差
   * @param index 点在折线上的线段索引号（不需要可以传null）
   * @returns {Promise<number>} 
   * 小于0 失败
   * 等于0 点不在折线上
   * 1 点在折线上
   * 2 在端点处
   */
  static async dotOnLine(dot: Dot, line: GeoVarLine, tolerance: number, index: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "dotOnLine"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_GEO_VAR_LINE, thisObj.DOUBLE, thisObj.INT];
    let paramsStr = [dot.ObjId, line.ObjId, tolerance, index];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点在区内
   * @memberOf GeometryOperator
   * @param dot 点
   * @param geom 区
   * @param tolerance 容差
   * @returns {Promise<number>} 
   * 小于0 失败
   * 等于0 点在区外
   * 1 点在区内
   * 2 点在区边界上
   * 九交模型标准定义Within是：return 1 点在内,不包含在边界的情况
   */
  static async withinByDot2GeoPolygon(dot: Dot, geom: GeoPolygon, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "within"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_GEO_POLYGON, thisObj.DOUBLE];
    let paramsStr = [dot.ObjId, geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 点在矩形内
   * @memberOf GeometryOperator
   * @param dot 点
   * @param rect 矩形
   * @param tolerance 容差
   * @returns {Promise<number>} 
   * 小于0 失败
   * 等于0 点在矩形外
   * 1 点在矩形内
   * 2 点在矩形边界上
   * 九交模型标准定义Within是：return 1 点在内,不包含在边界的情况
   */
  static async withinByDot2Rect(dot: Dot, rect: Rect, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "within"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_RECT, thisObj.DOUBLE];
    let paramsStr = [dot.ObjId, rect.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 矩形和矩形相同
   * @memberOf GeometryOperator
   * @param rect0 矩形0
   * @param rect1 矩形1
   * @param tolerance 容差
   * @returns {Promise<number>} 小于0：失败；等于0：不相同；1：相同
   */
  static async equalsByRect(rect0: Rect, rect1: Rect, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "equals"
    let paramsTypeStr = [thisObj.CLASS_RECT, thisObj.CLASS_RECT, thisObj.DOUBLE];
    let paramsStr = [rect0.ObjId, rect1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 矩形和矩形相交
   * @memberOf GeometryOperator
   * @param rect0 矩形0
   * @param rect1 矩形1
   * @param tolerance 容差
   * @returns {Promise<number>} 小于0：失败；等于0：不相交；1：相交
   */
  static async intersectsByRect(rect0: Rect, rect1: Rect, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "intersects"
    let paramsTypeStr = [thisObj.CLASS_RECT, thisObj.CLASS_RECT, thisObj.DOUBLE];
    let paramsStr = [rect0.ObjId, rect1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 矩形在矩形内
   * @memberOf GeometryOperator
   * @param rect0 矩形0
   * @param rect1 矩形1
   * @param tolerance 容差
   * @returns {Promise<number>} 
   * 小于0 失败
   * 等于0 rect0 不在 rect1 内
   * 1 rect0 完全在 rect1 内（真包含）
   * 2 rect0 和 rect1 相等
   */
  static async withinByRect2Rect(rect0: Rect, rect1: Rect, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "within"
    let paramsTypeStr = [thisObj.CLASS_RECT, thisObj.CLASS_RECT, thisObj.DOUBLE];
    let paramsStr = [rect0.ObjId, rect1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 矩形和矩形相接
   * @memberOf GeometryOperator
   * @param rect0 矩形0
   * @param rect1 矩形1
   * @param tolerance 容差
   * @returns {Promise<number>} 小于0：失败；等于0：不相接；1：相接
   */
  static async touchesByRect(rect0: Rect, rect1: Rect, tolerance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "touches"
    let paramsTypeStr = [thisObj.CLASS_RECT, thisObj.CLASS_RECT, thisObj.DOUBLE];
    let paramsStr = [rect0.ObjId, rect1.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算最小旋转矩形
   * @memberOf GeometryOperator
   * @param geom 输入几何（支持类型：点、多点、线、多线、区、多区）
   * @returns {Promise<number>} 最小旋转矩形
   */
  static async minRotatedRect(geom: Geometry): Promise<MRRect> {
    let thisObj = new GeometryOperator();
    let methodName = "minRotatedRect"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new MRRect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 求几何边界
   * @memberOf GeometryOperator
   * @param geom 输入几何
   * @returns {Promise<Geometry>} 边界几何
   * 1.区的边界是线；线的边界是与起始终止点相一致的多点；点没有边界
   * 2.多区的边界为多线
   */
  static async boundary(geom: Geometry): Promise<Geometry> {
    let thisObj = new GeometryOperator();
    let methodName = "boundary"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 计算凸包
   * @memberOf GeometryOperator
   * @param geom 输入几何（支持类型：点、多点、线、多线、区、多区）
   * @returns {Promise<Geometry>} 凸包几何
   * 凸包:一个能够包含一组图形的最小边界多边形
   */
  static async convexHull(geom: Geometry): Promise<Geometry> {
    let thisObj = new GeometryOperator();
    let methodName = "convexHull"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 计算平行线
   * @memberOf GeometryOperator
   * @param geom 输入几何（支持类型：线、多线）
   * @param distance 偏移距离 (大于0: 线左侧生成平行线；小于0: 线右侧生成平行线)
   * @param joinStyle 线连接处类型
   * @returns {Promise<Geometry>} 平行线
   */
  static async parallel(geom: Geometry, distance: SRefData, joinStyle: any) {
    let thisObj = new GeometryOperator();
    let methodName = "parallel"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.ENUM + thisObj.CLASS_GEOMETRY_JOIN_STYLES];
    let paramsStr = [geom.ObjId, distance, joinStyle];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 计算多边形质心
   * @memberOf GeometryOperator
   * @param geom 输入多边形
   * @returns {Promise<Dot>} 质心
   */
  static async centroid(geom: GeoPolygon): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "centroid"
    let paramsTypeStr = [thisObj.CLASS_GEO_POLYGON];
    let paramsStr = [geom.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算三角形重心
   * @memberOf GeometryOperator
   * @param dotA0 三角形第一个点
   * @param dotA1 三角形第二个点
   * @param dotA2 三角形第三个点
   * @returns {Promise<Geometry>} 重心
   */
  static async gravityCenter(dotA0: Dot, dotA1: Dot, dotA2: any): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "gravityCenter"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotA2.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算三角形外心
   * @memberOf GeometryOperator
   * @param dotA0 三角形第一个点
   * @param dotA1 三角形第二个点
   * @param dotA2 三角形第三个点
   * @returns {Promise<Geometry>} 外心
   */
  static async excenter(dotA0: Dot, dotA1: Dot, dotA2: any): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "excenter"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotA2.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算三角形内心
   * @memberOf GeometryOperator
   * @param dotA0 三角形第一个点
   * @param dotA1 三角形第二个点
   * @param dotA2 三角形第三个点
   * @returns {Promise<Geometry>} 内心
   */
  static async incenter(dotA0: Dot, dotA1: Dot, dotA2: any): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "incenter"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotA2.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算label点
   * @memberOf GeometryOperator
   * @param geom 区对象
   * @returns {Promise<Dot>} Label点
   */
  static async labelDot(geom: GeoPolygon): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "labelDot"
    let paramsTypeStr = [thisObj.CLASS_GEO_POLYGON];
    let paramsStr = [geom.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算垂点
   * @memberOf GeometryOperator
   * @param dotSrc - 目标点
   * @param dotA0 - 直线首点
   * @param dotA1 - 直线尾点
   * @param distance - 输出垂距（如果不需要可以传null）
   * @returns {Promise<Geometry>} 垂点
   */
  static async verticalDot(dotSrc: Dot, dotA0: Dot, dotA1: Dot, distance: number): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "verticalDot"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dotSrc.ObjId, dotA0.ObjId, dotA1.ObjId, distance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算延长点
   * @memberOf GeometryOperator
   * @param dotA0 - 线段首点
   * @param dotA1 - 线段尾点
   * @param distance - 延长距离 （距离值必须大于0）
   * @returns {Promise<Geometry>} 延长点
   */
  static async extendDot(dotA0: Dot, dotA1: Dot, distance: number): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "extendDot"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, distance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算回退点
   * @memberOf GeometryOperator
   * @param dotA0 - 线段首点
   * @param dotA1 - 线段尾点
   * @param distance - 倒退距离（距离值必须大于0）
   * @returns {Promise<Geometry>} 回退点
   */
  static async backwardDot(dotA0: Dot, dotA1: Dot, distance: number): Promise<Dot> {
    let thisObj = new GeometryOperator();
    let methodName = "backwardDot"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, distance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 镜像几何
   * @memberOf GeometryOperator
   * @param geom - 几何（支持类型：点、多点、线、多线、区、多区）
   * @param dot0 - 镜面的第一个点
   * @param dot1 - 镜面的第二个点
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.dot0与dot1不能是重复点，否则计算错误
   * 2.直接更新原始几何对象
   */
  static async mirror(geom: Geometry, dot0: Dot, dot1: Dot): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "mirror"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [geom.ObjId, dot0.ObjId, dot1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 镜像点
   * @memberOf GeometryOperator
   * @param dotSrc - 原始点
   * @param dot0 - 镜面的第一个点
   * @param dot1 - 镜面的第二个点
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.dot0与dot1不能是重复点，否则计算错误
   * 2.直接更新原始点
   */
  static async mirrorByDot(dotSrc: Dot, dot0: Dot, dot1: Dot): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "mirror"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotSrc.ObjId, dot0.ObjId, dot1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 旋转几何
   * @memberOf GeometryOperator
   * @param geom - 输入几何（支持类型：点、多点、线、多线、区、多区）
   * @param dotCenter - 旋转中心
   * @param angle - 旋转角 弧度单位 [0 - 2PI)
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.沿逆时针方向旋转
   * 2.直接更新原始几何对象
   */
  static async rotate(geom: Geometry, dotCenter: Dot, angle: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "rotate"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, dotCenter.ObjId, angle];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 旋转点
   * @memberOf GeometryOperator
   * @param dotSrc - 输入点
   * @param dotCenter - 旋转中心
   * @param angle - 旋转角 弧度单位 [0 - 2PI)
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.沿逆时针方向旋转
   * 2.直接更新原始点
   */
  static async rotateByDot(dotSrc: Dot, dotCenter: Dot, angle: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "rotate"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE];
    let paramsStr = [dotSrc.ObjId, dotCenter.ObjId, angle];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 平移几何
   * @memberOf GeometryOperator
   * @param geom - 输入几何（支持类型：点、多点、线、多线、区、多区）
   * @param moveX - x方向的平移量
   * @param moveY - y方向的平移量
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.直接更新原始几何对象
   */
  static async move(geom: Geometry, moveX: number, moveY: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "move"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, moveX, moveY];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 平移点
   * @memberOf GeometryOperator
   * @param dotSrc - 输入点
   * @param moveX - x方向的平移量
   * @param moveY - y方向的平移量
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.直接更新原始点
   */
  static async moveByDot(dotSrc: Dot, moveX: number, moveY: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "move"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.DOUBLE];
    let paramsStr = [dotSrc.ObjId, moveX, moveY];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 缩放几何
   * @memberOf GeometryOperator
   * @param geom - 输入几何（支持类型：线、多线、区、多区）
   * @param dotCenter - 缩放中心
   * @param zoomX - X值的缩放比例（大于0）
   * @param zoomY - Y值的缩放比例（大于0）
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.直接更新原始几何对象
   */
  static async zoom(geom: Geometry, dotCenter: Dot, zoomX: number, zoomY: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "zoom"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, dotCenter.ObjId, zoomX, zoomY];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 几何坐标逆序（支持类型：线、多线、区、多区）
   * @memberOf GeometryOperator
   * @param geom - 输入几何
   * @returns {Promise<Geometry>} 小于等于0: 失败；大于0: 成功
   * 1.直接更新原始几何对象
   */
  static async reverse(geom: Geometry): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "reverse"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算封闭曲线方向
   * @memberOf GeometryOperator
   * @param dots - 坐标序列
   * @returns {Promise<Geometry>} -1 逆时针;1 顺时针;-2 失败
   */
  static async calculateRingDirection(dots: Dots): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateRingDirection"
    let paramsTypeStr = [thisObj.CLASS_DOTS];
    let paramsStr = [dots.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算线段交点
   * @memberOf GeometryOperator
   * @param segA0 - 线段A的第一个点
   * @param segA1 - 线段A的第二个点
   * @param segB0 - 线段B的第一个点
   * @param segB1 - 线段B的第二个点
   * @param tolerance - 容差
   * @param dotCross0 - 第一个交点
   * @param dotCross1 - 第二个交点
   * @param flag0 - 第一个交点标志
   * @param flag1 - 第二个交点标志
   * @returns {Promise<Geometry>} 小于0 失败；大于等于0 成功
   * 1.交点标示flag通过bit位来表示,且支持组合
   * 0x0000 无交点
   * 0x0001 有交点（穿越相交）
   * 0x0010 交点与A0重合
   * 0x0020 交点与A1重合
   * 0x0040 交点与B0重合
   * 0x0080 交点与B1重合
   * dotCross0与flag0对应，dotCross1与flag1
   */
  static async calculateIntersectionSegmentSegment(segA0: Dot, segA1: Dot, segB0: Dot, segB1: Dot, tolerance: number, dotCross0: Dot, dotCross1: Dot, flag0: number, flag1: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "calculateIntersectionSegmentSegment"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.INT, thisObj.INT];
    let paramsStr = [segA0.ObjId, segA1.ObjId, segB0.ObjId, segB1.ObjId, tolerance, dotCross0.ObjId, dotCross1.ObjId, flag0, flag1];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算折线与折线交点
   * @memberOf GeometryOperator
   * @param line0 - 折线0
   * @param line1 - 折线1
   * @param tolerance 容差
   * @param crossDots - 交点数组
   * @param idPairs - 交点信息数组（如果不需要可以传null）
   * @returns {Promise<number>} 小于0 失败；等于0 没有交点；大于0 交点个数
   * idPairs和crossDots数组长度相同，表示第i个交点由折线0的第idPairs[i].id0条线段和折线1的idPairs[i].id1条线段求出
   */
  static async calculateIntersectionLineLine(line0: GeoVarLine, line1: GeoVarLine, tolerance: number, crossDots: Array<Dot>, idPairs: Array<IDPair>): Promise<number> {
    let crossDotsID = getArrayObjIds(crossDots);
    let idPairsID = getArrayObjIds(idPairs);

    let thisObj = new GeometryOperator();
    let methodName = "calculateIntersectionLineLine"
    let paramsTypeStr = [thisObj.CLASS_GEO_VAR_LINE, thisObj.CLASS_GEO_VAR_LINE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT, thisObj.ARRAYLIST + thisObj.CLASS_ID_PAIR];
    let paramsStr = [line0.ObjId, line1.ObjId, tolerance, crossDotsID, idPairsID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算折线与射线交点
   * @memberOf GeometryOperator
   * @param line - 折线
   * @param rayA0 - 射线的端点
   * @param rayA1 - 射线方向上的一点
   * @param tolerance 容差
   * @param crossDots - 交点数组
   * @param idPairs - 交点信息数组（如果不需要可以传null）
   * @returns {Promise<number>} 小于0 失败；等于0 没有交点；大于0 交点个数
   * idPairs和crossDots数组长度相同，表示第i个交点由折线0的第idPairs[i].id0条线段和射线求出，id1无效
   */
  static async calculateIntersectionLineRay(line: GeoVarLine, rayA0: Dot, rayA1: Dot, tolerance: number, crossDots: Array<Dot>, idPairs: Array<IDPair>): Promise<number> {
    let crossDotsID = getArrayObjIds(crossDots);
    let idPairsID = getArrayObjIds(idPairs);

    let thisObj = new GeometryOperator();
    let methodName = "calculateIntersectionLineRay"
    let paramsTypeStr = [thisObj.CLASS_GEO_VAR_LINE, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT, thisObj.ARRAYLIST + thisObj.CLASS_ID_PAIR];
    let paramsStr = [line.ObjId, rayA0.ObjId, rayA1.ObjId, tolerance, crossDotsID, idPairsID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算折线与直线交点
   * @memberOf GeometryOperator
   * @param line - 折线
   * @param straightLineA0 - 直线方向上的一点
   * @param straightLineA1 - 直线方向上的一点
   * @param tolerance 容差
   * @param crossDots - 交点数组
   * @param idPairs - 交点信息数组（如果不需要可以传null）
   * @returns {Promise<number>} 小于0 失败；等于0 没有交点；大于0 交点个数
   * idPairs和crossDots数组长度相同，表示第i个交点由折线0的第idPairs[i].id0条线段和直线求出，id1无效
   */
  static async calculateIntersectionLineStraightLine(line: GeoVarLine, straightLineA0: Dot, straightLineA1: Dot, tolerance: number, crossDots: Array<Dot>, idPairs: Array<IDPair>): Promise<number> {
    let crossDotsID = getArrayObjIds(crossDots);
    let idPairsID = getArrayObjIds(idPairs);

    let thisObj = new GeometryOperator();
    let methodName = "calculateIntersectionLineStraightLine"
    let paramsTypeStr = [thisObj.CLASS_GEO_VAR_LINE, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT, thisObj.ARRAYLIST + thisObj.CLASS_ID_PAIR];
    let paramsStr = [line.ObjId, straightLineA0.ObjId, straightLineA1.ObjId, tolerance, crossDotsID, idPairsID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算折线自相交的交点
   * @memberOf GeometryOperator
   * @param line - 折线
   * @param tolerance 容差
   * @param crossDots - 交点数组
   * @param idPairs - 交点信息数组（如果不需要可以传null）
   * @returns {Promise<number>} 小于0 失败；等于0 没有交点；大于0 交点个数
   * idPairs和crossDots数组长度相同，表示第i个交点由折线的第idPairs[i].id0条线段和第idPairs[i].id1求出
   */
  static async calculateLineSelfIntersection(line: GeoVarLine, tolerance: number, crossDots: Array<Dot>, idPairs: Array<IDPair>): Promise<number> {
    let crossDotsID = getArrayObjIds(crossDots);
    let idPairsID = getArrayObjIds(idPairs);

    let thisObj = new GeometryOperator();
    let methodName = "calculateLineSelfIntersection"
    let paramsTypeStr = [thisObj.CLASS_GEO_VAR_LINE, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT, thisObj.ARRAYLIST + thisObj.CLASS_ID_PAIR];
    let paramsStr = [line.ObjId, tolerance, crossDotsID, idPairsID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算直线与外包矩形的交点
   * @memberOf GeometryOperator
   * @param straightLineA0 - 直线第一个点
   * @param straightLineA1 - 直线第二个点
   * @param rect - 外包矩形
   * @param tolerance 容差
   * @param crossDots - 交点数组
   * @returns {Promise<number>} 小于0 失败；等于0 没有交点；大于0 交点个数
   */
  static async calculateIntersectionStraightLineRect(straightLineA0: Dot, straightLineA1: Dot, rect: Rect, tolerance: number, crossDots: Array<Dot>): Promise<number> {
    let crossDotsID = getArrayObjIds(crossDots);

    let thisObj = new GeometryOperator();
    let methodName = "calculateIntersectionStraightLineRect"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_RECT, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT];
    let paramsStr = [straightLineA0.ObjId, straightLineA1.ObjId, rect.ObjId, tolerance, crossDotsID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 计算直线与区的交点
   * @memberOf GeometryOperator
   * @param straightLineA0 - 直线第一个点
   * @param straightLineA1 - 直线第二个点
   * @param geom - 区
   * @param tolerance 容差
   * @param crossDots - 交点数组
   * @returns {Promise<number>} 小于等于0 失败；大于0 成功
   */
  static async calculateIntersectionStraightLinePolygon(straightLineA0: Dot, straightLineA1: Dot, geom: GeoPolygon, tolerance: number, crossDots: Array<Dot>): Promise<number> {
    let crossDotsID = getArrayObjIds(crossDots);

    let thisObj = new GeometryOperator();
    let methodName = "calculateIntersectionStraightLinePolygon"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_GEO_POLYGON, thisObj.DOUBLE, thisObj.ARRAYLIST + thisObj.CLASS_DOT];
    let paramsStr = [straightLineA0.ObjId, straightLineA1.ObjId, geom.ObjId, tolerance, crossDotsID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * DouglasPeucker法化简线（DP化简）
   * @memberOf GeometryOperator
   * @param srcDots - 输入点序列
   * @param desDots - 化简后的点序列
   * @param distance - 化简垂距阈值
   * @returns {Promise<number>} 小于等于0 失败；大于0 成功
   */
  static async douglasPeuckerSimplify(srcDots: Dots, desDots: Dots, distance: number): Promise<number> {
    let thisObj = new GeometryOperator();
    let methodName = "DouglasPeuckerSimplify"
    let paramsTypeStr = [thisObj.CLASS_DOTS, thisObj.CLASS_DOTS, thisObj.DOUBLE];
    let paramsStr = [srcDots.ObjId, desDots.ObjId, distance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
