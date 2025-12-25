import request from "@/utils/request";


/**
 * 查询购物车中的商品
 * @param {*} data
 * @returns
 */
export const cartseAPI = (data) => request.get('/cart/select', data)



/**
 * 添加商品到购物车
 * @param {*} data
 * @returns
 */
export const cartaddAPI = (data) => request.post_urlencoded('/cart/add', data)




/**
 * 删除购物车中的商品
 * @param {*} data
 * @returns
 */
export const cartdeAPI = (data) => request.delete('/cart/delete', data)



/**
 *修改购物车中商品数量
 * @param {*} data
 * @returns
 */
export const cartupAPI = (data) => request.post_urlencoded('/cart/update', data)



/**
 *随机返回指定数量的商品
 * @param {*} data
 * @returns
 */
 export const productAPI = (data) => request.get('/product/randomlyRecommendProducts', data)


/**
 *商品详情
 * @param {*} data
 * @returns
 */
 export const getInfoAPI = (data) => request.get('/product/getInfo', data)

/**
 *通过商品id获取评论
 * @param {*} data
 * @returns
 */
 export const comByAPI = (data) => request.get('/comment/getCommentsByProductId', data)



