/**
 * @content 
 * @author fangqi 2021-12-22 
 */

import CustomFeatureAttributeCallBack from "./CustomFeatureAttributeCallBack";


/**
 * @class BombCustomFeatureAttributeCallBack
 */
export default class BombCustomFeatureAttributeCallBack extends CustomFeatureAttributeCallBack {

  getClassName(): String {
    return this.CLASS_BOMB_CUSTOM_FEATURE_ATTRIBUTE_CALL_BACK;
  }

  /**
   * 构造一个新 BombCustomFeatureAttributeCallBack 对象
   *
   * @memberof BombCustomFeatureAttributeCallBack
   * @returns {Promise<BombCustomFeatureAttributeCallBack>}
   */
   static async createInstance(): Promise<BombCustomFeatureAttributeCallBack> {
    let thisObj = new BombCustomFeatureAttributeCallBack();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 修改要素值（包括属性信息，图形信息，几何信息）
   * 
   * @memberof BombCustomFeatureAttributeCallBack
   * @param {Object} attribute 属性信息。例let attribute = {1:'粉质粘土',2:'粉细沙'}
   * @returns {Promise<void>} 
   */
   async setAttributeMap(attribute:Object): Promise<void> {
    let methodName = "setAttributeMap"
    let paramsTypeStr = [this.MAP];
    let paramsStr = [attribute];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
