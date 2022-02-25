/**
 * @content 
 * @author fangqi 2021-11-26 
 */

import FeaturePagedResult from "../geomapview/FeaturePagedResult";
import Feature from "../geomapview/Feature";

/**
 * @class FeaturePagedResult3D
 */
export default class FeaturePagedResult3D extends FeaturePagedResult {

  getClassName(): String {
    return this.CLASS_FEATURE_PAGED_RESULT3D;
  }

  /**
   * 构造一个新的 FeaturePagedResult3D 对象。
   * @memberOf FeaturePagedResult3D
   * @returns {Promise.<FeaturePagedResult3D>}
   */
  static async createInstance(): Promise<FeaturePagedResult3D> {
    let thisObj = new FeaturePagedResult3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 返回页码对应的结果，页码从1开始计数
   *
   * @param pageNumber - 页码
   * @return 返回页码pageNumber对应的结果
   */
  async getPage(pageNumber: number): Promise<Array<Feature>> {
    let methodName = "getPage"
    let paramsTypeStr = [this.INT];
    let paramsStr = [pageNumber];
    let ObjIdList = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Feature();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

}
