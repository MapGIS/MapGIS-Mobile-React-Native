/**
 * @content 热力点功能组件
 * @author fangqi 2021-10-08
 */

import ObjectManager from '../components/ObjectManager';
import Dot from '../geoobject/Dot';
/**
 * @class HeatmapPoint
 */
export default class HeatmapPoint extends ObjectManager {

  getClassName(): String {
    return this.CLASS_HEATMAP_POINT;
  }

  /**
   * 构造一个新的 HeatmapPoint 对象。
   * @memberOf HeatmapPoint
   * @returns {Promise.<HeatmapPoint>}
   */
  static async createInstance(): Promise<HeatmapPoint> {
    let thisObj = new HeatmapPoint();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置热力点坐标
   * @memberOf HeatmapPoint
   * @param {Dot} point
   * @returns {Promise<void>}
   */
  async setPoint(point: Dot): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取热力点坐标
   *  @memberOf HeatmapPoint
   * @returns {Promise<Dot>}
   */
  async getPoint(): Promise<Dot> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置热力点权重
   * @memberOf HeatmapPoint
   * @param {Number} value
   * @returns {Promise<void>}
   */
  async setValue(value: number): Promise<void> {
    let methodName = "setValue"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取热力点权重
   *  @memberOf HeatmapPoint
   * @returns {Promise<*>}
   */
  async getValue(): Promise<number> {
    let methodName = "getValue"
    return await this.invoke(methodName, this.NUMBER);
  }

}
