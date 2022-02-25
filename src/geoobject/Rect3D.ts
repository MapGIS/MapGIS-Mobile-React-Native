/**
 * @content 
 * @author fangqi 2021-11-25 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Rect3D
 */
export default class Rect3D extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RECT3D;
  }

  /**
   * 构造一个新的 Rect3D 对象。可通过无参构造和有参构造
   * 
   * 有参参数，参数为xMin, yMin, zMin, xMax, yMax，zMax 均为Number类型
   * @memberOf Rect3D
   * @returns {Promise.<Rect3D>}
   */
  static async createInstance(): Promise<Rect3D> {
    let thisObj = new Rect3D();
    if (
      typeof arguments[0] === 'number' &&
      typeof arguments[1] === 'number' &&
      typeof arguments[2] === 'number' &&
      typeof arguments[3] === 'number' &&
      typeof arguments[4] === 'number' &&
      typeof arguments[5] === 'number'
    ) {
      let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
      let initParamsStr = [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]];
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
   * @memberOf Rect3D
   * @returns {Promise<*>}
   */
  async getXMin(): Promise<number> {
    let methodName = "getXMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取y最小值
   * @memberOf Rect3D
   * @returns {Promise<*>}
   */
  async getYMin(): Promise<number> {
    let methodName = "getYMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取z最小值
   * @memberOf Rect3D
   * @returns {Promise<*>}
   */
  async getZMin(): Promise<number> {
    let methodName = "getZMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取x最大值
   * @memberOf Rect3D
   * @returns {Promise<*>}
   */
  async getXMax(): Promise<number> {
    let methodName = "getXMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取y最大值
   * @memberOf Rect3D
   * @returns {Promise<*>}
   */
  async getYMax(): Promise<number> {
    let methodName = "getYMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取z最大值
   * @memberOf Rect3D
   * @returns {Promise<*>}
   */
  async getZMax(): Promise<number> {
    let methodName = "getZMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置x最小值
   * @memberOf Rect3D
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
   * @memberOf Rect3D
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
   * 设置z最小值
   * @memberOf Rect3D
   * @param min z最小值
   * @returns {Promise<void>}
   */
  async setZMin(min: number): Promise<void> {
    let methodName = "setZMin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [min];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置x最大值
   * @memberOf Rect3D
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
   * @memberOf Rect3D
   * @param yMax y最大值
   * @returns {Promise<void>}
   */
  async setYMax(yMax: number): Promise<void> {
    let methodName = "setYMax"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [yMax];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置z最大值
   * @memberOf Rect3D
   * @param max z最大值
   * @returns {Promise<void>}
   */
  async setZMax(max: number): Promise<void> {
    let methodName = "setZMax"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [max];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
