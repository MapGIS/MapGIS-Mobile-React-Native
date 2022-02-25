/**
 * @content 消除区参数设置
 * @author fangqi 2021-11-16
 */

import ObjectManager from "../components/ObjectManager";
import LogEventReceiver from "../geodatabase/LogEventReceiver";

/**
 * @class EliminateRegOption
 * @description 消除区参数设置
 */
export default class EliminateRegOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ELIMINATE_REG_OPTION;
  }

  /**
   * 构造一个新的EliminateRegOption对象
   *
   * @memberof EliminateRegOption
   * @returns {Promise<EliminateRegOption>}
   */
  static async createInstance(): Promise<EliminateRegOption> {
    let thisObj = new EliminateRegOption();
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
   * 获取最小消除面积
   * @memberof EliminateRegOption
   * @returns {number} 最小消除面积
   */
  async getMinRegArea(): Promise<number> {
    let methodName = "getMinRegArea"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小消除面积
   * @memberof EliminateRegOption
   * @param {number} minRegArea - 最小消除面积
   * @returns {Promise<Void>}
   */
  async setMinRegArea(minRegArea: number): Promise<void> {
    let methodName = "setMinRegArea"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minRegArea];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取消除区模式
   * @memberof EliminateRegOption
   * @returns {EliminateMode} 消除区模式
   */
  async getEliminateRegMode(): Promise<any> {
    let methodName = "getEliminateRegMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置消除区模式
   * @memberof EliminateRegOption
   * @param {EliminateMode} eliminateRegMode - 消除区模式
   * @returns {Promise<Void>}
   */
  async setEliminateRegMode(eliminateRegMode: boolean): Promise<void> {
    let methodName = "setEliminateRegMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_ELIMINATE_MODE];
    let paramsStr = [eliminateRegMode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取容差
   * @memberof EliminateRegOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof EliminateRegOption
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
   * @memberof EliminateRegOption
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
   * @memberof EliminateRegOption
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
   * @memberof EliminateRegOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof EliminateRegOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
