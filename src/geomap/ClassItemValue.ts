/**
 * @content 分段类型对象功能组件
 * @author fangqi 2021-09-28
 */
import ObjectManager from "../components/ObjectManager";


/**
 * @class ClassItemValue
 * @description 分段类型对象功能组件
 */
export default class ClassItemValue extends ObjectManager {

  getClassName(): String {
    return this.CLASS_CLASS_ITEM_VALUE;
  }

  /**
   * 构造一个新的SRefData对象。
   * @memberof ClassItemValue
   * @returns {Promise.<ClassItemValue>}
   */
  static async createInstance(): Promise<ClassItemValue> {
    let thisObj = new ClassItemValue();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 统计分段类型
   * @memberof ClassItemValue
   * @returns {int} ClassItemType的值
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置分段类型
   * @memberof ClassItemValue
   * @param {int} type 分段类型 UniqueType | RangeType
   * @returns {Promise<Void>}
   */
  async setType(type: any): Promise<void> {
    let methodName = "setType"
    let paramsTypeStr = [this.ENUM + this.CLASS_CLASS_ITEM_VALUE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取开始值
   * @memberof ClassItemValue
   * @returns {String}
   */
  async getStartValue(): Promise<String> {
    let methodName = "getStartValue"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置开始值
   * @memberof ClassItemValue
   * @param {String} startValue 开始值
   * @returns {Promise<Void>}
   */
  async setStartValue(startValue: String): Promise<void> {
    let methodName = "setStartValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [startValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取结束值
   * @memberof ClassItemValue
   * @returns {String}
   */
  async getEndValue(): Promise<String> {
    let methodName = "getEndValue"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置结束值
   * @memberof ClassItemValue
   * @param {String} endValue 结束值
   * @returns {Promise<Void>}
   */
  async setEndValue(endValue: String): Promise<void> {
    let methodName = "setEndValue"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [endValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
