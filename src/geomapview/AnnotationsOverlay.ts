/**
 * @content 标记图层功能组件
 * @author fangqi 2021-10-27
 */
import Annotation from './Annotation';
import ObjectManager, { getArrayObjIds } from '../components/ObjectManager';

/**
 * @class AnnotationsOverlay
 */
export default class AnnotationsOverlay extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ANNOTATIONS_OVERLAY;
  }

  /**
   * 构造一个新的 AnnotationsOverlay 对象。
   * @memberOf AnnotationsOverlay
   * @returns {Promise.<AnnotationsOverlay>}
   */
  static async createInstance(): Promise<AnnotationsOverlay> {
    let thisObj = new AnnotationsOverlay();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 添加一个标记
   *
   * @param ann 标记
   */
  async addAnnotation(ann: Annotation): Promise<void> {
    let methodName = "addAnnotation"
    let paramsTypeStr = [this.CLASS_ANNOTATION];
    let paramsStr = [ann.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 添加一组标记
   *
   * @param anns
   */
  async addAnnotations(annArray: Array<Annotation>): Promise<void> {
    let arrayID = getArrayObjIds(annArray);

    let methodName = "addAnnotations"
    let paramsTypeStr = [this.LIST + this.CLASS_ANNOTATION];
    let paramsStr = [arrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除指定索引的标记
   *
   * @param index 索引
   */
  async removeAnnotationByIndex(index: number): Promise<void> {
    let methodName = "removeAnnotation"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除一个标记
   *
   * @param ann
   */
  async removeAnnotation(ann: Annotation): Promise<void> {
    let methodName = "removeAnnotation"
    let paramsTypeStr = [this.CLASS_ANNOTATION];
    let paramsStr = [ann.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除一组标记
   *
   * @param anns
   */
  async removeAnnotations(annArray: Array<Annotation>): Promise<void> {
    let arrayID = getArrayObjIds(annArray);

    let methodName = "removeAnnotations"
    let paramsTypeStr = [this.LIST + this.CLASS_ANNOTATION];
    let paramsStr = [arrayID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 删除所有标记
   */
  async removeAllAnnotations(): Promise<void> {
    let methodName = "removeAllAnnotations"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 获取标记数目
   *
   * @return 标记数目
   */
  async getAnnotationCount(): Promise<number> {
    let methodName = "getAnnotationCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取标记的索引
   *
   * @param annotation
   * @return 标记索引 -1表示没有找到该标记
   */
  async indexOf(ann: Annotation): Promise<number> {
    let methodName = "indexOf"
    let paramsTypeStr = [this.CLASS_ANNOTATION];
    let paramsStr = [ann.ObjId];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 获取指定索引的标记
   *
   * @param index 标记索引 从0开始
   * @return 索引对应的标记
   */
  async getAnnotation(index: number): Promise<Annotation> {
    let methodName = "getAnnotation"
    let paramsTypeStr = [this.INT];
    let paramsStr = [index];
    let ObjId = await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.OBJID);
    let obj = new Annotation();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 获取所有标记
   *
   * @return 标记列表
   */
  async getAllAnnotations(): Promise<Array<Annotation>> {
    let methodName = "getAllAnnotations"
    let ObjIdList = await this.invoke(methodName, this.LIST);
    let arr = new Array();
    if (Array.isArray(ObjIdList)) {
      ObjIdList.forEach((ObjId: String) => {
        let obj = new Annotation();
        obj.ObjId = ObjId;
        arr.push(obj);
      });
    }
    return arr;
  }

  /**
   * 移动标记,改变标记的层次序列
   *
   * @param fromIndex 被移动的标记的索引
   * @param toIndex 移动标记到toIndex处,如果toIndex为-1 表示移动到最上面
   */
  async moveAnnotation(fromIndex: number, toIndex: number): Promise<void> {
    let methodName = "moveAnnotation"
    let paramsTypeStr = [this.INT, this.INT];
    let paramsStr = [fromIndex, toIndex];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }
}
