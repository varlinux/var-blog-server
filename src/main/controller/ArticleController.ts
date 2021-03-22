import * as express from 'express'
import * as ResultDto from "../dao/ResultDto"
import ArticleService from "../service/BlogArticleService"
import TagService from "../service/BlogTagService"
import RelArticleTagService from "../service/RelArticleTagService"
import Article from "../dao/BlogArticle"
import UuidUtils from "../utils/UuidUtils"
import DataUtils from "../utils/DateUtils"
import BlogTag, {TagStatusEnum} from "../dao/BlogTag"
import {ArticleEnum, TagEnum} from '../enum/MessageEnum'

const router = express.Router()
const articleService = new ArticleService()
const tagService = new TagService()
const relArticleTagService = new RelArticleTagService()
const resultDto = new ResultDto.ResultDto()

router.get('/getByTagId/:id', async function (req, res) {
    try {
        const tagId = req.params.id
        console.log(`tagId : `, tagId)
        const result = await articleService.getAllByTagId(tagId)
        return res.json(resultDto.isOk(result))
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
    }
})

router.get('/get/:id', function (req, res) {
    try {
        let userId = req.params.id
        articleService.getObjByKey('user_id', userId).then(function (data) {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
    }
});

router.post('/get', function (req, res) {
    try {
        let data = req.body
        if (data) {
            let key, value
            for (let _k in data) {
                key = _k
                value = data[_k]
            }
            // console.log(`data : `, data)
            // console.log(`key, value : `, key, value)
            articleService.getObjByKey(key, value).then(function (data) {
                res.json(resultDto.isOk(data))
            }).catch(err => {
                res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
            })
        }
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
    }
});

router.get('/getAll', function (req, res) {
    try {
        // console.log(`getAll req.headers : `, req.headers)
        articleService.getAll().then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
    }
});

router.get('/getByLimit', async function (req, res) {
    try {
        const {pageIndex, size} = req.query
        articleService.getByLimit(Number(pageIndex) * Number(size), Number(size)).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
    }
})

router.get('/getOrderByLimit', async function (req, res) {
    try {
        const {order, pageIndex, size} = req.query
        articleService.getOrderByLimit(String(order).toUpperCase(), Number(size), Number(pageIndex) * Number(size)).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_SELECT_FAILURE))
    }
})

router.delete('/delete/:id', function (req, res) {
    try {
        let userId = req.params.id
        articleService.delete('atc_id', userId).then(data => {
            res.json(resultDto.isOk(data))
        }).catch(err => {
            res.json(resultDto.isFailure(ArticleEnum.OPERATE_DELETE_FAILURE))
        })
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_DELETE_FAILURE))
    }
});

router.post('/insert', async function (req, res) {
    try {
        const data = req.body,
            {dynamicTags} = data
        // 1、获取所有标签并为没有标签编号的标签赋值（创建时间、标签编号、标签状态）,过程中将标签编号传入数组中
        // todo 事务控制可以通过执行多个sql语句进行控制
        // todo 新文章使用旧标签貌似会把旧标签关联的文章给取代了
        const tags = await tagService.insertAll(dynamicTags),
            tagMap = tags.map(item => item.filter(i => !!i)),
            tagArr = [].slice.call(tagMap).flat()
        // console.log(`tags : `, )
        const article = await new Article().seal(data)
        article.tag_ids = tagArr.join()    // 取出tag_id，并转化为数组字符串（以逗号隔离）
        article.blog_user_id = data.blog_user_id
        const result = await articleService.insert(article)
        await relArticleTagService.insertAll(tagArr, article.atc_id)
        return res.json(resultDto.isOk(result))
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_INSERT_FAILURE))
    }
});

router.put('/update', async function (req, res) {
    try {
        const data = req.body,
            newTags = data.dynamicTags.filter(item => !item.tag_id && item.tag_name),
            oldTags = data.dynamicTags.filter(item => item.tag_id).map(item => item?.tag_id)
        // 1、获取所有标签并为没有标签编号的标签赋值（创建时间、标签编号、标签状态）,过程中将标签编号传入数组中
        // let newTags = data.dynamicTags.filter(item => !item.tag_id && item.tag_name)
        // console.log(`update data : `, data)
        // console.log(`newTags, oldTags : `, newTags, oldTags)
        // let tagArr = await getNewTag(data)
        // todo 如果标签已存在，则直接返回错误信息并不会执行then里面的代码，待优化
        const newTagIds = await tagService.insertAll(newTags)
        const tagArr = Array.prototype.slice.call(newTagIds.concat(oldTags))
        let article = await new Article().seal(data)
        article.tag_ids = tagArr.join()
        // console.log(`tagIds : `, tagArr)
        const result = await articleService.update(article)
        // 更新关联表
        await relArticleTagService.insertAll(newTagIds, article.atc_id)

        res.json(resultDto.isOk(result))
    } catch (e) {
        res.json(resultDto.isFailure(ArticleEnum.OPERATE_UPDATE_FAILURE))
    }
});

export default router
