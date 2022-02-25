/**
 * @content 剪断线参数设置
 * @author fangqi 2021-11-16
 */

import LogEventReceiver from "../geodatabase/LogEventReceiver";
import ObjectManager from "../components/ObjectManager";

/**
 * @class ClipLineOption
 * @description 剪断线参数设置
 */
export default class ClipLineOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_CLIP_LINE_OPTION;
  }

  /**
   * 构造一个新的ClipLineOption对象
   *
   * @memberof ClipLineOption
   * @returns {Promise<ClipLineOption>}
   */
  static async createInstance(): Promise<ClipLineOption> {
    let thisObj = new ClipLineOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取剪断线模式
   * @memberof ClipLineOption
   * @returns {ClipLineMode} 剪断线模式
   */
  async getClipLineMode(): Promise<any> {
    let methodName = "getClipLineMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置剪断线模式
   * @memberof ClipLineOption
   * @param {ClipLineMode} mode - 剪断线模式
   * @returns {Promise<Void>}
   */
  async setClipLineMode(mode: any): Promise<void> {
    let methodName = "setClipLineMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_CLIP_LINE_MODE];
    let paramsStr = [mode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取容差
   * @memberof ClipLineOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof ClipLineOption
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
   * @memberof ClipLineOption
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
   * @memberof ClipLineOption
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
   * @memberof ClipLineOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof ClipLineOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
