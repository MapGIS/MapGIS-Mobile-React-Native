/**
 * @content 专题图
 * @author fangqi 2021-09-28
 */
import ObjectManager from "../components/ObjectManager";


/**
 * @class Theme
 * @description 专题图
 */
export default class Theme extends ObjectManager {

  getClassName(): String {
    return this.CLASS_THEME;
  }

  /**
   * 获取专题图类型
   *
   * @memberof Theme
   * @returns {ThemeType} 专题图类型 例：1--ThemeType.SimpleTheme
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置专题图的名称
   *
   * @memberof Theme
   * @param {String} name 专题图的名称
   * @returns {int} 1-成功 ；0-失败
   */
  async setName(strThemeName: String): Promise<number> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strThemeName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取专题图的名称
   *
   * @memberof Theme
   * @returns {String} 专题图的名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取专题图的可见性
   *
   * @memberof Theme
   * @returns {boolean} 专题图的可见性
   */
  async getVisible(): Promise<boolean> {
    let methodName = "getVisible"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置专题图的可见性
   *
   * @memberof Theme
   * @param {boolean} bVisible 专题图的可见性
   * @returns {int} 1-成功；0-失败
   */
  async setVisible(bVisible: boolean): Promise<number> {
    let methodName = "setVisible"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [bVisible];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 是否是单值或者分段专题图
   *
   * @memberof Theme
   * @returns {boolean}
   */
  async getIsBaseTheme(): Promise<boolean> {
    let methodName = "getIsBaseTheme"
    return await this.invoke(methodName, this.BOOLEAN);
  }

}
