/**
 * @content 地图位置组件
 * @author fangqi 2021-7-30
 */
import ObjectManager from '../components/ObjectManager';
import Dot from '../geoobject/Dot';


/**
 * @class MapPosition
 */
export default class MapPosition extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MAP_POSITION;
  }

  /**
   * 构造一个新的 MapPosition 对象。
   * @memberOf MapPosition
   * @returns {Promise.<MapPosition>}
   */
  static async createInstance(): Promise<MapPosition> {
    let thisObj = new MapPosition();
    if (
      typeof arguments[0] === 'string' &&
      typeof arguments[1] === 'number' &&
      typeof arguments[2] === 'string' &&
      typeof arguments[3] === 'number' &&
      typeof arguments[4] === 'number'
    ) {
      let initParamsType = [thisObj.CLASS_DOT, thisObj.DOUBLE, thisObj.CLASS_DOT, thisObj.FLOAT, thisObj.FLOAT];
      let initParamsStr = [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]];
      thisObj.ObjId = await thisObj.createByParam(
        initParamsType,
        initParamsStr
      );
    } else {
      thisObj.ObjId = await thisObj.create();
    }
    return thisObj;
  }

  /**
   * 获取地图中心点
   * @memberOf MapPosition
   * @returns {Promise<*>}
   */
  async getCenter(): Promise<Dot> {
    let methodName = "getCenter"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置地图中心点
   * @memberOf MapPosition
   * @param center
   * @returns {Promise<void>}
   */
  async setCenter(center: Dot): Promise<void> {
    let methodName = "setCenter"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [center.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置地图中心点
   * @memberOf MapPosition
   * @param centerX
   * @param centerY
   * @returns {Promise<void>}
   */
  async setCenterByXY(centerX: number, centerY: number): Promise<void> {
    let methodName = "setCenter"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [centerX, centerY];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图分辨率
   * @memberOf MapPosition
   * @returns {Promise<*>}
   */
  async getResolution(): Promise<number> {
    let methodName = "getResolution"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置地图分辨率
   * @param resolution
   * @returns {Promise<void>}
   */
  async setResolution(resolution: number): Promise<void> {
    let methodName = "setResolution"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [resolution];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图旋转中心点
   * @memberOf MapPosition
   * @returns {Promise<*>}
   */
  async getRotateCenter(): Promise<Dot> {
    let methodName = "getRotateCenter"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置地图旋转中心
   * @memberOf MapPosition
   * @param center
   * @returns {Promise<void>}
   */
  async setRotateCenter(center: Dot): Promise<void> {
    let methodName = "setRotateCenter"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [center.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置地图旋转中心
   * @memberOf MapPosition
   * @param rotateCenterX
   * @param rotateCenterY
   * @returns {Promise<void>}
   */
  async setRotateCenterByXY(rotateCenterX: number, rotateCenterY: number): Promise<void> {
    let methodName = "setRotateCenter"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [rotateCenterX, rotateCenterY];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转角
   * @memberOf MapPosition
   * @returns {Promise<*>}
   */
  async getRotateAngle(): Promise<number> {
    let methodName = "getRotateAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置旋转角
   * @memberOf MapPosition
   * @param rotateAngle
   * @returns {Promise<void>}
   */
  async setRotateAngle(rotateAngle: number): Promise<void> {
    let methodName = "setRotateAngle"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [rotateAngle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取倾斜角
   * @memberOf MapPosition
   * @returns {Promise<*>}
   */
  async getSlopeAngle(): Promise<number> {
    let methodName = "getSlopeAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置倾斜角
   * @memberOf MapPosition
   * @param slopeAngle
   * @returns {Promise<void>}
   */
  async setSlopeAngle(slopeAngle: number): Promise<void> {
    let methodName = "setSlopeAngle"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [slopeAngle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
  
}
