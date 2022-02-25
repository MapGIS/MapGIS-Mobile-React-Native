/**
 * @content 三维组图层的图层枚举
 * @author fangqi 2021-11-25 
 */
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';
import Layer3D from './Layer3D';

/**
 * @class Layer3DEnum
 */
export default class Layer3DEnum extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LAYER3D_ENUM;
  }

  /**
   * 构造一个新的 Layer3DEnum 对象
   * @memberof Layer3DEnum
   * @returns {Promise<Layer3DEnum>}
   */
  static async createInstance(): Promise<Layer3DEnum> {
    let thisObj = new Layer3DEnum();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 初始化
   * @memberof Layer3DEnum
   * @param {Array} layers - 图层列表
   * @returns {boolean} bool，返回值：成功返回true，失败返回false
   */
  async init(layers: Array<Layer3D>): Promise<boolean> {
    let layersID = getArrayObjIds(layers);

    let methodName = "init"
    let paramsTypeStr = [this.LIST + this.CLASS_LAYER3D];
    let paramsStr = [layersID];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 光标置前
   * @memberof Layer3DEnum
   * @returns {boolean} bool，返回值：成功返回true，失败返回false
   */
  async moveToFirst(): Promise<boolean> {
    let methodName = "moveToFirst"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 光标置为最后
   * @memberof Layer3DEnum
   * @returns {boolean} bool，返回值：成功返回true，失败返回false
   */
  async moveToLast(): Promise<boolean> {
    let methodName = "moveToLast"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取下一个图层
   * @memberof Layer3DEnum
   * @returns {Promise<Layer3D>} Layer3D，成功返回下一个图层
   */
  async next(): Promise<Layer3D> {
    let methodName = "next"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Layer3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取上一个图层
   * @memberof Layer3DEnum
   * @returns {Promise<Layer3D>} Layer3D，成功返回上一个图层
   */
  async prev(): Promise<Layer3D> {
    let methodName = "prev"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Layer3D();
    obj.ObjId = ObjId;
    return obj;
  }
}
