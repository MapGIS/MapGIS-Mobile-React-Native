/**
 * @content 用于对多边形的几何功能组件
 * @author fangqi 2021-09-09
 */
import GeoAnno from './GeoAnno';

/**
 * @class TextAnno
 */
export default class TextAnno extends GeoAnno {

  getClassName(): String {
    return this.CLASS_TEXT_ANNO;
  }

  /**
   * 构造一个新的 TextAnno 对象
   * @memberOf TextAnno
   * @return {Promise<TextAnno>}
   */
  static async createInstance(): Promise<TextAnno> {
		let thisObj = new TextAnno();
		thisObj.ObjId = await thisObj.create();
		return thisObj;
	}

  /**
   * 获取几何对象类型
   * @memberOf TextAnno
   * @return {Promise}几何对象类型
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取注记类型
   * @memberOf TextAnno
   * @return {Promise}注记类型
   */
  async getAnnType() {
    let methodName = "getAnnType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 判断几何注记是否为空
   * @memberOf TextAnno
   * @return {Promise}为空返回true，不为空返回false
   */
  async isEmpty(): Promise<boolean> {
    let methodName = "isEmpty"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取文本注记文本内容
   * @memberOf TextAnno
   * @return {Promise}文本内容
   */
  async getText(): Promise<String> {
    let methodName = "getText"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置文本注记文本内容
   * @memberOf TextAnno
   * @param text 文本内容
   * @return {Promise<void>}
   */
  async setText(text:String) :Promise<void>{
    let methodName = "setText"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [text];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
