/**
 * @content 场景点图形
 * @author fangqi 2021-11-30 
 */
import { getArrayObjIds } from '../components/ObjectManager';
import Graphic3D from './Graphic3D';
import Dot3D from '../geoobject/Dot3D';

/**
 * @constructor GraphicMultiPoint3D
 */
export default class GraphicMultiPoint3D extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_MULTI_POINT3D;
  }

  /**
   * 构造一个新的 GraphicMultiPoint3D 对象。
   * @memberOf GraphicMultiPoint3D
   * @returns {Promise.<GraphicMultiPoint3D>}
   */
  static async createInstance(): Promise<GraphicMultiPoint3D> {
    let thisObj = new GraphicMultiPoint3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置一组坐标
   * @memberOf GraphicMultiPoint3D
   * @param {Array<Dot3D>} points3D - 坐标点序列
   * @returns {Promise<void>}
   */
  async setPoints(points3D: Array<Dot3D>): Promise<void> {
    let pointArrayID = getArrayObjIds(points3D);

    let methodName = "setPoints"
    let paramsTypeStr = [this.ARRAY + this.CLASS_DOT3D];
    let paramsStr = [pointArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取一组坐标
   * @memberOf GraphicMultiPoint3D
   * @returns {Promise<Array>} 
   */
  async getPoints(): Promise<Array<Dot3D>> {
    let methodName = "getPoints"
    let ObjIdList = await this.invoke(methodName, this.ARRAY);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Dot3D();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取坐标点数目
   * @memberOf GraphicMultiPoint3D
   * @returns {Promise<Number>} 返回坐标点数目
   */
  async getPointCount(): Promise<number> {
    let methodName = "getPointCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取地理坐标点
   * @memberOf GraphicMultiPoint3D
   * @param {number} index 索引
   * @returns {Promise<Dot3D>}
   */
  async getPoint(index: number): Promise<Dot3D> {
    let methodName = "getPoint"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置点的大小
   * @memberOf GraphicMultiPoint3D
   * @param {Number} size
   * @returns {Promise<void>}
   */
  async setPointSize(size: number): Promise<void> {
    let methodName = "setPointSize"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
  
  /**
   * 获取点的大小
   * @memberOf GraphicMultiPoint3D
   * @returns {Promise<Number>}
   */
  async getPointSize(): Promise<number> {
    let methodName = "getPointSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 追加点
   * @memberOf GraphicMultiPoint3D
   * @param {Dot3D} point3D - 场景地理坐标
   * @returns {Promise<Number>} 追加点的索引
   */
  async appendPoint(point3D: Dot3D): Promise<number> {
    let methodName = "appendPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [point3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 追加一组点
   * @memberOf GraphicMultiPoint3D
   * @param {Array<Dot3D>} points3D - 一组场景地理坐标
   * @returns {Promise<void>}
   */
  async appendPoints(points3D: Array<Dot3D>): Promise<void> {
    let pointArrayID = getArrayObjIds(points3D);

    let methodName = "appendPoints"
    let paramsTypeStr = [this.ARRAY + this.CLASS_DOT3D];
    let paramsStr = [pointArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 插入一个点
   * @memberOf GraphicMultiPoint3D
   * @param {number} index 索引
   * @param {Dot3D} point3D - 场景地理坐标
   * @returns {Promise<Number>} 成功返回1 ,失败返回0
   */
  async insertPoint(index: number, point3D: Dot3D): Promise<number> {
    let methodName = "insertPoint"
    let paramsTypeStr = [this.INT, this.CLASS_DOT3D];
    let paramsStr = [index, point3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除一个点
   * @memberOf GraphicMultiPoint3D
   * @param {Number} index - 点对应的索引
   * @returns {Promise<void>}
   */
  async removePoint(index: number): Promise<void> {
    let methodName = "removePoint"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除所有点
   * @memberOf GraphicMultiPoint3D
   * @returns {Promise<void>}
   */
  async removeAllPoints(): Promise<void> {
    let methodName = "removeAllPoints"
    await this.invoke(methodName, this.VOID);
  }

}
