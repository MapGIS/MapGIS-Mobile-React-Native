

/**
 * @content 抽象基类，注记图形信息功能组件
 * @author fangqi 2021-09-11
 */

import GeomInfo from "./GeomInfo";

/**
 * @class AnnInfo
 * @description 几何图形信息类。(虚类)
 */
export default class AnnInfo extends GeomInfo {

  getClassName(): String {
    return this.CLASS_ANN_INFO;
  }
  
}
