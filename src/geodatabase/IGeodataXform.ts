/**
 * @content 地理类对象基类功能组件
 * @author fangqi 2021-09-18
 */

import ObjectManager from "../components/ObjectManager";

/**
 * @class IGeodataXform
 * @description 地理类对象基类
 */
export default class IGeodataXform extends ObjectManager {

    getClassName(): String {
        return this.CLASS_IGEODATA_XFORM;
    }

}
