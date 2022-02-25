/**
 * @content 专题图集合
 * @author fangqi 2021-09-28
 */
import ObjectManager from '../components/ObjectManager';
import Theme from './Theme';

/**
 * @class Themes
 * @description 专题图集合
 */
export default class Themes extends ObjectManager {

  getClassName(): String {
    return this.CLASS_THEMES;
  }

  /**
   * 创建一个新的Themes对象
   *
   * @memberof Themes
   * @returns {Promise<Themes>}
   */
  static async createInstance(): Promise<Themes> {
    let thisObj = new Themes();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获得专题图个数
   *
   * @memberof Themes
   * @returns {int} 专题图个数
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获得可见的单值或统计专题图
   *
   * @memberof Themes
   * @returns {Promise<Theme>}
   */
  async getVisibleBaseTheme(): Promise<Theme> {
    let methodName = "getVisibleBaseTheme"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Theme();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获得可见的专题图
   *
   * @memberof Themes
   * @returns {Promise<Theme>}
   */
  async getVisibleSurfaceTheme(): Promise<Theme> {
    let methodName = "getVisibleSurfaceTheme"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Theme();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 向集合中添加专题图
   *
   * @memberof Themes
   * @param {Object} theme 专题图 (Object--Theme)
   * @returns {boolean} true-成功 ；false-失败
   */
  async append(theme: Theme): Promise<boolean> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_THEME];
    let paramsStr = [theme.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除指定位置处的专题图
   *
   * @memberof Themes
   * @param {int} index 专题图位置
   * @returns {boolean} true-成功 ；false-失败
   */
  async remove(index: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 清空集合中所有的专题图
   *
   * @memberof Themes
   * @returns {boolean} true-成功 ；false-失败
   */
  async clear(): Promise<boolean> {
    let methodName = "clear"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获得指定位置的专题图
   *
   * @memberof Themes
   * @param {int} index 专题图索引
   * @returns {Promise<Theme>} 成功返回指定位置的专题图
   */
  async getThemeByIndex(index: number): Promise<Theme> {
    let methodName = "getTheme"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Theme();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据名称和索引获得专题图
   *
   * @memberof Themes
   * @param {String} name 专题图名称
   * @param {int} index 专题图索引
   * @returns {Promise<Theme>} 成功返回指定位置的专题图
   */
  async getThemeByName(name: String, index: number): Promise<Theme> {
    let methodName = "getTheme"
    let paramsTypeStr = [this.STRING, this.LONG];
    let paramsStr = [name, index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Theme();
    obj.ObjId = ObjId;
    return obj;
  }

}
