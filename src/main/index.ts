import app from '../app'
import * as bodyParser from 'body-parser'

// 添加日志
import {getLogger, useLogger} from './config/Log4J'
const logger = getLogger('default')
useLogger(app, logger)
app.use(function (res, req, next) {
    logger.info('req.req.body的值是:', req.req.body,
        '，req.req.query的值是:', req.req.query,
        '，req.req.params的值是:', req.req.params);
    next()
})

// import * as session from "express-session";
import JwtFilter from './filter/JwtFilter'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
JwtFilter(app) // Jwt Filter

import articleRouter from './controller/ArticleController'
import linkRouter from './controller/LinkController'
import suggestRouter from './controller/SuggestController'
import tagRouter from './controller/TagController'
import userRouter from './controller/UserController'
import imgRouter from './controller/ImgController'
import commonController from './controller/CommonController'

app.use('/',commonController)
app.use('/api/atcs',articleRouter)
app.use('/api/links',linkRouter)
app.use('/api/sgts',suggestRouter)
app.use('/api/tags',tagRouter)
app.use('/api/users',userRouter)
app.use('/api/img',imgRouter)

import MenuController from './controller/mongodb/MenuController'
import TaskController from './controller/mongodb/TaskController'
import ArtTypeController from './controller/mongodb/ArtTypeController'
app.use('/api/menu',MenuController)
app.use('/api/task',TaskController)
app.use('/api/artype',ArtTypeController)

app.listen(process.env.PORT || 3259, function () {
    console.log(`本地服务已启动，可查看：http://localhost:${process.env.PORT || 3000}`)
});
