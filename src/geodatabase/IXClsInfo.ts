/**
 * @content 类信息基类功能组件
 * @author fangqi 2021-10-13
 */

import ObjectManager from "../components/ObjectManager";

/**
 * @class IXClsInfo
 * @description 类信息基类。(虚类)
 */
export default class IXClsInfo extends ObjectManager {

    getClassName(): String {
        return this.CLASS_IXCLS_INFO;
    }

}
