/**
 * @content 要素类功能组件
 * @author fangqi 2021-7-25
 */
import ObjectManager from '../components/ObjectManager';
import type IVectorCls from '../geodatabase/IVectorCls';
import QueryDef from '../geodatabase/QueryDef';
import type VectorLayer from '../geomap/VectorLayer';
import FeaturePagedResult from './FeaturePagedResult';


/**
 * @class FeatureQuery
 */
export default class FeatureQuery extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FEATURE_QUERY;
  }

  /**
   * 构造一个新的 FeatureQuery 对象
   * @memberOf FeatureQuery
   * @param {VectorLayer} vectorLayer 矢量图层
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByVectorLayer(vectorLayer: VectorLayer): Promise<FeatureQuery> {
    let thisObj = new FeatureQuery();
    let initParamsType = [thisObj.CLASS_VECTOR_LAYER];
    let initParamsStr = [vectorLayer.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureQuery 对象
   * @memberOf FeatureQuery
   * @param {IVectorCls} cls 矢量类对象基类
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByVectorCls(cls: IVectorCls): Promise<FeatureQuery> {
    let thisObj = new FeatureQuery();
    let initParamsType = [thisObj.CLASS_IVECTOR_CLS];
    let initParamsStr = [cls.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureQuery 对象
   * @memberOf FeatureQuery
   * @param {String} strIGServerBaseURL 基地址
   * @param {String} strDocName 地图文档名
   * @param {int} mapID 地图ID
   * @param {int} layerID 图层 ID
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByIGSDoc(strIGServerBaseURL: String, strDocName: String, mapID: number, layerID: number): Promise<FeatureQuery> {
    let thisObj = new FeatureQuery();
    let initParamsType = [thisObj.STRING, thisObj.STRING, thisObj.INT, thisObj.INT];
    let initParamsStr = [strIGServerBaseURL, strDocName, mapID, layerID];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureQuery 对象
   * @memberOf FeatureQuery
   * @param {String} strIGServerBaseURL 服务基地址
   * @param {String} strDataURL 数据地址
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByIGSData(strIGServerBaseURL: String, strDataURL: String): Promise<FeatureQuery> {
    let thisObj = new FeatureQuery();
    let initParamsType = [thisObj.STRING, thisObj.STRING];
    let initParamsStr = [strIGServerBaseURL, strDataURL];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置查询范围
   * @memberOf FeatureQuery
   * @param queryDef 查询范围
   */
  async setQueryDef(queryDef: QueryDef): Promise<FeatureQuery> {
    let methodName = "setQueryDef"
    let paramsTypeStr = [this.CLASS_QUERY_DEF];
    let paramsStr = [queryDef.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    var obj = new FeatureQuery();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取查询范围
   * @memberOf FeatureQuery
   */
  async getQueryDef(): Promise<QueryDef> {
    let methodName = "getQueryDef"
    let ObjId = await this.invoke(methodName, this.OBJID);
    var obj = new QueryDef();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 查询结果页
   * @memberOf FeatureQuery
   * @returns {Promise<FeaturePagedResult>}
   */
  async query(): Promise<FeaturePagedResult> {
    let methodName = "query"
    let ObjId = await this.invoke(methodName, this.OBJID);
    var obj = new FeaturePagedResult();
    obj.ObjId = ObjId;
    return obj;
  }

}
