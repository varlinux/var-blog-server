import * as express from 'express'
import * as ResultDto from "../dao/ResultDto"
import LinkService from "../service/BlogLinkService"
import Link from "../dao/BlogLink"
import {LinkEnum} from "../enum/MessageEnum"

const router = express.Router()
const linkService = new LinkService()
const resultDto = new ResultDto.ResultDto()

router.get('/get/:id', function (req, res) {
    try {
        let userId = req.params.id
        linkService.getObjByKey('link_id', userId).then(function (data) {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(LinkEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(LinkEnum.OPERATE_SELECT_FAILURE))
    }
});

router.get('/getAll', function (req, res) {
    try {
        linkService.getAll().then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(LinkEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(LinkEnum.OPERATE_SELECT_FAILURE))
    }
});

router.delete('/delete/:id', function (req, res) {
    try {
        let userId = req.params.id
        linkService.delete('user_id', userId).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(LinkEnum.OPERATE_DELETE_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(LinkEnum.OPERATE_DELETE_FAILURE))
    }
});

router.post('/insert', function (req, res) {
    try {
        linkService.insert(new Link().seal(req.body)).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(LinkEnum.OPERATE_INSERT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(LinkEnum.OPERATE_INSERT_FAILURE))
    }
});

// module.exports = router;
export default router
