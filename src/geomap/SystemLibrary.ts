/**
 * @content 
 * @author fangqi 2022-02-21
 */
import UUID from '../native/UUID';
import ObjectManager from '../components/ObjectManager';

/**
 * @class SystemLibrary
 * @description 
 */
export default class SystemLibrary extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SYSTEM_LIBRARY;
  }

  /**
   * 构造一个新的 SystemLibrary 对象
   *
   * @memberof SystemLibrary
   * @returns {Promise<SystemLibrary>}
   */
  static async createInstance(): Promise<SystemLibrary> {
    let thisObj = new SystemLibrary();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 系统库标识
   *
   * @memberof SystemLibrary
   * @returns {String} 系统库标识
   */
  async getGuid(): Promise<String> {
    let methodName = "getGuid"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 系统库名称
   *
   * @memberof SystemLibrary
   * @returns {String} 系统库名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获得系统库目录
   *
   * @memberof SystemLibrary
   * @returns {String} 获得系统库目录
   */
  async getFilePath(): Promise<String> {
    let methodName = "getFilePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 重新打开
   *
   * @memberof SystemLibrary
   * @returns {boolean}
   */
  async reOpen(): Promise<boolean> {
    let methodName = "reOpen"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  // /**
  //  * 获取符号库
  //  *
  //  * @memberof SystemLibrary
  //  * @returns {SymbolLibrary} 获取符号库
  //  */
  // async getSymbolLibarary(): Promise<SymbolLibrary> {
  //   let methodName = "getSymbolLibarary"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new SymbolLibrary();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  // /**
  //  * 获取字体库
  //  *
  //  * @memberof SystemLibrary
  //  * @returns {FontLibrary} 获取字体库
  //  */
  // async getFontLibarary(): Promise<FontLibrary> {
  //   let methodName = "getFontLibarary"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new FontLibrary();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  // /**
  //  * 获取颜色库
  //  *
  //  * @memberof SystemLibrary
  //  * @returns {ColorLibrary} 获取颜色库
  //  */
  // async getColorLibarary(): Promise<ColorLibrary> {
  //   let methodName = "getColorLibarary"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new ColorLibrary();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  /**
   * 获取系统库标识
   *
   * @memberof SystemLibrary
   * @returns {UUID} 获取系统库标识
   */
  async getSysLibGuid(): Promise<UUID> {
    let methodName = "getSysLibGuid"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new UUID();
    obj.ObjId = ObjId;
    return obj;
  }

}
