/**
 * @content 线对象功能组件
 * @author fangqi 2021-7-24 
 */
import type Image from '../native/Image';
import GraphicMultiPoint from './GraphicMultiPoint';

/**
 * @class GraphicPolylin
 */
export default class GraphicPolylin extends GraphicMultiPoint {

  getClassName(): String {
    return this.CLASS_GRAPHIC_POLYLIN;
  }

  /**
   * 构造一个新的 GraphicPolylin 对象。
   * @memberOf GraphicPolylin
   * @returns {Promise.<GraphicPolylin>}
   */
   static async createInstance(): Promise<GraphicPolylin> {
    let thisObj = new GraphicPolylin();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置线宽
   * @memberOf GraphicPolylin
   * @param {Number} width
   * @returns {Promise<void>}
   */
  async setLineWidth(width: number): Promise<void> {
    let methodName = "setLineWidth"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线的宽度
   * @memberOf GraphicPolylin
   * @returns {Promise<Number>}
   */
  async getLineWidth(): Promise<number> {
    let methodName = "getLineWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取线的长度
   * @memberOf GraphicPolylin
   * @returns {Promise<Number>}
   */
  async getLength(): Promise<number> {
    let methodName = "getLength"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置线的填充纹理 要求纹理的宽高为2的幂。
   * @memberOf GraphicPolylin
   * @param {Image} image 填充图片
   * @returns {Promise<void>}
   */
  async setFillTexture(image: Image): Promise<void> {
    let methodName = "setFillTexture"
    let paramsTypeStr = [this.CLASS_IMAGE];
    let paramsStr = [image.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
