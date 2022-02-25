/**
 * @content 
 * @author fangqi 2021-10-13 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Pnt3Struct
 */
export default class Pnt3Struct extends ObjectManager {

  getClassName(): String {
    return this.CLASS_PNT3_STRUCT;
  }

  /**
   * 构造一个新的 Pnt3Struct 对象。
   * @memberOf Pnt3Struct
   * @returns {Promise.<Pnt3Struct>}
   */
  static async createInstance(): Promise<Pnt3Struct> {
    let thisObj = new Pnt3Struct();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取X
   * @memberOf Pnt3Struct
   * @returns {Promise<*>}
   */
  async getX(): Promise<number> {
    let methodName = "getX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X
   * @memberOf Pnt3Struct
   * @param x 
   * @returns {Promise<void>}
   */
  async setX(x: number): Promise<void> {
    let methodName = "setX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [x];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Y
   * @memberOf Pnt3Struct
   * @returns {Promise<*>}
   */
  async getY(): Promise<number> {
    let methodName = "getY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y
   * @memberOf Pnt3Struct
   * @param y 
   * @returns {Promise<void>}
   */
  async setY(y: number): Promise<void> {
    let methodName = "setY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [y];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Z
   * @memberOf Pnt3Struct
   * @returns {Promise<*>}
   */
  async getZ(): Promise<number> {
    let methodName = "getZ"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y
   * @memberOf Pnt3Struct
   * @param z 
   * @returns {Promise<void>}
   */
  async setZ(z: number): Promise<void> {
    let methodName = "setZ"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [z];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取XP
   * @memberOf Pnt3Struct
   * @returns {Promise<*>}
   */
  async getXP(): Promise<number> {
    let methodName = "getXP"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置XP
   * @memberOf Pnt3Struct
   * @param xp 
   * @returns {Promise<void>}
   */
  async setXP(xp: number): Promise<void> {
    let methodName = "setXP"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [xp];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取YP
   * @memberOf Pnt3Struct
   * @returns {Promise<*>}
   */
  async getYP(): Promise<number> {
    let methodName = "getYP"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置YP
   * @memberOf Pnt3Struct
   * @param yp 
   * @returns {Promise<void>}
   */
  async setYP(yp: number): Promise<void> {
    let methodName = "setYP"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [yp];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取ZP
   * @memberOf Pnt3Struct
   * @returns {Promise<*>}
   */
  async getZP(): Promise<number> {
    let methodName = "getZP"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置ZP
   * @memberOf Pnt3Struct
   * @param zp 
   * @returns {Promise<void>}
   */
  async setZP(zp: number): Promise<void> {
    let methodName = "setZP"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [zp];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
