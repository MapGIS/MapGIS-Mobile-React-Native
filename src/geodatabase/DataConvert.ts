/**
 * @content 数据转换
 * @author fangqi 2021-11-03 
 */
import ObjectManager from '../components/ObjectManager';
import type Fields from '../geoobject/Fields';
import type AnnotationCls from './AnnotationCls';
import type FeatureInfo from './FeatureInfo';
import type IBasCls from './IBasCls';
import type LogEventReceiver from './LogEventReceiver';
import type QueryDef from './QueryDef';
import type RecordSet from './RecordSet';
import type SFeatureCls from './SFeatureCls';

/**
 * @class DataConvert
 */
export default class DataConvert extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DATA_CONVERT;
  }

  /**
   * 构造一个新的 DataConvert 对象。
   * @memberOf DataConvert
   * @returns {Promise.<DataConvert>}
   */
  static async createInstance(): Promise<DataConvert> {
    let thisObj = new DataConvert();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 打开源数据
   * @memberOf DataConvert
   * @param srcData - 源数据绝对路径
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openSource(srcData: String): Promise<number> {
    let methodName = "openSource"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [srcData];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开源数据
   * @memberOf DataConvert
   * @param iBasCls - 源数据的类对象
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openSourceByCls(iBasCls: IBasCls): Promise<number> {
    let methodName = "openSource"
    let paramsTypeStr = [this.CLASS_IBAS_CLS];
    let paramsStr = [iBasCls.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开源数据
   * @memberOf DataConvert
   * @param ai - 源数据的类ID
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openSourceByID(ai: number): Promise<number> {
    let methodName = "openSource"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [ai];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开源数据
   * @memberOf DataConvert
   * @param recordSet - 源数据的Set集
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openSourceByRecordSet(recordSet: RecordSet): Promise<number> {
    let methodName = "openSource"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [recordSet.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开目的数据
   * @memberOf DataConvert
   * @param dstData - 目的数据绝对路径
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openDestination(dstData: String): Promise<number> {
    let methodName = "openDestination"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dstData];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开目的数据
   * @memberOf DataConvert
   * @param iBasCls - 目的数据类对象
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openDestinationByCls(iBasCls: IBasCls): Promise<number> {
    let methodName = "openDestination"
    let paramsTypeStr = [this.CLASS_IBAS_CLS];
    let paramsStr = [iBasCls.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开目的数据
   * @memberOf DataConvert
   * @param ai - 目的数据类ID
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openDestinationByID(ai: number): Promise<number> {
    let methodName = "openDestination"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [ai];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 打开目的数据
   * @memberOf DataConvert
   * @param hSFClsPnt - 目的数据点简单要素类
   * @param hSFClsLin - 目的数据线简单要素类
   * @param hSFClsReg - 目的数据区简单要素类
   * @param hAnnCls - 目的数据注记类
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async openDestinationByParams(hSFClsPnt: SFeatureCls, hSFClsLin: SFeatureCls, hSFClsReg: SFeatureCls, hAnnCls: AnnotationCls): Promise<number> {
    let methodName = "openDestination"
    let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.CLASS_ANNOTATION_CLS];
    let paramsStr = [hSFClsPnt.ObjId, hSFClsLin.ObjId, hSFClsReg.ObjId, hAnnCls.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 数据转换
   * @memberOf DataConvert
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async convert(): Promise<number> {
    let methodName = "convert"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 关闭数据转换
   * @memberOf DataConvert
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async close(): Promise<number> {
    let methodName = "close"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置拷贝模式
   * @memberOf DataConvert
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setCopyMode(): Promise<number> {
    let methodName = "setCopyMode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置追加模式
   * @memberOf DataConvert
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setAppendMode(): Promise<number> {
    let methodName = "setAppendMode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置回调信息
   * @memberOf DataConvert
   * @param logEventReceiver - 处理信息，注册回调函数
   * @returns {Promise<number>} 成功/失败 大于零/小于等于零
   */
  async setProcessCallback(logEventReceiver: LogEventReceiver): Promise<number> {
    let methodName = "setProcessCallback"
    let paramsTypeStr = [this.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [logEventReceiver.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置提取条件
   * @memberOf DataConvert
   * @param hQueryCondition - 条件类
   * @returns {Promise<number>} 成功/失败 大于零/小于等于零
   */
  async setExtractCondition(hQueryCondition: QueryDef): Promise<number> {
    let methodName = "setExtractCondition"
    let paramsTypeStr = [this.CLASS_QUERY_DEF];
    let paramsStr = [hQueryCondition.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取源数据属性结构信息
   * @memberOf DataConvert
   * @param fields - 属性结构
   * @returns {Promise<number>} 成功/失败 大于零/小于等于零
   */
  async getSourceAttStru(fields: Fields): Promise<number> {
    let methodName = "getSourceAttStru"
    let paramsTypeStr = [this.CLASS_FIELDS];
    let paramsStr = [fields.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置目的数据属性结构信息
   * @memberOf DataConvert
   * @param fields - 属性结构
   * @returns {Promise<number>} 成功/失败 大于零/小于等于零
   */
  async getDestAttStru(fields: Fields): Promise<number> {
    let methodName = "getDestAttStru"
    let paramsTypeStr = [this.CLASS_FIELDS];
    let paramsStr = [fields.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取源数据对象个数
   * @memberOf DataConvert
   * @returns {Promise<number>} 信息个数
   */
  async getSourceObjCount(): Promise<number> {
    let methodName = "getSourceObjCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取目标数据对象个数
   * @memberOf DataConvert
   * @returns {Promise<number>} 信息个数
   */
  async getDestObjCount(): Promise<number> {
    let methodName = "getDestObjCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取源数据中的参数信息
   * @memberOf DataConvert
   * @param infoType - SourceInfoType 参数类型
   * @param obj - 参数值(传入FeatureInfo或TableInfo)
   * @returns {Promise<number>} 成功/失败 大于零/小于等于零
   */
  async getSourceInfo(infoType: any, obj: FeatureInfo): Promise<number> {
    let methodName = "getSourceInfo"
    let paramsTypeStr = [this.ENUM + this.CLASS_SOURCE_INFO_TYPE, this.CLASS_OBJECT];
    let paramsStr = [infoType, obj.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置转换选项
   * @memberOf DataConvert
   * @param {ConvertOptionType} optionType - 转换选项类型
   * @param obj - 转换对象
   * @returns {Promise<number>} Int 成功/失败 大于零/小于等于零
   */
  async setOption(optionType: any, obj: any): Promise<number> {
    let methodName = "setOption"
    let paramsTypeStr = [this.ENUM + this.CLASS_CONVERT_OPTION_TYPE, this.CLASS_OBJECT];
    let paramsStr = [optionType, obj.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 数据转换
   * @memberOf DataConvert
   * @param srcData - 源数据绝对路径
   * @param destData - 目的数据路径
   * @param isAppend - 是否为追加，0表示拷贝，1表示追加
   * @returns {Promise<number>} 成功/失败 大于零/小于等于零
   */
  static async dataConvert(srcData: String, destData: String, isAppend: number): Promise<number> {
    let thisObj = new DataConvert();
    let methodName = "dataConvert"
    let paramsTypeStr = [thisObj.STRING, thisObj.STRING, thisObj.SHORT];
    let paramsStr = [srcData, destData, isAppend];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
