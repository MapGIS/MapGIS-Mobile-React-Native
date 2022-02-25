/**
 * @content 场景地标图形
 * @author fangqi 2021-12-01 
 */
import Graphic3D from './Graphic3D';
import Dot3D from '../geoobject/Dot3D';
import Dot from '../geoobject/Dot';

/**
 * @constructor GraphicPlaceMarker
 */
export default class GraphicPlaceMarker extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_PLACE_MARKER;
  }

  /**
   * 构造一个新的 GraphicPlaceMarker 对象。
   * @memberOf GraphicPlaceMarker
   * @returns {Promise.<GraphicPlaceMarker>}
   */
  static async createInstance(): Promise<GraphicPlaceMarker> {
    let thisObj = new GraphicPlaceMarker();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置地标位置
   * @memberOf GraphicPlaceMarker
   * @param dot3D - 场景地理坐标
   * @returns {Promise<void>}
   */
  async setPosition(dot3D: Dot3D): Promise<void> {
    let methodName = "setPosition"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地标位置
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<Dot3D>} 返回地标位置
   */
  async getPostion(): Promise<Dot3D> {
    let methodName = "getPostion"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置地标图片位置
   * @memberOf GraphicPlaceMarker
   * @param imagePath - 图片路径
   * @returns {Promise<void>}
   */
  async setImagePath(imagePath: String): Promise<void> {
    let methodName = "setImagePath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [imagePath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地标图片的路径
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<String>} 返回地标图片的路径
   */
  async getImagePath(): Promise<String> {
    let methodName = "getImagePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置标签
   * @memberOf GraphicPlaceMarker
   * @param text - 
   * @returns {Promise<void>}
   */
  async setLabelText(text: String): Promise<void> {
    let methodName = "setLabelText"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [text];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地标标签
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<String>} 返回地标标签
   */
  async getLabelText(): Promise<String> {
    let methodName = "getLabelText"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置标签字体大小
   * @memberOf GraphicPlaceMarker
   * @param textSize - 标签字体大小
   * @returns {Promise<void>}
   */
  async setLabelTextSize(textSize: number): Promise<void> {
    let methodName = "setLabelTextSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [textSize];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标签字体大小
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<Number>} 返回标签字体大小
   */
  async getLabelTextSize(): Promise<number> {
    let methodName = "getLabelTextSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取文本对齐方式
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<GraphicText3DAlignmentMode>} 返回文本对齐方式
   */
  async getLabelAlignment(): Promise<any> {
    let methodName = "getLabelAlignment"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置文本对齐方式
   * @memberOf GraphicPlaceMarker
   * @param {GraphicText3DAlignmentMode} alignmentmode - 对齐方式
   * @returns {Promise<void>}
   */
  async setLabelAlignment(alignmentmode: any): Promise<void> {
    let methodName = "setLabelAlignment"
    let paramsTypeStr = [this.ENUM + this.CLASS_GRAPHIC_TEXT_3D_ALIGNMENT_MODE];
    let paramsStr = [alignmentmode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图片的对齐方式
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<GraphicImage3DAlignmentMode>} 返回图片的对齐方式
   */
  async getImageAlignment(): Promise<any> {
    let methodName = "getImageAlignment"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置图片对齐方式
   * @memberOf GraphicPlaceMarker
   * @param {GraphicImage3DAlignmentMode} alignmentmode - 图片对齐方式
   * @returns {Promise<void>}
   */
  async setImageAlignment(alignmentmode: any): Promise<void> {
    let methodName = "setImageAlignment"
    let paramsTypeStr = [this.ENUM + this.CLASS_GRAPHIC_IMAGE_3D_ALIGNMENT_MODE];
    let paramsStr = [alignmentmode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置边界线像素偏移
   * @memberOf GraphicPlaceMarker
   * @param offset - 偏移像素
   * @returns {Promise<void>}
   */
  async setBorderlineOffset(offset: number): Promise<void> {
    let methodName = "setBorderlineOffset"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [offset];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取边界线像素偏移
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<Number>} 偏移像素
   */
  async getBorderlineOffset(): Promise<number> {
    let methodName = "getBorderlineOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置距离中心点像素偏移
   * @memberOf GraphicPlaceMarker
   * @param pixelOffsetDot - 中心点像素偏移 (相对于(0,0)像素)
   * @returns {Promise<void>}
   */
  async setLabelPixelOffset(pixelOffsetDot: Dot): Promise<void> {
    let methodName = "setLabelPixelOffset"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [pixelOffsetDot.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取距离中心点像素偏移
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<Dot>} 距离中心像素偏移(相对于(0,0)像素)
   */
  async getLabelPixelOffset(): Promise<Dot> {
    let methodName = "getLabelPixelOffset"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置地标的方向角
   * @memberOf GraphicPlaceMarker
   * @param headingAngle - 方向角
   * @returns {Promise<void>}
   */
  async setImageHeading(headingAngle: number): Promise<void> {
    let methodName = "setImageHeading"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [headingAngle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地标的方向角
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<Number>} 方向角
   */
  async getImageHeading(): Promise<number> {
    let methodName = "getImageHeading"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置是否开启重叠检测
   * @memberOf GraphicPlaceMarker
   * @param enabled - 是否开启重叠检测
   * @returns {Promise<void>}
   */
  async setEnableDecluttering(enabled: boolean): Promise<void> {
    let methodName = "setEnableDecluttering"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否开启重叠检测
   * @memberOf GraphicPlaceMarker
   * @returns {Promise<boolean>} 是否开启重叠检测
   */
  async getEnableDecluttering(): Promise<boolean> {
    let methodName = "getEnableDecluttering"
    return await this.invoke(methodName, this.BOOLEAN);
  }

}
