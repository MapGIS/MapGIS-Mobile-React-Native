/**
 * @content 覆盖物对象功能组件
 * @author fangqi 2021-7-21 
 */
import Graphic from './Graphic';
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';

/**
 * @class GraphicsOverlay
 */
export default class GraphicsOverlay extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GRAPHICS_OVERLAY;
  }

  /**
   * 构造一个新的 GraphicsOverlay 对象。
   * @memberOf GraphicsOverlay
   * @returns {Promise.<GraphicsOverlay>}
   */
  static async createInstance(): Promise<GraphicsOverlay> {
    let thisObj = new GraphicsOverlay();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置层名称
   * @memberOf GraphicsOverlay
   * @param {String} name 
   * @returns {Promise<void>}
   */
  async setName(name: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取层名称
   * @memberOf GraphicsOverlay
   * @returns {Promise<String>}
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取图形层的可见状态
   *@memberOf GraphicsOverlay
   *@returns {Number} 返回层的状态 0--不可见; 1--可见
   */
  async getState(): Promise<number> {
    let methodName = "getState"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图形层的可见状态
   * @memberOf GraphicsOverlay
   * @param {Number} state 层的状态 0--不可见; 1--可见
   * @returns {Promise<Void>}
   */
  async setState(state: number): Promise<void> {
    let methodName = "setState"
    let paramsTypeStr = [this.INT];
    let paramsStr = [state];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 添加一个图形
   * @memberOf GraphicsOverlay
   * @param {Graphic} graphic
   * @returns {Number} 成功返回 1 ,失败返回0
   */
  async addGraphic(graphic: Graphic): Promise<number> {
    let methodName = "addGraphic"
    let paramsTypeStr = [this.CLASS_GRAPHIC];
    let paramsStr = [graphic.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 添加一组图形
   * @memberOf GraphicsOverlay
   * @param {Array<Graphic>} graphicArray
   * @returns {Promise<void>}
   */
  async addGraphics(graphicArray: Array<Graphic>): Promise<void> {
    let graphicArrayID = getArrayObjIds(graphicArray);

    let methodName = "addGraphics"
    let paramsTypeStr = [this.LIST + this.CLASS_GRAPHIC];
    let paramsStr = [graphicArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除一个图形
   * @memberOf GraphicsOverlay
   * @param {Graphic} graphic
   * @returns {Promise<void>}
   */
  async removeGraphic(graphic: Graphic): Promise<void> {
    let methodName = "removeGraphic"
    let paramsTypeStr = [this.CLASS_GRAPHIC];
    let paramsStr = [graphic.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除一组图形
   * @memberOf GraphicsOverlay
   * @param {Array<Graphic>} graphicArray
   * @returns {Promise<void>}
   */
  async removeGraphics(graphicArray: Array<Graphic>): Promise<void> {
    let graphicArrayID = getArrayObjIds(graphicArray);

    let methodName = "removeGraphics"
    let paramsTypeStr = [this.LIST + this.CLASS_GRAPHIC];
    let paramsStr = [graphicArrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除所有图形
   * @memberOf GraphicsOverlay
   */
  async removeAllGraphics(): Promise<void> {
    let methodName = "removeAllGraphics"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 返回所有图形
   * @memberOf GraphicsOverlay
   * @returns {Promise.<Array<Graphic>>}
   */
  async getAllGraphics(): Promise<Array<Graphic>> {
    let methodName = "getAllGraphics"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Graphic();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 返回所有图形的数目
   * @memberOf GraphicsOverlay
   * @returns {Promise<Number>}
   */
  async getGraphicCount(): Promise<Number> {
    let methodName = "getGraphicCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取指定图形的索引
   * @memberOf GraphicsOverlay
   * @param {Graphic} graphic 图形对象
   * @returns {Promise<Number>} 图形索引
   */
  async indexOf(graphic: Graphic): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_GRAPHIC];
    let paramsStr = [graphic.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取指定索引的图形
   * @memberOf GraphicsOverlay
   * @param {Number} index 索引
   * @returns {Promise<Graphic>}
   */
  async getGraphic(index: number): Promise<Graphic> {
    let methodName = "getGraphic"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Graphic();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 插入图形
   * @memberOf GraphicsOverlay
   * @param {Number} index 要插入的位置
   * @param {Graphic} graphic 要插入的图形
   * @returns {Promise<Number>} returnID > 0 插入成功，returnID < 0 插入失败
   */
  async insertGraphic(index: number, graphic: Graphic): Promise<number> {
    let methodName = "insertGraphic"
    let paramsTypeStr = [this.INT, this.CLASS_GRAPHIC];
    let paramsStr = [index, graphic.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除指定索引的图形
   * @memberOf GraphicsOverlay
   * @param {Number} index 索引
   * @returns {Promise<Void>}
   */
  async removeGraphicByIndex(index: number): Promise<void> {
    let methodName = "removeGraphic"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移动图形的叠放次序
   * @memberOf GraphicsOverlay
   * @param {Number} fromIndex 移动源索引 (int范围的Number)
   * @param {Number} toIndex 移动目的索引 (int范围的Number)
   * @returns {Promise<Void>}
   */
  async moveGraphic(fromIndex: number, toIndex: number): Promise<void> {
    let methodName = "moveGraphic"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, toIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除指定属性的图形
   * @memberOf GraphicsOverlay
   * @param {String} name 属性名
   * @param {String} value 属性值
   * @returns {Promise<Void>}
   */
  async removeGraphicByAttribute(name: String, value: String): Promise<void> {
    let methodName = "removeGraphicByAttribute"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取指定属性的图形
   * @memberOf GraphicsOverlay
   * @param {String} name 属性名
   * @param {String} value 属性值
   * @returns {Promise.<Array<Graphic>>}
   */
  async getGraphicsByAttribute(name: String, value: String): Promise<Array<Graphic>> {
    let methodName = "getGraphicsByAttribute"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, value];
    let ObjIdList = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Graphic();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

}
