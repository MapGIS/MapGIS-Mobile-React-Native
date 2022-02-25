/**
 * @content 用于对多边形的几何功能组件
 * @author fangqi 2021-09-11
 */

import Dot from './Dot';
import Dot3D from './Dot3D';
import type Dots from './Dots';
import type Dots3D from './Dots3D';
import GeoLine from './GeoLine';

/**
 * @class GeoVarLine
 */
export default class GeoVarLine extends GeoLine {

  getClassName(): String {
    return this.CLASS_GEO_VAR_LINE;
  }

  /**
   * 构造一个新的 GeoVarLine 对象
   * @memberOf GeoVarLine
   * @return {Promise<GeoVarLine>}
   */
  static async createInstance(): Promise<GeoVarLine> {
    let thisObj = new GeoVarLine();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象的类型
   * @memberOf GeoVarLine
   * @return {Promise} 几何对象类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 添加2维点
   * @memberOf GeoVarLine
   * @param dot 待添加的二维点坐标
   * @return {Promise}添加成功返回1，失败返回0
   */
  async append2D(dot: Dot): Promise<number> {
    let methodName = "append2D"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 添加3维点
   * @memberOf GeoVarLine
   * @param dot 待添加的三维点坐标
   * @return {Promise}添加成功返回1，失败返回0
   */
  async append3D(dot3D: Dot3D): Promise<number> {
    let methodName = "append3D"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除坐标点
   * @memberOf GeoVarLine
   * @param index 待删除的点序号
   * @return {Promise}删除成功返回1，失败返回0
   */
  async del(index: number): Promise<number> {
    let methodName = "del"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取2维点
   * @memberOf GeoVarLine
   * @param index 待获取的点序号
   * @return {Promise<Dot>}获取成功返回1，失败返回0
   */
  async get2D(index: number): Promise<Dot> {
    let methodName = "get2D"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取3维点
   * @memberOf GeoVarLine
   * @param index 待获取的点序号
   * @return {Promise<Dot3D>}获取成功返回1，失败返回0
   */
  async get3D(index: number): Promise<Dot3D> {
    let methodName = "get3D"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取维数
   * @memberOf GeoVarLine
   * @return {Promise}维数
   */
  async getDim(): Promise<number> {
    let methodName = "getDim"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取点数目
   * @memberOf GeoVarLine
   * @return {Promise}点的数目
   */
  async getDotNum(): Promise<number> {
    let methodName = "getDotNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取X坐标值
   * @memberOf GeoVarLine
   * @param index 待获取的点序号
   * @return {Promise}获取该点的X坐标值
   */
  async getX(index: number): Promise<number> {
    let methodName = "getX"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取Y坐标值
   * @memberOf GeoVarLine
   * @param index 待获取的点序号
   * @return {Promise}获取该点的Y坐标值
   */
  async getY(index: number): Promise<number> {
    let methodName = "getY"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取Z坐标值
   * @memberOf GeoVarLine
   * @param index 待获取的点序号
   * @return {Promise}获取该点的Z坐标值
   */
  async getZ(index: number): Promise<number> {
    let methodName = "getZ"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新2维坐标点
   * @memberOf GeoVarLine
   * @param index 待更新的点序号
   * @param dot 待更新的点坐标
   * @return {Promise}更新成功返回1，失败返回0
   */
  async update2D(index: number, dot: Dot): Promise<number> {
    let methodName = "update2D"
    let paramsTypeStr = [this.LONG, this.CLASS_DOT];
    let paramsStr = [index, dot.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新3维坐标点
   * @memberOf GeoVarLine
   * @param index 待更新的点序号
   * @param dot 待更新的点坐标
   * @return {Promise}更新成功返回1，失败返回0
   */
  async update3D(index: number, dot: Dot3D): Promise<number> {
    let methodName = "update3D"
    let paramsTypeStr = [this.LONG, this.CLASS_DOT3D];
    let paramsStr = [index, dot.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 判断线段是否封闭
   * @memberOf GeoVarLine
   * @return {Promise}线段封闭返回true，不封闭返回false
   */
  async isClosed() {
    let methodName = "isClosed"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 清空数据
   * @memberOf GeoVarLine
   * @return {Promise}清空数据成功返回1，失败返回0
   */
  async empty() {
    let methodName = "empty"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 插入点
   * @memberOf GeoVarLine
   * @param index 待插入的点序号
   * @param dots 待插入的点集
   * @return {Promise}更新成功返回1，失败返回0
   */
   async insert2D(index: number, dots: Dots): Promise<number> {
    let methodName = "insert2D"
    let paramsTypeStr = [this.INT, this.CLASS_DOTS];
    let paramsStr = [index, dots.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 插入点
   * @memberOf GeoVarLine
   * @param index 待插入的点序号
   * @param dots 待插入的点集
   * @return {Promise}更新成功返回1，失败返回0
   */
   async insert3D(index: number, dots3D: Dots3D): Promise<number> {
    let methodName = "insert3D"
    let paramsTypeStr = [this.INT, this.CLASS_DOTS3D];
    let paramsStr = [index, dots3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
