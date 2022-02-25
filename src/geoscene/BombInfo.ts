/**
 * @content 爆炸分析信息类,用于设置爆炸分析所需的参数信息
 * @author fangqi 2021-12-03 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class BombInfo
 */
export default class BombInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_BOMB_INFO;
  }

  /**
   * 构造一个新的 BombInfo 对象。
   * @memberOf BombInfo
   * @returns {Promise.<BombInfo>}
   */
  static async createInstance(): Promise<BombInfo> {
    let thisObj = new BombInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取爆炸类型
   * @memberOf BombInfo
   * @returns {BombType} 爆炸类型
   */
   async getBombType(): Promise<any> {
    let methodName = "getBombType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取爆炸动画的帧数
   * @memberOf BombInfo
   * @returns {number} 爆炸动画的帧数
   */
  async getFrameNum(): Promise<number> {
    let methodName = "getFrameNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置爆炸动画的帧数，帧数越多，爆炸持续时间越长
   * @memberOf BombInfo
   * @param {number} frameNum - 爆炸动画的帧数
   * @returns {Promise<Void>}
   */
  async setFrameNum(frameNum: number): Promise<void> {
    let methodName = "setFrameNum"
    let paramsTypeStr = [this.INT];
    let paramsStr = [frameNum];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
