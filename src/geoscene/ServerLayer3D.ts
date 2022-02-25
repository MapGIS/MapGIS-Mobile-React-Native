/**
 * @content 三维服务图层类，支持 IGServer地图服务、三维服务、OGC标准服务（WFS、WMS）及TMS服务,天地图、Google地图等第三方公共地图服务
 * @author fangqi 2021-11-25 
 */
import type SRefData from '../geoobject/SRefData';
import type Rect from '../geoobject/Rect';
import GroupLayer3D from './GroupLayer3D';
import type Rect3D from '../geoobject/Rect3D';
import MapServer from '../geomap/MapServer';
import type IntRef from '../geoobject/IntRef';



/**
 * @class ServerLayer3D
 * 
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_SCENE - MapGISIGServerScene 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OGC_WFS - OGCWFS 。
 * 
 */
export default class ServerLayer3D extends GroupLayer3D {

  getClassName(): String {
    return this.CLASS_SERVERLAYER3D;
  }

  /**
   * 构造一个新的 ServerLayer3D 对象
   *
   * @memberof ServerLayer3D
   * @returns {Promise<ServerLayer3D>}
   */
  static async createInstance(): Promise<ServerLayer3D> {
    let thisObj = new ServerLayer3D();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取图层类型
   *
   * @memberof ServerLayer3D
   * @returns {Layer3DType} Layer3DType枚举类型，成功返回三维图层类型,返回值为Server
   */
  async getType() :Promise<any> {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 图层数据是否有效
   *
   * @memberof ServerLayer3D
   * @returns {boolean} 布尔类型，返回值：false-无效；true-有效
   */
  async isValid(): Promise<boolean> {
    let methodName = "isValid"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置图层显示模式透明度
   *
   * @memberof ServerLayer3D
   * @param {Number} sAlpha - 透明度,sAlpha值为0-100，默认为100（表示不透明）
   * @returns {Number} 返回值：1-成功；0-失败
   */
  async setTransparency(sAlpha: number): Promise<number> {
    let methodName = "setTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层显示模式透明度
   *
   * @memberof ServerLayer3D
   * @param {Number} sAlpha - 透明度,sAlpha值为0-100，100表示不透明
   * @returns {Number} 返回值：1-成功；0-失败
   */
  async getTransparency(sAlpha: number): Promise<number> {
    let methodName = "getTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [sAlpha];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层数
   *
   * @memberof ServerLayer3D
   * @returns {Number} 成功返回图层数
   */
  async getLayerCount(): Promise<number> {
    let methodName = "getLayerCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置服务地址URL
   *
   * @memberof ServerLayer3D
   * @param {String} strURL - 服务地址URL
   * @returns {boolean} 成功返回true
   */
  async setURL(strURL: String): Promise<boolean> {
    let methodName = "setURL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strURL];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取服务地址URL
   *
   * @memberof ServerLayer3D
   * @returns {String} 服务地址URL
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 连接数据(真实地连接数据源，可以获取服务返回相关信息 如HDF瓦片信息。)
   *
   * @memberof ServerLayer3D
   * @returns {boolean} 返回值：1-成功；0-失败
   */
  async connectData(): Promise<boolean> {
    let methodName = "connectData"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取图层参考系
   *
   * @memberof ServerLayer3D
   * @param {SRefData} SRSData - 空间参考系
   * @returns {Number} 返回值：1-成功；0-失败
   */
  async getSRS(SRSData: SRefData): Promise<number> {
    let methodName = "getSRS"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [SRSData.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层范围
   *
   * @memberof ServerLayer3D
   * @param {Rect} pRect - 二维范围，Rect类型，参数值为{double xMin, double yMin, double xMax, double yMax}
   * @returns {Number} 返回值：1-成功；0-失败
   */
  async getExtent(pRect: Rect): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [pRect.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取图层三维范围
   *
   * @memberof ServerLayer3D
   * @param {Rect3D} pBox - 三维范围，Rect3D类型，参数值为{double xMin, double yMin, double zMin, double xMax, double yMax, double zMax}
   * @returns {Number} 返回值：1-成功；0-失败
   */
  async getExtentOf3D(pBox: Rect3D): Promise<number> {
    let methodName = "getExtent"
    let paramsTypeStr = [this.CLASS_RECT3D];
    let paramsStr = [pBox.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置服务
   *
   * @memberof ServerLayer3D
   * @param {MapServer} pServer - 地图服务对象，MapServer类型
   * @returns {Promise<number>} 返回值：1-成功；0-失败
   */
   async setMapServer(mapServer: MapServer): Promise<number> {
    let methodName = "setMapServer"
    let paramsTypeStr = [this.CLASS_MAP_SERVER];
    let paramsStr = [mapServer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据类型创建地图服务
   *
   * @memberof ServerLayer3D
   * @param {String} type MapServer中的类型常量，如：MapServer.MapServerType.MAPSERVER_TYPE_OGC_WMS
   * @returns {Promise<MapServer>} 返回创建好的MapServer对象
   */
  static async createMapServer(type: String): Promise<MapServer> {
    let thisObj = new ServerLayer3D();
    let methodName = "createMapServer"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [type];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new MapServer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取地图服务
   *
   * @memberof ServerLayer3D
   * @returns {Promise<MapServer>} MapServer，地图服务对象
   */
   async getMapServer(): Promise<MapServer> {
    let methodName = "getMapServer"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapServer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取服务数据源缩放级范围
   *
   * @memberof ServerLayer3D
   * @param {IntRef} minZoom - 数据源最小缩放级
   * @param {IntRef} maxZoom - 数据源最大缩放级
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
   async getZoomCapacity(minZoom: IntRef, maxZoom: IntRef): Promise<number> {
    let methodName = "getZoomCapacity"
    let paramsTypeStr = [this.CLASS_INT_REF, this.CLASS_INT_REF];
    let paramsStr = [minZoom.ObjId, maxZoom.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置服务数据源缩放级范围
   *
   * @memberof ServerLayer3D
   * @param {int} minZoom - 数据源最小缩放级
   * @param {int} maxZoom - 数据源最大缩放级
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
   async setZoomCapacity(minZoom: number, maxZoom: number): Promise<number> {
    let methodName = "setZoomCapacity"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [minZoom, maxZoom];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清除m3d模型缓存
   *
   * @memberof ServerLayer3D
   * @returns {boolean} 成功返回true,失败返回false
   */
  async clearCache(): Promise<boolean> {
    let methodName = "clearCache"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  public static MapServerType = {
    MAPSERVER_TYPE_IGSERVER_SCENE: 'MapGISIGServerScene',
    MAPSERVER_TYPE_OGC_WFS: 'OGCWFS',
  };

}
