/**
 * 将特殊字符转义
 */
export const forwardMap =  {
    '"' : '&quot;',
    "'"	: '&lsquo;',
    '`' : '&grave;',
}

/**
 * 将自定义字符转化特殊字符
 */
export const reverseMap = {
    '&quot;' : '"' ,
    '&lsquo;' : "'"	,
    '&grave;' : '`' ,
}

export const forwardKeys = Object.keys(forwardMap).join('')

export const reverseKeys = Object.keys(reverseMap).join('|')

/**
 * 特殊字符-》自定义字符
 * @param str 需要转义的字符串
 */
export function forwardTrans (str: string) {
    const reg = new RegExp('[' + forwardKeys + ']', 'g')
    return str.replace(reg, item => {
        return forwardMap[item]
    })
}

/**
 * 自定义字符-》特殊字符
 * @param str 需要转义的字符串
 */
export function reverseTrans (str: string) {
    const reg = new RegExp('(' + reverseKeys + ')', 'g')
    return str.replace(reg, item => {
        return reverseMap[item]
    })
}