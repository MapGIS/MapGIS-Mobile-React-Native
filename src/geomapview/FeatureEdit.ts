/**
 * @content 要素编辑功能组件
 * @author fangqi 2021-09-25
 */
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import type IVectorCls from '../geodatabase/IVectorCls';
import type VectorLayer from '../geomap/VectorLayer';
import type Fields from '../geoobject/Fields';
import type Feature from './Feature';

/**
 * @class FeatureEdit
 * @description 要素编辑
 */
export default class FeatureEdit extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FEATURE_EDIT;
  }

  /**
   * 构造一个新的 FeatureEdit 对象。
   * @memberOf FeatureEdit
   * @param {VectorLayer} vectorLayer 矢量图层
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByVectorLayer(vectorLayer: VectorLayer): Promise<FeatureEdit> {
    let thisObj = new FeatureEdit();
    let initParamsType = [thisObj.CLASS_VECTOR_LAYER];
    let initParamsStr = [vectorLayer.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureEdit 对象。
   * @memberOf FeatureEdit
   * @param {IVectorCls} cls 矢量类对象基类
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByVectorCls(cls: IVectorCls): Promise<FeatureEdit> {
    let thisObj = new FeatureEdit();
    let initParamsType = [thisObj.CLASS_IVECTOR_CLS];
    let initParamsStr = [cls.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureEdit 对象。
   * @memberOf FeatureEdit
   * @param {String} strIGServerBaseURL 基地址
   * @param {String} strDocName 地图文档名
   * @param {int} mapID 地图ID
   * @param {int} layerID 图层 ID
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByIGSDoc(strIGServerBaseURL: String, strDocName: String, mapID: number, layerID: number): Promise<FeatureEdit> {
    let thisObj = new FeatureEdit();
    let initParamsType = [thisObj.STRING, thisObj.STRING, thisObj.INT, thisObj.INT];
    let initParamsStr = [strIGServerBaseURL, strDocName, mapID, layerID];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 FeatureEdit 对象。
   * @memberOf FeatureEdit
   * @param {String} strIGServerBaseURL 服务基地址
   * @param {String} strDataURL 数据地址
   * @returns {Promise.<FeatureEdit>} eatureEdit 对象。
   */
  static async createInstanceByIGSData(strIGServerBaseURL: String, strDataURL: String): Promise<FeatureEdit> {
    let thisObj = new FeatureEdit();
    let initParamsType = [thisObj.STRING, thisObj.STRING];
    let initParamsStr = [strIGServerBaseURL, strDataURL];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 添加要素
   * @memberOf FeatureEdit
   * @param {Feature} feature 简单要素对象
   * @return {Promise.<int>}添加成功后返回 要素ID
   */
  async append(feature: Feature): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_FEATURE];
    let paramsStr = [feature.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 添加要素
   * @memberOf FeatureEdit
   * @param {List<Feature>} featureArray 简单要素对象
   * @return {Promise.<int>} 成功:>0;失败：<=0
   */
  async appendFeatures(featureArray: Array<Feature>): Promise<number> {
    let arrayID = getArrayObjIds(featureArray);

    let methodName = "appendFeatures"
    let paramsTypeStr = [this.LIST + this.CLASS_FEATURE];
    let paramsStr = [arrayID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除要素
   * @memberOf FeatureEdit
   * @param {int} objID 要素ID
   * @return {Promise.<int>} 成功:>0;失败：<=0
   */
  async delete(objID: number): Promise<number> {
    let methodName = "delete"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [objID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除一组简单要素
   * @memberOf FeatureEdit
   * @param {long[]} objIDArray 简单要素ID数组
   * @return {Promise.<int>} 成功:>0;失败：<=0
   */
  async deleteobjIDs(objIDArray: number[]): Promise<number> {
    let methodName = "delete"
    let paramsTypeStr = [this.ARRAY + this.LONG];
    let paramsStr = [objIDArray];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新要素
   * @memberOf FeatureEdit
   * @param {int} objID 要素ID
   * @param {Feature} feature 要素对象
   * @return {Promise.<int>} 成功:>0;失败：<=0
   */
  async update(objID: number, feature: Feature): Promise<number> {
    let methodName = "update"
    let paramsTypeStr = [this.LONG, this.CLASS_FEATURE];
    let paramsStr = [objID, feature.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新要素
   * @memberOf FeatureEdit
   * @param {List<Feature>} features 要素数据集
   * @return {Promise.<int>} 成功:>0;失败：<=0
   */
  async updateFeatures(featureArray: Array<Feature>): Promise<number> {
    let arrayID = getArrayObjIds(featureArray);

    let methodName = "update"
    let paramsTypeStr = [this.LIST + this.CLASS_FEATURE];
    let paramsStr = [arrayID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 创建地理数据类
   * @memberOf FeatureEdit
   * @param {XClsType} clsType 地理类型
   * @param {String} name 名称
   * @param {GeomType} geomType 几何类型
   * @param {String} srefName 空间参考系名称
   * @param {String} dsName 数据集名称
   * @param {Fields} flds 字段属性
   * @return {Promise.<String>} 成功:返回参数返回创建的要素类的GDBP地址;失败：String等于null
   */
  async createClsBySRef(clsType: any, name: String, geomType: any, srefName: String, dsName: String, flds: Fields): Promise<String> {
    let methodName = "createCls"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.STRING, this.ENUM + this.CLASS_GEOM_TYPE, this.STRING, this.STRING, this.CLASS_FIELDS];
    let paramsStr = [clsType, name, geomType, srefName, dsName, flds.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 创建地理数据类
   * @memberOf FeatureEdit
   * @param {XClsType} clsType 地理类型
   * @param {String} name 名称
   * @param {GeomType} geomType 几何类型
   * @param {Fields} flds 字段属性
   * @return {Promise.<String>} 成功:返回参数返回创建的要素类的GDBP地址;失败：String等于null
   */
  async createCls(clsType: any, name: String, geomType: any, flds: Fields): Promise<String> {
    let methodName = "createCls"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.STRING, this.ENUM + this.CLASS_GEOM_TYPE, this.CLASS_FIELDS];
    let paramsStr = [clsType, name, geomType, flds.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 删除地理数据类
   * @memberOf FeatureEdit
   * @param {XClsType} clsType 地理类型
   * @param {String} name 名称
   * @return {Promise.<int>} 成功:>0;失败：<=0
   */
  async deleteCls(clsType: any, name: String): Promise<number> {
    let methodName = "deleteCls"
    let paramsTypeStr = [this.ENUM + this.CLASS_XCLS_TYPE, this.STRING];
    let paramsStr = [clsType, name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }
}
