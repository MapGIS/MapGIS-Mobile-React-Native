/**
 * @content 数据库对象功能组件
 * @author fangqi 2021-09-18
 */
// import { NativeModules } from 'react-native';
// let DB = NativeModules.JSDataBase;
// import FClsInfo from './FClsInfo';
// import AnnClsInfo from './AnnClsInfo';
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import SRefData from '../geoobject/SRefData';
import type Server from './Server';
import IBasCls from './IBasCls';
import IXClsInfo from './IXClsInfo';
import ConfigOption from './ConfigOption';
import DBInfo from './DBInfo';
import LogMng from './LogMng';
import Precision from './Precision';

/**
 * @class DataBase
 * @description 数据库对象
 */
export default class DataBase extends ObjectManager {

  server: Server | undefined;

  getClassName(): String {
    return this.CLASS_DATA_BASE;
  }

  /**
   * 构造一个新的 DataBase 对象。
   * @memberOf DataBase
   * @returns {Promise<DataBase>}数据库对象
   */
  static async createInstance(): Promise<DataBase> {
    let thisObj = new DataBase();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 取当前打开的GDB的ID
   * @memberOf DataBase
   * @return {Promise} GDB的ID
   */
  async getdbID(): Promise<number> {
    let methodName = "getdbID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取数据库名称
   * @memberOf DataBase
   * @return {Promise}数据库名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取指定数据集下所有类ID
   * @memberOf DataBase
   * @param type - 类类型
   * @param dsID - 数据集ID
   * @return {Promise<Array<number>>} 类ID集合
   */
  async getXclses(type: any, dsID: number): Promise<number[]> {
    let methodName = "getXclses"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.INT];
    let paramsStr = [type, dsID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 获取指定数据集下所有类ID
   * @memberOf DataBase
   * @param type - 类类型
   * @param clsSubType - 类类型
   * @param dsID - 数据集ID
   * @param enumType - XClsEnumType
   * @param isSortByName - 是否按名称排序
   * @return {Promise<Array<number>>} 类ID集合
   */
  async getXclsesByParam4(type: any, clsSubType: number, dsID: number, enumType: any, isSortByName: boolean): Promise<number[]> {
    let methodName = "getXclses"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.SHORT, this.INT, this.ENUM + this.CLASS_XCLS_ENUM_TYPE, this.BOOLEAN];
    let paramsStr = [type, clsSubType, dsID, enumType, isSortByName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 获取类名称
   * @memberOf DataBase
   * @param type 类类型
   * @param xclsID 类ID
   * @return {Promise} 类名称
   */
  async getXclsName(type: any, xclsID: number): Promise<String> {
    let methodName = "getXclsName"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.INT];
    let paramsStr = [type, xclsID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 获取属性：类信息
   * @memberOf DataBase
   * @param type 类类型
   * @param xclsID 类ID
   * @return {Promise<IXClsInfo>} 类信息
   */
  async getXclsInfo(type: any, xclsID: number): Promise<IXClsInfo> {
    let methodName = "getXclsInfo"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.INT];
    let paramsStr = [type, xclsID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ObjId);
    let obj = new IXClsInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取指定类类型的类的数目
   * @memberOf DataBase
   * @param type 类类型
   * @return {Promise} 类的数目
   */
  async getXclsNum(type: any, dsID: number): Promise<number> {
    let methodName = "getXclsNum"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.INT];
    let paramsStr = [type, dsID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取连接的服务器
   * @memberOf GDBSysInfo
   * @return {Promise<Server>}
   */
  async getServer(): Promise<Server | undefined> {
    let methodName = "getServer"
    let ObjId = await this.invoke(methodName, this.OBJID);
    if (this.server !== undefined) {
      this.server.ObjId = ObjId;
    }
    return this.server;
  }

  /**
   * 返回数据库的打开标志
   * @memberOf DataBase
   * @return {Promise} 是否打开
   */
  async hasOpened(): Promise<boolean> {
    let methodName = "hasOpened"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 关闭数据库
   * @memberOf DataBase
   * @return {Promise} 成功：>0;失败：<=0
   */
  async close(): Promise<number> {
    let methodName = "close"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 压缩GDB
   * @memberOf DataBase
   * @return {Promise} 成功：>0;失败：<=0
   */
  async compress(): Promise<number> {
    let methodName = "compress"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 创建要素数据集
   * @memberOf DataBase
   * @param dsName 要素数据集名称
   * @param srID 空间参考系ID
   * @return {Promise.<int>} 成功：要素数据集ID，失败：0
   */
  async createFds(dsName: String, srID: number): Promise<number> {
    let methodName = "createFds"
    let paramsTypeStr = [this.STRING, this.INT];
    let paramsStr = [dsName, srID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新要素数据集名称
   * @memberOf DataBase
   * @param dsID 要素数据集ID
   * @param name 要素数据集名称
   * @return {Promise.<int>} 成功：1，失败：0
   */
  async updateDsName(dsID: number, dsName: String): Promise<number> {
    let methodName = "updateDsName"
    let paramsTypeStr = [this.INT, this.STRING];
    let paramsStr = [dsID, dsName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新空间参考系
   * @memberOf DataBase
   * @param dsID 要素数据集ID
   * @param drID 空间参考系
   * @return {Promise.<int>} 成功：1，失败：0
   */
  async updateDsSrID(dsID: number, drID: number): Promise<number> {
    let methodName = "updateDsSrID"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [dsID, drID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除要素数据集
   * @memberOf DataBase
   * @param dsID 要素数据集
   * @return {Promise.<int>} 成功：1，失败：0
   */
  async removeFds(dsID: number): Promise<number> {
    let methodName = "removeFds"
    let paramsTypeStr = [this.INT];
    let paramsStr = [dsID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取数据集的空间参考系
   * @memberOf DataBase
   * @param dsID 要素数据集
   * @return {Promise.<int>} 成功：1，失败：0
   */
  async getDsSrID(dsID: number): Promise<number> {
    let methodName = "getDsSrID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [dsID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 查看指定类类型和类名称的类在数据库中是否存在,如果存在,返回其ID
   * @memberOf DataBase
   * @param {XClsType} type 类类型
   * @param {String} name 类名称
   * @return {Promise} 成功：类ID;失败：<=0
   */
  async xClsIsExist(type: any, name: String): Promise<number> {
    let methodName = "xClsIsExist"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.STRING];
    let paramsStr = [type, name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取对象,只是根据类型创建对应的空对象
   * @memberOf DataBase
   * @param {XClsType} type - 类类型
   * @return {Promise} 类对象
   */
  async getXClass(type: any): Promise<IBasCls> {
    let methodName = "getXClass"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE];
    let paramsStr = [type];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new IBasCls();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取URL
   * @memberOf DataBase
   * @return {Promise} 地理数据库URL
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 通过url打开
   * @memberOf DataBase
   * @param url 地理数据库URL
   * @return {Promise.<int>} 成功 DataBase：失败 null
   */
  static async openByURL(url: String): Promise<DataBase> {
    let obj = new DataBase();
    let methodName = "openByURL"
    let paramsTypeStr = [obj.STRING];
    let paramsStr = [url];
    obj.ObjId = await obj.invokeByParam(methodName, paramsTypeStr, paramsStr, obj.NUMBER);
    return obj;
  }

  /**
   * 通过url打开
   * @memberOf DataBase
   * @param url 地理数据库URL
   * @return {Promise.<int>} 成功 DataBase：失败 null
   */
  static async openTempDB(): Promise<DataBase> {
    let obj = new DataBase();
    let methodName = "openTempDB"
    obj.ObjId = await obj.invoke(methodName, obj.NUMBER);
    return obj;
  }

  /**
   * 删除参考系
   * @memberOf DataBase
   * @param refID 参考系ID
   * @return {Promise.<int>} 成功:1,失败：0
   */
  async delSRef(refID: number): Promise<number> {
    let methodName = "delSRef"
    let paramsTypeStr = [this.INT];
    let paramsStr = [refID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新参考系信息
   * @memberOf DataBase
   * @param refID 参考系ID
   * @param obj 参考系信息
   * @return {Promise.<int>} 成功:1,失败：0
   */
  async updateSRef(refID: number, obj: SRefData): Promise<number> {
    let methodName = "updateSRef"
    let paramsTypeStr = [this.INT, this.CLASS_SREF_DATA];
    let paramsStr = [refID, obj.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 添加参考系
   * @memberOf DataBase
   * @param obj 参考系信息
   * @return {Promise.<int>} 成功:1,失败：0
   */
  async addSRef(obj: SRefData): Promise<number> {
    let methodName = "addSRef"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [obj.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取参考系信息
   * @memberOf DataBase
   * @param refID 参考系ID
   * @return {Promise.<int>} 参考系信息
   */
  async getSRef(refID: number): Promise<SRefData> {
    let methodName = "getSRef"
    let paramsTypeStr = [this.INT];
    let paramsStr = [refID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取参考系ID
   * @memberOf DataBase
   * @param name 参考系名称
   * @return {Promise.<int>} 参考系ID
   */
  async getSRefIDByName(name: String): Promise<number> {
    let methodName = "getSRefIDByName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取参考系数目
   * @memberOf DataBase
   * @param type 参考系类型
   * @return {Promise.<int>} 参考系数目
   */
  async getSRefNum(type: number): Promise<number> {
    let methodName = "getSRefNum"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [type];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  // /**
  //  * 获取类的元数据
  //  * @memberOf DataBase
  //  * @param xclsID - 类ID
  //  * @return {Promise<int>} 类的元数据
  //  */
  // async getXClsMetadata(xclsID: number): Promise<GeoMetadata> {
  //   let methodName = "getXClsMetadata"
  //   let paramsTypeStr = [this.INT];
  //   let paramsStr = [xclsID];
  //   let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
  //   let obj = new GeoMetadata();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  // /**
  //  * 设置类的元数据
  //  * @memberOf DataBase
  //  * @param xclsID - 类ID
  //  * @param metadata - 类的元数据
  //  * @return {Promise<boolean>} 是否成功
  //  */
  // async setXClsMetadata(xclsID: number, metadata: GeoMetadata): Promise<boolean> {
  //   let methodName = "setXClsMetadata"
  //   let paramsTypeStr = [this.INT, this.CLASS_GEOMETADATA];
  //   let paramsStr = [xclsID, metadata.ObjId];
  //   return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  // }

  // /**
  //  * 同步要素数据集元数据
  //  * @memberOf DataBase
  //  * @param dsID - 要素数据集ID
  //  * @return {Promise<boolean>} 是否成功
  //  */
  // async fdsSyncMetadata(dsID: number): Promise<boolean> {
  //   let methodName = "fdsSyncMetadata"
  //   let paramsTypeStr = [this.INT];
  //   let paramsStr = [dsID];
  //   return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  // }

  /**
   * 取所有参考系ID列表
   * @memberOf DataBase
   * @param {SRefType} type - 参考系类型
   * @return {Promise.<int[]>} 所有参考系ID列表
   */
  async getSpatialRefs(type: any): Promise<number[]> {
    let methodName = "getSpatialRefs"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_TYPE];
    let paramsStr = [type];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 取所有参考系ID列表
   * @memberOf DataBase
   * @param {SRefType} type - 参考系类型
   * @return {Promise.<int[]>} 所有参考系ID列表
   */
  async getSpatialRefsNew(type: number): Promise<number[]> {
    let methodName = "getSpatialRefsNew"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [type];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 批量取类信息(支持简单要素类、注记类、对象类、栅格数据集)
   * @memberOf DataBase
   * @param {XClsType} type - 类类型
   * @param dsID - 要素数据集ID
   * @param {XClsEnumType} enumType 
   * @param isSortByName - 是否按类名称排序
   * @return {Promise<Array<IXClsInfo>>} 成功返回类信息对象列表()
   */
  async getXclsInfoList(type: any, dsID: number, enumType: any, isSortByName: boolean): Promise<Array<IXClsInfo>> {
    let methodName = "getXclsInfoList"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.INT, this.ENUM + this.CLASS_XCLS_ENUM_TYPE, this.BOOLEAN];
    let paramsStr = [type, dsID, enumType, isSortByName];
    let ObjIdList = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new IXClsInfo();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取地理数据库的配置项
   * @memberOf DataBase
   * @return {Promise<Array<ConfigOption>>} 所有配置项列表
   */
  async getOptionItem(): Promise<Array<ConfigOption>> {
    let methodName = "getOptionItem"
    let ObjIdList = await this.invoke(methodName, this.ARRAYLIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new ConfigOption();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 设置地理数据库的配置项
   * @memberof DataBase
   * @param {Array} options 地理数据库的配置项
   * @returns {boolean}
   */
  async setOptionItem(options: Array<ConfigOption>): Promise<void> {
    let optionsID = getArrayObjIds(options);

    let methodName = "setOptionItem"
    let paramsTypeStr = [this.ARRAY + this.CLASS_CONFIG_OPTION];
    let paramsStr = [optionsID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取数据库数据文件信息，只支持本地数据源。 HDF文件类型
   * @memberOf DataBase
   * @param {HDFType} hdfType - 类类型
   * @return {Promise<Array<DBInfo>>} 成功返回DBInfo列表
   */
  async getDBInfo(hdfType: any): Promise<Array<DBInfo>> {
    let methodName = "getDBInfo"
    let paramsTypeStr = [this.ENUM + this.CLASS_HDF_TYPE];
    let paramsStr = [hdfType];
    let ObjIdList = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAYLIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new DBInfo();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 取日志管理对象
   * @memberof DataBase
   * @returns {Promise<LogMng>}
   */
  async getLogMng(): Promise<LogMng> {
    let methodName = "getLogMng"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LogMng();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取默认的数据精度
   * @memberof SketchEditor
   * @param {int} srID - 参照系ID
   * @returns {Promise<Precision>} 数据精度
   */
  async getDefaultPrecision(srID: number): Promise<Precision> {
    let methodName = "getDefaultPrecision"
    let paramsTypeStr = [this.INT];
    let paramsStr = [srID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Precision();
    obj.ObjId = ObjId;
    return obj;
  }

}
