/**
 * @content 对应java中的UUID
 * @author fangqi 2021-11-18 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class UUID
 */
export default class UUID extends ObjectManager {

  getClassName(): String {
    return this.CLASS_UUID;
  }

  /**
   * 构造一个新的 UUID 对象。可通过无参构造和有参构造
   * 
   * @memberOf UUID
   * @returns {Promise.<UUID>}
   */
  static async randomUUID(): Promise<UUID> {
    let thisObj = new UUID();
    let methodName = "randomUUID"
    let ObjId = await thisObj.invoke(methodName, thisObj.OBJID);
    thisObj.ObjId = ObjId;
    return thisObj;
  }

  /**
   * 根据 toString() 方法中描述的字符串标准表示形式创建 UUID
   * @memberOf UUID
   * @param name - 指定 UUID 的字符串
   * @returns {Promise<UUID>} 具有指定值的 UUID
   */
  async fromString(name: String): Promise<UUID> {
    let methodName = "fromString"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new UUID();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 返回表示此 UUID 的 String 对象
   * @memberOf UUID
   * @returns {Promise<*>} 此 UUID 的字符串表示形式
   */
  async toString(): Promise<String> {
    let methodName = "toString"
    return await this.invoke(methodName, this.STRING);
  }

}
