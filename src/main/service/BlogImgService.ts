import DBConnection from '../db/mysqlConn'
import {BaseService} from "./BaseService"
import BlogImg from "../dao/BlogImg"
import * as ResultDto from "../dao/ResultDto"
import {ImgEnum} from "../enum/MessageEnum"
import StringUtils from "../utils/StringUtils";

const result = new ResultDto.ResultDto()

export default class BlogImgService implements BaseService {

    private dbConnection = new DBConnection()

    async insert(obj: BlogImg): Promise<any> {
        try {
            let sql = `insert into blog_img (${obj.keys()}) values(${obj.values()})`
            return await this.dbConnection.queryByPool(sql)
        } catch (e) {
            return Promise.reject(ImgEnum.OPERATE_INSERT_FAILURE)
        }
    }

    async delete(key: string, value: string): Promise<any> {
        let isExit
        try {
            await this.getObjByKey('img_name', value).then(res => isExit = StringUtils.isNotEmptyArr(res));
            if (isExit) {
                let sql = `delete from blog_img where ${key}=?`;
                return await this.dbConnection.queryByPool(sql, value);
            }
            return Promise.reject(ImgEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(ImgEnum.OPERATE_DELETE_FAILURE)
        }
    }

    async getAll(): Promise<any> {
        try {
            let sql = `select * from blog_img`
            return await this.dbConnection.queryByPool(sql)
        } catch (e) {
            return Promise.reject(ImgEnum.OPERATE_SELECT_FAILURE)
        }
    }

    async getObjByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select * from blog_img where ${key}=?`;
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(ImgEnum.OPERATE_SELECT_FAILURE)
        }
    }

}
