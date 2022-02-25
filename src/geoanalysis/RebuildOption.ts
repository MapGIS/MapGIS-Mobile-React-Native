/**
 * @content  区拓扑参数设置
 * @author fangqi 2021-11-17
 */
import ObjectManager from "../components/ObjectManager";
import LogEventReceiver from "../geodatabase/LogEventReceiver";

/**
 * @class RebuildOption
 * @description  区拓扑参数设置
 */
export default class RebuildOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_REBUILD_OPTION;
  }

  /**
   * 构造一个新的RebuildOption对象
   *
   * @memberof RebuildOption
   * @returns {Promise<RebuildOption>}
   */
  static async createInstance(): Promise<RebuildOption> {
    let thisObj = new RebuildOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取容差
   * @memberof RebuildOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof RebuildOption
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
   * @memberof RebuildOption
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
   * @memberof RebuildOption
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
   * @memberof RebuildOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof RebuildOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
