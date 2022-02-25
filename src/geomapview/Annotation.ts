/**
 * @content 标记功能组件
 * @author fangqi 2021-10-27
 */
import ObjectManager from '../components/ObjectManager';
import Dot from '../geoobject/Dot';
import Image from '../native/Image';
import PointF from '../native/PointF';

/**
 * @class Annotation
 */
export default class Annotation extends ObjectManager {

  getClassName(): String {
    return this.CLASS_ANNOTATION;
  }

  /**
   * 构造一个新的 Annotation标记对象
   * @memberOf Annotation
   * @param title 标题
   * @param description 描述
   * @param point 地图坐标点
   * @param image 图标 可以为null
   * @returns {Promise.<Annotation>}
   */
  static async createInstance(title: String, description: String, point: Dot, image: Image): Promise<Annotation> {
    let thisObj = new Annotation();
    let initParamsType = [thisObj.STRING, thisObj.STRING, thisObj.CLASS_DOT, thisObj.CLASS_IMAGE];
    let initParamsStr = [title, description, point.ObjId, image.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 构造一个新的 Annotation标记对象
   * @memberOf Annotation
   * @param uid 唯一标识
   * @param title 标题
   * @param description 描述
   * @param point 地图坐标点
   * @param image 图标 可以为null
   * @returns {Promise.<Annotation>}
   */
  static async createInstanceByUID(uid: String, title: String, description: String, point: Dot, image: Image): Promise<Annotation> {
    let thisObj = new Annotation();
    let initParamsType = [thisObj.STRING, thisObj.STRING, thisObj.STRING, thisObj.CLASS_DOT, thisObj.CLASS_IMAGE];
    let initParamsStr = [uid, title, description, point.ObjId, image.ObjId];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 获取唯一标识
   * @memberOf Annotation
   * @return {Promise}唯一标识
   */
  async getUid(): Promise<String> {
    let methodName = "getUid"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置标题
   * @memberOf Annotation
   * @param title 标题
   * @returns {Promise.<void>}
   */
  async setTitle(title: String): Promise<void> {
    let methodName = "setTitle"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [title];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标题
   * @memberOf Annotation
   * @return {Promise} 标题
   */
  async getTitle(): Promise<String> {
    let methodName = "getTitle"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置描述
   * @memberOf Annotation
   * @param description 描述
   * @returns {Promise.<void>}
   */
  async setDescription(description: String): Promise<void> {
    let methodName = "setDescription"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [description];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取描述
   * @memberOf Annotation
   * @return {Promise}描述
   */
  async getDescription(): Promise<String> {
    let methodName = "getDescription"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地图坐标点
   * @memberOf Annotation
   * @param point 地图坐标点
   * @returns {Promise.<void>}
   */
  async setPoint(point: Dot): Promise<void> {
    let methodName = "setPoint"
    let paramsTypeStr = [this.CLASS_DOT];
    let paramsStr = [point.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地图坐标点
   * @memberOf Annotation
   * @return {Promise.<Dot>}地图坐标点
   */
  async getPoint(): Promise<Dot> {
    let methodName = "getPoint"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Dot();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置标记图标
   * @memberOf Annotation
   * @param bitmap 图标
   * @returns {Promise.<void>}
   */
  async setImage(bitmap: Image): Promise<void> {
    let methodName = "setImage"
    let paramsTypeStr = [this.CLASS_IMAGE];
    let paramsStr = [bitmap.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 设置标记图标
   * @memberOf Annotation
   * @param filePath 图标路径
   * @returns {Promise.<void>}
   */
  async setImageByPath(filePath: String): Promise<void> {
    let methodName = "setImage"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [filePath];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 返回图标宽度
   * @memberOf Annotation
   * @returns {Promise} 图标宽度
   */
  async getImageWidth(): Promise<number> {
    let methodName = "getImageWidth"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回图标高度
   * @memberOf Annotation
   * @returns {Promise} 图标高度
   */
  async getImageHeight(): Promise<number> {
    let methodName = "getImageHeight"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 返回标记图标
   * @memberOf Annotation
   * @returns {Promise<Image>} 标记图标
   */
  async getImage(): Promise<Image> {
    let methodName = "getImage"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Image();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置标记点与图标底边中心的偏移 offset.x 取正值 图标相对于底边中心向右偏移 取负值 图标相对于底边中心向左偏移 offset.y 取正值
   * 图标相对于底边中心向上移动 取负值 图标相对于底边中心向下移动
   * @memberOf Annotation
   * @param offset
   * @returns {Promise.<void>}
   */
  async setCenterOffset(offset: PointF): Promise<void> {
    let methodName = "setCenterOffset"
    let paramsTypeStr = [this.CLASS_POINTF];
    let paramsStr = [offset.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取标记点与图标底边中心的偏移 ,x方向和y方向 (默认偏移为(0,0))
   * @memberOf Annotation
   * @returns {Promise.<PointF>} 偏移值
   */
  async getCenterOffset(): Promise<PointF> {
    let methodName = "getCenterOffset"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new PointF();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置点是否为像素单位(默认情况下为地图单位)
   * @memberOf Annotation
   * @param 点是否为像素单位
   * @returns {Promise.<void>}
   */
  async setPointByPixel(pixel: boolean): Promise<void> {
    let methodName = "setPointByPixel"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [pixel];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点是否为像素单位
   * @memberOf Annotation
   * @returns {Promise.<boolean>} 点是否为像素单位
   */
  async isPointByPixel(): Promise<boolean> {
    let methodName = "isPointByPixel"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置能否弹出标记视图
   * @memberOf Annotation
   * @param show 值为true时能弹出 ,反之,不能弹出
   * @returns {Promise.<void>}
   */
  async setCanShowAnnotationView(show: boolean): Promise<void> {
    let methodName = "setCanShowAnnotationView"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [show];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取能否弹出标记视图的标志
   * @memberOf Annotation
   * @returns {Promise.<boolean>} 标记视图弹出标志
   */
  async isCanShowAnnotationView(): Promise<boolean> {
    let methodName = "isCanShowAnnotationView"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 显示标记视图
   * @memberOf Annotation
   * @returns {Promise.<void>}
   */
  async showAnnotationView(): Promise<void> {
    let methodName = "showAnnotationView"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 隐藏标记视图
   * @memberOf Annotation
   * @returns {Promise.<void>}
   */
  async hideAnnotationView(): Promise<void> {
    let methodName = "hideAnnotationView"
    await this.invoke(methodName, this.VOID);
  }

  /**
   * 获取对应的标记视图是否正在显示的标志
   * @memberOf Annotation
   * @returns {Promise.<boolean>} 对应的标记视图显示状态 值为true时正在显示 ,反之,不能显示
   */
  async isAnnotationViewShown(): Promise<boolean> {
    let methodName = "isAnnotationViewShown"
    return await this.invoke(methodName, this.BOOLEAN);
  }
}
