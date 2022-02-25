/**
 * @content 三维坐标点
 * @author fangqi 2021-08-20
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Dot3D
 * @description 实现对三维坐标点的类型定义
 */
export default class Dot3D extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DOT3D;
  }

  /**
   * 构造一个新的Dot3D对象。有两种构造方法：
   * （1）无参构造
   * （2）通过createObj(x,y,z)构造，x,y,z均为double范围的Number
   * @memberof Dot3D
   * @returns {Promise<Dot3D>}
   */
  static async createInstance(): Promise<Dot3D> {
    let thisObj = new Dot3D();
    if (
      typeof arguments[0] === 'number' &&
      typeof arguments[1] === 'number' &&
      typeof arguments[2] === 'number'
    ) {
      let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
      let initParamsStr = [arguments[0], arguments[1], arguments[2]];
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
   * 返回X值
   *
   * @memberof Dot3D
   * @returns {number} X值（double范围的Number）
   */
  async getX(): Promise<number> {
    let methodName = "getX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回y值
   *
   * @memberof Dot3D
   * @returns {number} y值（double范围的Number）
   */
  async getY(): Promise<number> {
    let methodName = "getY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回z值
   *
   * @memberof Dot3D
   * @returns {number} z值（double范围的Number）
   */
  async getZ(): Promise<number> {
    let methodName = "getZ"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X值
   *
   * @memberof Dot3D
   * @param {number} x x坐标 （double范围的Number）
   * @returns {Promise<Void>}
   */
  async setX(x: number) {
    let methodName = "setX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [x];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置y值
   *
   * @memberof Dot3D
   * @param {number} y x坐标 （double范围的Number）
   * @returns {Promise<Void>}
   */
  async setY(y: number) {
    let methodName = "setY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [y];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置z值
   *
   * @memberof Dot3D
   * @param {number} z z坐标 （double范围的Number）
   * @returns {Promise<Void>}
   */
  async setZ(z: number) {
    let methodName = "setZ"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [z];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
