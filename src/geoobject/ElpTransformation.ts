/**
 * @content 椭球变换对象功能组件
 * @author fangqi 2021-10-13
 */
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import ElpParam from './ElpParam';
import ElpTransParam from './ElpTransParam';
import type Pnt3Struct from './Pnt3Struct';
/**
 * @class ElpTransformation
 */
export default class ElpTransformation extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ELP_TRANSFORMATION;
  }

  /**
   * 获取椭球个数
   * @memberOf ElpTransformation
   * @return {Promise.<Number>}  椭球个数
   */
  static async getElpCount(): Promise<number> {
    let thisObj = new ElpTransformation();
    let methodName = "getElpCount"
    return await thisObj.invoke(methodName, thisObj.NUMBER);
  }

  /**
   * 根据椭球索引，获取椭球参数
   * @memberOf ElpTransformation
   * @param elpIndex 椭球索引, elpIndex从1开始
   * @return {Promise.<ElpParam>} 椭球参数对象
   */
  static async getElpParamByIndex(elpIndex: number): Promise<ElpParam> {
    let thisObj = new ElpTransformation();
    let methodName = "getElpParam"
    let paramsTypeStr = [thisObj.INT];
    let paramsStr = [elpIndex];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ElpParam();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据椭球名称，获取椭球参数
   * @memberOf ElpTransformation
   * @param name 椭球名称
   * @return {Promise.<ElpParam>} 成功返回椭球参数对象，失败返回空
   */
  static async getElpParamByName(name: String): Promise<ElpParam> {
    let thisObj = new ElpTransformation();
    let methodName = "getElpParam"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [name];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ElpParam();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据椭球索引，设置或替换椭球参数（不永久保存）
   * @memberOf ElpTransformation
   * @param elpIndex 椭球索引, elpIndex从1开始
   * @param param 椭球参数
   * @return {Promise.<void>}
   */
  static async setElpParam(elpIndex: number, param: ElpParam): Promise<void> {
    let thisObj = new ElpTransformation();
    let methodName = "setElpParam"
    let paramsTypeStr = [thisObj.INT, thisObj.CLASS_ELP_PARAM];
    let paramsStr = [elpIndex, param.ObjId];
    await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.VOID);
  }

  /**
   * 椭球坐标系变换参数对象个数
   * @memberOf ElpTransformation
   * @return {Promise.<Number>} 椭球坐标系变换参数个数
   */
  static async getElpTransParamCount(): Promise<number> {
    let thisObj = new ElpTransformation();
    let methodName = "getElpTransParamCount"
    return await thisObj.invoke(methodName, thisObj.NUMBER);
  }

  /**
   * 根据索引，获取椭球转换参数对象
   * @memberOf ElpTransformation
   * @param transIndex 转换参数的索引值, transIndex从0开始
   * @return {Promise.<ElpTransParam>} 成功返回椭球转换参数对象，失败返回空
   */
  static async getElpTransParamByIndex(transIndex: number): Promise<ElpTransParam> {
    let thisObj = new ElpTransformation();
    let methodName = "getElpTransParam"
    let paramsTypeStr = [thisObj.INT];
    let paramsStr = [transIndex];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ElpTransParam();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据名称，获取椭球转换参数
   * @memberOf ElpTransformation
   * @param name 椭球转换参数对象的名称
   * @return {Promise.<ElpTransParam>} 成功返回椭球转换参数对象，失败返回空
   */
  static async getElpTransParamByName(name: String): Promise<ElpTransParam> {
    let thisObj = new ElpTransformation();
    let methodName = "getElpTransParam"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [name];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ElpTransParam();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 替换已有变换参数
   * @memberOf ElpTransformation
   * @param transIndex 椭球转换参数对象索引, transIndex从0开始
   * @param param 椭球转换参数对象
   * @return {Promise.<boolean>} 成功返回true，失败返回false
   */
  static async setElpTransParamByIndex(transIndex: number, param: ElpTransParam): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "setElpTransParam"
    let paramsTypeStr = [thisObj.INT, thisObj.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [transIndex, param.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 替换已有变换参数
   * @memberOf ElpTransformation
   * @param name 椭球转换参数对象名称
   * @param param 椭球转换参数对象
   * @return {Promise.<boolean>} 成功返回true，失败返回false
   */
  static async setElpTransParamByName(name: String, param: ElpTransParam): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "setElpTransParam"
    let paramsTypeStr = [thisObj.STRING, thisObj.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [name, param.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 添加椭球坐标系变换参数对象
   * @memberOf ElpTransformation
   * @param param 椭球坐标系变换参数对象
   * @return {Promise.<Number>} param==NULL返回-1,有相同的返回-2,正常的返回添加后的index
   */
  static async addElpTransParam(param: ElpTransParam): Promise<number> {
    let thisObj = new ElpTransformation();
    let methodName = "addElpTransParam"
    let paramsTypeStr = [thisObj.CLASS_ELP_TRANS_PARAM];
    let paramsStr = [param.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 根据索引删除椭球坐标系变换参数对象
   * @memberOf ElpTransformation
   * @param trasNo 椭球转换参数对象索引,从0开始
   * @return {Promise.<boolean>} 成功返回true，失败返回false
   */
  static async delElpTransParamByIndex(trasNo: number): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "delElpTransParam"
    let paramsTypeStr = [thisObj.INT];
    let paramsStr = [trasNo];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 根据索引删除椭球坐标系变换参数对象
   * @memberOf ElpTransformation
   * @param name 椭球转换参数对象名称
   * @return {Promise.<boolean>} 成功返回true，失败返回false
   */
  static async delElpTransParamByName(name: String): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "delElpTransParam"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [name];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 清空椭球坐标系变换参数对象
   * @memberOf ElpTransformation
   * @return {Promise.<boolean>} 成功返回true，失败返回false
   */
  static async clearElpTransParam(): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "clearElpTransParam"
    return await thisObj.invoke(methodName, thisObj.BOOLEAN);
  }

  /**
   * 导入椭球变换参数
   * @memberOf ElpTransformation
   * @param filePath 文件路径
   * @return {Promise.<boolean>} 成功返回true，失败返回false
   */
  static async loadElpTransParam(filePath: String): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "loadElpTransParam"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [filePath];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 从文件导入椭球转换参数
   * @memberOf ElpTransformation
   * @param filePath 文件URL
   * @return {Promise<Array<ElpTransParam>>} 成功返回椭球转换对象列表，失败返回空
   */
  static async loadElpTransParam1(filePath: String): Promise<Array<ElpTransParam>> {
    let thisObj = new ElpTransformation();
    let methodName = "loadElpTransParam1"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [filePath];
    let ObjIdList = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.ARRAY);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new ElpTransParam();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 导出椭球变换参数
   * @memberOf ElpTransformation
   * @param name 
   * @return {Promise.<boolean>}成功返回true，失败返回false
   */
  static async saveElpTransParam(name: String): Promise<boolean> {
    let thisObj = new ElpTransformation();
    let methodName = "saveElpTransParam"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [name];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 七参数转换
   * @memberOf ElpTransformation
   * @param pnts 
   * @param transWay 
   * @param in_cord 
   * @param in_unit 
   * @param out_cord 
   * @param out_unit 
   */
  static async countCoeByPntList(
    pnts: Pnt3Struct[],
    transWay: number,
    in_cord: number,
    in_unit: number,
    out_cord: number,
    out_unit: number
  ): Promise<ElpTransParam> {
    let arrayID = getArrayObjIds(pnts);

    let thisObj = new ElpTransformation();
    let methodName = "getElpTransParam"
    let paramsTypeStr = [thisObj.ARRAY + thisObj.CLASS_PNT3_STRUCT, thisObj.SHORT, thisObj.SHORT, thisObj.SHORT, thisObj.SHORT, thisObj.SHORT];
    let paramsStr = [arrayID, transWay, in_cord, in_unit, out_cord, out_unit];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ElpTransParam();
    obj.ObjId = ObjId;
    return obj;
  }

}
