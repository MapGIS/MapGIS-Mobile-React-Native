/**
 * @content 对应java中的Calendar
 * @author fangqi 2021-11-18 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Calendar
 */
export default class Calendar extends ObjectManager {

  getClassName(): String {
    return this.CLASS_CALENDAR;
  }

  /**
   * 构造一个新的 Calendar 对象。可通过无参构造和有参构造
   * 
   * @memberOf Calendar
   * @returns {Promise.<Calendar>}
   */
  static async getInstance(): Promise<Calendar> {
    let thisObj = new Calendar();
    let methodName = "getInstance"
    let ObjId = await thisObj.invoke(methodName, thisObj.OBJID);
    thisObj.ObjId = ObjId;
    return thisObj;
  }

  /**
   * 用给定的 long 值设置此 Calendar 的当前时间值。
   * @memberOf Calendar
   * @param millis - 新时间，以从历元至现在所经过的 UTC 毫秒数形式。
   * @returns {Promise<void>}
   */
  async setTimeInMillis(millis: number): Promise<void> {
    let methodName = "setTimeInMillis"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [millis];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 返回此 Calendar 的时间值，以毫秒为单位
   * @memberOf Calendar
   * @returns {Promise<*>}
   */
  async getTimeInMillis(): Promise<number> {
    let methodName = "getTimeInMillis"
    return await this.invoke(methodName, this.NUMBER);
  }

}
