import {expect} from 'chai';
import {BlogArticleService} from "../../../src/main/service/BlogArticleService";
import BlogArticle from "../../../src/main/dao/BlogArticle";
import DateUtils from "../../..//src/utils/DateUtils";

const tagService = new BlogArticleService();
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
        let article = new BlogArticle();
        article.atc_id = '66';
        article.atc_title = 'Mocha + TypeScript 单元测试';
        article.atc_author = '陈志明';
        article.atc_content = `Mocha + TypeScript Mocha + TypeScript Mocha + TypeScript Mocha + TypeScript Mocha + TypeScript 
        Mocha + TypeScript Mocha + TypeScript Mocha + TypeScript Mocha + TypeScript Mocha + TypeScript `;
        article.atc_create_time = DateUtils.now();
        article.atc_edit_time = DateUtils.now();

        // console.log(article.keys(), '\n', article.values());
        return new Promise((resolve, reject) => {
            tagService.insert(article).then(data => {
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

