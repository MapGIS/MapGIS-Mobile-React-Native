/**
 * @content 用于对多边形的几何功能组件
 * @author fangqi 2021-09-11
 */
import Dot3D from './Dot3D';
import Geometry from './Geometry';

/**
 * @class GeoPoint
 */
export default class GeoPoint extends Geometry {

  getClassName(): String {
    return this.CLASS_GEO_POINT;
  }

  /**
   * 构造一个新的 GeoPoint 对象
   * @memberOf GeoPoint
   * @return {Promise<GeoPoint>}
   */
  static async createInstance(): Promise<GeoPoint> {
    let thisObj = new GeoPoint();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象的类型
   * @memberOf GeoPoint
   * @return {Promise} 几何对象类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 取几何维数
   * @memberOf GeoPoint
   * @return {Promise} 几何维数
   */
  async getDimension() {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取三维坐标点
   * @memberOf GeoPoint
   * @return {Promise<Dot3D>}获取的三维坐标点
   */
  async get(): Promise<Dot3D> {
    let methodName = "get"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置三维坐标点
   * @memberOf GeoPoint
   * @param dot3D 待设置的三维坐标点
   * @return {Promise}设置成功返回1，失败返回0
   */
  async set(dot3D: Dot3D): Promise<number> {
    let methodName = "set"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 将坐标转换为字符串
   * @memberOf GeoPoint
   * @return {Promise}转换后的字符串
   */
  async toString(): Promise<String> {
    let methodName = "toString"
    return await this.invoke(methodName, this.STRING);
  }

}
