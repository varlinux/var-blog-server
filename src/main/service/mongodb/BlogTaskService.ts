import {
    Mongo
} from '../../db/mongodbConn'
import DateUtils from '../../utils/DateUtils'
import {SiteTaskEnum} from '../../enum/MongoEnum'

export default class BlogMenuService {
    private TaskDao = Mongo.BlogSiteTask

    async get(data): Promise<any> {
        console.log(`data : `, data)
        return new Promise((resolve, rejects) => {
            this.TaskDao.find(data, err => {
                if (err) {
                    rejects(err)
                }
            }).then(res => {
                resolve(res)
            })
        })
    }

    async insertAll(list): Promise<any> {
        const fn = (task) => {
            task.site_task_status = SiteTaskEnum.STATUS_ALIVE
            task.site_task_create_time = DateUtils.now()
            task.site_task_edit_time = DateUtils.now()
            return new Promise(async (resolve, reject) => {
                const exitResult = await this.TaskDao.find({
                    site_task_name: task.site_task_name
                })
                if (exitResult.length > 0) {
                    resolve(`${task.site_task_name} 结果已存在!`)
                } else {
                    const result = new this.TaskDao(task).save(err => {
                        err ? reject(err) : ''
                    })
                    resolve(result)
                }
            })
        }
        let pros = []
        list.forEach(task => {
            pros.push(fn(task))
        })
        return Promise.all(pros)
    }

    async update(obj): Promise<any> {
        console.log(`update : `, obj)
        const whereStr = {
            '_id': obj._id
        }
        obj.site_task_edit_time = DateUtils.now()
        return new Promise(resolve => {
            this.TaskDao.updateOne(whereStr, obj).then(res => {
                resolve(res)
            })
        })
    }

    async delete(id): Promise<any> {
        const whereStr = {
            '_id': id
        }
        const updateStr = {
            'site_task_edit_time': DateUtils.now(),
            'site_task_status': SiteTaskEnum.STATUS_DEAD
        }
        return new Promise(resolve => {
            this.TaskDao.updateOne(whereStr, updateStr).then(res => {
                resolve(res)
            })
        })
    }
}
