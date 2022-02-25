/**
 * @content android视图点对象功能组件
 * @author fangqi 2021-7-24 
 */
import QueryDef from '../geodatabase/QueryDef';
import LinInfo from '../geoobject/LinInfo';
import MapLayer from './MapLayer';
import ScaleRange from './ScaleRange';

/**
 * @class VectorLayer
 */
export default class VectorLayer extends MapLayer {

  getClassName(): String {
    return this.CLASS_VECTOR_LAYER;
  }

  /**
   * 通过int类型的VectorLayreType构造一个新的 VectorLayer 对象。
   * @memberOf VectorLayer
   * @returns {Promise.<VectorLayer>}
   */
  static async createInstance(): Promise<VectorLayer> {
    let thisObj = new VectorLayer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取符号比
   *
   * @memberOf VectorLayer
   * @returns {Number} 符号比 -- double类型
   *
   */
  async getScaleOfSymbolSize(): Promise<number> {
    let methodName = "getScaleOfSymbolSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置符号尺寸基准比例尺
   *
   * @memberof GroupLayer
   * @param {int} scaleOfSymbolSize 符号尺寸基准比例尺
   * @returns {void} 
   */
  async setScaleOfSymbolSize(scaleOfSymbolSize: number): Promise<void> {
    let methodName = "setScaleOfSymbolSize"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [scaleOfSymbolSize];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否符号化显示
   * @memberOf VectorLayer
   * @returns {Promise<*>}
   */
  async getIsSymbolic(): Promise<boolean> {
    let methodName = "getIsSymbolic"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置符号化显示
   * @memberOf VectorLayer
   * @param isSymbolic
   * @returns {Promise<void>}
   */
  async setIsSymbolic(isSymbolic: boolean): Promise<void> {
    let methodName = "setIsSymbolic"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSymbolic];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否跟随缩放
   *
   * @memberOf VectorLayer
   * @returns {boolean}
   */
  async getIsFollowZoom(): Promise<boolean> {
    let methodName = "getIsFollowZoom"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否跟随缩放
   * @memberOf VectorLayer
   * @param {boolean} followZoom 跟随缩放
   * @returns {Promise<Void>}
   *
   */
  async setIsFollowZoom(isFollowZoom: boolean): Promise<void> {
    let methodName = "setIsFollowZoom"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isFollowZoom];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最小可见图形大小
   * @memberOf VectorLayer
   * @returns {Number} 最小可见图形大小 -- double类型
   */
  async getMinVisibleGeometricSize(): Promise<number> {
    let methodName = "getMinVisibleGeometricSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小可见图形大小
   *
   * @memberOf VectorLayer
   * @param {Number} minVisibleGeomSize 最小可见图形大小 -- double类型
   * @returns {}
   *
   */
  async setMinVisibleGeometricSize(minVisibleGeomSize: number): Promise<void> {
    let methodName = "setMinVisibleGeometricSize"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minVisibleGeomSize];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取透明度
   * @memberOf VectorLayer
   *
   * @return  透明度,0-100 默认为0,表示不透明。
   */
  async getTransparency(): Promise<number> {
    let methodName = "getTransparency"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置透明度,0-100 默认为0,表示不透明
   * @memberOf VectorLayer
   * @param {Number} transparency 透明度 -- 处于short数值范围的int类型的Number
   * @returns {Promise<void>} 1：成功，0：失败。
   */
  async setTransparency(transparency: number): Promise<void> {
    let methodName = "setTransparency"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [transparency];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置显示查询条件
   *
   * @memberOf VectorLayer
   * @param {QueryDef} def 查询条件
   * @returns {Promise<boolean>} 是否成功
   */
   async setQueryDef(def: QueryDef): Promise<boolean> {
    let methodName = "setQueryDef"
    let paramsTypeStr = [this.CLASS_QUERY_DEF];
    let paramsStr = [def.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取过滤显示条件
   *
   * @memberOf VectorLayer
   * @returns {Promise<QueryDef>} 
   */
   async getQueryDef(): Promise<QueryDef> {
    let methodName = "getQueryDef"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new QueryDef();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 清空查新条件
   *
   * @memberOf VectorLayer
   * @returns {boolean} 是否成功
   */
   async clearQueryDef(): Promise<boolean> {
    let methodName = "clearQueryDef"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 显示坐标点
   *
   * @memberOf VectorLayer
   * @returns {boolean} 是否显示坐标点
   */
   async getIsDipalyCoordinate(): Promise<boolean> {
    let methodName = "getIsDipalyCoordinate"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示坐标点
   * @memberOf VectorLayer
   * @param {boolean} isDipalyCoordinate 是否显示坐标点
   * @returns {Promise<Void>}
   *
   */
   async setIsDipalyCoordinate(isDipalyCoordinate: boolean): Promise<void> {
    let methodName = "setIsDipalyCoordinate"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isDipalyCoordinate];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否填充区，区图层有效
   *
   * @memberOf VectorLayer
   * @returns {boolean} 是否填充区
   */
   async getIsFillRegion(): Promise<boolean> {
    let methodName = "getIsFillRegion"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 是否填充区，区图层有效
   * @memberOf VectorLayer
   * @param {boolean} isFillRegion 是否填充区
   * @returns {Promise<Void>}
   *
   */
   async setIsFillRegion(isFillRegion: boolean): Promise<void> {
    let methodName = "setIsFillRegion"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isFillRegion];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否显示边线，区图层有效
   *
   * @memberOf VectorLayer
   * @returns {boolean} 是否显示边线
   */
   async getIsDisplayRegionBorder(): Promise<boolean> {
    let methodName = "getIsDisplayRegionBorder"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 是否显示边线，区图层有效
   * @memberOf VectorLayer
   * @param {boolean} isDisplayRegionBorder 是否显示边线
   * @returns {Promise<Void>}
   *
   */
   async setIsDisplayRegionBorder(isDisplayRegionBorder: boolean): Promise<void> {
    let methodName = "setIsDisplayRegionBorder"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isDisplayRegionBorder];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 显示外包矩形
   *
   * @memberOf VectorLayer
   * @returns {boolean} 是否显示显示外包矩形
   */
   async getIsDispalyOutsourcingRectangle(): Promise<boolean> {
    let methodName = "getIsDispalyOutsourcingRectangle"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示外包矩形
   * @memberOf VectorLayer
   * @param {boolean} isDispalyOutsourcingRectangle 是否显示外包矩形
   * @returns {Promise<Void>}
   *
   */
   async setIsDispalyOutsourcingRectangle(isDispalyOutsourcingRectangle: boolean): Promise<void> {
    let methodName = "setIsDispalyOutsourcingRectangle"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isDispalyOutsourcingRectangle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 边线是否符号化显示，区图层有效
   *
   * @memberOf VectorLayer
   * @returns {boolean} 边线是否符号化显示
   */
   async getIsSymbolicRegionBorder(): Promise<boolean> {
    let methodName = "getIsSymbolicRegionBorder"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 边线是否符号化显示，区图层有效
   * @memberOf VectorLayer
   * @param {boolean} isSymbolicRegionBorder 边线是否符号化显示
   * @returns {Promise<Void>}
   *
   */
   async setIsSymbolicRegionBorder(isSymbolicRegionBorder: boolean): Promise<void> {
    let methodName = "setIsSymbolicRegionBorder"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSymbolicRegionBorder];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 边线是否随图缩放，区图层有效
   *
   * @memberOf VectorLayer
   * @returns {boolean} 边线是否随图缩放
   */
   async getIsRegionBorderFollowZoom(): Promise<boolean> {
    let methodName = "getIsRegionBorderFollowZoom"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 边线是否符号化显示，区图层有效
   * @memberOf VectorLayer
   * @param {boolean} isRegionBorderFollowZoom 边线是否随图缩放
   * @returns {Promise<Void>}
   *
   */
   async setIsRegionBorderFollowZoom(isSymbolicRegionBorder: boolean): Promise<void> {
    let methodName = "setIsRegionBorderFollowZoom"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isSymbolicRegionBorder];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取区域边界线图形信息
   *
   * @memberOf VectorLayer
   * @returns {Promise<LinInfo>} 成功返回线图形信息
   */
  async getRegionBorderLinInfo(): Promise<LinInfo> {
    let methodName = "getRegionBorderLinInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LinInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置区域边界线图形信息
   *
   * @memberOf VectorLayer
   * @param {LinInfo} linInfo 线图形信息
   * @returns {Promise<Void>}
   */
  async setRegionBorderLinInfo(linInfo: LinInfo): Promise<void> {
    let methodName = "setRegionBorderLinInfo"
    let paramsTypeStr = [this.CLASS_LIN_INFO];
    let paramsStr = [linInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取符号化显示比例尺区间
   *
   * @memberOf VectorLayer
   * @returns {Promise<ScaleRange>} 比例尺区间
   */
   async getScaleRangeOfSymbolShow(): Promise<ScaleRange> {
    let methodName = "getScaleRangeOfSymbolShow"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置符号化显示比例尺区间
   *
   * @memberOf VectorLayer
   * @param {ScaleRange} scaleRange 比例尺区间
   * @returns {Promise<Void>} 是否成功
   */
   async setScaleRangeOfSymbolShow(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRangeOfSymbolShow"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 符号随图缩放比例尺区间
   *
   * @memberOf VectorLayer
   * @param {ScaleRange} scaleRange 比例尺区间
   * @returns {Promise<Void>} 是否成功
   */
   async setScaleRangeOfSymbolFollowZoom(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRangeOfSymbolFollowZoom"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取符号随图缩放比例尺区间
   *
   * @memberOf VectorLayer
   * @returns {Promise<ScaleRange>} 比例尺区间
   */
   async getScaleRangeOfSymbolFollowZoom(): Promise<ScaleRange> {
    let methodName = "getScaleRangeOfSymbolFollowZoom"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 区填充比例尺区间，区图层有效。
   *
   * @memberOf VectorLayer
   * @param {ScaleRange} scaleRange 比例尺区间
   * @returns {Promise<Void>} 是否成功
   */
   async setScaleRangeOfFillReg(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRangeOfFillReg"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取区填充比例尺区间，区图层有效
   *
   * @memberOf VectorLayer
   * @returns {Promise<ScaleRange>} 比例尺区间
   */
   async getScaleRangeOfFillReg(): Promise<ScaleRange> {
    let methodName = "getScaleRangeOfFillReg"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 显示边线比例尺区间，区图层有效。
   *
   * @memberOf VectorLayer
   * @param {ScaleRange} scaleRange 比例尺区间
   * @returns {Promise<Void>} 是否成功
   */
   async setScaleRangeOfShowRegBorder(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRangeOfShowRegBorder"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取区填充比例尺区间，区图层有效。
   *
   * @memberOf VectorLayer
   * @returns {Promise<ScaleRange>} 比例尺区间
   */
   async getScaleRangeOfShowRegBorder(): Promise<ScaleRange> {
    let methodName = "getScaleRangeOfShowRegBorder"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 边线符号化显示比例尺区间，区图层有效
   *
   * @memberOf VectorLayer
   * @param {ScaleRange} scaleRange 比例尺区间
   * @returns {Promise<Void>} 是否成功
   */
   async setScaleRangeOfRegBorderSymbolShow(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRangeOfRegBorderSymbolShow"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取边线符号化显示比例尺区间，区图层有效。
   *
   * @memberOf VectorLayer
   * @returns {Promise<ScaleRange>} 比例尺区间
   */
   async getScaleRangeOfRegBorderSymbolShow(): Promise<ScaleRange> {
    let methodName = "getScaleRangeOfRegBorderSymbolShow"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 边线符号化显示比例尺区间，区图层有效。
   *
   * @memberOf VectorLayer
   * @param {ScaleRange} scaleRange 比例尺区间
   * @returns {Promise<Void>} 是否成功
   */
   async setScaleRangeOfRegBorderFollowZoom(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRangeOfRegBorderFollowZoom"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 边线随图缩放比例尺区间，区图层有效。
   *
   * @memberOf VectorLayer
   * @returns {Promise<ScaleRange>} 比例尺区间
   */
   async getScaleRangeOfRegBorderFollowZoom(): Promise<ScaleRange> {
    let methodName = "getScaleRangeOfRegBorderFollowZoom"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }
  
  /**
   * 是否使用超链接(简单要素类和注记类图层使用)
   *
   * @memberOf VectorLayer
   * @returns {boolean} 是否使用超链接
   */
   async getIsUseSuperLink(): Promise<boolean> {
    let methodName = "getIsUseSuperLink"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否使用超链接(简单要素类和注记类图层使用)
   * @memberOf VectorLayer
   * @param {boolean} isUseSuperLink 是否使用超链接
   * @returns {Promise<Void>}
   *
   */
   async setIsUseSuperLink(isUseSuperLink: boolean): Promise<void> {
    let methodName = "setIsUseSuperLink"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isUseSuperLink];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取设置的超链接字段名称(简单要素类和注记类图层使用)
   *
   * @memberOf VectorLayer
   * @returns {String} 超链接字段名称
   */
   async getSuperLinkFieldName(): Promise<String> {
    let methodName = "getSuperLinkFieldName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置超链接字段名称(简单要素类和注记类图层使用)
   * @memberOf VectorLayer
   * @param {String} fieldName 超链接字段名称
   * @returns {Promise<Void>} 是否成功
   *
   */
   async setSuperLinkFieldName(fieldName: String): Promise<boolean> {
    let methodName = "setSuperLinkFieldName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [fieldName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
