/**
 * @content 三维组图层类，实现图层的分组管理
 * @author fangqi 2021-11-25 
 */
import type SRefData from "../geoobject/SRefData";
import type Rect3D from "../geoobject/Rect3D";
import Layer3D from "./Layer3D";
import type Layer3DEnum from "./Layer3DEnum";

/**
 * @class GroupLayer3D
 */
export default class GroupLayer3D extends Layer3D {

  getClassName(): String {
    return this.CLASS_GROUPLAYER3D;
  }

  /**
   * 构造一个新 GroupLayer3D 对象
   *
   * @memberof GroupLayer3D
   * @returns {Promise<GroupLayer3D>}
   */
  static async createInstance(): Promise<GroupLayer3D> {
    let thisObj = new GroupLayer3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 添加三维图层
   *
   * @memberof GroupLayer3D
   * @param {Layer3D} pLayer - 三维图层，Layer3D类型
   * @returns {int} 返回值：成功返回图层添加的位置索引（从0开始）；失败返回-1
   */
  async addLayer(pLayer: Layer3D): Promise<number> {
    let methodName = "addLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D];
    let paramsStr = [pLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 插入三维图层，根据指定索引位置插入三维图层
   *
   * @memberof GroupLayer3D
   * @param {int} index - 插入当前组中的位置
   * @param {Layer3D} pLayer - 插入的三维图层，Layer3D类型
   * @returns {int} 返回值：1-成功；0-失败
   */
  async insertLayer(index: number, pLayer: Layer3D): Promise<number> {
    let methodName = "insertLayer"
    let paramsTypeStr = [this.INT, this.CLASS_LAYER3D];
    let paramsStr = [index, pLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除三维图层
   *
   * @memberof GroupLayer3D
   * @param {Layer3D} pLayer - 三维图层，Layer3D类型
   * @returns {number} 返回值：成功返回移除的位置; 失败返回-1
   */
  async removeLayerByObj(pLayer: Layer3D): Promise<number> {
    let methodName = "removeLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D];
    let paramsStr = [pLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除三维图层，从fromIndex开始移除nCount个图层
   *
   * @memberof GroupLayer3D
   * @param {int} fromIndex - 移除图层的起始位置
   * @param {int} nCount - 移除图层的个数
   * @returns {number} 返回值：成功返回大于0；失败返回0
   */
  async removeLayer(fromIndex: number, nCount: number): Promise<number> {
    let methodName = "removeLayer"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, nCount];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除指定索引的三维图层（移除索引为layerIndex的图层）
   *
   * @memberof GroupLayer3D
   * @param {int} layerIndex - 移除的图层索引
   * @returns {number} 返回值：成功返回大于0；失败返回-1
   */
  async removeLayerAt(layerIndex: number): Promise<number> {
    let methodName = "removeLayerAt"
    let paramsTypeStr = [this.INT];
    let paramsStr = [layerIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除所有三维图层
   *
   * @memberof GroupLayer3D
   * @returns {number} 返回值：1-成功；0-失败
   */
  async clearLayers(): Promise<number> {
    let methodName = "clearLayers"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取当前组下的图层数目
   *
   * @memberof GroupLayer3D
   * @returns {int} 成功返回当前组下的图层数目
   */
  async getLayerCount(): Promise<number> {
    let methodName = "getLayerCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 根据索引获取三维图层
   * @memberof GroupLayer3D
   * @param {int} index - 图层索引（大于等于0），其中这里的索引并不是图层的唯一标识，而是图层在当前组的位置索引
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
   * 根据图层名称查找三维图层,返回图层位置索引
   *
   * @memberof GroupLayer3D
   * @param {String} strLayerName - 图层名称
   * @returns {int} 成功返回图层位置索引，失败返回-1。这里的索引并不是图层的唯一标识，而是图层在当前组的位置索引。
   */
  async indexOfLayerByName(strLayerName: String): Promise<number> {
    let methodName = "indexOfLayer"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strLayerName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据三维图层对象获取图层位置索引
   *
   * @memberof GroupLayer3D
   * @param {Layer3D} pLayer - 三维图层，Layer3D类型
   * @returns {int} 成功返回图层位置索引，失败返回-1。这里的索引并不是图层的唯一标识，而是图层在当前组的位置索引。
   */
  async indexOfLayer(pLayer: Layer3D): Promise<number> {
    let methodName = "indexOfLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D];
    let paramsStr = [pLayer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层枚举
   *
   * @memberof GroupLayer3D
   * @param {Layer3DEnum} pEnum - Layer3DEnum，当前组图层的图层枚举（不包括当前组图层）
   * @returns {int} 返回值：1-成功；0-失败
   */
  async getLayerEnum(pEnum: Layer3DEnum): Promise<number> {
    let methodName = "getLayerEnum"
    let paramsTypeStr = [this.CLASS_LAYER3D_ENUM];
    let paramsStr = [pEnum.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 图层数据是否有效
   *
   * @memberof GroupLayer3D
   * @returns {boolean} 布尔类型，返回值：false-无效；true-有效
   */
  async isValid(): Promise<boolean> {
    let methodName = "isValid"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取图层类型
   *
   * @memberof GroupLayer3D
   * @returns {Layer3DType} 成功返回三维图层类型,Layer3DType枚举类型,返回值为Group
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取图层三维范围
   *
   * @memberof GroupLayer3D
   * @param {Rect3D} pBox - 三维范围，Rect3D类型，参数值为{double xMin, double yMin, double zMin, double xMax, double yMax, double zMax}
   * @returns {int} 返回值：1-成功；0-失败
   */
  async getExtent(pBox: Rect3D): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT3D];
    let paramsStr = [pBox.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置动态投影标识
   *
   * @memberof GroupLayer3D
   * @param {Rect3D} bProjTrans - 动态投影标识
   * @returns {int} 返回值：1-成功；0-失败
   */
  async setProjTrans(bProjTrans: boolean): Promise<number> {
    let methodName = "setProjTrans"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [bProjTrans];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取动态投影标志
   *
   * @memberof GroupLayer3D
   * @returns {boolean} 布尔类型，返回值：false-组图层不设动态投影；true-组图层设置动态投影
   */
  async isProjTrans(): Promise<boolean> {
    let methodName = "isProjTrans"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置动态投影参照系
   *
   * @memberof GroupLayer3D
   * @param {SRefData} pSRS - 空间参考系对象SRefData
   * @returns {int} 返回值：1-成功；0-失败
   */
  async setProjTransSRS(pSRS: SRefData): Promise<number> {
    let methodName = "setProjTransSRS"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [pSRS.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取动态投影参照系
   *
   * @memberof GroupLayer3D
   * @param {SRefData} pSRS - 空间参考系对象SRefData，输出参数
   * @returns {int} 返回值：1-成功；0-失败
   */
  async getProjTransSRS(pSRS: SRefData): Promise<number> {
    let methodName = "getProjTransSRS"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [pSRS.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
