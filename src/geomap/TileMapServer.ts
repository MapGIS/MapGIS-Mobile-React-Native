/**
 * @content 瓦片地图服务
 * @author fangqi 2021-09-04
 */
import Dot from '../geoobject/Dot';
import type IntRef from '../geoobject/IntRef';
import MapServer from './MapServer';

/**
 * @class TileMapServer
 * @description 瓦片地图服务
 */
export default class TileMapServer extends MapServer {

  getClassName(): String {
    return this.CLASS_TILE_MAP_SERVER;
  }

  /**
   * 创建一个新的TileMapServer对象
   *
   * @memberof TileMapServer
   * @returns {Promise<TileMapServer>}
   */
  static async createInstance(): Promise<TileMapServer> {
    let thisObj = new TileMapServer();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取瓦片的切片方式
   *
   * @memberof TileMapServer
   * @return {int} 返回瓦片的切片方式 ，例：1-TileSliceType.SliceWMTS
   * @description 默认为OGC_WMTS切片方式
   */
  async getTileSliceType() {
    let methodName = "getTileSliceType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置最小显示缩放级
   *
   * @memberof TileMapServer
   * @param minZoom 最小显示缩放级
   * @return {Promise<Void>}
   */
  async setMinZoom(minZoom: number): Promise<void> {
    let methodName = "setMinZoom"
    let paramsTypeStr = [this.INT];
    let paramsStr = [minZoom];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最小显示缩放级
   *
   * @memberof TileMapServer
   * @return {int} 最小显示缩放级
   */
  async getMinZoom(): Promise<number> {
    let methodName = "getMinZoom"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置最大显示缩放级
   *
   * @memberof TileMapServer
   * @param maxZoom 最大显示缩放级
   * @return {Promise<Void>}
   */
  async setMaxZoom(maxZoom: number): Promise<void> {
    let methodName = "setMaxZoom"
    let paramsTypeStr = [this.INT];
    let paramsStr = [maxZoom];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取最大显示缩放级
   *
   * @memberof TileMapServer
   * @return {int} 最大显示缩放级
   */
  async getMaxZoom(): Promise<number> {
    let methodName = "getMaxZoom"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取服务数据源缩放级范围
   *
   * @memberof TileMapServer
   * @param {Object} minZoom 数据源最小缩放级（Object--IntUser）
   * @param {Object} maxZoom 数据源最大缩放级（Object--IntUser）
   * @returns {boolean} 成功返回true
   */
  async getZoomCapacity(minZoom: IntRef, maxZoom: IntRef): Promise<boolean> {
    let methodName = "getZoomCapacity"
    let paramsTypeStr = [this.CLASS_INT_REF, this.CLASS_INT_REF];
    let paramsStr = [minZoom.ObjId, maxZoom.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取瓦片裁剪原点
   *
   * @memberof TileMapServer
   * @returns {Promise<Dot>} 瓦片裁剪原点
   */
  async getTileOriginXY(): Promise<Dot> {
    let methodName = "getTileOriginXY"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获得瓦片的高宽大小
   *
   * @memberof TileMapServer
   * @param {Object} width 瓦片宽（像素） （Object--IntUser）
   * @param {Object} height 瓦片高（像素）（Object--IntUser）
   * @returns {boolean} 成功返回true
   */
  async getTileSize(width: IntRef, height: IntRef): Promise<boolean> {
    let methodName = "getTileSize"
    let paramsTypeStr = [this.CLASS_INT_REF, this.CLASS_INT_REF];
    let paramsStr = [width.ObjId, height.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 设置缩放级对应的瓦片分辨率（logic/pixel）
   *
   * @memberof TileMapServer
   * @param {int} zoom 瓦片缩放级
   * @param {double} dResolution dResolution 瓦片分辨率
   * @returns {int} 1-成功；0-失败
   */
  async setTileResolution(zoom: number, dResolution: number): Promise<number> {
    let methodName = "setTileResolution"
    let paramsTypeStr = [this.INT, this.DOUBLE];
    let paramsStr = [zoom, dResolution];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获得缩放级对应的瓦片分辨率(logic/pixel)
   *
   * @memberof TileMapServer
   * @param {int} zoom 瓦片缩放级
   * @returns {double} 瓦片分辨率
   */
  async getTileResolution(zoom: number): Promise<number> {
    let methodName = "getTileResolution"
    let paramsTypeStr = [this.INT];
    let paramsStr = [zoom];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获得缩放级别对应的地面分辨率,与Y值有关（dLogY纬度）
   *
   * @memberof TileMapServer
   * @param {int} zoom 瓦片缩放级
   * @param {double} dLogY 纬度
   * @returns {double} 地面分辨率
   */
  async getGroundResolution(zoom: number, dLogY: number): Promise<number> {
    let methodName = "getGroundResolution"
    let paramsTypeStr = [this.INT, this.DOUBLE];
    let paramsStr = [zoom, dLogY];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取缩放级对应的比例尺
   *
   * @memberof TileMapServer
   * @param {int} zoom 瓦片缩放级
   * @param {double} dLogY 纬度
   * @returns {double} 返回比例尺
   * @description 获取比例尺=图上距离/实地距离，图上距离通过瓦片像素反算成米，实地距离通过地球半径与纬度计算
   */
  async getScale(zoom: number, dLogY: number): Promise<number> {
    let methodName = "getScale"
    let paramsTypeStr = [this.INT, this.DOUBLE];
    let paramsStr = [zoom, dLogY];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获得缩放级别对应的有效瓦片矩阵行列值
   *
   * @memberof TileMapServer
   * @param {int} zoom 缩放级
   * @param {Object} topRow 上（起始）行号
   * @param {Object} leftCol 左（起始）列号
   * @param {Object} bottomRow 下（终止）行号
   * @param {Object} rightCol 右（终止）列号
   * @returns {boolean} 成功返回true
   */
  async getTileMatrix(zoom: number, topRow: IntRef, leftCol: IntRef, bottomRow: IntRef, rightCol: IntRef): Promise<boolean> {
    let methodName = "getTileMatrix"
    let paramsTypeStr = [this.INT, this.CLASS_INT_REF, this.CLASS_INT_REF, this.CLASS_INT_REF, this.CLASS_INT_REF];
    let paramsStr = [zoom, topRow.ObjId, leftCol.ObjId, bottomRow.ObjId, rightCol.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 根据行列号、缩放级获取瓦片图像
   *
   * @memberof TileMapServer
   * @param {int} row 瓦片行索引
   * @param {int} col 瓦片列索引
   * @param {int} zoom 瓦片缩放级
   * @returns {Array} 瓦片图像数据 （int类型的数组）
   */
  async getTileImage(row: number, col: number, zoom: number): Promise<number[]> {
    let methodName = "getTileImage"
    let paramsTypeStr = [this.INT, this.INT, this.INT];
    let paramsStr = [row, col, zoom];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.ARRAY);
  }

  /**
   * 释放瓦片图像数据
   *
   * @memberof TileMapServer
   * @param {Array} buf 瓦片图像数据
   * @returns {boolean} 成功返回true
   */
  async freeTileImage(buf: number[]): Promise<boolean> {
    let methodName = "freeTileImage"
    let paramsTypeStr = [this.ARRAY + this.BYTE];
    let paramsStr = [buf];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

}
