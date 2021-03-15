import DBConnection from '../db/mysqlConn'
import StringUtils from "../utils/StringUtils";
import {BaseService} from "./BaseService";
import BlogArticle from "../dao/BlogArticle";
import uuid from '../utils/UuidUtils'
import date from '../utils/DateUtils'
import {TagEnum, ArticleEnum} from "../enum/MessageEnum";

export default class BlogArticleService implements BaseService {

    private dbConnection = new DBConnection();

    private defaultSelectPrototype = 'ba.atc_id, ba.atc_title, ba.atc_content, ba.atc_create_time, ba.atc_edit_time, ba.atc_author'

    private defaultDateFormat = '%Y-%m-%d %H:%i:%S'

    async delete(key: string, val: string): Promise<any> {
        let isExit
        try {
            await this.getObjByKey('atc_id', val).then(res => isExit = StringUtils.isNotEmptyArr(res))
            if (isExit) {
                let sql = `delete from blog_article where ${key}=?`
                return await this.dbConnection.queryByPool(sql, val)
            }
            return Promise.reject(ArticleEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_DELETE_FAILURE)
        }
    }

    async getAll(): Promise<any> {
        try {
            let sql = `select ${this.defaultSelectPrototype} from blog_article as ba`
            return await this.dbConnection.queryByPool(sql)
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async getObjByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select ${this.defaultSelectPrototype} from blog_article as ba where ${key}=?`
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_SELECT_FAILURE)
        }
    }

    /**
     * 通过标签编号获取所有文章
     * @param tagId
     */
    async getAllByTagId(tagId: string): Promise<any> {
        try {
            let sql = `SELECT ${this.defaultSelectPrototype}
                from blog_article as ba 
                where ba.atc_id=(
                    select DISTINCT rat.at_atc_id 
                    from rel_article_tag as rat 
                    where rat.at_tag_id=?
                )`
            return await this.dbConnection.queryByPool(StringUtils.formatSql(sql), tagId)
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async getByLimit(pageIndex: number, size: number): Promise<any> {
        try {
            let sql = `
                SELECT ${this.defaultSelectPrototype}
                FROM blog_article as ba
                ORDER BY DATE_FORMAT(ba.atc_create_time, '${this.defaultDateFormat}') DESC
                LIMIT ?,?`
            return this.dbConnection.queryByPool(StringUtils.formatSql(sql), [pageIndex, size])
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async getOrderByLimit(order: string, size: number, index: number): Promise<unknown> {
        try {
            let sql = `SELECT ${this.defaultSelectPrototype}
            FROM blog_article as ba
            WHERE ba.atc_status = 1
            ORDER BY DATE_FORMAT(ba.atc_create_time, '${this.defaultDateFormat}') ${order === 'DESC' ? 'DESC' : 'ASC'}
            LIMIT ?,?`
            return this.dbConnection.queryByPool(StringUtils.formatSql(sql), [index, size])
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_SELECT_FAILURE)
        }

    }

    async insert(obj: BlogArticle): Promise<any> {
        let isExit
        try {
            obj.atc_id = await uuid.generateUUID1()
            obj.atc_create_time = await date.now()
            obj.atc_status = 1
            await this.getObjByKey('atc_id',obj.atc_id).then(res => isExit = StringUtils.isNotEmptyArr(res));
            if (!isExit) {
                let sql = `insert into blog_article (${obj.keys()}) values(${obj.values()})`;
                return await this.dbConnection.queryByPool(sql)
            }
            return Promise.reject(TagEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_INSERT_FAILURE)
        }
    }

    async update(obj: BlogArticle): Promise<any> {
        let isExit;
        try {
            obj.atc_edit_time = await date.now()
            console.log(`obj.atc_edit_time : ${obj.atc_edit_time}`)
            await this.getObjByKey('atc_id', obj.atc_id).then(res => isExit = StringUtils.isNotEmptyArr(res));
            if (isExit) {
                let sql = `update blog_article 
                    set atc_title = '${obj.atc_title}', atc_content = '${obj.atc_content}',
                        atc_edit_time = '${obj.atc_edit_time}', tag_ids = '${obj.tag_ids}',
                        atc_author = '${obj.atc_author}'
                    where atc_id = '${obj.atc_id}'`
                return await this.dbConnection.queryByPool(await StringUtils.formatSql(sql))
            }
            return Promise.reject(ArticleEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(ArticleEnum.OPERATE_UPDATE_FAILURE)
        }
    }

}
