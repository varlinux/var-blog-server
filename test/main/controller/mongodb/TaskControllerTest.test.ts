import {UrlUtils} from '../../utils/UrlUtils'
import DataUtils from '../../utils/DateUtils'
import request from '../../utils/request'

const url = new UrlUtils()
/**
 * 注意： 启动测试用例前先运行一次CommonController中login测试用用例
 */
describe('#TaskControllerTest.ts测试类执行', () => {
    it('#test insert /api/task/insert', () => {
        return new Promise((resolve, reject) => {
            const data = {
                taskList: [
                    {
                        site_task_name: '主题切换',
                        site_task_desc: '首页增加主题切换功能，添加暗夜模式。注意：要考虑弹框和其他组件样式',
                        site_task_type: 1,
                        site_task_icon: 'el-icon-theme',
                        site_task_progress: 0,
                        site_task_level: '1000'
                    },
                    {
                        site_task_name: '增加专栏',
                        site_task_desc: '增加一个专栏tab页，需要增加专栏数据存储对象，将文章分类展示',
                        site_task_type: 1,
                        site_task_icon: 'el-icon-category',
                        site_task_progress: 0,
                        site_task_level: '100'
                    },
                ]
            }
            request({
                url: url.serverUri('/task/insert'),
                method: 'post',
                data
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
    it('#test get /api/task/get', () => {
        return new Promise((resolve, reject) => {
            const dataForm = {
                site_task_status: 1
            }
            request({
                url: url.serverUri('/task/get'),
                method: 'post',
                data: dataForm
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    })
    it('#test put /api/task/update', function () {
        return new Promise((resolve, reject) => {
            const dataForm = {
                "_id": '6017af1dfd89600ad0cbe993',
                // "site_task_name": "主题切换-修",
                "site_task_status": 1,
            }
            request({
                url: url.serverUri('/task/update'),
                method: 'put',
                data: dataForm
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
    it('#test put /api/task/delete', function () {
        return new Promise((resolve) => {
            request({
                url: url.serverUri('/task/delete/6017af1dfd89600ad0cbe993'),
                method: 'delete'
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
});
