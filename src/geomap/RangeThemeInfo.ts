/**
 * @content 范围专题图项信息
 * @author fangqi 2021-09-28
 */
import ThemeInfo from './ThemeInfo';

/**
 * @class RangeThemeInfo
 * @description 范围专题图项信息
 */
export default class RangeThemeInfo extends ThemeInfo {

  getClassName(): String {
    return this.CLASS_RANGE_THEME_INFO;
  }

  /**
   *  创建一个新的RangeThemeInfo对象
   *
   * @memberof RangeThemeInfo
   * @returns {Promise<RangeThemeInfo>}
   */
  static async createInstance(): Promise<RangeThemeInfo> {
    let thisObj = new RangeThemeInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取开始值
   *
   * @memberof RangeThemeInfo
   * @returns {String}
   */
  async getStartValue(): Promise<String> {
    let methodName = "getStartValue"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置开始值
   *
   * @memberof RangeThemeInfo
   * @param {String} startValue 开始值
   * @returns {Promise<Void>}
   */
  async setStartValue(startValue: String): Promise<void> {
    let methodName = "setStartValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [startValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取结束值
   *
   * @memberof RangeThemeInfo
   * @returns {String}
   */
  async getEndValue(): Promise<String> {
    let methodName = "getEndValue"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置结束值
   *
   * @memberof RangeThemeInfo
   * @param {String} endValue 结束值
   * @returns {Promise<Void>}
   */
  async setEndValue(endValue: String): Promise<void> {
    let methodName = "setEndValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [endValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
