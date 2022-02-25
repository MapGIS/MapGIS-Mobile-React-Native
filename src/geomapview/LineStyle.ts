/**
 * @content 线样式
 * @author fangqi 2021-09-10 
 */
import ObjectManager from "../components/ObjectManager";
import ConvertUtil from "../components/ConvertUtil";

/**
 * @class LineStyle
 * @description 线样式（实线）
 */
export default class LineStyle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LINE_STYLE;
  }

  /**
   * 构造一个新的LineStyle对象，可通过无参或有参构造。
   * 有参构造的参数为：颜色（string，eg：'rgba(128, 128, 128, 128)'）、线宽（float类型的Number）
   *
   * @memberof LineStyle
   * @returns {Promise<LineStyle>}
   */
  static async createInstance(): Promise<LineStyle> {
    let thisObj = new LineStyle();
    if (
      typeof arguments[0] === 'string' &&
      typeof arguments[1] === 'number'
    ) {
      let initParamsType = [thisObj.STRING, thisObj.FLOAT];
      let initParamsStr = [ConvertUtil.colorRGBAToNumber(arguments[0]), arguments[1]];
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
   * 获取线的颜色
   *
   * @memberof LineStyle
   * @returns {String} 线颜色 
   */
  async getColor(): Promise<String> {
    let methodName = "getColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置线颜色
   *
   * @memberof LineStyle
   * @param {String} color 线颜色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<Void>}
   */
  async setColor(color: String): Promise<void> {
    let methodName = "setColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线宽
   *
   * @memberof LineStyle
   * @returns {number} 线宽 （float类型的Number）
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置线宽
   *
   * @memberof LineStyle
   * @param {number} width 线宽(dp) （float类型的Number）
   * @returns {Promise<Void>}
   */
  async setWidth(width: number): Promise<void> {
    let methodName = "setWidth"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
