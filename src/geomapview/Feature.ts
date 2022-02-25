/**
 * @content 要素类功能组件
 * @author fangqi 2021-7-25
 */
import ObjectManager from '../components/ObjectManager'
import Geometry from '../geoobject/Geometry';
import GeomInfo from '../geoobject/GeomInfo';
import Graphic from './Graphic'


/**
 * @class Feature
 */
export default class Feature extends ObjectManager {

  getClassName(): String {
    return this.CLASS_FEATURE;
  }

  /**
   * 无参构造。构造一个新的 Feature 对象。
   * 
   * @memberOf Feature
   * @returns {Promise.<Feature>}
   */
  static async createInstance(): Promise<Feature> {
    let thisObj = new Feature();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 有参构造。通过attribute、geometry、geomInfo构造一个新的 Feature 对象。
   * 
   * @memberOf Feature
   * @param {Object} attribute 存有属性字段及对应值的对象，不可为null。例：let array = {name: '张三', age: 14};
   * @param {Geometry} geometry 几何对象
   * @param {GeomInfo} geomInfo 图形对象
   * @returns {Promise.<Feature>}
   * 
   */
  static async createInstanceByParam(attribute: Object, geometry: Geometry, geomInfo: GeomInfo): Promise<Feature> {
    let thisObj = new Feature();
    let initParamsType = [thisObj.MAP, thisObj.CLASS_GEOMETRY, thisObj.CLASS_GEOM_INFO];
    let initParamsStr = [attribute, geometry.ObjId, geomInfo.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   *  获取要素ID
   *  @memberOf Feature
   * @returns {Promise<*|*>}
   */
  async getID(): Promise<number> {
    let methodName = "getID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取要素属性
   * @memberOf Feature
   */
  async getAttributes() {
    let methodName = "getAttributes"
    return await this.invoke(methodName, this.MAP);
  }

  /**
   * 获取几何数据
   * @memberOf Feature
   * @return {Promise<Geometry>}几何数据
   */
  async getGeometry(): Promise<Geometry> {
    let methodName = "getGeometry"
    let ObjId = await this.invoke(methodName, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 获取几何信息
   * @memberOf Feature
   * @return {Promise<GeomInfo>}几何信息
   */
  async getInfo(): Promise<GeomInfo> {
    let methodName = "getInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new GeomInfo();
    obj.ObjId = ObjId;
    return obj;
  }


  /**
   * 要素转Graphic
   *  @memberOf Feature
   * @returns {Promise<Array>}
   */
  async toGraphics(withAttributes: boolean): Promise<Array<Graphic>> {
    let methodName = "toGraphics"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [withAttributes];
    let ObjIdList = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Graphic();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
 * 清空
 * @memberOf Feature
 * @return {Promise<long>}大于0成功，否则失败
 */
  async reSet(): Promise<number> {
    let methodName = "reSet"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 修改要素值（包括属性信息，图形信息，几何信息）
   * 
   * @memberof Feature
   * @param {Object} attribute 属性信息，JSON格式的字符串，暂不支持null。例let attribute = {"LayerID":"0","ID":"1"}
   * @param {Geometry} geometry 图形信息
   * @param {GeomInfo} geomInfo 几何信息
   * @returns {Promise<number>} 大于0成功，否则失败
   */
  async modifyFeatureValue(attribute:Object, geometry: Geometry, geomInfo: GeomInfo): Promise<number> {
    let methodName = "modifyFeatureValue"
    let paramsTypeStr = [this.MAP, this.CLASS_GEOMETRY, this.CLASS_GEOM_INFO];
    let paramsStr = [attribute, geometry.ObjId, geomInfo.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
