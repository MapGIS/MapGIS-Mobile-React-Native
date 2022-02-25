/**
 * @content 量算结果内容变化监听组件
 * @author fangqi 2021-9-23 
 */
import { NativeModules } from 'react-native';
let MCCL = NativeModules.JSMeasureContentWillChangeListener;

/**
 * @class MeasureContentWillChangeListener
 */
export default class MeasureContentWillChangeListener {

    ObjId: String = ''

    /**
     * 创建MeasureContentWillChangeListener
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {MeasureContentWillChangeListener}
     */
    static async createInstance(): Promise<any> {
        try {
            let obj = new MeasureContentWillChangeListener();
            obj.ObjId = await MCCL.createObj();
            return obj;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置是否显示测量距离单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @param {Boolean} isShowDistanceUnit 是否显示距离单位
     * @returns {boolean}
     */
    async setIsShowDistanceUnit(isShowDistanceUnit: boolean) {
        try {
            let result = await MCCL.setIsShowDistanceUnit(this.ObjId, isShowDistanceUnit);
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取是否显示测量距离单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {Boolean}
     */
    async getIsShowDistanceUnit() {
        try {
            let isShowDistanceUnit = await MCCL.getIsShowDistanceUnit(this.ObjId);
            return isShowDistanceUnit;

        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置是否显示测量面积单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @param {Boolean} isShowAreaUnit 是否显示面积单位
     * @returns {boolean}
     */
    async setIsShowAreaUnit(isShowAreaUnit: boolean) {
        try {
            let result = await MCCL.setIsShowAreaUnit(this.ObjId, isShowAreaUnit);
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取是否显示测量面积单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {Boolean}
     */
    async getIsShowAreaUnit() {
        try {
            let isShowAreaUnit = await MCCL.getIsShowAreaUnit(this.ObjId);
            return isShowAreaUnit;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置是否自动改变测量距离单位。若设置自动改变，目前只支持厘米、米、千米三种单位的自动转换
     * 
     * @memberof MeasureContentWillChangeListener
     * @param {Boolean} isAutoChangeDistanceUnit 是否自动改变测量距离单位
     * @returns {boolean}
     */
    async setIsAutoChangeDistanceUnit(isAutoChangeDistanceUnit: boolean) {
        try {
            let result = await MCCL.setIsAutoChangeDistanceUnit(this.ObjId, isAutoChangeDistanceUnit);
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取是否自动改变测量距离单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {Boolean}
     */
    async getIsAutoChangeDistanceUnit() {
        try {
            let isAutoChangeDistanceUnit = await MCCL.getIsAutoChangeDistanceUnit(this.ObjId);
            return isAutoChangeDistanceUnit;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置是否自动改变测量面积单位。若设置自动改变，目前只支持平方厘米、平方米、平方千米三种单位的自动转换
     * 
     * @memberof MeasureContentWillChangeListener
     * @param {Boolean} isAutoChangeAreaUnit 是否自动改变测量面积单位
     * @returns {boolean}
     */
    async setIsAutoChangeAreaUnit(isAutoChangeAreaUnit: boolean) {
        try {
            let result = await MCCL.setIsAutoChangeAreaUnit(this.ObjId, isAutoChangeAreaUnit);
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取是否自动改变测量面积单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {Boolean}
     */
    async getIsAutoChangeAreaUnit() {
        try {
            let isAutoChangeAreaUnit = await MCCL.getIsAutoChangeAreaUnit(this.ObjId);
            return isAutoChangeAreaUnit;
        } catch (e) {
            console.error(e);
        }
    }

    /**
    * 设置距离单位及进制（相对于米），可使用SketchMeasureUnitType.DM等
    * 
    * @memberof MeasureContentWillChangeListener
    * @param {String} distanceUnitAndScale 距离单位及进制（相对于米），例："米*1"、"厘米*100"、"千米*0.001"
    * @returns {boolean}
    * @example 
   目前SketchMeasureUnitType默认支持以下几种类型
   毫米：SketchMeasureUnitType.MM
   厘米：SketchMeasureUnitType.CM
   分米：SketchMeasureUnitType.DM
   米  ：SketchMeasureUnitType.M
   千米：SketchMeasureUnitType.KM
   公里：SketchMeasureUnitType.GongLi
   里  ：SketchMeasureUnitType.Li
   海里：SketchMeasureUnitType.Sea_Mile
   英里：SketchMeasureUnitType.Land_Mile
    */
    async setDistanceUnitAndScale(distanceUnitAndScale: String) {
        try {
            let result = await MCCL.setDistanceUnitAndScale(this.ObjId, distanceUnitAndScale);
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取距离单位及进制（相对于米）
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {String}
     */
    async getDistanceUnitAndScale() {
        try {
            let distanceUnitAndScale = await MCCL.getDistanceUnitAndScale(this.ObjId);
            return distanceUnitAndScale;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 设置面积单位及进制（相对于平方米），可使用SketchMeasureUnitType.Sqrt_MM
     * 
     * @memberof MeasureContentWillChangeListener
     * @param {String} areaUnitAndScale 面积单位及进制（相对于平方米），例："平方米*1"、"平方厘米*10000"、"平方千米*0.000001"
     * @returns {boolean}
     * @example 
    目前SketchMeasureUnitType默认支持以下几种类型
    平方毫米：SketchMeasureUnitType.Sqrt_MM
    平方厘米：SketchMeasureUnitType.Sqrt_CM
    平方分米：SketchMeasureUnitType.Sqrt_DM
    平方米：  SketchMeasureUnitType.Sqrt_M
    平方千米：SketchMeasureUnitType.Sqrt_KM
    平方公里：SketchMeasureUnitType.Sqrt_GongLi
    公顷：    SketchMeasureUnitType.GongQing
    亩：      SketchMeasureUnitType.Mu
    公亩：    SketchMeasureUnitType.GongMu
     */
    async setAreaUnitAndScale(areaUnitAndScale: String) {
        try {
            let result = await MCCL.setAreaUnitAndScale(this.ObjId, areaUnitAndScale);
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 获取距离单位
     * 
     * @memberof MeasureContentWillChangeListener
     * @returns {String}
     */
    async getAreaUnitAndScale() {
        try {
            let areaUnitAndScale = await MCCL.getAreaUnitAndScale(this.ObjId);
            return areaUnitAndScale;
        } catch (e) {
            console.error(e);
        }
    }

}