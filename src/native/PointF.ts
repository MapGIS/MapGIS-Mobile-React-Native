/**
 * @content android视图点对象功能组件
 * @author fangqi 2021-7-17 下午2:52:36
 */
import { NativeModules } from 'react-native';
let X = NativeModules.JSPointF;
import ObjectManager from "../components/ObjectManager";

/**
 * @class PointF
 */
export default class PointF extends ObjectManager {

  getClassName(): String {
    return this.CLASS_POINTF;
  }

  /**
   * 构造一个新的 PointF 对象。
   * @memberOf PointF
   * @returns {Promise.<PointF>}
   */
  static async createInstance(): Promise<PointF> {
    let thisObj = new PointF();
    if (
      typeof arguments[0] === 'number' &&
      typeof arguments[1] === 'number'
    ) {
      let initParamsType = [thisObj.FLOAT, thisObj.FLOAT];
      let initParamsStr = [arguments[0], arguments[1]];
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
   * 获取X坐标
   * @memberOf PointF
   * @returns {Promise<*>}
   */
  async getX() {
    try {
      return await X.getX(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取Y坐标
   * @memberOf PointF
   * @returns {Promise<*>}
   */
  async getY() {
    try {
      return await X.getY(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置X值
   * @memberOf PointF
   * @param x x坐标
   * @returns {Promise<void>}
   */
  async setX(x: number) {
    try {
      await X.setX(this.ObjId, x);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置Y值
   * @memberOf PointF
   * @param y y坐标
   * @returns {Promise<void>}
   */
  async setY(y: number) {
    try {
      await X.setY(this.ObjId, y);
    } catch (e) {
      console.error(e);
    }
  }

}
