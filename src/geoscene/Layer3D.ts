/**
 * @content 三维图层类的基类
 * @author fangqi 2021-11-25 
 */
import type Rect3D from '../geoobject/Rect3D';
import MapLayer from '../geomap/MapLayer';
import type Dot3D from '../geoobject/Dot3D';

/**
 * @class Layer3D
 */
export default class Layer3D extends MapLayer {

  getClassName(): String {
    return this.CLASS_LAYER3D;
  }

  /**
   * 构造一个新的 Layer3D 对象。
   * @memberOf Layer3D
   * @returns {Promise.<Layer3D>}
   */
  static async createInstance(): Promise<Layer3D> {
    let thisObj = new Layer3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置图层驱动类型
   *
   * @memberof Layer3D
   * @param {String} strDriverType - 驱动类型字符串,DriverType
   * @returns {int} 成功返回1，失败返回0
   */
  async setDriverType(strDriverType: String): Promise<number> {
    let methodName = "setDriverType"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strDriverType];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层驱动类型
   *
   * @memberOf Layer3D
   * @returns {String} DriverType，成功返回图层驱动类型字符串，失败返回NULL
   *
   */
  async getDriverType(): Promise<String> {
    let methodName = "getDriverType"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置起止LOD级别
   * @memberOf Layer3D
   * @param lBeginLevel - 起始级别
   * @param lEndLevel - 终止级别
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setLODLevel(lBeginLevel: number, lEndLevel: number): Promise<number> {
    let methodName = "setLODLevel"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [lBeginLevel, lEndLevel];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取起止LOD级别
   * @memberOf Layer3D
   * @param lBeginLevel - 起始级别
   * @param lEndLevel - 终止级别
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async getLODLevel(lBeginLevel: number, lEndLevel: number): Promise<number> {
    let methodName = "getLODLevel"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [lBeginLevel, lEndLevel];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层类型
   *
   * @memberOf Layer3D
   * @returns {Layer3DType} 成功返回三维图层类型,Layer3DType枚举类型
   *
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置图层标识
   * @memberOf Layer3D
   * @param renderIndex - 图层标识（整形数字）
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setLayerRenderIndex(renderIndex: number): Promise<number> {
    let methodName = "setLayerRenderIndex"
    let paramsTypeStr = [this.INT];
    let paramsStr = [renderIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获得图层标识（整形数字）
   *
   * @memberOf Layer3D
   * @returns {int} 图层标识（整形数字）
   *
   */
   async getLayerRenderIndex(): Promise<number> {
    let methodName = "getLayerRenderIndex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置三维显示比
   * @memberOf Layer3D
   * @param scale3D - 各方向显示比，参数类型为Dot3D
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async setScale(scale3D: Dot3D): Promise<number> {
    let methodName = "setScale"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [scale3D];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取三维显示比
   * @memberOf Layer3D
   * @param scale3D - 获取到的各方向显示比，输出参数，参数类型为Dot3D
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async getScale(scale3D: Dot3D): Promise<number> {
    let methodName = "getScale"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [scale3D];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置图层三维范围
   * @memberOf Layer3D
   * @param pBox - pBox 三维范围，Rect3D类型，参数值为{double xMin, double yMin, double zMin, double xMax, double yMax, double zMax}
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async setExtent(pBox: Rect3D): Promise<number> {
    let methodName = "setExtent"
    let paramsTypeStr = [this.CLASS_RECT3D];
    let paramsStr = [pBox];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层三维范围
   * @memberOf Layer3D
   * @param pBox - 三维范围，输出参数，Rect3D类型，参数值为{double xMin, double yMin, double zMin, double xMax, double yMax, double zMax}
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async getExtent(pBox: Rect3D): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT3D];
    let paramsStr = [pBox];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 通过字符串设置图层参考系
   * @memberOf Layer3D
   * @param strSRSType - 参考系类型字符串，SRSType
   * @returns {Promise<number>} 成功返回1，失败返回0
   */
  async setSRSByString(strSRSType: String): Promise<number> {
    let methodName = "setSRSByString"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strSRSType];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }
  
  /**
   * 获取图层参考系
   *
   * @memberOf Layer3D
   * @returns {String} SRSType，成功返回图层参考系类型字符串，失败返回NULL
   *
   */
   async getSRSString(): Promise<String> {
    let methodName = "getSRSString"
    return await this.invoke(methodName, this.STRING);
  }

}
