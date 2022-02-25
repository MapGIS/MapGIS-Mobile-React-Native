/**
 * @content 捕捉选项
 * @author fangqi 2021-09-10
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class SnappingOption
 * @description 捕捉选项
 */
export default class SnappingOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SNAPPING_OPTION
  }

  /**
   * 构造一个新的SnappingOption对象
   *
   * @memberof SnappingOption
   * @returns {Promise<SnappingOption>}
   */
  static async createInstance(): Promise<SnappingOption> {
    let thisObj = new SnappingOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取容差（像素单位）
   * @memberof SnappingOption
   * @returns {Number} 容差 （int类型的Number）
   */
  async getPixelsTolerance(): Promise<number> {
    let methodName = "getPixelsTolerance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置容差（像素单位）
   * @memberof SnappingOption
   * @param {Number} pixelsTolerance 容差 （int类型的Number）
   * @returns {Promise<Void>}
   */
  async setPixelsTolerance(pixelsTolerance: number): Promise<void> {
    let methodName = "setPixelsTolerance"
    let paramsTypeStr = [this.INT];
    let paramsStr = [pixelsTolerance];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否自动捕捉顶点
   * @memberof SnappingOption
   * @returns {boolean} 是否自动捕捉顶点
   */
  async isSnappingVertex(): Promise<boolean> {
    let methodName = "isSnappingVertex"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否自动捕捉顶点
   * @memberof SnappingOption
   * @param {boolean} isSnappingVertex 是否自动捕捉顶点
   * @returns {Promise<Void>}
   */
  async setSnappingVertex(isSnappingVertex: boolean): Promise<void> {
    let methodName = "setSnappingVertex"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSnappingVertex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否自动捕捉中点
   * @memberof SnappingOption
   * @returns {boolean}
   */
  async isSnappingMidVertex(): Promise<boolean> {
    let methodName = "isSnappingMidVertex"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否自动捕捉中点
   * @memberof SnappingOption
   * @param {boolean} isSnappingMidVertex
   * @returns {Promise<Void>}
   */
  async setSnappingMidVertex(isSnappingMidVertex: boolean): Promise<void> {
    let methodName = "setSnappingMidVertex"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSnappingMidVertex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否自动捕捉垂点
   * @memberof SnappingOption
   * @returns {boolean}
   */
  async isSnappingPedal(): Promise<boolean> {
    let methodName = "isSnappingPedal"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否自动捕捉垂点
   * @memberof SnappingOption
   * @param {boolean} isSnappingPedal 是否自动捕捉垂点
   * @returns {Promise<Void>}
   */
  async setSnappingPedal(isSnappingPedal: boolean): Promise<void> {
    let methodName = "setSnappingPedal"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSnappingPedal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否自动捕捉普通交点
   * @memberof SnappingOption
   * @returns {boolean}
   */
  async isSnappingNormalIntersection(): Promise<boolean> {
    let methodName = "isSnappingNormalIntersection"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否自动捕捉普通交点
   * @memberof SnappingOption
   * @param {boolean} isSnappingNormalIntersection 是否自动捕捉普通交点
   * @returns {Promise<Void>}
   */
  async setSnappingNormalIntersection(isSnappingNormalIntersection: boolean): Promise<void> {
    let methodName = "setSnappingNormalIntersection"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSnappingNormalIntersection];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取是否自动捕捉水平交点
   * @memberof SnappingOption
   * @returns {boolean}
   */
  async isSnappingHorizontalIntersection(): Promise<boolean> {
    let methodName = "isSnappingHorizontalIntersection"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否自动捕捉水平交点
   * @memberof SnappingOption
   * @param {boolean} isSnappingHorizontalIntersection 是否自动捕捉水平交点
   * @returns {Promise<Void>}
   */
  async setSnappingHorizontalIntersection(isSnappingHorizontalIntersection: boolean): Promise<void> {
    let methodName = "setSnappingHorizontalIntersection"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSnappingHorizontalIntersection];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否自动捕捉垂直交点
   * @memberof SnappingOption
   * @returns {boolean}
   */
  async isSnappingVerticalIntersection(): Promise<boolean> {
    let methodName = "isSnappingVerticalIntersection"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否自动捕捉垂直交点
   * @memberof SnappingOption
   * @param {boolean} isSnappingVerticalIntersection 是否自动捕捉垂直交点
   * @returns {Promise<Void>}
   */
  async setSnappingVerticalIntersection(isSnappingVerticalIntersection: boolean): Promise<void> {
    let methodName = "setSnappingVerticalIntersection"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSnappingVerticalIntersection];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
