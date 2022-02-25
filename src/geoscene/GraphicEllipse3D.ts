/**
 * @content 场景椭圆图形
 * @author fangqi 2021-11-30
 */
import Dot3D from '../geoobject/Dot3D';
import ConvertUtil from '../components/ConvertUtil';
import Graphic3D from './Graphic3D';

/**
 * @class GraphicEllipse3D
 */
export default class GraphicEllipse3D extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_ELLIPSE3D;
  }

  /**
   * 构造一个新的 GraphicEllipse3D 对象。
   * @memberOf GraphicEllipse3D
   * @returns {Promise.<GraphicEllipse3D>}
   */
  static async createInstance(): Promise<GraphicEllipse3D> {
    let thisObj = new GraphicEllipse3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置坐标点
   * @memberOf GraphicEllipse3D
   * @param {Dot3D} dot3D - 场景地理坐标
   * @returns {Promise<void>}
   */
  async setPoint(dot3D: Dot3D): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图形点
   * @memberOf GraphicEllipse3D
   * @returns {Promise<Dot3D>} 地理坐标
   */
  async getPoint(): Promise<Dot3D> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置椭圆图形长半径
   * @memberOf GraphicEllipse3D
   * @param {number} radiusMajor - 半径
   * @returns {Promise<void>}
   */
  async setRadiusMajor(radiusMajor: number): Promise<void> {
    let methodName = "setRadiusMajor"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [radiusMajor];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取椭圆图形长半径
   * @memberOf GraphicEllipse3D
   * @returns {Promise<number>} 返回椭圆长半径
   */
  async getRadiusMajor(): Promise<number> {
    let methodName = "getRadiusMajor"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置椭圆图形短半径
   * @memberOf GraphicEllipse3D
   * @param {number} radiusMinor - 短半径
   * @returns {Promise<void>}
   */
  async setRadiusMinor(radiusMinor: number): Promise<void> {
    let methodName = "setRadiusMinor"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [radiusMinor];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取椭圆图形短半径
   * @memberOf GraphicEllipse3D
   * @returns {Promise<number>} 返回半径
   */
  async getRadiusMinor(): Promise<number> {
    let methodName = "getRadiusMinor"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置旋转角
   * @memberOf GraphicEllipse3D
   * @param {number} rotationAngle - 旋转角
   * @returns {Promise<void>}
   */
  async setRotationAngle(rotationAngle: number): Promise<void> {
    let methodName = "setRotationAngle"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [rotationAngle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转角
   * @memberOf GraphicEllipse3D
   * @returns {Promise<number>} 返回旋转角
   */
  async getRotationAngle(): Promise<number> {
    let methodName = "getRotationAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置线宽
   * @memberOf GraphicEllipse3D
   * @param {number} width 线宽
   * @returns {Promise<void>}
   */
   async setBorderlineWidth(width: number): Promise<void> {
    let methodName = "setBorderlineWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线宽
   * @memberOf GraphicEllipse3D
   * @returns {Promise<number>} 返回线宽
   */
  async getBorderlineWidth(): Promise<number> {
    let methodName = "getBorderlineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置椭圆界线的颜色
   * @memberOf GraphicEllipse3D
   * @param {String} color - 颜色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<void>}
   */
   async setBorderlineColor(color: String): Promise<void> {
    let methodName = "setBorderlineColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
