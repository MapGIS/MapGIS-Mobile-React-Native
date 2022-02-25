/**
 * @content 线放置样式
 * @author fangqi 2021-10-09
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class LinePlaceInfo
 * @description 线放置样式
 */
export default class LinePlaceInfo extends ObjectManager{

  getClassName(): String {
    return this.CLASS_LINE_PLACE_INFO;
  }

  /**
   * 构造一个新LinePlaceInfo对象
   *
   * @memberof LinePlaceInfo
   * @returns {Promise<LinePlaceInfo>} 线标注对象
   */
  static async createInstance(): Promise<LinePlaceInfo> {
    let thisObj = new LinePlaceInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取线标注类型
   *
   * @memberof LinePlaceInfo
   * @returns {int} 线标注类型 例：LinePlaceType.HorizationPlace
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置线标注类型
   *
   * @memberof LinePlaceInfo
   * @param {LinePlaceType} linePlaceType 线标注类型 例：LinePlaceType.HorizationPlace
   * @returns {Promise<Void>}
   */
  async setType(linePlaceType: any): Promise<void> {
    let methodName = "setType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LINE_PLACE_TYPE];
    let paramsStr = [linePlaceType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标注与线的偏移距离(设备单位)
   *
   * @memberof LinePlaceInfo
   * @returns {double}
   */
  async getOffset(): Promise<number> {
    let methodName = "getOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置标注与线的偏移距离（设备单位）
   *
   * @memberof LinePlaceInfo
   * @param {double} offset  标注与线的偏移距离
   * @returns {Promise<Void>}
   */
  async setOffset(offset: number): Promise<void> {
    let methodName = "setOffset"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [offset];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取偏移约束类型
   *
   * @memberof LinePlaceInfo
   * @returns {int} 偏移约束类型 例：LineRestrictType.OnLine
   */
  async getRestrictType(){
    let methodName = "getRestrictType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置偏移约束类型
   *
   * @memberof LinePlaceInfo
   * @param {LineRestrictType} restrictType 偏移约束类型 例：LineRestrictType.OnLine
   * @returns {Promise<Void>}
   */
  async setRestrictType(restrictType: any): Promise<void> {
    let methodName = "setRestrictType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LINE_RESTRICT_TYPE];
    let paramsStr = [restrictType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取分布类型
   *
   * @memberof LinePlaceInfo
   * @returns {int} 分布类型 例：LineSpreadType.AutoSpread
   */
  async getSpreadType(){
    let methodName = "getSpreadType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置分布类型
   *
   * @memberof LinePlaceInfo
   * @param {LineSpreadType} spreadType 分布类型，例：LineSpreadType.AutoSpread
   * @returns {Promise<Void>}
   */
  async setSpreadType(spreadType: any): Promise<void> {
    let methodName = "setSpreadType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LINE_SPREAD_TYPE];
    let paramsStr = [spreadType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取重复类型
   *
   * @memberof LinePlaceInfo
   * @returns {int} 重复类型  例：LineRepeatType.AutoRepeat
   */
  async getRepeatType(){
    let methodName = "getRepeatType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置重复类型
   *
   * @memberof LinePlaceInfo
   * @param {LineRepeatType} repeatType 重复类型  例：LineRepeatType.AutoRepeat
   * @returns {Promise<Void>}
   */
  async setRepeatType(repeatType: any): Promise<void> {
    let methodName = "setRepeatType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LINE_REPEAT_TYPE];
    let paramsStr = [repeatType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取步长
   *
   * @memberof LinePlaceInfo
   * @returns {double}
   */
  async getInterval(): Promise<number> {
    let methodName = "getInterval"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置步长
   *
   * @memberof LinePlaceInfo
   * @param {double} interval 步长
   * @returns {Promise<Void>}
   */
  async setInterval(interval: number): Promise<void> {
    let methodName = "setInterval"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [interval];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
