/**
 * @content 量算参数选项类
 * @author fangqi 2021-9-14 
 */
import { NativeModules } from 'react-native';
import ObjectManager from '../components/ObjectManager';
let MO = NativeModules.JSMeasureOption;
import MeasureContentWillChangeListener from './MeasureContentWillChangeListener';

/**
 * @class MeasureOption
 * @description 量算参数选项类
 */
export default class MeasureOption extends ObjectManager {

    getClassName(): String {
        return this.CLASS_MEASURE_OPTION;
    }

    /**
     * 构造一个新的 MeasureOption 对象。
     * @memberOf MeasureOption
     * @returns {Promise.<MeasureOption>}
     */
    static async createInstance(): Promise<MeasureOption> {
        let thisObj = new MeasureOption();
        thisObj.ObjId = await thisObj.create();
        return thisObj;
    }

    /**
     * 获取是否显示总长度
     * 
     * @memberof MeasureOption
     * @returns {boolean} 
     */
    async getIsShowTotalLength(): Promise<boolean> {
        let methodName = "getIsShowTotalLength"
        return await this.invoke(methodName, this.BOOLEAN);
    }

    /**
     * 设置是否显示总长度
     * 
     * @memberof MeasureOption
     * @param {boolean} isShowTotalLength 是否显示总长度
     * @returns {Promise<Void>}
     */
    async setIsShowTotalLength(isShowTotalLength: boolean): Promise<void> {
        let methodName = "setIsShowTotalLength"
        let paramsTypeStr = [this.BOOLEAN];
        let paramsStr = [isShowTotalLength];
        await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
    }

    /**
     * 设置量算结果内容变化监听
     * 
     * @memberof MeasureOption
     * @param {MeasureContentWillChangeListener} measureContentWillChangeListener
     * @returns {Promise<Void>}
     */
    async setContentWillChangeListener(measureContentWillChangeListener: MeasureContentWillChangeListener) {
        try {
            await MO.setContentWillChangeListener(this.ObjId, measureContentWillChangeListener.ObjId);
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取量算结果内容变化监听
     * 
     * @memberof MeasureOption
     * @returns {Promise<MeasureContentWillChangeListener>}
     */
    async getMeasureContentWillChangeListener(): Promise<any> {
        try {
            let measureListenerId = await MO.getMeasureContentWillChangeListener(this.ObjId);
            let measureContentWillChangeListener = null;
            if (measureListenerId != null) {
                measureContentWillChangeListener = new MeasureContentWillChangeListener();
                measureContentWillChangeListener.ObjId = measureListenerId;
            }
            return measureContentWillChangeListener;
        } catch (e) {
            console.error(e);
        }
    }

}
