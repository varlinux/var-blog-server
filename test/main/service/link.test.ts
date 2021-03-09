import {expect} from 'chai';
import {BlogLinkService} from '../../../src/main/service/BlogLinkService';
import BlogLink from "../../../src/main/dao/BlogLink";
import DateUtils from "../../../src/main/utils/DateUtils";

const linkService = new BlogLinkService();
// In Terminal input `mocha test/server/main/service/tag.test.ts --require ts-node/register`
describe("#BlogLinkService", function () {
    it('getAll', function () {
        return new Promise((resolve, reject) => {
            linkService.getAll().then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('getLinkById', function () {
        return new Promise((resolve, reject) => {
            linkService.getObjById('11').then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('insert', function () {
        let link = new BlogLink();
        link.link_id = '999';
        link.link_name = '百度';
        link.link_url = 'http://www.baidu.com';
        link.link_create_time = DateUtils.now();

        return new Promise((resolve, reject) => {
            linkService.insert(link).then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });

    it('delete', function () {
        return new Promise((resolve, reject) => {
            let link_id = '666';
            linkService.delete(link_id).then(data => {
                resolve(data)
            })
        }).then(res => {
            console.log(res)
        })
    });
});

