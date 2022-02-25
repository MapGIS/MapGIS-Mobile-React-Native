/**
 * @content 文本样式
 * @author fangqi 2021-09-10
 */
import ObjectManager from "../components/ObjectManager";
import ConvertUtil from "../components/ConvertUtil";

/**
 * @class TextStyle
 * @description  文本样式
 */
export default class TextStyle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_TEXT_STYLE;
  }

  /**
   * 构造一个新的TextStyle对象，可通过无参或有参构造。
   * 有参构造的参数为：文本颜色（String, eg:'rgba(128, 128, 128, 128)'）、文本大小（float类型的Number）
   *
   * @memberof TextStyle
   * @returns {Promise<TextStyle>}
   */
  static async createInstance(): Promise<TextStyle> {
    let thisObj = new TextStyle();
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
   * 获取颜色
   *
   * @memberof TextStyle
   * @returns {String} 颜色 
   */
  async getColor(): Promise<String> {
    let methodName = "getColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * @memberof TextStyle
   * @param {String} color 颜色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<Void>}
   */
  async setColor(color: String): Promise<void> {
    let methodName = "setColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本的大小
   *
   * @memberof TextStyle
   * @returns {Number} 文本大小（单位：dp，float类型的Number）
   */
  async getSize(): Promise<number> {
    let methodName = "getSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本的大小
   *
   * @memberof TextStyle
   * @param {Number} size 文本大小（单位：dp，float类型的Number）
   * @returns {Promise<Void>}
   */
  async setSize(size: number): Promise<void> {
    let methodName = "setSize"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
