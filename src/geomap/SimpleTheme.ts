/**
 * @content 简单专题图
 * @author fangqi 2021-09-28
 */
import ThemeInfo from './ThemeInfo';
import VectorTheme from './VectorTheme';

/**
 * @class SimpleTheme
 * @description 简单专题图
 */
export default class SimpleTheme extends VectorTheme {

  getClassName(): String {
    return this.CLASS_SIMPLE_THEME;
  }

  /**
   * 创建一个新的SimpleTheme对象
   *
   * @memberof SimpleTheme
   * @returns {Promise<SimpleTheme>}
   */
  static async createInstance(): Promise<SimpleTheme> {
    let thisObj = new SimpleTheme();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取统一专题图的绘制信息
   *
   * @memberof SimpleTheme
   * @returns {Promise<ThemeInfo>}
   */
  async getThemeInfo(): Promise<ThemeInfo> {
    let methodName = "getThemeInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ThemeInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置统一专题图的绘制信息
   *
   * @memberof SimpleTheme
   * @param {Object} themeInfo 统一专题图的绘制信息
   * @returns {Promise<Void>}
   */
  async setThemeInfo(themeInfo: ThemeInfo): Promise<void> {
    let methodName = "setThemeInfo"
    let paramsTypeStr = [this.CLASS_THEME_INFO];
    let paramsStr = [themeInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
