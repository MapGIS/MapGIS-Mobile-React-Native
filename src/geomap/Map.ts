/**
 * @content 地图类
 * @author fangqi 2021-07-11 
 */
import LayerEnum from './LayerEnum';
// import ServerLayer from './ServerLayer';
import MapLayer from './MapLayer';

// import GraphicPolylin from './GraphicPolylin'
// import GraphicStippleLine from './GraphicStippleLine'
// import GraphicHeatmap from './GraphicHeatmap'
import DocumentItem from './DocumentItem';
import ScaleRange from './ScaleRange';
import Rect from '../geoobject/Rect';
import SRefData from '../geoobject/SRefData';
import Dot from '../geoobject/Dot';

/**
 * @class Map
 * @description 地图类，负责地图显示环境的管理。
 */
export default class Map extends DocumentItem {

  getClassName(): String {
    return this.CLASS_MAP;
  }

  // static async getGraphics(values) {
  //   let objArr = [];
  //   for (let i = 0; i < values.length; i++) {
  //     let graphic = new Graphic();
  //     graphic._MGGraphicId = values[i];
  //     let type = await graphic.getGraphicType();
  //     let graphicBase = null;
  //     switch (type) {
  //       case 1:
  //         graphicBase = new GraphicPoint();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 2:
  //         graphicBase = new GraphicCircle();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 3:
  //         graphicBase = new GraphicPolylin();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 4:
  //         graphicBase = new GraphicPolygon();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 5:
  //         graphicBase = new GraphicImage();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 6:
  //         graphicBase = new GraphicText();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 7:
  //         graphicBase = new GraphicMultiPoint();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 8:
  //         graphicBase = new GraphicStippleLine();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       case 19:
  //         graphicBase = new GraphicHeatmap();
  //         graphicBase._MGGraphicId = values[i];
  //         break;
  //       default:
  //         break;
  //     }
  //     objArr.push(graphicBase);
  //   }
  //   return objArr;
  // }

  // static async creatMapLayerInstanceByID(mapLayerID) {
  //   try {
  //     let mapLayer;
  //     var { MapLayerType } = await M.getLayerTypeByID(mapLayerID); // 获取到图层id，图层类型

  //     switch (MapLayerType) {
  //       case 1: // 矢量图层
  //       case 2:
  //       case 5:
  //         mapLayer = new VectorLayer();
  //         mapLayer._MGMapLayerId = mapLayerID;
  //         break;
  //       case 6: // 组图层
  //         mapLayer = new GroupLayer();
  //         mapLayer._MGMapLayerId = mapLayerID;
  //         break;
  //       case 8: // 服务图层
  //         mapLayer = new ServerLayer();
  //         mapLayer._MGMapLayerId = mapLayerID;
  //         break;
  //       default:
  //         mapLayer = new MapLayer();
  //         mapLayer._MGMapLayerId = mapLayerID;
  //         break;
  //     }
  //     return mapLayer;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  /**
   * 构造一个新的 Map 对象。
   * @memberOf Map
   * @returns {Promise.<Map>}
   */
  static async createInstance(): Promise<Map> {
    let thisObj = new Map();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 设置地图名称
   * @memberOf Map
   * @param {String} name
   * @returns {Promise<void>}
   */
  async setName(name: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图名称
   * @memberOf Map
   * @returns {Promise<String>}
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地图描述信息
   * @memberOf Map
   * @param {String} description
   * @returns {Promise<void>}
   */
  async setDescription(description: String): Promise<void> {
    let methodName = "setDescription"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [description];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图描述
   * @memberOf Map
   * @returns {Promise<String>}
   */
  async getDescription(): Promise<String> {
    let methodName = "getDescription"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地图范围
   * @memberOf Map
   * @param  {boolean} isCustomEntireRange
   * @returns {Promise<void>}
   */
  async setIsCustomEntireRange(isCustomEntireRange: boolean): Promise<void> {
    let methodName = "setDescription"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isCustomEntireRange];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否适应整个地图范围
   * @memberof Map
   * @returns {boolean}
   */
  async getIsCustomEntireRange(): Promise<boolean> {
    let methodName = "getIsCustomEntireRange"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置地图范围
   * @memberOf Map
   * @param {Rect} entireRange
   * @returns {Promise<void>}
   */
  async setEntireRange(entireRange: Rect): Promise<void> {
    let methodName = "setEntireRange"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [entireRange.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图范围
   * @memberOf Map
   * @returns {Promise<Rect>}
   */
  async getEntireRange(): Promise<Rect> {
    let methodName = "getEntireRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置显示范围
   * @memberOf Map
   * @param {Rect} rect 显示范围
   * @returns {Promise<Void>}
   */
  async setViewRange(rect: Rect): Promise<void> {
    let methodName = "setViewRange"
    let paramsTypeStr = [this.CLASS_RECT];
    let paramsStr = [rect.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取显示范围
   * @memberOf Map
   * @return {Promise<Rect>}显示范围
   */
  async getViewRange(): Promise<Rect> {
    let methodName = "getViewRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置图层可见比例尺区间
   * @memberof MapLayer
   * @param scaleRange 比例尺区间
   * @return {boolean} 成功；失败
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
   * 设置固定显示比的显示
   * @memberOf Map
   * @param {boolean} IsFixedScalesDisplay 是否显示显示比
   * @return{void}
   */
  async setIsFixedScalesDisplay(IsFixedScalesDisplay: boolean): Promise<void> {
    let methodName = "setIsFixedScalesDisplay"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [IsFixedScalesDisplay];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否固定显示比的显示
   * @memberOf Map
   * @returns {boolean}
   */
  async getIsFixedScalesDisplay(): Promise<boolean> {
    let methodName = "getIsFixedScalesDisplay"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取是否固定比例尺显示
   * @memberOf Map
   * @param {Number[]} scales 地图比例尺列表
   * @returns {Promise<void>}
   */
  async setFixedScales(scales: number[]): Promise<void> {
    let methodName = "setFixedScales"
    let paramsTypeStr = [this.ARRAY + this.DOUBLE];
    let paramsStr = [scales];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取固定比例尺列表
   * @memberof Map 
   * @returns {double} 比例尺列表
   */
  async getFixedScales(): Promise<number[]> {
    let methodName = "getFixedScales"
    return await this.invoke(methodName, this.ARRAY);
  }

  /**
   * 设置是否在版面视图上显示
   * @memberOf Map
   * @param {boolean} isDisplayOnLayout 否在版面视图上显示
   * @return{void}
   */
  async setIsDisplayOnLayout(isDisplayOnLayout: boolean): Promise<void> {
    let methodName = "setIsDisplayOnLayout"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isDisplayOnLayout];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否在版面视图上显示
   * @memberOf Map
   * @returns {boolean}
   */
  async getIsDisplayOnLayout(): Promise<boolean> {
    let methodName = "getIsDisplayOnLayout"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置是否动态投影
   * @memberOf Map
   * @param {boolean} isProjTrans 是否动态投影
   * @return{void}
   */
  async setIsProjTrans(isProjTrans: boolean): Promise<void> {
    let methodName = "setIsProjTrans"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [isProjTrans];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取是否动态投影
   * @memberOf Map
   * @returns {boolean}
   */
  async getIsProjTrans(): Promise<boolean> {
    let methodName = "getIsProjTrans"
    return await this.invoke(methodName, this.BOOLEAN);
  }


  /**
   * 设置动态投影参数
   * @memberof MapLayer
   * @param projTrans 动态投影参数
   * @return {int}
   */
  async setProjTrans(projTrans: SRefData): Promise<void> {
    let methodName = "setProjTrans"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [projTrans.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取动态投影参数
   * @memberof MapLayer
   * @returns {Object}  动态投影参数
   */
  async getProjTrans(): Promise<SRefData> {
    let methodName = "getProjTrans"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取空间参照系
   * @memberof Map
   * @returns {Promise<SRefData>} 空间参照系
   */
  async getSRSInfo(): Promise<SRefData> {
    let methodName = "getSRSInfo"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取地图所有图层
   * @memberof Map
   * @returns {Promise<LayerEnum>} 返回所有图层对象
   */
  async getLayerEnum(): Promise<LayerEnum> {
    let methodName = "getLayerEnum"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LayerEnum();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取范围
   * @memberof Map
   * @returns {Rect} 地图范围
   */
  async getRange(): Promise<Rect> {
    let methodName = "getEntireRange"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Rect();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取符号等级
   * @memberof Map
   * @returns {double}
   */
  async getScaleOfSymbolSize(): Promise<number> {
    let methodName = "getScaleOfSymbolSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取地图节点图层数目
   * @memberOf Map
   * @return 返回节点图层数
   */
  async getLayerCount(): Promise<number> {
    let methodName = "getLayerCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取图层的名称
   * @memberOf Map
   * @param {Number} index 图层索引（int类型的Number）
   * @returns {Promise<MapLayer>}
   */
  async getLayer(index: number): Promise<MapLayer> {
    let methodName = "getLayer"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new MapLayer();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取是否编辑
   * @memberOf Map
   * @return 是否编辑
   */
  async getIsDirty(): Promise<boolean> {
    let methodName = "getIsDirty "
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 添加图层
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @returns {Promise<*>}
   */
  async append(layer: MapLayer): Promise<number> {
    let methodName = "append"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [layer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 插入图层（成功返回1，失败返回0）
   *
   * @memberOf Map
   * @param {Number} index 索引
   * @param {MapLayer} layer 图层
   * @returns {boolean}
   */
  async insert(index: number, layer: MapLayer): Promise<boolean> {
    let methodName = "insert"
    let paramsTypeStr = [this.INT, this.CLASS_MAP_LAYER];
    let paramsStr = [index, layer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除图层
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @returns {boolean}
   */
  async removeByLayer(layer: MapLayer): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [layer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 从FromIndex开始移除Count个图层
   * @memberOf Map
   * @param {Number} fromIndex 开始索引（int范围的Number）
   * @param {Number} count 移除个数（int范围的Number）
   * @returns {boolean} 成功返回true，失败返回false
   */
  async remove(fromIndex: number, count: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, count];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除索引为index的图层
   * @memberOf Map
   * @param {Number} index 图层索引（int范围的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async removeByIndex(index: number): Promise<boolean> {
    let methodName = "remove"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移除所有图层，同时销毁图层
   * @memberOf Map
   * @returns {boolean} 成功返回true，失败返回false
   */
  async removeAll(): Promise<boolean> {
    let methodName = "removeAll"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 移除图层，不会销毁图层
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @return 成功返回1，失败返回0
   */
  async dragOut(layer: MapLayer): Promise<boolean> {
    let methodName = "dragOut"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [layer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 拽入图层
   * @memberOf Map
   * @param {Number} index 索引（int类型的Number）
   * @param {MapLayer} layer 图层
   * @return {Number} （int类型的Number）成功返回1，失败返回0
   */
  async dragIn(index: number, layer: MapLayer): Promise<boolean> {
    let methodName = "dragIn"
    let paramsTypeStr = [this.INT, this.CLASS_MAP_LAYER];
    let paramsStr = [index, layer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 根据名称查找图层
   * @memberOf Map
   * @param {String} name 图层名称
   * @return 成功返回索引，失败返回-1
   */
  async indexOfByName(name: String): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 根据图层查找索引
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @return 成功返回索引，失败返回-1
   */
  async indexOfByLayer(layer: MapLayer): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_MAP_LAYER];
    let paramsStr = [layer.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 移动图层到最下面（最后绘制）
   * @memberOf Map
   * @param {Number} index 图层索引（int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToBottom(index: number): Promise<boolean> {
    let methodName = "moveToBottom"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 移动图层到最上面（最先绘制）
   * @memberOf Map
   * @param {Number} index 图层索引 （int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToTop(index: number): Promise<boolean> {
    let methodName = "moveToTop"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 下移图层
   * @memberOf Map
   * @param {Number} index 图层索引（int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToDown(index: number): Promise<boolean> {
    let methodName = "moveToDown"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 上移图层
   * @memberOf Map
   * @param {int} index 图层索引（int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToUp(index: number): Promise<boolean> {
    let methodName = "moveToUp"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 将图层从fromIndex移至toIndex
   * @memberOf Map
   * @param {Number} fromIndex 移动前图层索引（int范围的Number）
   * @param {Number} toIndex 移动后图层索引 （int范围的Number）
   * @return 成功返回true，失败返回false
   */
  async move(fromIndex: number, toIndex: number): Promise<boolean> {
    let methodName = "move"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, toIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 输出到字符串中
   * @memberof Map
   * @param {boolean} onlyStyle 支持仅导出样式
   * @returns {String} 成功返回Cstring值
   */
  async toXML(): Promise<String> {
    let methodName = "toXML"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 从字符串中输入
   * @memberof Map
   * @param {String} xml
   * @param {boolean} onlyStyle 支持仅导出样式
   * @returns {int}
   */
  async fromXML(xml: String): Promise<boolean> {
    let methodName = "fromXML"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [xml];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 清除编辑
   * @memberof Map
   * @returns {boolean} 成功/失败
   */
  async clearDirty(): Promise<boolean> {
    let methodName = "clearDirty"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置地图旋转中心
   * @memberOf Map
   * @param {Dot} center 旋转中心
   * @returns {Promise<void>}
   */
  async setRotateCenter(rotateCenter: Dot): Promise<void> {
    let methodName = "setRotateCenter"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [rotateCenter.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图旋转中心
   * @memberOf Map
   * @returns {Promise<Dot>}
   */
  async getRotateCenter(): Promise<Dot> {
    let methodName = "getRotateCenter"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置地图旋转角
   * @memberOf Map
   * @param {Number} angle 旋转角度 （doublef范围的Number）
   * @returns {Promise<void>}
   */
  async setRotateAngle(angle: Dot): Promise<void> {
    let methodName = "setRotateAngle"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [angle];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图旋转角
   * @memberOf Map
   * @returns {double}
   */
  async getRotateAngle(): Promise<number> {
    let methodName = "getRotateAngle"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取拓展属性
   * @memberof Map
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
   * @memberof Map
   * @param name 属性名
   * @param val 属性值
   * @returns {Object}  属性值
   */
  async setPropertyEx(name: String, value: String): Promise<void> {
    let methodName = "setPropertyEx"
    let paramsTypeStr = [this.STRING, this.STRING];
    let paramsStr = [name, value];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
