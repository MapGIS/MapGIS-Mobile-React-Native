/**
 * @content 
 * @author fangqi 2021-11-29 
 */
import Feature from '../geomapview/Feature';
import Geometry3D from './Geometry3D';

/**
 * @class Feature3D
 */
export default class Feature3D extends Feature {

  getClassName(): String {
    return this.CLASS_FEATURE3D;
  }

  /**
   * 构造一个新的 Feature3D 对象
   * @memberof Feature3D
   * @returns {Promise<Feature3D>}
   */
  static async createInstance(): Promise<Feature3D> {
    let thisObj = new Feature3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取几何数据
   * @memberof Feature3D
   * @returns {Promise<Geometry3D>} 几何数据
   */
  async getGeometry3D(): Promise<Geometry3D> {
    let methodName = "getGeometry"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Geometry3D();
    obj.ObjId = ObjId;
    return obj;
  }

}
