/**
 * @content 矢量标注
 * @author fangqi 2021-10-09
 */
import VectorLabel from './VectorLabel';
import LabelInfo from './LabelInfo';

/**
 * @class GeneralVectorLabel
 * @description 矢量标注
 */
export default class GeneralVectorLabel extends VectorLabel {

  getClassName(): String {
    return this.CLASS_GENERAL_VECTOR_LABEL;
  }

  /**
   * 获取缺省的标注信息
   *  
   * @memberof GeneralVectorLabel
   * @returns {Promise<LabelInfo>}
   */
  async getDefaultInfo(): Promise<LabelInfo> {
    let methodName = "getDefaultInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LabelInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置缺省的标注信息
   *
   * @memberof VectorLabel
   * @param {LabelInfo} newVal 点放置样式 (object--LabelInfo)
   * @returns {Promise<Void>}
   */
  async setDefaultInfo(newVal: LabelInfo): Promise<void> {
    let methodName = "setDefaultInfo"
    let paramsTypeStr = [this.CLASS_LABEL_INFO];
    let paramsStr = [newVal.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标注表达式
   * @memberof GeneralVectorLabel
   * @returns {String} 标注表达式
   */
  async getLabelExpression(): Promise<String> {
    let methodName = "getLabelExpression"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置标注表达式
   * @memberof GeneralVectorLabel
   * @param {String} labelExpression 标注表达式
   * @returns {Promise<Void>}
   */
  async setLabelExpression(labelExpression: String): Promise<void> {
    let methodName = "setLabelExpression"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [labelExpression];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标注背景类型
   * @memberof GeneralVectorLabel
   * @returns {Number} 标注背景类型（int类型，例如 1--LabelBackType.Rect）
   */
  async getLabelBackType() {
    let methodName = "getLabelBackType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置标注背景类型
   * @memberof GeneralVectorLabel
   * @param {Number} labelBackType 标注背景类型（int类型，例如 1--LabelBackType.Rect）
   * @returns {Promise<Void>}
   */
  async setLabelBackType(labelBackType: any): Promise<void> {
    let methodName = "setLabelBackType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LABEL_BACK_TYPE];
    let paramsStr = [labelBackType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  // /**
  //  * 获取背景图形信息,可同时设置点,线,面以及注记
  //  * @memberof GeneralVectorLabel
  //  * @returns {GeomInfo} geomInfo 背景图形信息
  //  */
  // async getBackGeoInfo(): Promise<GeomInfo> {
  //   let methodName = "getBackGeoInfo"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new GeomInfo();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  // /**
  //  * 设置背景图形信息,可同时设置点,线,面以及注记
  //  * @memberof GeneralVectorLabel
  //  * @param {Object} geomInfo 背景图形信息
  //  * @returns {Promise<Void>}
  //  */
  // async setBackGeoInfo(geomInfo: GeomInfo): Promise<void> {
  //   let methodName = "setBackGeoInfo"
  //   let paramsTypeStr = [this.CLASS_GEOM_INFO];
  //   let paramsStr = [geomInfo.ObjId];
  //   await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  // }

  /**
   * 精度,小数点后有效位数,eg.精度为1时,那么123.456表示为123.5
   * @memberof GeneralVectorLabel
   * @returns {Number} 精度（int范围的Number)
   */
  async getNumericPrecision(): Promise<number> {
    let methodName = "getNumericPrecision"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置精度
   * @memberof GeneralVectorLabel
   * @param {Number} numericPrecision 精度（int范围的Number)
   * @returns {Promise<Void>}
   */
  async setNumericPrecision(numericPrecision: number): Promise<void> {
    let methodName = "setNumericPrecision"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [numericPrecision];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否换行去标注超过单行字符限制的注记 (线可能支持可能不支持)
   * @memberof GeneralVectorLabel
   * @returns {boolean}
   */
  async getNewLineToLabel(): Promise<boolean> {
    let methodName = "getNewLineToLabel"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否换行去标注超过单行字符限制的注记 (线可能支持可能不支持)
   * @memberof GeneralVectorLabel
   * @param {boolean} newLineToLabel 是否换行去标注超过单行字符限制的注记
   * @returns {Promise<Void>}
   */
  async setNewLineToLabel(newLineToLabel: boolean): Promise<void> {
    let methodName = "setNewLineToLabel"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newLineToLabel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当行的最大长度
   * @memberof GeneralVectorLabel
   * @returns {Number} 当行的最大长度 （int范围的Number）
   */
  async getMaxLengthPreLine(): Promise<number> {
    let methodName = "getMaxLengthPreLine"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置当行的最大长度
   * @memberof GeneralVectorLabel
   * @param {Number} maxLengthPreLine （int范围的Number）
   * @returns {Promise<Void>}
   */
  async setMaxLengthPreLine(maxLengthPreLine: number): Promise<void> {
    let methodName = "setMaxLengthPreLine"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [maxLengthPreLine];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否标注未能标注的注记
   * @memberof GeneralVectorLabel
   * @returns {boolean}
   */
  async getLabelUnPlaced(): Promise<boolean> {
    let methodName = "getLabelUnPlaced"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否标注未能标注的注记
   * @memberof GeneralVectorLabel
   * @param {boolean} newLineToLabel 是否标注未能标注的注记
   * @returns {Promise<Void>}
   */
  async setLabelUnPlaced(newLineToLabel: boolean): Promise<void> {
    let methodName = "setLabelUnPlaced"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newLineToLabel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 减小字体大小去标注未能标注的注记,以期望能标注上
   * @memberof GeneralVectorLabel
   * @returns {Number} 
   */
  async getReducedSizeForContinulLabel(): Promise<number> {
    let methodName = "getReducedSizeForContinulLabel"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 减小字体大小去标注未能标注的注记,以期望能标注上
   * @memberof GeneralVectorLabel
   * @param {Number} maxLengthPreLine 
   * @returns {Promise<Void>}
   */
  async setReducedSizeForContinulLabel(maxLengthPreLine: number): Promise<void> {
    let methodName = "setReducedSizeForContinulLabel"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [maxLengthPreLine];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否高亮显示未能标注的注记
   * @memberof GeneralVectorLabel
   * @returns {boolean}
   */
  async getHighlightLabelUnPlaced(): Promise<boolean> {
    let methodName = "getHighlightLabelUnPlaced"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否高亮显示未能标注的注记
   * @memberof GeneralVectorLabel
   * @param {boolean} newLineToLabel 是否高亮显示未能标注的注记
   * @returns {Promise<Void>}
   */
  async setHighlightLabelUnPlaced(newLineToLabel: boolean): Promise<void> {
    let methodName = "setHighlightLabelUnPlaced"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newLineToLabel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 高亮颜色
   * @memberof GeneralVectorLabel
   * @returns {Number} 
   */
  async getHighlightClr(): Promise<number> {
    let methodName = "getHighlightClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置高亮颜色
   * @memberof GeneralVectorLabel
   * @param {Number} maxLengthPreLine 
   * @returns {Promise<Void>}
   */
  async setHighlightClr(maxLengthPreLine: number): Promise<void> {
    let methodName = "setHighlightClr"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [maxLengthPreLine];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
