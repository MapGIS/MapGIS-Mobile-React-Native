/**
 * @content 文档类
 * @author fangqi 2021-08-28
 */
import DocumentItem from './DocumentItem';
import Maps from './Maps';

/**
 * @class Document
 * @description 文档类
 * @author fangqi 2021-08-28
 */
export default class Document extends DocumentItem {

  getClassName(): String {
    return this.CLASS_DOCUMENT;
  }

  /**
   * 构造一个新的Document对象
   * @memberof Document
   * @returns {Promise<Document>}
   */
  static async createInstance(): Promise<Document> {
    let thisObj = new Document();
    thisObj.ObjId = await thisObj.create();
    return thisObj;
  }

  /**
   * 获取文档标题
   * @memberof Document
   * @returns {String} 文档的标题
   */
  async getTitle(): Promise<String> {
    let methodName = "getTitle"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置文档标题
   * @memberof Document
   * @param {String} title 文档标题
   * @return {Promise<Void>}
   */
  async setTitle(title: String): Promise<void> {
    let methodName = "setTitle"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [title];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文档主题
   * @memberof Document
   * @returns {String} 文档主题
   */
  async getSubject(): Promise<String> {
    let methodName = "getSubject"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置文档主题
   * @memberof Document
   * @param {String} subject 文档主题
   * @return {Promise<Void>}
   */
  async setSubject(subject: String): Promise<void> {
    let methodName = "setSubject"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [subject];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文档作者
   * @memberof Document
   * @returns {String} 文档作者
   */
  async getAuthor(): Promise<String> {
    let methodName = "getAuthor"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置文档作者
   * @memberof Document
   * @param {String} author 文档作者
   * @return {Promise<Void>}
   */
  async setAuthor(author: String): Promise<void> {
    let methodName = "setAuthor"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [author];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文档类别
   * @memberof Document
   * @returns {String} 文档类别
   */
  async getCategory(): Promise<String> {
    let methodName = "getCategory"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置文档类别
   * @memberof Document
   * @param {String} category 文档类别
   * @return {Promise<Void>}
   */
  async setCategory(category: String): Promise<void> {
    let methodName = "setCategory"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [category];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文档关键词
   * @memberof Document
   * @returns {String} 关键词
   */
  async getKeywords(): Promise<String> {
    let methodName = "getKeywords"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置文档关键词
   * @memberof Document
   * @param {String} keywords 文档关键词
   * @return {Promise<Void>}
   */
  async setKeywords(keywords: String): Promise<void> {
    let methodName = "setKeywords"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [keywords];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文档注释
   * @memberof Document
   * @returns {String} 文档注释
   */
  async getComments(): Promise<String> {
    let methodName = "getComments"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 设置文档注释
   * @memberof Document
   * @param {String} comments 文档注释
   * @return {Promise<Void>}
   */
  async setComments(comments: String): Promise<void> {
    let methodName = "setComments"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [comments];
    await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.VOID);
  }

  /**
   * 获取文档是否是新建的
   * @memberof Document
   * @returns {boolean} 是否是新建的
   */
  async getIsNew(): Promise<boolean> {
    let methodName = "getIsNew"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 获取文档项的类型
   * @memberof Document
   * @returns {int} 文档项类型（DocItemType中的类型）
   */
  async getDocItemType() {
    let methodName = "getDocItemType"
    return await this.invoke(methodName, this.ENUM);
  }

  /**
   * 获取文档是否被编辑过
   * @memberof Document
   * @returns {boolean}
   */
  async getIsDirty(): Promise<boolean> {
    let methodName = "getIsDirty"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 新建文档
   * @memberof Document
   * @return {int} 地图文档ID
   */
  async newDocument(): Promise<number> {
    let methodName = "newDocument"
    return await this.invoke(methodName, this.NUMBER);
  }

  /**
   * 打开文件
   * @memberof Document
   * @param {String} filePath 文件路径
   * @returns {int}  1/0 : 成功/失败
   */
  async open(filePath: String): Promise<number> {
    let methodName = "open"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [filePath];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 关闭
   * @memberof Document
   * @param {boolean} save 是否保存
   * @returns {boolean} true/false：成功/失败
   */
  async close(save: boolean): Promise<boolean> {
    let methodName = "close"
    let paramsTypeStr = [this.BOOLEAN];
    let paramsStr = [save];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 保存
   * @memberof Document
   * @returns {boolean} true/false：成功/失败
   */
  async save(): Promise<boolean> {
    let methodName = "save"
    return await this.invoke(methodName, this.BOOLEAN);
  }

  /**
   * 另存为
   * @memberof Document
   * @param {String} filePath 文件保存路径
   * @returns {boolean}  true/false : 成功/失败
   */
  async saveAs(filePath: String): Promise<boolean> {
    let methodName = "saveAs"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [filePath];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.BOOLEAN);
  }

  /**
   * 获取文件路径
   * @memberof Document
   * @returns {String}  文件路径
   */
  async getFilePath(): Promise<String> {
    let methodName = "getFilePath"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取文件版本
   * @memberof Document
   * @returns {String}  获取文件版本
   */
  async getVersion(): Promise<String> {
    let methodName = "getVersion"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 获取地图列表
   * @memberof Document
   * @returns {Object}  获取地图列表对象 (Maps)
   */
  async getMaps(): Promise<Maps> {
    let methodName = "getMaps"
    let ObjId = await this.invoke(methodName, this.OBJID);
    let obj = new Maps();
    obj.ObjId = ObjId;
    return obj;
  }

  /**
   * 保存为XML
   * @memberof Document
   * @returns {String}  成功：返回XML
   */
  async toXML(): Promise<String> {
    let methodName = "toXML"
    return await this.invoke(methodName, this.STRING);
  }

  /**
   * 从XML导入
   * @memberof Document
   * @param {String} strXML XML
   * @returns {int}  成功：返回1
   */
  async fromXML(strXML: String): Promise<number> {
    let methodName = "fromXML"
    let paramsTypeStr = [this.STRING];
    let paramsStr = [strXML];
    return await this.invokeByParam(methodName, paramsTypeStr, paramsStr, this.NUMBER);
  }

  /**
   * 清除编辑
   * @memberof Document
   * @returns {boolean} true/false:成功/失败
   */
  async clearDirty(): Promise<boolean> {
    let methodName = "clearDirty"
    return await this.invoke(methodName, this.BOOLEAN);
  }
}
