import {UrlUtils} from '../../utils/UrlUtils'
import DataUtils from '../../utils/DateUtils'
import request from '../../utils/request'

const url = new UrlUtils()
/**
 * 注意： 启动测试用例前先运行一次CommonController中login测试用用例
 */
describe('#ArtTypeControllerTest.ts测试类执行', () => {
    it('#test insert /api/artype/insert', () => {
        return new Promise((resolve, reject) => {
            const data = {
                typeList: [
                    {
                        art_type_id: 1,
                        art_type_name: "前端",
                        art_type_desc: "前端面试题",
                        art_type_img_url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3844159717,1258139155&fm=26&gp=0.jpg",
                        art_type_icon: "el-icon-front",
                    },{
                        art_type_id: 2,
                        art_type_name: "后端",
                        art_type_desc: "后端面试题",
                        art_type_img_url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=107778994,1859946788&fm=26&gp=0.jpg",
                        art_type_icon: "el-icon-end",
                    },{
                        art_type_id: 3,
                        art_type_name: "linux/服务器",
                        art_type_desc: "linux/服务器面试题",
                        art_type_img_url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3836981040,3149750115&fm=26&gp=0.jpg",
                        art_type_icon: "el-icon-server",
                    }
                ]
            }
            request({
                url: url.serverUri('/artype/insert'),
                method: 'post',
                data
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
});
