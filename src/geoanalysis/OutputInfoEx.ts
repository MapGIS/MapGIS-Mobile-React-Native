/**
 * @content 
 * @author fangqi 2021-11-02 
 */
import ObjectManager from '../components/ObjectManager';
import Dot from '../geoobject/Dot';

/**
 * @class OutputInfoEx
 */
export default class OutputInfoEx extends ObjectManager {

  getClassName(): String {
    return this.CLASS_OUTPUT_INFO_EX;
  }

  /**
   * 构造一个新的 OutputInfoEx 对象。
   * @memberOf OutputInfoEx
   * @returns {Promise.<OutputInfoEx>}
   */
  static async createInstance(): Promise<OutputInfoEx> {
    let thisObj = new OutputInfoEx();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取输出栅格分辨率
   * @memberOf OutputInfoEx
   * @returns {Promise<Dot>} 栅格分辨率
   */
  async getCellSize(): Promise<Dot> {
    let methodName = "getCellSize"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置输出栅格分辨率
   * @memberOf OutputInfoEx
   * @param cellSize - 输出栅格分辨率
   * @returns {Promise<void>} 
   */
  async setCellSize(cellSize: Dot): Promise<void> {
    let methodName = "setCellSize"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [cellSize.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格起始位置(行列(0,0)对应的地理坐标)
   * @memberOf OutputInfoEx
   * @returns {Promise<Dot>} 栅格起始位置
   */
  async getOrigin(): Promise<Dot> {
    let methodName = "getOrigin"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置输出栅格起始位置(行列(0,0)对应的地理坐标)
   * @memberOf OutputInfoEx
   * @param origin - 输出栅格起始位置
   * @returns {Promise<void>} 
   */
  async setOrigin(origin: Dot): Promise<void> {
    let methodName = "setOrigin"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [origin.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格的像元类型
   * @memberOf OutputInfoEx
   * @returns {Promise<PixelType>} 栅格的像元类型
   */
  async getPixelType(): Promise<any> {
    let methodName = "getPixelType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置输出栅格的像元类型
   * @memberOf OutputInfoEx
   * @param {PixelType} pixelType - 栅格的像元类型
   * @returns {Promise<void>}
   */
  async setPixelType(pixelType: any): Promise<void> {
    let methodName = "setPixelType"
    let paramsTypeStr = [this.ENUM + this.CLASS_PIXEL_TYPE];
    let paramsStr = [pixelType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格的行值
   * @memberOf OutputInfoEx
   * @returns {Promise<number>} 输出栅格的行值
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置输出栅格的行值
   * @memberOf OutputInfoEx
   * @param height - 输出栅格的行值
   * @returns {Promise<void>}
   */
  async setHeight(height: number): Promise<void> {
    let methodName = "setHeight"
    let paramsTypeStr = [this.INT];
    let paramsStr = [height];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格的列值
   * @memberOf OutputInfoEx
   * @returns {Promise<number>} 输出栅格的列值
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置输出栅格的列值
   * @memberOf OutputInfoEx
   * @param width - 输出栅格的列值
   * @returns {Promise<void>}
   */
  async setWidth(width: number): Promise<void> {
    let methodName = "setWidth"
    let paramsTypeStr = [this.INT];
    let paramsStr = [width];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格的无效值
   * @memberOf OutputInfoEx
   * @returns {Promise<number>} 输出栅格的无效值
   */
  async getNoData(): Promise<number> {
    let methodName = "getNoData"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置输出栅格的无效值
   * @memberOf OutputInfoEx
   * @param nodata - 输出栅格的无效值
   * @returns {Promise<void>}
   */
  async setNoData(nodata: number): Promise<void> {
    let methodName = "setNoData"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [nodata];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格的是否构建金字塔
   * @memberOf OutputInfoEx
   * @returns {Promise<boolean>} 输出栅格的是否构建金字塔
   */
  async getIsBuildOverview(): Promise<boolean> {
    let methodName = "getIsBuildOverview"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置输出栅格的是否构建金字塔
   * @memberOf OutputInfoEx
   * @param isBuildOverview - 输出栅格的是否构建金字塔
   * @returns {Promise<void>}
   */
  async setIsBuildOverview(isBuildOverview: boolean): Promise<void> {
    let methodName = "setIsBuildOverview"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isBuildOverview];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格是否计算统计信息
   * @memberOf OutputInfoEx
   * @returns {Promise<boolean>} 输出栅格是否计算统计信息
   */
  async getIsCalStatistics(): Promise<boolean> {
    let methodName = "getIsCalStatistics"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置输出栅格是否计算统计信息
   * @memberOf OutputInfoEx
   * @param isCalStatistics - 输出栅格是否计算统计信息
   * @returns {Promise<void>}
   */
  async setIsCalStatistics(isCalStatistics: boolean): Promise<void> {
    let methodName = "setIsCalStatistics"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isCalStatistics];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格是否计算直方图
   * @memberOf OutputInfoEx
   * @returns {Promise<boolean>} 输出栅格是否计算直方图
   */
  async getIsCalHistogram(): Promise<boolean> {
    let methodName = "getIsCalHistogram"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置输出栅格是否计算直方图
   * @memberOf OutputInfoEx
   * @param isCalHistogram - 输出栅格是否计算直方图
   * @returns {Promise<void>}
   */
  async setIsCalHistogram(isCalHistogram: boolean): Promise<void> {
    let methodName = "setIsCalHistogram"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isCalHistogram];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取栅格栅格是否使用近似值计算
   * @memberOf OutputInfoEx
   * @returns {Promise<boolean>} 栅格栅格是否使用近似值计算
   */
  async getIsApproxOK(): Promise<boolean> {
    let methodName = "getIsApproxOK"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置栅格栅格是否使用近似值计算
   * @memberOf OutputInfoEx
   * @param isApproxOK - 栅格栅格是否使用近似值计算
   * @returns {Promise<void>}
   */
  async setIsApproxOK(isApproxOK: boolean): Promise<void> {
    let methodName = "setIsApproxOK"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isApproxOK];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
