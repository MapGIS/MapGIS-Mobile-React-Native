/**
 * @content 三维地形类，通过该类可以向场景中添加地形高程图层
 * @author fangqi 2021-11-26 
 */
import type Rect from "../geoobject/Rect";
import Layer3D from "./Layer3D";

/**
 * @class TerrainLayer3D
 */
export default class TerrainLayer3D extends Layer3D {

  getClassName(): String {
    return this.CLASS_TERRAIN_LAYER3D;
  }

  /**
   * 构造一个新 TerrainLayer3D 对象
   *
   * @memberof TerrainLayer3D
   * @returns {Promise<TerrainLayer3D>}
   */
  static async createInstance(): Promise<TerrainLayer3D> {
    let thisObj = new TerrainLayer3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图层类型
   *
   * @memberof TerrainLayer3D
   * @returns {Layer3DType} Layer3DType枚举类型，成功返回三维图层类型,返回值为Terrain
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取图层范围
   *
   * @memberof TerrainLayer3D
   * @param {Rect} pRect - 二维范围，Rect类型，参数值为{double xMin, double yMin, double xMax, double yMax}
   * @returns {int} 返回值：1-成功；0-失败
   */
  async getExtent(pRect: Rect): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [pRect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
