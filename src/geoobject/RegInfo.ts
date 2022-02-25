/**
 * @content 线图形信息功能组件
 * @author fangqi 2021-09-12
 */
import GeomInfo from './GeomInfo';

/**
 * @class RegInfo
 */
export default class RegInfo extends GeomInfo {

  getClassName(): String {
    return this.CLASS_REG_INFO;
  }

  /**
   * 构造一个新的 RegInfo 对象
   * @memberOf RegInfo
   * @return {Promise<RegInfo>}
   */
  static async createInstance(): Promise<RegInfo> {
    let thisObj = new RegInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 RegInfo 对象
   * @memberOf RegInfo
   * @param ang 图案角度
   * @param endClr 结束填充色
   * @param fillClr 区域填充色
   * @param fillMode 填充模式
   * @param fullPatFlg 是否需要完整图案填充
   * @param libId 库编号
   * @param outPenW 图案笔宽
   * @param ovprnt 覆盖方式
   * @param patCls 图案颜色
   * @param patId 符号编号
   * @param patHeight 图案高
   * @param patWidth 图案宽
   * @return {Promise<RegInfo>}
   */
  static async createInstanceByParam(ang: number, endClr: number, fillClr: number, fillMode: number, fullPatFlg: number, libId: number, outPenW: number, ovprnt: number, patCls: number, patId: number,
    patHeight: number, patWidth: number): Promise<RegInfo> {
    let thisObj = new RegInfo();
    let initParamsType = [thisObj.DOUBLE, thisObj.INT, thisObj.INT, thisObj.SHORT, thisObj.SHORT, thisObj.SHORT, thisObj.DOUBLE, thisObj.SHORT, thisObj.INT, thisObj.INT, thisObj.DOUBLE, thisObj.DOUBLE];
    let initParamsStr = [ang, endClr, fillClr, fillMode, fullPatFlg, libId, outPenW, ovprnt, patCls, patId, patHeight, patWidth];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取库编号
   * @memberOf RegInfo
   * @return {Promise}库编号
   */
  async getLibID(): Promise<number> {
    let methodName = "getLibID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置库编号
   * @memberOf RegInfo
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
   * @memberOf RegInfo
   * @return {Promise}覆盖方式
   */
  async getOvprnt(): Promise<boolean> {
    let methodName = "getOvprnt"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否需要完整图案填充
   * @memberOf RegInfo
   * @param newVal 是否需要完整图案填充
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
   * @memberOf RegInfo
   * @return {Promise}符号编号
   */
  async getPatID(): Promise<number> {
    let methodName = "getPatID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置符号编号
   * @memberOf RegInfo
   * @param newVal 符号编号
   * @return {Promise<void>}
   */
  async setPatID(newVal: number): Promise<void> {
    let methodName = "setPatID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取填充模式
   * @memberOf RegInfo
   * @return {Promise}填充模式
   */
  async getFillMode(): Promise<number> {
    let methodName = "getFillMode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置填充模式
   * @memberOf RegInfo
   * @param newVal 填充模式
   * @return {Promise<void>}
   */
  async setFillMode(newVal: number): Promise<void> {
    let methodName = "setFillMode"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取区域填充色
   * @memberOf RegInfo
   * @return {Promise<Number>}区域填充色
   */
  async getFillClr(): Promise<number> {
    let methodName = "getFillClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置区域填充色
   * @memberOf RegInfo
   * @param {Number} color 区域填充色
   * @return {Promise<void>}
   */
  async setFillClr(color: number): Promise<void> {
    let methodName = "setFillClr"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取结束填充色
   * @memberOf RegInfo
   * @return {Promise<Number>}结束填充色
   */
  async getEndClr(): Promise<number> {
    let methodName = "getEndClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置结束填充色
   * @memberOf RegInfo
   * @param {Number} color 结束填充色
   * @return {Promise<void>}
   */
  async setEndClr(color: number): Promise<void> {
    let methodName = "setEndClr"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图案高
   * @memberOf RegInfo
   * @return {Promise}图案高
   */
  async getPatHeight(): Promise<number> {
    let methodName = "getPatHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图案高
   * @memberOf RegInfo
   * @param newVal 图案高
   * @return {Promise<void>}
   */
  async setPatHeight(newVal: number): Promise<void> {
    let methodName = "setPatHeight"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图案宽
   * @memberOf RegInfo
   * @return {Promise}图案宽
   */
  async getPatWidth(): Promise<number> {
    let methodName = "getPatWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图案宽
   * @memberOf RegInfo
   * @param newVal 图案宽
   * @return {Promise<void>}
   */
  async setPatWidth(newVal: number): Promise<void> {
    let methodName = "setPatWidth"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图案角度
   * @memberOf RegInfo
   * @return {Promise}图案角度
   */
  async getAngle(): Promise<number> {
    let methodName = "getAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图案角度
   * @memberOf RegInfo
   * @param newVal 图案角度
   * @return {Promise<void>}
   */
  async setAngle(newVal: number): Promise<void> {
    let methodName = "setAngle"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图案颜色
   * @memberOf RegInfo
   * @return {Promise<Number>}图案颜色
   */
  async getPatClr(): Promise<number> {
    let methodName = "getPatClr"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图案颜色
   * @memberOf RegInfo
   * @param {Number} color 图案颜色
   * @return {Promise<void>}
   */
  async setPatClr(color: number): Promise<void> {
    let methodName = "setPatClr"
    let paramsTypeStr = [this.INT];
    let paramsStr = [color];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图案笔宽
   * @memberOf RegInfo
   * @return {Promise}图案笔宽
   */
  async getOutPenW(): Promise<number> {
    let methodName = "getOutPenW"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图案笔宽
   * @memberOf RegInfo
   * @param newVal 图案笔宽
   * @returns {Promise<void>}
   */
  async setOutPenW(newVal: number): Promise<void> {
    let methodName = "setOutPenW"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否需要完整图案填充
   * @memberOf RegInfo
   * @return {Promise}是否需要完整图案填充
   */
  async getFullPatFlg(): Promise<number> {
    let methodName = "getFullPatFlg"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置是否需要完整图案填充
   * @memberOf RegInfo
   * @param newVal 是否需要完整图案填充
   * @returns {Promise<void>}
   */
  async setFullPatFlg(newVal: number): Promise<void> {
    let methodName = "setFullPatFlg"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 克隆几何图形信息
   * @memberOf RegInfo
   * @return {Promise<GeomInfo>} 几何图形信息
   */
  async clone(): Promise<RegInfo> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new RegInfo();
    obj.ObjId = ObjId;
    return obj;
  }
}
