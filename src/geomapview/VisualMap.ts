/**
 * @content 视觉映射功能组件
 * @author fangqi 2021-10-08
 */
import ObjectManager from '../components/ObjectManager';
import ConvertUtil from '../components/ConvertUtil';

/**
 * @class VisualMap
 */
export default class VisualMap extends ObjectManager {

  getClassName(): String {
    return this.CLASS_VISUAL_MAP;
  }

  /**
   * 构造一个新的 VisualMap 对象。
   * @memberOf VisualMap
   * @returns {Promise.<VisualMap>}
   */
  static async createInstance(): Promise<VisualMap> {
    let thisObj = new VisualMap();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 构造一个新的 VisualMap 对象。
   * @memberOf VisualMap
   * @param minValue 视觉映射最小值,默认值为0
   * @param maxValue 视觉映射最大值,默认值为1
   * @param {Array} colors颜色数组 string类型的Array
   * @returns {Promise.<VisualMap>}
   */
  static async createInstanceByParam(minValue: number, maxValue: number, colors: String[], colorCount: number): Promise<VisualMap> {
    let colorsInt: number[] = [];
    colors.forEach((element: String) => {
      colorsInt.push(ConvertUtil.colorRGBAToNumber(element));
    });

    let thisObj = new VisualMap();
    let initParamsType = [thisObj.DOUBLE, thisObj.DOUBLE, thisObj.ARRAY + thisObj.INT, thisObj.INT];
    let initParamsStr = [minValue, maxValue, colorsInt, colorCount];
    thisObj.ObjId = await thisObj.createByParam(
      initParamsType,
      initParamsStr
    );
    return thisObj;
  }

  /**
   * 设置视觉映射的最小值,默认值为0
   * 在不设置minValue的情况下,minValue等于0,当热力点的权重值设置小于0的时候,minValue依然为0.
   * @memberOf VisualMap
   * @param minValue
   * @returns {Promise<void>}
   */
  async setMinValue(minValue: number): Promise<void> {
    let methodName = "setMinValue"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [minValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取视觉映射的最小值,默认值为0
   *  @memberOf VisualMap
   * @returns {Promise<double>}
   */
  async getMinValue(): Promise<number> {
    let methodName = "getMinValue"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置视觉映射的最大值,默认值为1
   * 在不设置maxValue的情况下,maxValue等于1;当热力点的权重值设置大于1的时候,maxValue依然为1
   * @memberOf VisualMap
   * @param maxValue
   * @returns {Promise<void>}
   */
  async setMaxValue(maxValue: number): Promise<void> {
    let methodName = "setMaxValue"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [maxValue];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取视觉映射的最大值,默认值为1
   *  @memberOf VisualMap
   * @returns {Promise<double>}
   */
  async getMaxValue(): Promise<number> {
    let methodName = "getMaxValue"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置热力点的颜色组
   * @memberOf VisualMap
   * @param {Array} colors string类型的Array
   * @returns {Promise<void>}
   */
  async setColors(colors: String[], count: number): Promise<void> {
    let colorsInt: number[] = [];
    colors.forEach((element: String) => {
      colorsInt.push(ConvertUtil.colorRGBAToNumber(element));
    });

    let methodName = "setColors"
    let paramsTypeStr = [this.ARRAY + this.INT, this.INT];
    let paramsStr = [colorsInt, count];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   *  获取热力点的颜色组
   *  @memberOf VisualMap
   * @returns {Promise<Array>} string类型的Array
   */
  async getColors(): Promise<Array<String>> {
    let methodName = "getColors"
    let colorsList = await this.invoke(methodName, this.ARRAY);
    let arr = new Array();
    if (Array.isArray(colorsList)) {
      colorsList.forEach((color: number) => {
        arr.push(ConvertUtil.colorNumberToRGBA(color));
      });
    }
    return arr;
  }

}
