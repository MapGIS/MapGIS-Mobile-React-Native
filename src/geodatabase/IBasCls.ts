/**
 * @content 地理类对象基类功能组件
 * @author fangqi 2021-09-18
 */

import ObjectManager from "../components/ObjectManager";

/**
 * @class IBasCls
 * @description 地理类对象基类
 */
export default class IBasCls extends ObjectManager {

    getClassName(): String {
        return this.CLASS_IBAS_CLS;
    }

}
