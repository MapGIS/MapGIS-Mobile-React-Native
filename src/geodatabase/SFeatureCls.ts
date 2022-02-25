/**
 * @content 简单要素类对象功能组件
 * @author fangqi 2021-09-18
 */

import type IVectorCls from './IVectorCls';
import DataBase from './DataBase';
// import FClsInfo from './FClsInfo';
// import RecordSet from './RecordSet';
// import GeoPoints from './GeoPoints'
// import GeoPolygons from './GeoPolygons'
// import TextAnnInfo from './TextAnnInfo'
import ObjectManager from '../components/ObjectManager';
import RecordSet from './RecordSet';
import Rect from '../geoobject/Rect';
import Fields from '../geoobject/Fields';
import Geometry from '../geoobject/Geometry';
import GeomInfo from '../geoobject/GeomInfo';
import Record from '../geoobject/Record';


/**
 * @class SFeatureCls
 * @description 简单要素类对象
 */
export default class SFeatureCls extends ObjectManager implements IVectorCls {

  getClassName(): String {
    return this.CLASS_SFEATURE_CLS;
  }

  /**
   * 构造一个新的 SFeatureCls 对象。
   * @memberOf SFeatureCls
   * @returns {Promise<SFeatureCls>}简单要素类对象
   */
  static async createInstance(db: DataBase): Promise<SFeatureCls> {
    let thisObj = new SFeatureCls();
    let initParamsType = [thisObj.CLASS_DATA_BASE];
    let initParamsStr = [db.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  async createByName(name: String, geomType: any, dsID: number, srsID: number, flds: Fields): Promise<number> {
    let methodName = "create"
    let paramsTypeStr = [this.STRING, this.ENUM + this.CLASS_GEOM_TYPE, this.INT, this.INT, this.CLASS_FIELDS];
    let paramsStr = [name, geomType, dsID, srsID, flds.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 是否是通过URL的方式打开
   * @memberOf SFeatureCls
   * @return {Promise}  是否是通过URL的方式打开
   */
  async getIsOpenByURL(): Promise<boolean> {
    let methodName = "getIsOpenByURL"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否通过URL的方式打开
   * @memberOf SFeatureCls
   * @param {String} newVal 是否通过URL的方式打开
   * @returns {Promise<*>}
   */
  async setIsOpenByURL(name: boolean): Promise<void> {
    let methodName = "setIsOpenByURL"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地理数据库
   * @memberOf SFeatureCls
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
   * 获取简单要素类的要素类类型
   * @memberOf SFeatureCls
   * @return {Promise} 要素类类型
   */
  async getClsType() {
    let methodName = "getClsType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 取当前简单要素类对应的要素类ID
   * @memberOf SFeatureCls
   * @return {Promise} 要素类ID
   */
  async getClsID(): Promise<number> {
    let methodName = "getClsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取类名称
   * @memberof SFeatureCls
   * @returns {String} 类名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置类名称
   * @memberof SFeatureCls
   * @param {String} newVal 类名称
   * @return {Promise<Void>}
   */
  async setName(newVal: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 类是否打开
   * @memberof SFeatureCls
   * @returns {boolean} 是否打开
   */
  async hasOpened(): Promise<boolean> {
    let methodName = "hasOpened"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 关闭类
   * @memberOf SFeatureCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async close(): Promise<number> {
    let methodName = "close"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取类URL
   * @memberOf SFeatureCls
   * @return {Promise} URL串
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 用URL方式打开类,根据传入的URL字符串打开简单要素类
   * @memberof SFeatureCls
   * @param {String} url URL字符串
   * @return {Promise<Void>} 成功：>0;失败：<=0
   */
  async openByURL(url: String): Promise<number> {
    let methodName = "openByURL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [url];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  // /**
  //  * 根据类名删除类
  //  * @memberOf SFeatureCls
  //  * @param db 地理数据库对象
  //  * @param clsName 类名
  //  * @return {Promise} 成功：>0;失败：<=0
  //  */
  // static async remove(gdb, xclsVal) {
  //   try {
  //     return await SFCLS.removeByName(
  //       this.ObjId,
  //       db._MGDataBaseId,
  //       clsName
  //     );
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // /**
  //  * 根据类ID删除类
  //  * @memberOf SFeatureCls
  //  * @param db 地理数据库对象
  //  * @param clsID 类ID
  //  * @return {Promise} 成功：>0;失败：<=0
  //  */
  // static async register(gdb, xclsVal) {
  //   try {
  //     return await SFCLS.register(this.ObjId, db._MGDataBaseId, clsID);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // static async unRegister(gdb, xclsVal, verID) {
  //   try {
  //     return await SFCLS.unRegister(this.ObjId, db._MGDataBaseId, clsID);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // static async archive(gdb, xclsVal) {
  //   try {
  //     return await SFCLS.archive(this.ObjId, db._MGDataBaseId, clsID);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // static async unArchive(gdb, xclsVal, verID) {
  //   try {
  //     return await SFCLS.unArchive(this.ObjId, db._MGDataBaseId, clsID);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // static async isArchived(gdb, xclsVal) {
  //   try {
  //     return await SFCLS.isArchived(this.ObjId, db._MGDataBaseId, clsID);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // async getClsInfo() {
  //   try {
  //     return await SFCLS.getClsInfo();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  /**
   * 取要素数据集ID
   * @memberOf SFeatureCls
   * @return {Promise} 要素数据集ID
   */
  async getdsID(): Promise<number> {
    let methodName = "getdsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置要素数据集ID
   * @memberof SFeatureCls
   * @param {number} newVal 要素数据集ID
   * @return {Promise<Void>} 成功：>0;失败：<=0
   */
  async setdsID(newVal: number): Promise<number> {
    let methodName = "setdsID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取类别名
   * @memberOf SFeatureCls
   * @return {Promise}类别名
   */
  async getAliasName(): Promise<String> {
    let methodName = "getAliasName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置类别名
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
   * @return {Promise} 类模型名
   */
  async getModelName(): Promise<String> {
    let methodName = "getModelName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置类模型名
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
   * @return {Promise}空间参考系ID
   */
  async getsrID(): Promise<number> {
    let methodName = "getsrID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置要素数据集ID
   * @memberOf SFeatureCls
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
   * 获取简单要素类的矩形范围
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
   * @return {Promise}对象个数
   */
  async getObjCount(): Promise<number> {
    let methodName = "getObjCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 重算范围
   * @memberOf SFeatureCls
   * @return {Promise}成功：>0;失败：<=0
   */
  async calRange(): Promise<number> {
    let methodName = "calRange"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 清空数据
   * @memberOf SFeatureCls
   * @return {Promise} 成功：>0;失败：<=0
   */
  async clear(): Promise<number> {
    let methodName = "clear"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置类属性结构
   * @memberOf SFeatureCls
   * @param mcFlds 类属性结构
   * @return {Promise}成功：>0;失败：<=0
   */
  async setFields(newVal: Fields): Promise<number> {
    let methodName = "setFields"
    let paramsTypeStr = [this.CLASS_FIELDS];
    let paramsStr = [newVal.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取当前简单要素类的属性结构
   * @memberOf SFeatureCls
   * @return {Promise<Fields>} 属性结构
   */
  async getFields(): Promise<Fields> {
    let methodName = "getFields"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Fields();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 添加对象
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
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
   * 更新对象
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param geom 对象几何信息
   * @param rcd 对象属性信息
   * @param inf 对象的图形信息
   * @return {Promise} 成功：>0;失败：<=0
   */
  async updateGeom(objID: number, geom: Geometry): Promise<number> {
    let methodName = "updateGeom"
    let paramsTypeStr = [this.LONG, this.CLASS_GEOMETRY];
    let paramsStr = [objID, geom.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新对象的属性
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
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
   * 删除一个简单要素类
   * @memberOf SFeatureCls
   * @param objID 简单要素类ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async deleteByID(objID: number): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 取对象信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @param ptGeom 对象几何信息
   * @param ptRcd 对象属性信息
   * @param ptInf 对象的图形信息
   * @return {Promise}成功：>0;失败：<=0
   */
  async get(objID: number, geom: Geometry, rcd: Record, info: GeomInfo): Promise<number> {
    let methodName = "get"
    let paramsTypeStr = [this.LONG, this.CLASS_GEOMETRY, this.CLASS_RECORD, this.CLASS_GEOM_INFO];
    let paramsStr = [objID, geom.ObjId, rcd.ObjId, info.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取对象几何信息
   * @memberOf SFeatureCls
   * @param objID 对象记录ID
   * @return {Promise<Geometry>}对象几何信息
   */
  async getGeometry(objID: number): Promise<Geometry> {
    let methodName = "getGeometry"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 获取要素几何类型
   * @memberOf SFeatureCls
   * @param objID 要素ID
   * @return{Promise}几何类型
   */
  async getGeometryType(objID: number) {
    let methodName = "getGeometryType"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 取对象的属性信息
   * @memberOf SFeatureCls
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
   * 获取对象图形信息
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
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
   * @memberOf SFeatureCls
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
   * 获取对象几何类型
   * @memberOf SFeatureCls
   * @return {Promise}成功返回对象几何类型
   */
  async getGeomType() {
    let methodName = "getGeomType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取几何网络ID
   * @memberOf SFeatureCls
   * @return {Promise} 几何网络ID
   */
  async getgNetID(): Promise<number> {
    let methodName = "getgNetID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置几何网络ID
   * @memberOf SFeatureCls
   * @param newVal 几何网络ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async setgNetID(newVal: number): Promise<number> {
    let methodName = "setgNetID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置参考系ID
   * @memberOf SFeatureCls
   * @param newVal 参考系ID
   * @return {Promise} 
   */
  async setSRef(newVal: number): Promise<void> {
    let methodName = "setSRef"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取结点半径
   * @memberOf SFeatureCls
   * @return {Promise} 结点半径
   */
  async getNodRadiu(): Promise<number> {
    let methodName = "getNodRadiu"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置结点半径
   * @memberOf SFeatureCls
   * @param newVal 结点半径
   * @return {Promise} 成功：>0;失败：<=0
   */
  async setNodRadiu(newVal: number): Promise<number> {
    let methodName = "setNodRadiu"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取要素类版本
   * @memberOf SFeatureCls
   * @return {Promise} 要素类版本
   */
  async getVersion(): Promise<number> {
    let methodName = "getVersion"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取数据源信息
   * @memberOf SFeatureCls
   * @return {Promise} 数据源信息
   */
  async getDatSrc(): Promise<number> {
    let methodName = "getDatSrc"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取对应几何类型要素数目
   * @memberOf SFeatureCls
   * @param type 几何类型
   * @return {Promise}要素数目  
   */
  async getNum(type: any): Promise<number> {
    let methodName = "getNum"
    let paramsTypeStr = [this.ENUM + this.CLASS_GEOM_TYPE];
    let paramsStr = [type];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置X,Y方向符号比
   * @memberOf SFeatureCls
   * @param scale 符号比
   * @return {Promise} 成功：>0;失败：<=0
   */
  async setScaleXY(scaleX: number, scaleY: number): Promise<number> {
    let methodName = "setScaleXY"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [scaleX, scaleY];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取X方向符号比
   * @memberOf SFeatureCls
   * @return {Promise} X方向符号比
   */
  async getScaleX(): Promise<number> {
    let methodName = "getScaleX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X方向符号比
   * @memberOf SFeatureCls
   * @param scaleX 符号比
   * @return {Promise} 
   */
  async setScaleX(scaleX: number): Promise<void> {
    let methodName = "setScaleX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [scaleX];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Y方向符号比
   * @memberOf SFeatureCls
   * @return {Promise} Y方向符号比
   */
  async getScaleY(): Promise<number> {
    let methodName = "getScaleY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y方向符号比
   * @memberOf SFeatureCls
   * @param scaleY 符号比
   * @return {Promise} 
   */
  async setScaleY(sacleY: number): Promise<void> {
    let methodName = "setScaleY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [sacleY];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取实地或平面面积
   * @memberOf SFeatureCls
   * @param bRealArea 实地或平面面积
   * @return {Promise} 成功：>0;失败：<=0
   */
  async getArea(bRealArea: boolean): Promise<number> {
    let methodName = "getArea"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [bRealArea];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取实地或平面长度
   * @memberOf SFeatureCls
   * @param bRealLen 实地或平面长度
   * @return {Promise} 成功：>0;失败：<=0
   */
  async getLength(bRealLen: boolean): Promise<number> {
    let methodName = "getLength"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [bRealLen];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 计算平面(实地)面积并保存到字段(仅支持区要素)
   * @memberOf SFeatureCls
   * @param bRealArea 是否是实地面积
   * @param fldIndex 保存的字段索引号，即保存到第fldIndex个字段中
   * @return {Promise} 成功：>0，失败：<=0
   */
  async areaToField(bRealArea: boolean, fldIndex: number): Promise<number> {
    let methodName = "areaToField"
    let paramsTypeStr = [this.BOOLEAN, this.SHORT];
    let paramsStr = [bRealArea, fldIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 计算平面(实地)长度并保存到字段(支持线、区要素)
   * @memberOf SFeatureCls
   * @param bRealLen 是否计算实际长度
   * @param fldI 保存数据的属性字段索引号
   * @return {Promise} 成功：>0，失败：<=0
   */
  async lengthToField(bRealLen: boolean, fldIndex: number): Promise<number> {
    let methodName = "lengthToField"
    let paramsTypeStr = [this.BOOLEAN, this.SHORT];
    let paramsStr = [bRealLen, fldIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除一组简单要素类
   * @memberOf SFeatureCls
   * @param objIDs 一组简单要素类ID
   * @return {Promise} 成功：>0;失败：<=0
   */
  async deleteByIDs(objIDArray: number[]): Promise<number> {
    let methodName = "delete"
    let paramsTypeStr = [this.ARRAY + this.LONG];
    let paramsStr = [objIDArray];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取当前要素类所有要素集合
   * @memberOf SFeatureCls
   * @return {Promise<RecordSet>}成功返回查询到的要素集合，失败返回空
   */
  async selectAllFeature(): Promise<RecordSet> {
    let methodName = "selectAllFeature"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new RecordSet();
    obj.ObjId = ObjId;
    return obj;
  }

}
