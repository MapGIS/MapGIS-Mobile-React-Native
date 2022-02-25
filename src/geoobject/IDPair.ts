/**
 * @content ID对
 * @author fangqi 2021-10-21 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class IDPair
 */
export default class IDPair extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ID_PAIR;
  }

  /**
   * 构造一个新的 IDPair 对象。
   * @memberOf IDPair
   * @returns {Promise.<IDPair>}
   */
  static async createInstance(): Promise<IDPair> {
    let thisObj = new IDPair();
    if (
      typeof arguments[0] === 'number' &&
      typeof arguments[1] === 'number'
    ) {
      let initParamsType = [thisObj.INT, thisObj.INT];
      let initParamsStr = [arguments[0], arguments[1]];
      thisObj.ObjId = await thisObj.createByParam(
        initParamsType,
        initParamsStr
      );
    } else {
      thisObj.ObjId = await thisObj.create();
    }
    return thisObj;
  }

  /**
   * 设置id0
   * @memberOf IDPair
   * @param id0 id0
   * @returns {Promise<void>}
   */
  async setID0(setID0: number): Promise<void> {
    let methodName = "setID0"
    let paramsTypeStr = [this.INT];
    let paramsStr = [setID0];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取id0
   * @memberOf IDPair
   * @returns {Promise<*>} id0
   */
  async getID0(): Promise<number> {
    let methodName = "getID0"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置id1
   * @memberOf IDPair
   * @param id1 - id1
   * @returns {Promise<void>}
   */
  async setID1(id1: number): Promise<void> {
    let methodName = "setID1"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [id1];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取id1
   * @memberOf IDPair
   * @returns {Promise<*>} id1
   */
  async getID1(): Promise<number> {
    let methodName = "getID1"
    return await this.invoke(methodName, this.NUMBER);
  }

}
