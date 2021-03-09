export default class DataUtils {
    static format(fmt, data): string {
        fmt = fmt || "yyyy-MM-dd HH:mm:ss";
        const o = {
            "M+": data.getMonth() + 1, //月份
            "d+": data.getDate(), //日
            "H+": data.getHours(), //小时
            "m+": data.getMinutes(), //分
            "s+": data.getSeconds(), //秒
            "q+": Math.floor((data.getMonth() + 3) / 3), //季度
            "S": data.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (const k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    static now(): string {
        return this.format(null, new Date());
    }
}
