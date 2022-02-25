/**
 * @content 线图形信息功能组件
 * @author fangqi 2021-09-12
 */

import GeomInfo from './GeomInfo';

/**
 * @class LinInfo
 */
export default class LinInfo extends GeomInfo {

  getClassName(): String {
    return this.CLASS_LIN_INFO;
  }

  /**
   * 构造一个新的 LinInfo 对象
   * @memberOf LinInfo
   * @return {Promise<LinInfo>}
   */
  static async createInstance(): Promise<LinInfo> {
    let thisObj = new LinInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 LinInfo 对象
   * @memberOf LinInfo
   * @param adjustFlg 线型调整方法
   * @param headType 线头类型
   * @param joinType 拐角类型
   * @param libId 库编号
   * @param linStyId 线型号
   * @param makeMethod 线型生成方法
   * @param outClr1 可变颜色1
   * @param outClr2 可变颜色2
   * @param outClr3 可变颜色3
   * @param outPenW1 外部笔宽1
   * @param outPenW2 外部笔宽2
   * @param outPenW3 外部笔宽3
   * @param ovprnt 覆盖方式
   * @param xScale X系数
   * @param yScale Y系数
   * @return {Promise<LinInfo>}
   */
  static async createInstanceByParam(adjustFlg: any, headType: any, joinType: any, libId: number, linStyId: number, makeMethod: any, outClr1: number, outClr2: number, outClr3: number,
    outPenW1: number, outPenW2: number, outPenW3: number, ovprnt: number, xScale: number, yScale: number): Promise<LinInfo> {
    let thisObj = new LinInfo();
    let initParamsType = [thisObj.ENUM + thisObj.CLASS_LIN_ADJUST_TYPE, thisObj.ENUM + thisObj.CLASS_LIN_HEAD_TYPE, thisObj.ENUM + thisObj.CLASS_LIN_JOINT_TYPE, thisObj.SHORT, thisObj.INT, , thisObj.ENUM + thisObj.CLASS_LIN_STYLE_MAKE_TYPE, thisObj.INT, thisObj.INT, thisObj.INT, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.SHORT, thisObj.DOUBLE, thisObj.DOUBLE];
    let initParamsStr = [adjustFlg, headType, joinType, libId, linStyId, makeMethod, outClr1, outClr2, outClr3, outPenW1, outPenW2, outPenW3, ovprnt, xScale, yScale];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取库编号
   * @memberOf LinInfo
   * @return {Promise}库编号
   */
  async getLibID(): Promise<number> {
    let methodName = "getLibID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置库编号
   * @memberOf LinInfo
   * @param newVal 库编号
   * @return {Promise<void>}
   */
  async setLibID(newVal: number): Promise<void> {
    let methodName = "setLibID"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取覆盖方式
   * @memberOf LinInfo
   * @return {Promise}覆盖方式
   */
  async getOvprnt(): Promise<boolean> {
    let methodName = "getOvprnt"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置覆盖方式
   * @memberOf PntInfo
   * @param newVal 覆盖方式
   * @return {Promise<void>}
   */
  async setOvprnt(newVal: boolean): Promise<void> {
    let methodName = "setOvprnt"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线型号
   * @memberOf LinInfo
   * @return {Promise}线型号
   */
  async getLinStyID(): Promise<number> {
    let methodName = "getLinStyID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置线型号
   * @memberOf LinInfo
   * @param newVal 线型号
   * @return {Promise<void>}
   */
  async setLinStyID(newVal: number): Promise<void> {
    let methodName = "setLinStyID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取外部笔宽1
   * @memberOf LinInfo
   * @return {Promise}外部笔宽1
   */
  async getOutPenW1(): Promise<number> {
    let methodName = "getOutPenW1"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置外部笔宽1
   * @memberOf LinInfo
   * @param newVal 外部笔宽1
   * @return {Promise<void>}
   */
  async setOutPenW1(newVal: number): Promise<void> {
    let methodName = "setOutPenW1"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取外部笔宽2
   * @memberOf LinInfo
   * @return {Promise}外部笔宽2
   */
  async getOutPenW2(): Promise<number> {
    let methodName = "getOutPenW2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置外部笔宽2
   * @memberOf LinInfo
   * @param newVal 外部笔宽2
   * @return {Promise<void>}
   */
  async setOutPenW2(newVal: number): Promise<void> {
    let methodName = "setOutPenW2"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取外部笔宽3
   * @memberOf LinInfo
   * @return {Promise}外部笔宽3
   */
  async getOutPenW3(): Promise<number> {
    let methodName = "getOutPenW3"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置外部笔宽3
   * @memberOf LinInfo
   * @param newVal 外部笔宽3
   * @return {Promise<void>}
   */
  async setOutPenW3(newVal: number): Promise<void> {
    let methodName = "setOutPenW3"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取可变颜色1
   * @memberOf LinInfo
   * @return {String}可变颜色1
   */
  async getOutClr1(): Promise<number> {
    let methodName = "getOutClr1"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置可变颜色1
   * @memberOf LinInfo
   * @param {Number} color 可变颜色1
   * @return {Promise<void>}
   */
  async setOutClr1(color: number): Promise<void> {
    let methodName = "setOutClr1"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取可变颜色2
   * @memberOf LinInfo
   * @return {Number}可变颜色2
   */
  async getOutClr2(): Promise<number> {
    let methodName = "getOutClr2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置可变颜色2
   * @memberOf LinInfo
   * @param {Number} color  可变颜色2
   * @return {Promise<void>}
   */
  async setOutClr2(color: number): Promise<void> {
    let methodName = "setOutClr2"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取可变颜色3
   * @memberOf LinInfo
   * @return {Number}可变颜色3
   */
  async getOutClr3(): Promise<number> {
    let methodName = "getOutClr3"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置可变颜色3
   * @memberOf LinInfo
   * @param {Number} color  可变颜色3
   * @return {Promise<void>}
   */
  async setOutClr3(color: number): Promise<void> {
    let methodName = "setOutClr3"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线头类型
   * @memberOf LinInfo
   * @return {Promise}线头类型
   */
  async getHeadType() {
    let methodName = "getHeadType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置线头类型
   * @memberOf LinInfo
   * @param newVal 线头类型
   * @return {Promise<void>}
   */
  async setHeadType(newVal: any): Promise<void> {
    let methodName = "setHeadType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LIN_HEAD_TYPE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取拐角类型
   * @memberOf LinInfo
   * @return {Promise}拐角类型
   */
  async getJoinType() {
    let methodName = "getJoinType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置拐角类型
   * @memberOf LinInfo
   * @param newVal 拐角类型
   * @return {Promise<void>}
   */
  async setJoinType(newVal: any): Promise<void> {
    let methodName = "setJoinType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LIN_JOINT_TYPE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线型调整方法
   * @memberOf LinInfo
   * @return {Promise}线型调整方法
   */
  async getAdjustFlg() {
    let methodName = "getAdjustFlg"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置线型调整方法
   * @memberOf LinInfo
   * @param newVal 线型调整方法
   * @return {Promise<void>}
   */
  async setAdjustFlg(newVal: any): Promise<void> {
    let methodName = "setAdjustFlg"
    let paramsTypeStr = [this.ENUM + this.CLASS_LIN_ADJUST_TYPE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线型生成方法
   * @memberOf LinInfo
   * @return {Promise}线型生成方法
   */
  async getMakeMethod() {
    let methodName = "getMakeMethod"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置线型生成方法
   * @memberOf LinInfo
   * @param newVal 线型生成方法
   * @return {Promise<void>}
   */
  async setMakeMethod(newVal: any): Promise<void> {
    let methodName = "setMakeMethod"
    let paramsTypeStr = [this.ENUM + this.CLASS_LIN_STYLE_MAKE_TYPE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取X系数
   * @memberOf LinInfo
   * @return {Promise}X系数
   */
  async getXScale(): Promise<number> {
    let methodName = "getXScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置X系数
   * @memberOf LinInfo
   * @param newVal X系数
   * @return {Promise<void>}
   */
  async setXScale(newVal: number): Promise<void> {
    let methodName = "setXScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Y系数
   * @memberOf LinInfo
   * @return {Promise}Y系数
   */
  async getYScale(): Promise<number> {
    let methodName = "getYScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y系数
   * @memberOf LinInfo
   * @param newVal Y系数
   * @return {Promise<void>}
   */
  async setYScale(newVal: number): Promise<void> {
    let methodName = "setYScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 克隆几何图形信息
   * @memberOf LinInfo
   * @return {Promise<GeomInfo>} 几何图形信息
   */
  async clone(): Promise<LinInfo> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LinInfo();
    obj.ObjId = ObjId;
    return obj;
  }
}
