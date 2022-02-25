/**
 * @content 
 * @author fangqi 2021-11-26 
 */

import Dot3D from "../geoobject/Dot3D";
import ObjectManager from "../components/ObjectManager";

/**
 * @class Viewpoint
 */
export default class Viewpoint extends ObjectManager {

  getClassName(): String {
    return this.CLASS_VIEW_POINT;
  }

  /**
   * 构造一个新 Viewpoint 对象
   *
   * @memberof Viewpoint
   * @returns {Promise<Viewpoint>}
   */
  static async createInstance(): Promise<Viewpoint> {
    let thisObj = new Viewpoint();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 Viewpoint 对象
   * @memberOf Viewpoint
   * @param focalPoint - 
   * @param headingDeg - 
   * @param pitchDeg - 
   * @param range - 
   * @return {Promise<Viewpoint>}
   */
  static async createInstanceByParam(focalPoint: Dot3D, headingDeg: number, pitchDeg: number, range: number): Promise<Viewpoint> {
    let thisObj = new Viewpoint();
    let initParamsType = [thisObj.CLASS_DOT3D, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
    let initParamsStr = [focalPoint.ObjId, headingDeg, pitchDeg, range];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 
   * @memberof Viewpoint 
   * @returns {Promise<Dot3D>} 
   */
  async getFocalPoint(): Promise<Dot3D> {
    let methodName = "getFocalPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @param focalPoint - 
   * @returns {void} 
   */
  async setFocalPoint(focalPoint: Dot3D): Promise<void> {
    let methodName = "setFocalPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [focalPoint.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @returns {number} 
   */
  async getHeadingDeg(): Promise<number> {
    let methodName = "getHeadingDeg"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @param {number} headingDeg - 
   * @returns {void} 
   */
  async setHeadingDeg(headingDeg: number): Promise<void> {
    let methodName = "setHeadingDeg"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [headingDeg];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @returns {number} 
   */
  async getPitchDeg(): Promise<number> {
    let methodName = "getPitchDeg"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @param {number} pitchDeg - 
   * @returns {void} 
   */
  async setPitchDeg(pitchDeg: number): Promise<void> {
    let methodName = "setPitchDeg"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [pitchDeg];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @returns {number} 
   */
  async getRange(): Promise<number> {
    let methodName = "getRange"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   *
   * @memberof Viewpoint
   * @param {number} fov - 
   * @returns {void} 
   */
  async setRange(range: number): Promise<void> {
    let methodName = "setRange"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [range];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
