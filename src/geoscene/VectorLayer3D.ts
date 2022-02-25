/**
 * @content 三维矢量图层类，通过该类可以向场景中添加矢量图层
 * @author fangqi 2021-11-25 
 */
import type Rect from '../geoobject/Rect';
import Layer3D from './Layer3D';

/**
 * @class VectorLayer3D
 */
export default class VectorLayer3D extends Layer3D {

  getClassName(): String {
    return this.CLASS_VECTORLAYER3D;
  }

  /**
   * 通过int类型的VectorLayreType构造一个新的 VectorLayer3D 对象。
   * @memberOf VectorLayer3D
   * @returns {Promise.<VectorLayer3D>}
   */
  static async createInstance(): Promise<VectorLayer3D> {
    let thisObj = new VectorLayer3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图层类型
   *
   * @memberOf VectorLayer3D
   * @returns {Layer3DType} Layer3DType枚举类型，成功返回三维图层类型,返回值为Vector
   *
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置图层显示的透明度
   * @memberOf VectorLayer3D
   * @param {Number} sAlpha - 透明度，值为0-100， 默认为0（表示不透明）
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async setTransparency(sAlpha: number): Promise<number> {
    let methodName = "setTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层显示的透明度
   * @memberOf VectorLayer3D
   * @param {Number} sAlpha - 透明度，值为0-100， 默认为0（表示不透明）
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async getTransparency(sAlpha: number): Promise<number> {
    let methodName = "getTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置图层是否应用光照(该图层的光照开启与否将不再受SetSunLightingMode函数的影响)
   *
   * @memberof GroupLayer
   * @param {boolean} value - true: 开启光照，false：关闭光照
   * @returns {void} 
   */
  async setLightingEnabled(value: boolean): Promise<void> {
    let methodName = "setLightingEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图层是否应用光照
   * @memberOf VectorLayer3D
   * @returns {Promise<boolean>} true: 开启光照，false：关闭光照
   */
  async isLightingEnabled(): Promise<boolean> {
    let methodName = "isLightingEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置图层样式文档路径
   *
   * @memberof GroupLayer
   * @param {String} filePath - 文档路径
   * @returns {void} 
   */
  async setConfigFile(filePath: String): Promise<void> {
    let methodName = "setConfigFile"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [filePath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图层样式文档路径
   * @memberOf VectorLayer3D
   * @returns {Promise<String>} 文档路径
   */
  async getConfigFile(): Promise<String> {
    let methodName = "getConfigFile"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取图层范围
   * @memberOf VectorLayer3D
   * @param {Rect} pRect - 二维范围，Rect类型，参数值为{double xMin, double yMin, double xMax, double yMax}
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
  async getExtent(pRect: Rect): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [pRect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
