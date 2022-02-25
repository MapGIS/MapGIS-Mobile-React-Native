/**
 * @content 记录集功能组件
 * @author fangqi 2021-09-16
 */

import Fields from '../geoobject/Fields';
import ObjectManager from '../components/ObjectManager';
import type QueryDef from './QueryDef';
import type IBasCls from './IBasCls';
import Record from '../geoobject/Record';
import GeomInfo from '../geoobject/GeomInfo';
import Geometry from '../geoobject/Geometry';

/**
 * @class RecordSet
 * @description 扩展字段头
 */
export default class RecordSet extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RECORD_SET;
  }

  /**
   * 构造一个新的 RecordSet 对象。
   * @memberOf RecordSet
   * @returns {Promise.<RecordSet>} RecordSet 对象
   */
  static async createInstance(): Promise<RecordSet> {
    let thisObj = new RecordSet();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 取结果集名称
   * @memberOf RecordSet
   * @return {Promise} 结果集名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置结果集名称
   * @memberOf RecordSet
   * @param name 结果集名称
   * @return {Promise} 成功：>0;失败:<=0
   */
  async setName(name: String): Promise<number> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取结果集对应的类ID
   * @memberOf RecordSet
   * @return {Promise} 结果集对应的类ID
   */
  async getXClassID(): Promise<number> {
    let methodName = "getXClassID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 光标移到最前
   * @memberOf RecordSet
   * @return {Promise} 光标位置 成功:>0;失败：<=0
   */
  async moveFirst(): Promise<number> {
    let methodName = "moveFirst"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 光标移到最后
   * @memberOf RecordSet
   * @return {Promise} 游标,用来记录当前记录顺序号
   */
  async moveLast(): Promise<number> {
    let methodName = "moveLast"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 光标移到前一条
   * @memberOf RecordSet
   * @return {Promise} 游标,用来记录当前记录顺序号
   */
  async movePrev(): Promise<number> {
    let methodName = "movePrev"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 光标移到下一条
   * @memberOf RecordSet
   * @return {Promise} 光标位置 成功:>0;失败：<=0
   */
  async moveNext(): Promise<number> {
    let methodName = "moveNext"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 判断当前记录的位置是否在记录集中第一条记录的前面（当然第一条记录的前面是没有数据的），如果是返回 true；否则返回 false。
   * @memberOf RecordSet
   * @return {Promise<Bool>} 当前记录是否在第一条记录的前面
   */
  async isBOF(): Promise<boolean> {
    let methodName = "isBOF"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 判断当前记录的位置是否在记录集中的最后一条记录的后面，如果是，返回 true；否则返回 false。
   * @memberOf RecordSet
   * @return {Promise<Bool>}当前记录是否在最后一条记录的后面
   */
  async isEOF(): Promise<boolean> {
    let methodName = "isEOF"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 记录集是否为空
   * @memberOf RecordSet
   * @return {Promise<Bool>}是否为空
   */
  async isEmpty(): Promise<boolean> {
    let methodName = "isEmpty"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置游标位置
   * @memberOf RecordSet
   * @param pos 游标位置
   * @return {Promise} >0:成功；<=0:失败
   */
  async setCursorPos(pos: number): Promise<number> {
    let methodName = "setCursorPos"
    let paramsTypeStr = [this.INT];
    let paramsStr = [pos];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取游标位置
   * @memberOf RecordSet
   * @return {Promise<number>}游标位置
   */
  async getCursorPos(): Promise<number> {
    let methodName = "getCursorPos"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取游标类型 CursorType 游标类型
   * @memberOf RecordSet
   * @return {Promise<number>}游标类型
   */
  async getCursorType() {
    let methodName = "getCursorType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 复制记录集
   * @memberOf RecordSet
   * @param set 记录集
   * @return {Promise} 成功：>0;失败:<=0
   */
  async copySet(set: RecordSet): Promise<number> {
    let methodName = "copySet"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [set.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 添加记录集
   * @memberOf RecordSet
   * @param set 记录集
   * @return {Promise} 成功：>0;失败:<=0
   */
  async addSet(set: RecordSet): Promise<number> {
    let methodName = "addSet"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [set.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 减去记录集
   * @memberOf RecordSet
   * @param set 记录集
   * @return {Promise} 成功：>0;失败:<=0
   */
  async subSet(set: RecordSet): Promise<number> {
    let methodName = "subSet"
    let paramsTypeStr = [this.CLASS_RECORD_SET];
    let paramsStr = [set.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取属性结构
   * @memberOf RecordSet
   * @return {Promise.<Fields>} 属性结构
   */
  async getFields(): Promise<Fields> {
    let methodName = "getFields"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Fields();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 记录集中是否包含属性
   * @memberOf RecordSet
   * @return {Promise.<Record>} 是否包含属性
   */
  async hasAtt(): Promise<boolean> {
    let methodName = "hasAtt"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 记录集中是否包含几何
   * @memberOf RecordSet
   * @return {Promise<boolean>} 是否包含几何
   */
  async hasGeometry(): Promise<boolean> {
    let methodName = "hasGeometry"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 取当前对象ID
   * @memberOf RecordSet
   * @return {Promise} 对象ID
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取属性信息
   * @memberOf RecordSet
   * @return {Promise<Record>} 属性信息
   */
  async getAtt(): Promise<Record> {
    let methodName = "getAtt"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Record();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取当前要素范围
   * @memberOf RecordSet
   * @return {Promise<Record>} 要素范围
   */
  async getRect(): Promise<Record> {
    let methodName = "getRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Record();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取几何
   * @memberOf RecordSet
   * @return {Promise.<Geometry>} 几何
   */
  async getGeometry(): Promise<Geometry> {
    let methodName = "getGeometry"
    let ObjId = await this.invoke(methodName, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 获取几何图形参数
   * @memberOf RecordSet
   * @return {Promise.<GeomInfo>} 图形参数
   */
  async getInfo(): Promise<GeomInfo> {
    let methodName = "getInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new GeomInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 取要素信息
   * @memberOf RecordSet
   * @param geom 几何信息
   * @param rcd 属性信息
   * @param info 图形信息
   * @return {Promise}成功：>0;失败：<=0
   */
  async get(geom: Geometry, rcd: Record, info: GeomInfo): Promise<number> {
    let methodName = "get"
    let paramsTypeStr = [this.CLASS_GEOMETRY, this.CLASS_RECORD, this.CLASS_GEOM_INFO];
    let paramsStr = [geom.ObjId, rcd.ObjId, info.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 查询
   * @memberOf RecordSet
   * @param def 条件表达式
   * @return {Promise<RecordSet>} 记录集
   */
  async select(def: QueryDef): Promise<RecordSet> {
    let methodName = "select"
    let paramsTypeStr = [this.CLASS_QUERY_DEF];
    let paramsStr = [def.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new RecordSet();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 绑定类
   * @memberOf RecordSet
   * @param cls 类对象接口
   * @return {Promise}成功：>0;失败：<=0
   */
  async attach(cls: IBasCls): Promise<number> {
    let methodName = "attach"
    let paramsTypeStr = [this.CLASS_IBAS_CLS];
    let paramsStr = [cls.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 解除绑定
   * @memberOf RecordSet
   * @return {Promise} 成功：>0;失败：<=0
   */
  async detach(): Promise<number> {
    let methodName = "detach"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 初始化记录集变量的值
   * @memberOf RecordSet
   * @param i 记录集类型
   * @param h 记录集对象句柄
   * @return {Promise}>0:成功；<=0:失败
   */
  async init(i: number, h: number): Promise<number> {
    let methodName = "init"
    let paramsTypeStr = [this.SHORT, this.LONG];
    let paramsStr = [i, h];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取几何类型或注记类型
   * @memberOf RecordSet
   * @return {Promise} 几何类型或注记类型
   * @return {Promise} 几何类型或注记类型
   */
  async getType(): Promise<number> {
    let methodName = "getType"
    return await this.invoke(methodName, this.NUMBER);
  }

}
