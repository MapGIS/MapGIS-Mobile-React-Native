/**
 * @content 模型图层类，通过该类可以向场景中添加三维模型图层
 * @author fangqi 2021-11-26 
 */
import type Rect3D from "../geoobject/Rect3D";
import Layer3D from "./Layer3D";
import SelectionProperties from "./SelectionProperties";
import SelectionStyle from "./SelectionStyle";
import { getArrayObjIds } from "../components/ObjectManager";

/**
 * @class ModelCacheLayer3D
 */
export default class ModelCacheLayer3D extends Layer3D {

  getClassName(): String {
    return this.CLASS_MODEL_CACHE_LAYER3D;
  }

  /**
   * 构造一个新 ModelCacheLayer3D 对象
   *
   * @memberof ModelCacheLayer3D
   * @returns {Promise<ModelCacheLayer3D>}
   */
  static async createInstance(): Promise<ModelCacheLayer3D> {
    let thisObj = new ModelCacheLayer3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置图层是否应用光照(该图层的光照开启与否将不再受SetSunLightingMode函数的影响)
   *
   * @memberof ModelCacheLayer3D
   * @param {boolean} value - true: 开启光照，false：关闭光照
   * @returns {void} 
   */
  async setLightingEnabled(value: boolean): Promise<void> {
    let methodName = "setLightingEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图层是否应用光照
   *
   * @memberof ModelCacheLayer3D
   * @returns {boolean} true: 开启光照，false：关闭光照
   */
  async isLightingEnabled(): Promise<boolean> {
    let methodName = "isLightingEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 清除m3d模型缓存
   *
   * @memberof ModelCacheLayer3D
   * @returns {boolean} 成功返回true,失败返回false
   */
  async clearCache(): Promise<boolean> {
    let methodName = "clearCache"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置图层显示模式透明度
   *
   * @memberof ModelCacheLayer3D
   * @param {number} sAlpha - 透明度,sAlpha值为0-100，默认为100（表示不透明）
   * @returns {int} 返回值：1-成功；0-失败
   */
  async setTransparency(sAlpha: number): Promise<number> {
    let methodName = "setTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层显示模式透明度
   *
   * @memberof ModelCacheLayer3D
   * @param {number} sAlpha - 透明度,sAlpha值为0-100，默认为100（表示不透明）
   * @returns {int} 返回值：1-成功；0-失败
   */
  async getTransparency(sAlpha: number): Promise<number> {
    let methodName = "getTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置选择要素的样式
   *
   * @memberof ModelCacheLayer3D
   * @param selectionProperties - 样式信息
   * @returns {void} 
   */
  async setSelectionProperties(selectionProperties: SelectionProperties): Promise<void> {
    let methodName = "setSelectionProperties"
    let paramsTypeStr = [this.CLASS_SELECTION_PROPERTIES];
    let paramsStr = [selectionProperties.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取选择要素的样式
   * @memberof ModelCacheLayer3D 
   * @returns {Promise<SelectionProperties>} 样式信息
   */
  async getSelectionProperties(): Promise<SelectionProperties> {
    let methodName = "getSelectionProperties"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SelectionProperties();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置选择的要素id
   *
   * @memberof ModelCacheLayer3D
   * @param {number} featureID - 要素id
   * @returns {void} 
   */
  async selectFeature(featureID: number): Promise<void> {
    let methodName = "selectFeature"
    let paramsTypeStr = [this.INT];
    let paramsStr = [featureID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置选择的要素id列表
   *
   * @memberof ModelCacheLayer3D
   * @param featureIDs - id列表
   * @param idsCount - 数目
   * @returns {void} 
   */
  async selectFeatures(featureIDs: number[], idsCount: number): Promise<void> {
    let methodName = "selectFeatures"
    let paramsTypeStr = [this.ARRAY + this.INT, this.INT];
    let paramsStr = [featureIDs, idsCount];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置选择要素的id及对应的样式
   *
   * @memberof ModelCacheLayer3D
   * @param featureID - 要素id
   * @param featureID - 要素id
   * @returns {void} 
   */
  async selectFeatureIdAndStyle(featureID: number, style: SelectionStyle): Promise<void> {
    let methodName = "selectFeature"
    let paramsTypeStr = [this.INT, this.CLASS_SELECTION_STYLE];
    let paramsStr = [featureID, style.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置选择的要素id列表及对应的样式列表
   *
   * @memberof ModelCacheLayer3D
   * @param featureIDs - id列表
   * @param idsCount - 数目
   * @param styles - 样式列表
   * @param styleCount - 样式数目
   * @returns {void} 
   */
  async selectFeaturesIdsAndStyles(featureIDs: number[], idsCount: number, styles: SelectionStyle[], stylesCount: number): Promise<void> {
    let objIDs = getArrayObjIds(styles);

    let methodName = "selectFeatures"
    let paramsTypeStr = [this.ARRAY + this.INT, this.INT, this.ARRAY + this.CLASS_SELECTION_STYLE, this.INT];
    let paramsStr = [featureIDs, idsCount, objIDs, stylesCount];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取选中要素的数目
   *
   * @memberof ModelCacheLayer3D
   * @returns {number} 
   */
  async getSelectingFeatureIDsCount(): Promise<number> {
    let methodName = "getSelectingFeatureIDsCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取选中的要素id列表
   *
   * @memberof ModelCacheLayer3D
   * @returns {number[]} 
   */
  async getSelectingFeatureIDs(): Promise<number[]> {
    let methodName = "getSelectingFeatureIDs"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 获取选中要素的样式
   * @memberof ModelCacheLayer3D
   * @param {int} featureID - 选中要素的id
   * @returns {Promise<SelectionStyle>} 
   */
  async getSelectingFeatureStyle(featureID: number): Promise<SelectionStyle> {
    let methodName = "getSelectingFeatureStyle"
    let paramsTypeStr = [this.INT];
    let paramsStr = [featureID];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new SelectionStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置取消选中要素的id
   *
   * @memberof ModelCacheLayer3D
   * @param {number} featureID - 取消选中的要素id
   * @returns {void} 
   */
  async setUnSelectFeature(featureID: number): Promise<void> {
    let methodName = "setUnSelectFeature"
    let paramsTypeStr = [this.INT];
    let paramsStr = [featureID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置取消选中要素的id列表
   *
   * @memberof ModelCacheLayer3D
   * @param featureIDs - id列表
   * @param idsCount - 数目
   * @returns {void} 
   */
  async setUnSelectFeatures(featureIDs: number[], idsCount: number): Promise<void> {
    let methodName = "setUnSelectFeatures"
    let paramsTypeStr = [this.ARRAY + this.INT, this.INT];
    let paramsStr = [featureIDs, idsCount];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 清除选中
   *
   * @memberof ModelCacheLayer3D
   * @returns {void} 
   */
  async clearSelection(): Promise<void> {
    let methodName = "clearSelection"
    return await this.invoke(methodName, this.VOID);
  }

  /**
   * 获取图层三维范围
   *
   * @memberof ModelCacheLayer3D
   * @param {Rect3D} pBox - 三维范围，Rect3D类型，参数值为{double xMin, double yMin, double zMin, double xMax, double yMax, double zMax}
   * @returns {number} 返回值：1-成功；0-失败
   */
  async getExtent(pBox: Rect3D): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT3D];
    let paramsStr = [pBox.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
