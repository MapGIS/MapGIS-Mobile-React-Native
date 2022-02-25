/**
 * @content 多重缓冲参数设置
 * @author fangqi 2021-11-17
 */
import ObjectManager from "../components/ObjectManager";
import LogEventReceiver from "../geodatabase/LogEventReceiver";

/**
 * @class MultipleRingBufferOption
 * @description 多重缓冲参数设置
 */
export default class MultipleRingBufferOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MULTIPLE_RING_BUFFER_OPTION;
  }

  /**
   * 构造一个新的MultipleRingBufferOption对象
   *
   * @memberof MultipleRingBufferOption
   * @returns {Promise<MultipleRingBufferOption>}
   */
  static async createInstance(): Promise<MultipleRingBufferOption> {
    let thisObj = new MultipleRingBufferOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取线端类型
   * @memberof MultipleRingBufferOption
   * @returns {BufferCapType} 线端类型 
   */
  async getLineEndType(): Promise<any> {
    let methodName = "getLineEndType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置线端类型
   * @memberof MultipleRingBufferOption
   * @param {BufferCapType} type - 线端类型
   * @returns {Promise<void>}
   */
  async setLineEndType(type: any): Promise<void> {
    let methodName = "setLineEndType"
    let paramsTypeStr = [this.ENUM + this.CLASS_BUFFER_CAP_TYPE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否合并区
   * @memberof MultipleRingBufferOption
   * @returns {boolean} 是否合并区
   */
  async getIsDissolve(): Promise<boolean> {
    let methodName = "getIsDissolve"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否合并区
   * @memberof MultipleRingBufferOption
   * @param {boolean} isDissolve - 是否合并区
   * @returns {Promise<Void>}
   */
  async setIsDissolve(isDissolve: boolean): Promise<void> {
    let methodName = "setIsDissolve"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isDissolve];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取缓冲距离列表
   *
   * @memberof DeleteIdenticalOption
   * @returns {Array<number>} 缓冲距离列表
   */
  async getDistances(): Promise<number[]> {
    let methodName = "getDistances"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 设置缓冲距离列表
   *
   * @memberof DeleteIdenticalOption
   * @param {Array<String>} distances - 缓冲距离列表
   * @returns {Promise<Void>}
   */
  async setDistances(distances: number[]): Promise<void> {
    let methodName = "setDistances"
    let paramsTypeStr = [this.ARRAY + this.DOUBLE];
    let paramsStr = [distances];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否动态投影
   * @memberof MultipleRingBufferOption
   * @returns {boolean} 是否动态投影
   */
  async getIsDynPrj(): Promise<boolean> {
    let methodName = "getIsDynPrj"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否动态投影
   * @memberof MultipleRingBufferOption
   * @param {boolean} isDynPr - 是否动态投影
   * @returns {Promise<Void>}
   */
  async setIsDynPrj(isDynPr: boolean): Promise<void> {
    let methodName = "setIsDynPrj"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isDynPr];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否复合要素操作
   * @memberof MultipleRingBufferOption
   * @returns {boolean} 是否复合要素操作
   */
  async getMultiFeatureOption(): Promise<boolean> {
    let methodName = "getMultiFeatureOption"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否复合要素操作
   * @memberof MultipleRingBufferOption
   * @param {boolean} multiFeatureOption 是否复合要素操作
   * @returns {Promise<Void>}
   */
  async setMultiFeatureOption(multiFeatureOption: boolean): Promise<void> {
    let methodName = "setMultiFeatureOption"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [multiFeatureOption];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取结果颜色值
   * @memberof MultipleRingBufferOption
   * @returns {number} 颜色值
   */
  async getClr(): Promise<number> {
    let methodName = "getClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置结果颜色值
   * @memberof MultipleRingBufferOption
   * @param {number} clr - 颜色值
   * @returns {Promise<Void>}
   */
  async setClr(clr: number): Promise<void> {
    let methodName = "setClr"
    let paramsTypeStr = [this.INT];
    let paramsStr = [clr];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取容差
   * @memberof MultipleRingBufferOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof MultipleRingBufferOption
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
   * @memberof MultipleRingBufferOption
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
   * @memberof MultipleRingBufferOption
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
   * @memberof MultipleRingBufferOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof MultipleRingBufferOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
