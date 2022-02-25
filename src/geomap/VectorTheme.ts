/**
 * @content 矢量专题图
 * @author fangqi 2021-09-28
 */
import Theme from './Theme';

/**
 * @class VectorTheme
 * @description 矢量专题图
 */
export default class VectorTheme extends Theme {

  getClassName(): String {
    return this.CLASS_VECTOR_THEME;
  }

  /**
   * 获取专题图类型
   *
   * @memberof VectorTheme
   * @returns {int} 专题图类型，例 1-ThemeType.SimpleTheme
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 专题图可见性
   *
   * @memberof VectorTheme
   * @returns {boolean}
   */
  async getVisible(): Promise<boolean> {
    let methodName = "getVisible"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置专题图可见性
   * @memberof VectorTheme
   * @param {boolean} isVisible 专题图是否可见
   * @returns {int}  1-成功 ；0-失败
   */
  async setVisible(isVisible: boolean): Promise<number> {
    let methodName = "setVisible"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isVisible];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取专题图名称
   *
   * @memberof VectorTheme
   * @returns {String} 专题图名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置专题图名称
   * @memberof VectorTheme
   * @param {String} name 专题图名称
   * @returns {int} 1-成功 ；0-失败
   */
  async setName(name: String): Promise<number> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 是否是单值或者分段专题图
   *
   * @memberof VectorTheme
   * @returns {boolean}
   */
  async getIsBaseTheme(): Promise<boolean> {
    let methodName = "getIsBaseTheme"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 存为XML
   *
   * @memberof VectorTheme
   * @param {boolean} onlyStyle 支持仅导出样式
   * @returns {String} XML字符串
   */
  async toXML(onlyStyle: boolean): Promise<String> {
    let methodName = "toXML"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [onlyStyle];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 从XML导入
   *
   * @memberof VectorTheme
   * @param {String} strXML XML字符串
   * @param {boolean} onlyStyle 支持仅导出样式
   * @returns {boolean} 成功/失败 true/false
   */
  async fromXML(strXML: String, onlyStyle: boolean): Promise<boolean> {
    let methodName = "fromXML"
    let paramsTypeStr = [this.STRING, this.BOOLEAN];
    let paramsStr = [strXML, onlyStyle];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
