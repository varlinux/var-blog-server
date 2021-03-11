import * as express from 'express'
import * as ResultDto from "../dao/ResultDto"
import UserService from '../service/BlogUserService'
import SecretUtils from "../utils/SecretUtils"
import * as jwt from 'jsonwebtoken'
import * as fs from 'fs'
import * as path from 'path'
import {LoginEnum} from '../enum/MessageEnum'

const router = express.Router()
const userService = new UserService()
const resultDto = new ResultDto.ResultDto()
const private_key_file_path = path.resolve(__dirname, '../common/key/pkcs8_ming_blog_private_key.pem')
const privateKey = fs.readFileSync(private_key_file_path)

router.post('/admin/login', (req, res) => {
    try {
        let enData = req.body.data,
            deData = SecretUtils.decode(enData),
            arr = deData.split(process.env.LOGIN_SECRET_KEY)
        let [user_name, user_pwd] = [arr[0], arr[1]]
        console.log(user_name, user_pwd, `is login !`)
        // 查询用户是否存在
        let userResult = userService.getObjByUsername(user_name, user_pwd).then(data => {
            // 不存在直接返回登录操作结果
            if (data.code < 0) {
                res.json(resultDto.isNotExist('用户'))
            } else {
                //    用户存在，返回用户信息并返回给用户一个token令牌
                let user_id = data.data.map(user => {
                    return user.user_id
                }).toString()
                const token = jwt.sign({
                    data: process.env.SECRET_KEY
                }, privateKey, {
                    algorithm: 'RS256',
                    expiresIn: '2h'
                });
                let result = resultDto.isOk(data.data)
                result.token = token
                res.json(result)
            }
        })
    } catch (e) {
        res.json(resultDto.isFailure(LoginEnum.IS_FAILURE))
    }
})
// module.exports = router;
export default router
