/**
 * @content android视图对象功能组件
 * @author fangqi 2021-7-24 下午2:52:36
 */
import { NativeModules } from "react-native";
import SFeatureCls from "../geodatabase/SFeatureCls";
import Rect from "../geoobject/Rect";
import SRefData from "../geoobject/SRefData";
let XClsType = NativeModules.JSXClsType;
// import SimpleLabel from './SimpleLabel';
// import Themes from './Themes';
// import AnnotationCls from './AnnotationCls';
import DocumentItem from './DocumentItem';
import Label from './Label';
import ScaleRange from './ScaleRange';
import Themes from "./Themes";



/**
 * @class MapLayer
 */
export default class MapLayer extends DocumentItem {

  getClassName(): String {
    return this.CLASS_MAP_LAYER;
  }

  /**
   * 构造一个新的 MapLayer 对象。
   * @memberOf MapLayer
   * @returns {Promise.<MapLayer>}
   */
  static async createInstance(): Promise<MapLayer> {
    let thisObj = new MapLayer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图层名称
   * @memberOf MapLayer
   * @returns {Promise<*>}
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取图层名称
   * @memberOf MapLayer
   * @param {String} name 图层名称
   * @returns {Promise<*>}
   */
  async setName(name: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图层的URL
   * @memberOf MapLayer
   * @returns {Promise<*>}
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置图层URL地址
   * @memberOf MapLayer
   * @param {String} url 图层URL地址
   * @returns {Promise<void>}
   */
  async setURL(url: String): Promise<boolean> {
    let methodName = "setURL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [url];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取图层状态
   * @memberOf MapLayer
   * @returns {Promise<*|NavigationPreloadState>}
   */
  async getState() {
    let methodName = "getState"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置图层状态
   *@memberOf MapLayer
   * @param {LayerState} state 图层状态
   */
  async setState(state: any): Promise<void> {
    let methodName = "setState"
    let paramsTypeStr = [this.ENUM + this.CLASS_LAYER_STATE];
    let paramsStr = [state];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图层的权重
   * @memberOf MapLayer
   * @returns {Promise<*>}
   */
  async getWeight(): Promise<number> {
    let methodName = "getWeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图层的权重
   * @memberOf MapLayer
   * @param {String} weight 权重
   */
  async setWeight(weight: number): Promise<void> {
    let methodName = "setWeight"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [weight];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 查看图层是否有效
   * @memberOf MapLayer
   * @returns {Promise<*>}
   */
  async getIsValid(): Promise<boolean> {
    let methodName = "getIsValid"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取地图范围
   * @memberOf MapLayer
   * @returns {Promise<Rect>}
   */
  async getRange(): Promise<Rect> {
    let methodName = "getRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取空间参照系
   * @memberof MapLayer
   * @returns {Promise<SRefData>}
   */
  async getSrefInfo(): Promise<SRefData> {
    let methodName = "getSrefInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置图层参照系信息
   * @memberof MapLayer
   * @param srefInfo 图层参照系信息
   * @returns {Promise<SRefData>}
   */
  async setSrefInfo(srefInfo: SRefData): Promise<void> {
    let methodName = "setSrefInfo"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [srefInfo.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取类类型
   * @memberof MapLayer
   * @returns {Number} 类类型（int类型的数值；例如 30 -- XClsType.SFCls）
   */
  async getClsType() {
    let methodName = "getClsType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取要素几何类型
   * @memberof MapLayer
   * @returns {Number} 要素几何类型（int类型的数值；例如 1--GeomType.GeomPnt
   */
  async getGeometryType() {
    let methodName = "getGeometryType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取当前的标注
   * @memberof MapLayer
   * @returns {Promise<Label>}} 成功返回当前的标注
   */
  async getLabel(): Promise<Label> {
    let methodName = "getLabel"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Label();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获获取专题图列表
   * @memberof MapLayer
   * @returns {Promise<Themes>}} 成功返回专题图列表
   */
  async getThemes(): Promise<Themes> {
    let methodName = "getThemes"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Themes();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 复制图层
   * @memberof MapLayer
   * @returns {Promise<MapLayer>}} 成功返回克隆之后的图层
   */
  async clone(): Promise<MapLayer> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }

  // /**
  //  * 附加外部数据
  //  * @memberof MapLayer
  //  * @param {Object} cls 地理类对象
  //  * @return {boolean} true/false 成功/失败
  //  */
  // async attachData(cls) {
  //   try {
  //     let result = await ML.attachData(this.ObjId, cls._MGBasClsId);
  //     return result;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  /**
   * 附加解除
   * @memberof MapLayer
   * @return {boolean} true/false 成功/失败
   */
  async detachData(): Promise<boolean> {
    let methodName = "detachData"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取图层要素数据类
   * @memberof MapLayer
   * @return {Promise<IBasCls>} 成功获得数据类
   */
  async getData() {
    let methodName = "getData"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let xClsType = await this.getClsType();
    let xCls = undefined;
    if (ObjId != null) {
      switch (xClsType) {
        case XClsType.XSFCls: // 30-简单要素类
          xCls = new SFeatureCls();
          xCls.ObjId = ObjId;
          break;
        // case XClsType.XACls: // 5-注记类
        //   xCls = new AnnotationCls();
        //   xCls.ObjId = ObjId;
        //   break;
        default: undefined
      }
    }
    return xCls;
  }

  /**
   * 连接数据
   * @memberof MapLayer
   * @return {boolean} true/false 成功/失败
   */
  async connectData(): Promise<boolean> {
    let methodName = "connectData"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 删除单个元素
   * @memberof MapLayer
   * @param id 元素ID
   * @return {boolean} true/false 成功/失败
   */
  async delete(id: number): Promise<boolean> {
    let methodName = "delete"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [id];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 存为XML
   * @memberof MapLayer
   * @return {String} xml
   */
  async toXML(): Promise<String> {
    let methodName = "toXML"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 从XML导入
   * @memberof MapLayer
   * @param strXML
   * @return {int} 1-成功；0-失败
   */
  async fromXML(strXMl: String): Promise<boolean> {
    let methodName = "fromXML"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strXMl];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 设置图层可见比例尺区间
   * @memberof MapLayer
   * @param scaleRange 比例尺区间
   * @return {int} 1-成功；0-失败
   */
  async setScaleRange(scaleRange: ScaleRange): Promise<boolean> {
    let methodName = "setScaleRange"
    let paramsTypeStr = [this.CLASS_SCALE_RANGE];
    let paramsStr = [scaleRange.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取图层可见比例尺区间
   * @memberof MapLayer
   * @returns {Object}  比例尺区间
   */
  async getScaleRange(): Promise<ScaleRange> {
    let methodName = "getScaleRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new ScaleRange();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取拓展属性
   * @memberof MapLayer
   * @param name 属性名
   * @returns {Object}  属性值
   */
  async getPropertyEx(name: String): Promise<String> {
    let methodName = "getPropertyEx"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 设置拓展属性
   * @memberof MapLayer
   * @param name 属性名
   * @param val 属性值
   * @returns {Object}  属性值
   */
  async setPropertyEx(name: String, val: String): Promise<void> {
    let methodName = "setPropertyEx"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
