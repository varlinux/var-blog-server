import {UrlUtils} from '../utils/UrlUtils'
import request from '../utils/request'
const url = new UrlUtils()

describe('#test express app', () => {
    describe('#test server', () => {
        it('#test GET /links/get/1', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/links/get/1'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test GET /links/getAll', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/links/getAll'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test insert /links/insert', function () {
            let formData = {
                id: 666,
                name: "Ming",
                test_data: 'test'
            };

            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/links/insert'),
                    method: 'post',
                    data: formData
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test delete /links/delete/999', function () {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/links/delete/999'),
                    method: 'delete',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });
    });
});
