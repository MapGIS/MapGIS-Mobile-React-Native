/**
 * @content 场景图片图形
 * @author fangqi 2021-11-30
 */
import Rect3D from '../geoobject/Rect3D';
import Graphic3D from './Graphic3D';
import Dot3D from '../geoobject/Dot3D';
import type Dot from '../geoobject/Dot';

/**
 * @constructor GraphicImage3D
 */
export default class GraphicImage3D extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_IMAGE3D;
  }

  /**
   * 构造一个新的 GraphicImage3D 对象。
   * @memberOf GraphicImage3D
   * @returns {Promise.<GraphicImage3D>}
   */
  static async createInstance(): Promise<GraphicImage3D> {
    let thisObj = new GraphicImage3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置图片路径
   * @memberOf GraphicImage3D
   * @param {String} strFilePath - 路径
   * @returns {Promise<void>}
   */
  async setImagePath(strFilePath: String): Promise<void> {
    let methodName = "setImagePath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strFilePath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图片路径
   * @memberOf GraphicImage3D
   * @returns {Promise<String>} 返回图片路径
   */
  async getImagePath(): Promise<String> {
    let methodName = "getImagePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取图形的外包矩形
   * @memberOf GraphicImage3D
   * @returns {Promise<Rect3D>} 返回外包矩形
   */
  async getBoundingBox(): Promise<Rect3D> {
    let methodName = "getBoundingBox"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形的中心点
   * @memberOf GraphicImage3D
   * @returns {Promise<Dot3D>} 返回图形的中心点
   */
  async getCenterPoint3D(): Promise<Dot3D> {
    let methodName = "getCenterPoint3D"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置图片的对齐模式
   * @memberOf GraphicImage3D
   * @param {AltitudeMode} altitudeMode - 对齐模式
   * @returns {Promise<void>}
   */
  async setAlignment(altitudeMode: any): Promise<void> {
    let methodName = "setAlignment"
    let paramsTypeStr = [this.CLASS_ALTITUDE_MODE];
    let paramsStr = [altitudeMode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置拐角
   * @memberOf GraphicImage3D
   * @param {Dot} lowerLeftDot - 左下拐角点
   * @param {Dot} lowerRightDot - 右下拐角点
   * @param {Dot} upperLeftDot - 左上拐角点
   * @param {Dot} upperRightDot - 右上拐角点
   * @returns {Promise<void>}
   */
  async setCorners(lowerLeftDot: Dot, lowerRightDot: Dot, upperLeftDot: Dot, upperRightDot: Dot): Promise<void> {
    let methodName = "setCorners"
    let paramsTypeStr = [this.CLASS_DOT, this.CLASS_DOT, this.CLASS_DOT, this.CLASS_DOT];
    let paramsStr = [lowerLeftDot.ObjId, lowerRightDot.ObjId, upperLeftDot.ObjId, upperRightDot.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取拐角点
   * @memberOf GraphicImage3D
   * @param {Dot} lowerLeftDot - 左下拐角点
   * @param {Dot} lowerRightDot - 右下拐角点
   * @param {Dot} upperLeftDot - 左上拐角点
   * @param {Dot} upperRightDot - 右上拐角点
   * @returns {Promise<void>}
   */
  async getCorners(lowerLeftDot: Dot, lowerRightDot: Dot, upperLeftDot: Dot, upperRightDot: Dot): Promise<void> {
    let methodName = "getCorners"
    let paramsTypeStr = [this.CLASS_DOT, this.CLASS_DOT, this.CLASS_DOT, this.CLASS_DOT];
    let paramsStr = [lowerLeftDot.ObjId, lowerRightDot.ObjId, upperLeftDot.ObjId, upperRightDot.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
