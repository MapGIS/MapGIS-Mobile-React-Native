/**
 * @content 坐标转换类
 * @author fangqi 2021-10-11 
 */
import { NativeModules } from 'react-native';
let CC = NativeModules.JSCoordinateConvert;
import ObjectManager from '../components/ObjectManager';
import type CoordinateConvertParameter from './CoordinateConvertParameter';
import Dot from '../geoobject/Dot';

/**
 * @class CoordinateConvert
 * @description 坐标转换类
 */
export default class CoordinateConvert extends ObjectManager {

  getClassName(): String {
    return this.CLASS_COORDINATE_CONVERT;
  }

  /**
   * 构造一个新的CoordinateConvert对象
   *
   * @memberof CoordinateConvert
   * @returns {CoordinateConvert}
   */
  static async createInstance(): Promise<CoordinateConvert> {
    let thisObj = new CoordinateConvert();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置坐标转换参数
   *
   * @memberof CoordinateConvert
   * @param {CoordinateConvertParameter} coordinateConvertParameter 坐标转换参数 （CoordinateConvertParameter类型的Object）
   * @returns {CoordinateConvert}
   */
  async setConvertParams(coordinateConvertParameter: CoordinateConvertParameter): Promise<CoordinateConvert> {
    let methodName = "setConvertParams"
    let paramsTypeStr = [this.CLASS_COORDINATE_CONVERT_PARAMETER];
    let paramsStr = [coordinateConvertParameter.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new CoordinateConvert();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取坐标转换参数
   *
   * @memberof CoordinateConvert
   * @returns {Promise<CoordinateConvert>}
   */
  async getConvertParams(): Promise<CoordinateConvert> {
    let methodName = "getConvertParams"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new CoordinateConvert();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 坐标转换
   *
   * @memberof CoordinateConvert
   * @param {Dot} dot 转换前的点 （Dot类型的Object）
   * @returns {Promise<Dot>} 转换后的点
   */
  async convert(dot: Dot): Promise<Dot> {
    let methodName = "setConvertParams"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 异步坐标转换
   *
   * @memberof CoordinateConvert
   * @param {Dot} dot 转换前的点 （Dot类型的Object）
   * @returns {Promise<Dot|String>} 成功--返回转换后的点，失败--返回String
   */
  async convertAsync(dot: Dot) {
    try {
      let { isSuccess, result } = await CC.convertAsync(
        this.ObjId,
        dot.ObjId
      );
      if (isSuccess) {
        let dotResult = new Dot();
        dotResult.ObjId = result;
        return dotResult;
      } else {
        return result;
      }
    } catch (e) {
      console.error(e);
    }
  }

}
