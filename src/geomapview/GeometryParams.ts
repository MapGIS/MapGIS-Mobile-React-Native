/**
 * @content 几何对象参数
 * @author fangqi 2021-10-11
 */
import ObjectManager from '../components/ObjectManager';
import Geometry from '../geoobject/Geometry';

/**
 * @class GeometryParams
 * @description 几何对象参数
 */
export default class GeometryParams extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOMETRY_PARAMS;
  }

  /**
   * 构造一个新得GeometryParams对象
   *
   * @memberof GeometryParams
   * @returns {Promise<GeometryParams>}
   */
  static async createInstance(): Promise<GeometryParams> {
    let thisObj = new GeometryParams();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象
   *
   * @memberof GeometryParams
   * @returns {Promise<Geometry>} 成功：返回几何对象
   */
  async getGeometry(): Promise<Geometry> {
    let methodName = "getGeometry"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Geometry();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置几何对象
   *
   * @memberof GeometryParams
   * @param {Object} geometry 几何对象（Geometry类型的对象）
   * @returns {Promise<Void>}
   */
  async setGeometry(geometry: Geometry): Promise<void> {
    let methodName = "setGeometry"
    let paramsTypeStr = [this.CLASS_GEOMETRY];
    let paramsStr = [geometry.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前索引
   * @memberof GeometryParams
   * @returns {Number} 索引（int类型的Number）
   */
  async getCurrentIndex(): Promise<number> {
    let methodName = "getCurrentIndex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置当前索引
   *
   * @memberof GeometryParams
   * @param {Number} currentIndex 索引（int类型的Number）
   * @returns {Promise<Void>}
   */
  async setCurrentIndex(currentIndex: number): Promise<void> {
    let methodName = "setCurrentIndex"
    let paramsTypeStr = [this.INT];
    let paramsStr = [currentIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前区之前的线所构成的顶点的数目
   *
   * @memberof GeometryParams
   * @returns {Number} 索引（int类型的Number）
   */
  async getPreCurrentTotalVertex(): Promise<number> {
    let methodName = "getPreCurrentTotalVertex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置当前区之前的线所构成的顶点的数目
   *
   * @memberof GeometryParams
   * @param {Number} preCurrentTotalVertex 当前区之前的线所构成的顶点的数目（int类型的Number）
   * @returns {Promise<Void>}
   */
  async setPreCurrentTotalVertex(preCurrentTotalVertex: number): Promise<void> {
    let methodName = "setPreCurrentTotalVertex"
    let paramsTypeStr = [this.INT];
    let paramsStr = [preCurrentTotalVertex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前顶点索引
   * @memberof GeometryParams
   * @returns {Number} 顶点索引（int类型的Number）
   */
  async getCurrentVertexIndex(): Promise<number> {
    let methodName = "getCurrentVertexIndex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置当前顶点索引
   *
   * @memberof GeometryParams
   * @param {Number} currentVertexIndex 当前顶点索引（int类型的Number）
   * @returns {Promise<Void>}
   */
  async setCurrentVertexIndex(currentVertexIndex: number): Promise<void> {
    let methodName = "setCurrentVertexIndex"
    let paramsTypeStr = [this.INT];
    let paramsStr = [currentVertexIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
