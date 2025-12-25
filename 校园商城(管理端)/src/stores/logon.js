import { defineStore } from "pinia";
import { ref, reactive } from 'vue'
import { loginAPI } from "@/api/index"
import { ElMessage } from 'element-plus'
import router from "@/router";
import langMap from '@/locale/langMap'


const modules = import.meta.glob("../views/**/*.vue")
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一 id
// 参数2：对象，可以提供state actions getters
const useCounterStore = defineStore("counter", {
    // 数据 data
    state: () => ({
        userID: '',
        token: '',
        menuList: [
            {
                "indexPath": 0,
                "title": `${langMap.message_home}`,
                "icon": "HomeFilled",
                "id": 0,
                "path": "/home",
                "name": "Home",
                "component": "home/index",
                "meta": {
                    "title": `${langMap.message_home}`,
                    "parentId": 0,
                    "id": '000',
                    "requiresAuth": "user"
                }
            },
            {
                "indexPath": 7,
                "title": `${langMap.message_shangjia}`,
                "icon": "Checked",
                "id": 4,
                "children": [{
                    "path": "/business",
                    "name": "商家管理",
                    "component": "business/index",
                    "meta": {
                        "title": `${langMap.message_business}`,
                        "parentId": 4,
                        "id": 0,
                        "requiresAuth": 'admin'
                    }
                }]
            },
            {
                "indexPath": 1,
                "title": `${langMap.message_dingdanS}`,
                "icon": "Checked",
                "id": 1,
                "children": [{
                    "path": "/order",
                    "name": "Order",
                    "component": "orderManagement/Order",
                    "meta": {
                        "title": `${langMap.message_dingdan}`,
                        "parentId": 1,
                        "id": 101,
                        "requiresAuth": 'user'
                    }
                }]
            }, {
                "indexPath": 2,
                "id": 2,
                "title": `${langMap.message_xitoS}`,
                "icon": "Tools",
                "children": [{
                    "path": "/loginLog",
                    "name": 'LoginLog',
                    "component": "system/LoginLog",
                    "meta": {
                        "title": `${langMap.message_rizhi}`,
                        "parentId": 2,
                        "requiresAuth": "user",
                        "id": 201,

                    }
                }]
            },
            {
                "indexPath": 3,
                "id": 3,
                "title": `${langMap.message_shangpingS}`,
                "icon": "Goods",
                "children": [{
                    "path": "/commodityManagement",
                    "name": 'CommodityManagement',
                    "component": "commodity/CommodityManagement",
                    "meta": {
                        "title": `${langMap.message_shpinguanli}`,
                        "parentId": 3,
                        "requiresAuth": "user",
                        "id": 301,

                    }
                }]
            }
        ],
        tags: []
    }),
    // 计算 cpmputed
    getters: {},
    //  方法 methods
    actions: {
        async getLogin(context, state) {
            const { data: res } = await loginAPI(state);
            if (res.value.code !== 200) {
                return ElMessage({
                    message: '登录失败',
                    type: 'error',
                })
            }
            if (res.value.code === 200) {
                ElMessage({
                    message: '登录成功',
                    type: 'success',
                })
                sessionStorage.setItem("token", res.value.data.token);
                state.token = res.value.data.token
                state.userID = res.value.data.userId
                router.push({ path: '/' });
            } else {
                ElMessage({
                    message: res.value.message,
                    type: 'error',
                })
            }
        },
        increment(val) {
            let result = this.tags.findIndex(item => item.path === val.path)  //去重
            result === -1 ? (val.name === "首页" ? this.tags.unshift(val) : this.tags.push(val)) : ''
        },
        titl(index) {
            if (this.tags.length === 1) return
            if (this.tags.length === 2) {
                if (index === 0) {
                    router.push({ path: this.tags[1].path })
                } else { router.push({ path: this.tags[0].path }) }
            }
            this.tags.splice(index, 1)
        }
    },
});
export default useCounterStore;
