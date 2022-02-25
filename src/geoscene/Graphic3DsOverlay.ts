/**
 * @content 场景覆盖物
 * @author fangqi 2021-11-30 
 */
import ObjectManager from '../components/ObjectManager';
import Graphic3D from './Graphic3D';

/**
 * @class Graphic3DsOverlay
 */
export default class Graphic3DsOverlay extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GRAPHIC_3DS_OVERLAY;
  }

  /**
   * 构造一个新的 Graphic3DsOverlay 对象。
   * @memberOf Graphic3DsOverlay
   * @returns {Promise.<Graphic3DsOverlay>}
   */
  static async createInstance(): Promise<Graphic3DsOverlay> {
    let thisObj = new Graphic3DsOverlay();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 添加一个图形
   * @memberOf Graphic3DsOverlay
   * @param {Graphic3D} graphic3D - 图形
   * @returns {Number} 成功返回 1 ,失败返回0
   */
  async addGraphic(graphic3D: Graphic3D): Promise<number> {
    let methodName = "addGraphic"
    let paramsTypeStr = [this.CLASS_GRAPHIC3D];
    let paramsStr = [graphic3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除一个图形
   * @memberOf Graphic3DsOverlay
   * @param {Graphic3D} graphic3D - 图形
   * @returns {Promise<void>}
   */
  async removeGraphic(graphic3D: Graphic3D): Promise<void> {
    let methodName = "removeGraphic"
    let paramsTypeStr = [this.CLASS_GRAPHIC3D];
    let paramsStr = [graphic3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除一组图形
   * @memberOf Graphic3DsOverlay
   */
  async removeAllGraphics(): Promise<void> {
    let methodName = "removeAllGraphics"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 插入一个图形
   * @memberOf Graphic3DsOverlay
   * @param {Number} index - 图形索引
   * @param {Graphic3D} graphic3D 要插入的图形
   * @returns {Promise<Number>} 成功返回 1 ,失败返回0
   */
  async insertGraphic(index: number, graphic3D: Graphic3D): Promise<number> {
    let methodName = "insertGraphic"
    let paramsTypeStr = [this.INT, this.CLASS_GRAPHIC3D];
    let paramsStr = [index, graphic3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移动一个图形
   * @memberOf Graphic3DsOverlay
   * @param {Number} fromIndex - 图形索引
   * @param {Number} toIndex - 图形索引
   * @returns {Promise<Void>}
   */
  async moveGraphic(fromIndex: number, toIndex: number): Promise<void> {
    let methodName = "moveGraphic"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, toIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置层名称
   * @memberOf Graphic3DsOverlay
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
   * @memberOf Graphic3DsOverlay
   * @returns {Promise<String>}
   */
   async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置图形层的可见状态
   * @memberOf Graphic3DsOverlay
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
   * 获取图形层的可见状态
   *@memberOf Graphic3DsOverlay
   *@returns {Number} 返回层的状态 0--不可见; 1--可见
   */
   async getState(): Promise<number> {
    let methodName = "getState"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回所有图形的数目
   * @memberOf Graphic3DsOverlay
   * @returns {Promise<number>}
   */
  async getGraphicCount(): Promise<number> {
    let methodName = "getGraphicCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回所有图形
   * @memberOf Graphic3DsOverlay
   * @returns {Promise.<Array<Graphic3D>>}
   */
  async getAllGraphics3D(): Promise<Array<Graphic3D>> {
    let methodName = "getAllGraphics3D"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Graphic3D();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取指定图形的索引
   * @memberOf Graphic3DsOverlay
   * @param {Graphic3D} graphic3D 图形对象
   * @returns {Promise<Number>} 成功返回1 ,失败返回0
   */
  async indexOf(graphic3D: Graphic3D): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_GRAPHIC3D];
    let paramsStr = [graphic3D.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取指定索引的图形
   * @memberOf Graphic3DsOverlay
   * @param {Number} index 索引
   * @returns {Promise<Graphic3D>} 成功返回1 ,失败返回0
   */
  async getGraphic(index: number): Promise<Graphic3D> {
    let methodName = "getGraphic"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Graphic3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 删除指定索引的图形
   * @memberOf Graphic3DsOverlay
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
   * 删除指定属性的图形
   * @memberOf Graphic3DsOverlay
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
   * @memberOf Graphic3DsOverlay
   * @param {String} name 属性名
   * @param {String} value 属性值
   * @returns {Promise.<Array<Graphic3D>>}
   */
  async getGraphicsByAttribute(name: String, value: String): Promise<Array<Graphic3D>> {
    let methodName = "getGraphicsByAttribute"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, value];
    let ObjIdList = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Graphic3D();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

}
