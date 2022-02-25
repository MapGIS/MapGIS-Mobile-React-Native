/**
 * @content 矩形对象功能组件
 * @author fangqi 2021-7-18 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Rect
 */
export default class Rect extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RECT;
  }

  /**
   * 构造一个新的 Rect 对象。可通过无参构造和有参构造
   * 
   * 有参参数，参数为xMin, yMin, xMax, yMax，均为Number类型
   * @memberOf Rect
   * @returns {Promise.<Rect>}
   */
  static async createInstance(): Promise<Rect> {
    let thisObj = new Rect();
    if (
      typeof arguments[0] === 'number' &&
      typeof arguments[1] === 'number' &&
      typeof arguments[2] === 'number' &&
      typeof arguments[3] === 'number'
    ) {
      let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
      let initParamsStr = [arguments[0], arguments[1], arguments[2], arguments[3]];
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
   * 获取x最小值
   * @memberOf Rect
   * @returns {Promise<*>}
   */
  async getXMin(): Promise<number> {
    let methodName = "getXMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取y最小值
   * @memberOf Rect
   * @returns {Promise<*>}
   */
  async getYMin(): Promise<number> {
    let methodName = "getYMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取x最大值
   * @memberOf Rect
   * @returns {Promise<*>}
   */
  async getXMax(): Promise<number> {
    let methodName = "getXMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取y最大值
   * @memberOf Rect
   * @returns {Promise<*>}
   */
  async getYMax(): Promise<number> {
    let methodName = "getYMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置x最小值
   * @memberOf Rect
   * @param xMin x最小值
   * @returns {Promise<void>}
   */
  async setXMin(xMin: number): Promise<void> {
    let methodName = "setXMin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [xMin];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置y最小值
   * @memberOf Rect
   * @param yMin y最小值
   * @returns {Promise<void>}
   */
  async setYMin(yMin: number): Promise<void> {
    let methodName = "setYMin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [yMin];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置x最大值
   * @memberOf Rect
   * @param xMax x最大值
   * @returns {Promise<void>}
   */
  async setXMax(xMax: number): Promise<void> {
    let methodName = "setXMax"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [xMax];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置y最大值
   * @memberOf Rect
   * @param yMax y最大值
   * @returns {Promise<void>}
   */
  async setYMax(yMax: number): Promise<void> {
    let methodName = "setYMax"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [yMax];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
