/**
 * @content 矢量坐标数值精度
 * @author fangqi 2021-11-02 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Precision
 */
export default class Precision extends ObjectManager {

  getClassName(): String {
    return this.CLASS_PRECISION;
  }

  /**
   * 构造一个新的 Precision 对象。
   * @memberOf Precision
   * @returns {Promise.<Precision>}
   */
   static async createInstance(): Promise<Precision> {
    let thisObj = new Precision();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 Precision 对象。
   * @memberOf Precision
   * @returns {Promise.<Precision>}
   */
  static async createInstanceByParam(xPrecisionNew: number, yPrecisionNew: number, zPrecisionNew: number, mPrecisionNew: number): Promise<Precision> {
    let thisObj = new Precision();
    let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
    let initParamsStr = [xPrecisionNew, yPrecisionNew, zPrecisionNew, mPrecisionNew];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取X坐标精度
   * @memberOf Precision
   * @returns {Promise<number>}
   */
  async getXPrecision(): Promise<number> {
    let methodName = "getXPrecision"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X坐标精度
   * @memberOf Precision
   * @param xPrecisioin X坐标精度
   * @returns {Promise<void>}
   */
  async setXPrecisioin(xPrecisioin: number): Promise<void> {
    let methodName = "setXPrecisioin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [xPrecisioin];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Y坐标精度
   * @memberOf Precision
   * @returns {Promise<number>}
   */
  async getYPrecision(): Promise<number> {
    let methodName = "getYPrecision"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y坐标精度
   * @memberOf Precision
   * @param yPrecisioin Y坐标精度
   * @returns {Promise<void>}
   */
  async setYPrecisioin(yPrecisioin: number): Promise<void> {
    let methodName = "setYPrecisioin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [yPrecisioin];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Z坐标精度
   * @memberOf Precision
   * @returns {Promise<number>}
   */
  async getZPrecision(): Promise<number> {
    let methodName = "getZPrecision"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Z坐标精度
   * @memberOf Precision
   * @param zPrecisioin Z坐标精度
   * @returns {Promise<void>}
   */
  async setZPrecisioin(zPrecisioin: number): Promise<void> {
    let methodName = "setZPrecisioin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [zPrecisioin];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取量测值精度
   * @memberOf Precision
   * @returns {Promise<number>}
   */
  async getMPrecision(): Promise<number> {
    let methodName = "getMPrecision"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置量测值精度
   * @memberOf Precision
   * @param mPrecisioin 量测值精度
   * @returns {Promise<void>}
   */
  async setMPrecision(mPrecisioin: number): Promise<void> {
    let methodName = "setMPrecision"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [mPrecisioin];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
