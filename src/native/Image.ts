/**
 * @content 图片功能组件
 * @author fangqi 2021-6-20 
 */
import { NativeModules } from 'react-native';
let X = NativeModules.JSImage;

/**
 * @class Image
 */
export default class Image {

  ObjId: String = ''

  /**
   * 构造一个新的 Image 对象。
   * @memberOf Image
   * @returns {Promise.<Image>}
   */
  static async createInstance(): Promise<any> {
    try {
      if (typeof arguments[0] === 'string') {
        let { ObjId } = await X.createObjByProperty(arguments[0]);
        let image = new Image();
        image.ObjId = ObjId;
        return image;
      } else {
        let { ObjId } = await X.createObj();
        let image = new Image();
        image.ObjId = ObjId;
        return image;
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
  * 构造一个新的 Image 对象。
  * @memberOf Image
  * @returns {Promise.<Image>}
  */
  static async createInstanceByLocalPath(path: String): Promise<any> {
    try {
      let { ObjId } = await X.createObjByLocalPath(path);
      let image = new Image();
      image.ObjId = ObjId;
      return image;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置图片Base64Url
   * @memberOf Image
   * @returns {Promise<boolean>}
   */
  async setBase64Url(base64Url: String) {
    try {
      let result = await X.setBase64Url(this.ObjId, base64Url);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取图片宽度
   * @memberOf Image
   * @returns {Promise<*>}
   */
  async getWidth() {
    try {
      let width = await X.getWidth(this.ObjId);
      return width;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取图片高度
   * @memberOf Image
   * @returns {Promise<*>}
   */
  async getHeight() {
    try {
      let height = await X.getHeight(this.ObjId);

      return height;
    } catch (e) {
      console.error(e);
    }
  }

}
