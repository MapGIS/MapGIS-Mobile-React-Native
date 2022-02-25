/**
 * @content 
 * @author 
 */
import { NativeModules } from 'react-native';
import { ClassNameManager } from './ClassNameManager';
let X = NativeModules.BaseJavaModule;

/**
 * @class ObjectManager
 */
export default abstract class ObjectManager extends ClassNameManager {

  ObjId: String = ''

  abstract getClassName(): String;

  async create(): Promise<String> {
    let ObjId = await X.createInstance(
      this.getClassName(),
      this.NULL,
      this.NULL
    );
    return ObjId;
  }

  async createByParam(initParamsType: Array<any>, initParamsStr: Array<any>): Promise<String> {
    let ObjId;
    if (isNullArr(initParamsType) && isNullArr(initParamsStr)) {
      ObjId = await X.createInstance(
        this.getClassName(),
        this.NULL,
        this.NULL
      );
    } else {
      ObjId = await X.createInstance(
        this.getClassName(),
        JSON.stringify(initParamsType),
        JSON.stringify(initParamsStr)
      );
    }
    return ObjId;
  }

  async invoke(methodName: String, resultType: String) {
    if (isNullStr(resultType)) {
      await X.invoke(this.getClassName(), methodName, this.ObjId, this.NULL, this.NULL, this.VOID);
    } else {
      return await X.invoke(this.getClassName(), methodName, this.ObjId, this.NULL, this.NULL, resultType);
    }
  }

  async invokeByParam(methodName: String, initParamsType: Array<any>, initParamsStr: Array<any>, resultType: String) {
    let paramsTypeStr;
    let paramsStr;

    if (isNullArr(initParamsType) && isNullArr(initParamsStr)) {
      paramsTypeStr = this.NULL;
      paramsStr = this.NULL
    } else {
      paramsTypeStr = JSON.stringify(initParamsType);
      paramsStr = JSON.stringify(initParamsStr);
    }

    if (isNullStr(resultType)) {
      await X.invoke(this.getClassName(), methodName, this.ObjId, paramsTypeStr, paramsStr, this.VOID);
    } else {
      return await X.invoke(this.getClassName(), methodName, this.ObjId, paramsTypeStr, paramsStr, resultType);
    }
  }

  async dispose() {
    await X.dispose(this.ObjId);
  }

  async disposeType() {
    await X.dispose(this.getClassName());
  }

  static async disposeTypeByObjID(objID: String) {
    await X.dispose(objID);
  }

  static async disposeAll() {
    await X.disposeAll();
  }

}

export function isNullStr(str: String): boolean {
  return str && str.length <= 0;
}

export function isNullArr(arr: Array<any>): boolean {
  return arr && arr.length <= 0;
}

export function getArrayObjIds(arrayObjects: Array<any>) {
  if (arrayObjects == null) {
    return null;
  } else if (arrayObjects.length <= 0) {
    return new Array<String>();
  } else{
    let arrayObjIds = new Array<String>();
    arrayObjects.forEach((element: any) => {
      arrayObjIds.push(element.ObjId);
    });
    return arrayObjIds;
  }
}