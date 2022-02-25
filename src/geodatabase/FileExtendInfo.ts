/**
 * @content 文件扩展信息对象
 * @author fangqi 2021-11-02 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class FileExtendInfo
 */
export default class FileExtendInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FILE_EXTEND_INFO;
  }

  /**
   * 构造一个新的 FileExtendInfo 对象。
   * @memberOf FileExtendInfo
   * @returns {Promise.<FileExtendInfo>}
   */
  static async createInstance(): Promise<FileExtendInfo> {
    let thisObj = new FileExtendInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 
   * @memberOf FileExtendInfo
   * @returns {Promise<boolean>} true表示增长,false表示不增长
   */
  async isExtendable(): Promise<boolean> {
    let methodName = "isExtendable"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 
   * @memberOf FileExtendInfo
   * @param val - true表示增长,false表示不增长
   * @returns {Promise<void>} 
   */
  async setExtendable(val: boolean): Promise<void> {
    let methodName = "setExtendable"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 文件增长的模式
   * @memberOf FileExtendInfo
   * @returns {Promise<FileExtendMode>} 
   */
  async getExtendMode(): Promise<any> {
    let methodName = "getExtendMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 文件增长的模式
   * @memberOf FileExtendInfo
   * @param mode - FileExtendMode
   * @returns {Promise<void>}
   */
  async setExtendMode(mode: any): Promise<void> {
    let methodName = "setExtendMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_FILE_EXTEND_MODE];
    let paramsStr = [mode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 文件增长单位
   * @memberOf FileExtendInfo
   * @returns {Promise<FileExtendMode>} 
   */
  async getExtendUnit(): Promise<any> {
    let methodName = "getExtendUnit"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 文件增长单位
   * @memberOf FileExtendInfo
   * @param unit - FileExtendUnit
   * @returns {Promise<void>}
   */
  async setExtendUnit(unit: any): Promise<void> {
    let methodName = "setExtendUnit"
    let paramsTypeStr = [this.ENUM + this.CLASS_FILE_EXTEND_UNIT];
    let paramsStr = [unit];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 数据文件的增长大小 (1) 按（大小）增长时，为增长的绝对量 (2) 按（百分比）增长时，为增长的百分比分子，取值范围1－100
   * @memberOf FileExtendInfo
   * @returns {Promise<number>} 
   */
  async getExtendSize(): Promise<number> {
    let methodName = "getExtendSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 数据文件的增长大小 (1) 按（大小）增长时，为增长的绝对量 (2) 按（百分比）增长时，为增长的百分比分子，取值范围1－100
   * @memberOf FileExtendInfo
   * @param val 
   * @returns {Promise<void>}
   */
  async setExtendSize(val: number): Promise<void> {
    let methodName = "setExtendSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 允许增长到的最大文件大小，为0表示不受限制
   * @memberOf FileExtendInfo
   * @returns {Promise<number>} 
   */
  async getMaxFileSize(): Promise<number> {
    let methodName = "getMaxFileSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 允许增长到的最大文件大小，为0表示不受限制
   * @memberOf FileExtendInfo
   * @param val 
   * @returns {Promise<void>}
   */
  async setMaxFileSize(val: number): Promise<void> {
    let methodName = "setMaxFileSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
