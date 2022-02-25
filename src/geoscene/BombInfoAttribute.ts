/**
 * @content 
 * @author fangqi 2021-12-07 
 */

import BombInfo from "./BombInfo";
import CustomFeatureAttributeCallBack from "./CustomFeatureAttributeCallBack";

/**
 * @class BombInfoAttribute
 */
export default class BombInfoAttribute extends BombInfo {

  getClassName(): String {
    return this.CLASS_BOMB_INFO_ATTRIBUTE;
  }

  /**
   * 构造一个新 BombInfoAttribute 对象
   *
   * @memberof BombInfoAttribute
   * @returns {Promise<BombInfoAttribute>}
   */
  static async createInstance(): Promise<BombInfoAttribute> {
    let thisObj = new BombInfoAttribute();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取自定义要素属性回调对象
   *
   * @memberof BombInfoAttribute
   * @returns {CustomFeatureAttributeCallBack} 自定义要素属性回调对象
   */
  async getCustomFeatureAttributeCallBack(): Promise<CustomFeatureAttributeCallBack> {
    let methodName = "getCustomFeatureAttributeCallBack"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new CustomFeatureAttributeCallBack();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置自定义要素属性回调对象 m3d模型缓存层自身不带属性信息，为了实现按属性字段爆炸的功能，需要用户通过回调的方式 返回指定要素的属性。 
   * 用户可以先通过在线三维要素查询获取m3d模型缓存层中要素的属性信息。
   *
   * @memberof BombInfoAttribute
   * @param {CustomFeatureAttributeCallBack} customFeatureAttributeCallBack - 自定义要素属性回调对象
   * @returns {void} 
   */
   async setCustomFeatureAttributeCallBack(customFeatureAttributeCallBack: CustomFeatureAttributeCallBack): Promise<void> {
    let methodName = "setCustomFeatureAttributeCallBack"
    let paramsTypeStr = [this.CLASS_CUSTOM_FEATURE_ATTRIBUTE_CALL_BACK];
    let paramsStr = [customFeatureAttributeCallBack.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取爆炸的距离
   *
   * @memberof BombInfoAttribute
   * @returns {float} 爆炸的距离
   */
  async getDistance(): Promise<number> {
    let methodName = "getDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置爆炸的距离
   *
   * @memberof BombInfoAttribute
   * @param {float} distance - 爆炸的距离
   * @returns {void} 
   */
  async setDistance(distance: number): Promise<void> {
    let methodName = "setDistance"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [distance];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
