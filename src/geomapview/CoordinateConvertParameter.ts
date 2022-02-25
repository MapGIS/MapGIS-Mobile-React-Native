/**
 * @content 坐标转换参数
 * @author fangqi 2021-10-11 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class CoordinateConvertParameter
 * @description 坐标转换参数
 */
export default class CoordinateConvertParameter extends ObjectManager {

  getClassName(): String {
    return this.CLASS_COORDINATE_CONVERT_PARAMETER;
  }

  /**
   * 构造一个新的CoordinateConvertParameter对象
   * @memberof CoordinateConvertParameter
   * @returns {Promise<CoordinateConvertParameter>}
   */
  static async createInstance(): Promise<CoordinateConvertParameter> {
    let thisObj = new CoordinateConvertParameter();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取目标坐标类型
   *
   * @memberof CoordinateConvertParameter
   * @returns {Number} 目标坐标类型（int类型的Number，例：0--CoordinateType.BAIDU_LngLat）
   */
  async getDestCoordinateType() {
    let methodName = "getDestCoordinateType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置转换的目标坐标类型 必设参数
   *
   * @memberof CoordinateConvertParameter
   * @param {Number} destCoordinateType 目标坐标类型（int类型的Number，例：0--CoordinateType.BAIDU_LngLat）
   * @returns {Promise<CoordinateConvertParameter>}
   */
  async setDestCoordinateType(destCoordinateType: any): Promise<CoordinateConvertParameter> {
    let methodName = "setDestCoordinateType"
    let paramsTypeStr = [this.ENUM + this.CLASS_COORDINATE_TYPE];
    let paramsStr = [destCoordinateType];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new CoordinateConvertParameter();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取源坐标类型
   *
   * @memberof CoordinateConvertParameter
   * @returns {Number} 源坐标类型（int类型的Number，例：0--CoordinateType.BAIDU_LngLat）
   */
  async getSrcCoordinateType() {
    let methodName = "getSrcCoordinateType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置转换的源坐标类型 必设参数
   *
   * @memberof CoordinateConvertParameter
   * @param {Number} srcCoordinateType 源坐标类型（int类型的Number，例：0--CoordinateType.BAIDU_LngLat）
   * @returns {Promise<CoordinateConvertParameter>}
   */
  async setSrcCoordinateType(srcCoordinateType: any): Promise<CoordinateConvertParameter> {
    let methodName = "setSrcCoordinateType"
    let paramsTypeStr = [this.ENUM + this.CLASS_COORDINATE_TYPE];
    let paramsStr = [srcCoordinateType];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new CoordinateConvertParameter();
    obj.ObjId = ObjId;
    return obj;
  }

}
