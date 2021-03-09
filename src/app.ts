import * as express from 'express'
// 解决tsc启动获取不到process.env问题
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

// module.exports = app
export default app
import './main'