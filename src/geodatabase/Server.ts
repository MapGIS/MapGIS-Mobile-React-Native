/**
 * @content 地理数据服务器对象
 * @author fangqi 2021-11-17
 */
import ObjectManager from "../components/ObjectManager";
import type GDBCreateParam from "./GDBCreateParam";
import type LogEventReceiver from "./LogEventReceiver";
import GDBSysInfo from "./GDBSysInfo";
import DataBase from "./DataBase";


/**
 * @class Server
 * @description 地理数据服务器对象
 */
export default class Server extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SERVER;
  }

  constructor() {
    super();
  }

  /**
   * 构造一个新的Server对象
   *
   * @memberof Server
   * @returns {Promise<Server>}
   */
  static async createInstance(): Promise<Server> {
    let thisObj = new Server();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 服务器连接
   *
   * @memberof Server
   * @param svrName - 服务名称
   * @param userName - 用户名
   * @param pswd - 密码
   * @returns {long} 成功:>0;失败：<=0
   */
  async connect(svrName: String, userName: String, pswd: String): Promise<number> {
    let methodName = "connect"
    let paramsTypeStr = [this.STRING, this.STRING, this.STRING];
    let paramsStr = [svrName, userName, pswd];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 断开服务器连接
   *
   * @memberof Server
   * @returns {long} 成功：1，失败：0
   */
  async disConnect(): Promise<number> {
    let methodName = "disConnect"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取服务器连接类型
   *
   * @memberof Server
   * @returns {ConnectType} 服务器连接类型
   */
  async getConnectType(): Promise<any> {
    let methodName = "getConnectType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 服务器是否连接
   *
   * @memberof Server
   * @returns 是否连接
   */
  async hasConnected(): Promise<boolean> {
    let methodName = "hasConnected"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 取服务器名称
   *
   * @memberof Server
   * @returns 服务器名称
   */
  async getSvrName(): Promise<String> {
    let methodName = "getSvrName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取登录用户名、密码
   *
   * @memberof Server
   * @returns {Array<String>} 返回获取的用户名、密码
   */
  async getLogin(): Promise<String[]> {
    let methodName = "getLogin"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 取GDB的ID列表
   *
   * @memberof Server
   * @returns {Array<number>} GDB的ID列表
   */
  async getGdbs(): Promise<number[]> {
    let methodName = "getGdbs"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 取地理数据库数目
   *
   * @memberof Server
   * @returns {long} 地理数据库数目
   */
  async gdbNum(): Promise<number> {
    let methodName = "gdbNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取可附加的地理数据库名称集合
   *
   * @memberof Server
   * @returns {Array<String>} 可附加的地理数据库名称集合
   */
  async getCanAttachTableSpaces(): Promise<String[]> {
    let methodName = "getCanAttachTableSpaces"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 取对象URL
   *
   * @memberof Server
   * @returns URL名称
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取数据库文件存放的默认路径
   *
   * @memberof Server
   * @returns 数据库文件存放的默认路径
   */
  async getDefaultDataPath(): Promise<String> {
    let methodName = "getDefaultDataPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 根据名称打开地理数据库
   * @memberOf Server
   * @param {String} gdbName - 地理数据库名称
   * @returns {Promise<DataBase>} 打开的地理数据库对象
   */
  async getGdb(gdbName: String): Promise<DataBase> {
    let methodName = "getGdb"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [gdbName];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new DataBase();
    obj.server = this;
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据ID打开地理数据库
   * @memberOf Server
   * @param {int} gdbID - 地理数据库的ID
   * @returns {Promise<DataBase>} 打开的地理数据库对象
   */
  async getGdbById(gdbID: number): Promise<DataBase> {
    let methodName = "getGdb"
    let paramsTypeStr = [this.INT];
    let paramsStr = [gdbID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new DataBase();
    obj.server = this;
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据ID打开地理数据库
   * @memberOf Server
   * @param {int} gdbID - 地理数据库的ID
   * @returns {Promise<DataBase>} 打开的地理数据库对象
   */
  async openGDBById(gdbID: number): Promise<DataBase> {
    let methodName = "openGDB"
    let paramsTypeStr = [this.INT];
    let paramsStr = [gdbID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new DataBase();
    obj.server = this;
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据名称打开地理数据库
   * @memberOf Server
   * @param {String} gdbName - 地理数据库名称
   * @returns {Promise<DataBase>} 打开的地理数据库对象
   */
  async openGDB(gdbName: String): Promise<DataBase> {
    let methodName = "openGDB"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [gdbName];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new DataBase();
    obj.server = this;
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 根据地理数据库名称取ID
   *
   * @memberof Server
   * @param {String} dbName - 地理数据库名称
   * @returns {int} 地理数据库的ID
   */
  async getDBID(dbName: String): Promise<number> {
    let methodName = "getDBID"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dbName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据地理数据库 ID取名称
   *
   * @memberof Server
   * @param {int} dbID - 地理数据库的ID
   * @returns {String} 地理数据库的名称
   */
  async getDBName(dbID: number): Promise<String> {
    let methodName = "getDBName"
    let paramsTypeStr = [this.INT];
    let paramsStr = [dbID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 创建地理数据库
   * @memberOf Server
   * @param createParam - 地理数据库创建信息
   * @returns {Promise<DataBase>} 打开的地理数据库对象
   */
  async createGDB(createParam: GDBCreateParam): Promise<DataBase> {
    let methodName = "createGDB"
    let paramsTypeStr = [this.CLASS_GDB_CREATE_PARAM];
    let paramsStr = [createParam.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new DataBase();
    obj.server = this;
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 创建地理数据库
   * @memberOf Server
   * @param createParam - 地理数据库创建信息
   * @param logEventReceiver 
   * @returns {Promise<DataBase>} 打开的地理数据库对象
   */
  async createGDBByParam2(createParam: GDBCreateParam, logEventReceiver: LogEventReceiver): Promise<DataBase> {
    let methodName = "createGDB"
    let paramsTypeStr = [this.CLASS_GDB_CREATE_PARAM, this.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [createParam.ObjId, logEventReceiver.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new DataBase();
    obj.server = this;
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 删除数据库
   *
   * @memberof Server
   * @param {String} dbName - 地理数据库名称
   * @returns {long} 成功：1;失败：0
   */
  async deleteDB(dbName: String): Promise<number> {
    let methodName = "deleteDB"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dbName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除数据库
   *
   * @memberof Server
   * @param {String} dbName - 地理数据库名称
   * @returns {boolean} 成功：true;失败：false
   */
  async deleteGDB(dbName: String): Promise<boolean> {
    let methodName = "deleteGDB"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dbName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 删除数据库
   *
   * @memberof Server
   * @param {int} dbID - 地理数据库ID
   * @returns {boolean} 成功：true;失败：false
   */
  async deleteGDBById(dbID: number): Promise<boolean> {
    let methodName = "deleteGDB"
    let paramsTypeStr = [this.INT];
    let paramsStr = [dbID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 方法AttachDB
   *
   * @memberof Server
   * @param dbName - GDB名称
   * @param dFName - 数据文件全路径
   * @param lFName - 日志文件全路径
   * @returns {long} 成功：1，失败：0
   */
  async attachDB(dbName: String, dFName: String, lFName: String): Promise<number> {
    let methodName = "attachDB"
    let paramsTypeStr = [this.STRING, this.STRING, this.STRING];
    let paramsStr = [dbName, dFName, lFName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 方法AttachGDB
   *
   * @memberof Server
   * @param dbName - GDB名称
   * @param dFName - 数据文件全路径
   * @param lFName - 日志文件全路径
   * @returns {boolean} 成功：true，失败：false
   */
  async attachGDB(dbName: String, dFName: String, lFName: String): Promise<boolean> {
    let methodName = "attachGDB"
    let paramsTypeStr = [this.STRING, this.STRING, this.STRING];
    let paramsStr = [dbName, dFName, lFName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 方法AttachGDB
   *
   * @memberof Server
   * @param dbName - GDB名称
   * @param dFName - 数据文件全路径
   * @param lFName - 日志文件全路径
   * @param flag - 是否需要强制数据HDF文件的GUID
   * @returns {boolean} 成功：true，失败：false
   */
  async attachGDBByFlag(dbName: String, dFName: String, lFName: String, flag: boolean): Promise<boolean> {
    let methodName = "attachGDB"
    let paramsTypeStr = [this.STRING, this.STRING, this.STRING, this.BOOLEAN];
    let paramsStr = [dbName, dFName, lFName, flag];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 注销地理数据库
   *
   * @memberof Server
   * @param dbName - 地理数据库名称
   * @returns {long} 成功：1，失败：0
   */
  async detachDB(dbName: String): Promise<number> {
    let methodName = "detachDB"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dbName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 注销地理数据库
   *
   * @memberof Server
   * @param dbName - 地理数据库名称
   * @returns {boolean} 成功：1，失败：0
   */
  async detachGDB(dbName: String): Promise<boolean> {
    let methodName = "detachGDB"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dbName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 注销地理数据库
   *
   * @memberof Server
   * @param dbID - 地理数据库ID
   * @returns {boolean} 成功：1，失败：0
   */
  async detachGDBById(dbID: number): Promise<boolean> {
    let methodName = "detachGDB"
    let paramsTypeStr = [this.INT];
    let paramsStr = [dbID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 添加服务器登录信息
   * @memberOf Server
   * @param svc 
   * @param user 
   * @param pswd 
   * @return {Promise<boolean>} 
   */
  static async appendLogInfo(svc: String, user: String, pswd: String): Promise<boolean> {
    let thisObj = new Server();
    let methodName = "appendLogInfo"
    let paramsTypeStr = [thisObj.STRING, thisObj.STRING, thisObj.STRING];
    let paramsStr = [svc, user, pswd];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 删除服务器登录信息
   * @memberOf Server
   * @param svc 
   * @param user 
   * @return {Promise<boolean>} 
   */
  static async deleteLogInfo(svc: String, user: String): Promise<boolean> {
    let thisObj = new Server();
    let methodName = "deleteLogInfo"
    let paramsTypeStr = [thisObj.STRING, thisObj.STRING];
    let paramsStr = [svc, user];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 根据数据源名称获取登陆信息
   * @memberOf Server
   * @param svc 
   * @return {Promise<String[]>} 成功返回 用户名，密码 失败返回空
   */
  static async getLogInfo(svc: String): Promise<String[]> {
    let thisObj = new Server();
    let methodName = "getLogInfo"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [svc];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.ARRAY);
  }

  /**
   * 获取数据库对应的数据文件列表
   * @memberOf Server
   * @param dbName - 数据库名称 
   * @return {Promise<String[]>} 成功返回 用户名，密码 失败返回空
   */
  static async getDataFiles(dbName: String): Promise<String[]> {
    let thisObj = new Server();
    let methodName = "getDataFiles"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [dbName];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.ARRAY);
  }

  /**
   * 获取该数据源下的非法字符集合
   * @memberOf Server
   * @param type - 非法字符集合类型(1-数据库名称;2-数据库密码;3-类名称)
   * @return {Promise<char[]>} 
   */
  static async getInvalidChars(type: number): Promise<number[]> {
    let thisObj = new Server();
    let methodName = "getInvalidChars"
    let paramsTypeStr = [thisObj.INT];
    let paramsStr = [type];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.ARRAY);
  }

  /**
   * 获取地理数据库的详细信息
   * @memberOf Server
   * @param {int} dbID - 地理数据库的ID号
   * @returns {Promise<GDBSysInfo>} 打开的地理数据库对象
   */
  async getGDBSysInfoById(dbID: number): Promise<GDBSysInfo> {
    let methodName = "getGDBSysInfo"
    let paramsTypeStr = [this.INT];
    let paramsStr = [dbID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GDBSysInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取地理数据库的详细信息
   * @memberOf Server
   * @param dbName - 地理数据库的ID号
   * @returns {Promise<GDBSysInfo>} 打开的地理数据库对象
   */
  async getGDBSysInfo(dbName: String): Promise<GDBSysInfo> {
    let methodName = "getGDBSysInfo"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [dbName];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GDBSysInfo();
    obj.ObjId = ObjId;
    return obj;
  }

}
