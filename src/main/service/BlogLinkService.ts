import DBConnection from '../db/mysqlConn'
import BlogLink from "../dao/BlogLink";
import StringUtils from "../utils/StringUtils";
import DateUtils from "../utils/DateUtils";
import {BaseService} from "./BaseService";
import {LinkEnum} from "../enum/MessageEnum";
import UuidUtils from "../utils/UuidUtils";

export default class BlogLinkService implements BaseService {

    private dbConnection = new DBConnection();

    /**
     * 获取所有链接列表
     */
    public async getAll(): Promise<any> {
        try {
            let sql = `select * from blog_link`;
            return await this.dbConnection.queryByPool(sql);
        } catch (e) {
            return Promise.reject(LinkEnum.OPERATE_SELECT_FAILURE)
        }
    }

    /**
     * 通过编号获取链接
     * @param key
     * @param val
     */
    public async getObjByKey(key: string, val: string): Promise<any> {
        try {
            let sql = `select * from blog_link where ${key}=?`;
            return await this.dbConnection.queryByPool(sql, val)
        } catch (e) {
            return Promise.reject(LinkEnum.OPERATE_SELECT_FAILURE)
        }
    }

    /**
     * 插入链接
     * @param link 链接对象
     */
    public async insert(link: BlogLink): Promise<any> {
        let isExit;
        try {
            await this.getObjByKey('link_id', link.link_id).then(res => isExit = StringUtils.isNotEmptyArr(res));
            if (!isExit) {
                link.link_id = await UuidUtils.generateUUID1()
                link.link_create_time = await DateUtils.now()
                link.link_status = 1
                let sql = `insert into blog_link (${link.keys()}) values(${link.values()})`;
                return await this.dbConnection.queryByPool(sql);
            }
            return Promise.reject(LinkEnum.IS_EXIST)
        } catch (e) {
            return Promise.reject(LinkEnum.OPERATE_INSERT_FAILURE)
        }
    }

    public async delete(key: string, val: string): Promise<any> {
        let isExit;
        try {
            await this.getObjByKey('link_id', val).then(res => isExit = StringUtils.isNotEmptyArr(res));
            if (isExit) {
                let sql = `delete from blog_link where ${key}=?`;
                return await this.dbConnection.queryByPool(sql, val);
            }
            return Promise.reject(LinkEnum.IS_NOT_EXIST)
        } catch (e) {
            return Promise.reject(LinkEnum.OPERATE_DELETE_FAILURE)
        }
    }

}
