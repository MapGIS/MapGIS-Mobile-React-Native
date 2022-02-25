/**
 * @content 草图显示样式
 * @author fangqi 2021-09-10
 */
import PointStyle from './PointStyle';
import FillStyle from './FillStyle';
import TextStyle from './TextStyle';
import ObjectManager from '../components/ObjectManager';
import LineStyle from '../geomapview/LineStyle';

/**
 * @class SketchStyle
 * @description 草图显示样式（进行编辑的几何或新采集的几何的外观表现）
 */
export default class SketchStyle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SKETCH_STYLE;
  }

  /**
   * 构造一个新的SketchStyle对象
   *
   * @memberof SketchStyle
   * @returns {Promise<SketchStyle>}
   */
  static async createInstance(): Promise<SketchStyle> {
    let thisObj = new SketchStyle();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取顶点样式
   *
   * @memberof SketchStyle
   * @returns {Promise<PointStyle>}
   */
  async getVertexStyle(): Promise<PointStyle> {
    let methodName = "getVertexStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置顶点样式
   *
   * @memberof SketchStyle
   * @param {Object} vertexPointStyle 顶点样式（PointStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setVertexStyle(vertexPointStyle: PointStyle): Promise<void> {
    let methodName = "setVertexStyle"
    let paramsTypeStr = [this.CLASS_POINT_STYLE];
    let paramsStr = [vertexPointStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取中点样式
   *
   * @memberof SketchStyle
   * @returns {Promise<PointStyle>}
   */
  async getMidVertexStyle(): Promise<PointStyle> {
    let methodName = "getMidVertexStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置中点样式
   *
   * @memberof SketchStyle
   * @param {Object} midVertexPointStyle 中点样式（PointStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setMidVertexStyle(midVertexPointStyle: PointStyle): Promise<void> {
    let methodName = "setMidVertexStyle"
    let paramsTypeStr = [this.CLASS_POINT_STYLE];
    let paramsStr = [midVertexPointStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取参考点样式（放大镜内的点，标识手势点，也可用于捕捉）
   *
   * @memberof SketchStyle
   * @returns {Promise<PointStyle>}
   */
  async getReferenceVertexStyle(): Promise<PointStyle> {
    let methodName = "getReferenceVertexStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置参考点样式（放大镜内的点，标识手势点，也可用于捕捉）
   *
   * @memberof SketchStyle
   * @param {Object} referenceVertexPointStyle 参考点样式（PointStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setReferenceVertexStyle(referenceVertexPointStyle: PointStyle): Promise<void> {
    let methodName = "setReferenceVertexStyle"
    let paramsTypeStr = [this.CLASS_POINT_STYLE];
    let paramsStr = [referenceVertexPointStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线样式
   *
   * @memberof SketchStyle
   * @returns {Promise<LineStyle>}
   */
  async getLineStyle(): Promise<LineStyle> {
    let methodName = "getLineStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LineStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置线样式
   *
   * @memberof SketchStyle
   * @param {Object} lineStyle 线样式 （LineStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setLineStyle(lineStyle: LineStyle): Promise<void> {
    let methodName = "setLineStyle"
    let paramsTypeStr = [this.CLASS_LINE_STYLE];
    let paramsStr = [lineStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取参考线样式（开启放大镜后的牵引线）
   *
   * @memberof SketchStyle
   * @returns {Promise<LineStyle>}
   */
  async getReferenceLineStyle(): Promise<LineStyle> {
    let methodName = "getReferenceLineStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LineStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置参考线样式（开启放大镜后的牵引线）
   *
   * @memberof SketchStyle
   * @param {Object} lineStyle （LineStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setReferenceLineStyle(lineStyle: LineStyle): Promise<void> {
    let methodName = "setReferenceLineStyle"
    let paramsTypeStr = [this.CLASS_LINE_STYLE];
    let paramsStr = [lineStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取区样式
   *
   * @memberof SketchStyle
   * @returns {Promise<FillStyle>}
   */
  async getFillStyle(): Promise<FillStyle> {
    let methodName = "getFillStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new FillStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置区样式
   *
   * @memberof SketchStyle
   * @param {Object} fillStyle （FillStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setFillStyle(fillStyle: FillStyle): Promise<void> {
    let methodName = "setFillStyle"
    let paramsTypeStr = [this.CLASS_FILL_STYLE];
    let paramsStr = [fillStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取被选中的顶点样式
   *
   * @memberof SketchStyle
   * @returns {Promise<PointStyle>}
   */
  async getSelectedVertexStyle(): Promise<PointStyle> {
    let methodName = "getSelectedVertexStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置被选中的顶点样式
   *
   * @memberof SketchStyle
   * @param {Object} selectedVertexPointStyle 被选中的顶点样式（PointStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setSelectedVertexStyle(selectedVertexPointStyle: PointStyle): Promise<void> {
    let methodName = "setSelectedVertexStyle"
    let paramsTypeStr = [this.CLASS_POINT_STYLE];
    let paramsStr = [selectedVertexPointStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取被选中的中点样式
   *
   * @memberof SketchStyle
   * @returns {Promise<PointStyle>}
   */
  async getSelectedMidVertexStyle(): Promise<PointStyle> {
    let methodName = "getSelectedMidVertexStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置被选中的中点样式
   *
   * @memberof SketchStyle
   * @param {Object} selectedMidVertexPointStyle 被选中的中点样式（PointStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setSelectedMidVertexStyle(selectedMidVertexPointStyle: PointStyle): Promise<void> {
    let methodName = "setSelectedMidVertexStyle"
    let paramsTypeStr = [this.CLASS_POINT_STYLE];
    let paramsStr = [selectedMidVertexPointStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文本样式（标记线段长度、顶点坐标、区面积）
   *
   * @memberof SketchStyle
   * @returns {Promise<TextStyle>}
   */
  async getTextStyle(): Promise<TextStyle> {
    let methodName = "getTextStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new TextStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置文本样式
   *
   * @memberof SketchStyle
   * @param {Object} textStyle 文本样式（TextStyle类型的Object）
   * @returns {Promise<Void>}
   */
  async setTextStyle(textStyle: TextStyle): Promise<void> {
    let methodName = "setTextStyle"
    let paramsTypeStr = [this.CLASS_TEXT_STYLE];
    let paramsStr = [textStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否显示顶点坐标
   *
   * @memberof SketchStyle
   * @returns {boolean}
   */
  async isShowVertexCoord(): Promise<boolean> {
    let methodName = "isShowVertexCoord"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示顶点坐标
   *
   * @memberof SketchStyle
   * @param {boolean} isShowVertexCoord 是否显示顶点坐标
   * @returns {Promise<Void>}
   */
  async setShowVertexCoord(isShowVertexCoord: boolean): Promise<void> {
    let methodName = "setShowVertexCoord"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isShowVertexCoord];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示距离
   *
   * @memberof SketchStyle
   * @returns {boolean}
   */
  async isShowSegmentLength(): Promise<boolean> {
    let methodName = "isShowSegmentLength"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示距离
   * 可通过设置量算类型来控制显示的距离为图面距离还实地距离，显示实地距离时单位为米
   * 显示实地距离时，需要为SketchEditor设置空间参考系。
   * @memberof SketchStyle
   * @param {boolean} isShowSegmentLength 是否显示距离
   * @returns {Promise<Void>}
   */
  async setShowSegmentLength(isShowSegmentLength: boolean): Promise<void> {
    let methodName = "setShowSegmentLength"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isShowSegmentLength];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示面积
   *
   * @memberof SketchStyle
   * @returns {boolean}
   */
  async isShowArea(): Promise<boolean> {
    let methodName = "isShowArea"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示面积
   * 可通过设置量算类型来控制显示的面积为图面面积还实地面积，显示实地面积时单位为平方米
   * 显示实地面积时，需要为SketchEditor设置空间参考系。
   * @memberof SketchStyle
   * @param {boolean} isShowArea 是否显示面积
   * @returns {Promise<Void>}
   */
  async setShowArea(isShowArea: boolean): Promise<void> {
    let methodName = "setShowArea"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isShowArea];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否开启震动
   *
   * @memberof SketchStyle
   * @returns {boolean}
   */
  async isVibrationEnabled(): Promise<boolean> {
    let methodName = "isVibrationEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否开启震动
   *
   * @memberof SketchStyle
   * @param {boolean} isVibrationEnabled 是否开启震动,true:开启;false:不开启.默认开启.
   * @returns {Promise<Void>}
   */
  async setVibrationEnabled(isVibrationEnabled: boolean): Promise<void> {
    let methodName = "setVibrationEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isVibrationEnabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取量算类型
   *
   * @memberof SketchStyle
   * @returns {number} 量算类型（int类型的Number，例：1-MeasureType.PLANAR）
   */
  async getMeasureType() {
    let methodName = "getMeasureType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置量算类型
   *
   * @memberof SketchStyle
   * @param {number} measureType 量算类型（int类型的Number，例：1-MeasureType.PLANAR）
   * @returns {Promise<Void>}
   */
  async setMeasureType(measureType: any): Promise<void> {
    let methodName = "setMeasureType"
    let paramsTypeStr = [this.ENUM + this.CLASS_MEASURE_TYPE];
    let paramsStr = [measureType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
