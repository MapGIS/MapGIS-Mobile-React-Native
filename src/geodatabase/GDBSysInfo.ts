/**
 * @content 地理数据库系统信息
 * @author fangqi 2021-11-18
 */

import ObjectManager from '../components/ObjectManager';
import Calendar from '../native/Calendar';
import UUID from '../native/UUID';

/**
 * @class GDBSysInfo
 */
export default class GDBSysInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GDB_SYS_INFO;
  }

  /**
   * 构造一个新的 GDBSysInfo 对象
   * @memberOf GDBSysInfo
   * @return {Promise<GDBSysInfo>}
   */
  static async createInstance(): Promise<GDBSysInfo> {
    let thisObj = new GDBSysInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getSysID(): Promise<number> {
    let methodName = "getSysID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getStatus(): Promise<number> {
    let methodName = "getStatus"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getStatus2(): Promise<number> {
    let methodName = "getStatus2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getCategory(): Promise<number> {
    let methodName = "getCategory"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise}
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise}
   */
  async getOwner(): Promise<String> {
    let methodName = "getOwner"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise}
   */
  async getDataFilePath(): Promise<String> {
    let methodName = "getDataFilePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise}
   */
  async getLogFilePath(): Promise<String> {
    let methodName = "getLogFilePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise<short>}
   */
  async getSysVersion(): Promise<number> {
    let methodName = "getSysVersion"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise<short>}
   */
  async getMode(): Promise<number> {
    let methodName = "getMode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise}
   */
  async getIsTempDB(): Promise<boolean> {
    let methodName = "getIsTempDB"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise}
   */
  async getIsSingleProc(): Promise<boolean> {
    let methodName = "getIsSingleProc"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 
   * @memberOf GDBSysInfo
   * @return {Promise<UUID>}
   */
  async getGlobalID(): Promise<UUID> {
    let methodName = "getGlobalID"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new UUID();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取创建日期
   * 
   * @memberOf GDBSysInfo
   * @return {Promise} 创建日期
   */
  async getCreateTime(): Promise<Calendar> {
    let methodName = "getCreateTime"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Calendar();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取回退时间
   * 
   * @memberOf GDBSysInfo
   * @return {Promise} 回退时间
   */
  async getBackupTime(): Promise<Calendar> {
    let methodName = "getBackupTime"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Calendar();
    obj.ObjId = ObjId;
    return obj;
  }

}
