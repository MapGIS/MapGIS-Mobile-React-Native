/**
 * @content 抽象基类，几何图形信息功能组件
 * @author fangqi 2021-09-11
 */

import ObjectManager from "../components/ObjectManager";

/**
 * @class GeomInfo
 * @description 几何图形信息类。(虚类)
 */
export default class GeomInfo extends ObjectManager{

    getClassName(): String {
        return this.CLASS_GEOM_INFO;
    }

}
