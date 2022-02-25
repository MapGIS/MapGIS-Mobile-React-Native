/**
 * @content 简单标注
 * @author fangqi 2021-10-11
 */
import LabelInfo from './LabelInfo';
import GeneralVectorLabel from './GeneralVectorLabel';

/**
 * @class SimpleLabel
 * @description 简单标注
 */
export default class SimpleLabel extends GeneralVectorLabel {

  getClassName(): String {
    return this.CLASS_SIMPLE_LABEL;
  }

  /**
   * 创建一个新的SimpleLabel对象
   *
   * @memberof SimpleLabel
   * @returns {Promise<SimpleLabel>}
   */
  static async createInstance(): Promise<SimpleLabel> {
    let thisObj = new SimpleLabel();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取缺省的标注信息
   *
   * @memberof SimpleLabel
   * @returns {Promise<LabelInfo>}
   */
  async getInfo(): Promise<LabelInfo> {
    let methodName = "getInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LabelInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *  设置缺省的标注信息
   *
   * @memberof SimpleLabel
   * @param {Object} labelInfo 标注信息
   * @returns {Promise<Void>}
   */
  async setInfo(labelInfo: LabelInfo): Promise<void> {
    let methodName = "setInfo"
    let paramsTypeStr = [this.CLASS_LABEL_INFO];
    let paramsStr = [labelInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
