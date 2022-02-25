/**
 * @content 空间分析功能组件
 * @author fangqi 2021-09-25
 */

import ObjectManager from "../components/ObjectManager";
import type OverlayOption from "./OverlayOption";
import type AnnotationCls from "../geodatabase/AnnotationCls";
import type BufferOption from "./BufferOption";
import type MultipleRingBufferOption from "./MultipleRingBufferOption";
import type DissolveOption from "./DissolveOption";
import type ClipLineOption from "./ClipLineOption";
import type RebuildOption from "./RebuildOption";
import type LinkLineOption from "./LinkLineOption";
import type DeleteIdenticalOption from "./DeleteIdenticalOption";
import type JoinEdgeOption from "./JoinEdgeOption";
import type EliminateRegOption from "./EliminateRegOption";
import type SFeatureCls from "../geodatabase/SFeatureCls";
import type ObjectIDs from "../geoobject/ObjectIDs";
import type GeoVarLine from "../geoobject/GeoVarLine";
import type GeoLine from "../geoobject/GeoLine";

/**
 * @class SpatialAnalysis
 * @description 空间分析
 */
export default class SpatialAnalysis extends ObjectManager {

	getClassName(): String {
		return this.CLASS_SPATIAL_ANALYSIS;
	}

	/**
	* 构造一个新的 SpatialAnalysis 对象。
	* @memberOf SpatialAnalysis
	* @returns {Promise<SpatialAnalysis>}
	*/
	static async createInstance(): Promise<SpatialAnalysis> {
		let thisObj = new SpatialAnalysis();
		thisObj.ObjId = await thisObj.create();
		return thisObj;
	}

	/**
	 * 获取容差
	 * @memberOf SpatialAnalysis
	 * @return {Promise<double>}容差
	 */
	async getTolerance(): Promise<number> {
		let methodName = "getTolerance"
		return await this.invoke(methodName, this.NUMBER);
	}

	/**
	 * 设置容差
	 * @memberOf SpatialAnalysis
	 * @param {double} tolerance 容差
	 * @return {Promise<number>}计算得出的缓冲区
	 */
	async setTolerance(tolerance: number): Promise<number> {
		let methodName = "setTolerance"
		let paramsTypeStr = [this.DOUBLE];
		let paramsStr = [tolerance];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 判别空间位置,空间查询/判别函数
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls0 - 待查询的源要素类0
	 * @param srcSFCls1 - 待查询的源要素类1
	 * @param desSFCls - 结果要素类,与源要素类1一致
	 * @param {SpatialQueryType} opType - 查询/判别类型，EQUAL-相等; DISJOINT-相离；INTERSECT-相交; TOUCH-相邻; CROSS-相穿; WITHIN-包含于； CONTAIN-包含; OVERLAY-相叠
	 * @param {byte} flag - 是否进行属性合并1/0: 合并/不合并
	 * @return {Promise<number>} 大于0:成功 ; 小于等于0:失败
	 */
	async spatialQuery(srcSFCls0: SFeatureCls, srcSFCls1: SFeatureCls, desSFCls: SFeatureCls, opType: any, flag: number): Promise<number> {
		let methodName = "spatialQuery"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.ENUM + this.CLASS_SPATIAL_QUERY_TYPE, this.BYTE];
		let paramsStr = [srcSFCls0.ObjId, srcSFCls1.ObjId, desSFCls.ObjId, opType, flag];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 判别空间位置,空间查询/判别函数 ,对数据库类型数据的判别空间位置（兼容本地数据）
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls0 - 待查询的源要素类0
	 * @param srcSFCls1 - 待查询的源要素类1
	 * @param desSFCls - 结果要素类,与源要素类1一致
	 * @param {SpatialQueryType} opType - 查询/判别类型，EQUAL-相等; DISJOINT-相离；INTERSECT-相交; TOUCH-相邻； CROSS-相穿; WITHIN-包含于； CONTAIN-包含; OVEcRLAY-相叠
	 * @param {byte} flag - 是否进行属性合并1/0: 合并/不合并
	 * @return {Promise<number>} 大于0:成功 ; 小于等于0:失败
	 */
	async spatialQueryEx(srcSFCls0: SFeatureCls, srcSFCls1: SFeatureCls, desSFCls: SFeatureCls, opType: any, flag: number): Promise<number> {
		let methodName = "spatialQueryEx"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.ENUM + this.CLASS_SPATIAL_QUERY_TYPE, this.BYTE];
		let paramsStr = [srcSFCls0.ObjId, srcSFCls1.ObjId, desSFCls.ObjId, opType, flag];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 自相交剪断
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls - 待处理要素类
	 * @param oids - 结果对象id列表
	 * @return {Promise<number>} 大于0:成功 ; 小于等于0:失败
	 */
	async selfCrossClip(srcSFCls: SFeatureCls, oids: ObjectIDs): Promise<number> {
		let methodName = "selfCrossClip"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_OBJECT_IDS];
		let paramsStr = [srcSFCls.ObjId, oids.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 区要素类转线要素类
	 * @memberOf SpatialAnalysis
	 * @param srcRegSFCls 区要素类
	 * @param desLinSFCls - 线要素类
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async regToLin(srcRegSFCls: SFeatureCls, desLinSFCls: SFeatureCls): Promise<number> {
		let methodName = "regToLin"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS];
		let paramsStr = [srcRegSFCls.ObjId, desLinSFCls.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 获取多边形的公共边
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls 待处理要素类
	 * @param desSFCls 结果要素类
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async getOverlapLins(srcSFCls: SFeatureCls, desSFCls: SFeatureCls): Promise<number> {
		let methodName = "getOverlapLins"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS];
		let paramsStr = [srcSFCls.ObjId, desSFCls.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 获取多边形的非公共边
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls 待处理要素类
	 * @param desSFCls 结果要素类
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async getOutLines(srcSFCls: SFeatureCls, desSFCls: SFeatureCls): Promise<number> {
		let methodName = "getOutLines"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS];
		let paramsStr = [srcSFCls.ObjId, desSFCls.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 获取多边形节点
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls 待处理要素类
	 * @param desSFCls 结果要素类
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async getNode(srcSFCls: SFeatureCls, desSFCls: SFeatureCls): Promise<number> {
		let methodName = "getNode"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS];
		let paramsStr = [srcSFCls.ObjId, desSFCls.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 拓扑成区
	 * @memberOf SpatialAnalysis
	 * @param srcLinSFCls - 原始线要素类
	 * @param srcLinOids - 传入将要成区的线oids，默认值为null对整个图层成区
	 * @param desRegSFCls - 结果区要素类
	 * @param desRegOids - 结果要素ID序列号，为null不传出
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async topoRegion(srcLinSFCls: SFeatureCls, srcLinOids: ObjectIDs, desRegSFCls: SFeatureCls, desRegOids: ObjectIDs): Promise<number> {
		let methodName = "topoRegion"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_OBJECT_IDS, this.CLASS_SFEATURE_CLS, this.CLASS_OBJECT_IDS];
		let paramsStr = [srcLinSFCls.ObjId, srcLinOids.ObjId, desRegSFCls.ObjId, desRegOids.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 区要素类分割
	 * @memberOf SpatialAnalysis
	 * @param srcRegSFCls - 待分割的区要素类
	 * @param srcRegOids - 待分割区的oids
	 * @param spliteLin - 分割线，只有一条分割线
	 * @param desRegOids - 分割后生成区的ID序列号，为null时不传出
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async spliteRegion(srcRegSFCls: SFeatureCls, srcRegOids: ObjectIDs, spliteLin: GeoLine, desRegOids: ObjectIDs): Promise<number> {
		let methodName = "spliteRegion"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_OBJECT_IDS, this.CLASS_GEO_LINE, this.CLASS_OBJECT_IDS];
		let paramsStr = [srcRegSFCls.ObjId, srcRegOids.ObjId, spliteLin.ObjId, desRegOids.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 简单要素类搜子区
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls - 要素类
	 * @param oids - 需要搜子区的IDs列表 null表示全局搜子区
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async searchSubReg(srcSFCls: SFeatureCls, oids: ObjectIDs): Promise<number> {
		let methodName = "searchSubReg"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_OBJECT_IDS];
		let paramsStr = [srcSFCls.ObjId, oids.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 由多边形要素类产生点要素类
	 * @memberOf SpatialAnalysis
	 * @param srcRegSFcls - 多边形要素类
	 * @param desPntSFCls - 结果点要素类
	 * @param partRegOids - 几何多边形的id序列
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async createLabelCls(srcRegSFcls: SFeatureCls, desPntSFCls: SFeatureCls, partRegOids: ObjectIDs): Promise<number> {
		let methodName = "createLabelCls"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.CLASS_OBJECT_IDS];
		let paramsStr = [srcRegSFcls.ObjId, desPntSFCls.ObjId, partRegOids.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 将点要素类对象与多边形要素类合并
	 * @memberOf SpatialAnalysis
	 * @param srcLabelSFCls - 点要素类
	 * @param desRegSFCls - 多边形要素
	 * @param {byte} delNoLabelReg - 是否删除无效区
	 * @param partRegOids - 几何多边形的oids
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	async combineLabelCls(srcLabelSFCls: SFeatureCls, desRegSFCls: SFeatureCls, delNoLabelReg: number, partRegOids: ObjectIDs): Promise<number> {
		let methodName = "combineLabelCls"
		let paramsTypeStr = [this.CLASS_SFEATURE_CLS, this.CLASS_SFEATURE_CLS, this.BYTE, this.CLASS_OBJECT_IDS];
		let paramsStr = [srcLabelSFCls.ObjId, desRegSFCls.ObjId, delNoLabelReg, partRegOids.ObjId];
		return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
	}

	/**
	 * 归整区或线要素类的边线
	 * @memberOf SpatialAnalysis
	 * @param srcSFCls 待处理要素类
	 * @param desSFCls 结果要素类
	 * @param tolerance 容差半径
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	static async trimSFeatureCls(srcSFCls: SFeatureCls, desSFCls: SFeatureCls, tolerance: number): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "trimSFeatureCls"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.DOUBLE];
		let paramsStr = [srcSFCls.ObjId, desSFCls.ObjId, tolerance];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 叠加分析
	 * @memberOf SpatialAnalysis
	 * @param sfcls0 - 被裁简单要素类
	 * @param sfcls1 - 裁剪框简单要素类
	 * @param dsfcls - 目的简单要素类
	 * @param option - 叠加分析参数
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【图形参数】 1.由SPOverlayOption设置的infoOptType决定
	 * 1.1结果图元只来自被裁图层，则结果图元的图形参数与被裁图元保持一致
	 * 1.2结果图元只来自裁剪框图层，则结果图元的图形参数与裁剪框图元保持一致
	 * 1.3结果图元即来自被裁图层又来自裁剪框图层，则结果图元的图形参数由用户指定的infoOptType决定
	 * 【属性规则】
	 * 1.根据图层1和图层2的类型可进行16种类型的叠加分析，结果属性来源图层如下表：

	 * |图层1 |图层2 | 求并 | 相交 |相减 |判别 |更新|对称差|
	 * |------|------|------|------|-----|-----|----|------|
	 * | 点 | 点 | | | | | | |
	 * | 点 | 线 | |√1+2 | | | | |
	 * | 点 | 区 | |√1+2 |√1 | | | |
	 * | 线 | 点 | | | | | | |
	 * | 线 | 线 |√1+2 | | |√1+2| | |
	 * | 线 | 区 |√1+2 |√1+2 |√1 |√1+2| | |
	 * | 区 | 点 | |√1 |√1 | | | |
	 * | 区 | 线 | |√1 | | | | |
	 * | 区 | 区 |√1+2 |√1+2 |√1 |√1+2|√1 |√1+2 |
	 * | | | | | | | | |

	 * 1.1图中“√”表示sfcls0和sfcls1可进行的运算，无“√”表示不支持该运算
	 * 1.2数字表示pfDes的属性字段来源：
	 * 1) 1：表示sfcls0
	 * 2) 2：表示sfcls1
	 * 3) 1+2：表示结果的属性结构来自sfcls0和sfcls1
	 * 2.属性结构设计规则：
	 * 1)属性结构只来自被裁： 系统默认字段 + <扩展字段> + 被裁图层用户字段
	 * 2)属性结构来自被裁和裁剪框：系统默认字段 + <扩展字段> + 被裁图层用户字段 + 裁剪框图层用户字段
	 * 3.属性处理详解：
	 * 3.1系统默认字段：
	 * 1)区图层："mpArea"、"mpPerimeter"、"mpLayer"
	 * 2)线图层："mpLength"、"mpLayer"
	 * 3)点图层："mpLayer"
	 * 3.2扩展字段：
	 * 1)属性结构只来自被裁：扩展字段部分为空，不添加新的字段
	 * 2)属性结构来自被裁和裁剪框：扩展字段部分添加"GIS_FID_Class1" "GIS_FID_Class2"字段，点线求交还会添加"GIS_PntLinDis"
	 * 3)字段含义：
	 * a)"GIS_FID_Class1": 来自被 裁 图层的几号（OID）图元
	 * b)"GIS_FID_Class2": 来自裁剪框图层的几号（OID）图元
	 * c)"GIS_PntLinDis": 点到线的距离
	 * 3.3被裁图层用户字段：
	 * 1)剔除掉被裁图层中的系统默认字段，将剩余的用户字段添加到目的图层中
	 * 3.4裁剪框图层用户字段：
	 * 1)剔除掉裁剪框图层中的系统默认字段，将剩余的用户字段添加到目的图层中
	 * 2)重名修改规则：在重名字段名后添加0，如果还重名则改为添加1，如果还重名则改为添加2，依次类推
	 * 举例说明：ID --> ID0 --> ID1 --> ID2 --> ID3 --> ID4
	 * 4.不处理属性：
	 * 4.1 dsfcls的属性结构只有系统默认字段(不保留用户字段)
	 * 【详细说明】
	 * 1.容差:
	 * 1.1SPOverlayOption中容差默认值为0.0001
	 * 1.2对于经纬度数据，需要传入合适的容差值，按1度约等于100公里计算，那么0.0001米约等于0.000000001度
	 * 因此建议使用0.000000001作为容差值
	 * 2复合要素：
	 * 2.1所有叠加种类都支持处理复合要素
	 * 2.2复合要素判断规则：一个结果图元挂两个属性，分别为sfcls0的图元ID和sfcls1的图元ID，如果两个结果图元
	 * 所带的属于一致（即都是由sfcls0的x图元和sfcls1的y图元叠加生成的），那么我们将这两个图元视为复合要素
	 * 2.3举例说明：区区求交，处理复合要素。其中，结果图元1：来自sfcls0的5号图元同时来自来自的6号图元
	 * 结果图元2：来自sfcls0的5号图元同时来自来自的6号图元。则图元1和2就构成复合要素
	 * 2.4处理复合要素：将结果图元中属性完全一致的图元视为复合要素，添加到结果图层
	 * 2.5不处理复合要素：将结果中原本属于同一复合要素的图元拆分为单个图元添加到结果图层
	 */
	static async overLay(sfcls0: SFeatureCls, sfcls1: SFeatureCls, dsfcls: SFeatureCls, option: OverlayOption): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "overLay"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_OVERLAY_OPTION];
		let paramsStr = [sfcls0.ObjId, sfcls1.ObjId, dsfcls.ObjId, option.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 裁剪分析
	 * @memberOf SpatialAnalysis
	 * @param sfcls0 - 被裁简单要素类
	 * @param sfcls1 - 裁剪框简单要素类
	 * @param dsfcls - 目的简单要素类
	 * @param option - 裁剪分析分析参数
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【图形参数】
	 * 1.SPOverlayOption设置的infoOptType决定
	 * 【属性规则】
	 * 1.裁剪分析的结果属性来源图层如下表：
	 * 
	 * |图层1 |图层2 |内裁|外裁|
	 * |------|------|----|----|
	 * | 点 | 区 |√1 |√1 |
	 * | 线 | 区 |√1 |√1 |
	 * | 区 | 区 |√1 |√1 |
	 * 
	 * 1.1图中“√”表示sfcls0和sfcls1可进行的运算，无“√”表示不支持该运算
	 * 1.2数字表示pfDes的属性字段来源：
	 * 1) 1：表示sfcls0
	 * 2) 2：表示sfcls1
	 * 3) 1+2：表示结果的属性结构来自sfcls0和sfcls1
	 * 2.属性结构设计规则：系统默认字段 + <扩展字段> + 被裁图层用户字段
	 * 3.属性处理详解：
	 * 3.1系统默认字段：
	 * 1)区图层："mpArea"、"mpPerimeter"、"mpLayer"
	 * 2)线图层："mpLength"、"mpLayer"
	 * 3)点图层："mpLayer"
	 * 【详细说明】
	 * 1.函数支持被裁元素为多点、多线、多区的裁剪
	 * 2.更多说明，详见spOverLay的接口注释
	 */
	static async clip(sfcls0: SFeatureCls, sfcls1: SFeatureCls, dsfcls: SFeatureCls, option: OverlayOption): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "clip"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_OVERLAY_OPTION];
		let paramsStr = [sfcls0.ObjId, sfcls1.ObjId, dsfcls.ObjId, option.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 
	 * @memberOf SpatialAnalysis
	 * @param acls - 被裁注记类
	 * @param sfcls - 裁剪框简单要素类
	 * @param dacls - 目的注记类
	 * @param option - 裁剪参数
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 */
	static async clipAnnotation(acls: AnnotationCls, sfcls: SFeatureCls, dacls: AnnotationCls, option: OverlayOption): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "clipAnnotation"
		let paramsTypeStr = [thisObj.CLASS_ANNOTATION_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_ANNOTATION_CLS, thisObj.CLASS_OVERLAY_OPTION];
		let paramsStr = [acls.ObjId, sfcls.ObjId, dacls.ObjId, option.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 缓冲区分析
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 缓冲参数
	 * @param oids - OID列表（不为空则只对该OID列表图元进行缓冲）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 1.不合并的缓冲："系统默认字段" + <扩展字段> + "用户字段"
	 * 2. 合并的缓冲："系统默认字段" + <扩展字段>
	 * 3.属性处理详解：
	 * 3.1系统默认字段：
	 * 1)区图层："mpArea"、"mpPerimeter"、"mpLayer"
	 * 3.2扩展字段：
	 * 3.2.1点、区缓冲：
	 * 1)不合并的缓冲：添加"BUFF_ORIG_FID"、"BUFF_LEFT_DIST"
	 * 2)合并的缓冲： 添加"BUFF_LEFT_DIST"
	 * 3.2.2线缓冲：
	 * 1)不合并的缓冲：添加"BUFF_ORIG_FID"、"BUFF_LEFT_DIST"、"BUFF_RIGHT_DIST"
	 * 2)合并的缓冲： 添加"BUFF_LEFT_DIST"、"BUFF_RIGHT_DIST"
	 * 3.2.3扩展字段含义：
	 * 1)BUFF_ORIG_FID : 源简单要素类的图元OID
	 * 2)BUFF_LEFT_DIST : 缓冲左半径
	 * 3)BUFF_RIGHT_DIST: 缓冲右半径
	 * 【图形参数】
	 * 1.颜色由SPBufferOption参数中的clr决定
	 * 【详细说明】
	 * 1.融合：若isDissolve为True，则将缓冲结果中相交的区融合为一个区(只控制几何对象之间是否进行融合)
	 * 2.复合要素：
	 * 1)对于源中的复合要素，复合元素内各个元素的缓冲结果若有重叠则融合为一个区，没有重叠则不融合，各自成单区
	 * 与isDissolve无关
	 * 2)当处理为复合要素，即multiFeatureOpion=1时（只在isDissolve=True的前提下有作用）,则将缓冲得到的结进行部融合，
	 * 并将融合的结果组合为一个复合要素输出
	 * 3.动态投影：
	 * 1)使用场景：对经纬度坐标下的数据，按线性单位（米）进行缓冲区分析
	 * 2)参数控制：当isDynPrj=true且dynPrjRad缓冲距离值有效时，则采用动态投影的方式进行缓冲分析
	 * 3)误差说明：对于小范围数据（3度带内），结果误差较小。对于跨带数据，结果误差较大
	 * 4)一点建议：对于大范围的跨带经纬度数据，建议用户根据具体业务选择合适的投影先对数据进行投影变换，再进行缓冲
	 */
	static async buffer(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: BufferOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "buffer"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_BUFFER_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 缓冲参数
	 * @param oids - OID列表（不为空则只对该OID列表图元进行缓冲）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 1.不合并的缓冲："系统默认字段" + <扩展字段> + "用户字段"
	 * 2. 合并的缓冲："系统默认字段" + <扩展字段>
	 * 3.属性处理详解：
	 * 3.1系统默认字段：
	 * 1)区图层："mpArea"、"mpPerimeter"、"mpLayer"
	 * 3.2扩展字段：
	 * 3.2.1点、区缓冲：
	 * 1)不合并的缓冲：添加"BUFF_ORIG_FID"、"BUFF_LEFT_DIST"
	 * 2)合并的缓冲： 添加"BUFF_LEFT_DIST"
	 * 3.2.2线缓冲：
	 * 1)不合并的缓冲：添加"BUFF_ORIG_FID"、"BUFF_LEFT_DIST"、"BUFF_RIGHT_DIST"
	 * 2)合并的缓冲： 添加"BUFF_LEFT_DIST"、"BUFF_RIGHT_DIST"
	 * 3.2.3扩展字段含义：
	 * 1)BUFF_ORIG_FID : 源简单要素类的图元OID
	 * 2)BUFF_LEFT_DIST : 缓冲左半径
	 * 3)BUFF_RIGHT_DIST: 缓冲右半径
	 * 【图形参数】
	 * 1.由SPMuringBufferOption参数中的clr决定
	 * 【详细说明】
	 * 1.融合：
	 * 1.1)若isDissolve为True，则将同一级的缓冲结果中相交的区融合为一个区(只控制几何对象之间是否进行融合)
	 * 1.2)若isDissolve为False，对图元逐一按缓冲半径由小到大进行缓冲，第一级生成最小缓冲区，后续缓冲区将是围
	 * 绕最小缓冲区的环形（不对重叠图元进行合并）
	 * 2.复合要素：
	 * 2.1)对于源中的复合要素，复合元素内各个元素的缓冲结果若有重叠则融合为一个区，没有重叠则不融合，各自成单区
	 * 与isDissolve无关
	 * 2.2)当处理为复合要素，即MultiFeatureOpr=1时（只在isDissolve=True的前提下有作用）,则将同一级缓冲得到的结进行融合，
	 * 并将融合的结果组合为一个复合要素输出
	 * 3.缓冲半径列表：
	 * 3.1)含义：缓冲半径用distances记录，distances中的每个值代表各级的缓冲半径
	 * 3.2)注意：distances的值并非两级缓冲之间的距离差！！！
	 */
	static async multipleRingBuffer(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: MultipleRingBufferOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "multipleRingBuffer"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_MULTIPLE_RING_BUFFER_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 融合区（合并区）
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 融合参数
	 * @param oids - OID列表（非null:局部融合; null:全局融合）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 1.属性结构：系统默认字段 + 用户字段
	 * 2.属性记录：
	 * a.局部融合：图形参数继承oids列表中oid靠前的区
	 * eg: 传入oid列表： 1、2、3、4。 1、2融合得到新区A，3、4融合得到新区B，则A继承1的属性记录，B继承3的属性记录
	 * b.全局融合：融合后的区A从融合成区A的若干区中随机选择一条属性记录作为A的属性
	 * 
	 * 【图形参数】
	 * 1.局部融合：图形参数继承oids列表中oid靠前的区
	 * eg: 传入oid列表： 1、2、3、4。 1、2融合得到新区A，3、4融合得到新区B，则A继承1的图形参数，B继承3的图形参数
	 * 2.全局融合：融合后的区A从融合成区A的若干区中随机选择一个图形参数作为A的图形参数
	 * 3.用户可以通过SPDissolveOption参数中的clr决定生成的区的颜色，如果设clr的值为-1则不指定颜色
	 * 
	 * 【详细说明】
	 * 1.融合后的几何形态：
	 * 1)相离几何：结果几何形态保持不变
	 * 2)相邻几何：结果几何融合为一个图元
	 * 3)重叠几何：结果几何融合为一个图元
	 * 2.应用场景：
	 * 根据"局部融合/全局融合"和"按属性融合/不按属性融合",可组合产生4种使用场景：
	 * 1)局部按属性融合：将OID列表指定的图元按属性字段值，划分为几个"融合图元集合"（一堆图元），然后对这几个集合分别进行融合
	 * 2)局部不按属性融合：将OID列表指定的图元作为一个"融合图元集合"，对其进行融合
	 * 3)全局按属性融合：将输入简单要素类的所有图元按属性字段值，划分为几个"融合图元集合"（一堆图元），然后对这几个集合分别进行融合
	 * 4)全局不按属性融合：将输入简单要素类的所有图元作为一个"融合图元集合"，对其进行融合
	 * 
	 * 3.srcSfcls不能与desSfcls为同一简单要素类，否则pfDes既有融合之前的区也有融合之后的区！
	 */
	static async dissolve(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: DissolveOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "dissolve"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_DISSOLVE_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 剪断线（别名：打断线）
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 剪断线参数
	 * @param oids - OID列表（非null:局部剪断 ; null:全局剪断）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 1.属性结构：
	 * 1)输出到目的图层：目的图层的属性结构：系统默认字段 + 用户字段
	 * 2)输出到 源图层：源图层的属性结构不变
	 * 2.属性记录：结果图元的属性记录来自对应的原始线图层的对应线的属性
	 * 【图形参数】
	 * 1.对应源线的图形参数
	 * 【详细说明】
	 * 1.应用场景：
	 * 根据"局部剪断/全局剪断"和"输出到源图层/输出到目的图层",可组合产生4种使用场景：
	 * 1)局部剪断，输出到源图层：
	 * oids不为空、desSfcls为空，将对oids中的线进行剪断，剪断后结果将回写到pfSrc中，并删除oids中的线
	 * 2)局部剪断，输出到目的图层：
	 * oids不为空、desSfcls不为空，将对oids中的线进行相交剪断，剪断后结果将写到desSfcls中
	 * 3)全局剪断，输出到源图层：
	 * oids为空、desSfcls为空，将对pfSrc中的所有线进行剪断，剪断后结果将回写到pfSrc中，并删除pfSrc中原有的线
	 * 4)全局剪断，输出到目的图层：
	 * oids为空、desSfcls不为空，将对pfSrc中的所有区进行拓扑剪断，剪断后结果将写到desSfcls中
	 */
	static async clipLine(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: ClipLineOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "clipLine"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_CLIP_LINE_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 剪断线（别名：打断线）
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 剪断线参数
	 * @param oids - OID列表（非null:局部剪断 ; null: 全局剪断）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 1.属性结构：
	 * 1)输出到目的图层：目的图层的属性结构：系统默认字段 + 用户字段
	 * 2)输出到 源图层：源图层的属性结构不变
	 * 2.属性记录：结果图元的属性记录来自对应的原始线图层的对应区的属性
	 * 1)重 叠部分属性记录：继承原来相交的区中面积大的属性，同时更新默认属性
	 * 2)非重叠部分属性记录：继承原来区的属性，同时更新默认属性
	 * 【图形参数】
	 * 1.对应源区的图形参数
	 * 【详细说明】
	 * 1.应用场景：
	 * 根据"局部重建/全局重建"和"输出到源图层/输出到目的图层",可组合产生4种使用场景：
	 * 1)局部重建，输出到源图层：
	 * oids不为空、desSfcls为空，将对oids中的区进行拓扑重建，重建后结果将回写到srcSfcls中，并删除oids中的区
	 * 2)局部重建，输出到目的图层：
	 * oids不为空、desSfcls不为空，将对oids中的区进行拓扑重建，重建后结果将写到desSfcls中
	 * 3)全局重建，输出到源图层：
	 * oids为空、desSfcls为空，将对srcSfcls中的所有区进行拓扑重建，重建后结果将回写到srcSfcls中，并删除srcSfcls中原有的区
	 * 4)全局重建，输出到目的图层：
	 * oids为空、desSfcls不为空，将对srcSfcls中的所有区进行拓扑重建，重建后结果将写到desSfcls中
	 * 2.扩展参数：
	 * 1)支持国土三调，提供Rebuild后不删除空隙（空洞）的应用场景。如：带洞区Rebuild后洞的位置生成了新的区
	 * 需将接口扩展参数 RebuildOption.extendOption 赋值为1
	 */
	static async reBuild(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: RebuildOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "reBuild"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_REBUILD_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 连接线（别名：融合线、合并线）
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 连接线参数
	 * @param oids - OID列表（非null:局部连接 ; null:全局连接）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 连接后的线属性继承原线中长度最大的
	 * 【图形参数】
	 * 连接后的线图形参数继承原线中长度最大的
	 * 【详细说明】
	 * 1.应用场景：
	 * 根据"局部连接/全局连接"和"按属性连接/不按属性连接",可组合产生4种使用场景：
	 * 1)局部按属性连接： 将OID列表指定的图元按属性字段值，划分为几个"连接图元集合"（一堆图元），然后对这几个集合分别进行连接
	 * 2)局部不按属性连接：将OID列表指定的图元作为一个"连接图元集合"，对其进行连接
	 * 3)全局按属性连接： 将输入简单要素类的所有图元按属性字段值，划分为几个"连接图元集合"（一堆图元），然后对这几个集合分别进行里连接
	 * 4)全局不按属性连接：将输入简单要素类的所有图元作为一个"连接图元集合"，对其进行连接
	 */
	static async linkLine(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: LinkLineOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "linkLine"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_LINK_LINE_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 消除区（消除碎小区、狭长区）
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 消除参数
	 * @param oids - OID列表（非null:局部消除 ; null:全局消除）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【属性规则】
	 * 1.属性结构：系统默认字段 + 用户字段
	 * 【图形参数】
	 * 1.碎区融合到大区，大区的图形参数不变，碎区被删除
	 * 【详细说明】
	 * 1.该功能将碎小区和狭长区融合到相邻[且属性相同]的面积最大的图斑，从而实现消除碎区的目的
	 * 2.支持对OID列表进行局部消除
	 */
	static async eliminate(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: EliminateRegOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "eliminate"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_ELIMINATE_REG_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 删除相同线
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls - 源简单要素类
	 * @param desSfcls - 目的简单要素类
	 * @param option - 删除参数
	 * @param oids - OID列表（非null:局部消除 ; null:全局消除）
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 【图形参数】
	 * 1.对应源区的图形参数
	 * 【详细说明】
	 * 1.算法作用：检查出在空间上完全相同的重复线，再按用户指定的字段值保留一条重复线
	 * 2.支持三种保留方式：
	 * 1）"保留指定值"：属性字段值传用户指定的值
	 * 2）"保留最大值"：属性字段值传"save_max"; 仅支持数值型的字段，将一组重复线中的该字段值最大的保留，其他的删除
	 * 3）"保留最小值"：属性字段值传"save_min"; 仅支持数值型的字段，将一组重复线中的该字段值最小的保留，其他的删除
	 * 3.使用场景：
	 * 待删除的线必须相同，暂时不支持处理多线
	 */
	static async deleteIdentical(srcSfcls: SFeatureCls, desSfcls: SFeatureCls, option: DeleteIdenticalOption, oids: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "deleteIdentical"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_DELETE_IDENTICAL_OPTION, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls.ObjId, desSfcls.ObjId, option.ObjId, oids.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

	/**
	 * 数据接边
	 * @memberOf SpatialAnalysis
	 * @param srcSfcls0 - 源简单要素类0
	 * @param srcOid0 - OID列表0(null：全局 非null：按OID)
	 * @param srcSfcls1 - 源简单要素类1
	 * @param srcOid1 - OID列表1(null：全局 非null：按OID)
	 * @param joinLine - 接边条
	 * @param option - 接边参数
	 * @param destSfcls0 - 目的简单要素类0(null：直接更新源简单要素类 非null：写到目的简单要素类）
	 * @param destSfcls1 - 目的简单要素类1(null：直接更新源简单要素类 非null：按写到目的简单要素类)
	 * @param outOid0 - 接边OID1(null：不返回 非null：如果destSfcls0不为null返回destSfcls0中的OID，如果destSfcls0为null返回srcSfcls0中的OID)
	 * @param outOid1 - 接边OID2(null：不返回 非null：如果destSfcls1不为null返回destSfcls1中的OID，如果destSfcls1为null返回srcSfcls1中的OID)
	 * @return {Promise<number>}大于0:成功 ; 小于等于0:失败
	 * 
	 * 1.如果目的简单要素类为空，则结果会直接更新源简单要素类（源和目的不能传入同一简单要素类）
	 * 2.如果想把结果写入同一个简单要素类，可以destSfcls0和destSfcls1传入相同简单要素类
	 * 3.如果按OID接边，参数中whereClause不起作用，whereClause只在全局下起作用
	 * 4.不支持接边条joinLine为首尾封闭的环（如果为环，可以将接边条分为两段，分两次接边）
	 */
	static async joinEdge(srcSfcls0: SFeatureCls, srcOid0: ObjectIDs, srcSfcls1: SFeatureCls, srcOid1: ObjectIDs, joinLine: GeoVarLine, option: JoinEdgeOption, destSfcls0: SFeatureCls, destSfcls1: SFeatureCls, outOid0: ObjectIDs, outOid1: ObjectIDs): Promise<number> {
		let thisObj = new SpatialAnalysis();
		let methodName = "joinEdge"
		let paramsTypeStr = [thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_OBJECT_IDS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_OBJECT_IDS, thisObj.CLASS_GEO_VAR_LINE, thisObj.CLASS_JOIN_EDGE_OPTION, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_SFEATURE_CLS, thisObj.CLASS_OBJECT_IDS, thisObj.CLASS_OBJECT_IDS];
		let paramsStr = [srcSfcls0.ObjId, srcOid0.ObjId, srcSfcls1.ObjId, srcOid1.ObjId, joinLine.ObjId, option.ObjId, destSfcls0.ObjId, destSfcls1.ObjId, outOid0.ObjId, outOid1.ObjId];
		return await thisObj.invokeByParam(methodName, paramsTypeStr, paramsStr, thisObj.NUMBER);
	}

}
