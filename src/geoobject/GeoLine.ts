/**
 * @content 抽象基类，用于定义所有的线段对象基类功能组件
 * @author fangqi 2021-09-09
 */
import Dots from './Dots';
import Dots3D from './Dots3D';
import Geometry from './Geometry';
import type SRefData from './SRefData';

/**
 * @class GeoLine
 */
export default class GeoLine extends Geometry {

  getClassName(): String {
    return this.CLASS_GEO_LINE;
  }

  /**
   * 构造一个新的 GeoLine 对象。
   * @memberOf GeoLine
   * @returns {Promise.<GeoLine>}
   */
  static async createInstance(): Promise<GeoLine> {
    let thisObj = new GeoLine();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取线中的二维点序列
   * @memberOf GeoLine
   * @return {Promise<Dots>}获取的二维点序列
   */
  async get2Dots(): Promise<Dots> {
    let methodName = "get2Dots"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dots();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取线中的三维点序列
   * @memberOf GeoLine
   * @return {Promise<Dots3D>}获取的三维点序列
   */
  async get3Dots(): Promise<Dots3D> {
    let methodName = "get3Dots"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dots3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 计算线实地或者平面长度
   * @memberOf GeoLine
   * @param ptSRef 投影参数
   * @return {Promise}平面长度
   */
  async calLengthOfSRef(sRef: SRefData): Promise<number> {
    let methodName = "calLength"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRef.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取线段长度
   * @memberOf GeoLine
   * @return {Promise}长度值
   */
  async calLength(): Promise<number> {
    let methodName = "calLength"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 离散化解析线为折线点
   * @memberOf GeoLine
   * @param dStep 步长
   * @return {Promise}成功返回1，失败返回0
   */
  async disperseToDots(dStep: SRefData): Promise<number> {
    let methodName = "disperseToDots"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [dStep];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
