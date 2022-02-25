/**
 * @content 矢量地图服务
 * @author fangqi 2021-09-04
 */
import LayerSampleInfo from './LayerSampleInfo';
import MapServer from './MapServer';

/**
 * @class VectorMapServer
 * @description 矢量地图服务
 */
export default class VectorMapServer extends MapServer {

  getClassName(): String {
    return this.CLASS_VECTOR_MAP_SERVER;
  }

  /**
   * 创建一个新的VectorMapServer对象
   *
   * @memberof VectorMapServer
   * @returns {Promise<VectorMapServer>}
   */
  static async createInstance(): Promise<VectorMapServer> {
    let thisObj = new VectorMapServer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取动态参照系个数
   *
   * @memberof VectorMapServer
   * @returns {int} 照系个数
   */
  async getCRSCount(): Promise<number> {
    let methodName = "getCRSCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取索引对应的动态参照系名称
   *
   * @memberof VectorMapServer
   * @param {int} index 参照系索引
   * @returns {String} 参照系名称
   */
  async getCRS(index: number): Promise<String> {
    let methodName = "getCRS"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 设置当前动态参照系名称
   *
   * @memberof VectorMapServer
   * @param {String} strCRS 参照系名称
   * @returns {int}  1-成功 ；0-失败
   */
  async setCurrentCRS(strCRS: String): Promise<number> {
    let methodName = "setCurrentCRS"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strCRS];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取当前动态参照系名称
   *
   * @memberof VectorMapServer
   * @returns {String}  参照系名称
   */
  async getCurrentCRS(): Promise<String> {
    let methodName = "getCurrentCRS"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 
   * @memberof VectorMapServer
   * @returns {int} 数量
   */
  async getLayerInfoCount(): Promise<number> {
    let methodName = "GetLayerInfoCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberof VectorMapServer
   * @returns {Promise<LayerSampleInfo>} 
   */
  async getLayerSampleInfo(index: number): Promise<LayerSampleInfo> {
    let methodName = "GetLayerSampleInfo"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new LayerSampleInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取矢量图像
   *
   * @memberof VectorMapServer
   * @returns {Array}  矢量图像数据 (int类型的Array)
   */
  async getVectorImage(
    imgWidth: number,
    imgHeight: number,
    disPRectXMin: number,
    disPRectYMin: number,
    disPRectXMax: number,
    disPRectYMax: number
  ): Promise<number[]> {
    let methodName = "getVectorImage"
    let paramsTypeStr = [this.INT, this.INT, this.DOUBLE, this.DOUBLE, this.DOUBLE, this.DOUBLE];
    let paramsStr = [imgWidth, imgHeight, disPRectXMin, disPRectYMin, disPRectXMax, disPRectYMax];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 释放矢量图像数据
   *
   * @memberof VectorMapServer
   * @param {Array} buf 矢量图像数据
   * @returns {int}  1-成功 ；0-失败
   */
  async freeVectorImage(buf: number[]): Promise<number> {
    let methodName = "freeVectorImage"
    let paramsTypeStr = [this.ARRAY + this.BYTE];
    let paramsStr = [buf];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
