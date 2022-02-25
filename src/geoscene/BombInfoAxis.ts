/**
 * @content 
 * @author fangqi 2021-12-03 
 */

import BombInfo from "./BombInfo";

/**
 * @class BombInfoAxis
 */
export default class BombInfoAxis extends BombInfo {

  getClassName(): String {
    return this.CLASS_BOMB_INFO_AXIS;
  }

  /**
   * 构造一个新的 BombInfoAxis 对象。
   * @memberOf BombInfoAxis
   * @returns {Promise.<BombInfoAxis>}
   */
  static async createInstance(): Promise<BombInfoAxis> {
    let thisObj = new BombInfoAxis();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取轴向爆炸的类型
   * @memberOf BombInfoAxis
   * @returns {AxisType} 轴向爆炸的类型
   */
   async getAxisType(): Promise<any> {
    let methodName = "getAxisType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置轴向爆炸的类型
   * @memberOf BombInfoAxis
   * @param {AxisType} axisType - 轴向爆炸的类型
   * @returns {Promise<Void>}
   */
  async setAxisType(axisType: any): Promise<void> {
    let methodName = "setAxisType"
    let paramsTypeStr = [this.ENUM + this.CLASS_AXIS_TYPE];
    let paramsStr = [axisType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取轴向爆炸的距离
   * @memberOf BombInfoAxis
   * @returns {number} 轴向爆炸的距离
   */
  async getDistance(): Promise<number> {
    let methodName = "getDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置轴向爆炸的距离
   * @memberOf BombInfoAxis
   * @param {number} distance - 轴向爆炸的距离
   * @returns {Promise<Void>}
   */
  async setDistance(distance: number): Promise<void> {
    let methodName = "setDistance"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [distance];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
