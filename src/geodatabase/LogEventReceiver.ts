/**
 * @content 过程回调信息类
 * @author fangqi 2021-11-18
 */
import { NativeModules } from 'react-native';
let LER = NativeModules.JSLogEventReceiver;
import ObjectManager from '../components/ObjectManager';


/**
 * @class LogEventReceiver
 * @description 过程回调信息类
 */
export default class LogEventReceiver extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LOG_EVENT_RECEIVER;
  }

  /**
   * 构造一个新的LogEventReceiver对象
   *
   * @memberof LogEventReceiver
   * @returns {Promise<LogEventReceiver>}
   */
  static async createInstance(): Promise<LogEventReceiver> {
    let thisObj = new LogEventReceiver();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 子步骤开始信息
   * 
   * @memberof LogEventReceiver
   * @param stepName 
   * @returns {Promise<void>} 
   */
  async onStepStart(stepName: String): Promise<void> {
    let methodName = "onStepStart"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [stepName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 子步骤过程中信息
   * 
   * @memberof LogEventReceiver
   * @param message 
   * @returns {Promise<void>} 
   */
  async onStepMessage(message: String): Promise<void> {
    let methodName = "onStepMessage"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [message];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 子步骤结束信息
   * 
   * @memberof LogEventReceiver
   * @param message 
   * @returns {Promise<void>} 
   */
  async onStepEnd(status: number, progress: number, stepName: String, hasChildStep: boolean): Promise<void> {
    let methodName = "onStepEnd"
    let paramsTypeStr = [this.INT, this.DOUBLE, this.STRING, this.BOOLEAN];
    let paramsStr = [status, progress, stepName, hasChildStep];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 注册监听 子步骤开始信息
   *
   * @memberof LogEventReceiver
   * @returns {Promise<Void>}
   */
  async addStepStartListener() {
    try {
      await LER.addStepStartListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除监听 子步骤开始信息
   *
   * @memberof LogEventReceiver
   * @returns {Promise<Void>}
   */
  async removeStepStartListener() {
    try {
      await LER.removeStepStartListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 注册监听 子步骤过程中信息
   *
   * @memberof LogEventReceiver
   * @returns {Promise<Void>}
   */
  async addStepMessageListener() {
    try {
      await LER.addStepMessageListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除监听 子步骤过程中信息
   *
   * @memberof LogEventReceiver
   * @returns {Promise<Void>}
   */
  async removeStepMessageListener() {
    try {
      await LER.removeStepMessageListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 注册监听 子步骤开始信息
   *
   * @memberof LogEventReceiver
   * @returns {Promise<Void>}
   */
  async addStepEndListener() {
    try {
      await LER.addStepEndListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除监听 子步骤开始信息
   *
   * @memberof LogEventReceiver
   * @returns {Promise<Void>}
   */
  async removeStepEndListener() {
    try {
      await LER.removeStepEndListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

}
