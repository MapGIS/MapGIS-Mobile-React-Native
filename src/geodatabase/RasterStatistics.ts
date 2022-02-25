/**
 * @content 栅格统计信息
 * @author fangqi 2021-11-02 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class RasterStatistics
 */
export default class RasterStatistics extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RASTER_STATISTICS;
  }

  /**
   * 构造一个新的 RasterStatistics 对象。
   * @memberOf RasterStatistics
   * @returns {Promise.<RasterStatistics>}
   */
  static async createInstance(): Promise<RasterStatistics> {
    let thisObj = new RasterStatistics();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 RasterStatistics 对象。
   * @memberOf RasterStatistics
   * @param min - 最小值
   * @param max - 最大值
   * @param mean - 平均值
   * @param sd - 标准差
   * @returns {Promise.<RasterStatistics>}
   */
  static async createInstanceByParam(min: number, max: number, mean: number, sd: number): Promise<RasterStatistics> {
    let thisObj = new RasterStatistics();
    let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
    let initParamsStr = [min, max, mean, sd];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 返回最小统计值
   * @memberOf RasterStatistics
   * @returns {Promise<number>} 最小统计值
   */
  async getMin(): Promise<number> {
    let methodName = "getMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小统计值
   * @memberOf RasterStatistics
   * @param min - 最小统计值
   * @returns {Promise<void>}
   */
  async setMin(min: number): Promise<void> {
    let methodName = "setMin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [min];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 返回最大统计值
   * @memberOf RasterStatistics
   * @returns {Promise<number>} 最大统计值
   */
  async getMax(): Promise<number> {
    let methodName = "getMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大统计值
   * @memberOf RasterStatistics
   * @param max - 最大统计值
   * @returns {Promise<void>}
   */
  async setMax(max: number): Promise<void> {
    let methodName = "setMax"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [max];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 返回平均值
   * @memberOf RasterStatistics
   * @returns {Promise<number>} 平均值
   */
  async getMean(): Promise<number> {
    let methodName = "getMean"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置平均值
   * @memberOf RasterStatistics
   * @param mean - 平均值
   * @returns {Promise<void>}
   */
  async setMean(mean: number): Promise<void> {
    let methodName = "setMean"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [mean];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 返回标准差
   * @memberOf RasterStatistics
   * @returns {Promise<number>} 标准差
   */
  async getSD(): Promise<number> {
    let methodName = "getSD"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置标准差
   * @memberOf RasterStatistics
   * @param sd - 标准差
   * @returns {Promise<void>}
   */
  async setSD(sd: number): Promise<void> {
    let methodName = "setSD"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [sd];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否有效
   * @memberOf RasterStatistics
   * @returns {Promise<number>} 是否有效
   */
  async getIsAvailable(): Promise<boolean> {
    let methodName = "getIsAvailable"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否有效
   * @memberOf RasterStatistics
   * @param available - 是否有效
   * @returns {Promise<void>}
   */
  async setIsAvailable(available: boolean): Promise<void> {
    let methodName = "setIsAvailable"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [available];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
