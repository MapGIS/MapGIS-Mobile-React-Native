/**
 * @content 
 * @author fangqi 2021-12-03 
 */
import { NativeModules } from 'react-native';
let DM = NativeModules.JSDistanceMeasurement;
import ObjectManager from '../components/ObjectManager';


/**
 * @class DeviceMotionDataSource 
 */
export default class DeviceMotionDataSource extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DEVICE_MOTION_DATA_SOURCE;
  }

  /**
   * 添加设备姿态数据源监听
   * @memberOf DeviceMotionDataSource
   * @returns {Promise<void>}
   */
  async registerListener() {
    try {
      await DM.registerListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除设备姿态数据源监听
   * @memberOf DeviceMotionDataSource
   * @returns {Promise<void>}
   */
  async unregisterListener() {
    try {
      await DM.unregisterListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

}
