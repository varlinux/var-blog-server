import * as express from 'express'
import * as ResultDto from "../../dao/ResultDto"
import BlogMenuService from "../../service/mongodb/BlogMenuService"
const router = express.Router()
const resultDto = new ResultDto.ResultDto()
const MenuService = new BlogMenuService()

// 查询菜单
router.get('/get/:type', async function (req, res) {
  try {
    const menuType = Number(req.params.type)
    let result = await MenuService.get(menuType)
    result = await list2tree(result)
    res.json(resultDto.isOk(result))
  } catch (e) {
    res.json(resultDto.isFailure())
  }
})

// 添加菜单
router.post('/insert', async function (req, res) {
  try {
    let {menuList, type} = req.body
    menuList = await tree2list(menuList)
    const exitMenuList = await menuList.filter(item => item._id) // 过滤掉数据库中已存在的对象
    const fn = function (obj) {
      return new Promise(resolve => {
        resolve(MenuService.update(obj))
      })
    }
    let updatePros = []
    exitMenuList.forEach(item => {
      updatePros.push(fn(item))
    })
    const updateResult = await Promise.all(updatePros)
    const newMenuList = await menuList.filter(item => !item._id)
    const result = await MenuService.insertAll(newMenuList, type)
    res.json(resultDto.isOk(result))
  } catch (e) {
    res.json(resultDto.isFailure())
  }
})

//编辑菜单
router.put('/update', async function (req, res) {
  try {
    const data = req.body
    const result = await MenuService.update(data)
    return res.json(resultDto.isOk(result))
  } catch (e) {
    res.json(resultDto.isFailure())
  }
})


router.delete('/delete/:id', async function (req, res) {
  try {
    const id = req.params.id
    const result = await MenuService.delete(id)
    return res.json(resultDto.isOk(result))
  } catch (e) {
    res.json(resultDto.isFailure())
  }
})

/**
 * 列表数据转化为tree集合
 * @param list
 */
function list2tree(list) {
  const appendChild = function (_list) {
    _list.forEach(pItem => {
      if (pItem.dir_menu_parent_id !== '0') {
        // 找打父节点索引
        const ind = _list.findIndex(item => {
          return String(item._id) === pItem.dir_menu_parent_id
        })
        _list[ind] = JSON.parse(JSON.stringify(_list[ind])) // 改变对象隐藏属性：对象不可增加新属性问题
        // _list[ind].children = [pItem]
        !_list[ind].children ? _list[ind].children = [pItem] : _list[ind].children.push(pItem)
      }
    })
    return _list
  }
  const result = appendChild(list)
  // console.log(`list2tree end : `, result)
  return result.filter(item => item.dir_menu_parent_id === '0')
}

/**
 * tree集合转化为列表数据
 * @param tree
 */
function tree2list(tree) {
  let result = []
  const append = function (_list) {
    _list.forEach(pItem => {
      if (pItem.hasOwnProperty('children') && pItem.children.length > 0) {
        const newList = pItem.children
        delete pItem.children
        result.push(pItem)
        append(newList)
      } else {
        result.push(pItem)
      }
    })
  }
  append(tree)
  return result
}

export default router
