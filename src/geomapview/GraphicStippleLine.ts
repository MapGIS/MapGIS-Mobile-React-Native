/**
 * @content 虚线线对象功能组件
 * @author fangqi 2021-10-11 
 */
import Dot from '../geoobject/Dot';
import Graphic from './Graphic';

/**
 * @class GraphicStippleLine
 */
export default class GraphicStippleLine extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_STIPPLE_LINE;
  }

  /**
   * 构造一个新的 GraphicStippleLine 对象。
   * @memberOf GraphicStippleLine
   * @param {Dot} startPoint 起点
   * @param {Dot} endPoint 终点
   * @returns {Promise.<GraphicStippleLine>}
   */
  static async createInstanceByParam(startPoint: Dot, endPoint: Dot): Promise<GraphicStippleLine> {
    let thisObj = new GraphicStippleLine();
    let initParamsType = [thisObj.CLASS_DOT, thisObj.CLASS_DOT];
    let initParamsStr = [startPoint.ObjId, endPoint.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置起点
   * @memberOf GraphicStippleLine
   * @param {Dot} point 起点
   * @returns {Promise<void>}
   */
  async setStartPoint(point: Dot): Promise<void> {
    let methodName = "setStartPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置终点
   * @memberOf GraphicStippleLine
   * @param {Dot} point 终点
   * @returns {Promise<void>}
   */
  async setEndPoint(point: Dot): Promise<void> {
    let methodName = "setEndPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置线宽
   * @memberOf GraphicStippleLine
   * @param {Number} width 线宽 (Double类型的number)
   * @returns {Promise<void>}
   */
  async setLineWidth(width: number): Promise<void> {
    let methodName = "setLineWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置虚线段长度
   * @memberOf GraphicStippleLine
   * @param {Number} len 虚线段长度 (int类型的Number)
   * @returns {Promise<void>}
   */
  async setSegLength(len: number): Promise<void> {
    let methodName = "setSegLength"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [len];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置虚线间隔长度
   * @memberOf GraphicStippleLine
   * @param {Number} len 虚线间隔长度 (int类型的Number)
   * @returns {Promise<void>}
   */
  async setIntervalLength(len: number): Promise<void> {
    let methodName = "setIntervalLength"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [len];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
  /**
   *获取起点的坐标点
   * @memberOf GraphicStippleLine
   * @returns {Promise<Dot>} 起点的坐标点
   */
  async getStartPoint(): Promise<Dot> {
    let methodName = "getStartPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *获取终点的坐标点
   * @memberOf GraphicStippleLine
   * @returns {Promise<Dot>} 终点的坐标点
   */
  async getEndPoint(): Promise<Dot> {
    let methodName = "getEndPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取线的宽度
   * @memberOf GraphicStippleLine
   * @returns {Number} 线的宽度 (Double类型的number)
   */
  async getLineWidth(): Promise<number> {
    let methodName = "getLineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取虚线长度
   * @memberOf GraphicStippleLine
   * @returns {Number} 虚线长度 (int类型的number)
   */
  async getSegLength(): Promise<number> {
    let methodName = "getSegLength"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取虚线间隔长度
   * @memberOf GraphicStippleLine
   * @returns {Number} 虚线间隔长度 (int类型的number)
   */
  async getIntervalLength(): Promise<number> {
    let methodName = "getIntervalLength"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取线长度
   * @memberOf GraphicStippleLine
   * @returns {Number} 线长度 (Double类型的number)
   */
  async getLength(): Promise<number> {
    let methodName = "getLength"
    return await this.invoke(methodName, this.NUMBER);
  }

}
