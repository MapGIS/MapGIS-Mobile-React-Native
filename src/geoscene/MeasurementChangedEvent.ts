/**
 * @content 
 * @author fangqi 2021-12-07 
 */

import ObjectManager from "../components/ObjectManager";
import DistanceMeasurement from "./DistanceMeasurement";

/**
 * @class MeasurementChangedEvent
 */
export default class MeasurementChangedEvent extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MEASUREMENT_CHANGED_EVENT;
  }

  /**
   * 获取直接距离，即起点和终点之间的直线距离
   *
   * @memberof MeasurementChangedEvent
   * @returns {double} 起点和终点之间的直线距离
   */
  async getDirectDistance(): Promise<number> {
    let methodName = "getDirectDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取水平距离，即将起点和终点投影到地表之后，两点之间的距离。
   *
   * @memberof MeasurementChangedEvent
   * @returns {double} 将起点和终点投影到地表之后，两点之间的距离
   */
  async getHorizontalDistance(): Promise<number> {
    let methodName = "getHorizontalDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取垂直距离，即起点和终点在高度（z）上的差值。
   *
   * @memberof MeasurementChangedEvent
   * @returns {double} 起点和终点在高度（z）上的差值
   */
  async getVerticalDistance(): Promise<number> {
    let methodName = "getVerticalDistance"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   * @memberOf MeasurementChangedEvent
   * @returns {Promise<DistanceMeasurement>} 
   */
  async getSource(): Promise<DistanceMeasurement> {
    let methodName = "getSource"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new DistanceMeasurement();
    obj.ObjId = ObjId;
    return obj;
  }

}
