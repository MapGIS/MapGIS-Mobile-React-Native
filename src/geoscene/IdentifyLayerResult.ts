/**
 * @content 
 * @author fangqi 2021-11-26 
 */

import ObjectManager from "../components/ObjectManager";
import GeoElement from "./GeoElement";

/**
 * @class IdentifyLayerResult
 */
export default class IdentifyLayerResult extends ObjectManager {

  getClassName(): String {
    return this.CLASS_IDENTIFY_LAYER_RESULT;
  }

  /**
   * 构造一个新的 IdentifyLayerResult 对象。
   * @memberOf IdentifyLayerResult
   * @returns {Promise.<IdentifyLayerResult>}
   */
  static async createInstance(): Promise<IdentifyLayerResult> {
    let thisObj = new IdentifyLayerResult();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取拾取到的要素
   *
   * @return 要素列表
   */
  async getElements(): Promise<Array<GeoElement>> {
    let methodName = "getElements"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new GeoElement();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 返回错误信息
   *
   * @memberOf IdentifyLayerResult
   * @returns {String} 
   *
   */
  async getError(): Promise<String> {
    let methodName = "getError"
    return await this.invoke(methodName, this.STRING);
  }

}
