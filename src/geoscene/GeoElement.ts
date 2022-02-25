/**
 * @content 
 * @author fangqi 2021-11-26 
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class GeoElement
 */
export default class GeoElement extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEO_ELEMENT;
  }

  /**
   * 构造一个新 GeoElement 对象
   *
   * @memberof GeoElement
   * @returns {Promise<GeoElement>}
   */
  static async createInstance(): Promise<GeoElement> {
    let thisObj = new GeoElement();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取属性
   * @memberOf GeoElement
   */
  async getAttributes() {
    let methodName = "getAttributes"
    return await this.invoke(methodName, this.MAP);
  }

}
