import * as express from 'express'
import * as ResultDto from "../dao/ResultDto"
import UserService from "../service/BlogUserService"
import User from "../dao/BlogUser"
import {UserEnum} from "../enum/MessageEnum"

const router = express.Router()
const userService = new UserService()
const resultDto = new ResultDto.ResultDto()

router.get('/get/:id', function (req, res) {
    try {
        let userId = req.params.id
        userService.getObjByKey('user_id', userId).then(function (data) {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(UserEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(UserEnum.OPERATE_SELECT_FAILURE))
    }
});

router.get('/getAll', function (req, res) {
    try {
        userService.getAll().then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(UserEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(UserEnum.OPERATE_SELECT_FAILURE))
    }
});

router.delete('/delete/:id', function (req, res) {
    try {
        let userId = req.params.id
        userService.delete('user_id', userId).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(UserEnum.OPERATE_DELETE_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(UserEnum.OPERATE_DELETE_FAILURE))
    }
});

router.post('/insert', function (req, res) {
    try {
        userService.insert(new User().seal(req.body)).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(UserEnum.OPERATE_INSERT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(UserEnum.OPERATE_INSERT_FAILURE))
    }
});

// module.exports = router;

export default router
