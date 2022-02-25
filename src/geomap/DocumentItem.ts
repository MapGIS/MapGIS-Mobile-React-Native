/**
 * @content 文档项对象组件
 * @author fangqi 2021-08-31
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class DocumentItem
 * @description 文档项对象组件
 */
export default class DocumentItem extends ObjectManager{

  getClassName(): String {
    return this.CLASS_DOCUMENT_ITEM;
  }

  /**
   * 获取文档项类型
   * @memberof DocumentItem
   * @returns {int} 返回DocItemType中文档项类型
   */
  async getDocItemType(){
    let methodName = "getDocItemType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取父文档项
   * @memberof DocumentItem
   * @returns {Promise<DocumentItem>} 返回父文档项
   */
  async getParent():Promise<DocumentItem> {
    let methodName = "getParent"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new DocumentItem();
    obj.ObjId = ObjId;
    return obj;
  }
}
