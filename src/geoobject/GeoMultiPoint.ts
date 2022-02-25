/**
 * @content 用于对多点的几何功能组件
 * @author fangqi 2021-09-10
 */

import Dot3D from './Dot3D';
import Dots3D from './Dots3D';
import Geometry from './Geometry';

/**
 * @class GeoMultiPoint
 */
export default class GeoMultiPoint extends Geometry {

  getClassName(): String {
    return this.CLASS_GEO_MULTI_POINT;
  }

  /**
   * 构造一个新的 GeoMultiPoint 对象
   * @memberOf GeoMultiPoint
   * @return {Promise<GeoMultiPoint>}
   */
  static async createInstance(): Promise<GeoMultiPoint> {
    let thisObj = new GeoMultiPoint();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象的类型
   * @memberOf GeoMultiPoint
   * @return {Promise} 几何对象类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 取几何维数
   * @memberOf GeoMultiPoint
   * @return {Promise}几何维数
   */
  async getDimension() {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 添加3维点
   * @memberOf GeoMultiPoint
   * @param dot 三维点坐标
   * @return {Promise} 添加成功返回1，失败返回0
   */
  async append(dot3D: Dot3D): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除指定的某个3维点
   * @memberOf GeoMultiPoint
   * @param index 指定的点序列
   * @return {Promise} 删除成功返回1，失败返回0
   */
  async del(index: number): Promise<number> {
    let methodName = "del"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取指定的3维点
   * @memberOf GeoMultiPoint
   * @param index 指定的点序列
   * @return {Promise<Dot3D>}获取到的三维点坐标
   */
  async get(index: number): Promise<Dot3D> {
    let methodName = "get"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取点的总个数
   * @memberOf GeoMultiPoint
   * @return {Promise} 点的总个数
   */
  async getDotNum(): Promise<number> {
    let methodName = "getDotNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取3维点序列
   * @memberOf GeoMultiPoint
   * @return {Promise<Dots3D>}整个三维点序列
   */
  async getDots(): Promise<Dots3D> {
    let methodName = "getDots"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dots3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置3维点序列
   * @memberOf GeoMultiPoint
   * @param dots 待设置的三维点序列
   * @return {Promise} 设置成功返回1，失败返回0
   */
  async setDots(dots3D: Dots3D):Promise<number> {
    let methodName = "setDots"
    let paramsTypeStr = [this.CLASS_DOTS3D];
    let paramsStr = [dots3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }
}
