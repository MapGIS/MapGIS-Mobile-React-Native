/**
 * @content 空间计算 仅两点距离计算 已包含在几何类内部的计算有：计算机长度、实地长度、计算机面积、实地面积、几何范围、label点等
 * @author fangqi 2021-10-13
 */

import ObjectManager from '../components/ObjectManager';
import type Dot from '../geoobject/Dot';

/**
 * @class SpaCalculator
 * @description 空间计算
 */
export default class SpaCalculator extends ObjectManager{

  getClassName(): String {
    return this.CLASS_SPA_CALCULATOR;
  }

  /**
   * 计算两点距离
   * @memberOf SpaCalculator
   * @param {Dot} xy0 点坐标
   * @param {Dot} xy1 点坐标
   * @return {Promise.<double>} 两点距离
   */
  static async distance(xy0:Dot, xy1:Dot): Promise<number> {
    let thisObj = new SpaCalculator();
    let methodName = "distance"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [xy0.ObjId, xy1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
