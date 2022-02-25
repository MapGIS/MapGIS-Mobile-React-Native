/**
 * @content 场景线图形
 * @author fangqi 2021-12-01 
 */
import type Dot3D from '../geoobject/Dot3D';
import { getArrayObjIds } from '../components/ObjectManager';
import GraphicMultiPoint3D from './GraphicMultiPoint3D';

/**
 * @class GraphicPolyline3D
 */
export default class GraphicPolyline3D extends GraphicMultiPoint3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_POLYLINE3D;
  }

  /**
   * 构造一个新的 GraphicPolyline3D 对象。
   * @memberOf GraphicPolyline3D
   * @returns {Promise.<GraphicPolyline3D>}
   */
   static async createInstance(): Promise<GraphicPolyline3D> {
    let thisObj = new GraphicPolyline3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 GraphicPolyline3D 对象。
   * @memberOf GraphicPolyline3D
   * @param points3D - 坐标点序列
   * @returns {Promise<void>}
   */
  static async createInstanceByParam(points3D: Dot3D[]): Promise<GraphicPolyline3D> {
    let thisObj = new GraphicPolyline3D();
    let arrayID = getArrayObjIds(points3D);
    let initParamsType = [thisObj.ARRAY + thisObj.CLASS_DOT3D];
    let initParamsStr = [arrayID];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置线宽
   * @memberOf GraphicPolyline3D
   * @param {double} width - 线宽
   * @returns {Promise<void>}
   */
  async setLineWidth(width: number): Promise<void> {
    let methodName = "setLineWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线宽
   * @memberOf GraphicPolyline3D
   * @returns {Promise<Number>} 返回线宽
   */
  async getLineWidth(): Promise<number> {
    let methodName = "getLineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取线的长度
   * @memberOf GraphicPolyline3D
   * @returns {Promise<number>} 返回线的长度
   */
  async getLength(): Promise<number> {
    let methodName = "getLength"
    return await this.invoke(methodName, this.NUMBER);
  }

}
