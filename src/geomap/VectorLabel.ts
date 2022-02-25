/**
 * @content 矢量标注
 * @author fangqi 2021-10-09
 */
import Label from './Label';
import RegionPlaceInfo from './RegionPlaceInfo';
import LinePlaceInfo from './LinePlaceInfo';
import PointPlaceInfo from './PointPlaceInfo';
import LinInfo from '../geoobject/LinInfo';

/**
 * @class VectorLabel
 * @description 矢量标注
 */
export default class VectorLabel extends Label {

  getClassName(): String {
    return this.CLASS_VECTOR_LABEL;
  }

  /**
   * 获取最小显示比
   *
   * @memberof VectorLabel
   * @returns {double} 最小显示比
   */
  async getMinScale(): Promise<number> {
    let methodName = "getMinScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小显示比
   *
   * @memberof VectorLabel
   * @param {double} minScale 最小显示比
   * @returns {Promise<Void>}
   */
  async setMinScale(minScale: number): Promise<void> {
    let methodName = "setMinScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最大显示比
   *
   * @memberof VectorLabel
   * @returns {double} 最大显示比
   */
  async getMaxScale(): Promise<number> {
    let methodName = "getMaxScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大显示比
   *
   * @memberof VectorLabel
   * @param {double} maxScale 最大显示比
   * @returns {Promise<Void>}
   */
  async setMaxScale(maxScale: number): Promise<void> {
    let methodName = "setMaxScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [maxScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标注类型
   *
   * @memberof VectorLabel
   * @returns {int} 标注类型，例：1-LabelGeomType.PointGeom
   */
  async getLabelGeomType() {
    let methodName = "getLabelGeomType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置标注类型
   *
   * @memberof VectorLabel
   * @param {int} labelGeomType 标注类型，例：1-LabelGeomType.PointGeom
   * @returns {Promise<Void>}
   */
  async setLabelGeomType(labelGeomType: any): Promise<void> {
    let methodName = "setLabelGeomType"
    let paramsTypeStr = [this.ENUM + this.CLASS_LABEL_GEOM_TYPE];
    let paramsStr = [labelGeomType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点放置样式
   *
   * @memberof VectorLabel
   * @returns {Promise<PointPlaceInfo>}
   */
  async getPntPlaceInfo(): Promise<PointPlaceInfo> {
    let methodName = "getPntPlaceInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointPlaceInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置点放置样式
   *
   * @memberof VectorLabel
   * @param {PointPlaceInfo} pointPlaceInfo 点放置样式 (object--PointPlaceInfo)
   * @returns {Promise<Void>}
   */
  async setPntPlaceInfo(pointPlaceInfo: PointPlaceInfo): Promise<void> {
    let methodName = "setPntPlaceInfo"
    let paramsTypeStr = [this.CLASS_POINT_PLACE_INFO];
    let paramsStr = [pointPlaceInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线放置样式
   *
   * @memberof VectorLabel
   * @returns {Promise<LinePlaceInfo>}
   */
  async getLinPlaceInfo(): Promise<LinePlaceInfo> {
    let methodName = "getLinPlaceInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LinePlaceInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置线放置样式
   *
   * @memberof VectorLabel
   * @param {LinePlaceInfo} linPlaceInfo 线放置样式 (Object--LinePlaceInfo)
   * @returns {Promise<Void>}
   */
  async setLinPlaceInfo(linPlaceInfo: LinePlaceInfo): Promise<void> {
    let methodName = "setLinPlaceInfo"
    let paramsTypeStr = [this.CLASS_LINE_PLACE_INFO];
    let paramsStr = [linPlaceInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取区放置样式
   *
   * @memberof VectorLabel
   * @returns {Promise<RegionPlaceInfo>}
   */
  async getRegPlaceInfo(): Promise<RegionPlaceInfo> {
    let methodName = "getRegPlaceInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new RegionPlaceInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置区放置样式
   *
   * @memberof VectorLabel
   * @param {Object} regPlaceInfo 区放置样式 （Object--RegionPlaceInfo）
   * @returns {Promise<Void>}
   */
  async setRegPlaceInfo(regPlaceInfo: RegionPlaceInfo): Promise<void> {
    let methodName = "setRegPlaceInfo"
    let paramsTypeStr = [this.CLASS_REGION_PLACE_INFO];
    let paramsStr = [regPlaceInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标注相对原始位置的偏移量（设备坐标值，像素）
   * @memberOf VectorLabel
   * @returns {Promise<Number>}
   */
  async getXOffset(): Promise<number> {
    let methodName = "getXOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置标注相对原始位置的偏移量（设备坐标值，像素）
   * @memberOf VectorLabel
   * @param {Number} newVal 标注相对原始位置的偏移量（设备坐标值，像素）
   * @returns {Promise<void>}
   */
  async setXOffset(newVal: number): Promise<void> {
    let methodName = "setXOffset"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取Y方向的偏移量
   * @memberOf VectorLabel
   * @returns {Promise<Number>}
   */
  async getYOffset(): Promise<number> {
    let methodName = "getYOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置Y方向的偏移量
   * @memberOf VectorLabel
   * @param {Number} newVal Y方向的偏移量
   * @returns {Promise<void>}
   */
  async setYOffset(newVal: number): Promise<void> {
    let methodName = "setYOffset"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否屏幕外标注,允许存在不完整的标注
   *
   * @memberof VectorLabel
   * @returns {boolean}
   */
  async getLabelClientOutSide(): Promise<boolean> {
    let methodName = "getLabelClientOutSide"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否屏幕外标注,允许存在不完整的标注
   *
   * @memberof VectorLabel
   * @param {boolean} labelClientOutSide 是否屏幕外标注
   * @returns {Promise<Void>}
   */
  async setLabelClientOutSide(labelClientOutSide: boolean): Promise<void> {
    let methodName = "setLabelClientOutSide"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [labelClientOutSide];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否显示牵引线
   *
   * @memberof VectorLabel
   * @returns {boolean}
   */
  async getDisplayLeaderLine(): Promise<boolean> {
    let methodName = "getDisplayLeaderLine"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示牵引线
   *
   * @memberof VectorLabel
   * @param {boolean} labelClientOutSide 是否显示牵引线
   * @returns {Promise<Void>}
   */
  async setDisplayLeaderLine(labelClientOutSide: boolean): Promise<void> {
    let methodName = "setDisplayLeaderLine"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [labelClientOutSide];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取牵引线样式
   *
   * @memberof VectorLabel
   * @returns {Promise<LinInfo>}
   */
  async getLeaderLinInfo(): Promise<LinInfo> {
    let methodName = "getLeaderLinInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LinInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置牵引线样式
   *
   * @memberof VectorLabel
   * @param {LinInfo} newVal 牵引线样式
   * @returns {Promise<Void>}
   */
  async setLeaderLinInfo(newVal: LinInfo): Promise<void> {
    let methodName = "setLeaderLinInfo"
    let paramsTypeStr = [this.CLASS_LIN_INFO];
    let paramsStr = [newVal.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 保存为XML
   *
   * @memberof VectorLabel
   * @returns {String} 成功返回XML
   */
  async toXML(): Promise<String> {
    let methodName = "toXML"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 从XML导入
   *
   * @memberof VectorLabel
   * @param strXML XML串
   * @returns {boolean} 成功/失败 true/false
   */
  async fromXML(strXML: String): Promise<boolean> {
    let methodName = "fromXML"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strXML];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
