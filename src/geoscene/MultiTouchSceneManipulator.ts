/**
 * @content 多点触摸操作器
 * @author fangqi 2021-11-26 
 */

import SceneManipulator from "./SceneManipulator";

/**
 * @class MultiTouchSceneManipulator
 */
export default class MultiTouchSceneManipulator extends SceneManipulator {

  getClassName(): String {
    return this.CLASS_MULTI_TOUCH_SCENE_MANIPULATOR;
  }

  /**
   * 构造一个新 MultiTouchSceneManipulator 对象
   *
   * @memberof MultiTouchSceneManipulator
   * @returns {Promise<MultiTouchSceneManipulator>}
   */
  static async createInstance(): Promise<MultiTouchSceneManipulator> {
    let thisObj = new MultiTouchSceneManipulator();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

}
