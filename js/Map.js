/*
 * @Description: In User Settings Edit
 * @Author: fjl
 * @Date: 2019-6-24 下午2:52:36
 * @LastEditTime: 2019-09-11 20:02:36
 * @LastEditors: mayuanye
 */

import { NativeModules } from 'react-native';
let M = NativeModules.JSMap;
import Rect from './Rect.js';
import Dot from './Dot.js';
import SRefData from './SRefData.js';
import LayerEnum from './LayerEnum.js';
import VectorLayer from './VectorLayer.js';
import GroupLayer from './GroupLayer.js';
import SimpleModelLayer from './SimpleModelLayer.js';
import ServerLayer from './ServerLayer.js';

import Graphic from './Graphic';
import GraphicPoint from './GraphicPoint.js'
import GraphicCircle from './GraphicCircle.js'
import GraphicMultiPoint from './GraphicMultiPoint.js'
import GraphicPolylin from './GraphicPolylin.js'
import GraphicStippleLine from './GraphicStippleLine.js'
import GraphicText from './GraphicText.js'
import GraphicHeatmap from './GraphicHeatmap.js'
import GraphicPolygon from './GraphicPolygon.js'
import GraphicImage from './GraphicImage.js'

/**
 * @class Map
 * @description 地图类，负责地图显示环境的管理。
 */
export default class Map {

  static async getGraphics(values)
  {
    let objArr = [];
    for (let i = 0; i < values.length; i++) {
      let graphic = new Graphic();
      graphic._MGGraphicId = values[i];
      let type = await graphic.getGraphicType();
      let graphicBase = null;
      switch(type)
      {
        case 1:
          graphicBase = new GraphicPoint();
          graphicBase._MGGraphicId = values[i];
          break;
          case 2:
            graphicBase = new GraphicCircle();
            graphicBase._MGGraphicId = values[i];
          break;
          case 3:
            graphicBase = new GraphicPolylin();
            graphicBase._MGGraphicId = values[i];
          break;
          case 4:
            graphicBase = new GraphicPolygon();
            graphicBase._MGGraphicId = values[i];
          break;
          case 5:
            graphicBase = new GraphicImage();
            graphicBase._MGGraphicId = values[i];
            break;
          case 6:
            graphicBase = new GraphicText();
            graphicBase._MGGraphicId = values[i];
            break;
          case 7:
            graphicBase = new GraphicMultiPoint();
            graphicBase._MGGraphicId = values[i];
            break;
          case 8:
            graphicBase = new GraphicStippleLine();
            graphicBase._MGGraphicId = values[i];
            break;
          case 19:
            graphicBase = new GraphicHeatmap();
            graphicBase._MGGraphicId = values[i];
            break;
          default:
            break;
      }
      objArr.push(graphicBase);
    }
    return objArr;
  }

  static async creatMapLayerInstanceByID(mapLayerID) {
    try {
      let mapLayer;
      var { MapLayerType } = await M.getLayerTypeByID(mapLayerID); // 获取到图层id，图层类型

      switch (MapLayerType) {
        case 0: // 矢量图层
          mapLayer = new VectorLayer();
          mapLayer._MGMapLayerId = mapLayerID;
          break;
        case 2: // 组图层
          mapLayer = new GroupLayer();
          mapLayer._MGMapLayerId = mapLayerID;
          break;
        case 9: // 服务图层
          mapLayer = new ServerLayer();
          mapLayer._MGMapLayerId = mapLayerID;
          break;
        case 10: // 简单模型图层
          mapLayer = new SimpleModelLayer();
          mapLayer._MGMapLayerId = mapLayerID;
          break;
        default:
          break;
      }
      return mapLayer;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 构造一个新的 Map 对象。
   * @memberOf Map
   * @returns {Promise.<Map>}
   */
  async createObj() {
    try {
      var { MapId } = await M.createObj();
      var map = new Map();
      map._MGMapId = MapId;
      return map;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图名称
   * @memberOf Map
   * @param {String} name
   * @returns {Promise<void>}
   */
  async setName(name) {
    try {
      await M.setName(this._MGMapId, name);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图描述信息
   * @memberOf Map
   * @param {String} Description
   * @returns {Promise<void>}
   */
  async setDescription(Description) {
    try {
      await M.setDescription(this._MGMapId, Description);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图范围
   * @memberOf Map
   * @param {Rect} EntireRange
   * @returns {Promise<void>}
   */
  async setEntireRange(EntireRange) {
    try {
      await M.setEntireRange(this._MGMapId, EntireRange._MGRectId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图最小显示比
   * @memberOf Map
   * @param {number} MinScale
   * @returns {Promise<void>}
   */
  async setMinScale(MinScale) {
    try {
      await M.setMinScale(this._MGMapId, MinScale);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图最小大显示比
   * @memberOf Map
   * @param {Number} MaxScale
   * @returns {Promise<void>}
   */
  async setMaxScale(MaxScale) {
    try {
      await M.setMaxScale(this._MGMapId, MaxScale);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置固定显示比的显示
   * @memberOf Map
   * @param {boolean} IsFixedScalesDisplay 是否显示显示比
   * @return{void}
   */
  async setIsFixedScalesDisplay(IsFixedScalesDisplay) {
    try {
      await M.setIsFixedScalesDisplay(this._MGMapId, IsFixedScalesDisplay);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置修订显示比数目
   * @memberOf Map
   * @param {Number} FixedScalesCount
   * @returns {Promise<void>}
   */
  async setFixedScalesCount(FixedScalesCount) {
    try {
      await M.setFixedScalesCount(this._MGMapId, FixedScalesCount);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置修订后的显示比
   * @memberOf Map
   * @param {Number} scale
   * @returns {Promise<void>}
   */
  async setFixedScale(index, scale) {
    try {
      await M.setFixedScale(this._MGMapId, index, scale);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图范围
   * @memberOf Map
   * @param  {boolean} IsCustomEntireRange
   * @returns {Promise<void>}
   */
  async setIsCustomEntireRange(IsCustomEntireRange) {
    try {
      await M.setEntireRange(this._MGMapId, IsCustomEntireRange);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图名称
   * @memberOf Map
   * @returns {Promise<String>}
   */
  async getName() {
    try {
      let name = await M.getName(this._MGMapId);
      return name;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图描述
   * @memberOf Map
   * @returns {Promise<String>}
   */
  async getDescription() {
    try {
      let description = await M.getDescription(this._MGMapId);
      return description;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图范围
   * @memberOf Map
   * @returns {Promise<Rect>}
   */
  async getEntireRange() {
    try {
      let { rectId } = await M.getEntireRange(this._MGMapId);
      let rect = null;
      if(rectId !== null){
        rect = new Rect();
        rect._MGRectId = rectId;
      }
       
      return rect;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取最小显示比
   * @memberOf Map
   * @returns {Promise<double>}
   */
  async getMinScale() {
    try {
      let minScale = await M.getMinScale(this._MGMapId);
      return minScale;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取最大显示比
   * @memberOf Map
   * @returns {Promise<double>}
   */
  async getMaxScale() {
    try {
      let maxScale = await M.getMaxScale(this._MGMapId);
      return maxScale;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取是否固定显示比的显示
   * @memberOf Map
   * @returns {boolean}
   */
  async getIsFixedScalesDisplay() {
    try {
      let isFixedScalesDisplay = await M.getIsFixedScalesDisplay(this._MGMapId);
      return isFixedScalesDisplay;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取固定的显示比个数
   * @memberOf Map
   * @returns {int}
   */
  async getFixedScalesCount() {
    try {
      let fixedScalesCount = await M.getFixedScalesCount(this._MGMapId);
      return fixedScalesCount;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取固定的显示比
   * @memberof Map
   * @param {int} index 显示比的索引
   * @returns {double}
   */
  async getFixedScale(index) {
    try {
      let fixedScale = await M.getFixedScale(this._MGMapId, index);
      return fixedScale;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取空间参照系
   * @memberof Map
   * @returns {Promise<SRefData>} 空间参照系
   */
  async getSRSInfo() {
    try {
      var { SRefDataId } = await M.getSRSInfo(this._MGMapId);
      let sRefData = null;
      if(SRefDataId !== null){
        sRefData = new SRefData();
        sRefData._MGSRefDataId = SRefDataId;
      }
    
      return sRefData;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图节点图层数目
   * @memberOf Map
   * @return 返回节点图层数
   */
  async getLayerCount() {
    try {
      let layerCount = await M.getLayerCount(this._MGMapId);
      return layerCount;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图所有图层
   * @memberof Map
   * @returns {Promise<LayerEnum>} 返回所有图层对象
   */
  async getLayerEnum() {
    try {
      var { LayerEnumId } = await M.getLayerEnum(this._MGMapId);
      let layerEnum = null;
      if(LayerEnumId !== null){
        layerEnum = new LayerEnum();
        layerEnum._MGLayerEnumId = LayerEnumId;
      }
      return layerEnum;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取是否适应整个地图范围
   * @memberof Map
   * @returns {boolean}
   */
  async getIsCustomEntireRange() {
    try {
      let isCustomEntireRange = await M.getIsCustomEntireRange(this._MGMapId);
      return isCustomEntireRange;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取范围
   * @memberof Map
   * @returns {Rect} 地图范围
   */
  async getRange() {
    try {
      var { RectId } = await M.getRange(this._MGMapId);
      let rect = null;
      if(RectId !== null){
        rect = new Rect();
        rect._MGRectId = RectId;
      }
     
      return rect;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取符号等级
   * @memberof Map
   * @returns {double}
   */
  async getSymbolScale() {
    try {
      let symbolScale = await M.getSymbolScale(this._MGMapId);
      return symbolScale;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取图层的名称
   * @memberOf Map
   * @param {Number} index 图层索引（int类型的Number）
   * @returns {Promise<MapLayer>}
   */
  async getLayer(index) {
    try {
      let mapLayer = null;
      var { MapLayerId } = await M.getLayer(this._MGMapId, index); // 获取到图层id，图层类型
      if(MapLayerId !== null){
        mapLayer = await Map.creatMapLayerInstanceByID(MapLayerId);
      }
      return mapLayer;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取是否编辑
   * @memberOf Map
   * @return 是否编辑
   */
  async getIsDirty() {
    try {
      let IsDirty = await M.getIsDirty(this._MGMapId);
      return IsDirty;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 添加图层
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @returns {Promise<*>}
   */
  async append(layer) {
    try {
      let result = await M.append(this._MGMapId, layer._MGMapLayerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 插入图层（成功返回1，失败返回0）
   *
   * @memberOf Map
   * @param {Number} index 索引
   * @param {MapLayer} layer 图层
   * @returns {Number}
   */
  async insert(index, layer) {
    try {
      let result = await M.insert(this._MGMapId, index, layer._MGMapLayerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除图层
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @returns {boolean}
   */
  async removeByLayer(layer) {
    try {
      let result = await M.removeByLayer(this._MGMapId, layer._MGMapLayerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 从FromIndex开始移除Count个图层
   * @memberOf Map
   * @param {Number} fromIndex 开始索引（int范围的Number）
   * @param {Number} count 移除个数（int范围的Number）
   * @returns {boolean} 成功返回true，失败返回false
   */
  async remove(fromIndex, count) {
    try {
      let result = await M.remove(this._MGMapId, fromIndex, count);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除索引为index的图层
   * @memberOf Map
   * @param {Number} index 图层索引（int范围的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async removeByIndex(index) {
    try {
      let result = await M.removeByIndex(this._MGMapId, index);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除所有图层，同时销毁图层
   * @memberOf Map
   * @returns {boolean} 成功返回true，失败返回false
   */
  async removeAll() {
    try {
      let result = await M.removeAll(this._MGMapId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除图层，不会销毁图层
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @return 成功返回1，失败返回0
   */
  async dragOut(layer) {
    try {
      let result = await M.dragOut(this._MGMapId, layer._MGMapLayerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 拽入图层
   * @memberOf Map
   * @param {Number} index 索引（int类型的Number）
   * @param {MapLayer} layer 图层
   * @return {Number} （int类型的Number）成功返回1，失败返回0
   */
  async dragIn(index, layer) {
    try {
      let result = await M.dragIn(this._MGMapId, index, layer._MGMapLayerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 根据名称查找图层
   * @memberOf Map
   * @param {String} name 图层名称
   * @return 成功返回索引，失败返回-1
   */
  async indexOfByName(name) {
    try {
      let result = await M.indexOfByName(this._MGMapId, name);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 根据图层查找索引
   * @memberOf Map
   * @param {MapLayer} layer 图层
   * @return 成功返回索引，失败返回-1
   */
  async indexOfByLayer(layer) {
    try {
      let result = await M.indexOfByLayer(this._MGMapId, layer._MGMapLayerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 移动图层到最下面（最后绘制）
   * @memberOf Map
   * @param {Number} index 图层索引（int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToBottom(index) {
    try {
      let result = await M.moveToBottom(this._MGMapId, index);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 移动图层到最上面（最先绘制）
   * @memberOf Map
   * @param {Number} index 图层索引 （int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToTop(index) {
    try {
      let result = await M.moveToTop(this._MGMapId, index);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 下移图层
   * @memberOf Map
   * @param {Number} index 图层索引（int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToDown(index) {
    try {
      let result = await M.moveToDown(this._MGMapId, index);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 上移图层
   * @memberOf Map
   * @param {int} index 图层索引（int类型的Number）
   * @return {boolean} 成功返回true，失败返回false
   */
  async moveToUp(index) {
    try {
      let result = await M.moveToUp(this._MGMapId, index);
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 将图层从fromIndex移至toIndex
   * @memberOf Map
   * @param {Number} fromIndex 移动前图层索引（int范围的Number）
   * @param {Number} toIndex 移动后图层索引 （int范围的Number）
   * @return 成功返回true，失败返回false
   */
  async move(fromIndex, toIndex) {
    try {
      let result = await M.move(this._MGMapId, fromIndex, toIndex);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 输出到字符串中
   * @memberof Map
   * @param {boolean} onlyStyle 支持仅导出样式
   * @returns {String} 成功返回Cstring值
   */
  async toXML(onlyStyle) {
    try {
      let Cstring = await M.toXML(this._MGMapId, onlyStyle);
      return Cstring;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 从字符串中输入
   * @memberof Map
   * @param {String} strXMl
   * @param {boolean} onlyStyle 支持仅导出样式
   * @returns {int}
   */
  async fromXML(strXMl, onlyStyle) {
    try {
      return await M.fromXML(this._MGMapId, strXMl, onlyStyle);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 清除编辑
   * @memberof Map
   * @returns {boolean} 成功/失败
   */
  async clearDirty() {
    try {
      let clearDirty = await M.clearDirty(this._MGMapId);
      return clearDirty;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图旋转中心
   * @memberOf Map
   * @param {Dot} center 旋转中心
   * @returns {Promise<void>}
   */
  async SetRotateCenter(center) {
    try {
      await M.SetRotateCenter(this._MGMapId, center._MGDotId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图旋转中心
   * @memberOf Map
   * @returns {Promise<Dot>}
   */
  async GetRotateCenter() {
    try {
      var { point2DId, x, y } = await M.GetRotateCenter(this._MGMapId);
      var dot = new Dot();
      dot._MGDotId = point2DId;
      dot.x = x;
      dot.y = y;
      return dot;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置地图旋转角
   * @memberOf Map
   * @param {Number} angle 旋转角度 （doublef范围的Number）
   * @returns {Promise<void>}
   */
  async SetRotateAngle(angle) {
    try {
      await M.SetRotateAngle(this._MGMapId, angle);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图旋转角
   * @memberOf Map
   * @returns {double}
   */
  async GetRotateAngle() {
    try {
      let rotateAngle = await M.GetRotateAngle(this._MGMapId);
      return rotateAngle;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 根据指定的地图范围生成一张指定大小的图片
   * @memberof Map
   * @param {Rect} dispRange 地图范围
   * @param {Image} bitmap 生成的图片，用户负责构造指定大小的图片，要求像素格式为ARGB_8888
   * @return {int}
   */
  async outputToBitmap(dispRange, bitmap) {
    try {
      if (dispRange === null || bitmap === null) {
        return -1;
      }
      let result = await M.outputToBitmap(
        this._MGMapId,
        dispRange._MGRectId,
        bitmap._MGImageId
      );
      return result;
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 设置显示范围
   * @memberOf Map
   * @param {Rect} rect 显示范围
   * @returns {Promise<Void>}
   */
  async setViewRange(rect) {
    try {
      await M.setViewRange(this._MGMapId, rect._MGRectId);
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 获取显示范围
   * @memberOf Map
   * @return {Promise<Rect>}显示范围
   */
  async getViewRange() {
    try {
      var { rectId } = await M.getViewRange(this._MGMapId);
      var rect = new Rect();
      rect._MGRectId = rectId;
      return rect;
    } catch (e) {
      console.error(e);
    }
  }
}
