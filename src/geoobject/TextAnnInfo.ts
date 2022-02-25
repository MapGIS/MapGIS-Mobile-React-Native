/**
 * @content 用于对多点的几何功能组件
 * @author fangqi 2021-09-09
 */

import AnnInfo from "./AnnInfo";


/**
 * @class TextAnnInfo
 */
export default class TextAnnInfo extends AnnInfo {
  
  getClassName(): String {
    return this.CLASS_TEXT_ANN_INFO;
  }

  /**
   * 构造一个新的 TextAnnInfo 对象
   * @memberOf TextAnnInfo
   * @return {Promise<TextAnnInfo>}
   */
   static async createInstance(): Promise<TextAnnInfo> {
    let thisObj = new TextAnnInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取文本显示高度
   * @memberOf TextAnnInfo
   * @return {Promise} 高度值
   *
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示高度
   * @memberOf TextAnnInfo
   * @param newVal 高度值
   * @return {Promise<void>}
   */
  async setHeight(newVal: number): Promise<void> {
    let methodName = "setHeight"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示宽度
   * @memberOf TextAnnInfo
   * @return {Promise}宽度值
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示宽度
   * @memberOf TextAnnInfo
   * @param newVal 宽度值
   * @return {Promise<void>}
   */
  async setWidth(newVal: number): Promise<void> {
    let methodName = "setWidth"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示间隔
   * @memberOf TextAnnInfo
   * @return {Promise}间隔值
   */
  async getSpace(): Promise<number> {
    let methodName = "getSpace"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示间隔
   * @memberOf TextAnnInfo
   * @param newVal 间隔值
   * @return {Promise<void>}
   */
  async setSpace(newVal: number): Promise<void> {
    let methodName = "setSpace"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示字角度
   * @memberOf TextAnnInfo
   * @return {Promise}字角度值
   */
  async getFontAngle(): Promise<number> {
    let methodName = "getFontAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示字角度
   * @memberOf TextAnnInfo
   * @param newVal 字角度值
   * @return {Promise<void>}
   */
  async setFontAngle(newVal: number): Promise<void> {
    let methodName = "setFontAngle"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示字串角度
   * @memberOf TextAnnInfo
   * @return {Promise}字串角度值
   */
  async getAngle(): Promise<number> {
    let methodName = "getAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示字串角度
   * @memberOf TextAnnInfo
   * @param newVal 字串角度值
   * @return {Promise<void>}
   */
  async setAngle(newVal: number): Promise<void> {
    let methodName = "setAngle"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本中文字体
   * @memberOf TextAnnInfo
   * @return {Promise}中文字体
   */
  async getIfnt(): Promise<number> {
    let methodName = "getIfnt"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本中文字体
   * @memberOf TextAnnInfo
   * @param newVal 中文字体
   * @return {Promise<void>}
   */
  async setIfnt(newVal: number): Promise<void> {
    let methodName = "setIfnt"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本西文字体
   * @memberOf TextAnnInfo
   * @return {Promise}西文字体
   */
  async getChnt(): Promise<number> {
    let methodName = "getChnt"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本西文字体
   * @memberOf TextAnnInfo
   * @param newVal 西文字体
   * @return {Promise<void>}
   */
  async setChnt(newVal: number): Promise<void> {
    let methodName = "setChnt"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本的字形
   * @memberOf TextAnnInfo
   * @return {Promise}字形
   */
  async getIfnx(): Promise<number> {
    let methodName = "getIfnx"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本的字形
   * @memberOf TextAnnInfo
   * @param newVal 字形
   * @return {Promise<void>}
   */
  async setIfnx(newVal: number): Promise<void> {
    let methodName = "setIfnx"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示水平或垂直排列
   * @memberOf TextAnnInfo
   * @return {Promise}水平排列返回true，垂直排列返回false
   */
  async isHZpl(): Promise<boolean> {
    let methodName = "isHZpl"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置文本水平或垂直排列
   * @memberOf TextAnnInfo
   * @param newVal 水平排列传true，垂直排列传false
   * @return {Promise<void>}
   */
  async setIsHZpl(newVal: boolean): Promise<void> {
    let methodName = "setIsHZpl"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示颜色
   * @memberOf TextAnnInfo
   * @return {Promise<Number>}颜色号
   */
  async getColor(): Promise<number> {
    let methodName = "getColor"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示颜色
   * @memberOf TextAnnInfo
   * @param {Number}  color 颜色号
   * @return {Promise<void>}
   */
  async setColor(color: number): Promise<void> {
    let methodName = "setColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本覆盖方式,表示透明/覆盖
   * @memberOf TextAnnInfo
   * @return {Promise}透明/覆盖
   */
  async getOvprnt(): Promise<boolean> {
    let methodName = "getOvprnt"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置文本覆盖方式,表示透明/覆盖
   * @memberOf TextAnnInfo
   * @param newVal 透明/覆盖
   * @return {Promise<void>}
   */
  async setOvprnt(newVal: boolean): Promise<void> {
    let methodName = "setOvprnt"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本自动压背景颜色标志
   * @memberOf TextAnnInfo
   * @return {Promise}自动压背景颜色返回true，否则返回false
   */
  async isFilled(): Promise<boolean> {
    let methodName = "isFilled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置文本自动压背景颜色标志
   * @memberOf TextAnnInfo
   * @param newVal 自动压背景设置true，否则返回false
   * @return {Promise<void>}
   */
  async setFilled(newVal: boolean): Promise<void> {
    let methodName = "setFilled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示范围扩展
   * @memberOf TextAnnInfo
   * @return {Promise}扩展值
   */
  async getBackexp(): Promise<number> {
    let methodName = "getBackexp"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示范围扩展
   * @memberOf TextAnnInfo
   * @param newVal 扩展值
   * @return {Promise<void>}
   */
  async setBackexp(newVal: number): Promise<void> {
    let methodName = "setBackexp"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本覆盖的背景颜色
   * @memberOf TextAnnInfo
   * @return {Promise<Number>}颜色号
   */
  async getBackClr(): Promise<number> {
    let methodName = "getBackClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本覆盖的背景颜色
   * @memberOf TextAnnInfo
   * @param {Number}  color 颜色号
   * @return {Promise<void>}
   */
  async setBackClr(color: number): Promise<void> {
    let methodName = "setBackClr"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示x方向的偏移
   * @memberOf TextAnnInfo
   * @return {Promise}偏移值
   */
  async getOffsetX(): Promise<number> {
    let methodName = "getOffsetX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示x方向的偏移
   * @memberOf TextAnnInfo
   * @param newVal 偏移值
   * @return {Promise<void>}
   */
  async setOffsetX(newVal: number): Promise<void> {
    let methodName = "setOffsetX"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本显示y方向的偏移
   * @memberOf TextAnnInfo
   * @return {Promise}偏移值
   */
  async getOffsetY(): Promise<number> {
    let methodName = "getOffsetY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本显示y方向的偏移
   * @memberOf TextAnnInfo
   * @param newVal 偏移值
   * @return {Promise<void>}
   */
  async setOffsetY(newVal: number): Promise<void> {
    let methodName = "setOffsetY"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 几何注记类类型
   * @memberOf TextAnnInfo
   * @return {Promise}几何注记类类型
   */
  async getAnnType() {
    let methodName = "getAnnType"
    return await this.invoke(methodName, this.ENUM);
  }

}
