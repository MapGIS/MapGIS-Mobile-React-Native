/**
 * @content 区对象功能组件
 * @author fangqi 2021-7-24 
 */
import GraphicMultiPoint from './GraphicMultiPoint';
import { getArrayObjIds } from '../components/ObjectManager';
import ConvertUtil from '../components/ConvertUtil';
import type IntList from '../geoobject/IntList';
import type Dots from '../geoobject/Dots';
import type Dot from '../geoobject/Dot';

/**
 * @class GraphicPolygon
 */
export default class GraphicPolygon extends GraphicMultiPoint {

  getClassName(): String {
    return this.CLASS_GRAPHIC_POLYGON;
  }

  /**
   * 构造一个新的 GraphicPolygon 对象。
   * @memberOf GraphicPolygon
   * @returns {Promise.<GraphicPolygon>}
   */
  static async createInstance(): Promise<GraphicPolygon> {
    let thisObj = new GraphicPolygon();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取面积
   * @memberOf GraphicPolygon
   * @returns {Promise<Number>}
   */
  async getArea(): Promise<number> {
    let methodName = 'getArea';
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置一组坐标点
   * @memberOf GraphicPolygon
   * @param {Array<Dot>} pointArray 点数组
   * @param {Array<Number>} circlesArray  圈序列数组 (int类型的Number)
   * @returns {Promise<void>}
   */
  async setPointsByDotsArray(
    pointArray: Array<Dot>,
    circlesArray: Array<number>
  ): Promise<void> {
    let pointArrayID = getArrayObjIds(pointArray);

    let methodName = "setPoints"
    let paramsTypeStr = [this.LIST + this.CLASS_DOT, this.ARRAY + this.INT];
    let paramsStr = [pointArrayID, circlesArray];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 通过点序列设置一组坐标点
   * @memberOf GraphicPolygon
   * @param {Dots} dots 点序列
   * @param {Array<Number>} circlesArray 圈序列数组 （int类型的Number）
   * @returns {Promise<void>}
   */
  async setPointsByDotsIntList(dots: Dots, circles: IntList): Promise<void> {
    let methodName = "setPoints"
    let paramsTypeStr = [this.CLASS_DOTS, this.CLASS_INT_LIST];
    let paramsStr = [dots.ObjId, circles.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }


  /**
   * 获取圈序列
   * @memberOf GraphicPolygon
   * @returns {Promise<Array>}
   */
  async getCircles(): Promise<number[]> {
    let methodName = "getCircles"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 设置边界线的宽度
   * @memberOf GraphicPolygon
   * @param {Number} width
   * @returns {Promise<void>}
   */
  async setBorderlineWidth(width: number): Promise<void> {
    let methodName = "setBorderlineWidth"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取边界线的宽度
   * @memberOf GraphicPolygon
   * @returns {Promise<Number>}
   */
  async getBorderlineWidth(): Promise<number> {
    let methodName = "getBorderlineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *  获取边界线的颜色
   * @memberOf GraphicPolygon
   * @returns {Promise<String>} 颜色。eg:'rgba(128, 128, 128, 128)'
   */
  async getBorderlineColor(): Promise<String> {
    let methodName = "getBorderlineColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置边界线的颜色
   * @memberOf GraphicPolygon
   * @param {String} color eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<void>}
   */
  async setBorderlineColor(color: String): Promise<void> {
    let methodName = "setBorderlineColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
