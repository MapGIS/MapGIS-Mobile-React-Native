/**
 * @content 二维地图引用图层类，通过该类可以向场景中添加一个二维地图
 * @author fangqi 2021-11-26 
 */
import Layer3D from "./Layer3D";

/**
 * @class MapRefLayer
 */
export default class MapRefLayer extends Layer3D {

  getClassName(): String {
    return this.CLASS_MAP_REF_LAYER;
  }

  /**
   * 构造一个新 MapRefLayer 对象
   *
   * @memberof MapRefLayer
   * @returns {Promise<MapRefLayer>}
   */
  static async createInstance(): Promise<MapRefLayer> {
    let thisObj = new MapRefLayer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图层类型
   *
   * @memberof MapRefLayer
   * @returns {Layer3DType} Layer3DType枚举类型，成功返回三维图层类型,返回值为MapRef
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置图层显示的透明度
   *
   * @memberof MapRefLayer
   * @param {number} sAlpha - 透明度，值为0-100， 默认为0（表示不透明）
   * @returns {int} 返回值：1-成功；0-失败
   */
  async setTransparency(sAlpha: number): Promise<number> {
    let methodName = "setTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层显示的透明度
   *
   * @memberof MapRefLayer
   * @param {number} sAlpha - 透明度，值为0-100，其中0为不透明
   * @returns {int} 返回值：1-成功；0-失败
   */
  async getTransparency(sAlpha: number): Promise<number> {
    let methodName = "getTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
