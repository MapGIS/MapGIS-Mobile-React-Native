/**
 * @content 实现对在一个二维数组（宽、高）的定义
 * @author fangqi 2021-12-08 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Size
 */
export default class Size extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SIZE;
  }

  /**
   * 构造一个新的 Size 对象。
   * @memberOf Size
   * @returns {Promise<Size>}
   */
  static async createInstance(): Promise<Size> {
    let thisObj = new Size();
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
   * 返回width值
   * @memberOf Size
   * @returns {Promise<number>} width值，宽
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回height值
   * @memberOf Size
   * @returns {Promise<number>} height值，高
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置width值
   * @memberOf Size
   * @param width - 宽
   * @returns {Promise<void>}
   */
  async setWidth(width: number): Promise<void> {
    let methodName = "setWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置height值
   * @memberOf Size
   * @param height - 高
   * @returns {Promise<void>}
   */
  async setHeight(height: number): Promise<void> {
    let methodName = "setHeight"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [height];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
