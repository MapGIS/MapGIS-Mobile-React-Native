/**
 * @content 标记功能组件
 * @author fangqi 2021-10-27
 */
import { NativeModules } from 'react-native';

let ANV = NativeModules.JSAnnotationView;

import Annotation from './Annotation';
import ObjectManager from '../components/ObjectManager';
import type MapView from './MapView';

/**
 * @class AnnotationView
 */
export default class AnnotationView extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ANNOTATION_VIEW;
  }

  /**
   * 构造一个新的 AnnotationView 对象。
   * @memberOf AnnotationView
   * @returns {Promise.<AnnotationView>}
   */
  static async createInstance(mapView: MapView, annotation: Annotation): Promise<any> {
    try {
      var { ObjId } = await ANV.createObj(
        mapView.ObjId,
        annotation.ObjId
      );
      var annotationView = new AnnotationView();
      annotationView.ObjId = ObjId;
      return annotationView;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置标记
   * @memberOf AnnotationView
   * @param annotation
   * @returns {Promise.<void>}
   */
  async setAnnotation(annotation: Annotation): Promise<void> {
    let methodName = "setAnnotation"
    let paramsTypeStr = [this.CLASS_ANNOTATION];
    let paramsStr = [annotation.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标记
   * @memberOf AnnotationView
   * @return {Promise.<Annotation>}标记
   */
  async getAnnotation(): Promise<Annotation> {
    let methodName = "getAnnotation"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Annotation();
    obj.ObjId = ObjId;
    return obj;
  }

}
