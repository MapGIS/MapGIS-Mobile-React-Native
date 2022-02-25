/**
 * @content 实现对三维坐标点序列的相关操作功能组件
 * @author fangqi 2021-8-14 
 */
import ObjectManager from '../components/ObjectManager';
import type Dot3D from './Dot3D';

/**
 * @class Dots3D
 * @description 实现对三维坐标点的类型定义
 */
export default class Dots3D extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DOTS3D;
  }

  /**
   * 构造一个新的Dots3D对象
   * @memberof Dots3D
   * @returns {Promise<Dots3D>}
   */
  static async createInstance(): Promise<Dots3D> {
    let thisObj = new Dots3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 返回数目
   * @memberof Dots3D
   * @return 数目
   */
  async size(): Promise<number> {
    let methodName = "size"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加一个点
   * @memberof Dots3D
   * @param {object:Dot3D} dot3D 待添加的点对象
   * @return 新添加点的索引，小于0失败
   */
  async append(dot3D: Dot3D): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 将另一个Dots3D的点添加到尾端
   * @memberof Dots3D
   * @param {object:Dots3D}dots3D 待添加的点序列对象
   * @return 大于0成功，否则失败
   */
  async appendDots3D(dots3D: Dots3D): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_DOTS3D];
    let paramsStr = [dots3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除索引处的点
   * @memberof Dots3D
   * @param index 待删除的点索引
   * @return 大于0成功，否则失败
   */
  async remove(index: number): Promise<number> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清空
   * @memberof Dots3D
   * @return 大于0成功，否则失败
   */
  async clear(): Promise<number> {
    let methodName = "clear"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回索引处的点
   * @memberof Dots3D
   * @param index 待查找的索引号
   * @return 索引处的点
   */
  async get(index: number): Promise<Dots3D> {
    let methodName = "get"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dots3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 拷贝坐标点序列
   * @memberof Dots3D
   * @return 拷贝出的坐标点序列
   */
  async clone(): Promise<Dots3D> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dots3D();
    obj.ObjId = ObjId;
    return obj;
  }
}
