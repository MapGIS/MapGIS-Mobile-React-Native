/**
 * @content 
 * @author fangqi 2021-12-01 
 */
import { NativeModules } from 'react-native';
let VSD = NativeModules.JSVideoSourceDefault;
import type Size from '../geobase/Size';
import VideoSource from "./VideoSource";

/**
 * @class VideoSourceDefault
 */
export default class VideoSourceDefault extends VideoSource {

  getClassName(): String {
    return this.CLASS_VIDEO_SOURCE_DEFAULT;
  }

  /**
   * 构造一个新 VideoSourceDefault 对象
   *
   * @memberof VideoSourceDefault
   * @returns {Promise<VideoSourceDefault>}
   */
  static async createInstance() {
    try {
      var { ObjId } = await VSD.createObj();
      var sceneView = new VideoSourceDefault();
      sceneView.ObjId = ObjId;
      return sceneView;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  /**
   * 开始
   *
   * @memberof VideoSourceDefault
   * @returns {int} >0成功，<=0失败
   */
  async start(): Promise<number> {
    let methodName = "start"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 停止
   *
   * @memberof VideoSourceDefault
   * @returns {int} >0成功，<=0失败
   */
  async stop(): Promise<number> {
    let methodName = "stop"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图像大小
   *
   * @memberof VideoSourceDefault
   * @param {Size} size - 图像大小
   * @returns {int} 
   */
  async setImageSize(size: Size): Promise<number> {
    let methodName = "setImageSize"
    let paramsTypeStr = [this.CLASS_SIZE];
    let paramsStr = [size.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图像格式
   * @memberof VideoSourceDefault
   * @returns {Promise<ImageFormat>} 图像格式
   */
  async getImageFormat(): Promise<any> {
    let methodName = "getImageFormat"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取相机标定文件路径
   *
   * @memberof VideoSourceDefault
   * @returns {String} 相机标定文件路径
   */
  async getCameraClibPath(): Promise<String> {
    let methodName = "getCameraClibPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置相机标定文件路径
   *
   * @memberof VideoSourceDefault
   * @param {String} clibPath - 相机标定文件路径
   * @returns {void} 
   */
  async setCameraClibPath(clibPath: String): Promise<void> {
    let methodName = "setCameraClibPath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [clibPath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置标定文件索引
   *
   * @memberof VideoSourceDefault
   * @param {int} index - 标定文件索引
   * @returns {void} 
   */
  async setCameraClibIndex(index: number): Promise<void> {
    let methodName = "setCameraClibIndex"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标定文件索引
   *
   * @memberof VideoSourceDefault
   * @returns {int} 相机标定文件索引
   */
  async getCameraClibIndex(): Promise<number> {
    let methodName = "getCameraClibIndex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取相机投影矩阵
   *
   * @memberof VideoSourceDefault
   * @returns {double[]} 相机投影矩阵
   */
  async getCameraProjectMatrix(): Promise<number[]> {
    let methodName = "getCameraProjectMatrix"
    return await this.invoke(methodName, this.ARRAY);
  }

}
