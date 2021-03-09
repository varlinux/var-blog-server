export default class SecretUtils {
    /**
     * 加密
     * @param str
     */
    static encrypt(str: string): string {
        return Buffer.from(str).toString('base64')
    }

    /**
     * 解密
     * @param str
     */
    static decode(str: string): string {
        return Buffer.from(str, 'base64').toString()
    }
}