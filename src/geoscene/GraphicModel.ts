/**
 * @content 场景模型图形
 * @author fangqi 2021-12-01 
 */
import Graphic3D from './Graphic3D';
import Dot3D from '../geoobject/Dot3D';

/**
 * @constructor GraphicModel
 */
export default class GraphicModel extends Graphic3D {

  getClassName(): String {
    return this.CLASS_GRAPHIC_MODEL;
  }

  /**
   * 构造一个新的 GraphicModel 对象。
   * @memberOf GraphicModel
   * @returns {Promise.<GraphicModel>}
   */
  static async createInstance(): Promise<GraphicModel> {
    let thisObj = new GraphicModel();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置模型 坐标点
   * @memberOf GraphicModel
   * @param dot3D - 场景地理坐标
   * @returns {Promise<void>}
   */
  async setPoint(dot3D: Dot3D): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [dot3D.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取场景地理坐标
   * @memberOf GraphicModel
   * @returns {Promise<Dot3D>} 场景地理坐标
   */
  async getPoints(): Promise<Dot3D> {
    let methodName = "getPoints"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置模型路径
   * @memberOf GraphicModel
   * @param strModelPath - 路径
   * @returns {Promise<void>}
   */
  async setModelPath(strModelPath: String): Promise<void> {
    let methodName = "setModelPath"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strModelPath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取模型路径
   * @memberOf GraphicModel
   * @returns {Promise<String>} 返回模型路径
   */
  async getModelPath(): Promise<String> {
    let methodName = "getModelPath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置模型在x轴方向上的缩放比
   * @memberOf GraphicModel
   * @param scaleX - 缩放比
   * @returns {Promise<void>}
   */
  async setScaleX(scaleX: number): Promise<void> {
    let methodName = "setScaleX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [scaleX];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取模型在x轴方向上的缩放比
   * @memberOf GraphicModel
   * @returns {Promise<Number>} 返回缩放比
   */
  async getScaleX(): Promise<number> {
    let methodName = "getScaleX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置模型在Y轴方向上的缩放比
   * @memberOf GraphicModel
   * @param scaleY - 缩放比
   * @returns {Promise<void>}
   */
  async setScaleY(scaleY: number): Promise<void> {
    let methodName = "setScaleY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [scaleY];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取模型在Y轴方向上的缩放比
   * @memberOf GraphicModel
   * @returns {Promise<Number>} 返回模型在Y轴方向上的缩放比
   */
  async getScaleY(): Promise<number> {
    let methodName = "getScaleY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置模型在Z轴方向上的缩放比
   * @memberOf GraphicModel
   * @param scaleZ - 缩放比
   * @returns {Promise<void>}
   */
  async setScaleZ(scaleZ: number): Promise<void> {
    let methodName = "setScaleZ"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [scaleZ];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取模型在Z轴方向上的缩放比
   * @memberOf GraphicModel
   * @returns {Promise<Number>} 返回模型在Z轴方向上的缩放比
   */
  async getScaleZ(): Promise<number> {
    let methodName = "getScaleZ"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置模型绕x轴旋转的角度
   * @memberOf GraphicModel
   * @param angleAroundX - 绕x轴旋转的角度
   * @returns {Promise<void>}
   */
  async setAngleAroundX(angleAroundX: number): Promise<void> {
    let methodName = "setAngleAroundX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [angleAroundX];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取模型绕x轴旋转的角度
   * @memberOf GraphicModel
   * @returns {Promise<Number>} 返回模型绕x轴旋转的角度
   */
  async getAngleAroundX(): Promise<number> {
    let methodName = "getAngleAroundX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置模型绕Y轴旋转的角度
   * @memberOf GraphicModel
   * @param angleAroundY - 绕Y轴旋转的角度
   * @returns {Promise<void>}
   */
  async setAngleAroundY(angleAroundY: number): Promise<void> {
    let methodName = "setAngleAroundY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [angleAroundY];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取绕Y轴旋转的角度
   * @memberOf GraphicModel
   * @returns {Promise<Number>} 返回绕Y轴旋转的角度
   */
  async getAngleAroundY(): Promise<number> {
    let methodName = "getAngleAroundY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置绕Z轴旋转的角度
   * @memberOf GraphicModel
   * @param angleAroundZ - 绕Z轴旋转的角度
   * @returns {Promise<void>}
   */
  async setAngleAroundZ(angleAroundZ: number): Promise<void> {
    let methodName = "setAngleAroundZ"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [angleAroundZ];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取绕Z轴旋转的角度
   * @memberOf GraphicModel
   * @returns {Promise<Number>} 返回绕Z轴旋转的角度
   */
  async getAngleAroundZ(): Promise<number> {
    let methodName = "getAngleAroundZ"
    return await this.invoke(methodName, this.NUMBER);
  }

}
