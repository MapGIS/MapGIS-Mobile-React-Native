/**
 * @content 虚线线对象功能组件
 * @author fangqi 2021-7-24 
 */
import Dot from '../geoobject/Dot';
import PointF from '../native/PointF';
import Graphic from './Graphic';


/**
 * @class GraphicText
 */
export default class GraphicText extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_TEXT;
  }

  /**
   * 构造一个新的 GraphicText 对象。
   * @memberOf GraphicText
   * @returns {Promise.<GraphicText>}
   */
  static async createInstance(): Promise<GraphicText> {
    let thisObj = new GraphicText();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置位置
   * @memberOf GraphicText
   * @param {Dot} point 定位点相对于文字的位置
   * @returns {Promise<void>}
   */
  async setPoint(point: Dot): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置文本
   * @memberOf GraphicText
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
   * 设置字体大小
   * @memberOf GraphicText
   * @param {Number} fontSize  字体大小
   * @returns {Promise<void>}
   */
  async setFontSize(fontSize: number): Promise<void> {
    let methodName = "setFontSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [fontSize];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置是否随地图倾斜
   * @memberOf GraphicText
   * @param {boolean} isSlope
   * @returns {Promise<void>}
   */
  async setSlope(isSlope: boolean): Promise<void> {
    let methodName = "setSlope"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSlope];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本的位置
   * @memberOf GraphicText
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
   * 获取文本
   * @memberOf GraphicText
   * @returns {Promise<String>}
   */
  async getText(): Promise<String> {
    let methodName = "getText"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取字体大小
   * @memberOf GraphicText
   * @returns {Promise<Number>}
   */
  async getFontSize(): Promise<number> {
    let methodName = "getFontSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取是否随地图倾斜
   * @memberOf GraphicText
   * @returns {Promise<Boolean>}
   */
  async isSlope(): Promise<boolean> {
    let methodName = "isSlope"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取文本宽度
   * @memberOf GraphicText
   * @returns {Promise<Number>}
   */
  async getTextWidth(): Promise<number> {
    let methodName = "getTextWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取文本高度
   * @memberOf GraphicText
   * @returns {Promise<Number>}
   */
  async getTextHeight(): Promise<number> {
    let methodName = "getTextHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置锚点
   * @memberOf GraphicText
   * @param {PointF} anchorPoint 文本锚点的位置：左下角为(0,0),右上角为(1,1)
   * @returns {Promise<void>}
   */
  async setAnchorPointByPoint(anchorPoint: PointF): Promise<void> {
    let methodName = "setAnchorPoint"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [anchorPoint.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取锚点
   * @memberOf GraphicText
   * @returns {Promise<PointF>} 文本锚点的位置：左下角为(0,0),右上角为(1,1)
   */
  async getAnchorPoint(): Promise<PointF> {
    let methodName = "getAnchorPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置锚点
   * @memberOf GraphicText
   * @param {Number} referenceWidth    参考宽度
   * @param {Number} referenceHeight   参考高度
   * @param {Number} referenceInterval 参考间隔
   * @param {PointF} anchorPoint       文本锚点的位置：左下角为(0,0),右上角为(1,1)
   * @returns {Promise<void>}
   */
  async setReferenceInfo(
    referenceWidth: number,
    referenceHeight: number,
    referenceInterval: number,
    anchorPoint: PointF
  ): Promise<void> {
    let methodName = "setReferenceInfo"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.CLASS_POINTF];
    let paramsStr = [referenceWidth, referenceHeight, referenceInterval, anchorPoint.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
