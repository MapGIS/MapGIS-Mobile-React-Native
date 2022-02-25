/**
 * @content 点图形信息功能组件
 * @author fangqi 2021-09-09
 */

import ConvertUtil from '../components/ConvertUtil';
import GeomInfo from './GeomInfo';

/**
 * @class PntInfo
 */
export default class PntInfo extends GeomInfo {

  getClassName(): String {
    return this.CLASS_PNT_INFO;
  }

  /**
   * 构造一个新的 PntInfo 对象
   * @memberOf PntInfo
   * @return {Promise<PntInfo>}
   */
  static async createInstance(): Promise<PntInfo> {
    let thisObj = new PntInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 PntInfo 对象
   * @memberOf PntInfo
   * @param ang 角度
   * @param backClr 覆盖的背景颜色
   * @param backExp 范围扩展
   * @param fillFlg 自动压背景颜色标志
   * @param height 高度
   * @param libId 库编号
   * @param outClr1 可变颜色1
   * @param outClr2 可变颜色2
   * @param outClr3 可变颜色3
   * @param outPenW1 外部笔宽1
   * @param outPenW2 外部笔宽2
   * @param outPenW3 外部笔宽3
   * @param ovprnt 覆盖方式
   * @param symId 符号编号
   * @param width 宽度
   * @return {Promise<PntInfo>}
   */
  static async createInstanceByParam(ang: number, backClr: String, backExp: number, fillFlg: number, height: number, libId: number, outClr1: number, outClr2: number, outClr3: number, outPenW1: number,
    outPenW2: number, outPenW3: number, ovprnt: number, symId: number, width: number): Promise<PntInfo> {
    let thisObj = new PntInfo();
    let initParamsType = [thisObj.DOUBLE, thisObj.INT, thisObj.DOUBLE, thisObj.SHORT, thisObj.DOUBLE, thisObj.SHORT, thisObj.INT, thisObj.INT, thisObj.INT, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.SHORT, thisObj.INT, thisObj.DOUBLE];
    let initParamsStr = [ang, ConvertUtil.colorRGBAToNumber(backClr), backExp, fillFlg, height, libId, outClr1, outClr2, outClr3, outPenW1, outPenW2, outPenW3, ovprnt, symId, width];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取库编号
   * @memberOf PntInfo
   * @return {Promise}库编号
   */
  async getLibID(): Promise<number> {
    let methodName = "getLibID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置库编号
   * @memberOf PntInfo
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
   * @memberOf PntInfo
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
   * 获取符号编号
   * @memberOf PntInfo
   * @return {Promise}符号编号
   */
  async getSymID(): Promise<number> {
    let methodName = "getSymID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置符号编号
   * @memberOf PntInfo
   * @param newVal 符号编号
   * @return {Promise<void>}
   */
  async setSymID(newVal: number): Promise<void> {
    let methodName = "setSymID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取高度
   * @memberOf PntInfo
   * @return {Promise}高度
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置高度
   * @memberOf PntInfo
   * @param newVal 高度
   * @return {Promise<void>}
   */
  async setHeight(newVal: number): Promise<void> {
    let methodName = "setHeight"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取宽度
   * @memberOf PntInfo
   * @return {Promise}宽度
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置宽度
   * @memberOf PntInfo
   * @param newVal 宽度
   * @return {Promise<void>}
   */
  async setWidth(newVal: number): Promise<void> {
    let methodName = "setWidth"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取角度
   * @memberOf PntInfo
   * @return {Promise}角度
   */
  async getAngle(): Promise<number> {
    let methodName = "getAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置角度
   * @memberOf PntInfo
   * @param newVal 角度
   * @return {Promise<void>}
   */
  async setAngle(newVal: number): Promise<void> {
    let methodName = "setAngle"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取外部笔宽1
   * @memberOf PntInfo
   * @return {Promise}外部笔宽1
   */
  async getOutPenW1(): Promise<number> {
    let methodName = "getOutPenW1"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置外部笔宽1
   * @memberOf PntInfo
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
   * @memberOf PntInfo
   * @return {Promise}外部笔宽2
   */
  async getOutPenW2(): Promise<number> {
    let methodName = "getOutPenW2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置外部笔宽2
   * @memberOf PntInfo
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
   * @memberOf PntInfo
   * @return {Promise}外部笔宽3
   */
  async getOutPenW3(): Promise<number> {
    let methodName = "getOutPenW3"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置外部笔宽3
   * @memberOf PntInfo
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
   * @memberOf PntInfo
   * @return {Promise<Number>}可变颜色1
   */
  async getOutClr1(): Promise<number> {
    let methodName = "getOutClr1"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置可变颜色1
   * @memberOf PntInfo
   * @param {Number}  color 可变颜色1
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
   * @memberOf PntInfo
   * @return {Promise<Number>}可变颜色2
   */
  async getOutClr2(): Promise<number> {
    let methodName = "getOutClr2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置可变颜色2
   * @memberOf PntInfo
   * @param {Number} color 可变颜色2
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
   * @memberOf PntInfo
   * @return {Promise<Number>}可变颜色3
   */
  async getOutClr3(): Promise<number> {
    let methodName = "getOutClr3"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置可变颜色3
   * @memberOf PntInfo
   * @param {Number} color 可变颜色3
   * @return {Promise<void>}
   */
  async setOutClr3(color: number): Promise<void> {
    let methodName = "setOutClr3"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取自动压背景颜色标志
   * @memberOf PntInfo
   * @return {Promise}自动压背景颜色标志
   */
  async getFillFlg(): Promise<number> {
    let methodName = "getFillFlg"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置自动压背景颜色标志
   * @memberOf PntInfo
   * @param newVal 自动压背景颜色标志
   * @return {Promise<void>}
   */
  async setFillFlg(newVal: number): Promise<void> {
    let methodName = "setFillFlg"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取范围扩展
   * @memberOf PntInfo
   * @return {Promise}范围扩展
   */
  async getBackExp(): Promise<number> {
    let methodName = "getBackExp"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置范围扩展
   * @memberOf PntInfo
   * @param newVal 范围扩展
   * @return {Promise<void>}
   */
  async setBackExp(newVal: number): Promise<void> {
    let methodName = "setBackExp"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取覆盖的背景颜色
   * @memberOf PntInfo
   * @return {Promise<Number>}覆盖的背景颜色
   */
  async getBackClr(): Promise<String> {
    let methodName = "getBackClr"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置覆盖的背景颜色
   * @memberOf PntInfo
   * @param {Number} color 覆盖的背景颜色
   * @return {Promise<void>}
   */
  async setBackClr(color: String): Promise<void> {
    let methodName = "setBackClr"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 克隆几何图形信息
   * @memberOf LinInfo
   * @return {Promise<GeomInfo>} 几何图形信息
   */
  async clone(): Promise<PntInfo> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PntInfo();
    obj.ObjId = ObjId;
    return obj;
  }

}
