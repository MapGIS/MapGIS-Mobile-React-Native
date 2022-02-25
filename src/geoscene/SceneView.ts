/**
 * @content 移动三维场景视图
 * @author fangqi 2021-11-29 
 */
import { NativeModules } from 'react-native';
let SV = NativeModules.JSSceneView;
import ObjectManager from '../components/ObjectManager';
import ConvertUtil from '../components/ConvertUtil';
import SceneManipulator from './SceneManipulator';
import type Viewpoint from './Viewpoint';
import Scene from './Scene';
import type Camera from './Camera';
import Dot from '../geoobject/Dot';
import Dot3D from '../geoobject/Dot3D';
import Graphic3DsOverlay from './Graphic3DsOverlay';
import Graphic3DsOverlays from './Graphic3DsOverlays';
import PointF from '../native/PointF';
import type Layer3D from './Layer3D';
import IdentifyLayerResult from './IdentifyLayerResult';
import FlyManager from './FlyManager';


/**
 * @class SceneView 
 */
export default class SceneView extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SCENE_VIEW;
  }

  /**
   * 设置地图视图的背景色
   *  @memberOf SceneView
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
   * @memberOf SceneView
   * @returns {Promise<String>} 获取到的地图视图背景色。
   */
  async getBackGroundColor(): Promise<String> {
    let methodName = "getBackGroundColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 获取平均帧率
   * @memberOf SceneView
   * @returns {Promise<double>} 平均帧率
   */
  async getFrameRate(): Promise<number> {
    let methodName = "getFrameRate"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取当前视点
   * @memberOf SceneView
   * @param viewPoint - 当前视点 
   * @returns {Promise<Number>} 成功返回1 ,失败返回0
   */
  async getCurrentViewPoint(viewPoint: Viewpoint): Promise<number> {
    let methodName = "getCurrentViewPoint"
    let paramsTypeStr = [this.CLASS_VIEW_POINT];
    let paramsStr = [viewPoint.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 跳转到指定视点
   * @memberOf SceneView
   * @param viewPoint - 要跳转到的视点
   * @param durationSec - 持续时间，单位秒
   * @returns {Promise<Number>} 成功返回1 ,失败返回0
   */
  async jumptoViewPoint(viewPoint: Viewpoint, durationSec: number): Promise<number> {
    let methodName = "jumptoViewPoint"
    let paramsTypeStr = [this.CLASS_VIEW_POINT, this.DOUBLE];
    let paramsStr = [viewPoint.ObjId, durationSec];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * AR是否开启
   * @memberOf SceneView
   * @returns {Promise<boolean>} true:开启，false:不开启
   */
  async isStartAR(): Promise<boolean> {
    let methodName = "isStartAR"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置操作器
   * @memberOf SceneView
   * @param sceneManipulator - 操作器对象
   * @returns {Promise<number>} 成功返回1 ,失败返回0
   */
  async setManipulator(sceneManipulator: SceneManipulator): Promise<number> {
    let methodName = "setManipulator"
    let paramsTypeStr = [this.CLASS_SCENE_MANIPULATOR];
    let paramsStr = [sceneManipulator.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取操作器
   * @memberOf SceneView
   * @returns {Promise<SceneManipulator>} 操作器对象
   */
  async getManipulator(): Promise<SceneManipulator> {
    let methodName = "getManipulator"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SceneManipulator();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置是否开启自动裁剪
   * @memberOf SceneView
   * @param enableAutoClipPlane - true-开启;false-不开启
   * @returns {Promise<void>}
   */
  async setAutoClipPlaneEnabled(enableAutoClipPlane: boolean): Promise<void> {
    let methodName = "setAutoClipPlaneEnabled"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [enableAutoClipPlane];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前是否开启了自动裁剪
   * @memberOf SceneView
   * @returns {Promise<boolean>} true-开启了;false-没有开启
   */
  async isAutoClipPlaneEnabled(): Promise<boolean> {
    let methodName = "isAutoClipPlaneEnabled"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 
   * @memberOf SceneView
   * @returns {Promise<void>} 
   */
  async showStats(): Promise<void> {
    let methodName = "showStats"
    return await this.invoke(methodName, this.VOID);
  }

  /**
   * 
   * @memberOf SceneView
   * @returns {Promise<void>} 
   */
  async reset(): Promise<void> {
    let methodName = "reset"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 设置场景
   * @memberOf SceneView
   * @param scene - 场景
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
  async setScene(scene: Scene): Promise<number> {
    let methodName = "setScene"
    let paramsTypeStr = [this.CLASS_SCENE];
    let paramsStr = [scene.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置场景 ，异步方法
   * @memberOf SceneView
   * @param {Scene} scene - 场景 
   * @returns {Promise<boolean>}
   */
  async setSceneAsync(scene: Scene){
    try {
      let isFinish = await SV.setSceneAsync(this.ObjId, scene.ObjId);
      return isFinish;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取场景
   * @memberOf SceneView
   * @returns {Promise<Scene>} 返回场景
   */
  async getScene(): Promise<Scene> {
    let methodName = "getScene"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Scene();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形覆盖物列表的集合
   * @memberOf SceneView
   * @returns {Promise<Graphic3DsOverlays>} 图形覆盖物列表的集合
   */
  async getGraphic3DsOverlays(): Promise<Graphic3DsOverlays> {
    let methodName = "getGraphic3DsOverlays"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Graphic3DsOverlays();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取图形覆盖物列表的集合
   * @memberOf SceneView
   * @returns {Promise<Graphic3DsOverlay>} 图形覆盖物列表的集合
   */
  async getDefaultGraphics3DOverlay(): Promise<Graphic3DsOverlay> {
    let methodName = "getDefaultGraphics3DOverlay"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Graphic3DsOverlay();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置场景模式
   * @memberOf SceneView
   * @param {SceneMode} sceneMode - 
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
  async setMode(sceneMode: any): Promise<number> {
    let methodName = "setMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_SCENE_MODE];
    let paramsStr = [sceneMode];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取场景模式
   * @memberOf SceneView
   * @returns {Promise<SceneMode>} 返回场景模式
   */
  async getMode(): Promise<any> {
    let methodName = "getMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置相机
   * @memberOf SceneView
   * @param camera - 相机对象
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
  async setCamera(camera: Camera): Promise<number> {
    let methodName = "setCamera"
    let paramsTypeStr = [this.CLASS_CAMERA];
    let paramsStr = [camera.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 设置相机,支持动画
   * @memberOf SceneView
   * @param camera - 相机对象
   * @param durationSec - 动画持续时间
   * @returns {Promise<Number>} 成功返回1,失败返回0
   */
  async setCameraByDuration(camera: Camera, durationSec: number): Promise<number> {
    let methodName = "setCamera"
    let paramsTypeStr = [this.CLASS_CAMERA, this.DOUBLE];
    let paramsStr = [camera.ObjId, durationSec];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取相机
   * @memberOf SceneView
   * @param camera - 相机对象
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
  async getCamera(camera: Camera): Promise<number> {
    let methodName = "getCamera"
    let paramsTypeStr = [this.CLASS_CAMERA];
    let paramsStr = [camera.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取三维场景飞行管理对象
   * @memberOf SceneView
   * @returns {Promise<FlyManager>} 返回飞行管理对象
   */
  async getFlyManager(): Promise<FlyManager> {
    let methodName = "getFlyManager"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new FlyManager();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置环境光颜色
   * @memberOf SceneView
   * @param {String} color - 环境光颜色 eg:'rgba(128, 128, 128, 0.5)'
   * @returns {Promise<number>} 
   */
  async setAmbientLightColor(color: String): Promise<number> {
    let methodName = "setAmbientLightColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取环境光颜色
   * @memberOf SceneView
   * @returns {Promise<number>} 返回环境光颜色
   */
  async getAmbientLightColor(): Promise<String> {
    let methodName = "getAmbientLightColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置大气效果模式
   * @memberOf SceneView
   * @param {AtmosphereEffectMode} atmosphereEffectMode - 大气效果模式
   * @returns {Promise<number>} 成功返回1,失败返回0
   */
  async setAtmosphereEffectMode(atmosphereEffectMode: any): Promise<number> {
    let methodName = "setAtmosphereEffectMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_ATMOSPHERE_EFFECT_MODE];
    let paramsStr = [atmosphereEffectMode];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取大气效果类型
   * @memberOf SceneView
   * @returns {Promise<AtmosphereEffectMode>} 返回大气效果类型
   */
  async getAtmosphereEffectMode(): Promise<any> {
    let methodName = "getAtmosphereEffectMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置光照模式
   * @memberOf SceneView
   * @param {SunLightingMode} sunLightingMode - 光照模式
   * @returns {Promise<number>} 成功返回1 ,失败返回0
   */
  async setSunLightingMode(sunLightingMode: any): Promise<number> {
    let methodName = "setSunLightingMode"
    let paramsTypeStr = [this.ENUM + this.CLASS_SUN_LIGHTING_MODE];
    let paramsStr = [sunLightingMode];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取光照模式
   * @memberOf SceneView
   * @returns {Promise<SunLightingMode>} 返回光照模式
   */
  async getSunLightingMode(): Promise<any> {
    let methodName = "getSunLightingMode"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置模拟光照时间
   * @memberOf SceneView
   * @param {int} year - 年
   * @param {int} month - 月
   * @param {int} day - 日
   * @param {int} hours - 时间
   * @returns {Promise<number>} 
   */
  async setSunTime(year: number, month: number, day: number, hours: number): Promise<number> {
    let methodName = "setSunTime"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.INT];
    let paramsStr = [year, month, day, hours];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取光照时间
   * @memberOf SceneView
   * @param {int} year - 年
   * @param {int} month - 月
   * @param {int} day - 日
   * @param {int} hours - 时间
   * @returns {Promise<number>} 成功返回1 ,失败返回0
   */
  async getSunTime(year: number, month: number, day: number, hours: number): Promise<number> {
    let methodName = "getSunTime"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.INT];
    let paramsStr = [year, month, day, hours];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 地理坐标转屏幕坐标
   * @memberOf SceneView
   * @param locationPoint - 场景空间位置
   * @returns {Promise<Dot>} 屏幕坐标
   */
  async locationToScreen(locationPoint: Dot3D): Promise<Dot> {
    let methodName = "locationToScreen"
    let paramsTypeStr = [this.CLASS_DOT3D];
    let paramsStr = [locationPoint.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 屏幕坐标转地图坐标
   * @memberOf SceneView
   * @param screenPoint - 屏幕坐标
   * @returns {Promise<Dot3D>} 场景空间位置
   */
  async screenToLocation(screenPoint: Dot): Promise<Dot3D> {
    let methodName = "screenToLocation"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [screenPoint.ObjId];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot3D();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 添加场景相机监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async registerSceneViewCameraListener() {
    try {
      await SV.registerSceneViewCameraListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除场景相机监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async unregisterSceneViewCameraListener() {
    try {
      await SV.unregisterSceneViewCameraListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加场景刷新监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async registerSceneRefreshListener() {
    try {
      await SV.registerSceneRefreshListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除场景刷新监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async unregisterSceneRefreshListener() {
    try {
      await SV.unregisterSceneRefreshListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加场景覆盖物监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async registerSceneViewGraphicListener() {
    try {
      await SV.registerSceneViewGraphicListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除场景覆盖物监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async unregisterSceneViewGraphicListener() {
    try {
      await SV.unregisterSceneViewGraphicListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置场景单击监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async registerTapListener() {
    try {
      await SV.registerTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除场景单击监听
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async unregisterTapListener() {
    try {
      await SV.unregisterTapListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取当前地图视图的快照（截图）并返回图片路径
   * @memberOf SceneView
   * @param path 截图存储的文件夹路径
   * @returns {Promise<String>} 成功--图片路径不为“”， 失败---图片路径为“”
   */
  async getScreenSnapshot(path: String) {
    try {
      let bitmapPath = SV.getScreenSnapshot(this.ObjId, path);
      return bitmapPath;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取当前地图视图指定区域的快照（截图）,视图区域的指定采用视图坐标系,通过左上角点的坐标和区域的宽高来确定,视图左上角坐标为(0, 0)<br>
   * 如果指定区域超出视图范围,则超出部分以透明色填充
   * @memberOf SceneView
   * @param path 截图的存储文件夹路径
   * @param left 指定视图区域的左上角点的x坐标
   * @param top 指定视图区域的左上角点的y坐标
   * @param width 指定视图区域的宽度
   * @param height 指定视图区域的高度
   * @returns {Promise<Object>} 返回的是包含left, top ,width, height, bitmapPath的Object，若bitmapPath为“”，表示截屏失败
   */
  async getScreenSnapshotByParam(path: String, left: number, top: number, width: number, height: number) {
    try {
      let result = await SV.getScreenSnapshotByParam(this.ObjId, path, left, top, width, height);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 是否显示相机改变视角
   * @memberOf SceneView
   * @returns {Promise<Boolean>} 是否显示相机改变视角
   */
  async isShowCameraChangeView(): Promise<boolean> {
    let methodName = "isShowCameraChangeView"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示相机改变视角
   * @memberOf SceneView
   * @param showCameraChangeView 是否显示相机改变视角
   * @returns {Promise<void>}
   */
  async setShowCameraChangeView(showCameraChangeView: boolean): Promise<void> {
    let methodName = "setShowCameraChangeView"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [showCameraChangeView];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否显示指北针图标
   * @memberOf SceneView
   * @returns {Promise<Boolean>} 是否显示指北针图标
   */
  async isShowNorthArrow(): Promise<boolean> {
    let methodName = "isShowNorthArrow"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示指北针图标
   * @memberOf SceneView
   * @param showNorthArrow 值为true时显示指北针图标，反之不显示指北针图标
   * @returns {Promise<void>}
   */
  async setShowNorthArrow(showNorthArrow: boolean): Promise<void> {
    let methodName = "setShowNorthArrow"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [showNorthArrow];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否显示中地公司logo
   * @memberOf SceneView
   * @returns {Promise<Boolean>} 值为true时显示，反之，没显示
   */
  async isShowLogo(): Promise<boolean> {
    let methodName = "isShowLogo"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否显示中地公司logo
   * @memberOf SceneView 
   * @param showLogo - 值为true时显示，反之，不显示
   * @returns {Promise<void>}
   */
  async setShowLogo(showLogo: boolean): Promise<void> {
    let methodName = "setShowLogo"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [showLogo];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取公司logo位置
   * @memberOf SceneView
   * @returns {Promise<PointF>} 公司logo位置
   */
  async getLogoPoistion(): Promise<PointF> {
    let methodName = "getLogoPoistion"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置公司logo位置
   * @memberOf GraphicText
   * @param {PointF} logoPoistion - 公司logo位置
   * @returns {Promise<void>}
   */
  async setLogoPoistion(logoPoistion: PointF): Promise<void> {
    let methodName = "setLogoPoistion"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [logoPoistion.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取指北针图标中心点在地图视图中的显示位置
   * @memberOf SceneView
   * @returns {Promise<PointF>} PointF 中心点在地图视图中的显示位置
   */
  async getNorthArrowPosition(): Promise<PointF> {
    let methodName = "getNorthArrowPosition"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置指北针图标在地图视图中的显示位置
   * @memberOf GraphicText
   * @param {PointF} northArrowPosition - 指北针图标的中心在地图视图中的坐标
   * @returns {Promise<void>}
   */
  async setNorthArrowPosition(northArrowPosition: PointF): Promise<void> {
    let methodName = "setNorthArrowPosition"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [northArrowPosition.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取相机状态条位置
   * @memberOf SceneView
   * @returns {Promise<PointF>} 相机状态条左上角的位置
   */
  async getCameraStatusBarPosition(): Promise<PointF> {
    let methodName = "getCameraStatusBarPosition"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置相机状态条位置
   * @memberOf SceneView
   * @param {PointF} cameraStatusBarPosition - 相机状态条左上角的位置
   * @returns {Promise<void>}
   */
  async setCameraStatusBarPosition(cameraStatusBarPosition: PointF): Promise<void> {
    let methodName = "setCameraStatusBarPosition"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [cameraStatusBarPosition.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 刷新
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async refresh(): Promise<void> {
    let methodName = "refresh"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 强制刷新
   * @memberOf SceneView
   * @returns {Promise<void>}
   */
  async forceRefresh(): Promise<void> {
    let methodName = "forceRefresh"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 异步更新场景
   * @memberOf MapView
   * @returns {Promise<boolean>}
   */
  async updateSceneAsync() {
    try {
      let startUpdating = await SV.updateSceneAsync(this.ObjId);
      return startUpdating;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置系统内存保留百分比（取值范围1-100） 建议设置值大于等于45,否则可能会出现加载大规模场景时,出现内存不足而崩溃的问题.
   * @memberOf SceneView
   * @param {float} memPercent - 系统内存保留百分比（取值范围1-100）
   * @returns {Promise<void>}
   */
  async setRemainingMemoryPercent(memPercent: number): Promise<void> {
    let methodName = "setRemainingMemoryPercent"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [memPercent];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取系统内存保留百分比（取值范围1-100）
   * @memberOf SceneView
   * @returns {Promise<float>} 系统内存保留百分比（取值范围1-100）
   */
  async getRemainingMemoryPercent(): Promise<number> {
    let methodName = "getRemainingMemoryPercent"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 拾取
   * @memberOf SceneView
   * @param layer - 需要拾取的图层
   * @param screenPoint - 屏幕坐标
   * @param tolerance - 容差
   * @param maxResult - 最大结果返回数
   * @returns {Promise<IdentifyLayerResult>} 返回拾取结果
   */
  async identifyLayer(layer: Layer3D, screenPoint: Dot, tolerance: number, maxResult: number): Promise<IdentifyLayerResult> {
    let methodName = "identifyLayer"
    let paramsTypeStr = [this.CLASS_LAYER3D, this.CLASS_DOT, this.DOUBLE, this.INT];
    let paramsStr = [layer.ObjId, screenPoint.ObjId, tolerance, maxResult];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new IdentifyLayerResult();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取视图宽度
   * @memberOf SceneView
   * @returns {Promise<Number>} 返回宽度
   */
  async getWidth(): Promise<number> {
    let methodName = "getWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取视图高度
   * @memberOf SceneView
   * @returns {Promise<Number>} 返回高度
   */
  async getHeight(): Promise<number> {
    let methodName = "getHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

}
