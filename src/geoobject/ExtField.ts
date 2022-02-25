/**
 * @content 扩展字段头功能组件
 * @author fangqi 2021-09-16
 */
import ObjectManager from '../components/ObjectManager';


/**
 * @class ExtField
 * @description 扩展字段头
 */
export default class ExtField extends ObjectManager {

  getClassName(): String {
    return this.CLASS_EXT_FIELD;
  }

  /**
   * 构造一个新的 ExtField 对象。
   * @memberOf ExtField
   * @returns {Promise.<ExtField>}
   */
  static async createInstance(type: any, shapeInfoNum: number): Promise<ExtField> {
    let thisObj = new ExtField();
    let initParamsType = [thisObj.ENUM + thisObj.CLASS_FIELD_TYPE, thisObj.SHORT];
    let initParamsStr = [type, shapeInfoNum];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取别名
   * @memberOf ExtField
   * @return {Promise<*>}别名
   */
  async getAlias(): Promise<String> {
    let methodName = "getAlias"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置别名
   * @memberOf ExtField
   * @param alias 别名
   * @return {Promise<void>}
   */
  async setAlias(alias: String): Promise<void> {
    let methodName = "setAlias"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [alias];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否允许为空
   * @memberOf ExtField
   * @return {Promise<*>}true/false
   */
  async getIsNull(): Promise<boolean> {
    let methodName = "getIsNull"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否允许为空
   * @memberOf ExtField
   * @param value true/false
   * @return {Promise<void>}
   */
  async setIsNull(value: boolean): Promise<void> {
    let methodName = "setIsNull"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取域ID
   * @memberOf ExtField
   * @return {Promise<*>}ID值
   */
  async getDmnID(): Promise<number> {
    let methodName = "getDmnID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置域ID
   * @memberOf ExtField
   * @param value ID值
   * @return {Promise<void>}
   */
  async setDmnID(value: number): Promise<void> {
    let methodName = "setDmnID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取字段形态
   * @memberOf ExtField
   * @return {Promise<*>}字段形态
   */
  async getShape() {
    let methodName = "getShape"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置字段形态
   * @memberOf ExtField
   * @param shape 字段形态
   * @return {Promise<void>}
   */
  async setShape(shape: any): Promise<void> {
    let methodName = "setShape"
    let paramsTypeStr = [this.ENUM + this.CLASS_FIELD_SHAPE];
    let paramsStr = [shape];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取取离散值数目
   * @memberOf ExtField
   * @return {Promise<*>}数目
   */
  async getShapeInfoNum(): Promise<number> {
    let methodName = "getShapeInfoNum"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取字段类型
   * @memberOf ExtField
   * @return {Promise<*>}字段类型
   */
  async getFieldType() {
    let methodName = "getFieldType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 是否设置缺省值
   * @memberOf ExtField
   * @return {Promise<*>}非0/0 ：是/否
   */
  async hasDefVal(): Promise<number> {
    let methodName = "hasDefVal"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 是否设置最大值
   * @memberOf ExtField
   * @return {Promise<*>} 非0/0 ：是/否
   */
  async hasMaxVal(): Promise<number> {
    let methodName = "hasMaxVal"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 是否设置最小值
   * @memberOf ExtField
   * @return {Promise<*>} 非0/0 ：是/否
   */
  async hasMinVal(): Promise<number> {
    let methodName = "hasMinVal"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 是否设置缺省值
   * @memberOf ExtField
   * @return {Promise<*>}true/false
   */
  async hasDefValEx(): Promise<boolean> {
    let methodName = "hasDefValEx"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 是否设置最大值
   * @memberOf ExtField
   * @return {Promise<*>}true/false
   */
  async hasMaxValEx(): Promise<boolean> {
    let methodName = "hasMaxValEx"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 是否设置最小值
   * @memberOf ExtField
   * @return {Promise<*>}true/false
   */
  async hasMinValEx(): Promise<boolean> {
    let methodName = "hasMinValEx"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 克隆
   * @memberOf ExtField
   * @return {Promise<ExtField>} 返回新的对象
   */
  async clone(): Promise<ExtField> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ExtField();
    obj.ObjId = ObjId;
    return obj;
  }

}
