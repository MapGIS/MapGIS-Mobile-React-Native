/**
 * @content 矢量类对象基类功能组件
 * @author fangqi 2021-09-18
 */
import IBasCls from './IBasCls';

/**
 * @class IVectorCls
 * @description 矢量类对象基类
 */
export default class IVectorCls extends IBasCls {
    
    getClassName(): String {
        return this.CLASS_IVECTOR_CLS;
    }

}
