import {UrlUtils} from '../utils/UrlUtils'
import request from '../utils/request'
const url = new UrlUtils()
/**
 * 注意： 启动测试用例前先运行一次CommonController中login测试用用例
 */
describe('#ImgControllerTest测试类执行', () => {
    it('#test DELETE /delete/:id', () => {
        return new Promise((resolve, reject) => {
            request({
                url: url.serverUri('/img/delete/2690121dfc198a583fd0317a3d6b9ea1'),
                method: 'delete',
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
    it('#test DELETE /getAll', () => {
        return new Promise((resolve, reject) => {
            request({
                url: url.serverUri('/img/getAll'),
                method: 'get',
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
});
