/**
 * @content 字段功能组件
 * @author fangqi 2021-09-16
 */
import ObjectManager from '../components/ObjectManager';

import ExtField from './ExtField';

/**
 * @class Field
 * @description 字段
 */
export default class Field extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FIELD;
  }

  /**
   * 构造一个新的 Field 对象。
   * @memberOf Field
   * @returns {Promise.<Field>}
   */
  static async createInstance(): Promise<Field> {
    let thisObj = new Field();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取字段名称
   * @memberOf Field
   * @return {String}字段名称
   */
  async getFieldName(): Promise<String> {
    let methodName = "getFieldName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置字段名称
   * @memberOf Field
   * @param {String} name 字段名称
   * @return {Promise<void>}
   */
  async setFieldName(name: String): Promise<void> {
    let methodName = "setFieldName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取字段类型
   * @memberOf Field
   * @return {number}字段类型 （int类型的Number）
   */
  async getFieldType() {
    let methodName = "getFieldType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置字段类型
   * @memberOf Field
   * @param {number} type 字段类型（int类型的Number）
   * @return {Promise<void>}
   */
  async setFieldType(type: any) {
    let methodName = "setFieldType"
    let paramsTypeStr = [this.ENUM + this.CLASS_FIELD_TYPE];
    let paramsStr = [type];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取字段字节长度
   * @memberOf Field
   * @return {number}字节长度 （int类型的Number）
   */
  async getFieldLength(): Promise<number> {
    let methodName = "getFieldLength"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置字段字节长度
   * @memberOf Field
   * @param {number} length 字节长度（int类型的Number）
   * @return {Promise<void>}
   */
  async setFieldLength(length: number): Promise<void> {
    let methodName = "setFieldLength"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [length];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取扩展字段信息
   * @memberOf Field
   * @return {Promise<ExtField>}扩展字段对象
   */
  async getExtField(): Promise<ExtField> {
    let methodName = "getExtField"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ExtField();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置扩展字段信息
   * @memberOf Field
   * @param fieldEx 扩展字段对象
   * @return {Promise<void>}
   */
  async setExtField(fieldEx: ExtField): Promise<void> {
    let methodName = "setExtField"
    let paramsTypeStr = [this.CLASS_EXT_FIELD];
    let paramsStr = [fieldEx.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 是否有扩展字段
   * @memberOf Field
   * @return {number} 非0/0 ：是/否
   */
  async hasExtField(): Promise<number> {
    let methodName = "hasExtField"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 删除扩展字段
   * @memberOf Field
   * @return {number} 大于0成功，否则失败
   */
  async deleteExtField() {
    let methodName = "deleteExtField"
    return await this.invoke(methodName, this.NUMBER);
  }
}
