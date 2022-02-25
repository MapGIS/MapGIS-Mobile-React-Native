/**
 * @content 数据库所有信息
 * @author fangqi 2021-11-03 
 */
import ObjectManager from '../components/ObjectManager';
import DBFileInfo from './DBFileInfo';

/**
 * @class DBInfo
 */
export default class DBInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DB_INFO;
  }

  /**
   * 构造一个新的 DBInfo 对象。
   * @memberOf DBInfo
   * @returns {Promise.<DBInfo>}
   */
  static async createInstance(): Promise<DBInfo> {
    let thisObj = new DBInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取数据库文件信息
   * @memberOf DBInfo
   * @returns {Promise<DBFileInfo>} 
   */
  async getDataBaseFileInfo(): Promise<DBFileInfo> {
    let methodName = "getDataBaseFileInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new DBFileInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置数据库文件信息
   * @memberOf DBInfo
   * @param dbFileInfo 数据库文件信息
   * @returns {Promise<void>} 
   */
  async setDataBaseFileInfo(dbFileInfo: DBFileInfo): Promise<void> {
    let methodName = "setDataBaseFileInfo"
    let paramsTypeStr = [this.CLASS_DB_FILE_INFO];
    let paramsStr = [dbFileInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
