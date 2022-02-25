/**
 * @content 查询条件定义功能组件
 * @author fangqi 2021-09-16
 */

import ObjectManager from "../components/ObjectManager";
import type Dot from "../geoobject/Dot";
import Geometry from "../geoobject/Geometry";
import type Rect from "../geoobject/Rect";

/**
 * @class QueryDef
 * @description 扩展字段头
 */
export default class QueryDef extends ObjectManager {

  getClassName(): String {
    return this.CLASS_QUERY_DEF;
  }

  /**
   * 构造一个新的 QueryDef 对象。
   * @memberOf QueryDef
   * @returns {Promise.<QueryDef>} QueryDef 对象。
   */
  static async createInstance(): Promise<QueryDef> {
    let thisObj = new QueryDef();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置属性查询条件
   * @memberOf QueryDef
   * @param whereClause 属性查询条件
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setFilter(whereClause: String): Promise<number> {
    let methodName = "setFilter"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [whereClause];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取属性查询条件
   * @memberOf QueryDef
   * @return {Promise} 属性查询条件
   */
  async getFilter(): Promise<String> {
    let methodName = "getFilter"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 属性相关选项设置,设置查询结果字段集
   * @memberOf QueryDef
   * @param flds 查询结果字段集
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setSubFields(flds: String): Promise<number> {
    let methodName = "setSubFields"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [flds];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取查询结果字段集
   * @memberOf QueryDef
   * @return {Promise} 查询结果字段集
   */
  async getSubFields(): Promise<String> {
    let methodName = "getSubFields"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 是否设置缓存空间图形记录
   * @memberOf QueryDef
   * @return {Promise} true表示缓存，false表示不缓存。
   */
  async getWithSpatial(): Promise<boolean> {
    let methodName = "getWithSpatial"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 是否设置缓存空间图形记录
   * @memberOf QueryDef
   * @param newVal 是否设置缓存空间图形记录
   * @return {Promise} 
   */
  async setWithSpatial(newVal: boolean): Promise<void> {
    let methodName = "setWithSpatial"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 指定结果集按该字段排序 该字段可以是属性表中的任何字段（包括或OID）或空间表(MF)中的任何 字段，可以结合IsAsc属性使用。
   * @memberOf QueryDef
   * @param field 排序字段
   * @return {Promise<number>} 成功:>0;失败：<=0
   */
  async setOrderField(field: String): Promise<number> {
    let methodName = "setOrderField"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [field];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取排序字段
   * @memberOf QueryDef
   * @return {Promise} 排序字段
   */
  async getOrderField(): Promise<String> {
    let methodName = "getOrderField"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 结果集是否升序排列
   * @memberOf QueryDef
   * @param newVal true:升序;false:降序
   * @return {Promise} 
   */
  async setIsAsc(newVal: boolean): Promise<void> {
    let methodName = "setIsAsc"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 结果集是否升序排列
   * @memberOf QueryDef
   * @return {Promise} true:升序;false:降序
   */
  async getIsAsc(): Promise<boolean> {
    let methodName = "getIsAsc"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置分组字段 未实现
   * @memberOf QueryDef
   * @param field 分组字段
   * @return {Promise<number>} 成功:>0;失败：<=0
   */
  async setGroupField(field: String): Promise<number> {
    let methodName = "setGroupField"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [field];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取分组字段 未实现
   * @memberOf QueryDef
   * @return {Promise} 分组字段
   */
  async getGroupField(): Promise<boolean> {
    let methodName = "getGroupField"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置矩形查询条件
   * @memberOf QueryDef
   * @param rect 矩形范围
   * @param queryMode 空间查询模式
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setRect(rect: Dot, queryMode: any): Promise<number> {
    let methodName = "setRect"
    let paramsTypeStr = [this.CLASS_RECT, this.ENUM + this.CLASS_QUERY_MODE];
    let paramsStr = [rect.ObjId, queryMode];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取矩形范围查询条件
   * @memberOf QueryDef
   * @param rect [out] 矩形范围
   * @return {Promise<SpaQueryMode>} 
   */
  async getRect(rect: Rect) {
    let methodName = "getRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [rect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 设置多边形查询条件
   * @memberOf QueryDef
   * @param geom 多边形
   * @param queryMode 空间查询模式
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setSpatial(geom: Geometry, queryMode: any): Promise<number> {
    let methodName = "setSpatial"
    let paramsTypeStr = [this.CLASS_GEOMETRY, this.ENUM + this.CLASS_QUERY_MODE];
    let paramsStr = [geom.ObjId, queryMode];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取多边形查询条件
   * @memberOf QueryDef
   * @param queryMode [out]空间查询模式 结果为SpaQueryMode的枚举值
   * @return {Promise} 多边形
   */
  async getSpatial(queryMode: any): Promise<Geometry> {
    let methodName = "getSpatial"
    let paramsTypeStr = [this.ENUM + this.CLASS_QUERY_MODE];
    let paramsStr = [queryMode];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * Near点查询
   * @memberOf QueryDef
   * @param dot 点坐标
   * @param dx x方向最大范围偏移量
   * @param dy y方向最大范围偏移量
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setNear(dot: Dot, dx: number, dy: number): Promise<number> {
    let methodName = "setNear"
    let paramsTypeStr = [this.CLASS_DOT, this.DOUBLE, this.DOUBLE];
    let paramsStr = [dot.ObjId, dx, dy];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置距离查询条件(不支持，暂未实现) 1.通过传入的要素，根据该要素向外扩展一段距离，在这距离内的要素，就是查询要素； 2.注意：不包括与该要素相交的要素。
   * @memberOf QueryDef
   * @param geom 几何对象
   * @param distance 距离
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setDistance(geom: Geometry, distance: number): Promise<number> {
    let methodName = "setDistance"
    let paramsTypeStr = [this.CLASS_GEOMETRY, this.DOUBLE];
    let paramsStr = [geom.ObjId, distance];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置容差半径
   * @memberOf QueryDef
   * @param esp 容差半径
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setTolerance(esp: number): Promise<number> {
    let methodName = "setTolerance"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [esp];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取容差半径
   * @memberOf QueryDef
   * @return {Promise} 成功:>0;失败：<=0
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置查询顺序
   * @memberOf QueryDef
   * @param order 查询顺序
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setSearchOrder(order: String): Promise<number> {
    let methodName = "setSearchOrder"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [order];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取查询顺序
   * @memberOf QueryDef
   * @return {Promise} 查询顺序
   */
  async getSearchOrder(): Promise<String> {
    let methodName = "getSearchOrder"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置是否按照要素ID排序
   * @memberOf QueryDef
   * @param byFID 是否按照要素ID排序
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setOrderByFID(byFID: boolean): Promise<number> {
    let methodName = "setOrderByFID"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [byFID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取是否按照要素ID排序
   * @memberOf QueryDef
   * @return {Promise} 是否按照要素ID排序
   */
  async getOrderByFID(): Promise<boolean> {
    let methodName = "getOrderByFID"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置图形表查询条件 
   * 点图形参数字段 libID; symID; height; width; angle; outpenw0,outpenw1,outpenw2 outclr0,outclr1,outclr2, ovprnt; fillflg; backexp; backclr; 
   * 用法示例，etInfoFilter("libID>3"); 
   * 线图形参数字段 libID; linstyID; ovprnt; outpenw0,outpenw1,outpenw2 outclr0,outclr1,outclr2, headtype; jointype; adjustflg; makemethod; xscale; yscale; 
   * 用法示例，etInfoFilter("linstyID>3"); 
   * 区图形参数字段 libID; patID; ovprnt; fillmode; fillclr; endclr; pathei; patwid; ang; patclr; outpenw; fullpatflg; 
   * 用法示例，etInfoFilter("patID>3");
   * @memberOf QueryDef
   * @param whereClause 图形表查询条件
   * @return {Promise} 成功:>0;失败：<=0
   */
  async setInfoFilter(whereClause: String): Promise<number> {
    let methodName = "setInfoFilter"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [whereClause];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
     * 获取图形表查询条件
     * @memberOf QueryDef
     * @return {Promise} 图形表查询条件
     */
  async getInfoFilter(): Promise<String> {
    let methodName = "getInfoFilter"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 按区间内素ID查询
   * @memberOf QueryDef
   * @param fromFID 开始要素oid
   * @param toFID 结束要素oid
   * @return {Promise} 成功:>0;失败：<=0
   */
  async featureIdBetween(fromFID: number, toFID: number): Promise<number> {
    let methodName = "featureIdBetween"
    let paramsTypeStr = [this.LONG, this.LONG];
    let paramsStr = [fromFID, toFID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 分页查询 目前只有pg和hdb的简单要素类和注记类，以及各数据源的对象类支持该语意。 当lOffset较大时，分页查询效率就大幅下降，所以需要从查询策略上进行
   * @memberOf QueryDef
   * @param offset 页号（从1开始）
   * @param lLimit 每一页的大小
   * @return {Promise} 
   */
  async setPagination(offset: number, lLimit: number): Promise<boolean> {
    let methodName = "setPagination"
    let paramsTypeStr = [this.LONG, this.INT];
    let paramsStr = [offset, lLimit];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 分页查询
   * @memberOf QueryDef
   * @param offset [out] 页号（从1开始）
   * @param limit [out] 每一页的大小
   * @return {Promise} 
   */
  async getPagination(offset: number, limit: number): Promise<boolean> {
    let methodName = "getPagination"
    let paramsTypeStr = [this.LONG, this.INT];
    let paramsStr = [offset, limit];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * q清除所有查询标识
   * @memberOf QueryDef
   * @return {Promise} 
   */
  async clear(): Promise<boolean> {
    let methodName = "clear"
    return await this.invoke(methodName, this.BOOLEAN);
  }

}
