import {UrlUtils} from '../utils/UrlUtils'
import request from '../utils/request'

const url = new UrlUtils()
/**
 * 注意： 启动测试用例前先运行一次CommonController中login测试用用例
 */
describe('#test server', () => {

    it('#test POST /atcs/getOrderByLimit', done => {
        return new Promise(resolve => {
            request({
                url: url.serverUri('/atcs/getOrderByLimit?pageIndex=0&size=5&order=desc'),
                method: 'get'
            }).then(res => {
                resolve(res)
            })
        }).then(res => {
            console.log(res)
            done()
        })
    })

    // it('#test GET /atcs/get/1', () => {
    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/get/1'),
    //             method: 'get',
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res['_data'].length)
    //     })
    // });

    // it('#test POST /atcs/get', () => {
    //     return new Promise((resolve, reject) => {
    //         const data = {
    //             _id: 1
    //         }
    //         request({
    //             url: url.serverUri('/atcs/get'),
    //             method: 'post',
    //             data
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res['_data'].length)
    //     })
    // });

    // it('#test GET /atcs/getByTagId/4d4c36a9-cd2c-469b-810e-ff4db0a8d046', () => {
    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/getByTagId/4d4c36a9-cd2c-469b-810e-ff4db0a8d046'),
    //             method: 'get',
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res['_data'].length)
    //     })
    // });

    // it('#test GET /atcs/getAll', () => {
    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/getAll'),
    //             method: 'get',
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res['_data'].length)
    //     })
    // });

    // it('#test GET /getByLimit', () => {
    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/getByLimit?pageIndex=0&size=5'),
    //             method: 'get',
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res['_data'].length)
    //     })
    // });

    // it('#test insert /atcs/insert', function () {
    //     let formData = {
    //         author: 'Ming',
    //         content: '增加测试内容',
    //         title: '增加测试标题',
    //         dynamicTags: [{
    //             tag_name: '增加标签1'
    //         }, {
    //             tag_name: '增加标签2'
    //         }, {
    //             tag_id: '04ce389d-1d07-43e4-9921-1ec8d72f55e9',
    //             tag_name: 'jqeury'
    //         }]
    //     };

    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/insert'),
    //             method: 'post',
    //             data: formData
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res)
    //     })
    // });

    // it('#test delete /atcs/delete/998', function () {
    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/delete/998'),
    //             method: 'delete'
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res)
    //     })
    // });

    // it('#test update /atcs/update', function () {
    //     let formData = {
    //         id: '18e47bf1-9d44-4454-b20e-c39b4f7a003c',
    //         author: 'Ming',
    //         content: 'update测试内容',
    //         title: 'update测试标题',
    //         dynamicTags: [{
    //             tag_name: '中文标签1'
    //         }, {
    //             tag_name: '更新中文标签2'
    //         }, {
    //             tag_id: '04ce389d-1d07-43e4-9921-1ec8d72f55e9',
    //             tag_name: 'jqeury'
    //         }]
    //     };

    //     return new Promise((resolve, reject) => {
    //         request({
    //             url: url.serverUri('/atcs/update'),
    //             method: 'put',
    //             data: formData
    //         }).then(r => {
    //             resolve(r)
    //         })
    //     }).then(res => {
    //         console.log(res)
    //     })
    // });
});
