/**
 * @content MAPGIS系统环境
 * @author fangqi 2022-02-18 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class MapGisEnv
 */
export default class MapGisEnv extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MAP_GIS_ENV;
  }

  /**
   * 构造一个新的 MapGisEnv 对象。
   * @memberOf MapGisEnv
   * @returns {Promise.<MapGisEnv>}
   */
  static async createInstance(): Promise<MapGisEnv> {
    let thisObj = new MapGisEnv();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取字库目录
   * @memberOf MapGisEnv
   * @returns {Promise<String>} 字库目录
   */
  async getClib(): Promise<String> {
    let methodName = "getClib"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置字库目录
   * @memberOf MapGisEnv
   * @param newVal - 字库目录
   * @returns {Promise<void>} 
   */
  async setClib(newVal: String): Promise<void> {
    let methodName = "setClib"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取系统目录
   * @memberOf MapGisEnv
   * @returns {Promise<String>} 系统目录
   */
  async getSys(): Promise<String> {
    let methodName = "getSys"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置系统目录
   * @memberOf MapGisEnv
   * @param newVal - 系统目录
   * @returns {Promise<void>} 
   */
  async setSys(newVal: String): Promise<void> {
    let methodName = "setSys"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前工作目录
   * @memberOf MapGisEnv
   * @returns {Promise<String>} 当前工作目录
   */
  async getCur(): Promise<String> {
    let methodName = "getCur"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置当前工作目录
   * @memberOf MapGisEnv
   * @param newVal - 当前工作目录
   * @returns {Promise<void>} 
   */
  async setCur(newVal: String): Promise<void> {
    let methodName = "setCur"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取临时工作目录
   * @memberOf MapGisEnv
   * @returns {Promise<String>} 临时工作目录
   */
  async getTemp(): Promise<String> {
    let methodName = "getTemp"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置临时工作目录
   * @memberOf MapGisEnv
   * @param newVal - 临时工作目录
   * @returns {Promise<void>} 
   */
  async setTemp(newVal: String): Promise<void> {
    let methodName = "setTemp"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取系统库目录
   * @memberOf MapGisEnv
   * @returns {Promise<String>} 获取系统库目录
   */
  async getSlib(): Promise<String> {
    let methodName = "getSlib"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置系统库目录
   * @memberOf MapGisEnv
   * @param newVal - 系统库目录
   * @returns {Promise<void>} 
   */
  async setSlib(newVal: String): Promise<void> {
    let methodName = "setSlib"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
