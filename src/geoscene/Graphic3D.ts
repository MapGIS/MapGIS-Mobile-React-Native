/**
 * @content 场景图形基类
 * @author fangqi 2021-11-30 
 */
import ObjectManager from '../components/ObjectManager';
import ConvertUtil from '../components/ConvertUtil';
import Dot from '../geoobject/Dot';
import Geometry from '../geoobject/Geometry';
import Rect from '../geoobject/Rect';
import Dot3D from '../geoobject/Dot3D';
import Rect3D from '../geoobject/Rect3D';

/**
 * @class Graphic3D
 */
export default class Graphic3D extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GRAPHIC3D;
  }

  /**
   * 构造一个新的 Graphic3D 对象。
   * @memberOf Graphic3D
   * @returns {Promise.<Graphic3D>}
   */
  static async createInstance(): Promise<Graphic3D> {
    let thisObj = new Graphic3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图形中心点坐标
   * @memberOf Graphic3D
   * @returns {Promise<Dot>} 图形中心点
   */
  async getCenterPoint(): Promise<Dot> {
    let methodName = "getCenterPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取外包
   * @memberOf Graphic3D
   * @returns {Promise<Rect>} 外包矩形
   */
  async getBoundingRect(): Promise<Rect> {
    let methodName = "getBoundingRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形的地理坐标
   * @memberOf Graphic3D
   * @returns {Promise<Dot3D>} 返回地理坐标
   */
  async getCenterPoint3D(): Promise<Dot3D> {
    let methodName = "getCenterPoint3D"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取场景覆盖物矩形外包
   * @memberOf Graphic3D
   * @returns {Promise<Rect3D>} 返回覆盖物外包矩形
   */
  async getBoundingBox(): Promise<Rect3D> {
    let methodName = "getBoundingBox"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置高程模式
   * @memberOf Graphic3D
   * @param {AltitudeMode} altitudeMode - 高程模式
   * @returns {Promise<number>} 成功返回1 ,失败返回0
   */
  async setAltitudeMode(altitudeMode: any): Promise<number> {
    let methodName = "setAltitudeMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_ALTITUDE_MODE];
    let paramsStr = [altitudeMode];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取高程模式
   * @memberOf Graphic3D
   * @returns {AltitudeMode} 高程模式
   */
  async getAltitudeMode(): Promise<any> {
    let methodName = "getAltitudeMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 控制图层可见性
   * @memberOf Graphic3D
   * @param {GraphicState} state 覆盖物的可见状态
   * @returns {Promise<Void>}
   */
  async setState(state: any): Promise<void> {
    let methodName = "setState"
    let paramsTypeStr = [this.ENUM + this.CLASS_GRAPHIC_STATE];
    let paramsStr = [state];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图形的可见状态
   * @memberOf Graphic3D
   * @returns {number} 成功返回1 ,失败返回0
   */
  async getState(): Promise<number> {
    let methodName = "getState"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图形颜色
   * @memberOf Graphic3D
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
   * @memberOf Graphic3D
   * @returns {Promise<String>} 图形颜色 eg:'rgba(128, 128, 128, 255)'
   */
  async getColor(): Promise<String> {
    let methodName = "getColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 获取图形类型
   * @memberOf Graphic3D
   * @returns {Promise<GraphicType3D>} 图形类型。例：1---GraphicType.PointType
   */
  async getGraphicType(): Promise<any> {
    let methodName = "getGraphicType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置点是否为像素单位(默认情况下为地图单位)
   * @memberOf Graphic3D
   * @param {boolean} pixel 点是否为像素单位
   * @returns {Promise<void>}
   */
  async setPointByPixel(pixel: boolean) {
    let methodName = "setPointByPixel"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [pixel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点是否为像素单位
   * @memberOf Graphic3D
   * @returns {Promise<boolean>}
   */
  async isPointByPixel(): Promise<boolean> {
    let methodName = "isPointByPixel"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 移除指定名称的属性
   * @memberOf Graphic3D
   * @param {String} name 属性名称
   * @returns {Promise<void>}
   */
  async removeAttribute(name: String): Promise<void> {
    let methodName = "removeAttribute"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 移除所有属性.
   * @memberOf Graphic3D
   * @returns {Promise<void>}
   */
  async removeAllAttributes(): Promise<void> {
    let methodName = "removeAllAttributes"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 设置图形的属性
   * @memberOf Graphic3D
   * @param {String} name 属性名称
   * @param {String} value 属性值
   * @returns {Promise<void>}
   */
  async setAttributeValue(name: String, value: String): Promise<void> {
    let methodName = "setAttributeValue"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图形属性的数目
   * @memberOf Graphic3D
   * @returns {Promise<number>} 图形属性的数目
   */
  async getAttributeNum(): Promise<number> {
    let methodName = "getAttributeNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 根据索引获取图形属性名
   * @memberOf Graphic3D
   * @param {number} index 图形属性的索引，从0开始到属性数目减1
   * @returns {Promise<String>} 图形属性名
   */
  async getAttributeName(index: number) {
    let methodName = "getAttributeName"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 根据属性名称获取图形属性值
   * @memberOf Graphic3D
   * @param {String} name 属性名称
   * @returns {Promise<String>} 图形属性值
   */
  async getAttributeValueByName(name: String) {
    let methodName = "getAttributeValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 根据索引获取图形属性值
   * @memberOf Graphic3D
   * @param {number} index 图形属性的索引，从0开始到属性数目减1
   * @returns {Promise<String>} 图形属性值
   */
  async getAttributeValueByIndex(index: number): Promise<String> {
    let methodName = "getAttributeValue"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 将几何对象转换为图形对象.
   * 
   * 详细说明:
   * 常用于将查询出的要素转换为图形，在地图上做高亮显示.一个几何对象可能会转换出一个或多个图形对象
   * 
   * @memberOf Graphic3D
   * @param geometry 待转换的几何对象
   * @returns {Promise.<Geometry>} List 转换出的图形列表
   */
  static async toGraphicsFromGeometry(geometry: Geometry) {
    let thisObj = new Graphic3D();
    let methodName = "toGraphicsFromGeometry"
    let paramsTypeStr = [thisObj.CLASS_GEOMETRY];
    let paramsStr = [geometry.ObjId];
    let ObjIdList = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.LIST);
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
   * 覆盖物图层转几何对象
   * 
   * @memberOf Graphic3D
   * @param graphic3D - 覆盖物图层
   * @returns {Promise.<Geometry>} 几何对象
   */
  static async toGeometry(graphic3D: Graphic3D): Promise<Geometry> {
    let thisObj = new Graphic3D();
    let methodName = "toGeometry"
    let paramsTypeStr = [thisObj.CLASS_GRAPHIC3D];
    let paramsStr = [graphic3D.ObjId];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

}
