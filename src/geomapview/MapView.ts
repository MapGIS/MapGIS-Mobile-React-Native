/**
 * @content 地图视图功能组件
 * @author fangqi 2021-7-14 
 */
import ObjectManager from '../components/ObjectManager';
import GraphicsOverlay from './GraphicsOverlay';
import GraphicsOverlays from './GraphicsOverlays';
import MapPosition from './MapPosition';
import Graphic from './Graphic';
import AnnotationsOverlay from "./AnnotationsOverlay"

import { NativeModules } from 'react-native';
let MV = NativeModules.JSMapView;

import type MagnifierOption from './MagnifierOption';
import ConvertUtil from '../components/ConvertUtil';
import PointF from '../native/PointF';
import Dot from '../geoobject/Dot';
import Rect from '../geoobject/Rect';
import type Image from '../native/Image';
import type MapLayer from '../geomap/MapLayer';
import type Dots from '../geoobject/Dots';
import Map from '../geomap/Map';
import type Document from '../geomap/Document';


/**
 * @class MapView
 * @description 地图显示控件容器类。
 */
export default class MapView extends ObjectManager {

  getClassName(): String {
    return this.CLASS_MAP_VIEW;
  }

  /**
   * 设置视图背景色
   *  @memberOf MapView
   * @param {String} color 地图视图的背景颜色  eg:'rgba(128, 128, 128, 0.5)'
   * @returns {Promise<void>}
   */
  async setBackGroundColor(color: String): Promise<void> {
    let methodName = "setBackGroundColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取视图背景色
   * @memberOf MapView
   * @returns {Promise<number>} 获取到的地图视图背景色。
   */
  async getBackGroundColor(): Promise<String> {
    let methodName = "getBackGroundColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置背景图像,传null将取消背景图片显示
   * 
   * @memberof MapView
   * @param  {Object} image 背景图片---Image.js类生成的对象
   * @returns {Promise<boolean>}
  */
  async setBackGroundImage(image: Image): Promise<any> {
    try {
      let result = false;
      if (image !== null) {
        result = await MV.setBackGroundImage(this.ObjId, image.ObjId);
      } else {
        result = await MV.setBackGroundImage(this.ObjId, null);
      }
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 加载地图
   * @memberOf MapView
   * @param {String} strMapPath docPath 地图文档全路径
   * @returns {Promise<number>} 加载成功，返回值>0，失败，返回<=0
   */
  async loadFromFile(strMapPath: String): Promise<number> {
    let methodName = "loadFromFile"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strMapPath];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 加载地图，异步方法，可通过MapViewMapLoadListener来监听加载状态
   * @memberOf MapView
   * @param {String} strMapPath 地图文档全路径
   * @returns {Promise<void>}
   */
  async loadFromFileAsync(strMapPath: String): Promise<void> {
    let methodName = "loadFromFileAsync"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strMapPath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 加载文档中对应索引的地图，同步方法
   * @memberOf MapView
   * @param {object} doc 地图文档对象
   * @param {number} indexOfMap 文档中map序号
   * @returns {Promise<Number>} 加载成功，返回值>0，失败，返回<=0
   */
  async loadFromDocument(doc: Document, indexOfMap: number): Promise<number> {
    let methodName = "loadFromDocument"
    let paramsTypeStr = [this.CLASS_DOCUMENT, this.INT];
    let paramsStr = [doc.ObjId, indexOfMap];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 加载文档中对应索引的地图，异步方法
   * @memberOf MapView
   * @param {object} doc  地图文档对象
   * @param {number} indexOfMap indexOfMap 文档中map序号
   * @returns {Promise<boolean>}
   */
  async loadFromDocumentAsync(doc: Document, indexOfMap: number) {
    try {
      let result = await MV.loadFromDocumentAsync(
        this.ObjId,
        doc.ObjId,
        indexOfMap
      );
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图对象，同步方法
   * @memberOf MapView
   * @param {object} map 地图对象
   * @returns {Promise<Number>} 设置成功，返回值>0，设置失败，返回值<=0
   */
  async setMap(map: Map): Promise<number> {
    let methodName = "setMap"
    let paramsTypeStr = [this.CLASS_MAP];
    let paramsStr = [map.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置地图对象，异步方法
   * @memberOf MapView
   * @param {object} map 地图对象
   * @returns {Promise<boolean>}
   */
  async setMapAsync(map: Map) {
    try {
      let isFinish = await MV.setMapAsync(this.ObjId, map.ObjId);
      return isFinish;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图对象
   * @memberOf MapView
   * @returns {Promise<Map>} 成功返回地图对象,失败返回空
   */
  async getMap(): Promise<Map> {
    let methodName = "getMap"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Map();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 地图刷新
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async refresh(): Promise<void> {
    let methodName = "refresh"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 地图强制刷新
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async forceRefresh(): Promise<void> {
    let methodName = "forceRefresh"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 停止当前的获取数据的请求(从服务器请求或从本地请求)
   * @memberOf MapView
   * @returns {Promise<boolean>}
   */
  async stopCurRequest() {
    try {
      let result = await MV.stopCurRequest(this.ObjId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 地图坐标转视图坐标
   * @memberOf MapView
   * @param {object} dot 地图坐标
   * @returns {Promise<PointF>} 视图坐标
   */
  async mapPointToViewPoint(dot: Dot): Promise<PointF> {
    let methodName = "mapPointToViewPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [dot.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 视图坐标转地图坐标
   * @memberOf MapView
   * @param {object} pointF  视图坐标
   * @returns {Promise<Dot>} 地图坐标
   */
  async viewPointToMapPoint(pointF: PointF): Promise<Dot> {
    let methodName = "viewPointToMapPoint"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [pointF.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  async mapPointToGLPoint(point: Dot): Promise<Dot> {
    let methodName = "mapPointToGLPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *获取地图分辨率
   * @memberOf MapView
   * @returns {Promise<double>} 分辨率信息
   */
  async getResolution(): Promise<number> {
    let methodName = "getResolution"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取最大分辨率
   * @memberOf MapView
   * @returns {Promise<Dot.resolution>}
   */
  async getMaxResolution(): Promise<number> {
    let methodName = "getMaxResolution"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取最小分辨率
   * @memberOf MapView
   * @returns {Promise<Dot.resolution>} 分辨率信息
   */
  async getMinResolution(): Promise<number> {
    let methodName = "getMinResolution"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取地图中心点
   * @memberOf MapView
   * @returns {Promise<Dot>} 中心点的坐标
   */
  async getCenterPoint(): Promise<Dot> {
    let methodName = "getCenterPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取当前显示地图的显示范围
   * @memberOf MapView
   * @returns {Promise<Rect>} 地图范围
   */
  async getDispRange(): Promise<Rect> {
    let methodName = "getDispRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 平移地图到视图中心(视图高宽1/2处，绝对中心)
   * @memberOf MapView
   * @param mapCenterPoint  中心坐标
   * @param animated        是否开启动画模式
   * @returns {Promise<void>}
   */
  async panToCenter(mapCenterPoint: Dot, animated: boolean): Promise<void> {
    let methodName = "panToCenter"
    let paramsTypeStr = [this.CLASS_DOT, this.BOOLEAN];
    let paramsStr = [mapCenterPoint.ObjId, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 平移地图到自定义视图中心(视图高宽1/2处，绝对中心)
   * @memberOf MapView
   * @param mapCenterPoint   中心坐标
   * @param viewCenterPoint  自定义视图中心
   * @param animated         是否开启动画模式
   * @returns {Promise<void>}
   */
  async panToCenterWithView(mapCenterPoint: Dot, viewCenterPoint: PointF, animated: boolean): Promise<void> {
    let methodName = "panToCenter"
    let paramsTypeStr = [this.CLASS_DOT, this.CLASS_POINTF, this.BOOLEAN];
    let paramsStr = [mapCenterPoint.ObjId, viewCenterPoint.ObjId, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *   * 移动地图（单位像素） 如果传入的mx = 5 、 my = 0，则系统将可视区域向右移动，所以地图将显示为向左移动5 个像素。 如果传入的mx =
   * 0 、 my = 5，则系统将可视区域向下移动，所以地图显示为向上移动了5 个像素。
   * @memberOf MapView
   * @param mx 水平方向移动的像素大小，正值代表可视区域向右移动，负值代表可视区域向左移动
   * @param my 垂直方向移动的像素大小，正值代表可视区域向下移动，负值代表可视区域向上移动
   * @param animated 是否开启动画模式
   * @returns {Promise<void>}
   */
  async moveMap(mx: number, my: number, animated: boolean): Promise<void> {
    let methodName = "moveMap"
    let paramsTypeStr = [this.FLOAT, this.FLOAT, this.BOOLEAN];
    let paramsStr = [mx, my, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 缩放地图到指定分辨率并将指定坐标点移动到视图中心(视图高宽1/2处，绝对中心)
   * @memberOf MapView
   * @param mapCenterPoint 中心坐标
   * @param resolution 分辨率
   * @param animated 是否启用动画
   * @returns {Promise<void>}
   */
  async zoomToCenter(mapCenterPoint: Dot, resolution: number, animated: boolean): Promise<void> {
    let methodName = "zoomToCenter"
    let paramsTypeStr = [this.CLASS_DOT, this.DOUBLE, this.BOOLEAN];
    let paramsStr = [mapCenterPoint.ObjId, resolution, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 缩放地图到指定级别并将指定坐标点移动到自定义视图中心
   * @memberOf MapView
   *
   * @param mapCenterPoint 中心坐标
   * @param viewCenterPoint 自定义视图中心
   * @param resolution 分辨率
   * @param animated 是否启用动画
   */
  async zoomToCenterWithView(
    mapCenterPoint: Dot,
    viewCenterPoint: PointF,
    resolution: number,
    animated: boolean
  ): Promise<void> {
    let methodName = "zoomToCenter"
    let paramsTypeStr = [this.CLASS_DOT, this.CLASS_POINTF, this.DOUBLE, this.BOOLEAN];
    let paramsStr = [mapCenterPoint.ObjId, viewCenterPoint.ObjId, resolution, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 放缩地图到指定范围
   * @memberOf MapView
   * @param dispRange 新的视图范围
   * @param animated 是否开启动画模式
   * @returns {Promise<void>}
   */
  async zoomToRange(dispRange: Rect, animated: boolean): Promise<void> {
    let methodName = "zoomToRange"
    let paramsTypeStr = [this.CLASS_RECT, this.BOOLEAN];
    let paramsStr = [dispRange.ObjId, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 地图放大一级
   * @memberOf MapView
   * @param animated 是否开启动画模式
   * @returns {Promise<void>}
   */
  async zoomIn(animated: boolean): Promise<void> {
    let methodName = "zoomIn"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 地图缩小一级
   * @memberOf MapView
   * @param animated 是否开启动画模式
   * @returns {Promise<void>}
   */
  async zoomOut(animated: boolean): Promise<void> {
    let methodName = "zoomOut"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 地图复位
   * @memberOf MapView
   * @param animated   是否开启动画模式
   * @returns {Promise<void>}
   */
  async restore(animated: boolean): Promise<void> {
    let methodName = "restore"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *设置当前地图的旋转中心和旋转角
   * @memberOf MapView
   * @param rotateCenter 旋转中心点坐标
   * @param rotateAngle 旋转角度（单位为角度制，逆时针为正）
   * @param animated 是否开启动画模式
   * @returns {Promise<void>}
   */
  async setRotateCenterAndAngle(rotateCenter: Dot, rotateAngle: number, animated: boolean): Promise<void> {
    let methodName = "setRotateCenterAndAngle"
    let paramsTypeStr = [this.CLASS_DOT, this.FLOAT, this.BOOLEAN];
    let paramsStr = [rotateCenter.ObjId, rotateAngle, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *设置地图的旋转中心
   * @memberOf MapView
   * @param rotateCenter 地图的旋转中心
   * @returns {Promise<void>}
   */
  async setRotateCenter(rotateCenter: Dot): Promise<void> {
    let methodName = "setRotateCenter"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [rotateCenter.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *设置地图的旋转角
   * @memberOf MapView
   * @param rotateAngle 旋转角（单位为角度制，逆时针为正）
   * @param animated 是否启用动画
   * @returns {Promise<void>}
   */
  async setRotateAngle(rotateAngle: number, animated: boolean): Promise<void> {
    let methodName = "setRotateAngle"
    let paramsTypeStr = [this.FLOAT, this.BOOLEAN];
    let paramsStr = [rotateAngle, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *绕视图坐标旋转
   * @memberOf MapView
   * @param rotation 旋转增量（单位为角度制，逆时针为正）
   * @param pivotX 视图旋转中心X坐标
   * @param pivotY 视图旋转中心Y坐标
   * @param animated 是否启用动画
   * @returns {Promise<void>}
   */
  async rotate(rotation: number, pivotX: number, pivotY: number, animated: boolean): Promise<void> {
    let methodName = "rotate"
    let paramsTypeStr = [this.FLOAT, this.FLOAT, this.FLOAT, this.BOOLEAN];
    let paramsStr = [rotation, pivotX, pivotY, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图的旋转中心
   * @memberOf MapView
   * @returns {Promise<Dot>} 旋转中心的坐标
   */
  async getRotateCenter(): Promise<Dot> {
    let methodName = "getRotateCenter"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取当前地图的旋转角
   * @memberOf MapView
   * @returns {Promise<Dot.rotateAngle>} 旋转角
   */
  async getRotateAngle(): Promise<number> {
    let methodName = "getRotateAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置当前地图的倾斜角,并将地图按该角度进行倾斜
   * @memberOf MapView
   * @param slopeAngle 倾斜角度(单位为角度制,0到45度,当天空场景启用后,角度范围为0到65度）
   * @param animated 是否开启动画
   * @returns {Promise<void>}
   */
  async setSlopeAngle(slopeAngle: number, animated: boolean): Promise<void> {
    let methodName = "setSlopeAngle"
    let paramsTypeStr = [this.FLOAT, this.BOOLEAN];
    let paramsStr = [slopeAngle, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前地图的倾斜角
   * @memberOf MapView
   * @returns {Promise<float>} 当前地图的倾斜角
   */
  async getSlopeAngle(): Promise<number> {
    let methodName = "getSlopeAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 更新位置(中心点为视图的绝对中心)
   * @memberOf MapView
   * @param postion 要更新到的位置
   * @param animated 是否开启动画
   * @returns {Promise<void>}
   */
  async updatePosition(postion: MapPosition, animated: boolean): Promise<void> {
    let methodName = "updatePosition"
    let paramsTypeStr = [this.CLASS_MAP_POSITION, this.BOOLEAN];
    let paramsStr = [postion.ObjId, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 更新位置(中心点为视图的指定中心)
   *
   * @param postion 要更新到的位置
   * @param viewCenterPoint 自定义视图中心
   * @param animated 是否开启动画
   * @returns {Promise<void>}
   */
  async updatePositionbyViewPoint(postion: MapPosition, viewCenterPoint: PointF, animated: boolean): Promise<void> {
    let methodName = "updatePosition"
    let paramsTypeStr = [this.CLASS_MAP_POSITION, this.CLASS_POINTF, this.BOOLEAN];
    let paramsStr = [postion.ObjId, viewCenterPoint.ObjId, animated];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 动画到指定位置(中心点为视图的绝对中心)
   *
   * @param postion 要动画到的位置
   * @param duration 持续时间(单位毫秒)
   * @returns {Promise<void>}
   */
  async animatePosition(postion: MapPosition, duration: number) {
    try {
      let result = await MV.animatePosition(
        this.ObjId,
        postion.ObjId,
        duration
      );
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 动画到指定位置(中心点为视图的指定中心)
   * @memberOf MapView
   * @param postion 要动画到的位置
   * @param viewCenterPoint 自定义视图中心
   * @param duration 持续时间(单位毫秒)
   * @returns {Promise<boolean>}
   */
  async animatePositionByViewPoint(postion: MapPosition, viewCenterPoint: PointF, duration: number) {
    try {
      let result = await MV.animatePositionByViewPoint(
        this.ObjId,
        postion.ObjId,
        viewCenterPoint.ObjId,
        duration
      );
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 停止动画效果
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async stopAnimation(): Promise<void> {
    let methodName = "stopAnimation"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 获取当前位置
   * @memberOf MapView
   * @returns {Promise<MapPosition>} 当前地图的位置
   */
  async getPosition(): Promise<MapPosition> {
    let methodName = "getPosition"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MapPosition();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取地图标记层
   * @memberOf MapView
   * @returns {Promise<AnnotationsOverlay>} 标记层
   */
  async getAnnotationsOverlay(): Promise<AnnotationsOverlay> {
    let methodName = "getAnnotationsOverlay"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new AnnotationsOverlay();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取缺省的图形覆盖物列表
   * @memberOf MapView
   * @returns {Promise<GraphicsOverlay>} 缺省的图形覆盖物列表
   */
  async getGraphicsOverlay(): Promise<GraphicsOverlay> {
    let methodName = "getGraphicsOverlay"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new GraphicsOverlay();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形覆盖物列表的集合
   * @memberOf MapView
   * @returns {Promise<GraphicsOverlays>} 图形覆盖物列表的集合
   */
  async getGraphicsOverlays(): Promise<GraphicsOverlays> {
    let methodName = "getGraphicsOverlays"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new GraphicsOverlays();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 图形覆盖物点击测试
   * @memberOf MapView
   * @param graphicsOverlay
   * @param viewPoint
   * @returns {Promise<Graphic>} 被选中的图形覆盖物
   */
  async graphicsOverlayHitTest(graphicsOverlay: GraphicsOverlay, viewPoint: PointF): Promise<Graphic> {
    let methodName = "graphicsOverlayHitTest"
    let paramsTypeStr = [this.CLASS_GRAPHICS_OVERLAY, this.CLASS_POINTF];
    let paramsStr = [graphicsOverlay.ObjId, viewPoint.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Graphic();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   *  图形点击测试
   * @memberOf MapView
   * @param graphic
   * @param viewPoint
   * @returns {Promise<Boolean>} 是否被选中
   */
  async graphicHitTest(graphic: Graphic, viewPoint: PointF): Promise<boolean> {
    let methodName = "graphicHitTest"
    let paramsTypeStr = [this.CLASS_GRAPHIC, this.CLASS_POINTF];
    let paramsStr = [graphic.ObjId, viewPoint.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 设置纹理缓存的最大限额（单位为字节）
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async setMaxTextureCacheSize(size: number): Promise<void> {
    let methodName = "setMaxTextureCacheSize"
    let paramsTypeStr = [this.INT];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取纹理缓存的最大限额（单位为字节）
   * @memberOf MapView
   * @returns {Promise<Number>} 设定的纹理缓存的最大限额
   */
  async getMaxTextureCacheSize(): Promise<number> {
    let methodName = "getMaxTextureCacheSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 清除纹理缓存
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async clearTextureCache(): Promise<void> {
    let methodName = "clearTextureCache"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 设置支持任意透明度
   * @memberOf MapView
   *
   * @param support true(支持矢量数据或者瓦片数据中的任意透明度值) false(仅支持全透)
   * @returns {Promise<void>}
   */
  async setSupportTransparency(support: boolean): Promise<void> {
    let methodName = "setSupportTransparency"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [support];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否支持任意透明度
   * @memberOf MapView
   * @returns {Promise<boolean>}
   */
  async isSupportTransparency(): Promise<boolean> {
    let methodName = "isSupportTransparency"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置自定义的地图工具
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async setMapTool() {
    try {
      let result = await MV.setMapTool(this.ObjId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图视图测量宽度
   * @memberOf MapView
   * @returns {Promise<Number>} 返回测量宽度
   */
  async getMeasuredWidth(): Promise<number> {
    let methodName = "getMeasuredWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取地图视图测量高度
   * @memberOf MapView
   * @returns {Promise<Number>} 返回测量高度
   */
  async getMeasuredHeight(): Promise<number> {
    let methodName = "getMeasuredHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取地图视图宽度
   * @memberOf MapView
   * @returns {Promise<Number>} 返回宽度
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取地图视图高度
   * @memberOf MapView
   * @returns {Promise<Number>} 返回高度
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取当前地图视图的快照（截图）并返回图片路径
   * @memberOf MapView
   * @param path 截图存储的文件夹路径
   * @returns {Promise<String>} 成功--图片路径不为“”， 失败---图片路径为“”
   */
  async getScreenSnapshot(path: String) {
    try {
      let bitmapPath = MV.getScreenSnapshot(this.ObjId, path);
      return bitmapPath;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取当前地图视图指定区域的快照（截图）,视图区域的指定采用视图坐标系,通过左上角点的坐标和区域的宽高来确定,视图左上角坐标为(0, 0)<br>
   * 如果指定区域超出视图范围,则超出部分以透明色填充
   * @memberOf MapView
   * @param path 截图的存储文件夹路径
   * @param left 指定视图区域的左上角点的x坐标
   * @param top 指定视图区域的左上角点的y坐标
   * @param width 指定视图区域的宽度
   * @param height 指定视图区域的高度
   * @returns {Promise<Object>} 返回的是包含left, top ,width, height, bitmapPath的Object，若bitmapPath为“”，表示截屏失败
   */
  async getScreenSnapshotByParam(path: String, left: number, top: number, width: number, height: number) {
    try {
      let result = await MV.getScreenSnapshotByParam(this.ObjId, path, left, top, width, height);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 根据指定的地图范围绘制地图，将绘制返回的图片存储在指定文件夹下.
   * <p>
   * 详细说明:<br>
   * 地图范围的指定采用地图坐标,成生的图像的宽高由用户在构造Bitmap对象时指定.<br>
   * 生成的图像不包含地图视图的背景色.<br>
   * 生成的图像含有透明通道,在视图上显示时,需要设置视图的背景颜色.如:可以设为地图视图的背景色.<br>
   * 特别说明:<br>
   * 用户构造的Bitmap像素格式必须为ARGB_8888<br>
   * 示例代码:<br>
   * 无<br>
   * </p>
   * @memberOf MapView
   * @param  dispRange 指定的出图范围
   * @param path 图片存储的文件夹路径
   * @params params      Object
   * width      int
   * height     int
   * type       string   png, jpg/jpeg, webp
   * @returns {Promise.<String>} 返回的是图片存储路径，若路径为“”，表示出图失败
   */
  async getBitmap(dispRange: Rect, path: String, params = {}) {
    try {
      let paramss = {
        width: 2000,
        height: 2000,
        type: 'png',
        dispRange: dispRange,
        path: path,
      };
      Object.assign(paramss, params);
      let bitmapPath = await MV.getBitmap(
        this.ObjId,
        paramss.dispRange.ObjId,
        paramss.path,
        paramss.width,
        paramss.height,
        paramss.type
      );
      return bitmapPath;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 根据传入的参数生成，对应路口的放大图<br>
   * 用户构造的Bitmap像素格式必须为ARGB_8888
   * @memberOf MapView
   * @param seg1 路口前一段路的地图坐标
   * @param seg2 路口后一段路的地图坐标
   * @param seg3 如果路口是环岛，则需要传入环岛下一段路的地图坐标
   * @params params      Object
   * width      int
   * height     int
   * quality    int      0 - 100
   * type       string   png, jpg/jpeg, webp
   * @returns {Promise.<{result: Promise.result, uri: Promise.uri}>}
   */
  async getCrossBitmap(seg1: Array<any>, seg2: Array<any>, seg3: Array<any>, params = {}): Promise<any> {
    try {
      let paramss = {
        width: 2000,
        height: 2000,
        quality: 60,
        type: 'png',
        seg1: seg1,
        seg2: seg2,
        seg3: seg3,
      };
      Object.assign(paramss, params);
      let { result, uri } = await MV.getCrossBitmap(
        this.ObjId,
        paramss.seg1,
        paramss.seg2,
        paramss.seg3,
        paramss.width,
        paramss.height,
        paramss.quality,
        paramss.type
      );
      return { result, uri };
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 显示放大镜.放大地图视图上指定区域的内容
   * @memberOf MapView
   * @param viewPointF 放大区域的中心点
   * @param option 放大镜选项
   * @returns {Promise<void>}
   */
  async showMagnifier(viewPointF: PointF, option: MagnifierOption): Promise<void> {
    let methodName = "showMagnifier"
    let paramsTypeStr = [this.CLASS_POINTF, this.CLASS_MAGNIFIER_OPTION];
    let paramsStr = [viewPointF.ObjId, option.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 隐藏放大镜
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async hideMagnifier(): Promise<void> {
    let methodName = "hideMagnifier"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 打开放大镜功能 .当手指在屏幕上移动时，可自动放大手指所在位置的内容
   * @memberOf MapView
   * @param magnifierOption 放大镜选项
   * @returns {Promise<void>}
   */
  async turnOnMagnifier(magnifierOption: MagnifierOption): Promise<void> {
    let methodName = "turnOnMagnifier"
    let paramsTypeStr = [this.CLASS_MAGNIFIER_OPTION];
    let paramsStr = [magnifierOption.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 关闭放大镜功能
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async turnOffMagnifier(): Promise<void> {
    let methodName = "turnOffMagnifier"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 设置是否显示指北针图标
   * @memberOf MapView
   *
   * @param {Boolean} show的值为true时显示指北针图标，反正不显示指北针图标
   * @returns {Promise<void>}
   */
  async setShowNorthArrow(show: boolean): Promise<void> {
    let methodName = "setShowNorthArrow"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [show];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示指北针图标
   * @memberOf MapView
   * @returns {Promise<Boolean>} 返回值为true时，显示指北针图标。反之，没有显示指北针图标
   */
  async isShowNorthArrow(): Promise<boolean> {
    let methodName = "isShowNorthArrow"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置指北针图标在地图视图中的显示位置
   * @memberOf MapView     *
   * @param point 指北针图标的中心在地图视图中的坐标
   * @returns {Promise<void>}
   */
  async setNorthArrowPosition(point: PointF): Promise<void> {
    let methodName = "setNorthArrowPosition"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取指北针图标中心点在地图视图中的显示位置
   * @memberOf MapView
   * @returns {Promise<PointF>}
   */
  async getNorthArrowPosition(): Promise<PointF> {
    let methodName = "getNorthArrowPosition"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置指北针图标
   * @memberOf MapView
   * @param image 指北针图标位图
   * @returns {Promise<boolean>}
   */
  async setNorthArrowImage(image: Image) {
    try {
      let result = await MV.setNorthArrowImage(this.ObjId, image.ObjId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置是否显示中地公司logo
   * @memberOf MapView     *
   * @param show 值为true时显示，反之，不显示
   * @returns {Promise<void>}
   */
  async setShowLogo(show: boolean): Promise<void> {
    let methodName = "setShowLogo"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [show];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示中地公司logo
   * @memberOf MapView
   * @returns {Promise<Boolean>} 值为true时显示，反之，没显示
   */
  async isShowLogo(): Promise<boolean> {
    let methodName = "isShowLogo"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置中地公司logo在地图视图中显示的位置
   * @memberOf MapView
   * @param position logo的方位
   * @see LOGO_POSITION_BOTTOM_LEFT等
   * @returns {Promise<void>}
   */
  async setLogoPoistion(position: boolean): Promise<void> {
    let methodName = "setLogoPoistion"
    let paramsTypeStr = [this.INT];
    let paramsStr = [position];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取中地公司logo在地图视图中的显示位置
   * @memberOf MapView
   * @returns {Promise<int>} 中地公司logo在地图视图中的显示位置
   * @see LOGO_POSITION_BOTTOM_LEFT等
   */
  async getLogoPoistion(): Promise<number> {
    let methodName = "getLogoPoistion"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置是否显示比例尺
   * @memberOf MapView
   * @param show 值为true时显示，反之，不显示
   * @returns {Promise<void>}
   */
  async setShowScaleBar(show: boolean): Promise<void> {
    let methodName = "setShowScaleBar"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [show];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示比例尺
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时显示，反之，没显示
   */
  async isShowScaleBar(): Promise<boolean> {
    let methodName = "isShowScaleBar"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置比例尺在地图视图中显示的位置
   * @memberOf MapView
   * @param point 视图坐标
   * @returns {Promise<void>}
   */
  async setScaleBarPoistion(pointf: PointF): Promise<void> {
    let methodName = "setScaleBarPoistion"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [pointf.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取比例尺在地图视图中的显示位置
   * @memberOf MapView
   * @returns {Promise<PointF>} 比例尺在地图视图中的显示位置
   */
  async getScaleBarPoistion(): Promise<PointF> {
    let methodName = "getScaleBarPoistion"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置天空图片
   * @memberOf MapView
   * @param image 天空图片
   * @returns {Promise<void>}
   */
  async setSkyImage(image: Image): Promise<void> {
    let methodName = "setSkyImage"
    let paramsTypeStr = [this.CLASS_IMAGE];
    let paramsStr = [image.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置天空场景是否启用,天空场景启用后,倾斜角可以加大到65度,默认情况下,天空场景处于启用状态
   * @memberOf MapView
   * @param enabled 天空场景是否启用
   * @returns {Promise<void>}
   */
  async setSkySceneEnabled(enabled: boolean): Promise<boolean> {
    let methodName = "setSkySceneEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取天空场景是否启用的标志
   * @memberOf MapView
   * @returns {Promise<boolean>} 天空场景是否启用的标志
   */
  async isSkySceneEnabled(): Promise<boolean> {
    let methodName = "isSkySceneEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用MapView内置的地图放大、缩小按钮。通过内置的缩放按钮，可实现对地图的放大和缩小
   * @memberOf MapView
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setZoomControlsEnabled(enabled: boolean) {
    try {
      let result = await MV.setZoomControlsEnabled(this.ObjId, enabled);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
  * 设置缩放按钮的位置 
  * 
  * @memberof MapView
  * @param {PointF} pointF 位置点
  * @returns {Promise<void>}
  */
  async setZoomControlPosition(pointF: PointF): Promise<void> {
    let methodName = "setZoomControlPosition"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [pointF.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取缩放按钮的位置
   * 
   * @memberof MapView
   * @returns {Promise<PointF>} 缩放按钮的位置
   */
  async getZoomControlPosition(pointF: PointF): Promise<PointF> {
    let methodName = "getZoomControlPosition"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [pointF.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }


  /**
   * 获取是否启用了内置的缩放按钮
   * @memberOf MapView
   * @returns {Promise<boolean>} 缩放按钮是否启用
   */
  async isZoomControlsEnabled(): Promise<boolean> {
    let methodName = "isZoomControlsEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用地图平移手势
   * @memberOf MapView
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setMapPanGesturesEnabled(enabled: boolean): Promise<void> {
    let methodName = "setMapPanGesturesEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否启用了平移手势
   * @memberOf MapView
   * @returns {Promise<boolean>} 是否启用了平移手势
   */
  async isMapPanGesturesEnabled(): Promise<boolean> {
    let methodName = "isMapPanGesturesEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用地图缩放手势
   * @memberOf MapView
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setMapZoomGesturesEnabled(enabled: boolean): Promise<void> {
    let methodName = "setMapZoomGesturesEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否启用了地图缩放手势
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isMapZoomGesturesEnabled(): Promise<boolean> {
    let methodName = "isMapZoomGesturesEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用地图旋转手势
   * @memberOf MapView     *
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setMapRotateGesturesEnabled(enabled: boolean): Promise<void> {
    let methodName = "setMapRotateGesturesEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否启用了地图旋转手势
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isMapRotateGesturesEnabled(): Promise<boolean> {
    let methodName = "isMapRotateGesturesEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用地图倾斜手势
   * @memberOf MapView
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setMapSlopeGesturesEnabled(enabled: boolean): Promise<void> {
    let methodName = "setMapSlopeGesturesEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否启用了地图倾斜手势
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isMapSlopeGesturesEnabled(): Promise<boolean> {
    let methodName = "isMapSlopeGesturesEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否双击放大地图
   * @memberOf MapView
   * @param {Boolean} enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setDoubleTapZooming(enabled: boolean): Promise<void> {
    let methodName = "setDoubleTapZooming"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否双击放大地图
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isDoubleTapZooming(): Promise<boolean> {
    let methodName = "isDoubleTapZooming"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否双指单击缩小地图
   * @memberOf MapView
   * @param {Boolean} enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setTwoFingerTapZooming(enabled: boolean): Promise<void> {
    let methodName = "setTwoFingerTapZooming"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否双指单击缩小地图
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isTwoFingerTapZooming(): Promise<boolean> {
    let methodName = "isTwoFingerTapZooming"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用平移结束后的动画
   * @memberOf MapView
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setPanEndAnimating(enabled: boolean): Promise<void> {
    let methodName = "setPanEndAnimating"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否启用平移结束后的动画
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isPanEndAnimating(): Promise<boolean> {
    let methodName = "isPanEndAnimating"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否启用标记渲染的动画
   * @memberOf MapView
   * @param enabled 值为true时启用，反之，不启用
   * @returns {Promise<void>}
   */
  async setLabelRenderAnimating(enabled: boolean): Promise<void> {
    let methodName = "setLabelRenderAnimating"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enabled];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否启用标记渲染的动画
   * @memberOf MapView
   * @returns {Promise<boolean>} 值为true时启用，反之，不启用
   */
  async isLabelRenderAnimating(): Promise<boolean> {
    let methodName = "isLabelRenderAnimating"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 添加单击事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerTapListener() {
    try {
      await MV.registerTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除单击事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterTapListener() {
    try {
      await MV.unregisterTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加长按事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerLongTapListener() {
    try {
      await MV.registerLongTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除长按事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterLongTapListener() {
    try {
      await MV.unregisterLongTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加双击事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerDoubleTapListener() {
    try {
      await MV.registerDoubleTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除双击事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterDoubleTapListener() {
    try {
      await MV.unregisterDoubleTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加触摸事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerTouchListener() {
    try {
      await MV.registerTouchListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除触摸事件监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterTouchListener() {
    try {
      await MV.unregisterTouchListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加地图视图级别改变的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerZoomChangedListener() {
    try {
      await MV.registerZoomChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图级别改变的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterZoomChangedListener() {
    try {
      await MV.unregisterZoomChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加地图视图中心点变化的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerCenterChangedListener() {
    try {
      await MV.registerCenterChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图中心点变化的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterCenterChangedListener() {
    try {
      await MV.unregisterCenterChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加地图视图旋转角度变化的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerRotateChangedListener() {
    try {
      await MV.registerRotateChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图旋转角度变化的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterRotateChangedListener() {
    try {
      await MV.unregisterRotateChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 地图视图地图位置变化的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerPositionChangedListener() {
    try {
      await MV.registerPositionChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图地图位置变化的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterPositionChangedListener() {
    try {
      await MV.unregisterPositionChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 地图视图动画的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerAnimationListener() {
    try {
      await MV.registerAnimationListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图动画的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterAnimationListener() {
    try {
      await MV.unregisterAnimationListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 地图视图刷新的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerRefreshListener() {
    try {
      await MV.registerRefreshListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图刷新的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterRefreshListener() {
    try {
      await MV.unregisterRefreshListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 地图视图地图加载的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerMapLoadListener() {
    try {
      await MV.registerMapLoadListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图加载监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterMapLoadListener() {
    try {
      await MV.unregisterMapLoadListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 地图视图标记的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async registerAnnotationListener() {
    try {
      await MV.registerAnnotationListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除地图视图标记的监听
   * @memberOf MapView
   * @returns {Promise<void>}
   */
  async unregisterAnnotationListener() {
    try {
      await MV.unregisterAnnotationListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 对当前地图中指定图层应用卷帘效果
   * 特别说明:由于移动端相邻的离线矢量图层是由同一个层渲染器渲染，所以对其中的任一离线矢量图层应用卷帘，会对相邻的所有离线矢量图层都起作用。
   * @memberOf MapView
   * @param swipeLayer 应用卷帘的图层,传null关闭卷帘效果
   * @param {object}swipeRegionDots 卷帘区域(应用卷帘的图层被擦除的区域),为视图坐标,原点在视图的左上角,区域必须为闭合区（首尾点应重合）
   * @returns {Promise<Number>} 0:失败,1:成功
   */
  async swipe(swipeLayer: MapLayer, swipeRegionDots: Dots): Promise<number> {
    let methodName = "swipe"
    let paramsTypeStr = [this.CLASS_MAP_LAYER, this.CLASS_DOTS];
    let paramsStr = [swipeLayer.ObjId, swipeRegionDots.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清除指定图层所在的图层渲染器的缓存.该函数为异步执行
   * @memberOf MapView
   * @param layerName 图层名称
   * @returns {Promise<Number>} 0:失败,1:成功
   */
  async clearTextureCacheByName(layerName: String): Promise<number> {
    let methodName = "clearTextureCache"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [layerName];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置需要独立渲染的离线矢量图层名称列表.图层名之间以“,”(逗号)分隔。 
   * 通过该接口可以实现对指定图层可见性进行更新时，不需要清空内存缓存，提高在大数据量下，切换离线矢量图层可见性时的用户体验。 
   * 该接口需要在地图视图加载地图之前设置或设置后调用ForceRefresh以使设置生效。 
   * 注意：地图视图所占用的内存与独立渲染的图层数目成正比。
   * 参见setMaxTextureCacheSize。
   * @memberOf MapView
   * @param strLayerList 需要独立渲染的离线矢量图层名称列表
   * @returns {Promise<Number>} 0:失败,1:成功
   */
  async setSeparatelyDrawingLayerListString(strLayerList: String): Promise<number> {
    let methodName = "setSeparatelyDrawingLayerListString"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strLayerList];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取需要独立渲染的离线矢量图层名称列表.图层名之间以“,”(逗号)分隔。
   * @memberOf MapView
   * @returns {Promise<Boolean>} 需要独立渲染的离线矢量图层名称列表
   */
  async getSeparatelyDrawingLayerListString(): Promise<String> {
    let methodName = "getSeparatelyDrawingLayerListString"
    return await this.invoke(methodName, this.STRING);
  }

}
