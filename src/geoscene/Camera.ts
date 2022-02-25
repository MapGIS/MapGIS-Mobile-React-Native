/**
 * @content 相机对象 相机对象实际是三维场景中的一个虚拟镜头，通过指定这个虚拟镜头的位置和方向来指定视图
 * @author fangqi 2021-11-26 
 */

import Dot3D from "../geoobject/Dot3D";
import ObjectManager from "../components/ObjectManager";

/**
 * @class Camera
 */
export default class Camera extends ObjectManager {

  getClassName(): String {
    return this.CLASS_CAMERA;
  }

  /**
   * 构造一个新 Camera 对象
   *
   * @memberof Camera
   * @returns {Promise<Camera>}
   */
  static async createInstance(): Promise<Camera> {
    let thisObj = new Camera();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 Camera 对象
   * @memberOf Camera
   * @param location - 相机地理坐标（坐标定义：X轴朝右，Y轴朝屏幕内，Z轴朝上）
   * @param headingAng - 方位角，范围是0-360度（绕Z轴以逆时针方向旋转）
   * @param pitchAng - 俯仰角 ，范围是-90至90度（绕X轴以逆时针方向旋转）
   * @param rollAng - 滚动角，范围是0-360度（绕Y轴以逆时针方向旋转）
   * @return {Promise<Camera>}
   */
  static async createInstanceByParam(location: Dot3D, headingAng: number, pitchAng: number, rollAng: number, fov: number, nearPlane: number, farPlane: number): Promise<Camera> {
    let thisObj = new Camera();
    let initParamsType = [thisObj.CLASS_DOT3D, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE, thisObj.DOUBLE];
    let initParamsStr = [location.ObjId, headingAng, pitchAng, rollAng, fov, nearPlane, farPlane];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置相机位置
   *
   * @memberof Camera
   * @param location - 相机位置
   * @returns {void} 
   */
  async setLocation(location: Dot3D): Promise<void> {
    let methodName = "setLocation"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [location.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取相机位置
   * @memberof Camera 
   * @returns {Promise<Dot3D>} 相机位置
   */
  async getLocation(): Promise<Dot3D> {
    let methodName = "getLocation"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置相机的方位角
   *
   * @memberof Camera
   * @param {number} headingAng - 相机的方位角
   * @returns {void} 
   */
  async setHeadingAng(headingAng: number): Promise<void> {
    let methodName = "setHeadingAng"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [headingAng];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取相机的方位角
   *
   * @memberof Camera
   * @returns {number} 
   */
  async getHeadingAng(): Promise<number> {
    let methodName = "getHeadingAng"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置相机的俯仰角
   *
   * @memberof Camera
   * @param {number} pitchAng - 相机的俯仰角
   * @returns {void} 
   */
  async setPitchAng(pitchAng: number): Promise<void> {
    let methodName = "setPitchAng"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [pitchAng];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取相机的俯仰角
   *
   * @memberof Camera
   * @returns {number} 相机的俯仰角
   */
  async getPitchAng(): Promise<number> {
    let methodName = "getPitchAng"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置相机的滚动角
   *
   * @memberof Camera
   * @param {number} rollAng - 相机的滚动角
   * @returns {void} 
   */
  async setRollAng(rollAng: number): Promise<void> {
    let methodName = "setRollAng"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [rollAng];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取相机的滚动角
   *
   * @memberof Camera
   * @returns {number} 相机的滚动角
   */
  async getRollAng(): Promise<number> {
    let methodName = "getRollAng"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置相机的视场角
   *
   * @memberof Camera
   * @param {number} fov - 相机的视场角
   * @returns {void} 
   */
  async setFov(fov: number): Promise<void> {
    let methodName = "setFov"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [fov];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取视场角
   *
   * @memberof Camera
   * @returns {number} 视场角
   */
  async getFov(): Promise<number> {
    let methodName = "getFov"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置近裁减面(不能为0，且不能和远裁减面的值相等)
   *
   * @memberof Camera
   * @param {number} nearPlane - 近裁减面(不能为0，且不能和远裁减面的值相等)
   * @returns {void} 
   */
  async setNearPlane(nearPlane: number): Promise<void> {
    let methodName = "setNearPlane"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [nearPlane];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取近裁减面
   *
   * @memberof Camera
   * @returns {number} 近裁减面
   */
  async getNearPlane(): Promise<number> {
    let methodName = "getNearPlane"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置远裁减面(不能设置为0，且不能和近裁减面的值相等)
   *
   * @memberof Camera
   * @param {number} farPlane - 远裁减面(不能设置为0，且不能和近裁减面的值相等)
   * @returns {void} 
   */
  async setFarPlane(farPlane: number): Promise<void> {
    let methodName = "setFarPlane"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [farPlane];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取远裁减面
   *
   * @memberof Camera
   * @returns {number} 远裁减面
   */
  async getFarPlane(): Promise<number> {
    let methodName = "getFarPlane"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 通过旋转矩阵设置相机资态
   *
   * @memberof Camera
   * @param rotationMartix - 16*16矩阵
   * @returns {void} 
   */
  async setRotationMartix(rotationMartix: number[]): Promise<void> {
    let methodName = "setRotationMartix"
    let paramsTypeStr = [this.ARRAY + this.DOUBLE];
    let paramsStr = [rotationMartix];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取相机的滚动角
   *
   * @memberof Camera
   * @returns {number[]} 
   */
  async getRotationMartix(): Promise<number[]> {
    let methodName = "getRotationMartix"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 获取相机的滚动角
   *
   * @memberof Camera
   * @returns {boolean} 相机的滚动角
   */
  async isRotationByMartix(): Promise<boolean> {
    let methodName = "isRotationByMartix"
    return await this.invoke(methodName, this.BOOLEAN);
  }

}
