/**
 * @content 区样式
 * @author fangqi 2021-09-17
 */
import ObjectManager from '../components/ObjectManager';
import ConvertUtil from '../components/ConvertUtil';
import LineStyle from '../geomapview/LineStyle';

/**
 * @class FillStyle
 * @description 区样式（纯色填充）
 */
export default class FillStyle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FILL_STYLE;
  }

  /**
   * 构造一个新的FillStyle对象，包含无参构造和有参构造两种方式。
   * 有参构造参数为：颜色（String, eg:'rgba(128, 128, 128, 128)'）、线样式（LineStyle类型的Object）。
   * 
   * @memberof FillStyle
   * @returns {Promise<FillStyle>}
   */
  static async createInstance(): Promise<FillStyle> {
    let thisObj = new FillStyle();
    if (
      typeof arguments[0] === 'string' &&
      typeof arguments[1] === 'object'
    ) {
      let initParamsType = [thisObj.INT, thisObj.CLASS_LINE_STYLE];
      let initParamsStr = [ConvertUtil.colorRGBAToNumber(arguments[0]), arguments[1].ObjId];
      thisObj.ObjId = await thisObj.createByParam(
        initParamsType,
        initParamsStr
      );
    } else {
      thisObj.ObjId = await thisObj.create();
    }
    return thisObj;
  }

  /**
   * 获取区样式填充色
   *
   * @memberof FillStyle
   * @returns {String} 填充色
   */
  async getColor(): Promise<String> {
    let methodName = "getColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置区样式的填充色
   *
   * @memberof FillStyle
   * @param {String} color 填充色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<Void>}
   */
  async setColor(color: String): Promise<void> {
    let methodName = "setColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取轮廓样式（实线含颜色和宽度）
   *
   * @memberof FillStyle 轮廓样式
   * @returns {Promise<LineStyle>}
   */
  async getLineStyle(): Promise<LineStyle> {
    let methodName = "getLineStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LineStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置轮廓样式
   *
   * @memberof FillStyle
   * @param {Object} lineStyle 轮廓样式（实线含颜色和宽度）
   * @returns {Promise<Void>}
   */
  async setLineStyle(lineStyle: LineStyle): Promise<void> {
    let methodName = "setLineStyle"
    let paramsTypeStr = [this.CLASS_LINE_STYLE];
    let paramsStr = [lineStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
  
}
