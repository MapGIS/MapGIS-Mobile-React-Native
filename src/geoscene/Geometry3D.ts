/**
 * @content 
 * @author fangqi 2021-11-29 
 */
import ObjectManager from '../components/ObjectManager';
import Rect3D from '../geoobject/Rect3D';

/**
 * @class Geometry3D
 */
export default class Geometry3D extends ObjectManager {

  getClassName(): String {
    return this.CLASS_GEOMETRY3D;
  }

  /**
   * 构造一个新的 Geometry3D 对象
   * @memberof Geometry3D
   * @returns {Promise<Geometry3D>}
   */
  static async createInstance(): Promise<Geometry3D> {
    let thisObj = new Geometry3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何对象的类型
   *
   * @memberOf Geometry3D
   * @returns {GeometryType} 几何对象类型
   *
   */
  async getType(): Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 计算外包围盒
   * @memberof Geometry3D
   * @returns {Promise<Rect3D>} 包围盒信息
   */
  async calRect3D(): Promise<Rect3D> {
    let methodName = "calRect3D"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect3D();
    obj.ObjId = ObjId;
    return obj;
  }

}
