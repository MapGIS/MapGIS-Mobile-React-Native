/**
 * @content 圆对象功能组件
 * @author fangqi 2021-7-24
 */
import ConvertUtil from '../components/ConvertUtil';
import type Dot from '../geoobject/Dot';
import Graphic from './Graphic';

/**
 * @class GraphicCircle
 */
export default class GraphicCircle extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_CIRCLE;
  }

  /**
   * 构造一个新的 GraphicCircle 对象。
   * @memberOf GraphicCircle
   * @returns {Promise.<GraphicCircle>}
   */
  static async createInstance(): Promise<GraphicCircle> {
    let thisObj = new GraphicCircle();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 GraphicCircle 对象。
   * @memberOf GraphicCircle
   * @param {Dot} point 圆心位置
   * @param {number} radius 半径
   * @returns {Promise<void>}
   */
  static async createInstanceByParam(point: Dot, radius: number): Promise<GraphicCircle> {
    let thisObj = new GraphicCircle();
    let initParamsType = [thisObj.CLASS_DOT, thisObj.DOUBLE];
    let initParamsStr = [point.ObjId, radius];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置圆心位置和半径
   * @memberOf GraphicCircle
   * @param {Dot} point 圆心位置
   * @param {number} radius 半径
   * @returns {Promise<void>}
   */
  async setCenterAndRadius(point: Dot, radius: number): Promise<void> {
    let methodName = "setCenterAndRadius"
    let paramsTypeStr = [this.CLASS_DOT, this.DOUBLE];
    let paramsStr = [point.ObjId, radius];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置圆心位置
   * @memberOf GraphicCircle
   * @param {Dot} point 圆心位置
   * @returns {Promise<void>}
   */
  async setCenterPoint(point: Dot): Promise<void> {
    let methodName = "setCenterPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置半径
   * @memberOf GraphicCircle
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
   * @memberOf GraphicCircle
   * @returns {Promise<number>}
   */
  async getRadius(): Promise<number> {
    let methodName = "getRadius"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置圆边界线的宽度
   * @memberOf GraphicCircle
   * @param {number} width 宽度
   * @returns {Promise<void>}
   */
  async setBorderlineWidth(width: number): Promise<void> {
    let methodName = "setBorderlineWidth"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取圆边界线的宽度
   * @memberOf GraphicCircle
   * @returns {Promise<number>}
   */
  async getBorderlineWidth(): Promise<number> {
    let methodName = "getBorderlineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置圆边界线的颜色
   * @memberOf GraphicCircle
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
   * 获取圆边界线的颜色
   * @memberOf GraphicCircle
   * @returns {Promise<String>} 颜色 eg:'rgba(128, 128, 128, 128)'
   */
  async getBorderlineColor(): Promise<String> {
    let methodName = "getBorderlineColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置半径是否为像素单位(默认情况下为地图单位)
   * @memberOf GraphicCircle
   * @param {boolean} pixel 半径是否为像素单位
   * @returns {Promise<void>}
   */
  async setRadiusByPixel(pixel: boolean): Promise<void> {
    let methodName = "setRadiusByPixel"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [pixel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取半径是否为像素单位
   * @memberOf GraphicCircle
   * @returns {Promise<boolean>}
   */
  async isRadiusByPixel() {
    let methodName = "isRadiusByPixel"
    return await this.invoke(methodName, this.BOOLEAN);
  }
}
