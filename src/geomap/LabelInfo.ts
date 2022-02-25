/**
 * @content 标注对象
 * @author fangqi 2021-10-11
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class LabelInfo
 * @description 标注对象
 */
export default class LabelInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LABEL_INFO;
  }

  /**
   * 构造一个新的LabelInfo对象
   *
   * @memberof LabelInfo
   * @returns {Promise<LabelInfo>}
   */
  static async createInstance(): Promise<LabelInfo> {
    let thisObj = new LabelInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取名称
   *
   * @memberof LabelInfo
   * @returns {String} 名称
   */
  async getCaption(): Promise<String> {
    let methodName = "getCaption"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置名称
   *
   * @memberof LabelInfo
   * @param {String} caption 名称
   * @returns {Promise<Void>}
   */
  async setCaption(caption: String): Promise<void> {
    let methodName = "setCaption"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [caption];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否可见
   *
   * @memberof LabelInfo
   * @returns {boolean}
   */
  async getIsVisible(): Promise<boolean> {
    let methodName = "getIsVisible"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否可见
   *
   * @memberof LabelInfo
   * @param {boolean} isVisible
   * @returns {Promise<Void>}
   */
  async setIsVisible(isVisible: boolean): Promise<void> {
    let methodName = "setIsVisible"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isVisible];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最小显示比
   *
   * @memberof LabelInfo
   * @returns {double}
   */
  async getMinScale(): Promise<number> {
    let methodName = "getMinScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小显示比
   *
   * @memberof LabelInfo
   * @param {double} minScale
   * @returns {Promise<Void>}
   */
  async setMinScale(minScale: number): Promise<void> {
    let methodName = "setMinScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最大显示比
   *
   * @memberof LabelInfo
   * @returns {double}
   */
  async getMaxScale(): Promise<number> {
    let methodName = "getMaxScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大显示比
   *
   * @memberof LabelInfo
   * @param {double} maxScale
   * @returns {Promise<Void>}
   */
  async setMaxScale(maxScale: number): Promise<void> {
    let methodName = "setMaxScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [maxScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  // /**
  //  * 获取注记信息
  //  *
  //  * @memberof LabelInfo
  //  * @returns {TextAnnInfo} 注记信息(TextAnnInfo)
  //  */
  // async getGeoInfo(): Promise<GeomInfo> {
  //   let methodName = "getGeoInfo"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new GeomInfo();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  // /**
  //  * 设置注记信息
  //  *
  //  * @memberof LabelInfo
  //  * @param {Object} textAnnInfo 注记信息
  //  * @returns {Promise<Void>}
  //  */
  // async setGeoInfo(geomInfo: GeomInfo): Promise<boolean> {
  //   let methodName = "setGeoInfo"
  //   let paramsTypeStr = [this.CLASS_GEOM_INFO];
  //   let paramsStr = [geomInfo.ObjId];
  //   return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  // }

}
