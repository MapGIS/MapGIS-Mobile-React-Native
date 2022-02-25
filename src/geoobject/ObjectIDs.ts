/**
 * @content long类型ID的集合
 * @author fangqi 2021-11-17 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class ObjectIDs
 * @description long类型ID的集合
 */
export default class ObjectIDs extends ObjectManager {

  getClassName(): String {
    return this.CLASS_OBJECT_IDS;
  }

  /**
   * 构造一个新的ObjectIDs对象
   * @memberof ObjectIDs
   * @returns {Promise<ObjectIDs>}
   */
  static async createInstance(): Promise<ObjectIDs> {
    let thisObj = new ObjectIDs();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 元素数目
   * @memberof ObjectIDs
   * @return 元素数目
   */
  async size(): Promise<number> {
    let methodName = "size"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取元素
   * @memberof ObjectIDs
   * @param index - 元素索引号
   * @return 元素ID
   */
  async get(index: number): Promise<number> {
    let methodName = "get"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 删除所有元素
   * @memberof ObjectIDs
   * @return 成功：>0;失败：<=0
   */
  async clear(): Promise<number> {
    let methodName = "clear"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 删除一个元素
   * @memberof ObjectIDs
   * @param index - 位置索引
   * @param count - 数目
   * @return 大于0成功
   */
  async remove(index: number, count: number): Promise<number> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [index, count];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 更新一个元素
   * @memberof ObjectIDs
   * @param index - 位置索引
   * @param newVal - 新的元素值
   * @return -1/>=0 ：失败返回-1，成功返回元素索引>=0
   */
  async update(index: number, newVal: number): Promise<number> {
    let methodName = "update"
    let paramsTypeStr = [this.INT, this.LONG];
    let paramsStr = [index, newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 在末尾添加一个元素
   * @memberof ObjectIDs
   * @param newVal - 新的元素值
   * @return -1/>=0 ：失败返回-1，成功返回元素索引>=0
   */
  async append(newVal: number): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 在某个位置插入一个元素
   * @memberof ObjectIDs
   * @param index - 位置索引
   * @param newVal - 新的元素值
   * @return -1/>=0 ：失败返回-1，成功返回元素索引>=0
   */
  async insert(index: number, newVal: number): Promise<number> {
    let methodName = "Insert"
    let paramsTypeStr = [this.INT, this.LONG];
    let paramsStr = [index, newVal];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 拷贝坐标点序列
   * @memberof ObjectIDs
   * @return 拷贝出的坐标点序列
   */
  async clone(): Promise<ObjectIDs> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ObjectIDs();
    obj.ObjId = ObjId;
    return obj;
  }

}
