/**
 * @content 比例尺区间
 * @author fangqi 2021-7-18 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class ScaleRange
 */
export default class ScaleRange extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SCALE_RANGE;
  }

  /**
   * 构造一个新的 ScaleRange 对象。可通过无参构造和有参构造
   * 
   * 有参参数，参数为minScale, maxScale，均为Number类型
   * @memberOf ScaleRange
   * @returns {Promise.<ScaleRange>}
   */
  static async createInstance(): Promise<ScaleRange> {
    let thisObj = new ScaleRange();
    if (
      typeof arguments[0] === 'number' &&
      typeof arguments[1] === 'number'
    ) {
      let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE];
      let initParamsStr = [arguments[0], arguments[1]];
      thisObj.ObjId = await thisObj.createByParam(
        initParamsType,
        initParamsStr
      );
    } else {
      thisObj.ObjId = await thisObj.create();
    }
    return thisObj;
  }

  /**
   * 获取最小比例尺
   * @memberOf ScaleRange
   * @returns {Promise<*>} 最小比例尺
   */
  async getMinScale(): Promise<number> {
    let methodName = "getMinScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小比例尺
   * @memberOf ScaleRange
   * @param minScale 最小比例尺
   * @returns {Promise<void>}
   */
  async setMinScale(minScale: number): Promise<void> {
    let methodName = "setMinScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最大比例尺
   * @memberOf ScaleRange
   * @returns {Promise<*>} 最大比例尺
   */
  async getMaxScale(): Promise<number> {
    let methodName = "getMaxScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大比例尺
   * @memberOf ScaleRange
   * @param maxScale 最小比例尺
   * @returns {Promise<void>}
   */
  async setMaxScale(maxScale: number): Promise<void> {
    let methodName = "setMaxScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [maxScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
