export default class BaseDto {

    // 将封装后的对象返回成字符串，用于slq拼接
    public arr2String(t, args): string {
        let res = '';
        args.forEach((item, index, arr) => {
            if (t === "v" && typeof item === "string" && item) {
                item = '"' + item.trim() + '"';
            }
            res += item + ','
        });
        return res.replace(/,+/g, ',')
            .replace(/,$/g, "")
    }

    // 封装对象
    public sealProp(that: this, daoName: string, obj: any): any {
        obj = typeof obj === "string" ? JSON.parse(obj) : obj;
        let arr = [], temp;
        for (let key in obj) {
            temp = "_" + daoName + "_" + key
            if (this.isExist(that, temp)){
                that[temp] = obj[key]
            }
        }
        return that
    }

    // 判断某个字段是否在对象中的键中
    public isExist(obj: any, str: string): boolean {
        for (let key in obj) {
            if (str === key) {
                return true
            }
        }
        return false
    }
    // 移除下划线变量中的特殊字符（包括下划线）
    public pureLowerStr(str: string): string {
        return str.replace(/\W|_/g, '').toLowerCase()
    }

    // 封装对象的值
    public packValue(that: this): Array<string> {
        let res = []
        for (let key in that) {
            if (typeof that[key] !== 'function' && that[key]) {
                res.push(that[key])
            }
        }
        return res
    }
    // 封装对象的键
    public packKey(that: this): Array<string> {
        let res = []
        for (let key in that) {
            if (typeof that[key] !== 'function' && that[key]){
                res.push(this.getPrivateVariable(key))
            }
        }
        return res
    }

    // 返回对象的私有属性并消除首个下划线
    public getPrivateVariable(str: string): string {
        return str.replace(/^\_/, '')
    }


    public keys(): string {
        let res = this.packKey(this)
        return this.arr2String('k', res)
    }

    public keyArr(): Array<string> {
        return this.packKey(this)
    }

    public values(): string {
        let res = this.packValue(this)
        return this.arr2String('v', res)
    }

    public valueArr(): Array<string> {
        return this.packValue(this)
    }
}
