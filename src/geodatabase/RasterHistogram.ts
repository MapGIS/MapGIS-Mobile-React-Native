/**
 * @content 
 * @author fangqi 2021-11-02 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class RasterHistogram
 */
export default class RasterHistogram extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RASTER_HISTOGRAM;
  }

  /**
   * 构造一个新的 RasterHistogram 对象。
   * @memberOf RasterHistogram
   * @param num_buckets - 直方图桶个数
   * @returns {Promise.<RasterHistogram>}
   */
  static async createInstance(num_buckets: number): Promise<RasterHistogram> {
    let thisObj = new RasterHistogram();
    let initParamsType = [thisObj.INT];
    let initParamsStr = [num_buckets];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取桶个数
   * @memberOf RasterHistogram
   * @returns {Promise<number>} 桶个数
   */
  async getBuckets(): Promise<number> {
    let methodName = "getBuckets"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取直方图计数
   * @memberOf RasterHistogram
   * @returns {Promise<number>} 直方图计数
   */
  async getCount(index: number): Promise<number> {
    let methodName = "getCount"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置直方图计数
   * @memberOf RasterHistogram
   * @param index - 桶索引
   * @param count - 直方图计数
   * @returns {Promise<void>}
   */
  async setCount(index: number, count: number): Promise<void> {
    let methodName = "setCount"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [index, count];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否有效
   * @memberOf RasterHistogram
   * @returns {Promise<number>} 是否有效
   */
  async getIsAvailable(): Promise<boolean> {
    let methodName = "getIsAvailable"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否有效
   * @memberOf RasterHistogram
   * @param available - 是否有效
   * @returns {Promise<void>}
   */
  async setIsAvailable(available: boolean): Promise<void> {
    let methodName = "setIsAvailable"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [available];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最小值
   * @memberOf RasterHistogram
   * @returns {Promise<number>} 最小值
   */
  async getMin(): Promise<number> {
    let methodName = "getMin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小值
   * @memberOf RasterHistogram
   * @param min - 最小值
   * @returns {Promise<void>}
   */
  async setMin(min: number): Promise<void> {
    let methodName = "setMin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [min];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最大值
   * @memberOf RasterHistogram
   * @returns {Promise<number>} 最大值
   */
  async getMax(): Promise<number> {
    let methodName = "getMax"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取最大值
   * @memberOf RasterHistogram
   * @param max - 最大值
   * @returns {Promise<void>}
   */
  async setMax(max: number): Promise<void> {
    let methodName = "setMax"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [max];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
