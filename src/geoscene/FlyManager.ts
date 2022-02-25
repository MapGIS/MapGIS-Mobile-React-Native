/**
 * @content 场景飞行管理类
 * @author fangqi 2021-12-03 
 */
import { NativeModules } from 'react-native';
let FM = NativeModules.JSFlyManager;
import ObjectManager from "../components/ObjectManager";

/**
 * @class FlyManager
 */
export default class FlyManager extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FLY_MANAGER;
  }

  /**
   * 构造一个新 FlyManager 对象
   *
   * @memberof FlyManager
   * @returns {Promise<FlyManager>}
   */
  static async createInstance(): Promise<FlyManager> {
    let thisObj = new FlyManager();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 加载文件路径
   *
   * @memberof FlyManager
   * @param {String} strPath - 文件路径
   * @returns {void} 
   */
  async loadAnimationsFromPat(strPath: String): Promise<void> {
    let methodName = "loadAnimationsFromPat"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strPath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 开始漫游，或继续进行中断的漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async start(): Promise<number> {
    let methodName = "start"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 暂停当前漫游，下次将从当前停止处漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async pause(): Promise<number> {
    let methodName = "pause"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 继续漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async resume(): Promise<number> {
    let methodName = "resume"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 停止当前漫游，下次将从路线起始处漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async stop(): Promise<number> {
    let methodName = "stop"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 重新开始漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async reStart(): Promise<number> {
    let methodName = "reStart"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 高速漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async speedUp(): Promise<number> {
    let methodName = "speedUp"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 低速漫游
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async slowDown(): Promise<number> {
    let methodName = "slowDown"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加一个用于接收飞行状态改变事件（StatusChangedListener）的监听器
   * @memberOf DeviceMotionDataSource
   * @returns {Promise<void>}
   */
  async registerStatusChangedListener() {
    try {
      await FM.registerStatusChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除一个用于接收飞行状态改变事件（StatusChangedListener）的监听器
   * @memberOf DeviceMotionDataSource
   * @returns {Promise<void>}
   */
  async unregisterStatusChangedListener() {
    try {
      await FM.unregisterStatusChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 返回本次飞行（即当前整个路线）需要的总时间，单位为秒
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async getDuration(): Promise<number> {
    let methodName = "getDuration"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回本次飞行的当前进度，单位为秒
   *
   * @memberof FlyManager
   * @returns {int} 成功返回1 ,失败返回0
   */
  async getProgress(): Promise<number> {
    let methodName = "getProgress"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 释放对象所占用的资源
   *
   * @memberof FlyManager
   * @param {boolean} isLoop - 
   * @returns {void} 
   */
  async setIsLoop(isLoop: boolean): Promise<void> {
    let methodName = "setIsLoop"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isLoop];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取对象是否被释放
   *
   * @memberof FlyManager
   * @returns {boolean} 对象是否被释放
   */
  async getIsLoop(): Promise<boolean> {
    let methodName = "getIsLoop"
    return await this.invoke(methodName, this.BOOLEAN);
  }

}
