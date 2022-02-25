/**
 * @content 要素类信息功能组件
 * @author fangqi 2021-10-13
 */

import IXClsInfo from './IXClsInfo';
/**
 * @class SFClsInfo
 * @description 要素类信息
 */
export default class SFClsInfo extends IXClsInfo {

  getClassName(): String {
    return this.CLASS_SFCLS_INFO;
  }

  /**
   * 构造一个新的 SFClsInfo 对象。
   * @memberOf SFClsInfo
   * @returns {Promise.<SFClsInfo>}
   */
  static async createInstance(): Promise<SFClsInfo> {
    let thisObj = new SFClsInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取简单要素类ID
   * @memberOf SFClsInfo
   * @return {Promise}要素类ID
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取简单要素类名称
   * @memberOf SFClsInfo
   * @return {Promise} 类名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取简单要素类类型
   * @memberOf SFClsInfo
   * @return {Promise}简单要素类类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置简单要素类名
   * @memberOf SFClsInfo
   * @param newVal 简单要素类名
   * @return {Promise} >0:成功；<=0:失败
   */
  async setName(newVal: String): Promise<number> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取类所有者
   * @memberOf SFClsInfo
   * @return {Promise} 类所有者
   */
  async getOwner(): Promise<String> {
    let methodName = "getOwner"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 取要素类所属要素数据集
   * @memberOf SFClsInfo
   * @return {Promise}要素数据集ID
   */
  async getdsID(): Promise<number> {
    let methodName = "getdsID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置要素类所属要素数据集
   * @memberOf SFClsInfo
   * @param newVal 要素数据集ID
   * @return {Promise} >0:成功；<=0:失败
   */
  async setdsID(newVal: number): Promise<number> {
    let methodName = "setdsID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取要素类所属几何网络
   * @memberOf SFClsInfo
   * @return {Promise}要素类所属几何网络
   */
  async getgNetID(): Promise<number> {
    let methodName = "getgNetID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置要素类所属几何网络
   * @memberOf SFClsInfo
   * @param newVal 几何网络
   * @return {Promise} >0:成功；<=0:失败
   */
  async setgNetID(newVal: number): Promise<number> {
    let methodName = "setgNetID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取类空间参照系
   * @memberOf SFClsInfo
   * @return {Promise}类空间参照系
   */
  async getsrID(): Promise<number> {
    let methodName = "getsrID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置类空间参照系
   * @memberOf SFClsInfo
   * @param newVal 类空间参照系
   * @return {Promise} >0:成功；<=0:失败
   */
  async setsrID(newVal: number): Promise<number> {
    let methodName = "setsrID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取要素类别名
   * @memberOf SFClsInfo
   * @return {Promise} 要素类别名
   */
  async getAliasName(): Promise<String> {
    let methodName = "getAliasName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置要素类别名
   * @memberOf SFClsInfo
   * @param newVal 要素类别名
   * @return {Promise} >0:成功；<=0:失败
   */
  async setAliasName(newVal: String): Promise<number> {
    let methodName = "setAliasName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取要素类模型名
   * @memberOf SFClsInfo
   * @return {Promise} 要素类模型名
   */
  async getModelName(): Promise<String> {
    let methodName = "getModelName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置要素类模型名
   * @memberOf SFClsInfo
   * @param newVal 要素类模型名
   * @return {Promise} >0:成功；<=0:失败
   */
  async setModelName(newVal: String): Promise<number> {
    let methodName = "setModelName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取子类型字段名称
   * @memberOf SFClsInfo
   * @return {Promise} 子类型字段名称
   */
  async getSubTypeField(): Promise<String> {
    let methodName = "getSubTypeField"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置子类型字段名称
   * @memberOf SFClsInfo
   * @param newVal 子类型字段名称
   * @return {Promise} >0:成功；<=0:失败
   */
  async setSubTypeField(newVal: String): Promise<number> {
    let methodName = "setSubTypeField"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取类几何约束类型
   * @memberOf SFClsInfo
   * @return {Promise}几何约束类型
   */
  async getfType() {
    let methodName = "getfType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取显示因子X
   * @memberOf SFClsInfo
   * @return {Promise} 显示因子X
   */
  async getScalex(): Promise<number> {
    let methodName = "getScalex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置显示因子X
   * @memberOf SFClsInfo
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
   * @memberOf SFClsInfo
   * @return {Promise} 显示因子Y
   */
  async getScaley(): Promise<number> {
    let methodName = "getScaley"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置显示因子Y
   * @memberOf SFClsInfo
   * @param newVal 显示因子Y
   * @return {Promise} >0:成功；<=0:失败
   */
  async setScaley(newVal: number): Promise<number> {
    let methodName = "setScaley"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
