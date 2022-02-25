/**
 * @content 用户日志
 * @author fangqi 2021-11-03
 */

import ObjectManager from '../components/ObjectManager';
import Calendar from '../native/Calendar';

/**
 * @class LogUserInfo
 */
export default class LogUserInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LOG_USER_INFO;
  }

  /**
   * 构造一个新的 LogUserInfo 对象
   * @memberOf LogUserInfo
   * @return {Promise<LogUserInfo>}
   */
  static async createInstance(): Promise<LogUserInfo> {
    let thisObj = new LogUserInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @return {Promise}
   */
  async getUserName(): Promise<String> {
    let methodName = "getUserName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @param newVal 
   * @return {Promise<void>}
   */
  async setUserName(newVal: String): Promise<void> {
    let methodName = "setUserName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @return {Promise} 
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @param newVal 
   * @return {Promise<void>}
   */
  async setID(newVal: number): Promise<void> {
    let methodName = "setID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf LogUserInfo
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
   * @memberOf LogUserInfo
   * @param newVal 
   * @return {Promise<void>}
   */
  async setEventTime(newVal: Calendar): Promise<void> {
    let methodName = "setEventTime"
    let paramsTypeStr = [this.CLASS_CALENDAR];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @return {Promise} 
   */
  async getEventCode(): Promise<number> {
    let methodName = "getEventCode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @param newVal 
   * @return {Promise<void>}
   */
  async setEventCode(newVal: number): Promise<void> {
    let methodName = "setEventCode"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @return {Promise} 
   */
  async getAppName(): Promise<String> {
    let methodName = "getAppName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @param newVal 
   * @return {Promise<void>}
   */
  async setAppName(newVal: String): Promise<void> {
    let methodName = "setAppName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @return {Promise} 
   */
  async getEventDes(): Promise<String> {
    let methodName = "getEventDes"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf LogUserInfo
   * @param newVal 
   * @return {Promise<void>}
   */
  async setEventDes(newVal: String): Promise<void> {
    let methodName = "setEventDes"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
