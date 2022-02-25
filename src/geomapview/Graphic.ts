/**
 * @content 图形对象功能组件
 * @author fangqi 2021-7-17 
 */
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import ConvertUtil from '../components/ConvertUtil';
import Dot from '../geoobject/Dot';
import Geometry from '../geoobject/Geometry';
import Rect from '../geoobject/Rect';

/**
 * @class Graphic
 */
export default class Graphic extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GRAPHIC;
  }

  /**
   * 构造一个新的 Graphic 对象。
   * @memberOf Graphic
   * @returns {Promise.<Graphic>}
   */
  static async createInstance(): Promise<Graphic> {
    let thisObj = new Graphic();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取覆盖物的可见状态
   * @memberOf Graphic
   * @returns {number} 返回层的状态 0 不可见 1 可见
   */
  async getState() {
    let methodName = "getState"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置覆盖物的可见状态
   * @memberOf Graphic
   * @param {number} state 覆盖物的可见状态。0 不可见；1 可见
   * @returns {Promise<Void>}
   */
  async setState(state: number) {
    let methodName = "setState"
    let paramsTypeStr = [this.INT];
    let paramsStr = [state];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置图形颜色
   * @memberOf Graphic
   * @param {String} color 图形颜色 eg:'rgba(128, 128, 128, 255)'
   * @returns {Promise<Void>}
   */
  async setColor(color: String): Promise<void> {
    let methodName = "setColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图形的颜色
   * @memberOf Graphic
   * @returns {Promise<String>} 图形颜色 eg:'rgba(128, 128, 128, 255)'
   */
  async getColor(): Promise<String> {
    let methodName = "getColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 获取图形中心点坐标
   * @memberOf Graphic
   * @returns {Promise<Dot>}
   */
  async getCenterPoint(): Promise<Dot> {
    let methodName = "getCenterPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形外包矩形
   * @memberOf Graphic
   * @returns {Promise<Rect>}
   */
  async getBoundingRect(): Promise<Rect> {
    let methodName = "getBoundingRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形类型
   * @memberOf Graphic
   * @returns {Promise<number>} 图形类型。例：1---GraphicType.PointType
   */
  async getGraphicType() {
    let methodName = "getGraphicType"
    let type = await this.invoke(methodName, this.NUMBER);
    return type;
  }

  /**
   * 设置点是否为像素单位(默认情况下为地图单位)
   * @memberOf Graphic
   * @param {boolean} pixel 点是否为像素单位
   * @returns {Promise<void>}
   */
  async setPointByPixel(pixel: boolean) :Promise<void>{
    let methodName = "setPointByPixel"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [pixel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点是否为像素单位
   * @memberOf Graphic
   * @returns {Promise<boolean>}
   */
  async isPointByPixel() :Promise<boolean>{
    let methodName = "isPointByPixel"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置图形的属性
   * @memberOf Graphic
   * @param {String} name 属性名称
   * @param {String} value 属性值
   * @returns {Promise<void>}
   */
  async setAttributeValue(name: String, value: String) :Promise<void>{
    let methodName = "setAttributeValue"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图形属性的数目
   * @memberOf Graphic
   * @returns {Promise<number>}
   */
  async getAttributeNum(): Promise<number> {
    let methodName = "getAttributeNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 根据索引获取图形属性名
   * @memberOf Graphic
   * @param {number} index 索引
   * @returns {Promise<String>}
   */
  async getAttributeName(index: number) {
    let methodName = "getAttributeName"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 根据索引获取图形属性值
   * @memberOf Graphic
   * @param {number} index 图形属性的索引，从0开始到属性数目减1
   * @returns {Promise<String>}
   */
  async getAttributeValueByIndex(index: number): Promise<String> {
    let methodName = "getAttributeValue"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 根据属性名称获取图形属性值
   * @memberOf Graphic
   * @param {String} name 属性名称
   * @returns {Promise<String>}
   */
  async getAttributeValueByName(name: String) {
    let methodName = "getAttributeValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 移除指定名称的属性
   * @memberOf Graphic
   * @param {String} name 属性名称
   * @returns {Promise<void>}
   */
  async removeAttribute(name: String) {
    let methodName = "removeAttribute"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除所有属性.
   * @memberOf Graphic
   * @returns {Promise<void>}
   */
  async removeAllAttributes() {
    let methodName = "removeAllAttributes"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 将几何对象转换为图形对象.
   * 
   * 详细说明:
   * 常用于将查询出的要素转换为图形，在地图上做高亮显示.一个几何对象可能会转换出一个或多个图形对象
   * 
   * @memberOf Graphic
   * @param geometry 待转换的几何对象
   * @returns {Promise.<Geometry>} List 转换出的图形列表
   */
  static async toGraphicsFromGeometry(geometry: Geometry) {
    let thisObj = new Graphic();
    let methodName = "toGraphicsFromGeometry"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geometry.ObjId];
    let ObjIdList = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.LIST);
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
   * 将图形对象转换为几何对象
   * 
   * @memberOf Graphic
   * @param graphic 待转换的图形对象
   * @returns {Promise.<Geometry>} 几何对象
   */
  static async toGeometry(graphic: Graphic): Promise<Geometry> {
    let thisObj = new Graphic();
    let methodName = "toGeometry"
    let paramsTypeStr = [thisObj.CLASS_GRAPHIC];
    let paramsStr = [graphic.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 将一组同类型的图形对象转换为多几何对象(GeoPolygons、GeoPoints、GeoLines)
   * 
   * @memberOf Graphic
   * @param graphics 待转换的几何对象数组
   * @returns {Promise.<Geometry>} 几何对象
   */
  static async toGeometryByGraphics(graphics: Array<Graphic>): Promise<Geometry> {
    let thisObj = new Graphic();
    let graphicArrayID = getArrayObjIds(graphics);

    let methodName = "toGeometry"
    let paramsTypeStr = [thisObj.LIST + thisObj.CLASS_GRAPHIC];
    let paramsStr = [graphicArrayID];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

}
