/**
 * @content 接边参数设置
 * @author fangqi 2021-11-17
 */

import ObjectManager from "../components/ObjectManager";
import LogEventReceiver from "../geodatabase/LogEventReceiver";

/**
 * @class JoinEdgeOption
 * @description 接边参数设置
 */
export default class JoinEdgeOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_JOIN_EDGE_OPTION;
  }

  /**
   * 构造一个新的JoinEdgeOption对象
   *
   * @memberof JoinEdgeOption
   * @returns {Promise<JoinEdgeOption>}
   */
  static async createInstance(): Promise<JoinEdgeOption> {
    let thisObj = new JoinEdgeOption();
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
   * 获取简单要素类1的接边条件
   * @memberof JoinEdgeOption
   * @returns {String} 简单要素类1的接边条件
   */
  async getWhereClause1(): Promise<String> {
    let methodName = "getWhereClause1"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置简单要素类1的接边条件
   * @memberof JoinEdgeOption
   * @param {String} whereClause1 - 简单要素类1的接边条件
   * @returns {Promise<void>}
   */
  async setWhereClause1(whereClause1: String): Promise<void> {
    let methodName = "setWhereClause1"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [whereClause1];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取简单要素类2的接边条件
   * @memberof JoinEdgeOption
   * @returns {String} 简单要素类2的接边条件
   */
  async getWhereClause2(): Promise<String> {
    let methodName = "getWhereClause2"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置简单要素类2的接边条件
   * @memberof JoinEdgeOption
   * @param {String} whereClause2 - 简单要素类2的接边条件
   * @returns {Promise<Void>}
   */
  async setWhereClause2(whereClause2: String): Promise<void> {
    let methodName = "setWhereClause2"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [whereClause2];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取容差
   * @memberof JoinEdgeOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof JoinEdgeOption
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
   * @memberof JoinEdgeOption
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
   * @memberof JoinEdgeOption
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
   * @memberof JoinEdgeOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof JoinEdgeOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
