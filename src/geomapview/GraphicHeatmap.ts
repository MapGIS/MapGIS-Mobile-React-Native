/**
 * @content 热力点功能组件
 * @author fangqi 2021-10-08
 */
import HeatmapPoint from './HeatmapPoint';
import VisualMap from './VisualMap';
import Graphic from './Graphic';
import { getArrayObjIds } from '../components/ObjectManager';

/**
 * @class GraphicHeatmap
 */
export default class GraphicHeatmap extends Graphic {

  getClassName(): String {
    return this.CLASS_GRAPHIC_HEATMAP;
  }

  /**
   * 构造一个新的 GraphicHeatmap 对象。
   * @memberOf GraphicHeatmap
   * @returns {Promise.<GraphicHeatmap>}
   */
  static async createInstance(): Promise<GraphicHeatmap> {
    let thisObj = new GraphicHeatmap();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置热力点。
   * @memberOf GraphicHeatmap
   * @param {Array<HeatmapPoint>} pointArray
   * @returns {Promise.<GraphicHeatmap>}
   */
  async setHeatmapPoints(pointArray: Array<HeatmapPoint>, count: number): Promise<void> {
    let arrayID = getArrayObjIds(pointArray);

    let methodName = "setHeatmapPoints"
    let paramsTypeStr = [this.LIST + this.CLASS_HEATMAP_POINT, this.INT];
    let paramsStr = [arrayID, count];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取热力点。
   * @memberOf GraphicHeatmap
   * @returns {Promise.<Array<HeatmapPoint>>}
   */
  async getHeatmapPoints(): Promise<Array<HeatmapPoint>> {
    let methodName = "getHeatmapPoints"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new HeatmapPoint();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 设置视觉映射
   * @memberOf GraphicHeatmap
   * @param {VisualMap} visualMap
   * @returns {Promise<void>}
   */
  async setVisualMap(visualMap: VisualMap): Promise<void> {
    let methodName = "setVisualMap"
    let paramsTypeStr = [this.CLASS_VISUAL_MAP];
    let paramsStr = [visualMap.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取视觉映射
   * @memberOf GraphicHeatmap
   * @returns {Promise<VisualMap>}
   */
  async getVisualMap(): Promise<VisualMap> {
    let methodName = "getVisualMap"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new VisualMap();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置热力点大小
   * @memberOf GraphicHeatmap
   * @param {Number} size
   * @returns {Promise<void>}
   */
  async setPointSize(size: number): Promise<void> {
    let methodName = "setPointSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取热力点大小
   * @memberOf GraphicHeatmap
   * @returns {Promise<Number>}
   */
  async getPointSize(): Promise<number> {
    let methodName = "getPointSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置热力点透明度的最小值,默认为0:不透明
   * @memberOf GraphicHeatmap
   * @param {Number} minAlpha
   * @returns {Promise<void>}
   */
  async setMinAlpha(minAlpha: number): Promise<void> {
    let methodName = "setMinAlpha"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minAlpha];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取热力点最小透明度,默认值为0:不透明
   * @memberOf GraphicHeatmap
   * @returns {Promise<Number>}
   */
  async getMinAlpha(): Promise<number> {
    let methodName = "getMinAlpha"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置热力点透明度的最大值,默认为100:全透明
   * @memberOf GraphicHeatmap
   * @param {Number} maxAlpha
   * @returns {Promise<void>}
   */
  async setMaxAlpha(maxAlpha: number): Promise<void> {
    let methodName = "setMaxAlpha"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [maxAlpha];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取热力点最大透明度,默认值为100:全透明
   * @memberOf GraphicHeatmap
   * @returns {Promise<Number>}
   */
  async getMaxAlpha(): Promise<number> {
    let methodName = "getMaxAlpha"
    return await this.invoke(methodName, this.NUMBER);
  }

}
