/**
 * @content 注记类信息功能组件
 * @author fangqi 2021-10-13
 */

import IXClsInfo from "./IXClsInfo";

/**
 * @class AClsInfo
 * @description 注记类信息
 */
export default class AClsInfo extends IXClsInfo {

  getClassName(): String {
    return this.CLASS_ACLS_INFO;
  }

  /**
   * 构造一个新的 AClsInfo 对象。
   * @memberOf AClsInfo
   * @returns {Promise<AClsInfo>}
   */
  static async createInstance(): Promise<AClsInfo> {
    let thisObj = new AClsInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取注记类所属要素数据集
   * @memberOf AClsInfo
   * @return {Promise} 所属要素数据集
   */
  async getdsID(): Promise<number> {
    let methodName = "getdsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置注记类所属要素数据集
   * @memberOf AClsInfo
   * @param newVal 注记类所属要素数据集
   * @return {Promise} >0:成功；<=0:失败
   */
  async setdsID(newVal: number): Promise<number> {
    let methodName = "setdsID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取注记类空间参照
   * @memberOf AClsInfo
   * @return {Promise} 注记类空间参照
   */
  async getsrID(): Promise<number> {
    let methodName = "getsrID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置注记类空间参照
   * @memberOf AClsInfo
   * @param newVal 注记类空间参照
   * @return {Promise} >0:成功；<=0:失败
   */
  async setsrID(newVal: number): Promise<number> {
    let methodName = "setsrID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取注记类别名
   * @memberOf AClsInfo
   * @return {Promise} 注记类别名
   */
  async getAliasName(): Promise<String> {
    let methodName = "getAliasName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置注记类别名
   * @memberOf AClsInfo
   * @param newVal 注记类别名
   * @return {Promise} 成功：>0;失败:<=0
   */
  async setAliasName(name: String): Promise<number> {
    let methodName = "setAliasName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取注记类模式名
   * @memberOf AClsInfo
   * @return {Promise} 注记类模式名
   */
  async getModelName(): Promise<String> {
    let methodName = "getModelName"
    return await this.invoke(methodName, this.STRING);
  }
  /**
   * 设置注记类模式名
   * @memberOf AClsInfo
   * @param newVal 注记类模式名
   * @return {Promise} 成功：>0;失败:<=0
   */
  async setModelName(name: String): Promise<number> {
    let methodName = "setModelName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取注记类类型
   * @memberOf AClsInfo
   * @return {Promise}注记类类型
   */
  async getAnnType() {
    let methodName = "getAnnType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置注记类类型
   * @memberOf AClsInfo
   * @param newVal 注记类类型
   * @return {Promise} 成功：>0;失败:<=0
   */
  async setAnnType(newVal: any): Promise<number> {
    let methodName = "setAnnType"
    let paramsTypeStr = [this.ENUM + this.CLASS_ANN_TYPE];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取显示因子X
   * @memberOf AClsInfo
   * @return {Promise} 显示因子X
   */
  async getScalex(): Promise<number> {
    let methodName = "getScalex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置显示因子X
   * @memberOf AClsInfo
   * @param newVal 显示因子X
   * @return {Promise} >0:成功；<=0:失败
   */
  async setScalex(newVal: number): Promise<number> {
    let methodName = "setScalex"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取显示因子Y
   * @memberOf AClsInfo
   * @return {Promise} 显示因子Y
   */
  async getScaley(): Promise<number> {
    let methodName = "getScaley"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取显示因子Y
   * @memberOf AClsInfo
   * @param newVal 显示因子Y
   * @return {Promise} >0:成功；<=0:失败
   */
  async setscaley(newVal: number): Promise<number> {
    let methodName = "setscaley"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取子类型字段名称
   * @memberOf AClsInfo
   * @return {Promise} 子类型字段名称
   */
  async getsubTypeField(): Promise<String> {
    let methodName = "getsubTypeField"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置子类型字段名称
   * @memberOf AClsInfo
   * @param newVal 子类型字段名称
   * @return {Promise} 成功：>0;失败:<=0
   */
  async setsubTypeField(newVal: String): Promise<number> {
    let methodName = "setsubTypeField"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取类ID
   * @memberOf AClsInfo
   * @return {Promise} 类ID
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取类名称
   * @memberOf AClsInfo
   * @return {Promise} 类名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 取类类型
   * @memberOf AClsInfo
   * @return {Promise} 类类型
   */
  async getType(): Promise<String> {
    let methodName = "getType"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 写类名称
   * @memberOf AClsInfo
   * @param newVal 类名称
   * @return {Promise} 成功：>0;失败:<=0
   */
  async setName(name: String): Promise<number> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取类所有者
   * @memberOf AClsInfo
   * @return {Promise} 类所有者
   */
  async getOwner(): Promise<String> {
    let methodName = "getOwner"
    return await this.invoke(methodName, this.STRING);
  }

}
