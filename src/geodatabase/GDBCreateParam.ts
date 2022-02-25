/**
 * @content 地理数据库创建信息.
 * @author fangqi 2021-11-03 
 */
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import DBFileInfo from './DBFileInfo';

/**
 * @class GDBCreateParam
 */
export default class GDBCreateParam extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GDB_CREATE_PARAM;
  }

  /**
   * 构造一个新的 GDBCreateParam 对象。
   * @memberOf GDBCreateParam
   * @returns {Promise.<GDBCreateParam>}
   */
  static async createInstance(): Promise<GDBCreateParam> {
    let thisObj = new GDBCreateParam();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取地理数据库名称.
   * @memberOf GDBCreateParam
   * @returns {Promise<String>} 地理地理数据库名称.
   */
  async getGDBName(): Promise<String> {
    let methodName = "getGDBName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地理数据库名称.
   * @memberOf GDBCreateParam
   * @param name - 地理数据库名称.
   * @returns {Promise<void>} 
   */
  async setGDBName(name: String): Promise<void> {
    let methodName = "setGDBName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地理数据库用户名称.
   * @memberOf GDBCreateParam
   * @returns {Promise<String>} 地理数据库用户名称.
   */
  async getGDBOwner(): Promise<String> {
    let methodName = "getGDBOwner"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地理数据库用户名称.
   * @memberOf GDBCreateParam
   * @param owner - 地理数据库用户名称.
   * @returns {Promise<void>} 
   */
  async setGDBOwner(owner: String): Promise<void> {
    let methodName = "setGDBOwner"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [owner];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取数据库用户口令.
   * @memberOf GDBCreateParam
   * @returns {Promise<String>} 数据库用户口令.
   */
  async getOwnerPsw(): Promise<String> {
    let methodName = "getOwnerPsw"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置数据库用户口令.
   * @memberOf GDBCreateParam
   * @param psw - 数据库用户口令.
   * @returns {Promise<void>} 
   */
  async setGOwnerPsw(psw: String): Promise<void> {
    let methodName = "setGOwnerPsw"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [psw];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取数据库数据文件信息列表.
   * @memberOf GDBCreateParam
   * @returns {Promise<void>} 
   */
  async getDataFileInfos(): Promise<Array<DBFileInfo>> {
    let methodName = "getDataFileInfos"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new DBFileInfo();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取数据库数据文件信息列表
   * @memberOf GDBCreateParam
   * @returns {Promise<void>} 
   */
  async setDataFileInfos(infos: Array<DBFileInfo>): Promise<void> {
    let arrayID = getArrayObjIds(infos);

    let methodName = "setDataFileInfos"
    let paramsTypeStr = [this.LIST + this.CLASS_DB_FILE_INFO];
    let paramsStr = [arrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取数据库日志文件信息列表
   * @memberOf GDBCreateParam
   * @returns {Promise<Array<DBFileInfo>>} 
   */
  async getLogFileInfos(): Promise<Array<DBFileInfo>> {
    let methodName = "getLogFileInfos"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new DBFileInfo();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取数据库日志文件信息列表
   * @memberOf GDBCreateParam
   * @returns {Promise<void>} 
   */
  async setLogFileInfos(infos: Array<DBFileInfo>): Promise<void> {
    let arrayID = getArrayObjIds(infos);

    let methodName = "setLogFileInfos"
    let paramsTypeStr = [this.LIST + this.CLASS_DB_FILE_INFO];
    let paramsStr = [arrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取索引表空间的扩展信息.目前只有Oracle数据库能指定该参数
   * @memberOf GDBCreateParam
   * @returns {Promise<DBFileInfo>} 
   */
  async getIndexFileInfo(): Promise<DBFileInfo> {
    let methodName = "getIndexFileInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new DBFileInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置索引表空间的扩展信息.目前只有Oracle数据库能指定该参数
   * @memberOf GDBCreateParam
   * @param info 索引表空间的扩展信息
   * @returns {Promise<void>} 
   */
  async setIndexFileInfo(info: DBFileInfo): Promise<void> {
    let methodName = "setIndexFileInfo"
    let paramsTypeStr = [this.CLASS_DB_FILE_INFO];
    let paramsStr = [info.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
