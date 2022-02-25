/**
 * @content 三维场景类，用于管理场景中的图层
 * @author fangqi 2021-11-26 
 */
import DocumentItem from '../geomap/DocumentItem';
import Layer3D from './Layer3D';
import type Layer3DEnum from './Layer3DEnum';

/**
 * @class Scene
 */
export default class Scene extends DocumentItem {

  getClassName(): String {
    return this.CLASS_SCENE;
  }

  /**
   * 构造一个新的 Scene 对象。
   * @memberOf Scene
   * @returns {Promise.<Scene>}
   */
  static async createInstance(): Promise<Scene> {
    let thisObj = new Scene();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取加载的图层数据类型
   * @memberOf Scene
   * @returns {Promise<DocumentItemType>} 成功返回加载图层数据类型,DocItemType枚举类型
   */
  async getDocItemType(): Promise<any> {
    let methodName = "getDocItemType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置场景名称
   * @memberOf Scene
   * @param {String} strName - 场景名称
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setName(strName: String): Promise<number> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置场景描述信息
   * @memberOf Scene
   * @param {String} strDescription - 场景描述
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setDescription(strDescription: String): Promise<number> {
    let methodName = "setDescription"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strDescription];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取场景名称
   * @memberOf Scene
   * @returns {Promise<String>} 成功返回场景名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取场景描述信息
   * @memberOf Scene
   * @returns {Promise<String>} 成功返回场景描述
   */
  async getDescription(): Promise<String> {
    let methodName = "getDescription"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取图层总数
   * @memberOf Scene
   * @return 图层总数
   */
  async getLayerCount(): Promise<number> {
    let methodName = "getLayerCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取图层枚举
   * @memberOf Scene
   * @param {Layer3DEnum} pEnum - 图层枚举
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async getLayerEnum(pEnum: Layer3DEnum): Promise<number> {
    let methodName = "getLayerEnum"
    let paramsTypeStr = [this.ENUM + this.CLASS_LAYER3D_ENUM];
    let paramsStr = [pEnum];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据索引获取图层，从0开始
   * @memberOf Scene
   * @param {Number} index - 图层索引（大于等于0），其中这里的索引并不是图层的唯一标识，而是图层在当场景的位置索引
   * @returns {Promise<Layer3D>} 成功返回三维图层，Layer3D类型
   */
  async getLayer(index: number): Promise<Layer3D> {
    let methodName = "getLayer"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Layer3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 在场景中添加三维图层
   * @memberOf Scene
   * @param {Layer3D} p3DLayer - 三维图层
   * @returns {Promise<number>} 成功返回图层索引（从0开始）；失败返回<0
   */
  async addLayer(layer3D: Layer3D): Promise<number> {
    let methodName = "addLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D];
    let paramsStr = [layer3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 在场景中根据指定索引插入三维图层
   * @memberOf Scene
   * @param {Layer3D} p3DLayer - 三维图层
   * @param {int} index - 图层索引
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async insertLayer(layer3D: Layer3D, index: number): Promise<number> {
    let methodName = "insertLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D, this.INT];
    let paramsStr = [layer3D.ObjId, index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 从场景中移除三维图层 
   * @memberOf Scene
   * @param {Layer3D} layer3D - 三维图层
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async removeLayer(layer3D: Layer3D): Promise<number> {
    let methodName = "removeLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D];
    let paramsStr = [layer3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除三维图层，从fromIndex开始移除nCount个图层
   * @memberOf Scene
   * @param {int} fromIndex - 移除图层的起始位置
   * @param {int} nCount - 移除图层的个数
   * @returns {Promise<number>} 返回值：成功返回大于0；失败返回0
   */
  async removeLayerByIndex(fromIndex: number, nCount: number): Promise<number> {
    let methodName = "removeLayer"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, nCount];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除指定索引的三维图层（移除索引为layerIndex的图层）
   * @memberOf Scene
   * @param {int} layerIndex - 移除的图层索引
   * @returns {Promise<number>} 返回值：成功返回大于0；失败返回-1
   */
  async removeLayerAt(layerIndex: number): Promise<number> {
    let methodName = "removeLayerAt"
    let paramsTypeStr = [this.INT];
    let paramsStr = [layerIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 从场景中清空图层
   * @memberof Scene
   * @returns {double} 成功返回1，失败返回0
   */
  async clearLayers(): Promise<number> {
    let methodName = "clearLayers"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取三维图层的图层索引
   * @memberOf Scene
   * @param {Layer3D} layer3D - 三维图层
   * @returns {Promise<number>} 成功返回图层索引号；失败返回-1
   */
  async indexOfLayer(layer3D: Layer3D): Promise<number> {
    let methodName = "indexOfLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D];
    let paramsStr = [layer3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置地形的高程偏移
   * @memberOf Scene
   * @param {double} dVerticalOff - 地形的高程偏移
   * @returns {Promise<number>} 
   */
  async setVerticalOffset(dVerticalOff: number): Promise<number> {
    let methodName = "setVerticalOffset"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [dVerticalOff];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取地形的高程偏移
   * @memberof Scene
   * @returns {double} 地形的高程偏移
   */
  async getVerticalOffset(): Promise<number> {
    let methodName = "getVerticalOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

}
