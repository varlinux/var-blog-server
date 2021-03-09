import DBConnection from '../db/mysqlConn'
import BlogUser from "../dao/BlogUser"
import StringUtils from "../utils/StringUtils"
import DateUtils from "../utils/DateUtils"
import {BaseService} from "./BaseService"
import * as ResultDto from "../dao/ResultDto"
import {UserEnum} from "../enum/MessageEnum"
const result = new ResultDto.ResultDto()

export default class BlogUserService implements BaseService {

    private dbConnection = new DBConnection()

    async delete(key: string, val: string): Promise<any> {
        let isExit
        try {
            await this.getObjByKey('user_id', val).then( res => isExit = StringUtils.isNotEmptyArr(res));
            if (isExit) {
                let sql = `delete from blog_user where ${key}=?`
                return await this.dbConnection.queryByPool(sql, val)
            }
            return Promise.reject(UserEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(UserEnum.OPERATE_DELETE_FAILURE)
        }
    }

    async getAll(): Promise<any> {
        try {
            let sql = `select * from blog_user`
            return await this.dbConnection.queryByPool(sql)
        } catch (e) {
            return Promise.reject(UserEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async getObjByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select * from blog_user where ${key}=?`
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(UserEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async insert(obj: BlogUser): Promise<any> {
        let isExist
        try {
            await this.getObjByKey('user_id', obj.user_id).then( res => isExist = StringUtils.isNotEmptyArr(res))
            if (!isExist) {
                obj.user_status = 1
                obj.user_create_time = await DateUtils.now()
                let sql = `insert into blog_user (${obj.keys()}) values(${obj.values()})`
                return await this.dbConnection.queryByPool(sql)
            }
            return Promise.reject(UserEnum.IS_EXIST)
        } catch (e) {
            return Promise.reject(UserEnum.OPERATE_INSERT_FAILURE)
        }
    }

    async getObjByUsername(username: string, password: string): Promise<any> {
        try {
            let sql = 'select * from blog_user as u where u.user_name=?'
            let data = await this.dbConnection.queryByPool(sql, username)
            let user_pwd = data.map(user => {
                return user.user_pwd
            }).toString()
            if (user_pwd === password) {
                return result.isOk(data)
            } else {
                return Promise.reject(UserEnum.IS_NOT_EXIST)
            }
        } catch (e) {
            return Promise.reject(UserEnum.OPERATE_SELECT_FAILURE)
        }
    }

}
