/**
 * @content 点对象功能组件
 * @author fangqi 2021-7-24 
 */
import Dot from '../geoobject/Dot';
import Graphic from './Graphic';


/**
 * @constructor GraphicPoint
 */
export default class GraphicPoint extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_POINT;
  }

  /**
   * 构造一个新的 GraphicPoint 对象。
   * @memberOf GraphicPoint
   * @returns {Promise.<GraphicPoint>}
   */
  static async createInstance(): Promise<GraphicPoint> {
    let thisObj = new GraphicPoint();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置点的位置
   * @memberOf GraphicPoint
   * @param {Dot} point 点的位置
   * @returns {Promise<void>}
   */
  async setPoint(point: Dot): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点的位置
   * @memberOf GraphicPoint
   * @returns {Promise<Dot>}
   */
  async getPoint(): Promise<Dot> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *设置点的大小
   * @memberOf GraphicPoint
   * @param {Number} size
   * @returns {Promise<void>}
   */
  async setSize(size: number): Promise<void> {
    let methodName = "setSize"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
  /**
   * 获取点的大小
   * @memberOf GraphicPoint
   * @returns {Promise<Number>}
   */
  async getSize(): Promise<number> {
    let methodName = "getSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置点的位置及大小
   *  @memberOf GraphicPoint
   * @param {Dot} point
   * @param {Number} size
   * @returns {Promise<void>}
   */
  async setPointAndSize(point: Dot, size: number): Promise<void> {
    let methodName = "setPointAndSize"
    let paramsTypeStr = [this.CLASS_DOT, this.FLOAT];
    let paramsStr = [point.ObjId, size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
