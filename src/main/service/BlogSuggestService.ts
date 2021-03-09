import DBConnection from '../db/mysqlConn'
import su from "../utils/StringUtils"
import DateUtils from "../utils/DateUtils"
import {BaseService} from "./BaseService"
import BlogSuggest from "../dao/BlogSuggest"
import * as ResultDto from "../dao/ResultDto"
import UuidUtils from "../utils/UuidUtils"
import {SuggestEnum} from "../enum/MessageEnum"
const result = new ResultDto.ResultDto()

export default class BlogSuggestService implements BaseService {

    private dbConnection = new DBConnection()

    async delete(key: string, val: string): Promise<any> {
        let isExit;
        try {
            await this.getObjByKey('sgt_id', val).then( res => isExit = su.isNotEmptyArr(res))
            if (isExit) {
                let sql = `delete from blog_suggest where ${key}=?`
                return await this.dbConnection.queryByPool(sql, val)
            }
            return Promise.reject(SuggestEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(SuggestEnum.OPERATE_DELETE_FAILURE)
        }
    }

    async getAll(): Promise<any> {
        try {
            let sql = `select * from blog_suggest`;
            return await this.dbConnection.queryByPool(sql)
        } catch (e) {
            return Promise.reject(SuggestEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async getObjByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select * from blog_suggest where ${key}=?`
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(SuggestEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async insert(obj: BlogSuggest): Promise<any> {
        let isExit;
        try {
            // console.log(`obj : `, obj)
            await this.getObjByKey('sgt_id', obj.sgt_id).then( res => isExit = su.isNotEmptyArr(res))
            if (!isExit) {
                obj.sgt_create_time = await DateUtils.now()
                obj.sgt_id = await UuidUtils.generateUUID1()
                obj.sgt_status = 1
                let sql = `insert into blog_suggest (${obj.keys()}) values(${obj.values()})`
                return await this.dbConnection.queryByPool(sql)
            }
            return Promise.reject(SuggestEnum.IS_EXIST)
        } catch (e) {
            return Promise.reject(SuggestEnum.OPERATE_INSERT_FAILURE)
        }
    }


}
