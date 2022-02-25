/**
 * @content 
 * @author fangqi 2021-11-03
 */
import ObjectManager from '../components/ObjectManager';
import type LogEventReceiver from '../geodatabase/LogEventReceiver';
import type Raster from '../geodatabase/Raster';
import type OutputInfo from './OutputInfo';
/**
 * @class RasterSurfaceOp
 */
export default class RasterSurfaceOp extends ObjectManager {

  getClassName(): String {
    return this.CLASS_RASTER_SURFACE_OP;
  }

  /**
   * 坡向计算
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async aspect(rs: Raster, output: OutputInfo, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "aspect"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 曲率计算
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param zFactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async curvature(rs: Raster, output: OutputInfo, zFactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "curvature"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, zFactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 日照图
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param azimuth - 太阳方位角（0-360，正北方向为0度，顺时针方向）
   * @param altitude - 太阳高度角（0-90）
   * @param zfactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async sunshine(rs: Raster, output: OutputInfo, azimuth: number, altitude: number, zfactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "sunshine"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, azimuth, altitude, zfactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 山体阴影
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param azimuth - 太阳方位角（0-360，正北方向为0度，顺时针方向）
   * @param altitude - 太阳高度角（0-90）
   * @param zfactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async hillShade(rs: Raster, output: OutputInfo, azimuth: number, altitude: number, zfactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "hillShade"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, azimuth, altitude, zfactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 山体阴影彩色图
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param azimuth - 太阳方位角（0-360，正北方向为0度，顺时针方向）
   * @param altitude - 太阳高度角（0-90）
   * @param zfactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async hillShadeColor(rs: Raster, output: OutputInfo, azimuth: number, altitude: number, zfactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "hillShadeColor"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, azimuth, altitude, zfactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 坡度计算
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param zfactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async slope(rs: Raster, output: OutputInfo, zfactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "slope"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, zfactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 坡度百分比计算
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param zfactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async slopePrecent(rs: Raster, output: OutputInfo, zfactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "slopePrecent"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, zfactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

  /**
   * 粗糙度计算
   * @memberOf RasterSurfaceOp
   * @param rs - 输入数据
   * @param output - 输出路径
   * @param zfactor - z方向和xy方向单位比（默认传1，当z方向范围和xy方向单位不一致时，需要传入）
   * @param progress - 进度条
   * @return {Promise<number>} 成功,返回值>0;失败,返回值<=0
   */
  static async coarsbeness(rs: Raster, output: OutputInfo, zfactor: number, progress: LogEventReceiver): Promise<number> {
    let thisObj = new RasterSurfaceOp();
    let methodName = "coarsbeness"
    let paramsTypeStr = [thisObj.CLASS_RASTER, thisObj.CLASS_OUTPUT_INFO, thisObj.DOUBLE, thisObj.CLASS_LOG_EVENT_RECEIVER];
    let paramsStr = [rs.ObjId, output.ObjId, zfactor, progress.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
