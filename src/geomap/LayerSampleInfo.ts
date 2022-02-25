/**
 * @content 图层示例信息
 * @author fangqi 2021-9-28 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class LayerSampleInfo
 */
export default class LayerSampleInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LAYER_SAMPLE_INFO;
  }

  /**
   * 构造一个新的 LayerSampleInfo 对象。
   * @memberOf LayerSampleInfo
   * @returns {Promise.<LayerSampleInfo>}
   */
  static async createInstance(): Promise<LayerSampleInfo> {
    let thisObj = new LayerSampleInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图层可见性
   * @memberOf LayerSampleInfo
   * @returns {Promise<boolean>} 图层可见性
   */
  async getVisibility(): Promise<boolean> {
    let methodName = "GetVisibility"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置图层可见性
   * @memberOf LayerSampleInfo
   * @param newVal 图层可见性
   * @returns {Promise<void>}
   */
  async setVisibility(newVal: boolean): Promise<void> {
    let methodName = "SetVisibility"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图层名称
   * @memberOf LayerSampleInfo
   * @returns {Promise<String>} 图层名称
   */
  async getName(): Promise<String> {
    let methodName = "GetName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取图层URL
   * @memberOf LayerSampleInfo
   * @returns {Promise<String>} 图层URL
   */
   async getURL(): Promise<String> {
    let methodName = "GetURL"
    return await this.invoke(methodName, this.STRING);
  }

}
