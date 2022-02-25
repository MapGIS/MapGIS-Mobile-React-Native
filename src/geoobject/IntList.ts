/**
 * @content int类型的序列
 * @author fangqi 2021-09-02
 */
import ObjectManager from '../components/ObjectManager';


/**
 * @class IntList
 */
export default class IntList extends ObjectManager {

  getClassName(): String {
    return this.CLASS_INT_LIST;
  }

  /**
   * 构造一个新的 IntList 对象。
   * @memberOf IntList
   * @returns {Promise.<IntList>}
   */
  static async createInstance(): Promise<IntList> {
    let thisObj = new IntList();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 取元素数目
   * @memberOf IntList
   * @returns {Promise} 元素数目
   */
  async size(): Promise<number> {
    let methodName = "size"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 追加新元素
   * @memberOf IntList
   * @param value 新元素
   * @returns {Promise} -1/>=0 ：失败返回-1，成功返回元素索引>=0
   */
  async append(value: number): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.INT];
    let paramsStr = [value];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 追加序列
   * @memberOf IntList
   * @param list 待追加的序列
   * @returns {Promise} 大于0成功，否则失败
   */
  async appendIntList(list: IntList): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_INT_LIST];
    let paramsStr = [list.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除指定位置开始的多个的元素
   * @memberOf IntList
   * @param index 位置索引
   * @param count 数目
   * @returns {Promise} 大于0成功，否则失败
   */
  async remove(index: number, count: number): Promise<number> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT,this.INT];
    let paramsStr = [index,count];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除所有元素
   * @memberOf IntList
   * @returns {Promise} 大于0成功，否则失败
   */
  async clear(): Promise<number> {
    let methodName = "clear"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取指定位置处的元素
   * @memberOf IntList
   * @param index 位置索引
   * @returns {Promise<number>} 元素值
   */
  async get(index: number): Promise<number> {
    let methodName = "get"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
