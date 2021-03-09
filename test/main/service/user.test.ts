import {expect} from 'chai';
import BlogUserService = require('../../../src/main/service/BlogUserService');
import BlogUser from "../../../src/main/dao/BlogUser";
import DateUtils from "../../../src/main/utils/DateUtils";

const userService = new BlogUserService.BlogUserService();
// In Terminal input `mocha test/server/main/service/tag.test.ts --require ts-node/register`
describe("#BlogUserService", function () {
    it('should getAll', function (done) {
        return new Promise((resolve, reject) => {
            userService.getAll().then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('should getObjById', function () {
        return new Promise((resolve, reject) => {
            userService.getObjById('1').then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('should insert', function (done) {

        return new Promise((resolve, reject) => {
            let user = new BlogUser();
            user.user_id = '886';
            user.user_name = '陈志明';
            user.user_create_time = DateUtils.now();
            userService.insert(user).then(data => {
                resolve(data)
            });
        }).then(res => {
            console.log(res)
        })
    });

    it('should delete', function () {
        return new Promise((resolve, reject) => {
            userService.delete('999').then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('should test user JSON auto input', function () {
        return new Promise((resolve, reject) => {
            let user = `{"id": 999, "name": "小明", "pwd": "sadfasfdaf"}`
            let u = new BlogUser();
            u.seal(user)
        }).then(res => {
            console.log(res)
        })
    });
});

