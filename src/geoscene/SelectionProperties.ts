/**
 * @content 
 * @author fangqi 2021-11-26 
 */
import ObjectManager from '../components/ObjectManager';
import SelectionStyle from './SelectionStyle';

/**
 * @class SelectionProperties
 * 
 */
export default class SelectionProperties extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SELECTION_PROPERTIES;
  }

  /**
   * 构造一个新的 SelectionProperties 对象
   *
   * @memberof SelectionProperties
   * @returns {Promise<SelectionProperties>}
   */
  static async createInstance(): Promise<SelectionProperties> {
    let thisObj = new SelectionProperties();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置选中要素的样式
   *
   * @memberof SelectionProperties
   * @param {SelectionStyle} style - 选中要素的样式
   * @returns {void} 
   */
  async setSelectionStyle(style: SelectionStyle): Promise<void> {
    let methodName = "setSelectionStyle"
    let paramsTypeStr = [this.CLASS_SELECTION_STYLE];
    let paramsStr = [style.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取选中要素的样式
   *
   * @memberof SelectionProperties
   * @returns {Promise<SelectionStyle>} 选中要素的样式
   */
   async getSelectionStyle(): Promise<SelectionStyle> {
    let methodName = "getSelectionStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SelectionStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置没有选中的要素样式
   *
   * @memberof SelectionProperties
   * @param {SelectionStyle} style - 没有选中的要素样式
   * @returns {void} 
   */
  async setUnSelectionStyle(style: SelectionStyle): Promise<void> {
    let methodName = "setUnSelectionStyle"
    let paramsTypeStr = [this.CLASS_SELECTION_STYLE];
    let paramsStr = [style.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置没有选中的要素样式
   *
   * @memberof SelectionProperties
   * @returns {Promise<SelectionStyle>} 没有选中的要素样式
   */
   async getUnSelectionStyle(): Promise<SelectionStyle> {
    let methodName = "getUnSelectionStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SelectionStyle();
    obj.ObjId = ObjId;
    return obj;
  }

}
