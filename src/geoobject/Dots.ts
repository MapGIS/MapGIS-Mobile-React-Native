/**
 * @content 二维坐标点序列功能操作功能组件
 * @author fangqi 2021-09-09
 */
import ObjectManager from '../components/ObjectManager';
import Dot from './Dot';


/**
 * @class Dots
 */
export default class Dots extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DOTS;
  }

  /**
   * 构造一个新的 Dots 对象。
   * @memberOf Dots
   * @returns {Promise.<Dots>}
   */
  static async createInstance(): Promise<Dots> {
    let thisObj = new Dots();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取X坐标
   * @memberOf Dots
   * @returns {Promise} 折线点数
   */
  async size(): Promise<number> {
    let methodName = "size"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加一个点
   * @memberOf Dots
   * @param dot 待添加的点对象
   * @returns {Promise} 新添加点的索引，小于0失败
   */
  async append(dot: Dot): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 将另一个Dots的点添加到尾端
   * @memberOf Dots
   * @param dots 待添加的点序列对象
   * @returns {Promise} 大于0成功，否则失败
   */
  async appendDots(dots: Dots): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_DOTS];
    let paramsStr = [dots.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除索引处的点
   * @memberOf Dots
   * @param index 待删除的点索引
   * @returns {Promise} 大于0成功，否则失败
   */
  async remove(index: number): Promise<number> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清空
   * @memberOf Dots
   * @returns {Promise} 大于0成功，否则失败
   */
  async clear(): Promise<number> {
    let methodName = "clear"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回索引处的点
   * @memberOf Dots
   * @param index 待查找的索引号
   * @returns {Promise<Dot>} 索引处的点
   */
  async get(index: number): Promise<Dot> {
    let methodName = "get"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 
   * @memberOf Dots
   * @returns {Promise} 
   */
  async toString(): Promise<String> {
    let methodName = "toString"
    return await this.invoke(methodName, this.STRING);
  }

}
