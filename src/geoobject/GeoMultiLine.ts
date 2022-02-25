/**
 * @content 用于对多条线段的几何功能组件
 * @author fangqi 2021-09-09
 */
import type Dots from './Dots';
import GeoLine from './GeoLine';
import Geometry from './Geometry';
import type IntList from './IntList';
import type SRefData from './SRefData';

/**
 * @class GeoMultiLine
 */
export default class GeoMultiLine extends Geometry {

  getClassName(): String {
    return this.CLASS_GEO_MULTI_LINE;
  }

  /**
   * 构造一个新的 GeoMultiLine 对象
   * @memberOf GeoMultiLine
   * @return {Promise<GeoMultiLine>}
   */
  static async createInstance(): Promise<GeoMultiLine> {
    let thisObj = new GeoMultiLine();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象的类型
   * @memberOf GeoMultiLine
   * @return {Promise}几何对象类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取几何对象的维数
   * @memberOf GeoMultiLine
   * @return {Promise}维数
   */
  async getDimension() {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 删除线
   * @memberOf GeoMultiLine
   * @param index 待删除线序号
   * @return {Promise}删除成功返回1，失败返回0
   */
  async del(index: number): Promise<number> {
    let methodName = "del"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取线数目
   * @memberOf GeoMultiLine
   * @return {Promise}线的条数
   */
  async getNum(): Promise<number> {
    let methodName = "getNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加一条线操作
   * @memberOf GeoMultiLine
   * @param line 待添加的线对象
   * @return {Promise}添加成功返回1，失败返回0
   */
  async append(line: GeoLine): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_GEO_LINE];
    let paramsStr = [line.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新线
   * @memberOf GeoMultiLine
   * @param index 待更新线的序号
   * @param line 要更新的线对象
   * @return {Promise}更新成功返回1，失败返回0
   */
  async update(index: number, line: GeoLine): Promise<number> {
    let methodName = "update"
    let paramsTypeStr = [this.LONG, this.CLASS_GEO_LINE];
    let paramsStr = [index, line.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 取线类型
   * @memberOf GeoMultiLine
   * @param index 待取线的类型
   * @return {Promise}线类型
   */
  async getLineType(index: number) {
    let methodName = "getLineType"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ENUM);
  }

  /**
   * 按序号取一条线
   * @memberOf GeoMultiLine
   * @param index 待取线的序号
   * @return {Promise<GeoLine>}获取的线对象
   */
  async getLine(index: number): Promise<GeoLine> {
    let methodName = "getLine"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GeoLine();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置点序列来构建多线
   * @memberOf GeoMultiLine
   * @param dots 所有的点序号
   * @param iNumList 每一条线的点个数列表
   * @return {Promise}更新成功返回1，失败返回0
   */
  async setDots(dots: Dots, iNumList: IntList): Promise<number> {
    let methodName = "setDots"
    let paramsTypeStr = [this.CLASS_DOTS, this.CLASS_INT_LIST];
    let paramsStr = [dots.ObjId, iNumList.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 计算线实地长度
   * @memberOf GeoMultiLine
   * @param sRef 投影系参数
   * @return {Promise}实地长度
   */
  async calLengthOfSRef(sRef: SRefData): Promise<number> {
    let methodName = "calLength"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRef.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 计算线平面长度
   * @memberOf GeoMultiLine
   * @return {Promise}平面长度
   */
  async calLength(): Promise<number> {
    let methodName = "calLength"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 将坐标转换为字符串
   * @memberOf GeoMultiLine
   * @return {Promise}转换后的字符串
   */
  async toString(): Promise<String> {
    let methodName = "toString"
    return await this.invoke(methodName, this.STRING);
  }

}
