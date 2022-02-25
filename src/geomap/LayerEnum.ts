/**
 * @content 图层枚举功能组件
 * @author fangqi 2021-08-26 
 */
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import MapLayer from './MapLayer';

/**
 * @class LayerEnum
 * @description android图层枚举功能组件
 */
export default class LayerEnum extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LAYER_ENUM;
  }

  /**
   * 构造一个新的LayerEnum对象
   * @memberof LayerEnum
   * @returns {Promise.<LayerEnum>}
   */
  static async createInstance(): Promise<LayerEnum> {
    let thisObj = new LayerEnum();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 初始化图层列表
   * @memberof LayerEnum
   * @param {Array} layers 图层列表
   * @returns {boolean}
   */
  async init(layers: Array<MapLayer>): Promise<boolean> {
    let layersID = getArrayObjIds(layers);

    let methodName = "init"
    let paramsTypeStr = [this.LIST + this.CLASS_MAP_LAYER];
    let paramsStr = [layersID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移动至第一个
   * @memberof LayerEnum
   * @returns {boolean}
   */
  async moveToFirst(): Promise<boolean> {
    let methodName = "moveToFirst"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 移动至最后
   * @memberof LayerEnum
   * @returns {boolean}
   */
  async moveToLast(): Promise<boolean> {
    let methodName = "moveToLast"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取下一个MapLayer
   * @memberof LayerEnum
   * @returns {Promise<MapLayer>}
   */
  async next(): Promise<MapLayer> {
    let methodName = "next"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取前一个MapLayer
   * @memberof LayerEnum
   * @returns {Promise<MapLayer>}
   */
  async prev(): Promise<MapLayer> {
    let methodName = "prev"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }
}
