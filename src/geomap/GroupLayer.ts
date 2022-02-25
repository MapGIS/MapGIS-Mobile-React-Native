/**
 * @content 组图层
 * @author fangqi 2021-08-30 
 */
import LayerEnum from './LayerEnum';
import MapLayer from './MapLayer';

/**
 * @class GroupLayer
 * @description 组图层对象功能组件
 */
export default class GroupLayer extends MapLayer {

  getClassName(): String {
    return this.CLASS_GROUP_LAYER;
  }

  /**
   * 构造一个新GroupLayer对象
   *
   * @memberof GroupLayer
   * @returns {Promise<GroupLayer>}
   */
  static async createInstance(): Promise<GroupLayer> {
    let thisObj = new GroupLayer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取组图层个数
   *
   * @memberof GroupLayer
   * @returns {int}
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取图层枚举对象
   *
   * @memberof GroupLayer
   * @returns {LayerEnum}
   */
  async getLayerEnum(): Promise<LayerEnum> {
    let methodName = "getLayerEnum"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LayerEnum();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 通过 索引 获取GroupLayer中的图层
   * @memberof GroupLayer
   * @param {int} i  索引
   * @returns {Promise<MapLayer>}
   */
  async item(i: number): Promise<MapLayer> {
    let methodName = "item"
    let paramsTypeStr = [this.INT];
    let paramsStr = [i];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 添加图层
   *
   * @memberof GroupLayer
   * @param {Object} mapLayer 添加的MapLayer
   * @returns {int} 图层ID
   */
  async append(mapLayer: MapLayer): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [mapLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 插入图层
   *
   * @memberof GroupLayer
   * @param {int} index  插入的索引
   * @param {Object} mapLayer 插入的图层对象
   * @returns {int} 图层ID
   */
  async insert(index: number, mapLayer: MapLayer): Promise<number> {
    let methodName = "insert"
    let paramsTypeStr = [this.INT, this.CLASS_MAP_LAYER];
    let paramsStr = [index, mapLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除图层
   *
   * @memberof GroupLayer
   * @param {Object} mapLayer 移除的图层对象
   * @returns {boolean} true/false ：成功/失败
   */
  async removeByLayer(mapLayer: MapLayer): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [mapLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除多个图层
   *
   * @memberof GroupLayer
   * @param {long} fromIndex 移除开始的索引
   * @param {int} nCount 移除的个数
   * @returns {boolean} true/false : 成功/失败
   */
  async remove(fromIndex: number, nCount: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.LONG, this.INT];
    let paramsStr = [fromIndex, nCount];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除图层
   *
   * @memberof GroupLayer
   * @param {int} layerIndex 移除的图层ID
   * @returns {boolean} true/false : 成功/失败
   */
  async removeByLayerIndex(layerIndex: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [layerIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 清空图层
   *
   * @memberof GroupLayer
   * @returns {boolean} true/false : 成功/失败
   */
  async clear(): Promise<boolean> {
    let methodName = "clear"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 移除图层
   *
   * @memberof GroupLayer
   * @param {Object} mapLayer 图层对象
   * @returns {boolean} true/false : 成功/失败
   */
  async dragOut(mapLayer: MapLayer): Promise<boolean> {
    let methodName = "dragOut"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [mapLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移入图层
   *
   * @memberof GroupLayer
   * @param {int} index 移入的索引
   * @param {Object} mapLayer 图层对象
   * @returns {boolean} true/false : 成功/失败
   */
  async dragIn(index: number, mapLayer: MapLayer): Promise<boolean> {
    let methodName = "dragIn"
    let paramsTypeStr = [this.INT, this.CLASS_MAP_LAYER];
    let paramsStr = [index, mapLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 图层索引
   *
   * @memberof GroupLayer
   * @param {String} layerName 图层名称
   * @returns {int} 成功：返回图层索引
   */
  async indexOfByLayerName(layerName: String): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [layerName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 图层索引
   *
   * @memberof GroupLayer
   * @param {Object} mapLayer 图层对象
   * @returns {int} 成功：返回图层索引
   */
  async indexOfByLayer(mapLayer: MapLayer): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [mapLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移动图层到最下面（最后绘制）
   *
   * @memberof GroupLayer
   * @param {int} index 图层ID
   * @returns {boolean} true/false : 成功/失败
   */
  async moveToBottom(index: number): Promise<boolean> {
    let methodName = "moveToBottom"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移动图层到最上面（最先绘制）
   *
   * @memberof GroupLayer
   * @param {int} index 图层ID
   * @returns {boolean} true/false : 成功/失败
   */
  async moveToTop(index: number): Promise<boolean> {
    let methodName = "moveToTop"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 下移图层
   *
   * @memberof GroupLayer
   * @param {int} index 图层ID
   * @returns {boolean} true/false : 成功/失败
   */
  async moveToDown(index: number): Promise<boolean> {
    let methodName = "moveToDown"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 上移图层
   *
   * @memberof GroupLayer
   * @param {int} index 图层ID
   * @returns {boolean} true/false : 成功/失败
   */
  async moveToUp(index: number): Promise<boolean> {
    let methodName = "moveToUp"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移动图层
   *
   * @memberof GroupLayer
   * @param {String} fromIndex
   * @param {String} toIndex
   * @returns {boolean} true/false : 成功/失败
   */
  async move(fromIndex: number, toIndex: number): Promise<boolean> {
    let methodName = "move"
    let paramsTypeStr = [this.LONG, this.LONG];
    let paramsStr = [fromIndex, toIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
