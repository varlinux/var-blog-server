import DBConnection from '../db/mysqlConn'
import StringUtils from "../utils/StringUtils";
import RelArticleTag from "../dao/RelArticleTag";
import * as ResultDto from "../dao/ResultDto";
import {RelArticleTagEnum} from "../enum/MessageEnum";
import UuidUtils from "../utils/UuidUtils";
import DateUtils from '../utils/DateUtils'

const result = new ResultDto.ResultDto();

export default class RelArticleTagService {

    private dbConnection = new DBConnection();

    async delete(key: string, val: string): Promise<any> {
        let isExit;
        try {
            await this.getObjsByKey('atc_id', val).then(res => isExit = StringUtils.isNotEmptyArr(res))
            if (isExit) {
                let sql = `delete from rel_article_tag where ${key}=?`
                return await this.dbConnection.queryByPool(sql, val)
            }
            return Promise.reject(RelArticleTagEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(RelArticleTagEnum.OPERATE_DELETE_FAILURE)
        }
    }

    /**
     * 获取文章标签（所有）
     * @param key
     * @param val
     */
    async getObjsByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select * from rel_article_tag where ${key}=?`
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(RelArticleTagEnum.OPERATE_SELECT_FAILURE)
        }
    }

    /**
     * 插入文章标签
     * @param obj
     */
    async insert(obj: RelArticleTag): Promise<any> {
        let isExit;
        try {
            obj.at_id = await UuidUtils.generateUUID1()
            obj.at_create_time = await DateUtils.now()
            await this.getObjsByKey('atc_id', obj.at_atc_id).then(res => isExit = StringUtils.isNotEmptyArr(res));
            if (!isExit) {
                let sql = `insert into rel_article_tag (${obj.keys()}) values(${obj.values()})`;
                return await this.dbConnection.queryByPool(sql)
            }
            return Promise.reject(RelArticleTagEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(RelArticleTagEnum.OPERATE_INSERT_FAILURE)
        }
    }

    /**
     * 批量插入文章标签依赖
     */
    async insertAll(tags: Array<string>, atcId: string): Promise<any> {
        try {
            const fn = async (tagId) => {
                const rel = new RelArticleTag()
                rel.at_id = await UuidUtils.generateUUID1()
                rel.at_create_time = await DateUtils.now()
                rel.at_atc_id = atcId
                rel.at_tag_id = tagId
                let sql = `insert into rel_article_tag (${rel.keys()}) values(${rel.values()})`
                return this.dbConnection.queryByPool(sql)
            }
            let arr = []
            tags.forEach(item => {
                arr.push(fn(item))
            })
            return Promise.all(arr)
        } catch (e) {
            return Promise.reject(RelArticleTagEnum.OPERATE_INSERT_FAILURE)
        }
    }

}
