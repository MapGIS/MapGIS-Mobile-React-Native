/**
 * @content 服务图层
 * @author fangqi 2021-09-10 
 */
import { NativeModules } from 'react-native';
import type Dot from '../geoobject/Dot';
import type Rect from '../geoobject/Rect';
let SL = NativeModules.JSImageLayer;
import MapLayer from './MapLayer';
import MapServer from './MapServer';
import type Transformation from './Transformation';



/**
 * @class ImageLayer
 * @description 服务图层
 */
export default class ImageLayer extends MapLayer {

  getClassName(): String {
    return this.CLASS_IMAGE_LAYER;
  }

  /**
   * 构造一个新的ServerLayer对象
   *
   * @memberof ImageLayer
   * @returns {Promise<ImageLayer>}
   */
  static async createInstance(): Promise<ImageLayer> {
    let thisObj = new ImageLayer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置地图服务
   *
   * @memberof ImageLayer
   * @param {Object} mapServer 地图服务对象 （MapServer类型的Object）
   * @returns {Promise<Void>}
   */
  async setMapServer(mapServer: MapServer): Promise<void> {
    let methodName = "setMapServer"
    let paramsTypeStr = [this.CLASS_MAP_SERVER];
    let paramsStr = [mapServer.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图服务
   *
   * @memberof ImageLayer
   * @returns {Promise<MapServer>}
   */
  async getMapServer(): Promise<MapServer> {
    let methodName = "getMapServer"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapServer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置服务图层的数据读取模式
   *
   * @memberof ImageLayer
   * @param {Number} accessMode 地图服务访问模式（int类型的Number），例：1--MapServerAccessMode.ServerAndCache
   * @returns {Promise<void>}
   */
  async setAccessMode(accessMode: any): Promise<void> {
    let methodName = "setAccessMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_MAP_SERVER_ACCESS_MODE];
    let paramsStr = [accessMode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取服务图层的数据读取模式
   *
   * @memberof ImageLayer
   * @returns {Number} 地图服务访问模式（int类型的Number），例：1--MapServerAccessMode.ServerAndCache
   */
  async getAccessMode() {
    let methodName = "getAccessMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置是否显示格网
   *
   * @memberof ImageLayer
   * @param {Number} isShowGrid 是否显示格网
   * @returns {Promise<void>}
   */
  async setIsShowGrid(isShowGrid: boolean): Promise<void> {
    let methodName = "setIsShowGrid"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isShowGrid];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示格网
   *
   * @memberof ImageLayer
   * @returns {Number} 是否显示格网
   */
  async getIsShowGrid(): Promise<boolean> {
    let methodName = "getIsShowGrid"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示著作权
   *
   * @memberof ImageLayer
   * @param {Number} isShowCopyright 是否显示著作权
   * @returns {Promise<void>}
   */
  async setIsShowCopyright(isShowCopyright: boolean): Promise<void> {
    let methodName = "setIsShowCopyright"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isShowCopyright];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示著作权
   *
   * @memberof ImageLayer
   * @returns {Number} 是否显示著作权
   */
  async getIsShowCopyright(): Promise<boolean> {
    let methodName = "getIsShowCopyright"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 克隆图层
   *
   * @memberof ImageLayer
   * @returns {Number} 复制的图层
   */
  async clone(): Promise<MapLayer> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置服务URL
   *
   * @memberof ImageLayer
   * @param {String} strURL 服务URL
   * @returns {boolean} 成功返回true
   */
  async setURL(url: String): Promise<boolean> {
    let methodName = "setURL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [url];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 设置地图服务类型
   *
   * @memberof ImageLayer
   * @param {String} mapServerType 地图服务类型
   * @returns {boolean} 是否成功
   */
  async setMapServerByType(mapServerType: any): Promise<boolean> {
    let methodName = "setMapServerByType"
    let paramsTypeStr = [this.ENUM + this.CLASS_MAP_SERVER_TYPE];
    let paramsStr = [mapServerType];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 预缓存指定范围、指定缩放级内的图像
   *
   * @memberof ImageLayer
   * @param {Rect} rc 矩形范围
   * @param {number} minZoom 最小缩放级
   * @param {number} maxZoom 最大缩放级
   * @returns {boolean} 是否成功
   */
  async prefetch(rc: Rect, minZoom: number, maxZoom: number): Promise<boolean> {
    let methodName = "prefetch"
    let paramsTypeStr = [this.CLASS_RECT, this.LONG, this.LONG];
    let paramsStr = [rc.ObjId, minZoom, maxZoom];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 设置缩放级 调整显示范围 可以指定中心点
   *
   * @memberof ImageLayer
   * @param {Transformation} transformation 坐标转换对象
   * @param {number} zoom 缩放级
   * @param {Dot} centerDot 中心点
   * @returns {boolean} 是否成功
   */
  async setZoom(transformation: Transformation, zoom: number, centerDot: Dot): Promise<boolean> {
    let methodName = "setZoom"
    let paramsTypeStr = [this.CLASS_TRANSFORMATION, this.LONG, this.CLASS_DOT];
    let paramsStr = [transformation.ObjId, zoom, centerDot.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获得缩放级
   *
   * @memberof ImageLayer
   * @returns {Number} 缩放级
   */
  async getZoom(): Promise<number> {
    let methodName = "getZoom"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 调整当前的显示比(trans中已经有调整前的显示范围)
   *
   * @memberof ImageLayer
   * @param {Transformation} transformation 坐标转换对象
   * @param {number} dx 代表缩放时拉伸的按下点和弹起点
   * @param {number} dy 代表缩放时拉伸的按下点和弹起点
   * @param {number} ux 代表缩放时拉伸的按下点和弹起点
   * @param {number} uy 代表缩放时拉伸的按下点和弹起点
   * @param {boolean} bUseMouseWheel 当前操作为鼠标滚轮缩放
   * @param {boolean} isRestore 复位显示
   * @returns {boolean} 是否成功
   */
  async adjustDisplayScale(transformation: Transformation, dx: number, dy: number, ux: number, uy: number, bUseMouseWheel: boolean, isRestore: boolean): Promise<boolean> {
    let methodName = "adjustDisplayScale"
    let paramsTypeStr = [this.CLASS_TRANSFORMATION, this.INT, this.INT, this.INT, this.INT, this.BOOLEAN, this.BOOLEAN];
    let paramsStr = [transformation.ObjId, dx, dy, ux, uy, bUseMouseWheel, isRestore];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 根据类型创建地图服务
   *
   * @memberof ImageLayer
   * @param {String} type MapServer中的类型常量，如：MapServer.MapServerType.MAPSERVER_TYPE_OGC_WMS
   * @returns {Promise<MapServer>} 返回创建好的MapServer对象
   */
  static async createMapServer(type: String): Promise<MapServer> {
    let thisObj = new ImageLayer();
    let methodName = "createMapServer"
    let paramsTypeStr = [thisObj.STRING];
    let paramsStr = [type];
    let ObjId = await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.OBJID);
    let obj = new MapServer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置缓存目录
   *
   * @memberof ImageLayer
   * @param {String} strPath 缓存目录
   * @returns {boolean} 是否成功
   */
  async setTileCacheDir(strPath: String): Promise<void> {
    let methodName = "setTileCacheDir"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strPath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除缓存
   *
   * @memberof ImageLayer
   * @returns {Number} 1-成功；0 失败。
   */
  async deleteTileCache(): Promise<number> {
    let methodName = "deleteTileCache"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取Layer数量
   *
   * @memberof ImageLayer
   * @returns {Number} 数量
   */
  async getLayerCount(): Promise<number> {
    let methodName = "getLayerCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取Layer
   * @memberof ImageLayer
   * @param {number} index 索引
   * @returns {Promise<MapLayer>} 
   */
  async getLayer(index: number): Promise<MapLayer> {
    let methodName = "getLayer"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取透明度
   *
   * @memberof ImageLayer
   * @returns {Number} 透明度,0-100的整数。 默认为0,表示不透明
   */
  async getTransparency(): Promise<number> {
    let methodName = "getTransparency"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置透明度,0-100 默认为0,表示不透明
   *
   * @memberof ImageLayer
   * @param {Number} trans 透明度，0-100的整数
   * @returns {Number} 1：成功，0：失败。(int类型的Number)
   */
  async setTransparency(trans: number): Promise<void> {
    let methodName = "setTransparency"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [trans];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 
   *
   * @memberof ImageLayer
   * @returns {boolean}
   */
  async getScaleSizeFlag(): Promise<number> {
    let methodName = "getScaleSizeFlag"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 
   *
   * @memberof ImageLayer
   * @param {boolean} flag 
   * @returns {Promise<Void>}
   */
  async setScaleSizeFlag(flag: number): Promise<void> {
    let methodName = "setScaleSizeFlag"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [flag];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置预缓存状态监听类
   *
   * @memberof ImageLayer
   * @returns {Number} 1 ：成功，0：失败。
   */
  async registerTilePreFetchListener() {
    try {
      let result = await SL.registerTilePreFetchListener(this.ObjId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除预缓存状态监听类
   *
   * @memberof ImageLayer
   * @returns {Object} 预缓存状态监听对象。
   */
  async removeTilePreFetchListener() {
    try {
      await SL.removeTilePreFetchListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }
}
