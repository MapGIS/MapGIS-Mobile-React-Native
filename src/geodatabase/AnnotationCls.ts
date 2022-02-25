/**
 * @content 注记类对象功能组件
 * @author fangqi 2021-10-14
 */
import DataBase from './DataBase';
import AClsInfo from './AClsInfo';
import Fields from '../geoobject/Fields';
import RecordSet from './RecordSet';
import type SRefData from '../geoobject/SRefData';
import type ElpTransParam from '../geoobject/ElpTransParam';
import IVectorCls from './IVectorCls';
import IntList from '../geoobject/IntList';
import Geometry from '../geoobject/Geometry';
import Record from '../geoobject/Record';
import GeomInfo from '../geoobject/GeomInfo';
import Rect from '../geoobject/Rect';
import type QueryDef from './QueryDef';

/**
 * @class AnnotationCls
 * @description 注记类对象
 */
export default class AnnotationCls extends IVectorCls {

  getClassName(): String {
    return this.CLASS_ANNOTATION_CLS;
  }

  /**
   * 构造一个新的 AnnotationCls 对象。
   * @memberOf AnnotationCls
   * @returns {Promise.<AnnotationCls>}注记类对象
   */
  static async createInstance(): Promise<AnnotationCls> {
    let thisObj = new AnnotationCls();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 AnnotationCls 对象。
   * @memberOf AnnotationCls
   * @param gdb 地理数据库对象
   * @returns {Promise.<AnnotationCls>}注记类对象
   */
  static async createInstanceByParam(gdb: DataBase): Promise<AnnotationCls> {
    let thisObj = new AnnotationCls();
    let initParamsType = [thisObj.CLASS_DATA_BASE];
    let initParamsStr = [gdb.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置显示比
   * @memberOf AnnotationCls
   * @param sacleX 显示比X
   * @param scaleY 显示比Y
   * @return {Promise} 成功：1，失败：0
   */
  async setScaleXY(scaleX: number, scaleY: number): Promise<number> {
    let methodName = "setScaleXY"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [scaleX, scaleY];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取X方向符号比
   * @memberOf AnnotationCls
   * @return {Promise} X方向符号比
   */
  async getScaleX(): Promise<number> {
    let methodName = "getScaleX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X方向符号比
   * @memberOf AnnotationCls
   * @param sacleX 显示比X
   * @return {Promise}
   */
  async setScaleX(sacleX: number): Promise<void> {
    let methodName = "setScaleX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [sacleX];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Y方向符号比
   * @memberOf AnnotationCls
   * @return {Promise} Y方向符号比
   */
  async getScaleY(): Promise<number> {
    let methodName = "getScaleY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y方向符号比
   * @memberOf AnnotationCls
   * @param sacleY 显示比Y
   * @return {Promise}
   */
  async setScaleY(sacleY: number): Promise<void> {
    let methodName = "setScaleY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [sacleY];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 投影变换
   * @memberOf AnnotationCls
   * @param sref 目的空间参考系
   * @return {Promise} 成功：1，失败：0
   */
  async projTrans(sref: SRefData): Promise<number> {
    let methodName = "projTrans"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sref.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 投影变换
   * @memberOf AnnotationCls
   * @param sref 目的空间参考系
   * @param dstAnnCls 目的注记类
   * @return {Promise} 成功：1，失败：0
   */
  async projTransByParam2(sref: SRefData, dstAnnCls: AnnotationCls): Promise<number> {
    let methodName = "projTrans"
    let paramsTypeStr = [this.CLASS_SREF_DATA, this.CLASS_ANNOTATION_CLS];
    let paramsStr = [sref.ObjId, dstAnnCls.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 投影变换
   * @memberOf AnnotationCls
   * @param dstSref 目的空间参考系
   * @param dstAnnCls 目的注记类
   * @param param 坐标系转换参数对象
   * @return {Promise} 成功：ture;失败：false;
   */
  async projTransByParam3(dstSref: SRefData, dstAnnCls: AnnotationCls, param: ElpTransParam): Promise<boolean> {
    let methodName = "projTrans"
    let paramsTypeStr = [this.CLASS_SREF_DATA, this.CLASS_ANNOTATION_CLS, this.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [dstSref.ObjId, dstAnnCls.ObjId, param.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 投影变换
   * @memberOf AnnotationCls
   * @param sref 源空间参考系
   * @param dstSref 目的空间参考系
   * @param dstAnnCls 目的注记类
   * @param param 坐标系转换参数对象
   * @return {Promise} 成功：ture;失败：false;
   */
  async projTransByParam4(sref: SRefData, dstSref: SRefData, dstAnnCls: AnnotationCls, param: ElpTransParam): Promise<boolean> {
    let methodName = "projTrans"
    let paramsTypeStr = [this.CLASS_SREF_DATA, this.CLASS_SREF_DATA, this.CLASS_ANNOTATION_CLS, this.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [sref.ObjId, dstSref.ObjId, dstAnnCls.ObjId, param.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 投影变换
   * @memberOf AnnotationCls
   * @param sref 源空间参考系
   * @param dstSref 目的空间参考系
   * @param dstAnnCls 目的注记类
   * @param param 坐标系转换参数对象
   * @param isRotateSymbol 是否对于投影后的角度进行偏转
   * @return {Promise} 成功：ture;失败：false;
   */
  async projTransEx(sref: SRefData, dstSref: SRefData, dstAnnCls: AnnotationCls, param: ElpTransParam, isRotateSymbol: boolean): Promise<boolean> {
    let methodName = "projTransEx"
    let paramsTypeStr = [this.CLASS_SREF_DATA, this.CLASS_SREF_DATA, this.CLASS_ANNOTATION_CLS, this.CLASS_ELP_TRANS_PARAM, this.BOOLEAN];
    let paramsStr = [sref.ObjId, dstSref.ObjId, dstAnnCls.ObjId, param.ObjId, isRotateSymbol];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 保存注记文本到属性
   * @memberOf AnnotationCls
   * @param fldIndex 属性序号
   * @param whereClause 注记文本
   * @return {Promise} 成功：>0；失败:<=0
   */
  async annToField(fldIndex: number, whereClause: String): Promise<number> {
    let methodName = "annToField"
    let paramsTypeStr = [this.SHORT, this.STRING];
    let paramsStr = [fldIndex, whereClause];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取地理数据库
   * @memberOf AnnotationCls
   * @return {Promise<DataBase>} 地理数据库对象
   */
  async getGDataBase(): Promise<DataBase> {
    let methodName = "getGDataBase"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new DataBase();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取注记类的要素类类型
   * @memberOf AnnotationCls
   * @return {Promise} 要素类类型
   */
  async getClsType() {
    let methodName = "getClsType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 取当前注记类对应的要素类ID
   * @memberOf AnnotationCls
   * @return {Promise} 要素类ID
   */
  async getClsID(): Promise<number> {
    let methodName = "getClsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取类名称
   * @memberOf AnnotationCls
   * @return {Promise} 类名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置类名称
   * @memberOf AnnotationCls
   * @param newVal 类名称
   * @return {Promise} >0:成功；<=0:失败
   */
  async setName(newVal: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否已经打开
   * @memberOf AnnotationCls
   * @return {Promise}  是否打开
   */
  async hasOpened(): Promise<boolean> {
    let methodName = "hasOpened"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 关闭类
   * @memberOf AnnotationCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async close(): Promise<number> {
    let methodName = "close"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取类URL
   * @memberOf AnnotationCls
   * @return {Promise} URL串
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 打开注记类，根据注记类名称和ID打开
   * @memberOf AnnotationCls
   * @param xclsVal 类对象的名称或者ID
   * @param verID 版本号
   * @return {Promise} 成功：类对象ID;失败：<=0
   */
  async open(xclsVal: String | number, verID: number): Promise<number> {
    let methodName = "open"
    let paramsTypeStr = [this.CLASS_OBJECT, this.INT];
    let paramsStr = [xclsVal, verID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 用URL方式打开类
   * @memberOf AnnotationCls
   * @param url URL字符串
   * @return {Promise} 成功：>0;失败：<=0
   */
  async openByURL(url: String): Promise<number> {
    let methodName = "openByURL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [url];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除类
   * @memberOf AnnotationCls
   * @param gdb 类所属数据库
   * @param xclsVal 类对象的名称或者ID
   * @return {Promise} 成功：true;失败：false
   */
  static async remove(gdb: DataBase, xclsVal: String | number): Promise<boolean> {
    let thisObj = new AnnotationCls();
    let methodName = "remove"
    let paramsTypeStr = [thisObj.CLASS_DATA_BASE, thisObj.CLASS_OBJECT];
    let paramsStr = [gdb.ObjId, xclsVal];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 注册版本
   * @memberOf AnnotationCls
   * @param gdb 类所属数据库
   * @param xclsVal 类对象的名称或者ID
   * @return {Promise} 成功：true;失败：false
   */
  static async register(gdb: DataBase, xclsVal: String | number): Promise<boolean> {
    let thisObj = new AnnotationCls();
    let methodName = "register"
    let paramsTypeStr = [thisObj.CLASS_DATA_BASE, thisObj.CLASS_OBJECT];
    let paramsStr = [gdb.ObjId, xclsVal];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 反注册版本
   * @memberOf AnnotationCls
   * @param gdb 类所属数据库
   * @param xclsVal 类对象的名称或者ID
   * @param verID 版本号
   * @return {Promise} 成功：true;失败：false
   */
  static async unRegister(gdb: DataBase, xclsVal: String | number, verID: number): Promise<boolean> {
    let thisObj = new AnnotationCls();
    let methodName = "unRegister"
    let paramsTypeStr = [thisObj.CLASS_DATA_BASE, thisObj.CLASS_OBJECT, thisObj.INT];
    let paramsStr = [gdb.ObjId, xclsVal, verID];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 归档
   * @memberOf AnnotationCls
   * @param gdb 类所属数据库
   * @param xclsVal 类对象的名称或者ID
   * @return {Promise} 成功：true;失败：false
   */
  static async archive(gdb: DataBase, xclsVal: String | number): Promise<boolean> {
    let thisObj = new AnnotationCls();
    let methodName = "archive"
    let paramsTypeStr = [thisObj.CLASS_DATA_BASE, thisObj.CLASS_OBJECT];
    let paramsStr = [gdb.ObjId, xclsVal];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 反归档
   * @memberOf AnnotationCls
   * @param gdb 类所属数据库
   * @param xclsVal 类对象的名称或者ID
   * @param bReserveData 是否归档数据
   * @return {Promise} 成功：true;失败：false
   */
  static async unArchive(gdb: DataBase, xclsVal: String | number, bReserveData: number): Promise<boolean> {
    let thisObj = new AnnotationCls();
    let methodName = "unArchive"
    let paramsTypeStr = [thisObj.CLASS_DATA_BASE, thisObj.CLASS_OBJECT, thisObj.BOOLEAN];
    let paramsStr = [gdb.ObjId, xclsVal, bReserveData];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 是否归档
   * @memberOf AnnotationCls
   * @param gdb 类所属数据库
   * @param xclsVal 类对象的名称或者ID
   * @return {Promise} 成功：true;失败：false
   */
  static async isArchived(gdb: DataBase, xclsVal: String | number): Promise<boolean> {
    let thisObj = new AnnotationCls();
    let methodName = "isArchived"
    let paramsTypeStr = [thisObj.CLASS_DATA_BASE, thisObj.CLASS_OBJECT];
    let paramsStr = [gdb.ObjId, xclsVal];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 获取当前注记类的信息
   * @memberOf AnnotationCls
   * @return {Promise<AClsInfo>} 注记类的信息
   */
  async getClsInfo(): Promise<AClsInfo> {
    let methodName = "getClsInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new AClsInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取要素数据集ID
   * @memberOf AnnotationCls
   * @return {Promise}要素数据集ID
   */
  async getdsID(): Promise<number> {
    let methodName = "getdsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置要素数据集ID
   * @memberOf AnnotationCls
   * @param newVal 要素数据集ID
   * @return {Promise} >0:成功；<=0:失败
   */
  async setdsID(newVal: number): Promise<number> {
    let methodName = "setdsID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取类别名
   * @memberOf AnnotationCls
   * @return {Promise}类别名
   */
  async getAliasName(): Promise<String> {
    let methodName = "getAliasName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置类别名
   * @memberOf AnnotationCls
   * @param newVal 类别名
   * @return {Promise}成功：>0;失败：<=0
   */
  async setAliasName(newVal: String): Promise<number> {
    let methodName = "setAliasName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取类模型名
   * @memberOf AnnotationCls
   * @return {Promise}类别名
   */
  async getModelName(): Promise<String> {
    let methodName = "getModelName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置类模型名
   * @memberOf AnnotationCls
   * @param newVal 类模型名
   * @return {Promise}成功：>0;失败：<=0
   */
  async setModelName(newVal: String): Promise<number> {
    let methodName = "setModelName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取空间参考系ID
   * @memberOf AnnotationCls
   * @return {Promise}空间参考系ID
   */
  async getSrID(): Promise<number> {
    let methodName = "getSrID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置要素数据集ID
   * @memberOf AnnotationCls
   * @param newVal 要素数据集ID
   * @return {Promise}成功：>0;失败：<=0
   */
  async setsrID(newVal: number): Promise<number> {
    let methodName = "setsrID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取注记类的矩形范围
   * @memberOf AnnotationCls
   * @return {Promise<Rect>} 矩形范围
   */
  async getRange(): Promise<Rect> {
    let methodName = "getRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取对象个数
   * @memberOf AnnotationCls
   * @return {Promise}对象个数
   */
  async getObjCount(): Promise<number> {
    let methodName = "getObjCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 重算范围
   * @memberOf AnnotationCls
   * @return {Promise}成功：>0;失败：<=0
   */
  async calRange(): Promise<number> {
    let methodName = "calRange"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 清空类
   * @memberOf AnnotationCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async clear(): Promise<number> {
    let methodName = "clear"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置类属性结构
   * @memberOf AnnotationCls
   * @param mcFlds 类属性结构
   * @return {Promise}成功：>0;失败：<=0
   */
  async setFields(mcFlds: Fields): Promise<number> {
    let methodName = "setFields"
    let paramsTypeStr = [this.CLASS_FIELDS];
    let paramsStr = [mcFlds];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取类属性结构
   * @memberOf AnnotationCls
   * @return {Promise<Fields>} 类属性结构
   */
  async getFields(): Promise<Fields> {
    let methodName = "getFields"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Fields();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取参与的关系类
   * @memberOf AnnotationCls
   * @return {Promise<Fields>} 参与的关系类列表
   */
  async relations(): Promise<IntList> {
    let methodName = "relations"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new IntList();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 查询
   *
   * @memberof AnnotationCls
   * @param {QueryDef} def 查询条件
   * @returns {Promise<RecordSet>} 记录集对象
   */
  async query(def: QueryDef): Promise<RecordSet> {
    let methodName = "query"
    let paramsTypeStr = [this.CLASS_QUERY_DEF];
    let paramsStr = [def.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new RecordSet();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 添加对象
   * @memberOf AnnotationCls
   * @param geom 对象几何信息
   * @param rcd 对象属性信息
   * @param inf 对象的图形信息
   * @return {Promise} 成功：添加的对象ID；失败:<=0
   */
  async append(geom: Geometry, rcd: Record, info: GeomInfo): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_GEOMETRY, this.CLASS_RECORD, this.CLASS_GEOM_INFO];
    let paramsStr = [geom.ObjId, rcd.ObjId, info.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新对象
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @param geom 对象几何信息
   * @param rcd 对象属性信息
   * @param inf 对象的图形信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async update(objID: number, geom: Geometry, rcd: Record, info: GeomInfo): Promise<number> {
    let methodName = "update"
    let paramsTypeStr = [this.LONG, this.CLASS_GEOMETRY, this.CLASS_RECORD, this.CLASS_GEOM_INFO];
    let paramsStr = [objID, geom.ObjId, rcd.ObjId, info.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新对象的属性
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @param rcd 对象属性信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateAtt(objID: number, rcd: Record): Promise<number> {
    let methodName = "updateAtt"
    let paramsTypeStr = [this.LONG, this.CLASS_RECORD];
    let paramsStr = [objID, rcd.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新对象图形信息
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @param inf 对象的图形信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateInfo(objID: number, info: GeomInfo): Promise<number> {
    let methodName = "updateInfo"
    let paramsTypeStr = [this.LONG, this.CLASS_GEOM_INFO];
    let paramsStr = [objID, info.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除一个注记要素类
   * @memberOf AnnotationCls
   * @param objID 注记要素类ID
   * @return {Promise} 成功/失败 true/false
   */
  async deleteByID(objID: number): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 删除一组注记要素类
   * @memberOf AnnotationCls
   * @param objIDs 一组注记要素类ID
   * @return {Promise} 成功/失败 true/false
   */
  async deleteByIDs(objIDArray: number[]): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.ARRAY + this.LONG];
    let paramsStr = [objIDArray];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 取对象信息
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @param ptGeom 对象几何信息
   * @param ptRcd 对象属性信息
   * @param ptInf 对象的图形信息
   * @return {Promise}成功：>0;失败：<=0
   */
  async get(objID: number, ptGeom: Geometry, ptRcd: Record, ptInf: GeomInfo): Promise<number> {
    let methodName = "get"
    let paramsTypeStr = [this.LONG, this.CLASS_GEOMETRY, this.CLASS_RECORD, this.CLASS_GEOM_INFO];
    let paramsStr = [objID, ptGeom.ObjId, ptRcd.ObjId, ptInf.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取对象几何信息
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @return {Promise<Geometry>}对象几何信息
   */
  async getGeometry(objID: number): Promise<Geometry> {
    let methodName = "query"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Geometry();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取对象的属性信息
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @return {Promise<Record>}对象的属性信息
   */
  async getAtt(objID: number): Promise<Record> {
    let methodName = "getAtt"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Record();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取注记类型
   * @memberOf AnnotationCls
   * @param objID 注记记录ID
   * @return{Promise}注记类型
   */
  async getAnnType(objID: number) {
    let methodName = "getAnnType"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 获取对象图形信息
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @return {Promise<GeomInfo>}对象图形信息
   */
  async getInfo(objID: number): Promise<GeomInfo> {
    let methodName = "getInfo"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GeomInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取要素矩形范围
   * @memberOf AnnotationCls
   * @param objID 对象记录ID
   * @return {Promise<Rect>}矩形范围
   */
  async getRect(objID: number): Promise<Rect> {
    let methodName = "getRect"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 复制集
   * @memberOf AnnotationCls
   * @param ptXSet 记录集对象
   * @return {Promise} 成功：>0;失败：<=0
   */
  async copySet(ptXSet: RecordSet): Promise<number> {
    let methodName = "copySet"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [ptXSet.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 添加集
   * @memberOf AnnotationCls
   * @param ptXSet 记录集对象
   * @return {Promise} 成功：>0;失败：<=0
   */
  async addSet(ptXSet: RecordSet): Promise<number> {
    let methodName = "addSet"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [ptXSet.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 减去集
   * @memberOf AnnotationCls
   * @param ptXSet 记录集对象
   * @return {Promise} 成功：>0;失败：<=0
   */
  async subSet(ptXSet: RecordSet): Promise<number> {
    let methodName = "subSet"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [ptXSet.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 
   * @memberOf AnnotationCls
   * @param dmpFile 
   * @return {Promise} 
   */
  async backup(dmpFile: String): Promise<number> {
    let methodName = "backup"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dmpFile];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 
   * @memberOf AnnotationCls
   * @param dmpFile 
   * @return {Promise} 
   */
  async restore(dmpFile: String): Promise<number> {
    let methodName = "restore"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dmpFile];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 创建类
   * @memberOf AnnotationCls
   * @param name 类URL
   * @param annType 注记类型
   * @param dsID 数据集ID
   * @param srID 空间参考系ID
   * @param flds 属性结构
   * @return {Promise} 成功返回类ID, 失败返回0
   */
  async createClsByParam(name: String, annType: any, dsID: number, srID: number, flds: Fields): Promise<number> {
    let methodName = "create"
    let paramsTypeStr = [this.STRING, this.ENUM + this.CLASS_ANN_TYPE, this.INT, this.INT, this.CLASS_FIELDS];
    let paramsStr = [name, annType, dsID, srID, flds.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 创建类
   * @memberOf AnnotationCls
   * @param url 类URL
   * @return {Promise} 成功返回类ID, 失败返回0
   */
  async createClsByUrl(url: String): Promise<number> {
    let methodName = "create"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [url];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 创建属性索引
   * @memberOf AnnotationCls
   * @param fldNames 要创建索引的字段列表
   * @param isUnique 是否创建唯一索引
   * @param isClustered 是否创建聚集索引
   * @return {Promise} 成功返回类ID, 失败返回0
   */
  async createAttIndex(fldNames: String[], isUnique: boolean, isClustered: boolean): Promise<boolean> {
    let methodName = "createAttIndex"
    let paramsTypeStr = [this.ARRAY + this.STRING, this.BOOLEAN, this.BOOLEAN];
    let paramsStr = [fldNames, isUnique, isClustered];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 创建属性索引
   * @memberOf AnnotationCls
   * @param indexName 要创建索引的名称
   * @param fldNames 要创建索引的字段列表
   * @param indexType 索引类型
   * @param isClustered 是否创建聚集索引
   * @param isPad 
   * @param fillFactor 
   * @param error 错误信息
   * @return {Promise} 成功返回类ID, 失败返回0
   */
  async createAttIndexByParam(indexName: String, fldNames: String[], indexType: any, isClustered: boolean, isPad: boolean, fillFactor: number, error: String): Promise<boolean> {
    let methodName = "createAttIndex"
    let paramsTypeStr = [this.STRING, this.ARRAY + this.STRING, this.ENUM + this.CLASS_ATT_INDEX_TYPE, this.BOOLEAN, this.BOOLEAN, this.INT, this.STRING];
    let paramsStr = [indexName, fldNames, indexType, isClustered, isPad, fillFactor, error];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 删除属性索引
   * @memberOf AnnotationCls
   * @param indexName [in]要删除的索引的名称
   * @param error [out]错误信息
   * @return {Promise} 成功返回类ID, 失败返回0
   */
  async dropAttIndex(indexName: String, error: String): Promise<boolean> {
    let methodName = "dropAttIndex"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [indexName, error];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 是否有子类型
   * @memberOf AnnotationCls
   * @return {Promise} 是否有子类型
   */
  async hasSubType(): Promise<boolean> {
    let methodName = "hasSubType"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取子类型字段名称
   * @memberOf AnnotationCls
   * @return {Promise} 子类型字段名称
   */
  async getSubTypeFieldName(): Promise<String> {
    let methodName = "getSubTypeFieldName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置子类型字段名称
   * @memberOf AnnotationCls
   * @param val 子类型字段名称
   * @return {Promise} 
   */
  async setSubTypeFieldName(val: String): Promise<void> {
    let methodName = "setSubTypeFieldName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取子类型字段索引
   * @memberOf AnnotationCls
   * @return {Promise} 子类型字段索引
   */
  async getSubTypeFieldIndex(): Promise<number> {
    let methodName = "getSubTypeFieldIndex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取缺省子类型编码
   * @memberOf AnnotationCls
   * @return {Promise} 缺省子类型编码
   */
  async getDefaultSubTypeCode(): Promise<number> {
    let methodName = "getDefaultSubTypeCode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置缺省子类型编码
   * @memberOf AnnotationCls
   * @param val 缺省子类型编码
   * @return {Promise} 
   */
  async setDefaultSubTypeCode(val: number): Promise<void> {
    let methodName = "setDefaultSubTypeCode"
    let paramsTypeStr = [this.INT];
    let paramsStr = [val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 通过子类型编码获得子类型名称
   * @memberOf AnnotationCls
   * @param code 子类型编码
   * @return {Promise} 子类型名称
   */
  async getSubTypeName(code: number): Promise<String> {
    let methodName = "getSubTypeName"
    let paramsTypeStr = [this.INT];
    let paramsStr = [code];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 获得子类型对应的非子类型字段的域ID
   * @memberOf AnnotationCls
   * @param code 子类型编码
   * @param fldName 
   * @return {Promise} 子类型对应的非子类型字段的域ID
   */
  async getDmnBySubType(code: number, fldName: String): Promise<number> {
    let methodName = "getDmnBySubType"
    let paramsTypeStr = [this.INT, this.STRING];
    let paramsStr = [code, fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置子类型对应的非子类型字段的域ID
   * @memberOf AnnotationCls
   * @param code 子类型编码
   * @param fldName 
   * @param dmnID 
   * @return {Promise} 子类型对应的非子类型字段的域ID
   */
  async setDmnBySubType(code: number, fldName: String, dmnID: number): Promise<boolean> {
    let methodName = "setDmnBySubType"
    let paramsTypeStr = [this.INT, this.STRING, this.INT];
    let paramsStr = [code, fldName, dmnID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
