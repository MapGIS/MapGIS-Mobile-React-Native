/**
 * @content 系统配置信息对象
 * @author fangqi 2021-11-18
 */

import ObjectManager from '../components/ObjectManager';

/**
 * @class ConfigOption
 */
export default class ConfigOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_CONFIG_OPTION;
  }

  /**
   * 构造一个新的 ConfigOption 对象
   * @memberOf ConfigOption
   * @return {Promise<ConfigOption>}
   */
  static async createInstance(): Promise<ConfigOption> {
    let thisObj = new ConfigOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 
   * @memberOf ConfigOption
   * @return {Promise}
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf ConfigOption
   * @param strName 
   * @return {Promise<void>}
   */
  async setName(strName: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ConfigOption
   * @return {Promise}
   */
  async getDescribe(): Promise<String> {
    let methodName = "getDescribe"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf ConfigOption
   * @param strDescribe 
   * @return {Promise<void>}
   */
  async setDescribe(strDescribe: String): Promise<void> {
    let methodName = "setDescribe"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strDescribe];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  // /**
  //  * 
  //  * @memberOf ConfigOption
  //  * @return {Promise}
  //  */
  // async getValue(): Promise<Object> {
  //   let methodName = "getValue"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new Object();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  /**
   * 
   * @memberOf ConfigOption
   * @param objValue 
   * @return {Promise<void>}
   */
  async setValue(objValue: any): Promise<void> {
    let methodName = "setValue"
    let paramsTypeStr = [this.CLASS_OBJECT];
    let paramsStr = [objValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
