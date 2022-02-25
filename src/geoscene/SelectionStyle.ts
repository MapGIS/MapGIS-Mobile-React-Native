/**
 * @content 
 * @author fangqi 2021-11-26 
 */
import ConvertUtil from '../components/ConvertUtil';
import ObjectManager from '../components/ObjectManager';

/**
 * @class SelectionStyle
 */
export default class SelectionStyle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SELECTION_STYLE;
  }

  /**
   * 构造一个新的 SelectionStyle 对象。
   * @memberOf SelectionStyle
   * @returns {Promise.<SelectionStyle>}
   */
  static async createInstance(): Promise<SelectionStyle> {
    let thisObj = new SelectionStyle();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置填充色
   * @memberOf SelectionStyle
   * @param color - 填充色 eg:'rgba(128, 128, 128, 0.5)'
   * @returns {Promise<void>} 
   */
  async setFillColor(color: String): Promise<void> {
    let methodName = "setFillColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取填充色
   *
   * @memberOf SelectionStyle
   * @returns {String} 填充色
   *
   */
  async getFillColor(): Promise<String> {
    let methodName = "getFillColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

}
