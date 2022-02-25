/**
 * @content 标注
 * @author fangqi 2021-09-18
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class Label
 * @description 标注
 */
export default class Label extends ObjectManager {

  getClassName(): String {
    return this.CLASS_LABEL;
  }

  /**
   * 获取标注类型
   *
   * @memberof Label
   * @returns {Number} 标注类型（int范围的Number；例：256-LabelType.SimpleLabel）
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取可见性
   *
   * @memberof Label
   * @returns {boolean}
   */
  async getVisible(): Promise<boolean> {
    let methodName = "getVisible"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置可见性
   *
   * @memberof Label
   * @param {boolean} visible 可见性
   * @returns {Promise<Void>}
   */
  async setVisible(visible: boolean): Promise<void> {
    let methodName = "setVisible"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [visible];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取名称
   *
   * @memberof Label
   * @returns {String}
   */
  async getName(): Promise<String> {
    let methodName = "getName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置标注名称
   * @memberof Label
   * @param {String} name 名称
   * @returns {Promise<Void>}
   */
  async setName(name: String): Promise<void> {
    let methodName = "setName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取优先级,1-8
   *
   * @memberof Label
   * @returns {number}
   */
  async getPriority(): Promise<number> {
    let methodName = "getPriority"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置优先级,1-8
   * @memberof Label
   * @param {number} newVal 优先级,1-8
   * @returns {Promise<Void>}
   */
   async setPriority(newVal: number): Promise<void> {
    let methodName = "setPriority"
    let paramsTypeStr = [this.NUMBER];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
