import {
    Mongo
} from '../../db/mongodbConn'
import DateUtils from '../../utils/DateUtils'
import {DirMenuEnum} from '../../enum/MongoEnum'

export default class BlogMenuService {
    private MenuDao = Mongo.BlogDirMenu

    async get(menuType): Promise<any> {
        const obj = {
            dir_menu_type: menuType,
            dir_menu_status: DirMenuEnum.STATUS_ALIVE
        }
        return new Promise((resolve, rejects) => {
            this.MenuDao.find(obj, err => {
                if (err) {
                    rejects(err)
                }
            }).then(res => {
                resolve(res)
            })
        })
    }

    async insertAll(list, type): Promise<any> {
        const fn = (menu) => {
            menu.dir_menu_status = DirMenuEnum.STATUS_ALIVE
            menu.dir_menu_create_time = DateUtils.now()
            menu.dir_menu_edit_time = DateUtils.now()
            menu.dir_menu_type = type
            return new Promise(async (resolve, reject) => {
                const exitResult = await this.MenuDao.find({
                    dir_menu_name: menu.dir_menu_name
                })
                if (exitResult.length > 0) {
                    resolve(`${menu.dir_menu_name} 结果已存在!`)
                } else {
                    const result = new this.MenuDao(menu).save(err => {
                        err ? reject(err) : ''
                    })
                    resolve(result)
                }
            })
        }
        let pros = []
        list.forEach(menu => {
            pros.push(fn(menu))
        })
        return Promise.all(pros)
    }

    async update(obj): Promise<any> {
        const whereStr = {
            '_id': obj._id
        }
        obj.dir_menu_edit_time = DateUtils.now()
        console.log(`update obj : `, obj)
        return new Promise(resolve => {
            this.MenuDao.updateOne(whereStr, obj).then(res => {
                resolve(res)
            })
        })
    }

    async delete(id): Promise<any> {
        const whereStr = {
            '_id': id
        }
        const updateStr = {
            'dir_menu_edit_time': DateUtils.now(),
            'dir_menu_status': DirMenuEnum.STATUS_DEAD
        }
        return new Promise(resolve => {
            this.MenuDao.updateOne(whereStr, updateStr).then(res => {
                resolve(res)
            })
        })
    }
}
