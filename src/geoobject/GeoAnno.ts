/**
 * @content 抽象基类，用于定义所有的几何注记对象基类功能组件
 * @author fangqi 2021-09-09
 */
import Rect from './Rect';
import Geometry from './Geometry';
import Dot from './Dot';
import type SRefData from './SRefData';
import type ElpTransParam from './ElpTransParam';


/**
 * @class GeoAnno
 */
export default class GeoAnno extends Geometry {

  getClassName(): String {
    return this.CLASS_GEO_ANNO;
  }

  /**
   * 拷贝几何信息
   * @memberOf GeoAnno
   * @param geometry 被拷贝的几何对象
   * @returns {Promise} 成功克隆返回1，失败返回0
   */
  async clone(geometry: Geometry): Promise<number> {
    let methodName = "clone"
    let paramsTypeStr = [this.CLASS_GEOMETRY];
    let paramsStr = [geometry.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清空几何数据
   * @memberOf GeoAnno
   * @returns {Promise} 清空数据成功返回1，失败返回0
   */
  async empty(): Promise<number> {
    let methodName = "empty"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 计算几何注记的外包围盒
   * @memberOf GeoAnno
   * @returns {Promise.<Rect>} 包围盒信息
   */
  async calRect(): Promise<Rect> {
    let methodName = "calRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 是否在矩形内
   * @memberOf GeoAnno
   * @param rect 待比较的包围盒对象
   * @returns {Promise}在包围盒内返回1，不在返回0
   */
  async isInRect(rect: Rect): Promise<number> {
    let methodName = "isInRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [rect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 是否和矩形相交
   * @memberOf GeoAnno
   * @param rect 待比较的包围盒对象
   * @returns {Promise} 和包围盒相交返回1，不相交返回0
   */
  async isInterRect(rect: Rect): Promise<number> {
    let methodName = "isInterRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [rect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取注记维数
   * @memberOf GeoAnno
   * @returns {Promise} 注记维数
   */
  async getDimension() {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 投影变换
   * @memberOf GeoAnno
   * @param ptOrigSRef 原始投影系
   * @param ptDestSRef 目标投影系
   * @returns {Promise<Geometry>} 投影后的几何对象
   */
  async transSRS(origSRef: SRefData, destSRef: SRefData): Promise<Geometry> {
    let methodName = "transSRS"
    let paramsTypeStr = [this.CLASS_SREF_DATA, this.CLASS_SREF_DATA];
    let paramsStr = [origSRef.ObjId, destSRef.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 投影变换
   * @memberOf GeoAnno
   * @param ptOrigSRef 原始投影系
   * @param ptDestSRef 目标投影系
   * @param param 椭球坐标系变换参数
   * @returns {Promise<Geometry>}投影后的几何对象
   */
  async transSRSOfParam(origSRef: SRefData, destSRef: SRefData, param: ElpTransParam): Promise<Geometry> {
    let methodName = "transSRS"
    let paramsTypeStr = [this.CLASS_SREF_DATA, this.CLASS_SREF_DATA, this.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [origSRef.ObjId, destSRef.ObjId, param.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 获取注记类型，抽象接口，由派生类实现
   * @memberOf GeoAnno
   * @returns {Promise<Dot>} 注记类型
   */
   async getAnnType() {
    let methodName = "getAnnType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取定位点
   * @memberOf GeoAnno
   * @returns {Promise<Dot>} 定位点
   */
  async getAnchorDot(): Promise<Dot> {
    let methodName = "getAnchorDot"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置定位点
   * @memberOf GeoAnno
   * @param  dot 定位点坐标
   * @returns {Promise<void>}
   */
  async setAnchorDot(dot: Dot) :Promise<void>{
    let methodName = "setAnchorDot"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }
}
