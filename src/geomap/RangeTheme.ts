/**
 * @content 范围专题图
 * @author fangqi 2021-09-28
 */
import ThemeInfo from './ThemeInfo';
import RangeThemeInfo from './RangeThemeInfo';
import VectorTheme from './VectorTheme';
import type GeomInfo from '../geoobject/GeomInfo';

/**
 * @class RangeTheme
 * @description 范围专题图
 */
export default class RangeTheme extends VectorTheme {

  getClassName(): String {
    return this.CLASS_RANGE_THEME;
  }

  /**
   * 创建一个新的RangeTheme对象
   *
   * @memberof RangeTheme
   * @returns {Promise<RangeTheme>}
   */
  static async createInstance(): Promise<RangeTheme> {
    let thisObj = new RangeTheme();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取缺省专题绘制信息
   *
   * @memberof RangeTheme
   * @returns {Promise<ThemeInfo>} 缺省专题绘制信息
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
   * @memberof RangeTheme
   * @param {Object} themeInfo 专题绘制信息
   * @returns {Promise<Void>}
   */
  async setDefaultInfo(themeInfo: ThemeInfo): Promise<void> {
    let methodName = "setDefaultInfo"
    let paramsTypeStr = [this.CLASS_THEME_INFO];
    let paramsStr = [themeInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取字段表达式
   *
   * @memberof RangeTheme
   * @returns {String}
   */
  async getExpression(): Promise<String> {
    let methodName = "getExpression"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置字段表达式
   *
   * @memberof RangeTheme
   * @param {String} expression 字段表达式
   * @returns {Promise<Void>}
   */
  async setExpression(expression: String): Promise<void> {
    let methodName = "setExpression"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [expression];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取项数目
   *
   * @memberof RangeTheme
   * @returns {int}
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取专题图类型
   *
   * @memberof RangeTheme
   * @returns {int} 返回专题图类型，例：AllOtherDataItemInfoSource.DefaultThemeInfo
   */
  async getAllOtherDataItemInfoSource() {
    let methodName = "getAllOtherDataItemInfoSource"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置专题图类型
   *
   * @memberof RangeTheme
   * @param {int} allOtherDataItemInfoSource 专题图类型 例：AllOtherDataItemInfoSource.DefaultThemeInfo
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
   * @memberof RangeTheme
   * @param {RangeThemeInfo} rangeThemeInfo 范围专题图项信息
   * @returns {int}                 成功返回项索引
   */
  async append(rangeThemeInfo: RangeThemeInfo): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_RANGE_THEME_INFO];
    let paramsStr = [rangeThemeInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除项（删除之后的语义是图元用未分类字段的颜色）
   *
   * @memberof RangeTheme
   * @param {int} index  范围专题图项索引
   * @returns {boolean}  true-成功 ；false-失败
   */
  async remove(index: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 寻找值为value的项索引
   *
   * @memberof RangeTheme
   * @param {String} value  属性值
   * @returns {int}         成功返回包含此值的项索引
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
   * @memberof RangeTheme
   * @returns {boolean}   true-成功 ；false-失败
   */
  async clear(): Promise<boolean> {
    let methodName = "clear"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置项信息
   *
   * @memberof RangeTheme
   * @param {Number} index   范围专题图项索引（int类型的Number）
   * @param {Object) rangeThemeInfo   范围专题图项信息
   * @returns {boolean}   true-成功 ；false-失败
   */
  async setItem(index: number, rangeThemeInfo: RangeThemeInfo): Promise<boolean> {
    let methodName = "setItem"
    let paramsTypeStr = [this.LONG, this.CLASS_RANGE_THEME_INFO];
    let paramsStr = [index, rangeThemeInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取项信息
   *
   * @memberof RangeTheme
   * @param {Number} index                范围专题图项索引（int类型的Number）
   * @returns {Promise<RangeThemeInfo>}   成功返回项的信息
   */
  async getItem(index: number): Promise<RangeThemeInfo> {
    let methodName = "getItem"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new RangeThemeInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 合并项,从index开始count个项合并
   *
   * @memberof RangeTheme
   * @param {int} index        合并项开始位置
   * @param {int} count        合并项的数目
   * @param {GeomInfo} geomInfo  合并后的图形信息
   * @param {String} caption   合并后的标题
   * @returns {boolean}        true-成功 ； false-失败
   */
  async merge(index: number, count: number, geomInfo: GeomInfo, caption: String): Promise<boolean> {
    let methodName = "merge"
    let paramsTypeStr = [this.LONG, this.LONG, this.CLASS_GEOM_INFO, this.STRING];
    let paramsStr = [index, count, geomInfo.ObjId, caption];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 拆分项（拆分为2个项）
   *
   * @memberof RangeTheme
   * @param {int} index          拆分项开始位置
   * @param {double} splitValue  拆分值
   * @param {Object} geomInfo1   拆分后的图形信息1
   * @param {String} caption1    拆分后的标题1
   * @param {Object} geomInfo2   拆分后的图形信息2
   * @param {String} caption2    拆分后的标题2
   * @returns {boolean}          true-成功 ； false-失败
   */
  async split(index: number, splitValue: number, geomInfo1: GeomInfo, caption1: String, geomInfo2: GeomInfo, caption2: String): Promise<boolean> {
    let methodName = "split"
    let paramsTypeStr = [this.LONG, this.DOUBLE, this.CLASS_GEOM_INFO, this.STRING, this.CLASS_GEOM_INFO, this.STRING];
    let paramsStr = [index, splitValue, geomInfo1.ObjId, caption1, geomInfo2.ObjId, caption2];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
