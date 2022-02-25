/**
 * @content 字段功能组件
 * @author fangqi 2021-09-16
 */

import ObjectManager from '../components/ObjectManager';
import Field from './Field';

/**
 * @class Fields
 * @description 扩展字段头
 */
export default class Fields extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FIELDS;
  }

  /**
   * 构造一个新的 Fields 对象。
   * @memberOf Fields
   * @returns {Promise.<Fields>}
   */
  static async createInstance(): Promise<Fields> {
    let thisObj = new Fields();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 根据索引取字段
   * @memberOf Fields
   * @param index 索引
   * @return {Promise.<Field>}字段对象
   */
  async getField(index: number): Promise<Field> {
    let methodName = "getField"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Field();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据索引取字段
   * @memberOf Fields
   * @param fldName 字段名
   * @return {Promise.<Field>}字段对象
   */
  async getFieldByName(fldName: String): Promise<Field> {
    let methodName = "getField"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Field();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置索引处的字段
   * @memberOf Fields
   * @param index 索引
   * @param field 字段对象
   * @return {Promise.<void>}大于0成功，否则失败
   */
  async setField(index: number, field: Field): Promise<number> {
    let methodName = "setField"
    let paramsTypeStr = [this.SHORT, this.CLASS_FIELD];
    let paramsStr = [index, field.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }


  /**
   * 设置索引处的字段
   * @memberOf Fields
   * @param fldName 字段名
   * @param field 字段对象
   * @return {Promise.<void>}大于0成功，否则失败
   */
  async setFieldByName(fldName: String, field: Field): Promise<number> {
    let methodName = "setField"
    let paramsTypeStr = [this.STRING, this.CLASS_FIELD];
    let paramsStr = [fldName, field.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据字段名称获取字段序号
   * @memberOf Fields
   * @param fldName 字段名
   * @return {Promise.<number>}大于0成功，否则失败
   */
  async getFieldIndex(fldName: String): Promise<number> {
    let methodName = "getFieldIndex"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 追加字段
   * @memberOf Fields
   * @param field 字段对象
   * @return {Promise}大于0成功，否则失败
   */
  async appendField(field: Field): Promise<number> {
    let methodName = "appendField"
    let paramsTypeStr = [this.CLASS_FIELD];
    let paramsStr = [field.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 插入字段
   * @memberOf Fields
   * @param position 位置
   * @param field 字段对象
   * @return {Promise}大于0成功，否则失败
   */
  async insertField(position: number, field: Field): Promise<number> {
    let methodName = "insertField"
    let paramsTypeStr = [this.SHORT, this.CLASS_FIELD];
    let paramsStr = [position, field.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据字段名删除字段
   * @memberOf Fields
   * @param fldName 字段名
   * @return {Promise}大于0成功，否则失败
   */
  async deleteFieldByName(fldName: String): Promise<number> {
    let methodName = "deleteField"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据字段序号删除字段
   * @memberOf Fields
   * @param index 字段序号
   * @return {Promise}大于0成功，否则失败
   */
  async deleteFieldByIndex(index: number): Promise<number> {
    let methodName = "deleteField"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取字段数目
   * @memberOf Fields
   * @return {Promise}字段数目
   */
  async getFieldCount(): Promise<number> {
    let methodName = "getFieldCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 计算属性结构占用存储空间大小
   * @memberOf Fields
   * @return {Promise}占用存储空间大小
   */
  async length(): Promise<number> {
    let methodName = "length"
    return await this.invoke(methodName, this.NUMBER);
  }

}
