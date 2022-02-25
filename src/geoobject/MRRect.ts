/**
 * @content 旋转矩形
 * @author fangqi 2021-10-13
 */
import ObjectManager from '../components/ObjectManager';
import Dot from './Dot';


/**
 * @class MRRect
 */
export default class MRRect extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOMETRY_MR_RECT;
  }

  /**
   * 构造一个新的 MRRect 对象。
   * @memberOf MRRect
   * @returns {Promise.<MRRect>}
   */
  static async createInstance(): Promise<MRRect> {
    let thisObj = new MRRect();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置旋转矩形第一个点
   * @memberOf MRRect
   * @param dot0 旋转矩形的第一个点
   * @returns {Promise} 
   */
  async setDot0(dot0: Dot): Promise<void> {
    let methodName = "setDot0"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot0.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转矩形第一个点
   * @memberOf MRRect
   * @returns {Promise<Dot>} 旋转矩形的第一个点
   */
  async getDot0(): Promise<Dot> {
    let methodName = "getDot0"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置旋转矩形第二个点
   * @memberOf MRRect
   * @param dot1 旋转矩形的第二个点
   * @returns {Promise} 
   */
  async setDot1(dot1: Dot): Promise<void> {
    let methodName = "setDot1"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot1.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转矩形第二个点
   * @memberOf MRRect
   * @returns {Promise<Dot>} 旋转矩形的第二个点
   */
  async getDot1(): Promise<Dot> {
    let methodName = "getDot1"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置旋转矩形第三个点
   * @memberOf MRRect
   * @param dot2 旋转矩形的第三个点
   * @returns {Promise} 
   */
  async setDot2(dot2: Dot): Promise<void> {
    let methodName = "setDot2"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot2.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转矩形第三个点
   * @memberOf MRRect
   * @returns {Promise<Dot>} 旋转矩形的第三个点
   */
  async getDot2(): Promise<Dot> {
    let methodName = "getDot2"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置旋转矩形第四个点
   * @memberOf MRRect
   * @param dot3 旋转矩形的第四个点
   * @returns {Promise} 
   */
  async setDot3(dot3: Dot): Promise<void> {
    let methodName = "setDot3"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot3.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转矩形第四个点
   * @memberOf MRRect
   * @returns {Promise<Dot>} 旋转矩形的第四个点
   */
  async getDot3(): Promise<Dot> {
    let methodName = "getDot3"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

}
