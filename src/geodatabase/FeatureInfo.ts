/**
 * @content 要素类型信息
 * @author fangqi 2021-11-16
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class FeatureInfo
 * @description 要素类型信息
 */
export default class FeatureInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FEATURE_INFO;
  }

  /**
   * 构造一个新的FeatureInfo对象
   *
   * @class FeatureInfo
   * @returns {Promise<FeatureInfo>}
   */
  static async createInstance(): Promise<FeatureInfo> {
    let thisObj = new FeatureInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 
   * @memberof FeatureInfo
   * @param {GeomType} type
   * @returns {Promise<void>}
   */
  async setGeomType(type: any): Promise<void> {
    let methodName = "setGeomType"
    let paramsTypeStr = [this.ENUM + this.CLASS_GEOM_TYPE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberof FeatureInfo
   * @returns {GeomType} 
   */
  async geomType(): Promise<any> {
    let methodName = "geomType"
    return await this.invoke(methodName, this.ENUM);
  }

}
