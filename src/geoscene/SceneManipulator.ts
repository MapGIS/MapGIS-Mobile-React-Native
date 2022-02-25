/**
 * @content 
 * @author fangqi 2021-11-26 
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class SceneManipulator
 */
export default class SceneManipulator extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SCENE_MANIPULATOR;
  }

  /**
   * 构造一个新 SceneManipulator 对象
   *
   * @memberof SceneManipulator
   * @returns {Promise<SceneManipulator>}
   */
  static async createInstance(): Promise<SceneManipulator> {
    let thisObj = new SceneManipulator();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取场景操作器的类型
   *
   * @memberof SceneManipulator
   * @returns {SceneManipulatorType} 场景操作器的类型
   */
  async getSceneManipulatorType(): Promise<any> {
    let methodName = "getSceneManipulatorType"
    return await this.invoke(methodName, this.ENUM);
  }

}
