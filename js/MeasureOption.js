
import { NativeModules } from 'react-native';
let MO = NativeModules.JSMeasureOption;
import MeasureContentWillChangeListener from './MeasureContentWillChangeListener';

/**
 * @class MeasureOption
 * @description 量算参数选项类
 */
export default class MeasureOption{

  /**
   * 构造一个新的 MeasureOption 对象。
   * @memberOf MeasureOption
   * @returns {Promise.<MeasureOption>}
   */
    async createObj(){
        try {
            let {MeasureOptionId} = await MO.createObj();
            let measureOption = new MeasureOption();
            measureOption._MGMeasureOptionId = MeasureOptionId;
            return measureOption;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取是否显示总长度
     * 
     * @memberof MeasureOption
     * @returns {boolean} 
     */
    async getIsShowTotalLength(){
        try {
            let isShowTotalLength = await MO.getIsShowTotalLength(this._MGMeasureOptionId);
            return isShowTotalLength;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置是否显示总长度
     * 
     * @memberof MeasureOption
     * @param {boolean} isShowTotalLength 是否显示总长度
     * @returns {Promise<Void>}
     */
    async setIsShowTotalLength(isShowTotalLength){
        try {
            await MO.setIsShowTotalLength(this._MGMeasureOptionId, isShowTotalLength);
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置量算结果内容变化监听
     * 
     * @memberof MeasureOption
     * @param {MeasureContentWillChangeListener} measureContentWillChangeListener
     * @returns {Promise<Void>}
     */
    async setContentWillChangeListener(measureContentWillChangeListener){
        try {

            await MO.setContentWillChangeListener(this._MGMeasureOptionId, measureContentWillChangeListener._MGMeasureListenerId);

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
    async getMeasureContentWillChangeListener(){
        try {
            let measureListenerId = await MO.getMeasureContentWillChangeListener(this._MGMeasureListenerId);
            let measureContentWillChangeListener = null;
            if(measureListenerId != null){
                measureContentWillChangeListener = new MeasureContentWillChangeListener();
                measureContentWillChangeListener._MGMeasureListenerId = measureListenerId;
            }
            
            return measureContentWillChangeListener;
        } catch (e) {
            console.error(e);
        }
    }

}
