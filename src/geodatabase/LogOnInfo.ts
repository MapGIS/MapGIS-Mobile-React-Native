/**
 * @content 登录日志
 * @author fangqi 2021-11-18
 */

import ObjectManager from '../components/ObjectManager';
import Calendar from '../native/Calendar';

/**
 * @class LogOnInfo
 */
export default class LogOnInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LOG_ON_INFO;
  }

  /**
   * 构造一个新的 LogOnInfo 对象
   * @memberOf LogOnInfo
   * @return {Promise<LogOnInfo>}
   */
  static async createInstance(): Promise<LogOnInfo> {
    let thisObj = new LogOnInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 
   * @memberOf LogOnInfo
   * @return {Promise} 
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf LogOnInfo
   * @return {Promise}
   */
  async getUserName(): Promise<String> {
    let methodName = "getUserName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取登录时间
   * @memberOf LogOnInfo
   * @return {Promise} 登录日期
   */
  async getLogOnTime(): Promise<Calendar> {
    let methodName = "getLogOnTime"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Calendar();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取登出时间
   * @memberOf LogOnInfo
   * @return {Promise} 登出时间
   */
  async getLogOffTime(): Promise<Calendar> {
    let methodName = "getLogOffTime"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Calendar();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 
   * @memberOf LogOnInfo
   * @return {Promise} 
   */
  async getIP(): Promise<String> {
    let methodName = "getIP"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf LogOnInfo
   * @return {Promise} 
   */
  async getAppName(): Promise<String> {
    let methodName = "getAppName"
    return await this.invoke(methodName, this.STRING);
  }

}
