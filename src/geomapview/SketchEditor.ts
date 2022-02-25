/**
 * @content 草图编辑器
 * @author fangqi 2021-09-10
 */
import { NativeModules } from 'react-native';
let SE = NativeModules.JSSketchEditor;
import SketchStyle from './SketchStyle';
import ObjectManager from '../components/ObjectManager';
import type MapView from './MapView';
import SnappingOption from './SnappingOption';
import type MagnifierOption from './MagnifierOption';
import MeasureOption from './MeasureOption';
import Geometry from '../geoobject/Geometry';
import Dot from '../geoobject/Dot';
import SRefData from '../geoobject/SRefData';


/**
 * @class SketchEditor
 * @description 草图编辑器
 */
export default class SketchEditor extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SKETCH_EDITOR;
  }

  /**
   * 构造一个新的SketchEditor对象
   *
   * @memberof SketchEditor
   * @param {Object} mapView 地图视图对象
   * @returns {Promise<SketchEditor>}
   */
  static async createInstance(mapView: MapView): Promise<SketchEditor> {
    let thisObj = new SketchEditor();
    let initParamsType = [thisObj.CLASS_MAP_VIEW];
    let initParamsStr = [mapView.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 添加状态改变监听
   *
   * @memberof SketchEditor
   * @returns {Promise<Void>}
   */
  async addStateChangedListener() {
    try {
      await SE.addStateChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除状态改变监听
   *
   * @memberof SketchEditor
   * @returns {Promise<Void>}
   */
  async removeStateChangedListener() {
    try {
      await SE.removeStateChangedListener(this.ObjId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取草图样式
   * @memberof SketchEditor
   * @returns {Promise<SketchStyle>}
   */
  async getSketchStyle(): Promise<SketchStyle> {
    let methodName = "getSketchStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SketchStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置草图样式
   * @memberof SketchEditor
   * @param {Object} sketchStyle 草图样式(SketchStyle类型的Object)
   * @returns {Promise<Void>}
   */
  async setSketchStyle(sketchStyle: SketchStyle): Promise<void> {
    let methodName = "setSketchStyle"
    let paramsTypeStr = [this.CLASS_SKETCH_STYLE];
    let paramsStr = [sketchStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取捕捉选项
   * @memberof SketchEditor
   * @returns {Promise<SnappingOption>}
   */
  async getSnappingOption(): Promise<SnappingOption> {
    let methodName = "getSnappingOption"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SnappingOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置捕捉选项
   * @memberof SketchEditor
   * @param {Object} snappingOption 捕捉选项(SnappingOption类型的Object)
   * @returns {Promise<Void>}
   */
  async setSnappingOption(snappingOption: SnappingOption): Promise<void> {
    let methodName = "setSnappingOption"
    let paramsTypeStr = [this.CLASS_SNAPPING_OPTION];
    let paramsStr = [snappingOption.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 依据指定的数据类型开始新的几何编辑
   * @memberof SketchEditor
   * @param {number} sketchDataType 几何类型（int类型的Number，例:1--SketchDataType.POINT）
   * @returns {Promise<Void>}
   */
  async startByType(sketchDataType: any): Promise<void> {
    let methodName = "start"
    let paramsTypeStr = [this.ENUM + this.CLASS_SKETCH_DATA_TYPE];
    let paramsStr = [sketchDataType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 开始编辑已有的几何对象
   * @memberof SketchEditor
   * @param {Object} geometry 几何对象
   * @returns {Promise<Void>}
   */
  async start(geometry: Geometry): Promise<void> {
    let methodName = "start"
    let paramsTypeStr = [this.CLASS_GEOMETRY];
    let paramsStr = [geometry.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 是否在编辑过程中
   * @memberof SketchEditor
   * @returns {Promise<boolean>}
   */
  async isEditing(): Promise<boolean> {
    let methodName = "isEditing"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 暂停交互编辑
   * @memberof SketchEditor
   * @returns {Promise<boolean>}
   */
  async pauseInterActionEdit(): Promise<void> {
    let methodName = "pauseInterActionEdit"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 恢复交互编辑
   * @memberof SketchEditor
   * @returns {Promise<boolean>}
   */
  async resumeInterActionEdit(): Promise<void> {
    let methodName = "resumeInterActionEdit"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 获取编辑的数据类型
   * @memberof SketchEditor
   * @returns {number} 几何类型（int类型的Number，例:1--SketchDataType.POINT，-1表示获取失败）
   */
  async getSketchDataType() {
    let methodName = "getSketchDataType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 替换当前的编辑几何对象
   * @memberof SketchEditor
   * @param {Object} geometry 几何对象
   * @returns {Promise<Void>}
   */
  async replaceGeometry(geometry: Geometry): Promise<void> {
    let methodName = "replaceGeometry"
    let paramsTypeStr = [this.CLASS_GEOMETRY];
    let paramsStr = [geometry.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取当前的编辑几何
   * @memberof SketchEditor
   * @returns {Promise<Geometry>} 成功返回几何对象
   */
  async getGeometry(): Promise<Geometry> {
    let methodName = "getGeometry"
    let ObjId = await this.invoke(methodName, this.OBJID);
    return await Geometry.getGeometryById(ObjId);
  }

  /**
   * 清除当前的编辑几何
   * @memberof SketchEditor
   * @returns {Promise<Void>}
   */
  async clearGeometry(): Promise<void> {
    let methodName = "clearGeometry"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 停止编辑
   * @memberof SketchEditor
   * @returns {Promise<Void>}
   */
  async stop(): Promise<void> {
    let methodName = "stop"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 删除当前被选中的顶点
   * @memberof SketchEditor
   * @returns {boolean}
   */
  async deleteSelectedVertex(): Promise<boolean> {
    let methodName = "deleteSelectedVertex"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 移动当前被选中的顶点到指定的位置（地图坐标）
   * @memberof SketchEditor
   * @param {number} x坐标的值
   * @param {number} y坐标的值
   * @returns {boolean}
   */
  async moveSelectedVertexTo(x: number, y: number): Promise<boolean> {
    let methodName = "moveSelectedVertexTo"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [x, y];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 添加新的顶点（地图坐标）
   * @memberof SketchEditor
   * @param {number} x坐标的值
   * @param {number} y坐标的值
   * @returns {Promise<Void>}
   */
  async addVertex(x: number, y: number): Promise<void> {
    let methodName = "addVertex"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [x, y];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 试图捕捉指定点（地图坐标，返回被捕捉到的点，返回null表示捕捉失败
   * @memberof SketchEditor
   * @param {number} x坐标的值
   * @param {number} y坐标的值
   * @returns {Promise<Dot>} 返回null表示捕捉失败
   */
  async snapping(x: number, y: number): Promise<Dot> {
    let methodName = "snapping"
    let paramsTypeStr = [this.DOUBLE, this.DOUBLE];
    let paramsStr = [x, y];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 撤销
   * @memberof SketchEditor
   * @returns {boolean} true-成功；false-失败
   */
  async undo(): Promise<boolean> {
    let methodName = "undo"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 重做
   * @memberof SketchEditor
   * @returns {boolean} true-成功；false-失败
   */
  async redo(): Promise<boolean> {
    let methodName = "redo"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 草图几何是否有效（点几何必须有1个顶点、线必须有2个顶点、区必须有3个顶点）
   * @memberof SketchEditor
   * @returns {boolean}
   */
  async isSketchValid() {
    let methodName = "isSketchValid"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置地图位置组件
   *
   * @memberof SketchEditor
   * @param {Object} option 地图位置组件
   * @returns {Promise<Void>}
   */
  async setMagnifierOption(option: MagnifierOption): Promise<void> {
    let methodName = "setMagnifierOption"
    let paramsTypeStr = [this.CLASS_MAGNIFIER_OPTION];
    let paramsStr = [option.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置编辑数据的空间参考系，用于计算实地距离和面积
   * @memberof SketchEditor
   * @param {SRefData} 空间参考系
   * @returns {Promise<Void>}
   */
  async setSRS(sRefData: SRefData): Promise<void> {
    let methodName = "setSRS"
    let paramsTypeStr = [this.CLASS_SREF_DATA];
    let paramsStr = [sRefData.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间参考系
   * @memberof SketchEditor
   * @returns {Promise<SRefData>}
   */
  async getSRS(): Promise<SRefData> {
    let methodName = "getSRS"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置量算参数选项
   * 
   * @memberof SketchEditor
   * @param {MeasureOption} measureOption 量算参数选项
   * @returns {Promise<Void>}
   */
  async setMeasureOption(measureOption: MeasureOption): Promise<void> {
    let methodName = "setMeasureOption"
    let paramsTypeStr = [this.CLASS_MEASURE_OPTION];
    let paramsStr = [measureOption.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取量算参数选项
   * 
   * @memberof SketchEditor
   * @returns {Promise<MeasureOption>}
   */
  async getMeasureOption(): Promise<MeasureOption> {
    let methodName = "getMeasureOption"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new MeasureOption();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取当前选中的顶点的索引
   * @memberof SketchEditor
   * @returns {number}
   */
  async getSelectedVertexIndex() {
    let methodName = "getSelectedVertexIndex"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置当前选中的顶点的索引
   * 
   * @memberof SketchEditor
   * @param vertexIndex 当前选中的顶点的索引
   * @returns {Promise<number>} 1成功，0失败。
   */
  async setSelectedVertexIndex(vertexIndex: number): Promise<number> {
    let methodName = "setSelectedVertexIndex"
    let paramsTypeStr = [this.INT];
    let paramsStr = [vertexIndex];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
