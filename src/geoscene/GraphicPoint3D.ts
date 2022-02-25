/**
 * @content 场景点图形
 * @author fangqi 2021-11-30 
 */
import Dot3D from '../geoobject/Dot3D';
import Graphic3D from './Graphic3D';


/**
 * @constructor GraphicPoint3D
 */
export default class GraphicPoint3D extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_POINT3D;
  }

  /**
   * 构造一个新的 GraphicPoint3D 对象。
   * @memberOf GraphicPoint3D
   * @returns {Promise.<GraphicPoint3D>}
   */
  static async createInstance(): Promise<GraphicPoint3D> {
    let thisObj = new GraphicPoint3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 GraphicPoint3D 对象。
   * @memberOf GraphicPoint3D
   * @param {Dot3D} dot3D - 场景地理坐标
   * @param {number} size - 点大小
   * @returns {Promise<void>}
   */
  static async createInstanceByParam(dot3D: Dot3D, size: number): Promise<GraphicPoint3D> {
    let thisObj = new GraphicPoint3D();
    let initParamsType = [thisObj.CLASS_DOT3D, thisObj.DOUBLE];
    let initParamsStr = [dot3D.ObjId, size];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置点的位置及大小
   *  @memberOf GraphicPoint3D
   * @param {Dot3D} dot3D - 场景地理坐标
   * @param {number} size - 点大小
   * @returns {Promise<void>}
   */
  async setPointAndSize(dot3D: Dot3D, size: number): Promise<void> {
    let methodName = "setPointAndSize"
    let paramsTypeStr = [this.CLASS_DOT3D, this.DOUBLE];
    let paramsStr = [dot3D.ObjId, size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置点的位置
   * @memberOf GraphicPoint3D
   * @param {Dot3D} dot3D - 场景地理坐标
   * @returns {Promise<void>}
   */
  async setPoint(dot3D: Dot3D): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点的位置
   * @memberOf GraphicPoint3D
   * @returns {Promise<Dot3D>} 场景地理坐标
   */
  async getPoint(): Promise<Dot3D> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *设置点的大小
   * @memberOf GraphicPoint3D
   * @param {number} size - 点大小
   * @returns {Promise<void>}
   */
  async setSize(size: number): Promise<void> {
    let methodName = "setSize"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
  /**
   * 获取点的大小
   * @memberOf GraphicPoint3D
   * @returns {Promise<number>} 返回点的大小
   */
  async getSize(): Promise<number> {
    let methodName = "getSize"
    return await this.invoke(methodName, this.NUMBER);
  }

}
