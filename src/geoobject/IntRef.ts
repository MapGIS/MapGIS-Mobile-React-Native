/**
 * @content 整数对象
 * @author fangqi 2021-09-04
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class IntRef
 * @description 整数对象
 */
export default class IntRef extends ObjectManager {

  getClassName(): String {
    return this.CLASS_INT_REF;
  }

  /**
   * 构造一个新的IntUser对象，可通过无参或有参构造。
   * 有参构造的参数为：整数值（int类型的Number）
   *
   * @memberof IntRef
   * @returns {Promise<IntRef>}
   */
  static async createInstance(): Promise<IntRef> {
    let thisObj = new IntRef();
    if (typeof arguments[0] === 'number') {
      let initParamsType = [thisObj.INT];
      let initParamsStr = [arguments[0]];
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
   * 设置整数值
   *
   * @memberof IntRef
   * @param {int} value 整数值
   * @returns {Promise<Void>}
   */
  async setValue(value: number): Promise<void> {
    let methodName = "setValue"
    let paramsTypeStr = [this.INT];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取整数值
   *
   * @memberof IntRef
   * @returns {int}
   */
  async getValue(): Promise<number> {
    let methodName = "getValue"
    return await this.invoke(methodName, this.NUMBER);
  }

}
