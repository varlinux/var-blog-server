import * as fs from "fs"
import * as path from "path"
import {UrlUtils} from './utils/UrlUtils'
import DateUtils from './utils/DateUtils'
import request from './utils/request'
const url = new UrlUtils(3000)
describe('CommonController Testing', () => {
    it('should getToken', async function () {
        // 清空旧token
        const filePath = path.resolve(__dirname, './common/token')
        const fd = fs.openSync(filePath, 'w')
        fs.writeFileSync(fd, '', 'utf8')
        return new Promise(async (resolve, reject) => {
            const data = {
                data: 'bWluZyFAI21pbmcjQCFibG9nIUAjTWluZ0AxMjM='
            }
            await request({
                url: url.serverLogin('/admin/login'),
                method: 'post',
                data
            }).then(res => {
                resolve(res)
            })
        }).then(res => {
            fs.writeFileSync(fd, res['_token'], 'utf8')
            fs.closeSync(fd)
        })
    });

    it('should get now Date', function () {
        let nowDate = DateUtils.now()
        console.log(`nowDate : `, nowDate)
        nowDate = DateUtils.format2(null, new Date())
        console.log(`nowDate : `, nowDate)
    });
})