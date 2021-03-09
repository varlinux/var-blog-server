export default class StringUtils {

    /**
     * 判断数组对象是否为空
     * @param obj
     */
    static isNotEmptyArr(obj: any): Boolean {
        return typeof obj === "object" && obj.length > 0
    }

    /**
     * 判断对象是否为空
     * @param obj
     */
    static isNotEmptyObj(obj: Object): Boolean {
        return typeof obj === "object" && JSON.stringify(obj) !== "{}"
    }

    /**
     * 格式化Sql语句
     * @param sql
     */
    static formatSql(sql: string): string {
        return sql.replace(/(\s|[\r\n])+/g, ' ')
    }
}
