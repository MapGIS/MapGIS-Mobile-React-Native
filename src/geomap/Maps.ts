/**
 * @content 地图列表类
 * @author fangqi 2021-08-28
 */
import DocumentItem from './DocumentItem';
import Map from './Map';

/**
 * @class Maps
 * @description 地图列表类
 */
export default class Maps extends DocumentItem {

  getClassName(): String {
    return this.CLASS_MAPS;
  }

  /**
   * 构造一个新的 Maps 对象
   *
   * @memberof Maps
   * @returns {Promise<Maps>}
   */
  static async createInstance(): Promise<Maps> {
    let thisObj = new Maps();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取地图数量
   *
   * @memberof Maps
   * @returns {int} 地图数量
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加地图
   *
   * @memberof Maps
   * @param {Object} map 地图对象
   * @returns {int} index 添加地图后的索引
   */
  async append(map: Map): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_MAP];
    let paramsStr = [map.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 插入地图
   *
   * @memberof Maps
   * @param {int} index 地图索引：
   * @param {Object} map  地图对象
   * @returns {int} 插入后的ID
   */
  async insert(index: number, map: Map): Promise<number> {
    let methodName = "insert"
    let paramsTypeStr = [this.LONG, this.CLASS_MAP_LAYER];
    let paramsStr = [index, map.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除地图
   *
   * @memberof Maps
   * @param {int} index 地图索引：
   * @returns {boolean} 成功/失败
   */
  async remove(index: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除所有地图
   *
   * @memberof Maps
   * @returns {boolean} true/false：成功/失败
   */
  async removeAll(): Promise<boolean> {
    let methodName = "removeAll"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 得到索引
   *
   * @memberof Maps
   * @param {Object} map 地图对象
   * @returns {int} 成功返回地图的索引
   */
  async indexOf(map: Map): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_MAP];
    let paramsStr = [map.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 得到指定索引的地图
   *
   * @memberof Maps
   * @param {int} index 地图索引
   * @returns Map 成功返回地图
   */
  async getMap(index: number): Promise<Map> {
    let methodName = "getMap"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Map();
    obj.ObjId = ObjId;
    return obj;
  }
}
