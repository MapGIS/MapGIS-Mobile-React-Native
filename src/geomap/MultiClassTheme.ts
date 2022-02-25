/**
 * @content 多表达式分段专题图
 * @author fangqi 2021-09-28
 */
import ClassItemValue from './ClassItemValue';
import MultiClassThemeInfo from './MultiClassThemeInfo';
import ThemeInfo from './ThemeInfo';
import VectorTheme from './VectorTheme';

/**
 * @class MultiClassTheme
 * @description 多表达式分段专题图
 */
export default class MultiClassTheme extends VectorTheme {

  getClassName(): String {
    return this.CLASS_MULTI_CLASS_THEME;
  }

  /**
   * 构造一个新的MultiClassTheme对象
   *
   * @memberof MultiClassTheme
   * @returns {Promise<MultiClassTheme>}
   */
  static async createInstance(): Promise<MultiClassTheme> {
    let thisObj = new MultiClassTheme();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取缺省专题绘制信息
   *
   * @memberof MultiClassTheme
   * @returns {Promise<ThemeInfo>}
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
   * @memberof MultiClassTheme
   * @param {Object} themeInfo 缺省专题绘制信息
   * @returns {Promise<Void>}
   */
  async setDefaultInfo(themeInfo: ThemeInfo): Promise<void> {
    let methodName = "setDefaultInfo"
    let paramsTypeStr = [this.CLASS_THEME_INFO];
    let paramsStr = [themeInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获得分级字段表达式的数目
   *
   * @memberof MultiClassTheme
   * @returns {int} 分级字段表达式的数目
   */
  async getExpCount(): Promise<number> {
    let methodName = "getExpCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获得项（做完笛卡尔积之后）的个数
   *
   * @memberof MultiClassTheme
   * @returns {int} 项（做完笛卡尔积之后）的个数
   */
  async getItemCount(): Promise<number> {
    let methodName = "getItemCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获得专题图类型
   *
   * @memberof MultiClassTheme
   * @returns {int} 专题图类型，例：AllOtherDataItemInfoSource.DefaultThemeInfo
   */
  async getAllOtherDataItemInfoSource() {
    let methodName = "getAllOtherDataItemInfoSource"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置专题图类型
   *
   * @memberof MultiClassTheme
   * @param {int} allOtherDataItemInfoSource 专题图类型，例：AllOtherDataItemInfoSource.DefaultThemeInfo
   * @returns {Promise<Void>}
   */
  async setAllOtherDataItemInfoSource(allOtherDataItemInfoSource: any): Promise<void> {
    let methodName = "setAllOtherDataItemInfoSource"
    let paramsTypeStr = [this.ENUM + this.CLASS_ALL_OTHER_DATA_ITEM_INFO_SOURCE];
    let paramsStr = [allOtherDataItemInfoSource];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 添加分级字段表达式
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {int} classItemType 统计分段类型
   * @returns {int} 成功返回索引
   */
  async appendExpression(exp: String, classItemType: any): Promise<number> {
    let methodName = "appendExpression"
    let paramsTypeStr = [this.STRING, this.ENUM + this.CLASS_CLASS_ITEM_TYPE];
    let paramsStr = [exp, classItemType];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移除分级字段表达式
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @returns {boolean} true-成功 ：false-失败
   */
  async removeExpression(exp: String): Promise<boolean> {
    let methodName = "removeExpression"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [exp];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获得分级字段表达式的索引
   *
   * @memberof MultiClassTheme
   * @param {String} exp
   * @returns {int} 成功返回字段表达式的索引
   */
  async indexOfExpression(exp: String): Promise<number> {
    let methodName = "indexOfExpression"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [exp];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获得分级字段表达式
   *
   * @memberof MultiClassTheme
   * @param {int} index 字段表达式索引
   * @returns {String} 成功返回分级字段表达式
   */
  async getExpression(index: number): Promise<String> {
    let methodName = "getExpression"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 交换两个分级字段表达式
   *
   * @memberof MultiClassTheme
   * @param {int} index1 字段表达式的索引
   * @param {int} index2 字段表达式的索引
   * @returns {boolean} true-成功 ： false-失败
   */
  async exchangeExpressions(index1: number, index2: number): Promise<boolean> {
    let methodName = "exchangeExpressions"
    let paramsTypeStr = [this.LONG, this.LONG];
    let paramsStr = [index1, index2];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获得分级字段表达式的类型
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @returns {int} 成功返回字段表达式的统计分段类型，例：ClassItemType.UniqueType
   */
  async getExpressionClassItemType(exp: String) {
    let methodName = "getExpressionClassItemType"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [exp];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 添加和字段表达式对应的分段值
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {Object} classItemValue 和字段表达式对应的分段值
   * @returns {int} 成功返回字段表达式索引
   */
  async appendSubItem(exp: String, classItemValue: ClassItemValue): Promise<number> {
    let methodName = "appendSubItem"
    let paramsTypeStr = [this.STRING, this.CLASS_CLASS_ITEM_VALUE];
    let paramsStr = [exp, classItemValue.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除和字段表达式对应的分段值
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {int} index 和字段表达式对应的分段值的索引
   * @returns {boolean} true-成功 ；false-失败
   */
  async removeSubItem(exp: String, index: number): Promise<boolean> {
    let methodName = "removeSubItem"
    let paramsTypeStr = [this.STRING, this.LONG];
    let paramsStr = [exp, index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 合并和字段表达式对应的分段值（只对表达式值为RangeTheme类型的管用）
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {int} index 待合并的分段值的索引
   * @param {int} count 待合并的分段值的数目
   * @returns {boolean} true-成功 ；false-失败
   */
  async mergeSubItem(exp: String, index: number, count: number): Promise<boolean> {
    let methodName = "mergeSubItem"
    let paramsTypeStr = [this.STRING, this.LONG, this.LONG];
    let paramsStr = [exp, index, count];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 分裂给定字段表达式对应的分段值（只对表达式值为RangeTheme类型的管用）
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {int} index 待分裂的分段值的索引
   * @param {double} splitValue 拆分值
   * @returns {boolean} true-成功 ；false-失败
   */
  async splitSubItem(exp: String, index: number, splitValue: number): Promise<boolean> {
    let methodName = "splitSubItem"
    let paramsTypeStr = [this.STRING, this.LONG, this.DOUBLE];
    let paramsStr = [exp, index, splitValue];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获得给定的值在分段中的索引
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {String} itemValue  字段值
   * @returns {int} 成功返回给定的值在分段中的索引
   */
  async indexOfSubItem(exp: String, itemValue: String): Promise<number> {
    let methodName = "indexOfSubItem"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [exp, itemValue];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清除给定字段表达式的所有分段
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @returns {boolean} true-成功 ；false-失败
   */
  async clearSubItems(exp: String): Promise<boolean> {
    let methodName = "clearSubItems"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [exp];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获得给定字段表达式的分段数目
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @returns {int} 成功返回给定字段表达式的分段数目
   */
  async getSubItemCount(exp: String): Promise<number> {
    let methodName = "getSubItemCount"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [exp];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 修改给定字段表达式中指定索引处的值
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {int} index 分段索引
   * @param {Object} classItemValue 分段值
   * @returns {boolean} true-成功 ；false-失败
   */
  async setSubItemValue(exp: String, index: number, classItemValue: ClassItemValue): Promise<boolean> {
    let methodName = "setSubItemValue"
    let paramsTypeStr = [this.STRING, this.LONG, this.CLASS_CLASS_ITEM_VALUE];
    let paramsStr = [exp, index, classItemValue.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取给定字段表达式中指定索引处的值
   *
   * @memberof MultiClassTheme
   * @param {String} exp 字段表达式
   * @param {int} index 分段索引
   * @returns {Promise<ClassItemValue>} 成功返回给定字段表达式中指定索引处的值
   */
  async getSubItemValue(exp: String, index: number): Promise<ClassItemValue> {
    let methodName = "getSubItemValue"
    let paramsTypeStr = [this.STRING, this.LONG];
    let paramsStr = [exp, index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new ClassItemValue();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 生成所有的分段信息（该函数在调整了expression或者expression内部的分段信息后都需要调用）
   *
   * @memberof MultiClassTheme
   * @param {boolean} maintainExistentStyle 指示之前存在的分段的样式是否保持不变
   * @returns {boolean} true-成功 ；false-失败
   */
  async make(maintainExistentStyle: boolean): Promise<boolean> {
    let methodName = "make"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [maintainExistentStyle];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 返回指定项（做完笛卡尔积之后）的信息
   *
   * @memberof MultiClassTheme
   * @param {int} index 项索引
   * @returns {Promise<MultiClassThemeInfo>} 成功返回指定项的信息
   */
  async getItem(index: number): Promise<MultiClassThemeInfo> {
    let methodName = "getItem"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MultiClassThemeInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置每个项（做完笛卡尔积之后）的信息
   *
   * @memberof MultiClassTheme
   * @param {int} index 项索引
   * @param {Object} multiClassThemeInfo 项信息
   * @returns {boolean} true-成功 ；false-失败
   */
  async setItem(index: number, multiClassThemeInfo: MultiClassThemeInfo): Promise<boolean> {
    let methodName = "setItem"
    let paramsTypeStr = [this.LONG, this.CLASS_MULTI_CLASS_THEME_INFO];
    let paramsStr = [index, multiClassThemeInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
