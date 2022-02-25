package com.zondy.mapgis.mobile.manager

import org.json.JSONArray

/**
 * @author : fangqi
 * @date: 2021-07-29 18:46
 * Description:
 */
object ConvertUtil {


    //---------------------------------------------------JSONArray
    /**
     * 将JSONArray中的非空、isNotBlank()的String抽出来，返回一个MutableList
     * @receiver JSONArray?
     * @return MutableList<String>?
     */
    fun JSONArray?.toStrList(): MutableList<String>? {
        this ?: return null
        val resultStrList = ArrayList<String>()
        for (iOfSearch in 0 until this.length()) {
            val value = this[iOfSearch]
            if (value is String && value.isNotBlank()) {
                resultStrList.add(value)
            }
        }
        return resultStrList
    }

//-------------------------------------------------------------HashMap

    /**
     * 将任意以String为key的hashMap转换成一个key、value都为String的[HashMap]
     *
     * @param ignoreNullValue 遇到空值是否不转换，默认true：转换时略过空值
     * @param convertNullValueTo 在[ignoreNullValue]=true时生效，用此值指示空值
     * @return
     */
    fun HashMap<String, *>.toStrHashMap(ignoreNullValue: Boolean = true, convertNullValueTo: String = ""): HashMap<String, String> {
        val resultMap = HashMap<String, String>()
        for ((key, value) in this) {
            value?.let {
                resultMap[key] = it.toString()
            } ?: kotlin.run {
                if (ignoreNullValue) {
                    resultMap[key] = convertNullValueTo
                }
            }
        }
        return resultMap
    }

}
