/**
 * @content 场景文本图形
 * @author fangqi 2021-12-01 
 */
import Dot from '../geoobject/Dot';
import Dot3D from '../geoobject/Dot3D';
import Graphic3D from './Graphic3D';


/**
 * @class GraphicText3D
 */
export default class GraphicText3D extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_TEXT3D;
  }

  /**
   * 构造一个新的 GraphicText3D 对象。
   * @memberOf GraphicText3D
   * @returns {Promise.<GraphicText3D>}
   */
  static async createInstance(): Promise<GraphicText3D> {
    let thisObj = new GraphicText3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置图形位置
   * @memberOf GraphicText3D
   * @param {Dot3D} dot3D 定位点相对于文字的位置
   * @returns {Promise<void>}
   */
  async setPoint(dot3D: Dot3D): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文字的地理位置
   * @memberOf GraphicText3D
   * @returns {Promise<Dot3D>} 文字的地理坐标
   */
  async getPoint(): Promise<Dot3D> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置文本
   * @memberOf GraphicText3D
   * @param {String} text
   * @returns {Promise<void>}
   */
  async setText(text: String): Promise<void> {
    let methodName = "setText"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [text];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本
   * @memberOf GraphicText3D
   * @returns {Promise<String>}
   */
  async getText(): Promise<String> {
    let methodName = "getText"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置字体大小
   * @memberOf GraphicText3D
   * @param {number} fontSize 字体大小(像素大小)
   * @returns {Promise<void>}
   */
  async setFontSize(fontSize: number): Promise<void> {
    let methodName = "setFontSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [fontSize];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取字体大小
   * @memberOf GraphicText3D
   * @returns {Promise<number>} 字体大小
   */
  async getFontSize(): Promise<number> {
    let methodName = "getFontSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置文本对齐模式
   * @memberOf GraphicText3D
   * @param {GraphicText3DAlignmentMode} mode - 对齐模式
   * @returns {Promise<void>}
   */
  async setAlignment(alignmentmode: any): Promise<void> {
    let methodName = "setAlignment"
    let paramsTypeStr = [this.ENUM + this.CLASS_GRAPHIC_TEXT_3D_ALIGNMENT_MODE];
    let paramsStr = [alignmentmode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本对齐模式
   * @memberOf GraphicText3D
   * @returns {Promise<GraphicText3DAlignmentMode>} 文本对齐模式
   */
  async getAlignment(): Promise<any> {
    let methodName = "getAlignment"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置边界线像素偏移
   * @memberOf GraphicText3D
   * @param {number} offset - 偏移像素
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
   * @memberOf GraphicText3D
   * @returns {Promise<number>} 偏移像素
   */
  async getBorderlineOffset(): Promise<number> {
    let methodName = "getBorderlineOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置距离中心点像素偏移
   * @memberOf GraphicText3D
   * @param {Dot} pixelOffsetDot - 中心点像素偏移 (相对于(0,0)像素)
   * @returns {Promise<void>}
   */
  async setPixelOffset(pixelOffsetDot: Dot): Promise<void> {
    let methodName = "setPixelOffset"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [pixelOffsetDot.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取距离中心点像素偏移
   * @memberOf GraphicText3D
   * @returns {Promise<Dot>} 距离中心像素偏移(相对于(0,0)像素)
   */
  async getPixelOffset(): Promise<Dot> {
    let methodName = "getPixelOffset"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置是否开启重叠检测
   * @memberOf GraphicText3D
   * @param {boolean} enabled - 是否开启重叠检测
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
   * @memberOf GraphicText3D
   * @returns {Promise<boolean>} 是否开启重叠检测
   */
  async getEnableDecluttering(): Promise<boolean> {
    let methodName = "getEnableDecluttering"
    return await this.invoke(methodName, this.BOOLEAN);
  }

}
