/**
 * @content 记录功能组件
 * @author fangqi 2021-09-16
 */

import ObjectManager from '../components/ObjectManager';
import Fields from './Fields';

/**
 * @class Record
 * @description 记录
 */
export default class Record extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RECORD;
  }

  /**
   * 构造一个新的 Record 对象。
   * @memberOf Record
   * @returns {Promise.<Record>}
   */
  static async createInstance(): Promise<Record> {
    let thisObj = new Record();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  // /**
  //  * 根据字段索引取字段值
  //  * @memberOf Record
  //  * @param fldIndex 字段索引
  //  * @return {Promise<Field>}字段值
  //  */
  // async getFieldValByIndex(fldIndex: number): Promise<Object> {
  //   let methodName = "getFieldVal"
  //   let paramsTypeStr = [this.SHORT];
  //   let paramsStr = [fldIndex];
  //   let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
  //   let obj = new Object();
  //   // obj.ObjId = ObjId;
  //   return obj;
  // }

  // /**
  //  * 根据字段名取字段值
  //  * @memberOf Record
  //  * @param fldName 字段名
  //  * @return {Promise<String>}字段值
  //  */
  // async getFieldValByName(fldName: String): Promise<Object> {
  //   let methodName = "getFieldVal"
  //   let paramsTypeStr = [this.STRING];
  //   let paramsStr = [fldName];
  //   let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
  //   let obj = new Object();
  //   // obj.ObjId = ObjId;
  //   return obj;
  // }

  /**
   * 根据字段索引设置字段值，暂时只支持FieldType.fldStr\fldFloat\fldDouble\fldLong\fldInt64\fldFloat\fldShort\fldTimeStamp\fldDate\fldTime类型
   * <br/>
   * 注：fldTimeStamp传递数值的时间戳；fldTime\fldDate可直接传递JS的Date对象
   * @memberOf Record
   * @param {number} fldIndex 字段索引
   * @param {number|String|Object} 字段值(Object为Date)
   * @return {Promise<number>}大于0成功，否则失败
   * 
   */
  async setFieldValByIndex(fldIndex: number, newVal:any): Promise<number> {
    let methodName = "setFieldVal"
    let paramsTypeStr = [this.SHORT, this.OBJID];
    let paramsStr = [fldIndex, newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据字段名设置字段值，暂时只支持FieldType.fldStr\fldFloat\fldDouble\fldLong\fldInt64\fldFloat\fldShort\fldTimeStamp\fldDate\fldTime类型
   * <br/>
   * 注：fldTimeStamp传递数值的时间戳；fldTime\fldDate可直接传递JS的Date对象
   * @memberOf Record
   * @param {String} fldName 字段名
   * @param {number|String|Object} newVal 字段值(Object为Date)
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setFieldValByName(fldName: String, newVal:any): Promise<number> {
    let methodName = "setFieldVal"
    let paramsTypeStr = [this.STRING, this.OBJID];
    let paramsStr = [fldName, newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取字段值字符串
   * @memberOf Record
   * @param fldIndex 字段索引
   * @param newVal 字符串值
   * @return {Promise<number>}大于0成功，否则失败
   */
  async getFieldToStrByIndex(fldIndex: number): Promise<String> {
    let methodName = "getFieldToStr"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [fldIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 获取字段值字符串
   * @memberOf Record
   * @param fldIndex 字段索引
   * @param newVal 字符串值
   * @return {Promise<number>}大于0成功，否则失败
   */
  async getFieldToStrByName(fldName: String): Promise<String> {
    let methodName = "getFieldToStr"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 将字符串设置为字段值
   * @memberOf Record
   * @param fldIndex 字段索引
   * @param newVal 字符串值
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setFieldFromStrByIndex(fldIndex: number, newVal: String): Promise<number> {
    let methodName = "setFieldFromStr"
    let paramsTypeStr = [this.SHORT, this.STRING];
    let paramsStr = [fldIndex, newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 将字符串设置为字段值
   * @memberOf Record
   * @param fldName 字段名
   * @param newVal 字符串值
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setFieldFromStrByName(fldName: String, newVal: String): Promise<number> {
    let methodName = "setFieldFromStr"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [fldName, newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 判断字段值是否为NULL
   * @memberOf Record
   * @param fldIndex 字段索引
   * @return {Promise<number>}非0/0 ：是/否
   */
  async isFieldNULLByIndex(fldIndex: number): Promise<number> {
    let methodName = "isFieldULL"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [fldIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 判断字段值是否为NULL
   * @memberOf Record
   * @param fldName 字段名
   * @return {Promise<number>}非0/0 ：是/否
   */
  async isFieldNULLByName(fldName: String): Promise<number> {
    let methodName = "isFieldNULL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置字段值为NULL
   * @memberOf Record
   * @param fldIndex 字段索引
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setFieldNULLByIndex(fldIndex: number): Promise<number> {
    let methodName = "setFieldNULL"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [fldIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置字段值为NULL
   * @memberOf Record
   * @param fldName 字段名
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setFieldNULLByName(fldName: String): Promise<number> {
    let methodName = "setFieldNULL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置所有字段值为NULL
   * @memberOf Record
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setAllFieldNULL(): Promise<number> {
    let methodName = "setAllFieldNULL"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取字段类型
   * @memberOf Record
   * @param fldIndex 字段索引
   * @return {Promise<number>}字段类型
   */
  async getFieldTypeByIndex(fldIndex: number) {
    let methodName = "getFieldType"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [fldIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 获取字段类型
   * @memberOf Record
   * @param fldName 字段名
   * @return {Promise<number>}字段类型
   */
  async getFieldTypeByName(fldName: number) {
    let methodName = "getFieldType"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 获取属性结构
   * @memberOf Record
   * @return {Promise<Fields>}Fields对象
   */
  async getFields(): Promise<Fields> {
    let methodName = "getFields"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Fields();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置属性结构
   * @memberOf Record
   * @param Flds Fields对象
   * @return {Promise<number>}大于0成功，否则失败
   */
  async setFields(Flds: Fields): Promise<number> {
    let methodName = "setFields"
    let paramsTypeStr = [this.CLASS_FIELDS];
    let paramsStr = [Flds.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 释放缓冲区 如果调用SetFldValue设置Blob或者Binary类型的字段值，则必须调用该函数释放内存空间
   * @memberOf Record
   * @return  {Promise<void>}
   */
  async releaseBuffer(): Promise<void> {
    let methodName = "releaseBuffer"
    await this.invoke(methodName, this.VOID);
  }
}
