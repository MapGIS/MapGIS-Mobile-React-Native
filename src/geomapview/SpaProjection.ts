/**
 * @content 空间投影功能组件
 * @author fangqi 2021-09-25
 */

import ObjectManager from '../components/ObjectManager';
import type Dot from '../geoobject/Dot';
import type ElpTransParam from '../geoobject/ElpTransParam';
import SRefData from '../geoobject/SRefData';

/**
 * @class SpaProjection
 * @description 空间投影
 */
export default class SpaProjection extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SPA_PROJECTION;
  }

  /**
   * 构造一个新的 SpaProjection 对象。
   * @memberOf SpaProjection
   * @returns {Promise<SpaProjection>}
   */
  static async createInstance(): Promise<SpaProjection> {
    let thisObj = new SpaProjection();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置源投影参数
   * @memberOf SpaProjection
   * @param {SRefData} sRef 源投影参数
   * @return {Promise.<int>} >0成功； <=0-失败
   */
  async setSourcePara(sRef: SRefData): Promise<number> {
    let methodName = "setSourcePara"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRef.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取源投影参数
   * @memberOf SpaProjection
   * @return {Promise.<SRefData>} 源投影参数
   */
  async getSourcePara(): Promise<SRefData> {
    let methodName = "getSourcePara"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置目标投影参数
   * @memberOf SpaProjection
   * @param {SRefData} sRef 目标投影参数
   * @return {Promise.<int>} >0成功； <=0-失败
   */
  async setDestinationPara(sRef: SRefData): Promise<number> {
    let methodName = "setDestinationPara"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRef.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取目标投影参数
   * @memberOf SpaProjection
   * @return {Promise.<SRefData>} 目标投影参数
   */
  async getDestinationPara(): Promise<SRefData> {
    let methodName = "getDestinationPara"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置椭球坐标系变换参数，当投影前后椭球体不一样时，必须设置椭球坐标系变换参数
   * @memberOf SpaProjection
   * @param {ElpTransParam} param 椭球坐标系变换参数
   * @return {Promise.<int>} >0成功； <=0-失败
   */
  async setEllipTransParam(param: ElpTransParam): Promise<number> {
    let methodName = "setEllipTransParam"
    let paramsTypeStr = [this.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [param.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 单点投影
   * @memberOf SpaProjection
   * @param {Dot} xy 点坐标
   * @return {Promise.<int>} >0成功； <=0-失败
   */
  async projTrans(xy: Dot): Promise<number> {
    let methodName = "projTrans"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [xy.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * WGS84 （度）到 web墨卡托投影（米）
   * @memberOf SpaProjection
   * @param {Dot} dot 点坐标
   * @return {Promise.<void>}
   */
  static async lonLat2Mercator(dot: Dot): Promise<number> {
    let thisObj = new SpaProjection();
    let methodName = "lonLat2Mercator"
    let paramsTypeStr = [thisObj.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * web墨卡托投影（米）到 WGS84（度）
   * @memberOf SpaProjection
   * @param {Dot} dot 点坐标
   * @return {Promise.<void>}
   */
  static async mercator2LonLat(dot: Dot): Promise<number> {
    let thisObj = new SpaProjection();
    let methodName = "mercator2LonLat"
    let paramsTypeStr = [thisObj.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 获取Web墨卡托空间参考
   * @memberOf SpaProjection
   * @return {Promise<SRefData>}
   */
  static async getWebMercator(): Promise<SRefData> {
    let thisObj = new SpaProjection();
    let methodName = "getWebMercator"
    let ObjId = await thisObj.invoke(methodName, thisObj.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取Web墨卡托空间参考
   * @memberOf SpaProjection
   * @return {Promise<SRefData>}
   */
  static async getWGS84(): Promise<SRefData> {
    let thisObj = new SpaProjection();
    let methodName = "getWGS84"
    let ObjId = await thisObj.invoke(methodName, thisObj.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

}
