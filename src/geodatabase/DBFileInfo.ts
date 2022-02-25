/**
 * @content 文件信息
 * @author fangqi 2021-11-03 
 */
import ObjectManager from '../components/ObjectManager';
import FileExtendInfo from './FileExtendInfo';

/**
 * @class DBFileInfo
 */
export default class DBFileInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DB_FILE_INFO;
  }

  /**
   * 构造一个新的 DBFileInfo 对象。
   * @memberOf DBFileInfo
   * @returns {Promise.<DBFileInfo>}
   */
  static async createInstance(): Promise<DBFileInfo> {
    let thisObj = new DBFileInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取地理数据库物理文件名称（包含全路径）
   * @memberOf DBFileInfo
   * @returns {Promise<String>} 地理数据库物理文件名称（包含全路径）
   */
  async getFilePath(): Promise<String> {
    let methodName = "getFilePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地理数据库物理文件名称（包含全路径）
   * @memberOf DBFileInfo
   * @param path - 地理数据库物理文件名称（包含全路径）
   * @returns {Promise<void>} 
   */
  async setFilePath(path: String): Promise<void> {
    let methodName = "setFilePath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [path];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地理数据库物理文件初始大小（单位：MB）
   * @memberOf DBFileInfo
   * @returns {Promise<number>} 地理数据库物理文件初始大小（单位：MB）
   */
  async getInitSize(): Promise<number> {
    let methodName = "getInitSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置地理数据库物理文件初始大小（单位：MB）
   * @memberOf DBFileInfo
   * @param size - 地理数据库物理文件初始大小（单位：MB）
   * @returns {Promise<void>} 
   */
  async setInitSize(size: number): Promise<void> {
    let methodName = "setInitSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文件增长信息
   * @memberOf DBFileInfo
   * @returns {Promise<FileExtendInfo>} 文件扩展信息对象
   */
  async getExtendInfo(): Promise<FileExtendInfo> {
    let methodName = "getExtendInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new FileExtendInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置文件增长信息
   * @memberOf DBFileInfo
   * @param info - 文件增长信息
   * @returns {Promise<void>} 
   */
  async setExtendInfo(info: FileExtendInfo): Promise<void> {
    let methodName = "setExtendInfo"
    let paramsTypeStr = [this.CLASS_FILE_EXTEND_INFO];
    let paramsStr = [info.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
