/**
 * @content 多表达式分段专题图项
 * @author fangqi 2021-09-28
 */
import ClassItemValue from './ClassItemValue';
import ObjectManager from '../components/ObjectManager';
import GeomInfo from '../geoobject/GeomInfo';


/**
 * @class MultiClassThemeInfo
 * @description 多表达式分段专题图项
 */
export default class MultiClassThemeInfo extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MULTI_CLASS_THEME_INFO;
  }

  /**
   * 构造一个新的MultiClassThemeInfo对象
   *
   * @memberof MultiClassThemeInfo
   * @returns {Promise<MultiClassThemeInfo>}
   */
  static async createInstance(): Promise<MultiClassThemeInfo> {
    let thisObj = new MultiClassThemeInfo();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取专题图信息项的数目（和表达式的数目相同）
   *
   * @memberof MultiClassThemeInfo
   * @returns {int} 专题图信息项的数目
   */
  async getCount(): Promise<number> {
    let methodName = "getCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   *
   * 取各个项的值（该列表长度与表达式的个数同）
   *
   * @memberof MultiClassThemeInfo
   * @returns {Array} 各个项的值组成的数组 - ClassItemValue[]
   */
  async getValues(): Promise<ClassItemValue[]> {
    let methodName = "getValues"
    let ObjIdList = await this.invoke(methodName, this.ARRAY);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new ClassItemValue();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 获取项标题
   *
   * @memberof MultiClassThemeInfo
   * @returns {String} 项标题
   */
  async getCaption(): Promise<String> {
    let methodName = "getCaption"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置项标题
   *
   * @memberof MultiClassThemeInfo
   * @param {String} caption 项标题
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
   * @memberof MultiClassThemeInfo
   * @returns {boolean} 是否可见
   */
  async getVisible(): Promise<boolean> {
    let methodName = "getVisible"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否可见
   *
   * @memberof MultiClassThemeInfo
   * @param {boolean} visible 是否可见
   * @returns {Promise<Void>}
   */
  async setVisible(visible: boolean): Promise<void> {
    let methodName = "setVisible"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [visible];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最小显示比
   *
   * @memberof MultiClassThemeInfo
   * @returns {double} 最小显示比
   */
  async getMinScale(): Promise<number> {
    let methodName = "getMinScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最小显示比
   *
   * @memberof MultiClassThemeInfo
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
   * @memberof MultiClassThemeInfo
   * @returns {double} 最大显示比
   */
  async getMaxScale(): Promise<number> {
    let methodName = "getMaxScale"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大显示比
   *
   * @memberof MultiClassThemeInfo
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
   * 复制信息到当前专题图对象
   *
   * @memberof MultiClassThemeInfo
   * @param {MultiClassThemeInfo} multiClassThemeInfo 专题图对象
   * @returns {boolean} true-成功  ： false-失败
   */
  async copy(multiClassThemeInfo: MultiClassThemeInfo): Promise<boolean> {
    let methodName = "copy"
    let paramsTypeStr = [this.CLASS_MULTI_CLASS_THEME_INFO];
    let paramsStr = [multiClassThemeInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 设置专题图项的信息
   *
   * @memberof MultiClassThemeInfo
   * @param {int} index 专题图项的索引
   * @param {Object} classItemValue  专题图项的信息
   * @returns {boolean} true-成功  ： false-失败
   */
  async setValue(index: number, classItemValue: ClassItemValue): Promise<boolean> {
    let methodName = "setValue"
    let paramsTypeStr = [this.LONG, this.CLASS_CLASS_ITEM_VALUE];
    let paramsStr = [index, classItemValue.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获得专题图项的信息
   *
   * @memberof MultiClassThemeInfo
   * @param {int} index 专题图项的索引
   * @returns {Promise<ClassItemValue>}  成功返回专题图项的信息
   */
  async getValue(index: number): Promise<ClassItemValue> {
    let methodName = "getValue"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new ClassItemValue();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获得专题图项的图形信息
   *
   * @memberof MultiClassThemeInfo
   * @param {int} geomType 图形信息类型（int类型的Number），例：0-GeomType.GeomUnknown
   * @returns {Promise<GeomInfo>} 成功返回专题图项的图形信息
   */
  async getGeoInfo(geomType: any): Promise<GeomInfo> {
    let methodName = "getGeoInfo"
    let paramsTypeStr = [this.ENUM + this.CLASS_GEOM_TYPE];
    let paramsStr = [geomType];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new GeomInfo();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置专题图项的图形信息
   *
   * @memberof MultiClassThemeInfo
   * @param {Object} geomInfo  专题图图形信息 （GeomInfo类型的Object）
   * @param {Number} geomType 图形类型，（int类型的Number）例：0-GeomType.GeomUnknown
   * @returns {boolean}
   */
  async setGeoInfo(geomInfo: any, geomType: any): Promise<boolean> {
    let methodName = "setGeoInfo"
    let paramsTypeStr = [this.CLASS_OBJECT, this.INT];
    let paramsStr = [geomInfo.ObjId, geomType];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
