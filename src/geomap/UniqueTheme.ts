/**
 * @content 唯一值专题图
 * @author fangqi 2021-09-28
 */
import ThemeInfo from './ThemeInfo';
import UniqueThemeInfo from './UniqueThemeInfo';
import VectorTheme from './VectorTheme';

/**
 * @class UniqueTheme
 * @description 唯一值专题图
 */
export default class UniqueTheme extends VectorTheme {

  getClassName(): String {
    return this.CLASS_UNIQUE_THEME;
  }

  /**
   * 创建一个新的UniqueTheme对象
   *
   * @memberof UniqueTheme
   * @returns {Promise<UniqueTheme>}
   */
  static async createInstance(): Promise<UniqueTheme> {
    let thisObj = new UniqueTheme();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取缺省专题绘制信息
   *
   * @memberof UniqueTheme
   * @returns {ThemeInfo} 专题绘制信息 (ThemeInfo)
   */
  async getDefaultInfo(): Promise<ThemeInfo> {
    let methodName = "getDefaultInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ThemeInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置缺省专题绘制信息
   *
   * @memberof UniqueTheme
   * @param {ThemeInfo} themeInfo 专题绘制信息 (ThemeInfo)
   * @returns {Promise<Void>}
   */
  async setDefaultInfo(themeInfo: ThemeInfo): Promise<void> {
    let methodName = "setDefaultInfo"
    let paramsTypeStr = [this.CLASS_THEME_INFO];
    let paramsStr = [themeInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取唯一字段表达式
   *
   * @memberof UniqueTheme
   * @returns {String}
   */
  async getExpression(): Promise<String> {
    let methodName = "getExpression"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置唯一字段表达式
   *
   * @memberof UniqueTheme
   * @param {String} expression 唯一字段表达式
   * @returns {Promise<Void>}
   */
  async setExpression(expression: String): Promise<void> {
    let methodName = "setExpression"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [expression];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取单值专题图项数目
   *
   * @memberof UniqueTheme
   * @returns {int} 单值专题图项数目
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取专题图类型
   *
   * @memberof UniqueTheme
   * @returns {int} 专题图类型 例: 1--AllOtherDataItemInfoSource.DefaultThemeInfo
   */
  async getAllOtherDataItemInfoSource() {
    let methodName = "getAllOtherDataItemInfoSource"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置专题图类型
   *
   * @memberof UniqueTheme
   * @param {int} allOtherDataItemInfoSource 专题图类型 例: 1--AllOtherDataItemInfoSource.DefaultThemeInfo
   * @returns {Promise<Void>}
   */
  async setAllOtherDataItemInfoSource(allOtherDataItemInfoSource: any): Promise<void> {
    let methodName = "setAllOtherDataItemInfoSource"
    let paramsTypeStr = [this.ENUM + this.CLASS_ALL_OTHER_DATA_ITEM_INFO_SOURCE];
    let paramsStr = [allOtherDataItemInfoSource];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 添加项
   *
   * @memberof UniqueTheme
   * @param {Object} uniqueThemeInfo 单值专题图信息 (Object---UniqueThemeInfo)
   * @returns {int} 成功返回添加后专题图项索引
   */
  async append(uniqueThemeInfo: UniqueThemeInfo): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_UNIQUE_THEME_INFO];
    let paramsStr = [uniqueThemeInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除项（删除之后的语义是图元用未分类字段的颜色）
   *
   * @memberof UniqueTheme
   * @param {int} index 单值专题图项索引
   * @returns {boolean} true-成功 ；false-失败
   */
  async removeByIndex(index: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除值为value的项
   *
   * @memberof UniqueTheme
   * @param {String} value 单值专题图项的值
   * @returns {boolean} true-成功 ；false-失败
   */
  async removeByValue(value: String): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [value];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 寻找值为value的项索引
   *
   * @memberof UniqueTheme
   * @param {String} value 单值专题图项的值
   * @returns {int} 成功返回索引
   */
  async indexOf(value: String): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [value];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清空所有的项
   *
   * @memberof UniqueTheme
   * @returns {boolean} true-成功 ；false-失败
   */
  async clear(): Promise<boolean> {
    let methodName = "clear"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置项信息
   *
   * @memberof UniqueTheme
   * @param {int} index 单值专题图项索引
   * @param {Object} uniqueThemeInfo 单值专题图项信息 （Object -- UniqueThemeInfo ）
   * @returns {boolean} true-成功 ；false-失败
   */
  async setItem(index: number, uniqueThemeInfo: UniqueThemeInfo): Promise<boolean> {
    let methodName = "setItem"
    let paramsTypeStr = [this.LONG, this.CLASS_UNIQUE_THEME_INFO];
    let paramsStr = [index, uniqueThemeInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取项信息
   *
   * @memberof UniqueTheme
   * @param {int} index 单值专题图项索引
   * @returns {promise<UniqueThemeInfo>} 成功返回项的信息
   */
  async getItem(index: number): Promise<UniqueThemeInfo> {
    let methodName = "getItem"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new UniqueThemeInfo();
    obj.ObjId = ObjId;
    return obj;
  }

}
