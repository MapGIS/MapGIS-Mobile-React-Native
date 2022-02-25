/**
 * @content 图片对象功能组件
 * @author fangqi 2021-7-24
 */
import Dot from '../geoobject/Dot';
import Image from '../native/Image';
import PointF from '../native/PointF';
import Graphic from './Graphic';

/**
 * @constructor GraphicImage
 */
export default class GraphicImage extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_IMAGE;
  }

  /**
   * 构造一个新的 GraphicImage 对象。
   * @memberOf GraphicImage
   * @returns {Promise.<GraphicImage>}
   */
  static async createInstance(): Promise<GraphicImage> {
    let thisObj = new GraphicImage();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 通过文件路径设置图片
   * @memberOf GraphicImage
   * @param {String} filePath
   * @returns {Promise<void>}
   */
  async setImageByFilePath(filePath: String): Promise<void> {
    let methodName = "setImage"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [filePath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置图片
   * @memberOf GraphicImage
   * @param {Image} image
   * @returns {Promise<void>}
   */
  async setImage(image: Image): Promise<void> {
    let methodName = "setImage"
    let paramsTypeStr = [this.CLASS_IMAGE];
    let paramsStr = [image.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置位置
   * @memberOf GraphicImage
   * @param {Dot} point
   * @returns {Promise<void>}
   */
  async setPoint(point: Dot): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置锚点
   * @memberOf GraphicImage
   * @param {PointF} anchorPoint 图片锚点的位置：左下角为(0,0),右上角为(1,1)
   * @returns {Promise<void>}
   */
  async setAnchorPoint(anchorPoint: PointF): Promise<void> {
    let methodName = "setAnchorPoint"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [anchorPoint.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取锚点
   * @memberOf GraphicImage
   * @returns {Promise<PointF>}
   */
  async getAnchorPoint(): Promise<PointF> {
    let methodName = "getAnchorPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置透明度
   * @memberOf GraphicImage
   * @param {number} alpha 透明度：0(透明)-255(不透明)
   * @returns {Promise<void>}
   */
  async setAlpha(alpha: number): Promise<void> {
    let methodName = "setAlpha"
    let paramsTypeStr = [this.INT];
    let paramsStr = [alpha];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置旋转角度
   * @memberOf GraphicImage
   * @param {number} rotateAngle
   * @returns {Promise<void>}
   */
  async setRotateAngle(rotateAngle: number): Promise<void> {
    let methodName = "setRotateAngle"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [rotateAngle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置是否随地图倾斜
   * @memberOf GraphicImage
   * @param {boolean} IsSlope
   * @returns {Promise<void>}
   */
  async setSlope(IsSlope: boolean): Promise<void> {
    let methodName = "setSlope"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [IsSlope];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图片
   * @memberOf GraphicImage
   * @returns {Promise<Image>}
   */
  async getImage() :Promise<Image>{
    let methodName = "getImage"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Image();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取位置
   * @memberOf GraphicImage
   * @returns {Promise<Dot>}
   */
  async getPoint(): Promise<Dot> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }
  /**
   * 获取旋转角度
   * @memberOf GraphicImage
   * @returns {Promise<number>}
   */
  async getRotateAngle(): Promise<number> {
    let methodName = "getRotateAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取透明度
   * @memberOf GraphicImage
   * @returns {Promise<number>}
   */
  async getAlpha(): Promise<number> {
    let methodName = "getAlpha"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取是否随地图倾斜
   * @memberOf GraphicImage
   * @returns {Promise<boolean>}
   */
  async isSlope(): Promise<boolean> {
    let methodName = "isSlope"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取图片宽度
   * @memberOf GraphicImage
   * @returns {Promise<number>}
   */
  async getImageWidth(): Promise<number> {
    let methodName = "getImageWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取图片高度
   * @memberOf GraphicImage
   * @returns {Promise<number>}
   */
  async getImageHeight(): Promise<number> {
    let methodName = "getImageHeight"
    return await this.invoke(methodName, this.NUMBER);
  }
}
