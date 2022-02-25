/**
 * @content 日志管理对象
 * @author fangqi 2021-11-18
 */
import ObjectManager from "../components/ObjectManager";
import type DataBase from "./DataBase";
import LogOnInfo from "./LogOnInfo";
import LogSysInfo from "./LogSysInfo";
import LogUserInfo from "./LogUserInfo";


/**
 * @class LogMng
 * @description 日志管理对象
 */
export default class LogMng extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LOG_MNG;
  }

  /**
   * 构造一个新的LogMng对象
   *
   * @memberof LogMng
   * @returns {Promise<LogMng>}
   */
  static async createInstance(dataBase: DataBase): Promise<LogMng> {
    let thisObj = new LogMng();
    let initParamsType = [thisObj.CLASS_DATA_BASE];
    let initParamsStr = [dataBase.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   *
   * @memberof LogMng
   * @returns 
   */
  async getLogSwitch(): Promise<boolean> {
    let methodName = "getLogSwitch"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   *
   * @memberof LogMng
   * @param newVal
   * @returns {Promise<Void>}
   */
  async setLogSwitch(newVal: boolean): Promise<void> {
    let methodName = "setLogSwitch"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getLogOnCount(): Promise<number> {
    let methodName = "getLogOnCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getLogSysCount(): Promise<number> {
    let methodName = "getLogSysCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @returns {int} 
   */
  async getLogUserCount(): Promise<number> {
    let methodName = "getLogUserCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * @memberof LogMng
   * @param newVal
   * @returns {Promise<boolean>}
   */
  async appendUserLog(info: LogUserInfo): Promise<boolean> {
    let methodName = "appendUserLog"
    let paramsTypeStr = [this.CLASS_LOG_USER_INFO];
    let paramsStr = [info.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   *
   * @memberof LogMng
   * @param newVal
   * @returns {Promise<number[]>}
   */
  async getSysLogOnUserLogID(userlogid: number): Promise<number[]> {
    let methodName = "getSysLogOnUserLogID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [userlogid];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 
   * @memberOf LogMng
   * @param {int} id 
   * @returns {Promise<LogOnInfo>}
   */
  async getLogOnInfo(id: number): Promise<LogOnInfo> {
    let methodName = "getLogOnInfo"
    let paramsTypeStr = [this.INT];
    let paramsStr = [id];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new LogOnInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 
   * @memberOf LogMng
   * @param {int} id 
   * @returns {Promise<LogSysInfo>}
   */
  async getLogSysInfo(id: number): Promise<LogSysInfo> {
    let methodName = "getLogSysInfo"
    let paramsTypeStr = [this.INT];
    let paramsStr = [id];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new LogSysInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 
   * @memberOf LogMng
   * @param {int} id 
   * @returns {Promise<LogUserInfo>}
   */
  async getLogUserInfo(id: number): Promise<LogUserInfo> {
    let methodName = "getLogUserInfo"
    let paramsTypeStr = [this.INT];
    let paramsStr = [id];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new LogUserInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *
   * @memberof LogMng
   * @param {LogType} type 
   * @param {int} id 
   * @returns {Promise<boolean>}
   */
  async deleteById(type: any, id: number): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.ENUM + this.CLASS_LOG_TYPE, this.INT];
    let paramsStr = [type, id];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   *
   * @memberof LogMng
   * @param {LogType} type 
   * @param {String} condition 
   * @returns {Promise<boolean>}
   */
  async delete(type: any, condition: String): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.ENUM + this.CLASS_LOG_TYPE, this.STRING];
    let paramsStr = [type, condition];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   *
   * @memberof LogMng
   * @param {LogType} type 
   * @param {int} id 
   * @returns {Promise<boolean>}
   */
  async deleteByIds(type: any, logids: number[]): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.ENUM + this.CLASS_LOG_TYPE, this.ARRAY + this.INT];
    let paramsStr = [type, logids];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   *
   * @memberof LogMng
   * @param {LogType} type 
   * @param {String} condition 
   * @returns {Promise<int[]>}
   */
  async getLogIDs(type: any, condition: String): Promise<number[]> {
    let methodName = "getLogIDs"
    let paramsTypeStr = [this.ENUM + this.CLASS_LOG_TYPE, this.STRING];
    let paramsStr = [type, condition];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

}
