/**
 * @content 要素查询结果功能组件
 * @author fangqi 2021-7-25
 */
import ObjectManager from '../components/ObjectManager';
import Fields from '../geoobject/Fields';
import Feature from './Feature';

/**
 * @class FeaturePagedResult
 */
export default class FeaturePagedResult extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FEATURE_PAGED_RESULT;
  }

  /**
   * 构造一个新的 FeaturePagedResult 对象。
   * @memberOf FeaturePagedResult
   * @returns {Promise.<FeaturePagedResult>}
   */
  static async createInstance(): Promise<FeaturePagedResult> {
    let thisObj = new FeaturePagedResult();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   *  获取要素总数
   *  @memberOf FeaturePagedResult
   * @returns {Promise<*|*>}
   */
  async getTotalFeatureCount(): Promise<number> {
    let methodName = "getTotalFeatureCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取页数
   *@memberOf FeaturePagedResult
   * @return 页数
   */
  async getPageCount(): Promise<number> {
    let methodName = "getPageCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回页码对应的结果，页码从“1”开始计数
   * @memberOf FeaturePagedResult
   * @param pageNumber 页码
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

  /**
   * 获取属性结构
   * @memberOf FeaturePagedResult
   * @returns {Promise<void>}
   */
  async getFields(): Promise<Fields> {
    let methodName = "getFields"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Fields();
    obj.ObjId = ObjId;
    return obj;
  }
}
