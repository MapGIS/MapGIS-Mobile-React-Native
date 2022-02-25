/**
 * @content 栅格数据操作类
 * @author fangqi 2021-11-02 
 */
import Rect from '../geoobject/Rect';
import ObjectManager from '../components/ObjectManager';
import Dot from '../geoobject/Dot';
import IGeodataXform from './IGeodataXform';
import RasterHistogram from './RasterHistogram';
import RasterStatistics from './RasterStatistics';

/**
 * @class Raster
 */
export default class Raster extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RASTER;
  }

  /**
   * 构造一个新的 Raster 对象。
   * @memberOf Raster
   * @returns {Promise.<Raster>}
   */
  static async createInstance(): Promise<Raster> {
    let thisObj = new Raster();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取栅格数据波段数
   * @memberOf Raster
   * @returns {Promise<number>} 波段数
   */
  async getBandCount(): Promise<number> {
    let methodName = "getBandCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取栅格数据分辨率
   * @memberOf Raster
   * @returns {Promise<Dot>} 分辨率
   */
  async getCellSize(): Promise<Dot> {
    let methodName = "getCellSize"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取栅格数据原点（为左上角地理坐标）
   * @memberOf Raster
   * @returns {Promise<Dot>} 原点
   */
  async getOrigin(): Promise<Dot> {
    let methodName = "getOrigin"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取栅格数据范围
   * @memberOf Raster
   * @returns {Promise<Rect>} 范围
   */
  async getRange(): Promise<Rect> {
    let methodName = "getRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取栅格数据像元类型
   * @memberOf Raster
   * @returns {Promise<PixelType>} 像元类型
   */
  async getPixelType(): Promise<any> {
    let methodName = "getPixelType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取栅格数据高
   * @memberOf Raster
   * @returns {Promise<number>} 高
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取栅格数据宽
   * @memberOf Raster
   * @returns {Promise<number>} 宽
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取栅格数据坐标变换参数
   * @memberOf Raster
   * @returns {Promise<IGeodataXform>} 坐标变换参数
   */
  async getGeodataXform(): Promise<IGeodataXform> {
    let methodName = "getGeodataXform"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new IGeodataXform();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置栅格数据坐标变换参数
   * @memberOf Raster
   * @param xform - 坐标变换参数
   * @returns {Promise<void>}
   */
  async setGeodataXform(xform: IGeodataXform): Promise<void> {
    let methodName = "setGeodataXform"
    let paramsTypeStr = [this.CLASS_IGEODATA_XFORM];
    let paramsStr = [xform.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取重采样方法
   * @memberOf Raster
   * @returns {Promise<RasterResampling>} 重采样方法
   */
  async getResampling(): Promise<any> {
    let methodName = "getResampling"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置重采样方法
   * @memberOf Raster
   * @param resampling - 重采样方法
   * @returns {Promise<void>}
   */
  async setResampling(resampling: any): Promise<void> {
    let methodName = "setResampling"
    let paramsTypeStr = [this.ENUM + this.CLASS_RASTER_RESAMPLING];
    let paramsStr = [resampling];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取统计信息
   * @memberOf Raster
   * @param bandNo - 波段号
   * @returns {Promise<RasterStatistics>} 统计信息
   */
  async getStatistics(bandNo: number): Promise<RasterStatistics> {
    let methodName = "getStatistics"
    let paramsTypeStr = [this.INT];
    let paramsStr = [bandNo];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new RasterStatistics();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置统计信息
   * @memberOf Raster
   * @param bandNo - 波段号
   * @param statistics - 统计信息
   * @returns {Promise<void>}
   */
  async setStatistics(bandNo: number, statistics: RasterStatistics): Promise<void> {
    let methodName = "setStatistics"
    let paramsTypeStr = [this.INT, this.CLASS_RASTER_STATISTICS];
    let paramsStr = [bandNo, statistics.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取直方图
   * @memberOf Raster
   * @param bandNo - 波段号
   * @returns {Promise<RasterHistogram>} 直方图
   */
  async getHistogram(bandNo: number): Promise<RasterHistogram> {
    let methodName = "getHistogram"
    let paramsTypeStr = [this.INT];
    let paramsStr = [bandNo];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new RasterHistogram();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置直方图
   * @memberOf Raster
   * @param bandNo - 波段号
   * @param histogram - 直方图
   * @returns {Promise<void>}
   */
  async setHistogram(bandNo: number, histogram: RasterHistogram): Promise<void> {
    let methodName = "setHistogram"
    let paramsTypeStr = [this.INT, this.CLASS_RASTER_HISTOGRAM];
    let paramsStr = [bandNo, histogram.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取无效值
   * @memberOf Raster
   * @returns {Promise<number>} 无效值
   */
  async getNoData(): Promise<number> {
    let methodName = "getNoData"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取是否有无效值
   * @memberOf Raster
   * @returns {Promise<boolean>} 是否有无效值
   */
  async hasNoData(): Promise<boolean> {
    let methodName = "hasNoData"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置无效值
   * @memberOf Raster
   * @param nodata - 无效值
   * @param hasNoData - 是否有无效值
   * @returns {Promise<void>}
   */
  async setNoData(nodata: number, hasNoData: boolean): Promise<void> {
    let methodName = "setNoData"
    let paramsTypeStr = [this.DOUBLE, this.BOOLEAN];
    let paramsStr = [nodata, hasNoData];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
