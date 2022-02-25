/**
 * @content 场景圆图形
 * @author fangqi 2021-11-30
 */
import type Dot3D from '../geoobject/Dot3D';
import ConvertUtil from '../components/ConvertUtil';
import Graphic3D from './Graphic3D';

/**
 * @class GraphicCircle3D
 */
export default class GraphicCircle3D extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_CIRCLE3D;
  }

  /**
   * 构造一个新的 GraphicCircle3D 对象。
   * @memberOf GraphicCircle3D
   * @returns {Promise.<GraphicCircle3D>}
   */
  static async createInstance(): Promise<GraphicCircle3D> {
    let thisObj = new GraphicCircle3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 GraphicCircle3D 对象。
   * @memberOf GraphicCircle3D
   * @param {Dot3D} dot3DCenter - 中心点坐标
   * @param {number} radius - 半径
   * @returns {Promise<void>}
   */
  static async createInstanceByParam(dot3DCenter: Dot3D, radius: number): Promise<GraphicCircle3D> {
    let thisObj = new GraphicCircle3D();
    let initParamsType = [thisObj.CLASS_DOT3D, thisObj.DOUBLE];
    let initParamsStr = [dot3DCenter.ObjId, radius];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置圆心及半径
   * @memberOf GraphicCircle3D
   * @param {Dot3D} dot3D - 场景地理坐标
   * @param {number} radius 半径
   * @returns {Promise<void>}
   */
  async setCenterAndRadius(dot3D: Dot3D, radius: number): Promise<void> {
    let methodName = "setCenterAndRadius"
    let paramsTypeStr = [this.CLASS_DOT3D, this.DOUBLE];
    let paramsStr = [dot3D.ObjId, radius];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置中心点
   * @memberOf GraphicCircle3D
   * @param {Dot3D} dot3D - 场景地理坐标
   * @returns {Promise<void>}
   */
  async setCenterPoint(dot3D: Dot3D): Promise<void> {
    let methodName = "setCenterPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置半径
   * @memberOf GraphicCircle3D
   * @param {number} radius 半径
   * @returns {Promise<void>}
   */
  async setRadius(radius: number): Promise<void> {
    let methodName = "setRadius"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [radius];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取半径
   * @memberOf GraphicCircle3D
   * @returns {Promise<number>}
   */
  async getRadius(radius: number): Promise<number> {
    let methodName = "getRadius"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [radius];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置圆边界线的宽度
   * @memberOf GraphicCircle3D
   * @param {number} width 宽度
   * @returns {Promise<void>}
   */
  async setBorderlineWidth(width: number): Promise<void> {
    let methodName = "setBorderlineWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取圆边界线的宽度
   * @memberOf GraphicCircle3D
   * @returns {Promise<number>}
   */
  async getBorderlineWidth(): Promise<number> {
    let methodName = "getBorderlineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置圆边界线的颜色
   * @memberOf GraphicCircle3D
   * @param {String} color 颜色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<void>}
   */
  async setBorderlineColor(color: String): Promise<void> {
    let methodName = "setBorderlineColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置渐变颜色
   * @memberOf GraphicCircle3D
   * @param {String} innerColor - 内部填充颜色 eg:'rgba(128, 128, 128, 128)'
   * @param {String} outerColor - 外部填充颜色
   * @returns {Promise<void>}
   */
  async setGradientColor(innerColor: String, outerColor: String): Promise<void> {
    let methodName = "setGradientColor"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(innerColor), ConvertUtil.colorRGBAToNumber(outerColor)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
