/**
 * @content 场景区图形
 * @author fangqi 2021-12-01 
 */
import ConvertUtil from '../components/ConvertUtil';
import type Dot3D from '../geoobject/Dot3D';
import type Dots3D from '../geoobject/Dots3D';
import IntList from '../geoobject/IntList';
import { getArrayObjIds } from '../components/ObjectManager';
import GraphicMultiPoint3D from './GraphicMultiPoint3D';

/**
 * @class GraphicPolygon3D
 */
export default class GraphicPolygon3D extends GraphicMultiPoint3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_POLYGON3D;
  }

  /**
   * 构造一个新的 GraphicPolygon3D 对象。
   * @memberOf GraphicPolygon3D
   * @returns {Promise.<GraphicPolygon3D>}
   */
  static async createInstance(): Promise<GraphicPolygon3D> {
    let thisObj = new GraphicPolygon3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 GraphicPolygon3D 对象。
   * @memberOf GraphicPolygon3D
   * @param dots3D - 坐标序列
   * @returns {Promise<void>}
   */
  static async createInstanceByParam(dots3D: Dot3D[]): Promise<GraphicPolygon3D> {
    let thisObj = new GraphicPolygon3D();
    let arrayID = getArrayObjIds(dots3D);
    let initParamsType = [thisObj.ARRAY + thisObj.CLASS_DOT3D];
    let initParamsStr = [arrayID];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置坐标点
   * @memberOf GraphicPolygon3D
   * @param dots3D - 坐标序列
   * @returns {Promise<void>}
   */
  async setPoints(dots3D: Array<Dot3D>): Promise<void> {
    let pointArrayID = getArrayObjIds(dots3D);

    let methodName = "setPoints"
    let paramsTypeStr = [this.ARRAY + this.CLASS_DOT3D];
    let paramsStr = [pointArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置坐标点
   * @memberOf GraphicPolygon3D
   * @param points - 坐标序列
   * @param circles - 圈序列
   * @returns {Promise<void>}
   */
  async setPointsByDots(dots3D: Dots3D, circles: IntList): Promise<void> {
    let methodName = "setPoints"
    let paramsTypeStr = [this.CLASS_DOTS3D, this.CLASS_INT_LIST];
    let paramsStr = [dots3D.ObjId, circles.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置一组坐标点
   * @memberOf GraphicPolygon3D
   * @param dot3Dlst 坐标序列
   * @param {Array<int>} circles  圈序列 (int类型的Number)
   * @returns {Promise<void>}
   */
  async setPointsByDot(dot3Dlst: Array<Dot3D>, circles: Array<number>): Promise<void> {
    let pointArrayID = getArrayObjIds(dot3Dlst);

    let methodName = "setPoints"
    let paramsTypeStr = [this.LIST + this.CLASS_DOT, this.ARRAY + this.INT];
    let paramsStr = [pointArrayID, circles];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取圈序列
   * @memberOf GraphicPolygon3D
   * @returns {Promise<IntList>} 圈序列
   */
  async getCirclesToList(): Promise<IntList> {
    let methodName = "getCirclesToList"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new IntList();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取圈序列长度
   * @memberOf GraphicPolygon3D
   * @returns {Promise<number>} 返回圈序列长度
   */
  async getCirclesSize(): Promise<number> {
    let methodName = 'getCirclesSize';
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取面积
   * @memberOf GraphicPolygon3D
   * @returns {Promise<number>} 返回面积
   */
  async getArea(): Promise<number> {
    let methodName = 'getArea';
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 在指定索引处插入点
   * @memberOf GraphicPolygon3D
   * @param index - 索引
   * @param dot3D - 场景地理坐标
   * @returns {Promise<number>} 成功返回1 ,失败返回0
   */
  async insertPoint(index: number, dot3D: Dot3D): Promise<number> {
    let methodName = "insertPoint"
    let paramsTypeStr = [this.INT, this.CLASS_DOT3D];
    let paramsStr = [index, dot3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除指定索引的点
   * @memberOf GraphicPolygon3D
   * @param index - 索引
   * @returns {Promise<void>} 成功返回1 ,失败返回0
   */
  async removePoint(index: number): Promise<void> {
    let methodName = "removePoint"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除所有点
   * @memberOf GraphicPolygon3D
   * @returns {Promise<void>}
   */
  async removeAllPoints(): Promise<void> {
    let methodName = "removeAllPoints"
    return await this.invoke(methodName, this.VOID);
  }

  /**
   * 追加点(只针对第一圈操作)
   * @memberOf GraphicPolygon3D
   * @param dot3D - 场景地理坐标
   * @returns {Promise<number>} 成功返回1 ,失败返回0
   */
  async appendPoint(dot3D: Dot3D): Promise<number> {
    let methodName = "appendPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 追加一组点(只针对第一圈操作)
   * @memberOf GraphicPolygon3D
   * @param dots3D - 场景地理坐标
   * @returns {Promise<void>}
   */
  async appendPoints(dots3D: Array<Dot3D>): Promise<void> {
    let pointArrayID = getArrayObjIds(dots3D);

    let methodName = "appendPoints"
    let paramsTypeStr = [this.ARRAY + this.CLASS_DOT3D];
    let paramsStr = [pointArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置边界线的宽度
   * @memberOf GraphicPolygon3D
   * @param width - 索引
   * @returns {Promise<void>} 
   */
  async setBorderlineWidth(width: number): Promise<void> {
    let methodName = "setBorderlineWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取边界线的宽度
   * @memberOf GraphicPolygon3D
   * @returns {Promise<number>} 返回边界线的宽度
   */
  async getBorderlineWidth(): Promise<number> {
    let methodName = 'getBorderlineWidth';
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置边界线的颜色
   * @memberOf GraphicPolygon3D
   * @param {String} color 线颜色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<void>}
   */
  async setBorderlineColor(color: String): Promise<void> {
    let methodName = "setBorderlineColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置覆盖物伸出的高度
   * @memberOf GraphicPolygon3D
   * @param extrusionHeight - 高度
   * @returns {Promise<void>} 
   */
  async setExtrusionHeight(extrusionHeight: number): Promise<void> {
    let methodName = "setExtrusionHeight"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [extrusionHeight];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图形伸出的高度
   * @memberOf GraphicPolygon3D
   * @returns {Promise<number>} 图形伸出的高度
   */
  async getExtrusionHeight(): Promise<number> {
    let methodName = 'getExtrusionHeight';
    return await this.invoke(methodName, this.NUMBER);
  }

}
