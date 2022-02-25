/**
 * @content 椭球坐标系变换参数功能组件
 * @author fangqi 2021-8-24 
 */

import ObjectManager from "../components/ObjectManager";


/**
 * @class ElpTransParam
 * @description 椭球坐标系变换参数
 */
export default class ElpTransParam extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ELP_TRANS_PARAM;
  }

  /**
    * 构造一个新的 ElpTransParam 对象。
    * @memberOf ElpTransParam
    * @returns {Promise.<ElpTransParam>}
    */
  static async createInstance(): Promise<ElpTransParam> {
    let thisObj = new ElpTransParam();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取空间坐标系在地理数据库中的唯一标识
   * @memberOf ElpTransParam
   * @returns {Promise<String>}
   */
  async getTransName(): Promise<String> {
    let methodName = "getTransName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置转换名称
   * @memberOf ElpTransParam
   * @param {String} newVal 名称
   * @returns {Promise<void>}
   */
  async setTransName(newVal: String): Promise<void> {
    let methodName = "setTransName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<String>}
   */
  async getEquationX(): Promise<String> {
    let methodName = "getEquationX"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {String} newVal 
   * @returns {Promise<void>}
   */
  async setEquationX(newVal: String): Promise<void> {
    let methodName = "setEquationX"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<String>}
   */
  async getEquationY(): Promise<String> {
    let methodName = "getEquationY"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {String} newVal 
   * @returns {Promise<void>}
   */
  async setEquationY(newVal: String): Promise<void> {
    let methodName = "setEquationY"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<String>}
   */
  async getEquationZ(): Promise<String> {
    let methodName = "getEquationZ"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {String} newVal 
   * @returns {Promise<void>}
   */
  async setEquationZ(newVal: String): Promise<void> {
    let methodName = "setEquationZ"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取源坐标系索引(从0开始)
   * @memberOf ElpTransParam
   * @returns {Promise<number>}
   */
  async getInCord(): Promise<number> {
    let methodName = "getInCord"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置源坐标系索引(从0开始)
   * @memberOf ElpTransParam
   * @param {number} newVal 源坐标系索引
   * @returns {Promise<void>}
   */
  async setInCord(newVal: number): Promise<void> {
    let methodName = "setInCord"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输入数据单位
   * @memberOf ElpTransParam
   * @returns {Promise<number>}
   */
  async getInUnit(): Promise<number> {
    let methodName = "getInUnit"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置输入数据单位
   * @memberOf ElpTransParam
   * @param {number} newVal 输入数据单位
   * @returns {Promise<void>}
   */
  async setInUnit(newVal: number): Promise<void> {
    let methodName = "setInUnit"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取目的坐标系索引(从0开始)
   * @memberOf ElpTransParam
   * @returns {Promise<number>}
   */
  async getOutCord(): Promise<number> {
    let methodName = "getOutCord"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置目的坐标系索引(从0开始)
   * @memberOf ElpTransParam
   * @param {number} newVal 目的坐标系索引
   * @returns {Promise<void>}
   */
  async setOutCord(newVal: number): Promise<void> {
    let methodName = "setOutCord"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出数据单位
   * @memberOf ElpTransParam
   * @returns {Promise<number>}
   */
  async getOutUnit(): Promise<number> {
    let methodName = "getOutUnit"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置输出数据单位
   * @memberOf ElpTransParam
   * @param {number} newVal 输出数据单位
   * @returns {Promise<void>}
   */
  async setOutUnit(newVal: number): Promise<void> {
    let methodName = "setOutUnit"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取转换类型
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 0/1/2/3:三参数直角平移/七参数/微分/三参数经纬平移法
   */
  async getType(): Promise<number> {
    let methodName = "getType"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置转换类型
   * @memberOf ElpTransParam
   * @param {number} newVal 0/1/2/3:三参数直角平移/七参数/微分/三参数经纬平移法
   * @returns {Promise<void>}
   */
  async setType(newVal: number): Promise<void> {
    let methodName = "setType"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取长度单位
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getLenunit(): Promise<number> {
    let methodName = "getLenunit"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置长度单位
   * @memberOf ElpTransParam
   * @param {number} newVal 长度单位
   * @returns {Promise<void>}
   */
  async setLenunit(newVal: number): Promise<void> {
    let methodName = "setLenunit"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取角度单位
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getAngunit(): Promise<number> {
    let methodName = "getAngunit"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置角度单位
   * @memberOf ElpTransParam
   * @param {number} newVal 角度单位
   * @returns {Promise<void>}
   */
  async setAngunit(newVal: number): Promise<void> {
    let methodName = "setAngunit"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取三参数/七参数dx
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getDx(): Promise<number> {
    let methodName = "getDx"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置三参数/七参数dx
   * @memberOf ElpTransParam
   * @param {number} newVal 三参数/七参数dx
   * @returns {Promise<void>}
   */
  async setDx(newVal: number): Promise<void> {
    let methodName = "setDx"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取三参数/七参数dy
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getDy(): Promise<number> {
    let methodName = "getDy"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置设置三参数/七参数dy
   * @memberOf ElpTransParam
   * @param {number} newVal 设置三参数/七参数dy
   * @returns {Promise<void>}
   */
  async setDy(newVal: number): Promise<void> {
    let methodName = "setDy"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取三参数/七参数dz
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getDz(): Promise<number> {
    let methodName = "getDz"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置三参数/七参数dz
   * @memberOf ElpTransParam
   * @param {number} newVal 三参数/七参数dz
   * @returns {Promise<void>}
   */
  async setDz(newVal: number): Promise<void> {
    let methodName = "setDz"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取七参数wx
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getWx(): Promise<number> {
    let methodName = "getWx"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置七参数wx
   * @memberOf ElpTransParam
   * @param {number} newVal 七参数wx
   * @returns {Promise<void>}
   */
  async setWx(newVal: number): Promise<void> {
    let methodName = "setWx"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取七参数wy
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getWy(): Promise<number> {
    let methodName = "getWy"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置七参数wy
   * @memberOf ElpTransParam
   * @param {number} newVal 七参数wy
   * @returns {Promise<void>}
   */
  async setWy(newVal: number): Promise<void> {
    let methodName = "setWy"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取七参数wz
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getWz(): Promise<number> {
    let methodName = "getWz"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置七参数wz
   * @memberOf ElpTransParam
   * @param {number} newVal 七参数wz
   * @returns {Promise<void>}
   */
  async setWz(newVal: number): Promise<void> {
    let methodName = "setWz"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取七参数尺度因子
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getM(): Promise<number> {
    let methodName = "getM"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置七参数尺度因子
   * @memberOf ElpTransParam
   * @param {number} newVal 七参数尺度因子
   * @returns {Promise<void>}
   */
  async setM(newVal: number): Promise<void> {
    let methodName = "setM"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取由求系数公式算出的第二套系数
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getS2(): Promise<number> {
    let methodName = "getS2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置由求系数公式算出的第二套系数
   * @memberOf ElpTransParam
   * @param {number} newVal 系数
   * @returns {Promise<void>}
   */
  async setS2(newVal: number): Promise<void> {
    let methodName = "setS2"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getA2(): Promise<number> {
    let methodName = "getA2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {number} newVal 
   * @returns {Promise<void>}
   */
  async setA2(newVal: number): Promise<void> {
    let methodName = "setA2"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getF2(): Promise<number> {
    let methodName = "getF2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {number} newVal 
   * @returns {Promise<void>}
   */
  async setF2(newVal: number): Promise<void> {
    let methodName = "setF2"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getRes1(): Promise<number> {
    let methodName = "getRes1"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {number} newVal 
   * @returns {Promise<void>}
   */
  async setRes1(newVal: number): Promise<void> {
    let methodName = "setRes1"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @returns {Promise<number>} 
   */
  async getRes2(): Promise<number> {
    let methodName = "getRes2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf ElpTransParam
   * @param {number} newVal 
   * @returns {Promise<void>}
   */
  async setRes2(newVal: number): Promise<void> {
    let methodName = "setRes2"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
