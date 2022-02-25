/**
 * @content 系统日志
 * @author fangqi 2021-11-18
 */

import ObjectManager from '../components/ObjectManager';
import Calendar from '../native/Calendar';

/**
 * @class LogSysInfo
 */
export default class LogSysInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LOG_SYS_INFO;
  }

  /**
   * 构造一个新的 LogSysInfo 对象
   * @memberOf LogSysInfo
   * @return {Promise<LogSysInfo>}
   */
  static async createInstance(): Promise<LogSysInfo> {
    let thisObj = new LogSysInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getUserLogID(): Promise<number> {
    let methodName = "getUserLogID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise}
   */
  async getUserName(): Promise<String> {
    let methodName = "getUserName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getEventTime(): Promise<Calendar> {
    let methodName = "getEventTime"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Calendar();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getEventName(): Promise<String> {
    let methodName = "getEventName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getStatus(): Promise<number> {
    let methodName = "getStatus"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise<XClsType>} 
   */
  async getClsType(): Promise<any> {
    let methodName = "getClsType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getClsID(): Promise<number> {
    let methodName = "getClsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogSysInfo
   * @return {Promise} 
   */
  async getObjID(): Promise<number> {
    let methodName = "getObjID"
    return await this.invoke(methodName, this.NUMBER);
  }

}
