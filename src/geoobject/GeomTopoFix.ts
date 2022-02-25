/**
 * @content 几何修复
 * @author fangqi 2021-11-02
 */
import ObjectManager from '../components/ObjectManager';
import type Dots from './Dots';
import Geometry from './Geometry';

/**
 * @class GeomTopoFix
 */
export default class GeomTopoFix extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOM_TOPO_FIX;
  }

  /**
   * 删除重复坐标
   * @memberOf GeomTopoFix
   * @param geom - 几何对象(支持类型：点、线、多线、区、多区)
   * @param tolerance - 容差
   * @return {Promise.<Number>} 小于等于0: 失败；大于0: 成功
   */
  static async deleteRepeatedDot(geom: Geometry, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoFix();
    let methodName = "deleteRepeatedDot"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 删除重复坐标
   * @memberOf GeomTopoFix
   * @param dots - 点数组
   * @param tolerance - 容差
   * @return {Promise.<Number>} 小于等于0: 失败；大于0: 成功
   */
  static async deleteRepeatedDotByDots(dots: Dots, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoFix();
    let methodName = "deleteRepeatedDot"
    let paramsTypeStr = [thisObj.CLASS_DOTS, thisObj.DOUBLE];
    let paramsStr = [dots.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 封闭区（别名：封闭圈）
   * @memberOf GeomTopoFix
   * @param geom - 输入区（支持类型：区、多区）
   * @param tolerance - 容差
   * @return {Promise.<Number>} 小于等于0: 失败；大于0: 成功
   * 1.首尾点坐标不一致，且距离大于容差：则增加一个新尾点（与首点坐标相同）
   * 2.首尾点坐标不一致，且距离小于容差：则修改原始尾点值（与首点坐标相同）
   */
  static async closePolygon(geom: Geometry, tolerance: number): Promise<number> {
    let thisObj = new GeomTopoFix();
    let methodName = "closePolygon"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 标准化区方向
   * @memberOf GeomTopoFix
   * @param geom - 输入区（支持类型：区、多区）
   * @return {Promise.<Number>} 小于等于0: 失败；大于0: 成功
   * 1.调整为：外圈顺时针，内圈逆时针。符合OGC几何模型标准。
   */
  static async standardizePolygonDirection(geom: Geometry): Promise<number> {
    let thisObj = new GeomTopoFix();
    let methodName = "standardizePolygonDirection"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geom.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 剪断自相交
   * @memberOf GeomTopoFix
   * @param geom - 线对象（支持类型：线、多线）
   * @param tolerance - 容差
   * @return {Promise.<Number>} 剪断后的线结果
   * 1.对于自重叠的情况，剪断自相交后重叠部分只保留一条线
   */
  static async clipSelfIntersection(geom: Geometry, tolerance: number): Promise<Geometry> {
    let thisObj = new GeomTopoFix();
    let methodName = "clipSelfIntersection"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY, thisObj.DOUBLE];
    let paramsStr = [geom.ObjId, tolerance];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new Geometry();
    obj.ObjId = ObjId;
    return obj;
  }

}
