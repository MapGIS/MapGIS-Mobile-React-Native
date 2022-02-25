/**
 * @content 
 * @author fangqi 2021-11-29 
 */
import FeatureQuery from '../geomapview/FeatureQuery';
import FeaturePagedResult3D from './FeaturePagedResult3D';

/**
 * @class FeatureQuery3D
 */
export default class FeatureQuery3D extends FeatureQuery {

  getClassName(): String {
    return this.CLASS_FEATURE_QUERY3D;
  }

  /**
   * 构造一个新的 FeatureQuery3D 对象
   * @memberof FeatureQuery3D
   * @returns {Promise<FeatureQuery3D>}
   */
  static async createInstance(strIGServerBaseURL: String, strDataURL: String): Promise<FeatureQuery3D> {
    let thisObj = new FeatureQuery3D();
    let initParamsType = [thisObj.STRING, thisObj.STRING];
    let initParamsStr = [strIGServerBaseURL, strDataURL];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureQuery3D 对象
   * @memberOf FeatureQuery3D
   * @param strIGServerBaseURL - 
   * @param strDocName - 
   * @param sceneID - 
   * @param layerIndex - 
   * @return {Promise<FeatureQuery3D>}
   */
  static async createInstanceByParam(strIGServerBaseURL: String, strDocName: String, sceneID: number, layerIndex: number): Promise<FeatureQuery3D> {
    let thisObj = new FeatureQuery3D();
    let initParamsType = [thisObj.STRING, thisObj.STRING, thisObj.INT, thisObj.INT];
    let initParamsStr = [strIGServerBaseURL, strDocName, sceneID, layerIndex];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 查询
   * @memberof FeatureQuery3D
   * @returns {Promise<FeaturePagedResult3D>} 查询结果页
   */
  async query3D(): Promise<FeaturePagedResult3D> {
    let methodName = "query"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new FeaturePagedResult3D();
    obj.ObjId = ObjId;
    return obj;
  }

}
