/**
 * @content 点对象功能组件
 * @author fangqi 2021-7-24 
 */
import Graphic from './Graphic';
import { getArrayObjIds } from '../components/ObjectManager';
import Dots from '../geoobject/Dots';
import Dot from '../geoobject/Dot';

/**
 * @constructor GraphicMultiPoint
 */
export default class GraphicMultiPoint extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_MULTI_POINT;
  }

  /**
   * 构造一个新的 GraphicMultiPoint 对象。
   * @memberOf GraphicMultiPoint
   * @returns {Promise.<GraphicMultiPoint>}
   */
  static async createInstance(): Promise<GraphicMultiPoint> {
    let thisObj = new GraphicMultiPoint();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置一组坐标点
   * @memberOf GraphicMultiPoint
   * @param {Array<Dot>} pointArray dot数组
   * @returns {Promise<void>}
   */
  async setPoints(pointArray: Array<Dot>): Promise<void> {
    let pointArrayID = getArrayObjIds(pointArray);

    let methodName = "setPoints"
    let paramsTypeStr = [this.ARRAY + this.CLASS_DOT];
    let paramsStr = [pointArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 通过点序列Dots设置坐标点
   * @memberOf GraphicMultiPoint
   * @param {Dots} dots dots点序列
   * @returns {Promise<void>}
   * @example
       let dotArr = [];
       dotArr.push({x: 114.4, y: 30.4});
       dotArr.push({x: 114.44, y: 30.41});
       dotArr.push({x: 114.5, y: 30.5});

       let dotsModule = new Dots();
       let dots = await dotsModule.createObj();
       await dots.fromObjectArray(dotArr);
       await this.graphicMultiPoint.setPointsByDots(dots);
   */
  async setPointsByDots(dots: Dots): Promise<void> {
    let methodName = "setPoints"
    let paramsTypeStr = [this.CLASS_DOTS];
    let paramsStr = [dots.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }


  /**
   * 获取一组坐标点
   * @memberOf GraphicMultiPoint
   * @returns {Promise<Array>} dot数组
   */
  async getPoints(): Promise<Array<Dot>> {
    let methodName = "getPoints"
    let ObjIdList = await this.invoke(methodName, this.ARRAY);
    let arr = new Array();
    if(Array.isArray(ObjIdList)){
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Dot();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取坐标点序列Dots
   * 
   * @memberOf GraphicMultiPoint
   * @returns {Promise<Dots>} 点序列Dots
   */
  async getPointsToDots(): Promise<Dots> {
    let methodName = "getPointsToDots"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dots();
    obj.ObjId = ObjId;
    return obj;
  }
  
  /**
   * 获取坐标点数目
   * @memberOf GraphicMultiPoint
   * @returns {Promise<Number>} 坐标点数目
   */
  async getPointCount(): Promise<number> {
    let methodName = "getPointCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取指定索引的坐标点
   * @memberOf GraphicMultiPoint
   * @param {Number} index 索引
   * @returns {Promise<Dot>}
   */
  async getPoint(index: number): Promise<Dot> {
    let methodName = "getPoint"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置点的大小
   * @memberOf GraphicMultiPoint
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
   * @memberOf GraphicMultiPoint
   * @returns {Promise<Number>}
   */
  async getPointSize(): Promise<number> {
    let methodName = "getPointSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 追加一个点
   * @memberOf GraphicMultiPoint
   * @param {Dot} point
   * @returns {Promise<Number>} 追加点的索引
   */
  async appendPoint(point: Dot): Promise<number> {
    let methodName = "appendPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 追加一组点
   * @memberOf GraphicMultiPoint
   * @param {Array<Dot>} pointArr
   * @returns {Promise<void>}
   */
  async appendPoints(pointArr: Array<Dot>): Promise<void> {
    let pointArrayID = getArrayObjIds(pointArr);

    let methodName = "appendPoints"
    let paramsTypeStr = [this.ARRAY + this.CLASS_DOT];
    let paramsStr = [pointArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 更新指定索引处的点
   * @memberOf GraphicMultiPoint
   * @param {Number} index 索引
   * @param {Dot} point 更新的点
   * @returns {Promise<Number>} 成功返回更新的索引,失败返回-1
   */
  async updatePoint(index: number, point: Dot): Promise<number> {
    let methodName = "updatePoint"
    let paramsTypeStr = [this.INT, this.CLASS_DOT];
    let paramsStr = [index, point.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除指定索引的点
   * @memberOf GraphicMultiPoint
   * @param {Number} index 索引
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
   * @memberOf GraphicMultiPoint
   * @returns {Promise<void>}
   */
  async removeAllPoints(): Promise<void> {
    let methodName = "removeAllPoints"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 在指定索引处插入点
   * @memberOf GraphicMultiPoint
   * @param {Number} index 索引
   * @param {Dot} point 插入的点
   * @returns {Promise<Number>} 
   */
  async insertPoint(index: number, point: Dot) {
    let methodName = "insertPoint"
    let paramsTypeStr = [this.INT, this.CLASS_DOT];
    let paramsStr = [index, point.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }
}
