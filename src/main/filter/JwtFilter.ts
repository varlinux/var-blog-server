import * as jwt from 'jsonwebtoken'
import * as fs from 'fs'
import * as path from 'path'

const public_key_file_path = path.resolve(__dirname, '../common/key/ming_blog_public_key.pem')
const publicKey = fs.readFileSync(public_key_file_path)
const filterUrlArr = [
    // 用户
    '/api/users/get/:id',
    '/api/users/getAll',
    '/api/users/delete/:id',
    '/api/users/insert',
    // 建议
    '/api/sgts/get/:id',
    '/api/sgts/getAll',
    '/api/sgts/delete/:id',
    // 图片
    // '/api/img/insert',
    // 文章
    '/api/atcs/delete/:id',
    '/api/atcs/insert',
    // 链接
    '/api/links/delete/:id',
    '/api/links/insert',
    // 标签
    '/api/tags/delete/:id',
    '/api/tags/insert',
]
const filterReg = /^((?!artype\/get|menu\/get|task\/get|tags\/get|atcs\/get|links\/get|img|sgts\/insert|login|\/admin|\/index|\/favicon.ico).)*$/

export default function JwtFilter(app) {
    // TIP：使用数组正则表达式
    // tags/atcs/links的get方法不在过滤范围，sgts的insert不在过滤范围，login登录方法
    // app.all(filterUrlArr, function (req, res, next) {
    app.all(filterReg, function (req, res, next) {
        let ming_blog_token = req.headers.authorization
        console.log('ming_blog_token : ', ming_blog_token)
        // verify a token asymmetric
        jwt.verify(ming_blog_token, publicKey, function(err, decoded) {
            console.log('decoded : ', decoded) // bar
            if (decoded && decoded.data === process.env.SECRET_KEY) {
                next()
            } else {
                console.log(`来自 ${req.hostname} 的 ${req.url} 请求权限校验不通过`)
                res.json(err)
            }
        });
    })
}
