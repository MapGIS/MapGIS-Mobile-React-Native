/**
 * @content 专题绘制信息
 * @author fangqi 2021-09-28
 */
import ObjectManager from '../components/ObjectManager';
import GeomInfo from '../geoobject/GeomInfo';

/**
 * @class ThemeInfo
 * @description 专题绘制信息
 */
export default class ThemeInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_THEME_INFO;
  }

  /**
   * 构造一个新的ThemeInfo对象
   *
   * @class ThemeInfo
   * @returns {Promise<ThemeInfo>}
   */
  static async createInstance(): Promise<ThemeInfo> {
    let thisObj = new ThemeInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取标题
   *
   * @memberof ThemeInfo
   * @returns {String} 标题
   */
  async getCaption(): Promise<String> {
    let methodName = "getCaption"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置标题
   *
   * @memberof ThemeInfo
   * @param {String} caption 标题
   * @returns {Promise<Void>}
   */
  async setCaption(caption: String): Promise<number> {
    let methodName = "setCaption"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [caption];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取是否可见
   *
   * @memberof ThemeInfo
   * @returns {boolean}
   */
  async getIsVisible(): Promise<boolean> {
    let methodName = "getIsVisible"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否可见
   *
   * @memberof ThemeInfo
   * @param {boolean} isVisible 是否可见
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
   * @memberof ThemeInfo
   * @returns {double}
   */
  async getMinScale(): Promise<number> {
    let methodName = "getMinScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小显示比
   *
   * @memberof ThemeInfo
   * @param {double} minScale 最小显示比
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
   * @memberof ThemeInfo
   * @returns {double}
   */
  async getMaxScale(): Promise<number> {
    let methodName = "getMaxScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大显示比
   *
   * @memberof ThemeInfo
   * @param {double} maxScale 最大显示比
   * @returns {Promise<Void>}
   */
  async setMaxScale(maxScale: number): Promise<void> {
    let methodName = "setMaxScale"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [maxScale];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 根据图形类型设置图形信息
   *
   * @memberof ThemeInfo
   * @param {Number} geomType 图形信息类型（int类型的Number），例：0-GeomType.GeomUnknown
   * @returns {Promise<GeomInfo>} 成功返回图形信息
   */
  async getGeoInfo(): Promise<GeomInfo> {
    let methodName = "getGeoInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new GeomInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置图形信息
   *
   * @memberof ThemeInfo
   * @param {Object} geomInfo 图形信息
   * @returns {Promise<Void>}
   */
  async setGeoInfo(geomInfo: GeomInfo): Promise<void> {
    let methodName = "setGeoInfo"
    let paramsTypeStr = [this.CLASS_GEOM_INFO];
    let paramsStr = [geomInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
