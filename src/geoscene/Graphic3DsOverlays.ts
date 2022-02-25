/**
 * @content 图形覆盖物层列表
 * @author fangqi 2021-11-30 
 */
import ObjectManager from '../components/ObjectManager';
import Graphic3DsOverlay from './Graphic3DsOverlay';

/**
 * @class Graphic3DsOverlays
 */
export default class Graphic3DsOverlays extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GRAPHIC_3DS_OVERLAYS;
  }

  /**
   * 构造一个新的 Graphic3DsOverlays 对象。
   * @memberOf Graphic3DsOverlays
   * @returns {Promise.<Graphic3DsOverlays>}
   */
  static async createInstance(): Promise<Graphic3DsOverlays> {
    let thisObj = new Graphic3DsOverlays();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 添加一个覆盖物图层
   * @memberOf Graphic3DsOverlays
   * @param graphic3DsOverlay - 覆盖物图层
   * @returns {Promise<void>} 成功返回 1 ,失败返回0
   */
  async add(graphic3DsOverlay: Graphic3DsOverlay): Promise<number> {
    let methodName = "add"
    let paramsTypeStr = [this.CLASS_GRAPHIC_3DS_OVERLAY];
    let paramsStr = [graphic3DsOverlay.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取覆盖物图层的个数
   * @memberOf Graphic3DsOverlays
   * @returns {Promise<*>} 成功返回 1 ,失败返回0
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取覆盖物图层的索引
   * @memberOf Graphic3DsOverlays
   * @param graphic3DsOverlay - 覆盖物图层
   * @returns {Promise<*|NavigationPreloadState>} 覆盖物图层的索引
   */
  async indexOf(graphic3DsOverlay: Graphic3DsOverlay): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_GRAPHIC_3DS_OVERLAY];
    let paramsStr = [graphic3DsOverlay.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取覆盖物图层的索引
   * @memberOf Graphic3DsOverlays
   * @param {String} graphicLayerName
   * @returns {Promise<number>} 覆盖物图层的索引
   */
  async indexOfByName(graphicLayerName: String): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [graphicLayerName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取覆盖物图形
   * @memberOf Graphic3DsOverlays
   * @param index - 覆盖物图形索引
   * @returns {Promise<*>} 覆盖物
   */
  async getGraphicsOverlay(index: number): Promise<Graphic3DsOverlay> {
    let methodName = "getGraphicsOverlay"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Graphic3DsOverlay();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图层覆盖物列表
   * @memberOf Graphic3DsOverlays
   * @returns {Promise<*>} 覆盖物图形列表
   */
  async getAllGraphicsOverlays() {
    let methodName = "getAllGraphicsOverlays"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Graphic3DsOverlay();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 插入一个覆盖物图层
   * @memberOf Graphic3DsOverlays
   * @param index - 图层索引
   * @param graphic3DsOverlay - 覆盖物图层
   * @returns {Promise<number>} 成功返回 1 ,失败返回0
   */
  async insert(index: number, graphic3DsOverlay: Graphic3DsOverlay): Promise<number> {
    let methodName = "insert"
    let paramsTypeStr = [this.INT, this.CLASS_GRAPHIC_3DS_OVERLAY];
    let paramsStr = [index, graphic3DsOverlay.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移动覆盖物图层
   * @memberOf Graphic3DsOverlays
   * @param fromIndex - 要移动的图层索引
   * @param toIndex - 覆盖物图层列表的位置
   * @returns {Promise<*>}
   */
  async move(fromIndex: number, toIndex: number): Promise<void> {
    let methodName = "move"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, toIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除覆盖物图层
   * @memberOf Graphic3DsOverlays
   * @param index - 覆盖物图层列表索引
   * @returns {Promise<void>}
   */
  async removeByIndex(index: number): Promise<void> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除覆盖物图层
   * @memberOf Graphic3DsOverlays
   * @param graphicsOverlay - 覆盖物图层
   * @returns {Promise<void>}
   */
  async remove(graphic3DsOverlay: Graphic3DsOverlay): Promise<void> {
    let methodName = "remove"
    let paramsTypeStr = [this.CLASS_GRAPHIC_3DS_OVERLAY];
    let paramsStr = [graphic3DsOverlay.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除所有覆盖物图层
   * @memberOf Graphic3DsOverlays
   * @param index
   * @returns {Promise<void>}
   */
  async removeAll(): Promise<void> {
    let methodName = "removeAll"
    await this.invoke(methodName, this.VOID);
  }
}
