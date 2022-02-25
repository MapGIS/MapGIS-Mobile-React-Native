/**
 * @content 空间缓冲参数设置
 * @author fangqi 2021-11-15
 */
import LogEventReceiver from "../geodatabase/LogEventReceiver";
import ObjectManager from "../components/ObjectManager";

/**
 * @class BufferOption
 * @description 空间缓冲参数设置
 */
export default class BufferOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_BUFFER_OPTION;
  }

  /**
   * 构造一个新的BufferOption对象
   *
   * @memberof BufferOption
   * @returns {Promise<BufferOption>}
   */
  static async createInstance(): Promise<BufferOption> {
    let thisObj = new BufferOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取线端类型
   * @memberof BufferOption
   * @returns {BufferCapType} 线端类型 
   */
  async getLineEndType(): Promise<any> {
    let methodName = "getLineEndType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置线端类型
   * @memberof BufferOption
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
   * @memberof BufferOption
   * @returns {boolean} 是否合并区
   */
  async getIsDissolve(): Promise<boolean> {
    let methodName = "getIsDissolve"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否合并区
   * @memberof BufferOption
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
   * 获取是否动态投影
   * @memberof BufferOption
   * @returns {boolean} 是否动态投影
   */
  async getIsDynPrj(): Promise<boolean> {
    let methodName = "getIsDynPrj"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否动态投影
   * @memberof BufferOption
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
   * 获取动态投影半径
   * @memberof BufferOption
   * @returns {number} 动态投影半径
   */
  async getDynPrjRad(): Promise<number> {
    let methodName = "getDynPrjRad"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置动态投影半径
   * @memberof BufferOption
   * @param {number} dynPrjRad - 动态投影半径
   * @returns {Promise<Void>}
   */
  async setDynPrjRad(dynPrjRad: number): Promise<void> {
    let methodName = "setDynPrjRad"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [dynPrjRad];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否按照属性缓冲
   * @memberof BufferOption
   * @returns {boolean} 是否按照属性缓冲
   */
  async getIsAtt(): Promise<boolean> {
    let methodName = "getIsAtt"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置否按照属性缓冲
   * @memberof BufferOption
   * @param {boolean} isAtt - 否按照属性缓冲
   * @returns {Promise<Void>}
   */
  async setIsAtt(isAtt: boolean): Promise<void> {
    let methodName = "setIsAtt"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isAtt];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取按照属性缓冲属性字段
   * @memberof BufferOption
   * @returns {String} 属性字段
   */
  async getFldName(): Promise<String> {
    let methodName = "getFldName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置按照属性缓冲属性字段
   * @memberof BufferOption
   * @param {String} fldName - 属性字段
   * @returns {Promise<Void>}
   */
  async setFldName(fldName: String): Promise<void> {
    let methodName = "setFldName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否复合要素操作
   * @memberof BufferOption
   * @returns {boolean} 是否复合要素操作
   */
  async getMultiFeatureOption(): Promise<boolean> {
    let methodName = "getMultiFeatureOption"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否复合要素操作
   * @memberof BufferOption
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
   * 获取左缓冲半径
   * @memberof BufferOption
   * @returns {number} 左缓冲半径
   */
  async getLeftRad(): Promise<number> {
    let methodName = "getLeftRad"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置左缓冲半径
   * @memberof BufferOption
   * @param {number} leftRad - 左缓冲半径
   * @returns {Promise<Void>}
   */
  async setLeftRad(leftRad: number): Promise<void> {
    let methodName = "setLeftRad"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [leftRad];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取右缓冲半径
   * @memberof BufferOption
   * @returns {number} 右缓冲半径
   */
  async getRightRad(): Promise<number> {
    let methodName = "getRightRad"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置右缓冲半径
   * @memberof BufferOption
   * @param {number} rightRad - 右缓冲半径
   * @returns {Promise<Void>}
   */
  async setRightRad(rightRad: number): Promise<void> {
    let methodName = "setRightRad"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [rightRad];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取结果颜色值
   * @memberof BufferOption
   * @returns {number} 颜色值
   */
  async getClr(): Promise<number> {
    let methodName = "getClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置结果颜色值
   * @memberof BufferOption
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
   * @memberof BufferOption
   * @returns {number} 容差
   */
  async getTolerance(): Promise<number> {
    let methodName = "getTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差
   * @memberof BufferOption
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
   * @memberof BufferOption
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
   * @memberof BufferOption
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
   * @memberof BufferOption
   * @returns {byte} 扩展参数0
   */
  async getExtendOption(): Promise<number> {
    let methodName = "getExtendOption"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取扩展参数
   * @memberof BufferOption
   * @returns {String} 扩展参数1
   */
  async getStrExtendOption(): Promise<String> {
    let methodName = "getStrExtendOption"
    return await this.invoke(methodName, this.STRING);
  }

}
