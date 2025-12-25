import request from "@/utils/request";

/**
 *注册
 * @param {*} data 用户名，密码，手机号，验证码
 * @returns
 */
export const logonAPI = (data) => request.post_urlencoded('/User/insert', data)
/**
 *登录
 * @param {*} data 用户名，密码
 * @returns
 */
export const loginAPI = (data) => request.post_urlencoded('/User/login', data)
/**
*手机验证码
* @param {*} data 验证码
* @returns
*/
export const codeAPI = (data) => request.get('/sendss/Sendss', data)
/**
*邮箱验证码
* @param {*} data 验证码
* @returns
*/
export const mailboxAPI = (data) => request.get('/User/send', data)