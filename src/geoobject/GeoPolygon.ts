/**
 * @content 用于对多边形的几何功能组件
 * @author fangqi 2021-09-10
 */

import Dots from './Dots';
import Geometry from './Geometry';
import GeoMultiLine from './GeoMultiLine';
import type IntList from './IntList';
import type SRefData from './SRefData';

/**
 * @class GeoPolygon
 */
export default class GeoPolygon extends Geometry {

  getClassName(): String {
    return this.CLASS_GEO_POLYGON;
  }

  /**
   * 构造一个新的 GeoPolygon 对象
   * @memberOf GeoPolygon
   * @return {Promise<GeoPolygon>}
   */
  static async createInstance(): Promise<GeoPolygon> {
    let thisObj = new GeoPolygon();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象的类型
   * @memberOf GeoPolygon
   * @return {Promise} 几何对象类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 取几何维数
   * @memberOf GeoPolygon
   * @return {Promise}几何维数
   */
  async getDimension() {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 删除多边形
   * @memberOf GeoPolygon
   * @param index 待删除多边形序号
   * @return {Promise} 删除成功返回1，失败返回0
   */
  async del(index: number): Promise<number> {
    let methodName = "del"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取圆线数目
   * @memberOf GeoPolygon
   * @return {Promise} 圆线的总个数
   */
  async getCircleNum(): Promise<number> {
    let methodName = "getCircleNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加多线
   * @memberOf GeoPolygon
   * @param ptLines 待添加的多线对象
   * @return {Promise} 添加成功返回1，失败返回0
   */
  async append(ptLines: GeoMultiLine): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_GEO_MULTI_LINE];
    let paramsStr = [ptLines.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取多线
   * @memberOf GeoPolygon
   * @param index 待取的多线的序号
   * @return {Promise<GeoLines>} 获取的多线对象
   */
  async get(index: number): Promise<GeoMultiLine> {
    let methodName = "get"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GeoMultiLine();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 由点构造多边形
   * @memberOf GeoPolygon
   * @param dots 待设置的所有点序列
   * @param {Array}numArray 每条线的点个数列表
   * @return {Promise} 构造成功返回1，失败返回0
   */
  async setDots(dots: Dots, numArray: IntList): Promise<number> {
    let methodName = "setDots"
    let paramsTypeStr = [this.CLASS_DOTS, this.CLASS_INT_LIST];
    let paramsStr = [dots.ObjId, numArray.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取一圈的点序列
   * @memberOf GeoPolygon
   * @param index 待取的点序列的序号
   * @return {Promise<Dots>} 获取的点序列
   */
  async getDots(index: number): Promise<Dots> {
    let methodName = "getDots"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dots();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 求多边形面积
   * @memberOf GeoPolygon
   * @param sRef 投影系
   * @return {Promise} 面积
   */
  async calAreaOfSRef(sRef: SRefData): Promise<number> {
    let methodName = "calArea"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRef.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 求多边形面积
   * @memberOf GeoPolygon
   * @return {Promise} 面积
   */
  async calArea(): Promise<number> {
    let methodName = "calArea"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 求周长
   * @memberOf GeoPolygon
   * @param sRef 投影系
   * @return {Promise}周长
   */
  async calPerimeterOfSRef(sRef: SRefData): Promise<number> {
    let methodName = "calPerimeter"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRef.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 求周长
   * @memberOf GeoPolygon
   * @return {Promise}周长
   */
  async calPerimeter(): Promise<number> {
    let methodName = "calPerimeter"
    return await this.invoke(methodName, this.NUMBER);
  }

}
