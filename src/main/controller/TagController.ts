import * as express from 'express'
import * as ResultDto from "../dao/ResultDto";
import TagService from "../service/BlogTagService"
import Tag from "../dao/BlogTag"
import {TagEnum} from "../enum/MessageEnum"

const router = express.Router();
const tagService = new TagService();
const resultDto = new ResultDto.ResultDto();

router.get('/get/:id', function (req, res) {
    try {
        let userId = req.params.id;
        tagService.getObjByKey('tag_id', userId).then(function (data) {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(TagEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(TagEnum.OPERATE_SELECT_FAILURE))
    }
});

router.get('/getAll', function (req, res) {
    try {
        tagService.getAll().then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(TagEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(TagEnum.OPERATE_SELECT_FAILURE))
    }
});

router.delete('/delete/:id', function (req, res) {
    try {
        let tagId = req.params.id;
        console.log(`tag delete userId : `, tagId)
        tagService.delete('tag_id', tagId).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(TagEnum.OPERATE_DELETE_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(TagEnum.OPERATE_DELETE_FAILURE))
    }
});

router.post('/insert/', async function (req, res) {
    try {
        tagService.insert(await new Tag().seal(req.body)).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(TagEnum.OPERATE_INSERT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(TagEnum.OPERATE_INSERT_FAILURE))
    }
});

// module.exports = router;
export default router
