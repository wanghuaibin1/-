//商家接口
import request from "@/utils/request";


//商品
/**
 * 获取商品信息
 * @param {*} data 分页数据 默认第一页，五条数据
 * @returns
 */
export const getCommodityAPI = data => request.get('/product/findpage', data)

/**
 *根据名字模糊查找商品
 * @param {*} data  商品名字
 * @returns
 */
 export const getSeekCommodityAPI = data => request.get('/product/findname', data)


/**
 *根据id删除商品
 * @param {*} data  商品ID
 * @returns
 */
 export const deleteCommodityAPI = data => request.delete('/product/delte', data)


/**
 *根据id批量删除商品
 * @param {*} data  商品ID
 * @returns
 */
export const deleteCommodityS_API = data => request.delete2('/product/delte2', data)


/**
 *添加商品信息
 * @param {*} data 商品的名称 商品的价格 商品所属店铺的ID 商品的库存数量 商品的状态（上架/下架） 商品的创建时间
 * @returns
 */
 export const postAddCommodityAPI= data => request.post('/product/insert', data)


 /**
 *根据id修改商品信息
 * @param {*} data 商品的名称 商品的价格 商品所属店铺的ID 商品的库存数量 商品的状态（上架/下架） 商品的创建时间
 * @returns
 */
 export const putModifyCommodityAPI= data => request.put('/product/update', data)




 //订单
/**
 * 获取 条件查询订单信息
 * @param {*} data 分页数据 默认第一页，五条数据
 * @returns
 */
export const getOrderSelectAPI = data => request.get('/order/select', data)

/**
 *根据id删除订单
 * @param {*} data  商品ID
 * @returns
 */
 export const deleteOrderdityAPI = data => request.delete('/order/delete', data)

 /**
 *根据id修改订单信息
 * @param {*} data
 * @returns
 */
 export const postOrderdityAPI= data => request.json('/order/update', data)

/**
 *添加商品信息
 * @param {*} data
 */
 export const postOrderAPI= data => request.json('/order/add', data)


 /**
 *查询日志
 * @param {*} data
 */
 export const logselAPI= data => request.get('/log/select', data)


