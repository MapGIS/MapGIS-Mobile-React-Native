/**
 * @content 
 * @author fangqi 2021-12-01 
 */
import { NativeModules } from 'react-native';
let LBS = NativeModules.JSDeviceMotionDataSourceLBS;
import DeviceMotionDataSource from "./DeviceMotionDataSource";

/**
 * @class DeviceMotionDataSourceLBS
 */
export default class DeviceMotionDataSourceLBS extends DeviceMotionDataSource {

  getClassName(): String {
    return this.CLASS_DEVICE_MOTION_DATA_SOURCE_LBS;
  }

  /**
   * 构造一个新 DeviceMotionDataSourceLBS 对象
   *
   * @memberof DeviceMotionDataSourceLBS
   * @returns {Promise<DeviceMotionDataSourceLBS>}
   */
  static async createInstance() {
    try {
      var { ObjId } = await LBS.createObj();
      var sceneView = new DeviceMotionDataSourceLBS();
      sceneView.ObjId = ObjId;
      return sceneView;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  /**
   * 获取高程偏移
   *
   * @memberof DeviceMotionDataSourceLBS
   * @returns {double} 高程偏移
   */
  async getAltitudeOffset(): Promise<number> {
    let methodName = "getAltitudeOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置高程偏移
   *
   * @memberof DeviceMotionDataSourceLBS
   * @param {double} offset - 高程偏移
   * @returns {void} 
   */
  async setAltitudeOffset(offset: number): Promise<void> {
    let methodName = "setAltitudeOffset"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [offset];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取目标坐标类型
   *
   * @memberof DeviceMotionDataSourceLBS
   * @returns {LocationCoordType} 目标坐标类型
   */
  async getDestCoordinateType(): Promise<any> {
    let methodName = "getDestCoordinateType"
    return await this.invoke(methodName, this.ENUM);
  }

  // /**
  //  * 设置目标坐标类型
  //  *
  //  * @memberof DeviceMotionDataSourceLBS
  //  * @param {LocationCoordType} destCoordinateType - 目标坐标类型
  //  * @returns {void} 
  //  */
  // async setDestCoordinateType(destCoordinateType: any): Promise<void> {
  //   let methodName = "setDestCoordinateType"
  //   let paramsTypeStr = [this.ENUM + this.CLASS_LOCATIONCOORDTYPE];
  //   let paramsStr = [destCoordinateType];
  //   await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  // }

  /**
   * 开始
   *
   * @memberof DeviceMotionDataSourceLBS
   * @returns {int} >0成功，<=0失败
   */
  async start(): Promise<number> {
    let methodName = "start"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 停止
   *
   * @memberof DeviceMotionDataSourceLBS
   * @returns {int} >0成功，<=0失败
   */
  async stop(): Promise<number> {
    let methodName = "stop"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取设备姿态数据源类型
   *
   * @memberof DeviceMotionDataSourceLBS
   * @returns {DeviceMotionDataSourceType} 类型
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

}
