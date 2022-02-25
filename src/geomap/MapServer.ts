/**
 * @content 地图服务对象
 * @author fangqi 2021-09-02
 */
import ObjectManager from '../components/ObjectManager';
import Rect from '../geoobject/Rect';
import SRefData from '../geoobject/SRefData';

/**
 * @class MapServer
 * @description 地图服务对象，此类中定义服务类型的字符串常量，例：MAPSERVER_TYPE_TDF等
 *
 *  
 * @property {String} MapServerType.MAPSERVER_TYPE_HDF - MapGISHDF 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TDF - MapGISHDF 。
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_TILE - MapGISIGServerTile 。
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_VECTOR - MapGISIGServerVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OGC_WMS - OGCWMS 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OGC_WMTS - OGCWMTS 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU - Tianditu 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_STANDARD - OpenStreetStandard 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_CYCLE - OpenStreetCycle 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_TRANSPORT - OpenStreetTransport 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_MAPQUESTOPEN - OpenStreetMapQuestOpen 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_HUNAMITARIAN - OpenStreetHunamitarian 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BING_MAP - BingMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BING_SATELLITEMAP - BingSatelliteMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BING_HYBRIDMAP - BingHybridMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAP - YahooMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAPSATELLITE - YahooMapSatellite 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAPVECTOR - YahooMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAPHYBRID - YahooMapHybrid 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAP - GoogleMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_SATELLITEMAP - GoogleSatelliteMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAPVECTOR - GoogleMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAPHYBRID - GoogleMapHybrid 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAPTERRAIN - GoogleMapTerrain 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAP - GoogleChinaMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPSATELLITE - GoogleChinaMapSatellite 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPVECTOR - GoogleChinaMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPHYBRID - GoogleChinaMapHybrid 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPTERRAIN - GoogleChinaMapTerrain 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAP - BaiduMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAPSATELLITE - BaiduMapSatellite 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAPVECTOR - BaiduMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAPHYBRID - BaiduMapHybrid 。
 *
 */

export default class MapServer extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MAP_SERVER;
  }

  /**
   * 构建一个新的MapServer对象
   *
   * @memberof MapServer
   * @returns {Promise<MapServer>} 地图服务对象
   */
  static async createInstance(): Promise<MapServer> {
    let thisObj = new MapServer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取服务类型
   *
   * @memberof MapServer
   * @returns {String} 服务类型
   */
  async getType(): Promise<String> {
    let methodName = "getType"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取地图浏览类型
   *
   * @memberof MapServer
   * @returns {Number} 地图浏览类型（int类型的Number） 例：0-MapServerBrowseType.MapTile
   */
  async getMapBrowseType() {
    let methodName = "getMapBrowseType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置具体服务名称
   *
   * @memberof MapServer
   * @param {String} name 具体服务名称
   * @returns {Promise<Void>}
   */
  async setName(name: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取具体服务名称
   *
   * @memberof MapServer
   * @returns {String} 具体服务名称
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置服务地址URL
   *
   * @memberof MapServer
   * @param {String} URL 服务地址URL
   * @returns {Promise<Void>}
   */
  async setURL(URL: String): Promise<void> {
    let methodName = "setURL"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [URL];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取服务地址URL
   *
   * @memberof MapServer
   * @returns {String}
   */
  async getURL(): Promise<String> {
    let methodName = "getURL"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 连接数据 (真实地连接数据源，可以获取服务返回相关信息 如HDF瓦片信息。)
   *
   * @memberof MapServer
   * @returns {Number} 1-成功； 0-失败 （int类型的Number）
   */
  async connectData(): Promise<number> {
    let methodName = "connectData"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 判断服务地址URL是否有效性
   *
   * @memberof MapServer
   * @returns {boolean} true-服务地址有效； false-服务地址无效
   */
  async getIsValid(): Promise<boolean> {
    let methodName = "getIsValid"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取地图服务的源参照系
   *
   * @memberof MapServer
   * @returns {Object} SRefData 参照系
   */
  async getSRS(): Promise<SRefData> {
    let methodName = "getSRS"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取全图范围（数据范围）
   *
   * @memberof MapServer
   * @returns {Object} Rect 范围
   */
  async getEntireExtent(): Promise<Rect> {
    let methodName = "getEntireExtent"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 返回服务对象个数 获得本服务对象下的服务对象列表,主要针对混合服务图层由多个服务对象组成。 eg.
   * CGGoogleHybridMapServer谷歌混合地图由CGGoogleSatelliteMapServer卫星地图和CGGoogleVectorMapServer矢量地图组成
   *
   * @memberof MapServer
   * @returns {Number} 服务对象个数 （int类型的Number）
   */
  async getMapServerCount(): Promise<number> {
    let methodName = "getMapServerCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取索引对应的地图服务对象
   *
   * @memberof MapServer
   * @param {Number} index 索引 （int类型的Number）
   * @returns {Object} 返回地图服务对象
   *
   */
  async getMapServer(index: number): Promise<MapServer> {
    let methodName = "getMapServer"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MapServer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *  设置服务版权
   *
   * @memberof MapServer
   * @param {String}  strCopyright 服务版权
   * @returns {Number} 1-成功 ； 0-失败 （long类型的Number）
   */
  async setCopyright(strCopyright: String): Promise<number> {
    let methodName = "setCopyright"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strCopyright];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取服务版权
   *
   * @memberof MapServer
   * @returns {String} 服务版权
   */
  async getCopyright(): Promise<String> {
    let methodName = "getCopyright"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置用户名和密码认证信息
   *
   * @memberof MapServer
   * @param {String} strUser  用户名
   * @param {String} strPwd  密码（或Token）,可用来设置Token验证码.
   * @returns {Number} 1-成功 ；0-失败 （int类型的Number）
   */
  async setAuthentication(strUser: String, strPwd: String): Promise<number> {
    let methodName = "setAuthentication"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [strUser, strPwd];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取用户名
   *
   * @memberof MapServer
   * @returns {String} 用户名
   */
  async getAuthenticUser(): Promise<String> {
    let methodName = "getAuthenticUser"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获密码或验证码（比如token验证码）
   *
   * @memberof MapServer
   * @returns {String} 密码或验证码
   */
  async getAuthenticPassword(): Promise<String> {
    let methodName = "getAuthenticPassword"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   *  获取服务所支持的版本列表
   *
   * @memberof MapServer
   * @returns {Number} 服务版本个数 （int类型的Number）
   * @description 我们认为所有服务都存在一个“Default version”默认版本
   */
  async getVersionCount(): Promise<number> {
    let methodName = "getVersionCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取索引对应的版本名称
   *
   * @memberof MapServer
   * @param {Number} index  索引 （int类型的Number）
   * @returns {String} 版本名称
   */
  async getVersion(index: number): Promise<String> {
    let methodName = "getVersion"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.STRING);
  }

  /**
   * 设置服务的当前版本
   *
   * @memberof MapServer
   * @param {String} strVersion  当前版本
   * @returns {Number} 1-成功 ； 0-失败 （int类型的Number）
   */
  async setCurrentVersion(strVersion: String): Promise<number> {
    let methodName = "setCurrentVersion"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strVersion];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取服务的当前版本
   *
   * @memberof MapServer
   * @returns {String} 返回当前版本
   */
  async getCurrentVersion(): Promise<String> {
    let methodName = "getCurrentVersion"
    return await this.invoke(methodName, this.STRING);
  }

  public static MapServerType = {
    MAPSERVER_TYPE_HDF: 'MapGISHDF',
    MAPSERVER_TYPE_TDF: 'MapGISHDF',
    MAPSERVER_TYPE_IGSERVER_TILE: 'MapGISIGServerTile',
    MAPSERVER_TYPE_IGSERVER_VECTOR: 'MapGISIGServerVector',
    MAPSERVER_TYPE_OGC_WMS: 'OGCWMS',
    MAPSERVER_TYPE_OGC_WMTS: 'OGCWMTS',
    MAPSERVER_TYPE_TIANDITU: 'Tianditu',
    MAPSERVER_TYPE_OPENSTREET_STANDARD: 'OpenStreetStandard',
    MAPSERVER_TYPE_OPENSTREET_CYCLE: 'OpenStreetCycle',
    MAPSERVER_TYPE_OPENSTREET_TRANSPORT: 'OpenStreetTransport',
    MAPSERVER_TYPE_OPENSTREET_MAPQUESTOPEN: 'OpenStreetMapQuestOpen',
    MAPSERVER_TYPE_OPENSTREET_HUNAMITARIAN: 'OpenStreetHunamitarian',
    MAPSERVER_TYPE_BING_MAP: 'BingMap',
    MAPSERVER_TYPE_BING_SATELLITEMAP: 'BingSatelliteMap',
    MAPSERVER_TYPE_BING_HYBRIDMAP: 'BingHybridMap',
    MAPSERVER_TYPE_YAHOO_MAP: 'YahooMap',
    MAPSERVER_TYPE_YAHOO_MAPSATELLITE: 'YahooMapSatellite',
    MAPSERVER_TYPE_YAHOO_MAPVECTOR: 'YahooMapVector',
    MAPSERVER_TYPE_YAHOO_MAPHYBRID: 'YahooMapHybrid',
    MAPSERVER_TYPE_GOOGLE_MAP: 'GoogleMap',
    MAPSERVER_TYPE_GOOGLE_SATELLITEMAP: 'GoogleSatelliteMap',
    MAPSERVER_TYPE_GOOGLE_MAPVECTOR: 'GoogleMapVector',
    MAPSERVER_TYPE_GOOGLE_MAPHYBRID: 'GoogleMapHybrid',
    MAPSERVER_TYPE_GOOGLE_MAPTERRAIN: 'GoogleMapTerrain',
    MAPSERVER_TYPE_GOOGLE_CHINA_MAP: 'GoogleChinaMap',
    MAPSERVER_TYPE_GOOGLE_CHINA_MAPSATELLITE: 'GoogleChinaMapSatellite',
    MAPSERVER_TYPE_GOOGLE_CHINA_MAPVECTOR: 'GoogleChinaMapVector',
    MAPSERVER_TYPE_GOOGLE_CHINA_MAPHYBRID: 'GoogleChinaMapHybrid',
    MAPSERVER_TYPE_GOOGLE_CHINA_MAPTERRAIN: 'GoogleChinaMapTerrain',
    MAPSERVER_TYPE_BAIDU_MAP: 'BaiduMap',
    MAPSERVER_TYPE_BAIDU_MAPSATELLITE: 'BaiduMapSatellite',
    MAPSERVER_TYPE_BAIDU_MAPVECTOR: 'BaiduMapVector',
    MAPSERVER_TYPE_BAIDU_MAPHYBRID: 'BaiduMapHybrid',
  };

}

