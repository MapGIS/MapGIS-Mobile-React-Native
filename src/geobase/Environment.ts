/**
 * @content 矩形对象功能组件
 * @author fangqi 2021-7-18
 */
import ObjectManager from '../components/ObjectManager';
import { NativeModules } from 'react-native';
let X = NativeModules.JSEnvironment;

/**
 * @class Environment
 */
export default class Environment extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ENVIRONMENT
  }

  /**
   * 构造一个新的 Environment 对象。可通过无参构造和有参构造
   * 
   * @memberOf Environment
   * @returns {Promise.<Environment>}
   */
  static async createInstance(): Promise<Environment> {
    let thisObj = new Environment();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 环境初始化，必须在使用SDK各组件之前调用，会自动建立根目录结构
   * @param {String} strRootPath 根路径： /MapGIS/
   * @returns {Promise<boolean>}
   */
   async initialize(strRootPath: String) {
    try {
      let result = await X.initialize(this.ObjId, strRootPath);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置系统库路径
   * 
   * 详细说明:
   * 更改地图系统库路径
   * 特别说明:
   * 在初始化地图数据后更改系统库路径需要调用MapView.forceRefresh()方法
   * @param strPath 系统库路径：/MapGIS/
   * @returns {Promise<void>}
   */
  async setSystemLibraryPath(strPath: String):Promise<void> {
    let methodName = "setSystemLibraryPath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strPath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取根路径
   * @memberOf Environment
   * @returns {Promise<String>} 根路径
   */
  async getRootPath(): Promise<String> {
    let methodName = "getRootPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   *
   * 获取系统库路径
   * @memberOf Environment
   * @return 系统库路径
   */
  async getSystemLibraryPath(): Promise<String> {
    let methodName = "getSystemLibraryPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   *
   * 获取外挂字体文件路径(更多TrueType字体显示)
   * @memberOf Environment
   * @return 外挂字体文件路径
   */
   async getFontsPath(): Promise<String> {
    let methodName = "getFontsPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   *
   * 获取瓦片缓存路径
   * @memberOf Environment
   * @return 瓦片缓存路径
   */
   async getTileCachePath(): Promise<String> {
    let methodName = "getTileCachePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   *
   * 获取临时文件路径
   * @memberOf Environment
   * @return 临时文件路径
   */
   async getTemporaryPath(): Promise<String> {
    let methodName = "getTemporaryPath"
    return await this.invoke(methodName, this.STRING);
  }
  
  /**
   * 请求授权
   * @returns {Promise<boolean>}
   */
   async requestAuthorization() {
    try {
      let result = await X.requestAuthorization();
      return result;
    } catch (e) {
      console.error(e);
    }
  }
}
