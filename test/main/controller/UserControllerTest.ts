import {UrlUtils} from '../utils/UrlUtils'
import request from '../utils/request'
import SecretUtils from "../../../src/main/utils/SecretUtils";
const url = new UrlUtils()
describe('#test express app', () => {
    describe('#test server', () => {
        it('#test GET /users/get/1', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/users/get/1'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test GET /users/getAll', () => {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/users/getAll'),
                    method: 'get',
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test insert /users/insert', function () {
            let formData = {
                id: 6,
                name: "mmmmmmm"
            };
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/users/insert'),
                    method: 'post',
                    data: formData
                }).then(r => {
                    resolve(r)
                })
            }).then(res => {
                console.log(res)
            })
        });

        it('#test delete /users/delete/999', function () {
            return new Promise((resolve, reject) => {
                request({
                    url: url.serverUri('/users/delete/999'),
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
