/**
 * @content 区放置样式
 * @author fangqi 2021-09-28
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class RegionPlaceInfo
 * @description 区放置样式
 */
export default class RegionPlaceInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_REGION_PLACE_INFO;
  }

  /**
   * 创建一个新的RegionPlaceInfo对象
   *
   * @memberof RegionPlaceInfo
   * @returns {Promise<RegionPlaceInfo>}
   */
  static async createInstance(): Promise<RegionPlaceInfo> {
    let thisObj = new RegionPlaceInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取区标注类型
   *
   * @memberof RegionPlaceInfo
   * @returns {int} 区标注类型,例：RegPlaceType.HorizationPlace
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置区标注类型
   *
   * @memberof RegionPlaceInfo
   * @param {int} regPlaceType 区标注类型,例：RegPlaceType.HorizationPlace
   * @returns {Promise<Void>}
   */
  async setType(regPlaceType: any): Promise<void> {
    let methodName = "setType"
    let paramsTypeStr = [this.ENUM + this.CLASS_REG_PLACE_TYPE];
    let paramsStr = [regPlaceType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 当区内部无法标注时，是否尝试水平标注在区的外面
   *
   * @memberof RegionPlaceInfo
   * @returns {boolean}
   */
  async getTryLabelOutside(): Promise<boolean> {
    let methodName = "getTryLabelOutside"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否尝试水平标注在区的外面
   *
   * @memberof RegionPlaceInfo
   * @param {boolean} tryLabelOutside 是否尝试水平标注在区的外面
   * @returns {Promise<Void>}
   */
  async setTryLabelOutside(tryLabelOutside: boolean): Promise<void> {
    let methodName = "setTryLabelOutside"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [tryLabelOutside];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否限制小区标注
   *
   * @memberof RegionPlaceInfo
   * @returns {boolean}
   */
  async getLimitLabelSmallRegion(): Promise<boolean> {
    let methodName = "getLimitLabelSmallRegion"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否尝试水平标注在区的外面
   *
   * @memberof RegionPlaceInfo
   * @param {boolean} limitLabelSmallRegion 是否限制小区标注
   * @returns {Promise<Void>}
   */
  async setLimitLabelSmallRegion(limitLabelSmallRegion: boolean): Promise<void> {
    let methodName = "setLimitLabelSmallRegion"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [limitLabelSmallRegion];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取限制小区标注的最大面积(设备单位 * 设备单位,小于该面积则小区不标注)
   *
   * @memberof RegionPlaceInfo
   * @returns {double}
   */
  async getSmallRegionMaxArea(): Promise<number> {
    let methodName = "getSmallRegionMaxArea"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置限制小区标注的最大面积(设备单位 * 设备单位,小于该面积则小区不标注)
   *
   * @memberof RegionPlaceInfo
   * @param {double} smallRegionMaxArea 是限制小区标注的最大面积
   * @returns {Promise<Void>}
   */
  async setSmallRegionMaxArea(smallRegionMaxArea: number): Promise<void> {
    let methodName = "setSmallRegionMaxArea"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [smallRegionMaxArea];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取重复类型
   *
   * @memberof RegionPlaceInfo
   * @returns {int} 重复类型，例：DuplicateType.OneLabelPreFeaturePart的值0
   */
  async getDuplicateType() {
    let methodName = "getDuplicateType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置重复类型
   *
   * @memberof RegionPlaceInfo
   * @param {int} duplicateType 重复类型，例：DuplicateType.OneLabelPreFeaturePart
   * @returns {Promise<Void>}
   */
  async setDuplicateType(duplicateType: any): Promise<void> {
    let methodName = "setDuplicateType"
    let paramsTypeStr = [this.ENUM + this.CLASS_DUPLICATE_TYPE];
    let paramsStr = [duplicateType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
