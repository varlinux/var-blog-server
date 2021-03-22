import DBConnection from '../db/mysqlConn'
import BlogTag, {TagStatusEnum} from "../dao/BlogTag";
import StringUtils from "../utils/StringUtils";
import DateUtils from "../utils/DateUtils";
import {BaseService} from "./BaseService";
import * as ResultDto from "../dao/ResultDto";
import {TagEnum} from "../enum/MessageEnum"
import UuidUtils from "../utils/UuidUtils";

const result = new ResultDto.ResultDto();

export default class BlogTagService implements BaseService {

    private dbConnection = new DBConnection();

    /**
     * 获取所有标签列表
     */
    public async getAll(): Promise<any> {
        try {
            let sql = `select * from blog_tag`
            return this.dbConnection.queryByPool(sql)
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_SELECT_FAILURE)
        }
    }

    /**
     * 根据标签编号获取标签对象
     * @param key 表字段键
     * @param val 值
     */
    public async getObjByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select * from blog_tag where ${key}=?`
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_SELECT_FAILURE)
        }
    }

    /**
     * 添加标签
     * 注：在添加之前需要先判断改标签是否存在
     * @param tag
     */
    public async insert(tag: BlogTag) {
        // let isExist;
        try {
            // await this.getObjByKey('tag_name', tag.tag_name).then(res => isExist = StringUtils.isNotEmptyArr(res));
            // if (!isExist) {
                // tag.tag_id = await UuidUtils.generateUUID1()
                // tag.tag_create_time = await DateUtils.now()
                // tag.tag_status = 1
                const params = [
                    await UuidUtils.generateUUID1(),
                    tag.tag_name,
                    await DateUtils.now(),
                    TagStatusEnum.IS_DEATH,
                    tag.tag_name
                ]
                // let sql = `insert into blog_tag (${tag.keys()}) values(${tag.values()})`
                const sql = `INSERT into blog_tag(tag_id, tag_name, tag_create_time, tag_status)
                SELECT ?, ?, ?, ?
                FROM DUAL
                WHERE NOT EXISTS(SELECT tag_name FROM blog_tag WHERE tag_name = ?)`
                // return result
                return this.dbConnection.queryByPool(sql, params)
            // }
            // return Promise.reject(TagEnum.IS_EXIST);
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_INSERT_FAILURE);
        }
    }

    /**
     * 插入所有标签
     * @param tags
     */
    public async insertAll(tags: Array<BlogTag>) {
        try {
            let params = [], tag_id = null
            const fn = async tag => {
                tag_id = await UuidUtils.generateUUID1()
                params = [
                    tag_id,
                    tag.tag_name,
                    await DateUtils.now(),
                    TagStatusEnum.IS_DEATH,
                    tag.tag_name,
                    tag.tag_name
                ]
                // let sql = `insert into blog_tag (${tag.keys()}) values(${tag.values()})`
                const sql = `INSERT into blog_tag(tag_id, tag_name, tag_create_time, tag_status)
                SELECT ?, ?, ?, ?
                FROM DUAL
                WHERE NOT EXISTS(SELECT tag_name FROM blog_tag WHERE tag_name = ?); 
                SELECT bt.tag_id 
                from blog_tag as bt 
                WHERE bt.tag_name = ?;`
                const result = await this.dbConnection.queryByPool(sql, params)
                return result.map(item => {
                    if(Array.isArray(item)) {
                        return item?.[0]?.tag_id
                    }
                })
            }
            let arr = []
            tags.forEach(item => {
                arr.push(fn(item))
            })
            return Promise.all(arr)
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_INSERT_FAILURE)
        }
    }

    public async delete(key: string, val: string): Promise<any> {
        let isExist;
        try {
            await this.getObjByKey('tag_id', val).then(res => isExist = StringUtils.isNotEmptyArr(res));
            if (isExist) {
                let sql = `delete from blog_tag where ${key}=?`;
                return await this.dbConnection.queryByPool(sql, val);
            }
            return Promise.reject(TagEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_DELETE_FAILURE)
        }
    }

}
