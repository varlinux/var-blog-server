import * as fs from "fs"
import * as path from "path"
import {UrlUtils} from './utils/UrlUtils'
import DateUtils from './utils/DateUtils'
import axios from 'axios'
const url = new UrlUtils(3259)
describe('CommonController Testing', () => {
    it('should getToken', async function () {
        // 清空旧token
        const filePath = path.resolve(__dirname, './common/token')
        const fd = await fs.openSync(filePath, 'w')
        await fs.writeFileSync(fd, '', 'utf8')
        await axios.post(url.serverLogin('/admin/login'), {
            data: 'bWluZyFAI21pbmcjQCFibG9nIUAjTWluZ0AxMjM='
        }).then(d => {
            if (d) {
                fs.writeFileSync(fd, d.data._token, 'utf8')
            }
        })
        return fs.closeSync(fd)
    });

    it('should get now Date', function () {
        let nowDate = DateUtils.now()
        console.log(`nowDate : `, nowDate)
        nowDate = DateUtils.format2(null, new Date())
        console.log(`nowDate : `, nowDate)
    });
})
