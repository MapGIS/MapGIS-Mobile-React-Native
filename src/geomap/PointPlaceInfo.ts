/**
 * @content 点放置样式
 * @author fangqi 2021-10-09
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class PointPlaceInfo
 * @description 点放置样式
 */
export default class PointPlaceInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_POINT_PLACE_INFO;
  }

  /**
   * 构造一个新的PointPlaceInfo对象
   *
   * @memberof PointPlaceInfo
   * @returns {Promise<PointPlaceInfo>}
   */
  static async createInstance(): Promise<PointPlaceInfo> {
    let thisObj = new PointPlaceInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取点标注类型
   *
   * @memberof PointPlaceInfo
   * @returns {int} 点标注分布类型 例：PointPlaceType.EightLocationPlace
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置点标注类型
   *
   * @memberof PointPlaceInfo
   * @param {PointPlaceType} pointPlaceType 点标注分布类型 例：PointPlaceType.EightLocationPlace
   * @returns {Promise<Void>}
   */
  async setType(pointPlaceType: any): Promise<void> {
    let methodName = "setType"
    let paramsTypeStr = [this.ENUM + this.CLASS_POINT_PLACE_TYPE];
    let paramsStr = [pointPlaceType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标注与点的偏移距离(设备单位)
   *
   * @memberof PointPlaceInfo
   * @returns {double} 标注与点的偏移距离(设备单位)
   */
  async getOffset(): Promise<number> {
    let methodName = "getOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置标注与点的偏移距离(设备单位)
   *
   * @memberof PointPlaceInfo
   * @param {int} offset 标注与点的偏移距离(设备单位)
   * @returns {Promise<Void>}
   */
  async setOffset(offset: number): Promise<void> {
    let methodName = "setOffset"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [offset];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取八方位优先级,数组长度为8
   *
   * @memberof PointPlaceInfo
   * @returns {Array} int类型的数组
   */
  async getEightLocationPrioritys(): Promise<any[]> {
    let methodName = "getEightLocationPrioritys"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 设置八方位优先级
   *
   * @memberof PointPlaceInfo
   * @param {Array} array 八方位优先级数组，int类型，数组长度为8
   * @returns {Promise<Void>}
   */
  async setEightLocationPrioritys(array: any[]): Promise<void> {
    let methodName = "setEightLocationPrioritys"
    let paramsTypeStr = [this.ARRAY + this.ENUM + this.CLASS_POINT_EIGHT_LOCATION_PRIORITY];
    let paramsStr = [array];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取任意方位优先级，度数，最大长度为20
   *
   * @memberof PointPlaceInfo
   * @returns {Array} double类型的数组
   */
  async getLocationPrioritys(): Promise<number[]> {
    let methodName = "getLocationPrioritys"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 设置任意方位优先级
   *
   * @memberof PointPlaceInfo
   * @param {Array} array 任意方位优先级数组，double类型，最大长度为20
   * @returns {Promise<Void>}
   */
  async setLocationPrioritys(array: number[]): Promise<void> {
    let methodName = "setLocationPrioritys"
    let paramsTypeStr = [this.ARRAY + this.DOUBLE];
    let paramsStr = [array];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否避让点符号
   *
   * @memberof PointPlaceInfo
   * @returns {boolean}
   */
  async getAvoidPointSymbol(): Promise<boolean> {
    let methodName = "getAvoidPointSymbol"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否避让点符号
   *
   * @memberof PointPlaceInfo
   * @param {boolean} avoidPointSymbol 是否避让点符号
   * @returns {Promise<Void>}
   */
  async setAvoidPointSymbol(avoidPointSymbol: boolean): Promise<void> {
    let methodName = "setAvoidPointSymbol"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [avoidPointSymbol];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否紧随点符号边界注记
   *
   * @memberof PointPlaceInfo
   * @returns {boolean}
   */
  async getFollowPointSymbolBorder(): Promise<boolean> {
    let methodName = "getFollowPointSymbolBorder"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否紧随点符号边界注记
   *
   * @memberof PointPlaceInfo
   * @param {boolean} followPointSymbolBorder 是否紧随点符号边界注记
   * @returns {Promise<Void>}
   */
  async setFollowPointSymbolBorder(followPointSymbolBorder: boolean): Promise<void> {
    let methodName = "setFollowPointSymbolBorder"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [followPointSymbolBorder];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
