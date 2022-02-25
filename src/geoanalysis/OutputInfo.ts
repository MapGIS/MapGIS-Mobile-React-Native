/**
 * @content 
 * @author fangqi 2021-11-03 
 */
import ObjectManager from '../components/ObjectManager';
import OutputInfoEx from './OutputInfoEx';

/**
 * @class OutputInfo
 */
export default class OutputInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_OUTPUT_INFO;
  }

  /**
   * 构造一个新的 OutputInfo 对象。
   * @memberOf OutputInfo
   * @returns {Promise.<OutputInfo>}
   */
  static async createInstance(): Promise<OutputInfo> {
    let thisObj = new OutputInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取输出路径
   * @memberOf OutputInfo
   * @returns {Promise<String>} 输出路径
   */
  async getPath(): Promise<String> {
    let methodName = "getPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置输出路径
   * @memberOf OutputInfo
   * @param path - 输出路径
   * @returns {Promise<void>}
   */
  async setPath(path: String): Promise<void> {
    let methodName = "setPath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [path];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出栅格文件格式
   * @memberOf OutputInfo
   * @returns {Promise<RasterFormat>} 栅格文件格式
   */
  async getFormat(): Promise<any> {
    let methodName = "getFormat"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置输出栅格文件格式
   * @memberOf OutputInfo
   * @param format - RasterFormat 栅格文件格式
   * @returns {Promise<void>} 
   */
  async setFormat(format: any): Promise<void> {
    let methodName = "setFormat"
    let paramsTypeStr = [this.ENUM + this.CLASS_RASTER_FORMAT];
    let paramsStr = [format];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取输出信息
   * @memberOf OutputInfo
   * @returns {Promise<OutputInfoEx>} 输出信息
   */
  async getExtraInfo(): Promise<OutputInfoEx> {
    let methodName = "getExtraInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new OutputInfoEx();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置输出信息
   * @memberOf OutputInfo
   * @param outputInfoEx - 输出信息
   * @returns {Promise<void>} 
   */
  async setExtraInfo(outputInfoEx: OutputInfoEx): Promise<void> {
    let methodName = "setExtraInfo"
    let paramsTypeStr = [this.CLASS_OUTPUT_INFO_EX];
    let paramsStr = [outputInfoEx.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
