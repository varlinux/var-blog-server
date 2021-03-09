import * as mongoose from 'mongoose'

// mongoose.connect('mongodb://wei1:0987654321@ds161018.mlab.com:61018/weiwei')
const URI = 'mongodb://' +
    process.env.MONGO_HOSTNAME + ':' +
    process.env.MONGO_PORT + '/' +
    process.env.MONGO_DB_NAME
const opt: mongoose.ConnectionOptions = {
    authSource: process.env.MONGO_AUTH_SOURCE,
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let mongoosePromise = mongoose.connect(URI, opt, function (err) {
    err ? console.log(`${URI} MongoDB数据库连接失败！`) : console.log(`数据库成功连接 ${URI}`)
})

// 权限菜单表
const blogDirMenu = new mongoose.Schema({
    dir_menu_name: String,
    dir_menu_type: Number,		// 1：博客首页菜单; 2：博客后台管理菜单
    dir_menu_status: Number,	// 0：删除状态; 1：存活状态
    dir_menu_create_time: String,
    dir_menu_edit_time: String,
    dir_menu_order: Number,
    dir_menu_parent_id: String,
    dir_menu_url: String,
    dir_menu_icon: String,
})

// 任务排期表
const blogSiteTask = new mongoose.Schema({
    site_task_name: String,
    site_task_desc: String,
    site_task_create_time: String,
    site_task_edit_time: String,
    site_task_status: Number, // 0：死亡（删除） 1：存活
    site_task_progress: Number, // 0：未开始    1：进行中   2：已完成   3：已结束
    site_task_type: Number, // 1：首页任务 2：后台任务 3：服务器任务 4：其他任务
    site_task_icon: String,
    site_task_level: Number,
})

// 任务排期表
const blogArtType = new mongoose.Schema({
    // 此编号与mysql中文章类型一一对应
    // 1：前端
    // 2：后端
    // 3：服务器/linux
    art_type_id: String,
    art_type_name: String,
    art_type_desc: String,
    art_type_img_url: String,
    art_type_icon: String,
    art_type_create_time: String,
    art_type_edit_time: String,
    // "0：死亡（删除）
    // 1：存活"
    art_type_status: String
})

const Mongo = {
    BlogDirMenu: mongoose.model('BlogDirMenu', blogDirMenu),
    BlogSiteTask: mongoose.model('BlogSiteTask', blogSiteTask),
    BlogArtType: mongoose.model('BlogArtType', blogArtType)
}
export {Mongo}
