/**
 * @content 角度计算功能组件
 * @author fangqi 2021-10-21
 */
import ObjectManager from '../components/ObjectManager';
import type Dot from './Dot';
/**
 * @class Angle
 */
export default class Angle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ANGLE;
  }

  /**
   * 向量夹角
   * @memberOf Angle
   * @param dotA0 - 向量A的起点
   * @param dotA1 - 向量A的终点
   * @param dotB0 - 向量B的起点
   * @param dotB1 - 向量B的终点
   * @return {Promise<number>} 向量夹角弧度值（范围[0, PI]）
   */
  static async calculateVectorAngle(dotA0: Dot, dotA1: Dot, dotB0: Dot, dotB1: Dot): Promise<number> {
    let thisObj = new Angle();
    let methodName = "calculateVectorAngle"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotB0.ObjId, dotB1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 向量旋转角度
   * @memberOf Angle
   * @param dotA0 - 向量A的起点
   * @param dotA1 - 向量A的终点
   * @param dotB0 - 向量B的起点
   * @param dotB1 - 向量B的终点
   * @return {Promise<number>} 旋转角弧度值（范围[0, 2*PI)）
   * 向量A0A1沿逆时针方向旋转到向量B0B1的角度
   */
  static async calculateVectorRotateAngle(dotA0: Dot, dotA1: Dot, dotB0: Dot, dotB1: Dot): Promise<number> {
    let thisObj = new Angle();
    let methodName = "calculateVectorRotateAngle"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId, dotB0.ObjId, dotB1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 方位角
   * @memberOf Angle
   * @param dotA0 - 向量A的起点
   * @param dotA1 - 向量A的终点
   * @return {Promise<number>} 方位角的弧度值（范围[0, 2PI)）
   * 从标准真北方向起，沿顺时钟方向旋转到A0A1的角度
   */
  static async calculateAzimuth(dotA0: Dot, dotA1: Dot): Promise<number> {
    let thisObj = new Angle();
    let methodName = "calculateAzimuth"
    let paramsTypeStr = [thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let paramsStr = [dotA0.ObjId, dotA1.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 坡度角
   * @memberOf Angle
   * @param height - 坡的铅直高度
   * @param length - 坡的水平宽度
   * @return {Promise<number>} 坡度角的弧度值（范围[0,PI/2)）
   * 坡度（slope）是地表单元陡缓的程度，通常把坡度的铅直高度h 和水平宽度l的比值叫做坡度（或叫做坡比）
   */
  static async calculateSlopeAngle(height: number, length: number): Promise<number> {
    let thisObj = new Angle();
    let methodName = "calculateSlopeAngle"
    let paramsTypeStr = [thisObj.DOUBLE, thisObj.DOUBLE];
    let paramsStr = [height, length];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
