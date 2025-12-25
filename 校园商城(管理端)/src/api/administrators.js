//管理员接口
import request from "@/utils/request";



/**
 * 登录
 * @returns 用户名 密码
 */
// export const loginAPI = (data) => request.get('/store/login',data)


/**
 * 获取商家
 * @param {*} data 分页数据 默认第一页，五条数据
 * @returns
 */
export const adminUserAPI = data => request.get('/adminUser/page', data)


/**
 * 查询用户
 * @param {*} data  根据用户名查询
 * @returns
 */
export const adminNameAPI = data => request.get('/adminUser/byName', data)


/**
 *根据id删除用户
 * @param {*} data  用户ID
 * @returns
 */
 export const deleteadminAPI = data => request.delete('/adminUser/delete', data)












