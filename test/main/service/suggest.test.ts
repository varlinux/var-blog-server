import {expect} from 'chai';
import {BlogSuggestService} from '../../../src/main/service/BlogSuggestService';
import BlogSuggest from "../../../src/main/dao/BlogSuggest";
import DateUtils from "../../../src/main/utils/DateUtils";

const userService = new BlogSuggestService();
// In Terminal input `mocha test/server/main/service/tag.test.ts --require ts-node/register`
describe("#BlogSuggestService", function () {
    it('should getAll', function () {
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

    it('should insert', function () {
        let suggest = new BlogSuggest();
        suggest.sgt_id = '999';
        suggest.sgt_contact = '123124124';
        suggest.sgt_create_time = DateUtils.now();

        return new Promise((resolve, reject) => {
            userService.insert(suggest).then(data => {
                resolve(data)
            })
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
});

