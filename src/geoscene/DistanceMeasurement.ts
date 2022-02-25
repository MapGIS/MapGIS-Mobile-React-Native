/**
 * @content 三维距离量算类。用于量算三维空间中两个点之间的直接距离、水平距离、垂直距离。
 * @author fangqi 2021-12-07 
 */
import { NativeModules } from 'react-native';
let DM = NativeModules.JSDistanceMeasurement;
import Dot3D from "../geoobject/Dot3D";
import ObjectManager from "../components/ObjectManager";

/**
 * @class DistanceMeasurement
 */
export default class DistanceMeasurement extends ObjectManager {

  getClassName(): String {
    return this.CLASS_DISTANCE_MEASUREMENT;
  }

  /**
   * 构造一个新 DistanceMeasurement 对象
   *
   * @memberof DistanceMeasurement
   * @returns {Promise<DistanceMeasurement>}
   */
  static async createInstance(): Promise<DistanceMeasurement> {
    let thisObj = new DistanceMeasurement();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 通过量算的起点和终点构造量算对像
   * @memberOf DistanceMeasurement
   * @param startLocation - 量算的起点位置，坐标类型为经纬度。
   * @param endLocation - 量算的终点位置，坐标类型为经纬度。
   * @return {Promise<DistanceMeasurement>}
   */
  static async createInstanceByParam(startLocation: Dot3D, endLocation: Dot3D): Promise<DistanceMeasurement> {
    let thisObj = new DistanceMeasurement();
    let initParamsType = [thisObj.CLASS_DOT3D, thisObj.CLASS_DOT3D];
    let initParamsStr = [startLocation.ObjId, endLocation.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置算量起点位置，坐标类型为经纬度。
   *
   * @memberof DistanceMeasurement
   * @param {Dot3D} startLocation - 算量起点位置
   * @returns {void} 
   */
  async setStartLocation(startLocation: Dot3D): Promise<void> {
    let methodName = "setStartLocation"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [startLocation.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取算量起点位置
   * @memberOf DistanceMeasurement
   * @returns {Promise<Dot3D>} 算量起点位置，坐标类型为经纬度。
   */
  async getStartLocation(): Promise<Dot3D> {
    let methodName = "getStartLocation"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置算量终点位置，坐标类型为经纬度。
   *
   * @memberof DistanceMeasurement
   * @param {Dot3D} endLocation - 算量终点位置
   * @returns {void} 
   */
  async setEndLocation(endLocation: Dot3D): Promise<void> {
    let methodName = "setEndLocation"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [endLocation.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取算量终点位置
   * @memberOf DistanceMeasurement
   * @returns {Promise<Dot3D>} 算量终点位置，坐标类型为经纬度。
   */
  async getEndLocation(): Promise<Dot3D> {
    let methodName = "getEndLocation"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取直接距离，即起点和终点之间的直线距离
   *
   * @memberof DistanceMeasurement
   * @returns {double} 起点和终点之间的直线距离
   */
  async getDirectDistance(): Promise<number> {
    let methodName = "getDirectDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取水平距离，即将起点和终点投影到地表之后，两点之间的距离。
   *
   * @memberof DistanceMeasurement
   * @returns {double} 将起点和终点投影到地表之后，两点之间的距离
   */
  async getHorizontalDistance(): Promise<number> {
    let methodName = "getHorizontalDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取垂直距离，即起点和终点在高度（z）上的差值。
   *
   * @memberof DistanceMeasurement
   * @returns {double} 起点和终点在高度（z）上的差值
   */
  async getVerticalDistance(): Promise<number> {
    let methodName = "getVerticalDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 添加距离变化的监听
   * @memberOf DeviceMotionDataSource
   * @returns {Promise<void>}
   */
  async registerMeasurementChangedListener() {
    try {
      await DM.registerMeasurementChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 删除距离变化的监听
   * @memberOf DeviceMotionDataSource
   * @returns {Promise<void>}
   */
  async unregisterMeasurementChangedListener() {
    try {
      await DM.unregisterMeasurementChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

}
