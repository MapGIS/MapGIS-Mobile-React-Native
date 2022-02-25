/**
 * @content 地形分析类,可以实现地形表面距离量算
 * @author fangqi 2021-12-07
 */

import type GeoVarLine from '../geoobject/GeoVarLine';
import ObjectManager from '../components/ObjectManager';
import type Scene from './Scene';

/**
 * @class TerrainAnalysis
 */
export default class TerrainAnalysis extends ObjectManager {

  getClassName(): String {
    return this.CLASS_TERRAIN_ANALYSIS;
  }

  /**
   * 地形表面距离量算
   * @memberOf TerrainAnalysis
   * @param {Scene} scene - 三维场景
   * @param {GeoVarLine} line - 待量算的路线
   * @return {Promise<double>} 地形表面距离量算
   */
  static async calculateSurfaceDistance(scene: Scene, line: GeoVarLine): Promise<number> {
    let thisObj = new TerrainAnalysis();
    let methodName = "calculateSurfaceDistance"
    let paramsTypeStr = [thisObj.CLASS_SCENE, thisObj.CLASS_GEO_VAR_LINE];
    let paramsStr = [scene.ObjId, line.ObjId];
    return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
  }

}
