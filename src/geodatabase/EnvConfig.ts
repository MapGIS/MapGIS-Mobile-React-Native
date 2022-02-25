/**
 * @content 环境配置对象
 * @author fangqi 2022-02-18
 */

import ObjectManager from '../components/ObjectManager';
import ConfigOption from './ConfigOption';
import MapGisEnv from './MapGisEnv';

/**
 * @class EnvConfig
 */
export default class EnvConfig extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ENV_CONFIG;
  }

  /**
   * 构造一个新的 EnvConfig 对象
   * @memberOf EnvConfig
   * @return {Promise<EnvConfig>}
   */
  static async createInstance(): Promise<EnvConfig> {
    let thisObj = new EnvConfig();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 系统配置项项数
   * @memberOf EnvConfig
   * @return {Promise<number>} 配置项项数
   */
  static async getOptCount(): Promise<number> {
    let thisObj = new EnvConfig();
    let methodName = "getOptCount"
    return await thisObj.invoke(methodName, thisObj.NUMBER);
  }

  /**
   * 获取系统配置项信息
   * @memberOf EnvConfig
   * @param type - 系统配置项类型
   * @return {Promise<ConfigOption>} 成功返回系统配置项信息,失败返回null
   */
  static async getConfigOptInfo(type: any): Promise<ConfigOption> {
    let thisObj = new EnvConfig();
    let methodName = "getConfigOptInfo"
    let paramsTypeStr = [thisObj.ENUM + thisObj.CLASS_SYS_CONFIG_TYPE];
    let paramsStr = [type];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ConfigOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取系统配置项信息
   * @memberOf EnvConfig
   * @param strName - 名称
   * @return {Promise<ConfigOption>} 成功返回系统配置项信息,失败返回null
   */
  static async getConfigOptInfoByName(strName: String): Promise<ConfigOption> {
    let thisObj = new EnvConfig();
    let methodName = "getConfigOptInfo"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [strName];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new ConfigOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置系统配置项信息
   * @memberOf EnvConfig
   * @param type - 系统配置项类型
   * @param configOption - 系统配置项信息
   * @return {Promise<boolean>} 成功返回true,失败返回false
   */
  static async setConfigOptInfo(type: any, configOption: ConfigOption): Promise<boolean> {
    let thisObj = new EnvConfig();
    let methodName = "setConfigOptInfo"
    let paramsTypeStr = [thisObj.ENUM + thisObj.CLASS_SYS_CONFIG_TYPE, thisObj.CLASS_CONFIG_OPTION];
    let paramsStr = [type, configOption.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.BOOLEAN);
  }

  /**
   * 获取系统目录信息
   * @memberOf EnvConfig
   * @return {Promise<MapGisEnv>} 成功返回系统目录信息,失败返回null
   */
  static async getGisEnv(): Promise<MapGisEnv> {
    let thisObj = new EnvConfig();
    let methodName = "getGisEnv"
    let ObjId = await thisObj.invoke(methodName, thisObj.OBJID);
    let obj = new MapGisEnv();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置系统目录信息
   * @memberOf EnvConfig
   * @param gisEnv - 系统目录信息
   * @return {Promise<boolean>} 成功返回true,失败返回false
   */
  static async setGisEnv(gisEnv: MapGisEnv): Promise<void> {
    let thisObj = new EnvConfig();
    let methodName = "setGisEnv"
    let paramsTypeStr = [thisObj.CLASS_MAP_GIS_ENV];
    let paramsStr = [gisEnv.ObjId];
    await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.VOID);
  }

  /**
   * 获取系统配置目录
   * @memberOf EnvConfig
   * @param dirType - 系统配置项类型
   * @return {Promise<ConfigOption>} 成功返回系统配置目录,失败返回null
   */
  static async getConfigDirectory(dirType: any): Promise<String> {
    let thisObj = new EnvConfig();
    let methodName = "getConfigDirectory"
    let paramsTypeStr = [thisObj.ENUM + thisObj.CLASS_SYS_CONFIG_DIR_TYPE];
    let paramsStr = [dirType];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.STRING);
  }

}
