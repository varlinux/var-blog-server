import {UrlUtils} from '../utils/UrlUtils'
import request from '../utils/request'
import DateUtils from '../utils/DateUtils'
const url = new UrlUtils()

describe('#test express app', () => {
    describe('#test server', () => {
        it('#test GET /sgts/get/1', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/sgts/get/1'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test GET /sgts/getAll', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/sgts/getAll'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test insert /sgts/insert', async function () {
            let formData = {
                id: "666",
                content: "666666666666",
                contact: 'czm_1314@qq.com',
                edit_time: await DateUtils.now(),
                create_time: await DateUtils.now()
            };
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/sgts/insert'),
                    method: 'post',
                    data: formData
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test delete /sgts/delete/999', function () {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/sgts/delete/20'),
                    method: 'delete'
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });
    });
});
