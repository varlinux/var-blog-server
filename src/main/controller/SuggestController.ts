import * as express from 'express'
import * as ResultDto from "../dao/ResultDto"
import SuggestService from "../service/BlogSuggestService"
import Suggest from "../dao/BlogSuggest"
import {SuggestEnum} from "../enum/MessageEnum"

const router = express.Router()
const suggestService = new SuggestService()
const resultDto = new ResultDto.ResultDto()

router.get('/get/:id', function (req, res) {
    try {
        let userId = req.params.id
        suggestService.getObjByKey('sgt_id', userId).then(function (data) {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(SuggestEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(SuggestEnum.OPERATE_SELECT_FAILURE))
    }
});

router.get('/getAll', function (req, res) {
    try {
        suggestService.getAll().then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(SuggestEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(SuggestEnum.OPERATE_SELECT_FAILURE))
    }
});

router.delete('/delete/:id', function (req, res) {
    try {
        let userId = req.params.id
        suggestService.delete('user_id', userId).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(SuggestEnum.OPERATE_DELETE_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(SuggestEnum.OPERATE_DELETE_FAILURE))
    }
});

router.post('/insert', function (req, res) {
    try {
        suggestService.insert(new Suggest().seal(req.body)).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(SuggestEnum.OPERATE_INSERT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(SuggestEnum.OPERATE_INSERT_FAILURE))
    }
});

// module.exports = router;
export default router
