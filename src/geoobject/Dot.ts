/**
 * @content 点对象功能组件
 * @author fangqi 2021-7-14 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Dot
 */
export default class Dot extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DOT;
  }

  /**
   * 构造一个新的 Dot 对象。
   * @memberOf Dot
   * @returns {Promise.<Dot>}
   */
  static async createInstance(): Promise<Dot> {
    let thisObj = new Dot();
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
   * 获取X坐标
   * @memberOf Dot
   * @returns {Promise<number>}
   */
  async getX(): Promise<number> {
    let methodName = "getX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取Y坐标
   * @memberOf Dot
   * @returns {Promise<number>}
   */
  async getY(): Promise<number> {
    let methodName = "getY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X值
   * @memberOf Dot
   * @param x x坐标
   * @returns {Promise<void>}
   */
  async setX(x: number): Promise<void> {
    let methodName = "setX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [x];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置Y值
   * @memberOf Dot
   * @param y y坐标
   * @returns {Promise<void>}
   */
  async setY(y: number): Promise<void> {
    let methodName = "setY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [y];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
