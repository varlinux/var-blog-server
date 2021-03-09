import {
    Mongo
} from '../../db/mongodbConn'
import DateUtils from '../../utils/DateUtils'
import {ArtTypeEnum} from '../../enum/MongoEnum'

export default class BlogMenuService {
    private ArtTypeDao = Mongo.BlogArtType

    async get(data): Promise<any> {
        return new Promise((resolve, rejects) => {
            this.ArtTypeDao.find(data, err => {
                if (err) {
                    rejects(err)
                }
            }).then(res => {
                resolve(res)
            })
        })
    }

    async insertAll(list): Promise<any> {
        const fn = (type) => {
            type.art_type_status = ArtTypeEnum.STATUS_ALIVE
            type.art_type_create_time = DateUtils.now()
            type.art_type_edit_time = DateUtils.now()
            return new Promise(async (resolve, reject) => {
                const exitResult = await this.ArtTypeDao.find({
                    art_type_name: type.art_type_name
                })
                if (exitResult.length > 0) {
                    resolve(`${type.art_type_name} 结果已存在!`)
                } else {
                    const result = new this.ArtTypeDao(type).save(err => {
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
        obj.art_type_edit_time = DateUtils.now()
        return new Promise(resolve => {
            this.ArtTypeDao.updateOne(whereStr, obj).then(res => {
                resolve(res)
            })
        })
    }

    async delete(id): Promise<any> {
        const whereStr = {
            '_id': id
        }
        const updateStr = {
            'art_type_edit_time': DateUtils.now(),
            'art_type_status': ArtTypeEnum.STATUS_DEAD
        }
        return new Promise(resolve => {
            this.ArtTypeDao.updateOne(whereStr, updateStr).then(res => {
                resolve(res)
            })
        })
    }
}
