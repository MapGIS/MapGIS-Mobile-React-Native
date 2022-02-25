/**
 * @content 空间叠加/裁剪的参数类
 * @author fangqi 2021-11-16
 */
import ObjectManager from "../components/ObjectManager";
import LogEventReceiver from "../geodatabase/LogEventReceiver";

/**
 * @class OverlayOption
 * @description 空间叠加/裁剪的参数类
 */
export default class OverlayOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_OVERLAY_OPTION;
  }

  /**
   * 构造一个新的OverlayOption对象
   *
   * @memberof OverlayOption
   * @returns {Promise<OverlayOption>}
   */
  static async createInstance(): Promise<OverlayOption> {
    let thisObj = new OverlayOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取叠加类型
   * @memberof OverlayOption
   * @returns {BufferCapType} 叠加类型
   */
  async getOverlayType(): Promise<any> {
    let methodName = "getOverlayType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置叠加类型
   * @memberof OverlayOption
   * @param {OverlayOptionOverlayType} type - 叠加类型
   * @returns {Promise<Void>}
   */
  async setOverlayType(type: any): Promise<void> {
    let methodName = "setOverlayType"
    let paramsTypeStr = [this.ENUM + this.CLASS_OVERLAY_OPTION_OVERLAY_TYPE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取属性操作类型
   * @memberof OverlayOption
   * @returns {OverlayAttOptType} 属性操作类型
   */
  async getAttOptType(): Promise<any> {
    let methodName = "getAttOptType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置属性操作类型
   * @memberof OverlayOption
   * @param {OverlayAttOptType} type - 属性操作类型
   * @returns {Promise<Void>}
   */
  async setAttOptType(type: any): Promise<void> {
    let methodName = "setAttOptType"
    let paramsTypeStr = [this.ENUM + this.CLASS_OVERLAY_ATT_OPT_TYPE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取公有部分图形操作类型
   * @memberof OverlayOption
   * @returns {OverlayInfoOptType} 公有部分图形操作类型值
   */
  async getInfoOptType(): Promise<any> {
    let methodName = "getInfoOptType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置公有部分图形操作类型
   * @memberof OverlayOption
   * @param {OverlayInfoOptType} type - 公有部分图形操作类型
   * @returns {Promise<Void>}
   */
  async setInfoOptType(type: any): Promise<void> {
    let methodName = "setInfoOptType"
    let paramsTypeStr = [this.ENUM + this.CLASS_OVERLAY_ATT_OPT_TYPE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否处理符合要素
   * @memberof OverlayOption
   * @returns {boolean} 是否处理符合要素
   */
  async getMultiFeatureOption(): Promise<boolean> {
    let methodName = "getMultiFeatureOption"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否处理符合要素
   * @memberof OverlayOption
   * @param {boolean} multiFeatureOption 是否处理符合要素
   * @returns {Promise<Void>}
   */
  async setMultiFeatureOption(multiFeatureOption: boolean): Promise<void> {
    let methodName = "setMultiFeatureOption"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [multiFeatureOption];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取容差
   * @memberof OverlayOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof OverlayOption
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
   * @memberof OverlayOption
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
   * @memberof OverlayOption
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
   * @memberof OverlayOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof OverlayOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
