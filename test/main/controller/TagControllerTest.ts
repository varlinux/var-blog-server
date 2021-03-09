import {UrlUtils} from '../utils/UrlUtils'
import request from '../utils/request'

const url = new UrlUtils()

describe('#test express app', () => {
    describe('#test server', () => {
        it('#test GET /tags/get/03156ce7-0fa7-49ef-854a-b3e6019146f6', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/tags/get/03156ce7-0fa7-49ef-854a-b3e6019146f6'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test GET /tags/getAll', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/tags/getAll'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test insert /tags/insert', function () {
            let formData = {
                id: 6,
                name: "Ming"
            };
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/tags/insert'),
                    method: 'post',
                    data: formData
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test delete /tags/delete/999', function () {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/tags/delete/999'),
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
