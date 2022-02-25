

/**
 * @class ConvertUtil
 * @description 转换工具类
 */
export default class ConvertUtil {

    static colorNumberToRGBA(color: number) {
        const alpha = color >> 24 & 0xff;
        const red = color >> 16 & 0xff;
        const green = color >> 8 & 0xff;
        const blue = color & 0xff;
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

    //转化颜色
    static colorRGBAToNumber(color: String) {
        let values = color
            .replace(/rgba?\(/, '')
            .replace(/\)/, '')
            .replace(/[\s+]/g, '')
            .split(',')
        let a = parseFloat(values[3]),
            r = parseInt(values[0]),
            g = parseInt(values[1]),
            b = parseInt(values[2])
        return (a << 24) | (r << 16) | (g << 8) | b;
    }

}