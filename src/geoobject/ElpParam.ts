/**
 * @content 地球椭球参数功能组件
 * @author fangqi 2021-10-11 
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class ElpParam
 * @description 地球椭球参数
 */
export default class ElpParam extends ObjectManager {

    getClassName(): String {
        return this.CLASS_ELP_PARAM;
    }

    /**
     * 构造一个新的 ElpParam 对象。
     * @memberOf ElpParam
     * @returns {Promise.<ElpParam>}
     */
    static async createInstance(): Promise<ElpParam> {
        let thisObj = new ElpParam();
        thisObj.ObjId = await thisObj.create();
        return thisObj;
    }

    /**
     * 获取名称
     * @memberOf ElpParam
     * @returns {Promise<String>}
     */
    async getName(): Promise<String> {
        let methodName = "getName"
        return await this.invoke(methodName, this.STRING);
    }

    /**
     * 设置名称
     * @memberOf ElpParam
     * @param {String} name 名称
     * @returns {Promise<void>}
     */
    async setName(name: String): Promise<void> {
        let methodName = "setName"
        let paramsTypeStr = [this.STRING];
        let paramsStr = [name];
        await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
    }

    /**
     * 获取长轴
     * @memberOf ElpParam
     * @returns {Promise<number>}
     */
    async getA(): Promise<number> {
        let methodName = "getA"
        return await this.invoke(methodName, this.NUMBER);
    }

    /**
     * 设置长轴
     * @memberOf ElpTransParam
     * @param {number} newVal 长轴
     * @returns {Promise<void>}
     */
    async setA(newVal: number): Promise<void> {
        let methodName = "setA"
        let paramsTypeStr = [this.DOUBLE];
        let paramsStr = [newVal];
        await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
    }

    /**
     * 获取短轴
     * @memberOf ElpParam
     * @returns {Promise<number>}
     */
    async getB(): Promise<number> {
        let methodName = "getB"
        return await this.invoke(methodName, this.NUMBER);
    }

    /**
     * 设置短轴
     * @memberOf ElpTransParam
     * @param {number} newVal 短轴
     * @returns {Promise<void>}
     */
    async setB(newVal: number): Promise<void> {
        let methodName = "setB"
        let paramsTypeStr = [this.DOUBLE];
        let paramsStr = [newVal];
        await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
    }

    /**
     * 获取扁率
     * @memberOf ElpParam
     * @returns {Promise<number>}
     */
    async getAF(): Promise<number> {
        let methodName = "getAF"
        return await this.invoke(methodName, this.NUMBER);
    }

    /**
     * 设置扁率
     * @memberOf ElpTransParam
     * @param {number} newVal 扁率
     * @returns {Promise<void>}
     */
    async setAF(newVal: number): Promise<void> {
        let methodName = "setAF"
        let paramsTypeStr = [this.DOUBLE];
        let paramsStr = [newVal];
        await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
    }

    /**
     * 获取等面积球体半径
     * @memberOf ElpParam
     * @returns {Promise<number>}
     */
    async getR(): Promise<number> {
        let methodName = "getR"
        return await this.invoke(methodName, this.NUMBER);
    }

    /**
     * 设置等面积球体半径
     * @memberOf ElpTransParam
     * @param {number} newVal 扁率
     * @returns {Promise<void>}
     */
    async setR(newVal: number): Promise<void> {
        let methodName = "setR"
        let paramsTypeStr = [this.DOUBLE];
        let paramsStr = [newVal];
        await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
    }

}
