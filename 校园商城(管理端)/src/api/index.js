import request from "@/utils/request";

/**
 * 登录
 * @returns 用户名 密码
 */
export const loginAPI = (data) => request.post_urlencoded('/store/login',data)

/**
 * 注册
 */
// export const logonAPI = (data) => request.json('/store/login',data)
