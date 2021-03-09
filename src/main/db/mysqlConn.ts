//1、Nodejs using Mysql Framework
import * as mysql from 'mysql'
import {getLogger} from '../config/Log4J'
const logger = getLogger('dbErr')

// Tencent
let host = process.env.DB_HOSTNAME;
let port = parseInt(process.env.DB_PORT);
let name = process.env.DB_DATABASE;
let user = process.env.DB_USERNAME;
let pass = process.env.DB_PASSWORD;

export default class DBConnection {

    private pool: mysql.Pool

    constructor() {
        this.pool = mysql.createPool({
            host: host,
            port: port,
            database: name,
            user: user,
            password: pass,
            multipleStatements: true // 允许执行多条sql，如`SELECT 1; SELECT 2`
        })
    }
    // TIP：数据连接发生异常或者报错会自动释放连接
    queryByPool(sql: string, values?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, conn) => {
                if (err) {
                    logger.error(err)
                    reject(err)
                } else {
                    conn.query(sql, values, (err, results) => {
                        conn.release()
                        console.log(`The sql \x1B[31m%s\x1B[0m executed and the values is \x1B[31m%s\x1B[0m`, sql, values)
                        if (err) {
                            logger.error(err)
                            reject(err)
                        } else {
                            resolve(results)
                        }
                    })
                }
                // this.pool.releaseConnection(conn)
            })
        })
    }
}
//{
//     'bright'    : '\x1B[1m', // 亮色
//     'grey'      : '\x1B[2m', // 灰色
//     'italic'    : '\x1B[3m', // 斜体
//     'underline' : '\x1B[4m', // 下划线
//     'reverse'   : '\x1B[7m', // 反向
//     'hidden'    : '\x1B[8m', // 隐藏
//     'black'     : '\x1B[30m', // 黑色
//     'red'       : '\x1B[31m', // 红色
//     'green'     : '\x1B[32m', // 绿色
//     'yellow'    : '\x1B[33m', // 黄色
//     'blue'      : '\x1B[34m', // 蓝色
//     'magenta'   : '\x1B[35m', // 品红
//     'cyan'      : '\x1B[36m', // 青色
//     'white'     : '\x1B[37m', // 白色
//     'blackBG'   : '\x1B[40m', // 背景色为黑色
//     'redBG'     : '\x1B[41m', // 背景色为红色
//     'greenBG'   : '\x1B[42m', // 背景色为绿色
//     'yellowBG'  : '\x1B[43m', // 背景色为黄色
//     'blueBG'    : '\x1B[44m', // 背景色为蓝色
//     'magentaBG' : '\x1B[45m', // 背景色为品红
//     'cyanBG'    : '\x1B[46m', // 背景色为青色
//     'whiteBG'   : '\x1B[47m' // 背景色为白色
// }
