/**
 * @content 空间参考系对象功能组件
 * @author fangqi 2021-08-22
 */
import ObjectManager from "../components/ObjectManager";

/**
 * @class SRefData
 * @description android空间参考系对象功能组件
 */
export default class SRefData extends ObjectManager {

  getClassName(): String {
    return this.CLASS_SREF_DATA;
  }

  /**
   * 构造一个新的SRefData对象。
   * @memberof SRefData
   * @returns {Promise.<SRefData>}
   */
  static async createInstance(): Promise<SRefData> {
		let thisObj = new SRefData();
		thisObj.ObjId = await thisObj.create();
		return thisObj;
	}

  /**
   * 获取空间坐标系在地理数据库中的唯一标识
   * @memberOf SRefData
   * @returns {Promise<*>}
   */
  async getSRSID(): Promise<number> {
    let methodName = "getSRSID"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间坐标系在地理数据库中的唯一标识
   * @memberOf SRefData
   * @param {int} srsID 空间坐标系在地理数据库中的唯一标识
   * @returns {Promise<*>}
   */
  async setSRSID(srsID: number): Promise<void> {
    let methodName = "setSRSID"
    let paramsTypeStr = [this.INT];
    let paramsStr = [srsID];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取名称
   * @memberOf SRefData
   * @returns{String}
   */
  async getSRSName(): Promise<String> {
    let methodName = "getSRSName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置名称
   * @memberOf SRefData
   * @param {String} name 名称
   * @returns {Promise<*>}
   */
  async setSRSName(name: String): Promise<void> {
    let methodName = "setSRSName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [name];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取别名
   * @memberof SRefData
   * @returns {String}
   */
  async getAlias(): Promise<String> {
    let methodName = "getAlias"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置别名
   * @memberof SRefData
   * @param {String} alias 别名
   * @returns {Promise<*>}
   */
  async setAlias(alias: String): Promise<void> {
    let methodName = "setAlias"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [alias];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取缩写
   * @memberof SRefData
   * @returns {String}
   */
  async getAbbreviation(): Promise<String> {
    let methodName = "getAbbreviation"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置缩写
   * @memberof SRefData
   * @param {String} abbreviation 缩写
   * @returns {Promise<*>}
   */
  async setAbbreviation(abbreviation: String): Promise<void> {
    let methodName = "setAbbreviation"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [abbreviation];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取备注
   * @memberof SRefData
   * @returns {String}
   */
  async getRemark(): Promise<String> {
    let methodName = "getRemark"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置备注
   * @memberof SRefData
   * @param {String} remark 备注
   * @returns {Promise<*>}
   */
  async setRemark(remark: String): Promise<void> {
    let methodName = "setRemark"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [remark];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取类型
   * @memberof SRefData
   * @returns {int}
   */
  async getType() {
    let methodName = "getType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置空间参考系类型
   * @memberof SRefData
   * @param {int} type 类型
   * @returns {Promise<*>}
   */
  async setType(type: any): Promise<void> {
    let methodName = "setType"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_TYPE];
    let paramsStr = [type];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地理坐标系名称
   * @memberof SRefData
   * @returns {String}
   */
  async getGCSName(): Promise<String> {
    let methodName = "getGCSName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置地理坐标系名称
   * @param {String} gcsName 地理坐标系名称
   * @memberof SRefData
   * @returns {Promise<*>}
   */
  async setGCSName(gcsName: String): Promise<void> {
    let methodName = "setGCSName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [gcsName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取椭球体索引
   * @memberof SRefData
   * @returns {int}
   */
  async getSpheroid() {
    let methodName = "getSpheroid"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置椭球体索引
   * @memberof SRefData
   * @param {int} spheroid  椭球体索引
   * @returns {Promise<*>}
   */
  async setSpheroid(spheroid: any): Promise<void> {
    let methodName = "setSpheroid"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_EP_TYPE];
    let paramsStr = [spheroid];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地球椭球长轴
   * @memberof SRefData
   * @returns {double}
   */
  async getSemiMajorAxis(): Promise<number> {
    let methodName = "getSemiMajorAxis"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置地球椭球长轴
   * @memberof SRefData
   * @param {double} newVal 地球椭球长轴
   * @returns {Promise<*>}
   */
  async setSemiMajorAxis(newVal: number): Promise<void> {
    let methodName = "setSemiMajorAxis"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地球椭球短轴
   * @memberof SRefData
   * @returns {double}
   */
  async getSemiMinorAxis(): Promise<number> {
    let methodName = "getSemiMinorAxis"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置地球椭球短轴
   * @memberof SRefData
   * @param {double} b 地球椭球短轴
   * @returns {Promise<*>}
   */
  async setSemiMinorAxis(newVal: number): Promise<void> {
    let methodName = "setB"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取地球椭球扁率
   * @memberof SRefData
   * @returns {double}
   */
  async getFlattening(): Promise<number> {
    let methodName = "getFlattening"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置地球椭球扁率
   * @memberof SRefData
   * @param {double} af 地球椭球扁率
   * @returns {Promise<*>
   */
  async setFlattening(newVal: number): Promise<void> {
    let methodName = "setFlattening"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [newVal];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取本初子午线(Prime Meridian)名称
   * @memberof SRefData
   * @returns {String}
   */
  async getPrimeMeridian(): Promise<String> {
    let methodName = "getPrimeMeridian"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置本初子午线(Prime Meridian)名称
   * @memberof SRefData
   * @param {String} pmName 本初子午线(Prime Meridian)名称
   * @returns {Promise<*>}
   */
  async setPrimeMeridian(pmName: String): Promise<void> {
    let methodName = "setPrimeMeridian"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [pmName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取本初子午线与国标偏移量(DMS)
   * @memberof SRefData
   * @returns {double}
   */
  async getPMOffset(): Promise<number> {
    let methodName = "getPMOffset"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置本初子午线与国标偏移量(DMS)
   * @memberof SRefData
   * @param {double} pmOffset 本初子午线与国标偏移量(DMS)
   * @returns {Promise<*>}
   */
  async setPMOffset(pmOffset: number): Promise<void> {
    let methodName = "setPMOffset"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [pmOffset];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取几何码
   * @memberof SRefData
   * @returns {String}
   */
  async getGeoCode(): Promise<String> {
    let methodName = "getGeoCode"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置几何码
   * @memberof SRefData
   * @param {String} geoCode 几何码
   * @returns {Promise<*>}
   */
  async setGeoCode(geoCode: String): Promise<void> {
    let methodName = "setGeoCode"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [geoCode];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取投影坐标系名称
   * @memberof sRefData
   * @returns {String}
   */
  async getPCSName(): Promise<String> {
    let methodName = "getPCSName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置投影坐标系名称
   * @memberof SRefData
   * @param {String} pcsName 投影坐标系名称
   * @returns {Promise<*>}
   */
  async setPCSName(pcsName: String): Promise<void> {
    let methodName = "setPCSName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [pcsName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取投影名
   * @memberof SRefData
   * @returns {String}
   */
  async getProjName(): Promise<String> {
    let methodName = "getProjName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置投影名
   * @memberof SRefData
   * @param {String} projName 投影名
   * @returns {Promise<*>}
   */
  async setProjName(projName: String): Promise<void> {
    let methodName = "setProjName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [projName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据投影类型索引
   * @memberof SRefData
   * @returns {int}
   */
  async getProjType() {
    let methodName = "getProjType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置空间数据投影类型索引
   * @memberof SRefData
   * @param {int} projType 空间数据投影类型索引
   * @returns {Promise<*>}
   */
  async setProjType(projType: any): Promise<void> {
    let methodName = "setProjType"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_PRJ_TYPE];
    let paramsStr = [projType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取投影分带类型
   * @memberof SRefData
   * @returns {int}
   */
  async getZoneType() {
    let methodName = "getZoneType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置投影分带类型
   * @memberof SRefData
   * @param {int} zoneType 投影分带类型
   * @returns {Promise<*>}
   */
  async setZoneType(zoneType: any): Promise<void> {
    let methodName = "setZoneType"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_ZONE_TYPE];
    let paramsStr = [zoneType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取投影带号
   * @memberof SRefData
   * @returns {int}
   */
  async getZone(): Promise<number> {
    let methodName = "getZone"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置投影带号
   * @memberof SRefData
   * @param {int} zone 投影带号
   * @returns {Promise<*>}
   */
  async setZone(zone: number): Promise<void> {
    let methodName = "setZone"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [zone];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据中央经线经度
   * @memberof SRefData
   * @returns {double}
   */
  async getCentralMeridian(): Promise<number> {
    let methodName = "getCentralMeridian"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据中央经线经度
   * @memberof SRefData
   * @param {double} lon 设置空间数据中央经线经度
   * @returns {Promise<*>}
   */
  async setCentralMeridian(lon: number): Promise<void> {
    let methodName = "setCentralMeridian"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [lon];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据双经线1 经度
   * @memberof SRefData
   * @returns {double}
   */
  async getLongitudeOf1st(): Promise<number> {
    let methodName = "getLongitudeOf1st"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据双经线1经度
   * @memberof SRefData
   * @param {double} lon1 空间数据双经线1经度
   * @returns {Promise<*>}
   */
  async setLongitudeOf1st(lon1: number): Promise<void> {
    let methodName = "setLongitudeOf1st"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [lon1];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据双经线2经度
   * @memberof SRefData
   * @returns {double}
   */
  async getLongitudeOf2nd(): Promise<number> {
    let methodName = "getLongitudeOf2nd"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据双经线2 经度
   * @memberof SRefData
   * @param {double} lon2 空间数据双经线2 经度
   * @returns {Promise<*>}
   */
  async setLongitudeOf2nd(lon2: number): Promise<void> {
    let methodName = "setLongitudeOf2nd"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [lon2];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据投影原点纬度
   * @memberof SRefData
   * @returns {double}
   */
  async getLatitudeOfOrigin(): Promise<number> {
    let methodName = "getLatitudeOfOrigin"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据投影原点纬度
   * @memberof SRefData
   * @param {double} lat 空间数据投影原点纬度
   * @returns {Promise<*>}
   */
  async setLatitudeOfOrigin(lat: number): Promise<void> {
    let methodName = "setLatitudeOfOrigin"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [lat];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据双纬线1 纬度
   * @memberof SRefData
   * @returns {double}
   */
  async getStandardParallel1(): Promise<number> {
    let methodName = "getStandardParallel1"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据双纬线1 纬度
   * @memberof SRefData
   * @param {double} lat1 空间数据双纬线1 纬度
   * @returns {Promise<*>}
   */
  async setStandardParallel1(lat1: number): Promise<void> {
    let methodName = "setStandardParallel1"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [lat1];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据双纬线2 纬度
   * @memberof SRefData
   * @returns {double}
   */
  async getStandardParallel2(): Promise<number> {
    let methodName = "getStandardParallel2"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据双纬线2 纬度
   * @memberof SRefData
   * @param {double} lat2 空间数据双纬线2 纬度
   * @returns {Promise<*>}
   */
  async setStandardParallel2(lat2: number): Promise<void> {
    let methodName = "setStandardParallel2"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [lat2];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取投影东偏
   * @memberof SRefData
   * @returns {double}
   */
  async getFalseEasting(): Promise<number> {
    let methodName = "getFalseEasting"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置投影东偏
   * @memberof SRefData
   * @param {double} falseE 投影东偏
   * @returns {Promise<*>}
   */
  async setFalseEasting(falseE: number): Promise<void> {
    let methodName = "setFalseEasting"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [falseE];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取投影北偏
   * @memberof SRefData
   * @returns {double}
   */
  async getFalseNorthing(): Promise<number> {
    let methodName = "getFalseNorthing"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置投影北偏
   * @memberof SRefData
   * @param {double} falseN 投影北偏
   * @returns {Promise<*>}
   */
  async setFalseNorthing(falseN: number): Promise<void> {
    let methodName = "setFalseNorthing"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [falseN];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图纸坐标原点在投影坐标系中的x值
   * @memberof SRefData
   * @returns {double}
   */
  async getX(): Promise<number> {
    let methodName = "getX"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 获取图纸坐标原点在投影坐标系中的x值
   * @memberof SRefData
   * @param {double} x 图纸坐标原点在投影坐标系中的x值
   * @returns {Promise<*>}
   */
  async setX(x: number): Promise<void> {
    let methodName = "setX"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [x];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取图纸坐标原点在投影坐标系中的y值
   * @memberof SRefData
   * @returns {double}
   */
  async getY(): Promise<number> {
    let methodName = "getY"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置图纸坐标原点在投影坐标系中的y值
   * @memberof SRefData
   * @param {double} y 图纸坐标原点在投影坐标系中的y值
   * @returns {Promise<*>}
   */
  async setY(y: number): Promise<void> {
    let methodName = "setY"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [y];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取数据维数
   * @memberof SRefData
   * @returns {int}
   */
  async getDimension(): Promise<number> {
    let methodName = "getDimension"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置数据维数
   * @memberof SRefData
   * @param {int} dimension 数据维数
   * @returns {Promise<*>}
   */
  async setDimension(dimension: number): Promise<void> {
    let methodName = "setDimension"
    let paramsTypeStr = [this.SHORT];
    let paramsStr = [dimension];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据水平坐标单位：长度
   * @memberof SRefData
   * @returns {int}
   */
  async getUnit() {
    let methodName = "getUnit"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置空间数据水平坐标单位：长度
   * @memberof SRefData
   * @param {int} unit 空间数据水平坐标单位：长度
   * @returns {Promise<*>}
   */
  async setUnit(unit: any): Promise<void> {
    let methodName = "setUnit"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_LEN_UNIT];
    let paramsStr = [unit];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取米/unit
   * @memberof SRefData
   * @returns {double}
   */
  async getUnitFactor(): Promise<number> {
    let methodName = "getUnitFactor"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置米/unit
   * @memberof SRefData
   * @param {double} unitFactor 米/unit
   * @returns {Promise<*>}
   */
  async setUnitFactor(unitFactor: number): Promise<void> {
    let methodName = "setUnitFactor"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [unitFactor];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据水平坐标单位：角度
   * @memberof SRefData
   * @returns {int}
   */
  async getAngUnit(){
    let methodName = "getAngUnit"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置空间数据水平坐标单位：角度
   * @memberof SRefData
   * @param {int} angUnit 空间数据水平坐标单位：角度
   * @returns {Promise<*>}
   */
  async setAngUnit(angUnit: any): Promise<void> {
    let methodName = "setAngUnit"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_LEN_UNIT];
    let paramsStr = [angUnit];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取弧度/unit
   * @memberof SRefData
   * @returns {double}
   */
  async getAngUnitFactor(): Promise<number> {
    let methodName = "getAngUnitFactor"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置弧度/unit
   * @memberof SRefData
   * @param {double} angUnitFactor 弧度/unit
   * @returns {Promise<*>}
   */
  async setAngUnitFactor(angUnitFactor: number): Promise<void> {
    let methodName = "setAngUnitFactor"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [angUnitFactor];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据水平比例尺倒数
   * @memberof SRefData
   * @returns {double}
   */
  async getRate(): Promise<number> {
    let methodName = "getRate"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据水平比例尺倒数
   * @memberof SRefData
   * @param {double} rate 空间数据水平比例尺倒数
   * @returns {Promise<*>}
   */
  async setRate(rate: number): Promise<void> {
    let methodName = "setRate"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [rate];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据大地水准面类型
   * @memberof SRefData
   * @returns {int}
   */
  async getLevelType(){
    let methodName = "getLevelType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置空间数据大地水准面类型
   * @memberof SRefData
   * @param {int} levelType 空间数据大地水准面类型
   * @returns {Promise<*>}
   */
  async setLevelType(levelType: any): Promise<void> {
    let methodName = "setLevelType"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_ELEVTYPE];
    let paramsStr = [levelType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据大地水准面名称
   * @memberof SRefData
   * @returns {String}
   */
  async getLevelName(): Promise<String> {
    let methodName = "getLevelName"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置空间数据大地水准面名称
   * @memberof SRefData
   * @param {String} levelName 空间数据大地水准面名称
   * @returns {Promise<*>}
   */
  async setLevelName(levelName: String): Promise<void> {
    let methodName = "setLevelName"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [levelName];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据大地水准面与参考椭球面之间的高差
   * @memberof SRefData
   * @returns {double}
   */
  async getN(): Promise<number> {
    let methodName = "getN"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据大地水准面与参考椭球面之间的高差
   * @memberof SRefData
   * @param {double} n 空间数据大地水准面与参考椭球面之间的高差
   * @returns {Promise<*>}
   */
  async setN(n: number): Promise<void> {
    let methodName = "setN"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [n];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据投影平面与大地水准面的高差
   * @memberof SRefData
   * @returns {double}
   */
  async getH(): Promise<number> {
    let methodName = "getH"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据投影平面与大地水准面的高差
   * @memberof SRefData
   * @param {double} h 空间数据投影平面与大地水准面的高差
   * @returns {Promise<*>}
   */
  async setH(h: number): Promise<void> {
    let methodName = "setH"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [h];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据垂向比例尺倒数
   * @memberof SRefData
   * @returns {double}
   */
  async getVRate(): Promise<number> {
    let methodName = "getVRate"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 设置空间数据垂向比例尺倒数
   * @memberof SRefData
   * @param {double} vRate 设置空间数据垂向比例尺倒数
   * @returns {Promise<*>}
   */
  async setVRate(vRate: number): Promise<void> {
    let methodName = "setVRate"
    let paramsTypeStr = [this.DOUBLE];
    let paramsStr = [vRate];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取空间数据垂向数据单位
   * @memberof SRefData
   * @returns {int}
   */
  async getVUnit(){
    let methodName = "getVUnit"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置空间数据垂向数据单位
   * @memberof SRefData
   * @param {int} vUnit 空间数据垂向数据单位
   * @returns {Promise<*>}
   */
  async setVUnit(vUnit: any): Promise<void> {
    let methodName = "setVUnit"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_LEN_UNIT];
    let paramsStr = [vUnit];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取垂直数据类型
   * @memberof SRefData
   * @returns {int}
   */
  async getVerticalDatumType(){
    let methodName = "getVerticalDatumType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 设置垂直数据类型
   * @memberof SRefData
   * @param {int} verticalDatumType 垂直数据类型
   * @returns {Promise<*>}
   */
  async setVerticalDatumType(verticalDatumType: any): Promise<void> {
    let methodName = "setVerticalDatumType"
    let paramsTypeStr = [this.ENUM + this.CLASS_SREF_VDATUM_TYPE];
    let paramsStr = [verticalDatumType];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 克隆空间参考系对象
   * @memberof SRefData
   * @returns {Promise<SRefData>}
   */
  async clone(): Promise<SRefData> {
    let methodName = "clone"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new SRefData();
    obj.ObjId = ObjId;
    return obj;
  }

}
