/**
 * @content 颜色对象
 * @author fangqi 2022-02-21
 */
import ObjectManager from '../components/ObjectManager';

/**
 * @class Color
 * @description 颜色对象
 */
export default class Color extends ObjectManager {

  getClassName(): String {
    return this.CLASS_COLOR;
  }

  /**
   * 构造一个新的Color对象
   *
   * @memberof Color
   * @returns {Promise<Color>}
   */
  static async createInstance(): Promise<Color> {
    let thisObj = new Color();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取颜色编号
   *
   * @memberof Color
   * @returns {long} 颜色编号
   */
  async getColorNo(): Promise<number> {
    let methodName = "getColorNo"
    return await this.invoke(methodName, this.NUMBER);
  }

  // /**
  //  * 获取颜色库
  //  *
  //  * @memberof Color
  //  * @returns {ColorLibrary} 颜色库
  //  */
  // async getColorLibrary(): Promise<ColorLibrary> {
  //   let methodName = "getColorLibrary"
  //   let ObjId = await this.invoke(methodName, this.OBJID);
  //   let obj = new ColorLibrary();
  //   obj.ObjId = ObjId;
  //   return obj;
  // }

  /**
   * 设置颜色RGB值
   *
   * @memberof Color
   * @param {byte} r - 红色分量
   * @param {byte} g - 绿色分量
   * @param {byte} b - 蓝色分量
   * @returns {Promise<Void>}
   */
  async setRGB(r: number, g: number, b: number): Promise<void> {
    let methodName = "setRGB"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [r, g, b];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取颜色RGB值
   *
   * @memberof Color
   * @param {byte} r - 红色分量
   * @param {byte} g - 绿色分量
   * @param {byte} b - 蓝色分量
   * @returns {Promise<Void>}
   */
  async getRGB(r: number, g: number, b: number): Promise<void> {
    let methodName = "getRGB"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [r, g, b];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 取红色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getRed(): Promise<number> {
    let methodName = "getRed"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取绿色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getGreen(): Promise<number> {
    let methodName = "getGreen"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取蓝色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getBlue(): Promise<number> {
    let methodName = "getBlue"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置颜色的CMYK值
   *
   * @memberof Color
   * @param {byte} c - 青色分量
   * @param {byte} m - 品色分量
   * @param {byte} y - 黄色分量
   * @param {byte} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async setCmyk(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "setCmyk"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取颜色的CMYK值
   *
   * @memberof Color
   * @param {byte} c - 青色分量
   * @param {byte} m - 品色分量
   * @param {byte} y - 黄色分量
   * @param {byte} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async getCmyk(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "getCmyk"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取CMYK颜色的青色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getCyan(): Promise<number> {
    let methodName = "getCyan"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取CMYK颜色的品色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getMagenta(): Promise<number> {
    let methodName = "getMagenta"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取CMYK颜色的黑色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getBlack(): Promise<number> {
    let methodName = "getBlack"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取黄色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getYellow(): Promise<number> {
    let methodName = "getYellow"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置RGB颜色
   *
   * @memberof Color
   * @param {long} colorRef
   * @returns {Promise<Void>}
   */
  async setColorRef(colorRef: number): Promise<void> {
    let methodName = "setColorRef"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [colorRef];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取RGB颜色
   *
   * @memberof Color
   * @returns {byte}
   */
  async getColorRef(): Promise<number> {
    let methodName = "getColorRef"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置基准CMYK值
   *
   * @memberof Color
   * @param {byte} c - 青色分量
   * @param {byte} m - 品色分量
   * @param {byte} y - 黄色分量
   * @param {byte} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async setBaseCmyk(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "setBaseCmyk"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取基准CMYK值
   *
   * @memberof Color
   * @param {byte} c - 青色分量
   * @param {byte} m - 品色分量
   * @param {byte} y - 黄色分量
   * @param {byte} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async getBaseCmyk(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "getBaseCmyk"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取基准青色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getBaseCyan(): Promise<number> {
    let methodName = "getBaseCyan"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取基准品色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getBaseMagenta(): Promise<number> {
    let methodName = "getBaseMagenta"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取基准黄色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getBaseYellow(): Promise<number> {
    let methodName = "getBaseYellow"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取基准黑色分量
   *
   * @memberof Color
   * @returns {byte}
   */
  async getBaseBlack(): Promise<number> {
    let methodName = "getBaseBlack"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置专色数目
   *
   * @memberof Color
   * @param {long} 
   * @returns {Promise<Void>}
   */
  async setSpecialColorCount(count: number): Promise<void> {
    let methodName = "setSpecialColorCount"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [count];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取专色数目
   *
   * @memberof Color
   * @returns {long}
   */
  async getSpecialColorCount(): Promise<number> {
    let methodName = "getSpecialColorCount"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置每个专色号的值(浓度)
   *
   * @memberof Color
   * @param {long} index - 专色序号,0开始
   * @param {byte} val - 专色号的值(0~255)
   * @returns {Promise<Void>}
   */
  async setSpecialColorValue(index: number, val: number): Promise<void> {
    let methodName = "setSpecialColorValue"
    let paramsTypeStr = [this.LONG, this.BYTE];
    let paramsStr = [index, val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获得指定专色号的值(0-255)
   *
   * @memberof Color
   * @param {long} index - 专色序号,0开始
   * @returns {Promise<Void>} 指定专色号的值
   */
  async getSpecialColorValue(index: number): Promise<number> {
    let methodName = "getSpecialColorValue"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * update到库中
   *
   * @memberof Color
   * @returns {boolean}
   */
  async updateToLib(): Promise<boolean> {
    let methodName = "updateToLib"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 颜色还原(还原的值来源于颜色库中对应的颜色号)
   *
   * @memberof Color
   * @returns {boolean}
   */
  async restore(): Promise<boolean> {
    let methodName = "restore"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 设置颜色RGB值
   *
   * @memberof Color
   * @param {byte} r - 红色分量
   * @param {byte} g - 绿色分量
   * @param {byte} b - 蓝色分量
   * @returns {Promise<Void>}
   */
  async setRGBNew(r: number, g: number, b: number): Promise<void> {
    let methodName = "setRGBNew"
    let paramsTypeStr = [this.BYTE, this.BYTE, this.BYTE];
    let paramsStr = [r, g, b];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取颜色RGB值
   *
   * @memberof Color
   * @param {int} r - 红色分量
   * @param {int} g - 绿色分量
   * @param {int} b - 蓝色分量
   * @returns {Promise<Void>}
   */
  async getRGBNew(r: number, g: number, b: number): Promise<void> {
    let methodName = "getRGBNew"
    let paramsTypeStr = [this.INT, this.INT, this.INT];
    let paramsStr = [r, g, b];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 取红色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getRedNew(): Promise<number> {
    let methodName = "getRedNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取绿色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getGreenNew(): Promise<number> {
    let methodName = "getGreenNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取蓝色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getBlueNew(): Promise<number> {
    let methodName = "getBlueNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置颜色的CMYK值
   *
   * @memberof Color
   * @param {int} c - 青色分量
   * @param {int} m - 品色分量
   * @param {int} y - 黄色分量
   * @param {int} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async setCmykNew(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "setCmykNew"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.INT];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取颜色的CMYK值
   *
   * @memberof Color
   * @param {int} c - 青色分量
   * @param {int} m - 品色分量
   * @param {int} y - 黄色分量
   * @param {int} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async getCmykNew(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "getCmykNew"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.INT];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 取青色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getCyanNew(): Promise<number> {
    let methodName = "getCyanNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取品色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getMagentaNew(): Promise<number> {
    let methodName = "getMagentaNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取黑色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getBlackNew(): Promise<number> {
    let methodName = "getBlackNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 取黄色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getYellowNew(): Promise<number> {
    let methodName = "getYellowNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置基准CMYK值
   *
   * @memberof Color
   * @param {int} c - 青色分量
   * @param {int} m - 品色分量
   * @param {int} y - 黄色分量
   * @param {int} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async setBaseCmykNew(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "setBaseCmykNew"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.INT];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取基准CMYK值
   *
   * @memberof Color
   * @param {int} c - 青色分量
   * @param {int} m - 品色分量
   * @param {int} y - 黄色分量
   * @param {int} k - 黑色分量
   * @returns {Promise<Void>}
   */
  async getBaseCmykNew(c: number, m: number, y: number, k: number): Promise<void> {
    let methodName = "getBaseCmykNew"
    let paramsTypeStr = [this.INT, this.INT, this.INT, this.INT];
    let paramsStr = [c, m, y, k];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取基准青色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getBaseCyanNew(): Promise<number> {
    let methodName = "getBaseCyanNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取基准品色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getBaseMagentaNew(): Promise<number> {
    let methodName = "getBaseMagentaNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取基准黄色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getBaseYellowNew(): Promise<number> {
    let methodName = "getBaseYellowNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取基准黑色分量
   *
   * @memberof Color
   * @returns {int}
   */
  async getBaseBlackNew(): Promise<number> {
    let methodName = "getBaseBlackNew"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置每个专色号的值(浓度)
   *
   * @memberof Color
   * @param {long} index - 专色序号,0开始
   * @param {int} val - 专色号的值(0~255)
   * @returns {Promise<Void>}
   */
  async setSpecialColorValueNew(index: number, val: number): Promise<void> {
    let methodName = "setSpecialColorValueNew"
    let paramsTypeStr = [this.LONG, this.INT];
    let paramsStr = [index, val];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获得指定专色号的值(0-255)
   *
   * @memberof Color
   * @param {long} index - 专色序号,0开始
   * @returns {Promise<Void>}
   */
  async getSpecialColorValueNew(index: number): Promise<number> {
    let methodName = "getSpecialColorValueNew"
    let paramsTypeStr = [this.LONG];
    let paramsStr = [index];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

}
