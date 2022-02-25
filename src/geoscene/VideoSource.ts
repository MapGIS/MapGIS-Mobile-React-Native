/**
 * @content 
 * @author fangqi 2021-12-01 
 */
import { NativeModules } from 'react-native';
let VS = NativeModules.JSVideoSource;
import ObjectManager from '../components/ObjectManager';


/**
 * @class VideoSource 
 */
export default class VideoSource extends ObjectManager {

  getClassName(): String {
    return this.CLASS_VIDEO_SOURCE;
  }

  /**
   * 添加视频源监听
   * @memberOf VideoSource
   * @returns {Promise<void>}
   */
  async registerListener() {
    try {
      await VS.registerListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除视频源监听
   * @memberOf VideoSource
   * @returns {Promise<void>}
   */
  async unregisterListener() {
    try {
      await VS.unregisterListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

}
