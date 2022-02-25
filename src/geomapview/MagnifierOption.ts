/**
 * @content 地图位置组件
 * @author fangqi 2021-7-31 
 */
import ObjectManager from '../components/ObjectManager';
import PointF from '../native/PointF';

/**
 * 放大镜功能组件
 * @class MagnifierOption
 */
export default class MagnifierOption extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MAGNIFIER_OPTION;
  }

  /**
   * 构造一个新的 MagnifierOption 对象。
   * @memberOf MagnifierOption
   * @returns {Promise.<MagnifierOption>}
   */
  static async createInstance(): Promise<MagnifierOption> {
    let thisObj = new MagnifierOption();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 MagnifierOption 对象。
   * @memberOf MagnifierOption
   * @param size 放大镜的直径
   * @param scale 缩放比例
   * @param mode 放大镜位置调整模式
   * @param point 自定义放大镜位置(视图的左上角坐标)
   * @returns {Promise.<MagnifierOption>}
   */
  static async createInstanceByParam(size: number, scale: number, mode: number, point: PointF): Promise<MagnifierOption> {
    let thisObj = new MagnifierOption();
    let initParamsType = [thisObj.INT, thisObj.FLOAT, thisObj.INT, thisObj.CLASS_POINTF];
    let initParamsStr = [size, scale, mode, point.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取缩放比例
   * @memberOf MagnifierOption
   * @returns {Promise<Number>} 缩放比例
   */
  async getScale(): Promise<number> {
    let methodName = "getScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置缩放比例
   * @param scale scale > 1 放大 < 1 缩小
   * @returns {Promise<Object>}
   */
  async setScale(scale: number): Promise<MagnifierOption> {
    let methodName = "setScale"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [scale];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MagnifierOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取放大镜大小
   * @memberOf MagnifierOption
   * @returns {Promise<Number>} 放大镜大小
   */
  async getSize(): Promise<number> {
    let methodName = "getSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置放大镜大小
   * @param size 放大镜大小
   * @returns {Promise<object>}
   */
  async setSize(size: number): Promise<MagnifierOption> {
    let methodName = "setSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [size];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MagnifierOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置放大镜位置调整模式
   * @memberOf MagnifierOption
   * @param mode 放大镜位置调整模式 AUTO_ADJUST_POINT 自动调整 USER_CUSTOM_POINT 自定义位置
   * @returns {Promise<object>}
   */
  async setPointAdjustMode(mode: number): Promise<MagnifierOption> {
    let methodName = "setPointAdjustMode"
    let paramsTypeStr = [this.INT];
    let paramsStr = [mode];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MagnifierOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取放大镜位置调整模式
   * @memberOf MagnifierOption
   * @returns {Promise<Number>} 放大镜位置调整模式
   */
  async getPointAdjustMode(): Promise<number> {
    let methodName = "getPointAdjustMode"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取放大镜位置
   * @memberOf MagnifierOption
   * @returns {Promise<object>} 获取放大镜位置
   */
  async getPoint(): Promise<PointF> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设设置放大镜位置
   * @memberOf MagnifierOption
   * @param pointF 放大镜左上角位置
   * @returns {Promise<object>}
   */
  async setPoint(pointF: PointF): Promise<MagnifierOption> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [pointF.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MagnifierOption();
    obj.ObjId = ObjId;
    return obj;
  }
}
