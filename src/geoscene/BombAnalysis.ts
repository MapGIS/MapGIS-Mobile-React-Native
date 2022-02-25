/**
 * @content 爆炸分析类，用于实现基于m3d模型缓存图层的爆炸分析。 爆炸分析类是指通过动画的形式，将模型的各个部分按照一定的规则分解开来，便于观察模型内部的结构。
 * @author fangqi 2021-12-07 
 */
import ObjectManager from '../components/ObjectManager';
import BombInfo from './BombInfo';
import ModelCacheLayer3D from './ModelCacheLayer3D';

/**
 * @class BombAnalysis
 */
export default class BombAnalysis extends ObjectManager {

  getClassName(): String {
    return this.CLASS_BOMB_ANALYSIS;
  }

  /**
   * 构造一个新的 BombAnalysis 对象。
   * @memberOf BombAnalysis
   * @returns {Promise.<BombAnalysis>}
   */
  static async createInstance(): Promise<BombAnalysis> {
    let thisObj = new BombAnalysis();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 BombAnalysis 对象
   * @memberOf BombAnalysis
   * @param modelCacheLayer - m3d模型缓存层
   * @return {Promise<BombAnalysis>}
   */
  static async createInstanceByParam(modelCacheLayer: ModelCacheLayer3D): Promise<BombAnalysis> {
    let thisObj = new BombAnalysis();
    let initParamsType = [thisObj.CLASS_MODEL_CACHE_LAYER3D];
    let initParamsStr = [modelCacheLayer.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置准备进行爆炸分析的m3d模型绘存图层
   * @memberOf BombAnalysis
   * @param {ModelCacheLayer3D} modelCacheLayer m3d模型缓存层
   * @returns {Promise<void>}
   */
  async setModelCacheLayer(modelCacheLayer: ModelCacheLayer3D): Promise<void> {
    let methodName = "setModelCacheLayer"
    let paramsTypeStr = [this.CLASS_MODEL_CACHE_LAYER3D];
    let paramsStr = [modelCacheLayer.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取准备进行爆炸分析的m3d模型绘存图层
   * @memberOf BombAnalysis
   * @returns {Promise<ModelCacheLayer3D>} m3d模型缓存层
   */
  async getModelCacheLayer(): Promise<ModelCacheLayer3D> {
    let methodName = "getModelCacheLayer"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ModelCacheLayer3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置爆炸分析参数信息
   * @memberOf BombAnalysis
   * @param {BombInfo} bombInfo - 爆炸分析参数信息
   * @returns {Promise<void>}
   */
  async setBombInfo(bombInfo: BombInfo): Promise<void> {
    let methodName = "setBombInfo"
    let paramsTypeStr = [this.CLASS_BOMB_INFO];
    let paramsStr = [bombInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取爆炸分析参数信息
   * @memberOf BombAnalysis
   * @returns {Promise<BombInfo>} 爆炸分析参数信息
   */
  async getBombInfo(): Promise<BombInfo> {
    let methodName = "getBombInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new BombInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 开始爆炸
   * @memberOf BombAnalysis
   * @returns {Promise<void>}
   */
  async start(): Promise<void> {
    let methodName = "start"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 结束爆炸,模型复位
   * @memberOf BombAnalysis
   * @returns {Promise<void>}
   */
  async stop(): Promise<void> {
    let methodName = "stop"
    await this.invoke(methodName, this.VOID);
  }

}
