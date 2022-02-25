/**
 * @content 连接线参数设置
 * @author fangqi 2021-11-17
 */

import ObjectManager from "../components/ObjectManager";
import LogEventReceiver from "../geodatabase/LogEventReceiver";

/**
 * @class LinkLineOption
 * @description 连接线参数设置
 */
export default class LinkLineOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LINK_LINE_OPTION;
  }

  /**
   * 构造一个新的LinkLineOption对象
   *
   * @memberof LinkLineOption
   * @returns {Promise<LinkLineOption>}
   */
  static async createInstance(): Promise<LinkLineOption> {
    let thisObj = new LinkLineOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取属性字段列表
   *
   * @memberof DeleteIdenticalOption
   * @returns {Array<String>} 属性字段列表
   */
  async getFldNames(): Promise<String[]> {
    let methodName = "getFldNames"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 设置属性字段列表
   *
   * @memberof DeleteIdenticalOption
   * @param {Array<String>} fldNames - 属性字段列表
   * @returns {Promise<Void>}
   */
  async setFldNames(fldNames: String[]): Promise<void> {
    let methodName = "setFldNames"
    let paramsTypeStr = [this.ARRAY + this.STRING];
    let paramsStr = [fldNames];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否符合要素操作
   * @memberof LinkLineOption
   * @returns {boolean} 是否符合要素操作
   */
  async getMultiFeatureOption(): Promise<boolean> {
    let methodName = "getMultiFeatureOption"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否符合要素操作
   * @memberof LinkLineOption
   * @param {boolean} multiFeatureOption - 是否符合要素操作
   * @returns {Promise<void>}
   */
  async setMultiFeatureOption(multiFeatureOption: boolean): Promise<void> {
    let methodName = "setMultiFeatureOption"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [multiFeatureOption];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取容差
   * @memberof LinkLineOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof LinkLineOption
   * @param {number} tolerance - 容差
   * @returns {Promise<Void>}
   */
  async setTolerance(tolerance: number): Promise<void> {
    let methodName = "setTolerance"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [tolerance];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取过程回调信息类
   * @memberof LinkLineOption
   * @returns {LogEventReceiver} 过程回调信息类
   */
  async getLogEventReceiver(): Promise<LogEventReceiver> {
    let methodName = "getLogEventReceiver"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LogEventReceiver();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置过程回调信息类
   * @memberof LinkLineOption
   * @param {LogEventReceiver} logEventReceiver - 过程回调信息类
   * @returns {Promise<Void>}
   */
  async setLogEventReceiver(logEventReceiver: LogEventReceiver): Promise<void> {
    let methodName = "setLogEventReceiver"
    let paramsTypeStr = [this.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [logEventReceiver.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置扩展操作，预留的参数
   * @memberof {byte} extendOption - 扩展参数0
   * @param {String} strExtendOption - 扩展参数1
   * 
   * @returns {Promise<String>}
   */
  async setExtendOption(extendOption: number, strExtendOption: String): Promise<String> {
    let methodName = "setExtendOption"
    let paramsTypeStr = [this.BYTE, this.STRING];
    let paramsStr = [extendOption, strExtendOption];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 获取扩展参数
   * @memberof LinkLineOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof LinkLineOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
