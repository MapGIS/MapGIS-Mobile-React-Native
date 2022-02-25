/**
 * @content 标注
 * @author fangqi 2021-09-02
 */
import ObjectManager from "../components/ObjectManager";
import Dot from "../geoobject/Dot";
import Dots from "../geoobject/Dots";
import Rect from "../geoobject/Rect";
import SRefData from "../geoobject/SRefData";

/**
 * @class Transformation
 * @description 标注
 */
export default class Transformation extends ObjectManager {

  getClassName(): String {
    return this.CLASS_TRANSFORMATION;
  }

  /**
   * 获得是否动态投影
   *
   * @memberof Transformation
   * @returns {Number} 是否动态投影
   */
  async getIsProjTrans(): Promise<boolean> {
    let methodName = "getIsProjTrans"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否动态投影
   *
   * @memberof Transformation
   * @param {boolean} isProjTrans 是否动态投影
   * @returns {Promise<Void>}
   */
  async setIsProjTrans(isProjTrans: boolean): Promise<void> {
    let methodName = "setIsProjTrans"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isProjTrans];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取源参照系
   *
   * @memberof Transformation
   * @returns {Promise<SRefData>} 源参照系信息
   */
  async getSourceSRef(): Promise<SRefData> {
    let methodName = "getSourceSRef"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置源参照系
   *
   * @memberof Transformation
   * @param {SRefData} sourceSref 源参照系
   * @returns {Promise<Void>}
   */
  async setSourceSref(sourceSref: SRefData): Promise<void> {
    let methodName = "setSourceSref"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sourceSref.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取目的参照系
   *
   * @memberof Transformation
   * @returns {Promise<SRefData>} 目的参照系
   */
  async getTargetSref(): Promise<SRefData> {
    let methodName = "getTargetSref"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置目的参照系
   *
   * @memberof Transformation
   * @param {SRefData} targetSRef 源参照系
   * @returns {Promise<Void>}
   */
  async setTargetSref(targetSRef: SRefData): Promise<void> {
    let methodName = "setTargetSref"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [targetSRef.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取客户区范围
   *
   * @memberof Transformation
   * @returns {Promise<Rect>} 客户区范围
   */
  async getClientRect(): Promise<Rect> {
    let methodName = "getClientRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置客户区范围
   *
   * @memberof Transformation
   * @param {Rect} clientRect 客户区范围
   * @returns {Promise<Void>}
   */
  async setClientRect(clientRect: Rect): Promise<void> {
    let methodName = "setClientRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [clientRect.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取设备范围
   *
   * @memberof Transformation
   * @returns {Promise<Rect>}
   */
  async getDeviceRect(): Promise<Rect> {
    let methodName = "getDeviceRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置设备范围
   *
   * @memberof Transformation
   * @param {Rect} deviceRect 设备范围
   * @returns {Promise<Void>}
   */
  async setDeviceRect(deviceRect: Rect): Promise<void> {
    let methodName = "setDeviceRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [deviceRect.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取显示范围
   *
   * @memberof Transformation
   * @returns {Promise<Rect>}
   */
  async getDisplayRect(): Promise<Rect> {
    let methodName = "getDisplayRect"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置显示范围
   *
   * @memberof Transformation
   * @param {Rect} displayRect 设备范围
   * @returns {Promise<Void>}
   */
  async setDisplayRect(displayRect: Rect): Promise<void> {
    let methodName = "setDisplayRect"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [displayRect.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取全图范围(复位时与该范围一致)
   *
   * @memberof Transformation
   * @returns {Promise<Rect>}
   */
  async getMapRange(): Promise<Rect> {
    let methodName = "getMapRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置全图范围(复位时与该范围一致)
   *
   * @memberof Transformation
   * @param {Rect} mapRange 全图范围
   * @returns {Promise<Void>}
   */
  async setMapRange(mapRange: Rect): Promise<void> {
    let methodName = "setMapRange"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [mapRange.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 窗口坐标到设备坐标（批量）
   *
   * @memberof Transformation
   * @param {Dots} dots 坐标点列表
   * @returns {Promise<Dots>} 结果值（存放x、y坐标）
   */
  async mpToDp(dots: Dots): Promise<Dots> {
    let methodName = "mpToDp"
    let paramsTypeStr = [this.CLASS_DOTS];
    let paramsStr = [dots.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dots();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取设备原点
   *
   * @memberof Transformation
   * @returns {Promise<Dot>} 设备原点
   */
  async getDeviceOrigin(): Promise<Dot> {
    let methodName = "getDeviceOrigin"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置设备原点
   *
   * @memberof Transformation
   * @param {Dot} deviceOrigin 设备原点
   * @returns {Promise<Void>}
   */
  async setDeviceOrigin(deviceOrigin: Dot): Promise<void> {
    let methodName = "setDeviceOrigin"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [deviceOrigin.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转中心
   *
   * @memberof Transformation
   * @returns {Promise<Dot>} 旋转中心
   */
  async getRotateCenter(): Promise<Dot> {
    let methodName = "getRotateCenter"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置旋转中心
   *
   * @memberof Transformation
   * @param {Dot} rotateCenter 旋转中心
   * @returns {Promise<Void>}
   */
  async setRotateCenter(rotateCenter: Dot): Promise<void> {
    let methodName = "setRotateCenter"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [rotateCenter.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取旋转角度
   *
   * @memberof Transformation
   * @returns {Number} 旋转角度
   */
  async getRotateAngle(): Promise<number> {
    let methodName = "getRotateAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置旋转角度
   *
   * @memberof Transformation
   * @param {Dot} rotateAngle 旋转角度
   * @returns {Promise<Void>}
   */
  async setRotateAngle(rotateAngle: number): Promise<void> {
    let methodName = "setRotateAngle"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [rotateAngle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
