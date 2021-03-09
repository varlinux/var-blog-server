import * as express from 'express'
import * as ResultDto from "../dao/ResultDto";
import {ImgEnum} from '../enum/MessageEnum'
import ImgService from "../service/BlogImgService"
import Img, {ImgStatusEnum} from "../dao/BlogImg"
import UuidUtils from '../utils/UuidUtils'
import DateUtils from '../utils/DateUtils'
import FileUtils from '../utils/FileUtils'


// 图片上传依赖
import * as melter from 'multer'
import * as path from "path"
const imgDir = path.resolve(__dirname, '../../../PreviewImg/server')
const upload = melter({ dest: imgDir }) // 图片存储目录

const router = express.Router()
const resultDto = new ResultDto.ResultDto()
const imgService = new ImgService()

router.post('/insert', upload.single('image'), async function (res, req) {
    try {
        console.log(`res.file : `, res.file)
        const imgUrl = 'http://localhost:9432/server/' + res.file.filename
        const _img = new Img()
        _img.img_id = await UuidUtils.generateUUID1()
        _img.img_name = res.file.filename
        _img.img_create_time = await DateUtils.now()
        _img.img_url = imgUrl
        _img.img_type = ImgStatusEnum.TYPE_SERVER

        imgService.insert(_img).then(res => {
            if (res) {
                req.json(resultDto.isOk({url: imgUrl}))
            }
        }).catch(e => {
            req.json(resultDto.isFailure(ImgEnum.OPERATE_INSERT_FAILURE))
        })
    } catch (e) {
        req.json(resultDto.isFailure(ImgEnum.OPERATE_INSERT_FAILURE))
    }
})

router.delete('/delete/:name', function (req, res) {
    try {
        console.log(`req.params : `, req.params)
        const imgName = req.params.name
        imgService.delete('img_name', imgName).then(async data => {
            try {
                console.log(`data : `, data)
                await FileUtils.deleteFile(imgDir + '\\' + imgName, true)
                res.json(resultDto.isOk(data))
            } catch (e) {
                res.json(resultDto.isFailure(ImgEnum.OPERATE_FILE_DELETE_FAILURE))
            }
        }).catch(err => {
            res.json(resultDto.isFailure(ImgEnum.OPERATE_DELETE_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ImgEnum.OPERATE_DELETE_FAILURE))
    }
})

router.get('/getAll', function (req, res) {
    try {
        imgService.getAll().then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(ImgEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ImgEnum.OPERATE_SELECT_FAILURE))
    }
})

export default router
