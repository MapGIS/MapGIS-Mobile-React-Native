/**
 * @content 唯一值专题图项
 * @author fangqi 2021-09-28
 */
import ThemeInfo from './ThemeInfo';

/**
 * @class UniqueThemeInfo
 * @description 唯一值专题图项
 */
export default class UniqueThemeInfo extends ThemeInfo {

  getClassName(): String {
    return this.CLASS_UNIQUE_THEME_INFO;
  }

  /**
   * 创建一个新的UniqueThemeInfo对象
   *
   * @memberof UniqueThemeInfo
   * @returns {Promise<UniqueThemeInfo>}
   */
  static async createInstance(): Promise<UniqueThemeInfo> {
    let thisObj = new UniqueThemeInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取唯一值
   *
   * @memberof UniqueThemeInfo
   * @returns {String} 值
   */
  async getValue(): Promise<String> {
    let methodName = "getValue"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * @memberof UniqueThemeInfo
   * @param {String} value 值
   * @returns {Promise<Void>}
   */
  async setValue(value: String): Promise<void> {
    let methodName = "setValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
