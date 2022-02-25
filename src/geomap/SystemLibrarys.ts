/**
 * @content 
 * @author fangqi 2022-02-21
 */
import ObjectManager from '../components/ObjectManager';
import SystemLibrary from './SystemLibrary';

/**
 * @class SystemLibrarys
 * @description 
 */
export default class SystemLibrarys extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SYSTEM_LIBRARYS;
  }

  /**
   * 构造一个新的 SystemLibrarys 对象
   *
   * @memberof SystemLibrarys
   * @returns {Promise<SystemLibrarys>}
   */
  static async createInstance(): Promise<SystemLibrarys> {
    let thisObj = new SystemLibrarys();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 重新打开
   *
   * @memberof SystemLibrarys
   * @returns {boolean}
   */
  async reOpen(): Promise<boolean> {
    let methodName = "reOpen"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 系统库数量
   *
   * @memberof SystemLibrarys
   * @returns {number} 系统库数量
   */
   async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 根据索引得到系统库
   *
   * @memberof SystemLibrarys
   * @returns {SystemLibrary} 
   */
  async getSystemLibrary(index: number): Promise<SystemLibrary> {
    let methodName = "getSystemLibrary"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new SystemLibrary();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据系统库标识得到系统库
   *
   * @memberof SystemLibrarys
   * @returns {SystemLibrary} 
   */
  async getSystemLibraryByUuid(guid: number): Promise<SystemLibrary> {
    let methodName = "getSystemLibrary"
    let paramsTypeStr = [this.CLASS_UUID];
    let paramsStr = [guid];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new SystemLibrary();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取默认库
   *
   * @memberof SystemLibrarys
   * @returns {SystemLibrary} 
   */
  async getDefaultSystemLibrary(): Promise<SystemLibrary> {
    let methodName = "getDefaultSystemLibrary"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SystemLibrary();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取系统库管理对象
   * @memberOf SystemLibrarys
   * @return {Promise<SystemLibrarys>} 
   */
  static async getSystemLibrarys(): Promise<SystemLibrarys> {
    let thisObj = new SystemLibrarys();
    let methodName = "getSystemLibrarys"
    let ObjId = await thisObj.invoke(methodName, thisObj.OBJID);
    let obj = new SystemLibrarys();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据guid移除系统库
   * @memberOf SystemLibrarys
   * @param guid 
   * @return {Promise<boolean>} 
   */
  static async removeSystemLibrary(guid: String): Promise<boolean> {
    let thisObj = new SystemLibrarys();
    let methodName = "removeSystemLibrary"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [guid];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 根据系统库路径附加系统库
   * @memberOf SystemLibrarys
   * @param guid 
   * @return {Promise<boolean>} 
   */
  static async attachSystemLibrary(handle: number, folder: String): Promise<boolean> {
    let thisObj = new SystemLibrarys();
    let methodName = "attachSystemLibrary"
    let paramsTypeStr = [thisObj.LONG, thisObj.STRING];
    let paramsStr = [handle, folder];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 根据系统库guid注销系统库
   * @memberOf SystemLibrarys
   * @param guid 
   * @return {Promise<boolean>} 
   */
  static async detachSystemLibrary(handle: number, guid: String): Promise<boolean> {
    let thisObj = new SystemLibrarys();
    let methodName = "detachSystemLibrary"
    let paramsTypeStr = [thisObj.LONG, thisObj.STRING];
    let paramsStr = [handle, guid];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

}
