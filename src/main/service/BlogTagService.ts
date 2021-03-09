import DBConnection from '../db/mysqlConn'
import BlogTag from "../dao/BlogTag";
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
        let isExist;
        try {
            await this.getObjByKey('tag_name', tag.tag_name).then(res => isExist = StringUtils.isNotEmptyArr(res));
            if (!isExist) {
                tag.tag_id = await UuidUtils.generateUUID1()
                tag.tag_create_time = await DateUtils.now()
                tag.tag_status = 1
                let sql = `insert into blog_tag (${tag.keys()}) values(${tag.values()})`
                // return result
                return this.dbConnection.queryByPool(sql)
            }
            return Promise.reject(TagEnum.IS_EXIST);
        } catch (e) {
            return Promise.reject(TagEnum.OPERATE_INSERT_FAILURE);
        }
    }

    /**
     * 插入所有标签
     * todo 检查标签是否存在是以标签名称为判断依据
     * @param tags
     */
    public async insertAll(tags: Array<BlogTag>) {
        try {
            const fn = (tag) => {
                let sql = `insert into blog_tag (${tag.keys()}) values(${tag.values()})`
                return this.dbConnection.queryByPool(sql)
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
