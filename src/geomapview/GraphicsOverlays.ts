/**
 * @content 覆盖物对象功能组件
 * @author fangqi 2021-7-21 
 */
import ObjectManager from '../components/ObjectManager';
import GraphicsOverlay from './GraphicsOverlay';

/**
 * @class GraphicsOverlays
 */
export default class GraphicsOverlays extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GRAPHICS_OVERLAYS;
  }

  /**
   * 构造一个新的 GraphicsOverlays 对象。
   * @memberOf GraphicsOverlays
   * @returns {Promise.<GraphicsOverlays>}
   */
  static async createInstance(): Promise<GraphicsOverlays> {
    let thisObj = new GraphicsOverlays();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 添加图形覆盖物
   * @memberOf GraphicsOverlays
   * @param graphicsOverlay
   * @returns {Promise<number>}
   */
  async add(graphicsOverlay: GraphicsOverlay): Promise<number> {
    let methodName = "add"
    let paramsTypeStr = [this.CLASS_GRAPHICS_OVERLAY];
    let paramsStr = [graphicsOverlay.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图形覆盖物的数目
   * @memberOf GraphicsOverlays
   * @returns {Promise<number>}
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取图形覆盖物的索引
   * @memberOf GraphicsOverlays
   * @param graphicsOverlay
   * @returns {Promise<number>}
   */
  async indexOf(graphicsOverlay: GraphicsOverlay): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_GRAPHICS_OVERLAY];
    let paramsStr = [graphicsOverlay.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图形覆盖物的索引
   * @memberOf GraphicsOverlays
   * @param {String} graphicLayerName
   * @returns {Promise<number>}
   */
  async indexOfByName(graphicLayerName: String): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [graphicLayerName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图形覆盖物
   * @memberOf GraphicsOverlays
   * @returns {Promise<GraphicsOverlay>}
   */
  async getGraphicsOverlay(index: number): Promise<GraphicsOverlay> {
    let methodName = "getGraphicsOverlay"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GraphicsOverlay();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 返回所有图形
   * @memberOf GraphicsOverlays
   * @returns {Promise<*>}
   */
  async getAllGraphicsOverlays() {
    let methodName = "getAllGraphicsOverlays"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new GraphicsOverlay();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 插入图形覆盖物
   * @memberOf GraphicsOverlays
   * @param graphicsOverlay 图形覆盖物
   * @returns {Promise<number>}
   */
  async insert(index: number, graphicsOverlay: GraphicsOverlay): Promise<number> {
    let methodName = "insert"
    let paramsTypeStr = [this.INT, this.CLASS_GRAPHICS_OVERLAY];
    let paramsStr = [index, graphicsOverlay.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移动图形覆盖物
   * @memberOf GraphicsOverlays
   * @param fromIndex
   * @param toIndex
   * @returns {Promise<void>}
   */
  async move(fromIndex: number, toIndex: number): Promise<void> {
    let methodName = "move"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, toIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除图形覆盖物
   * @memberOf GraphicsOverlays
   * @param index
   * @returns {Promise<void>}
   */
  async removeByIndex(index: number): Promise<void> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除图形覆盖物
   * @memberOf GraphicsOverlays
   * @param graphicsOverlay
   * @returns {Promise<void>}
   */
  async remove(graphicsOverlay: GraphicsOverlay): Promise<void> {
    let methodName = "remove"
    let paramsTypeStr = [this.CLASS_GRAPHICS_OVERLAY];
    let paramsStr = [graphicsOverlay.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除所有图形覆盖物
   * @memberOf GraphicsOverlays
   * @param index
   * @returns {Promise<void>}
   */
  async removeAll(): Promise<void> {
    let methodName = "removeAll"
    await this.invoke(methodName, this.VOID);
  }
}
