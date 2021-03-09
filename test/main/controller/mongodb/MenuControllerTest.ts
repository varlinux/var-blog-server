import {UrlUtils} from '../../utils/UrlUtils'
import DataUtils from '../../utils/DateUtils'
import request from '../../utils/request'

const url = new UrlUtils()
/**
 * 注意： 启动测试用例前先运行一次CommonController中login测试用用例
 */
describe('#MenuControllerTest.ts测试类执行', () => {
    it('#test insert /api/menu/insert', () => {
        return new Promise((resolve, reject) => {
            const data = {
                menuList: [
                    {
                        dir_menu_name: '首页',
                        dir_menu_parent_id: '0',
                        dir_menu_url: '/article/list'
                    },
                    {
                        dir_menu_name: '标签',
                        dir_menu_parent_id: '0',
                        dir_menu_url: '/tag'
                    },
                    {
                        dir_menu_name: '归档',
                        dir_menu_parent_id: '0',
                        dir_menu_url: '/timeline'
                    },
                    {
                        dir_menu_name: '留言板',
                        dir_menu_parent_id: '0',
                        dir_menu_url: '/note'
                    }
                ],
                type: 1
            }
            for (let i in data.menuList) {
                data.menuList[i]['dir_menu_order'] = Number(i)
            }
            console.log(data.menuList)
            request({
                url: url.serverUri('/menu/insert'),
                method: 'post',
                data
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
    it('#test get /api/menu/get/1', () => {
        return new Promise((resolve, reject) => {
            request({
                url: url.serverUri('/menu/get/1'),
                method: 'get'
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    })
    it('#test insert one data /api/menu/insert', () => {
        return new Promise((resolve, reject) => {
            const data = {
                menuList: [{
                    dir_menu_name: '新菜单',
                    dir_menu_order: 5,
                    dir_menu_parent_id: '0'
                }],
                type: 1
            }
            request({
                url: url.serverUri('/menu/insert'),
                method: 'post',
                data
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    })
    it('#test put /api/menu/update', function () {
        return new Promise((resolve, reject) => {
            const newMenu = {
                "_id": "6010d163f294f635cc690b51",
                "dir_menu_name": "新菜单11111",
                "dir_menu_order": 5,
                "dir_menu_parent_id": "0",
                "dir_menu_status": 1,
                "dir_menu_create_time": "2021-01-27 10:35:15",
                "dir_menu_edit_time": "2021-01-27 10:35:15",
                "dir_menu_type": 1,
                "__v": 0
            }
            request({
                url: url.serverUri('/menu/update'),
                method: 'put',
                data: {
                    menuObj: newMenu
                }
            }).then(r => {
                resolve(r)
            })
        }).then(res => {
            console.log(res)
        })
    });
});
