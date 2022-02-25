/**
 * @content 几何检查
 * @author fangqi 2021-11-02
 */
import ObjectManager from '../components/ObjectManager';
import type Dots from './Dots';
import type Geometry from './Geometry';

/**
 * @class GeomTopoCheck
 */
export default class GeomTopoCheck extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOM_TOPO_CHECK;
  }

  /**
   * 检查几何是否有足够坐标点
   * @memberOf GeomTopoCheck
   * @param geom 待检查几何（支持线、区）
   * @return {Promise.<Number>} -1 失败；0 点个数不合法；1 点个数合法
   * 每个区至少有四个点,每条线至少有两个点
   */
  static async checkEnoughDot(geom: Geometry): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkEnoughDot"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查重复点
   * @memberOf GeomTopoCheck
   * @param geom - 待检查几何(支持多点、线、多线、区、多区类型)
   * @param tolerance - 容差
   * @return {Promise.<Number>} -1 失败；0 有重复点；1 无重复点
   */
  static async checkRepeatedDot(geom: Geometry, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkRepeatedDot"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查重复点
   * @memberOf GeomTopoCheck
   * @param dots - 点数组
   * @param tolerance - 容差
   * @return {Promise.<Number>} -1 失败；0 有重复点；1 无重复点
   */
  static async checkRepeatedDotByDots(dots: Dots, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkRepeatedDot"
    let paramsTypeStr = [thisObj.CLASS_DOTS, thisObj.DOUBLE];
    let paramsStr = [dots.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查区是否封闭
   * @memberOf GeomTopoCheck
   * @param geom - 待检查区(支持区、多区类型)
   * @return {Promise.<Number>} -1 失败；0 不封闭；1 封闭
   */
  static async checkPolygonClosed(geom: Geometry): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkPolygonClosed"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查几何自相交
   * @memberOf GeomTopoCheck
   * @param geom - 待检查几何(支持线、多线、区、多区类型)
   * @param tolerance - 容差
   * @return {Promise.<Number>} -1 失败；0 自相交；1 无自相交
   */
  static async checkSelfIntersection(geom: Geometry, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkSelfIntersection"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查内圈外圈是否相交
   * @memberOf GeomTopoCheck
   * @param geom - 待检查区(支持区、多区类型)
   * @param tolerance - 容差
   * @return {Promise.<Number>} -1 失败；0 相交；1 不相交
   */
  static async checkIntersectionHoleShell(geom: Geometry, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkIntersectionHoleShell"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查区各圈是否相交
   * @memberOf GeomTopoCheck
   * @param geom - 待检查区(支持区、多区类型)
   * @param tolerance - 容差
   * @return {Promise.<Number>} -1 失败；0 相交；1 不相交
   */
  static async checkIntersectionEachCircle(geom: Geometry, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkIntersectionEachCircle"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查碎小区
   * @memberOf GeomTopoCheck
   * @param geom - 待检查区(支持区、多区类型)
   * @param minArea - 面积阈值
   * @return {Promise.<Number>} -1 失败；0 碎小区；1 非碎小区
   */
  static async checkSmallPolygon(geom: Geometry, minArea: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkSmallPolygon"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, minArea];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查微短线
   * @memberOf GeomTopoCheck
   * @param geom - 待检查线(支持线、多线)
   * @param minLength - 长度阈值
   * @return {Promise.<Number>} -1 失败；0 微短线；1 非微短线
   */
  static async checkShortLine(geom: Geometry, minLength: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkShortLine"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, minLength];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 检查线自重叠
   * @memberOf GeomTopoCheck
   * @param geom - 待检查线(支持线、多线)
   * @param tolerance - 容差
   * @return {Promise.<Number>} -1 失败；0 自重叠；1 不存在自重叠
   */
  static async checkSelfOverlap(geom: Geometry, minLength: number): Promise<number> {
    let thisObj = new GeomTopoCheck();
    let methodName = "checkSelfOverlap"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, minLength];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
