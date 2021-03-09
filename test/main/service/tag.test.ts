import {expect} from 'chai';
import {BlogTagService} from '../../../src/main/service/BlogTagService';
import BlogTag from "../../../src/main/dao/BlogTag";
import DateUtils from "../../../src/main/utils/DateUtils";

const tagService = new BlogTagService();
// In Terminal input `mocha test/server/main/service/tag.test.ts --require ts-node/register`
describe("#BlogLinkService", function () {
    it('should getAll', function () {
        return new Promise((resolve, reject) => {
            tagService.getAll().then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('should getTagById', function () {
        return new Promise((resolve, reject) => {
            tagService.getObjById('1').then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('should insert', function () {
        return new Promise((resolve, reject) => {
            let t = new BlogTag();
            tagService.insert(t).then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('should delete', function () {
        return new Promise((resolve, reject) => {
            tagService.delete('999').then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });
});

