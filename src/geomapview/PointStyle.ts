/**
 * @content 点样式
 * @author fangqi 2021-09-10 
 */
import ObjectManager from "../components/ObjectManager";
import ConvertUtil from "../components/ConvertUtil";
import LineStyle from "../geomapview/LineStyle";

/**
 * @class PointStyle
 * @description  点样式（实心圆点）
 */
export default class PointStyle extends ObjectManager {

  getClassName(): String {
    return this.CLASS_POINT_STYLE;
  }

  /**
   * 构造一个新的PointStyle对象，可通过无参或有参构造。
   * 有参构造的参数为：颜色（string，eg：'rgba(128, 128, 128, 128)'），大小（float类型的Number）
   *
   * @memberof PointStyle
   * @returns {Promise<PointStyle>}
   */
  static async createInstance(): Promise<PointStyle> {
    let thisObj = new PointStyle();
    if (
      typeof arguments[0] === 'string' &&
      typeof arguments[1] === 'number'
    ) {
      let initParamsType = [thisObj.INT, thisObj.FLOAT];
      let initParamsStr = [ConvertUtil.colorRGBAToNumber(arguments[0]), arguments[1]];
      thisObj.ObjId = await thisObj.createByParam(
        initParamsType,
        initParamsStr
      );
    } else {
      thisObj.ObjId = await thisObj.create();
    }
    return thisObj;
  }

  /**
   * 获取点样式的颜色
   *
   * @memberof PointStyle
   * @returns {String} 颜色 
   */
  async getColor(): Promise<String> {
    let methodName = "getColor"
    let color = await this.invoke(methodName, this.NUMBER);
    return ConvertUtil.colorNumberToRGBA(color)
  }

  /**
   * 设置点样式的颜色
   *
   * @memberof PointStyle
   * @param {String} color 颜色 eg:'rgba(128, 128, 128, 128)'
   * @returns {Promise<Void>}
   */
  async setColor(color: String): Promise<void> {
    let methodName = "setColor"
    let paramsTypeStr = [this.INT];
    let paramsStr = [ConvertUtil.colorRGBAToNumber(color)];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取点的大小
   *
   * @memberof PointStyle
   * @returns {Number} 点的大小 （float类型的Number）
   */
  async getSize(): Promise<number> {
    let methodName = "getSize"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置点的大小
   *
   * @memberof PointStyle
   * @param {Number} size 点的大小 （float类型的Number)
   * @returns {Promise<Void>}
   */
  async setSize(size: number): Promise<void> {
    let methodName = "setSize"
    let paramsTypeStr = [this.FLOAT];
    let paramsStr = [size];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取线样式
   * @memberof PointStyle
   * @returns {Promise<LineStyle>}
   */
  async getLineStyle(): Promise<LineStyle> {
    let methodName = "getLineStyle"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new LineStyle();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 设置线样式
   * 
   * @memberof PointStyle
   * @param lineStyle 线样式
   * @returns {Promise<void>} 
   */
  async setLineStyle(lineStyle: LineStyle): Promise<void> {
    let methodName = "setLineStyle"
    let paramsTypeStr = [this.CLASS_LINE_STYLE];
    let paramsStr = [lineStyle.ObjId];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

}
