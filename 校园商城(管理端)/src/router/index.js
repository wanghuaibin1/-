import { createRouter, createWebHistory } from "vue-router";
import langMap from '@/locale/langMap'
import { ElMessage } from 'element-plus'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import("@/views/login/index.vue"),
        },
        {
            path: "/:pathMatch(.*)",
            component: () => import("../components/404.vue"),
        },
        {
            path: '/',
            name: 'Layout',
            component: () => import("@/views/layout/index.vue"),
            meta: {
                requiresAuth: true // 在这里设置，表示layout下边的子路由全部需要登录才能访问
            },
            redirect: { name: '首页' },
            children: [
                {
                    path: "business",
                    component: () => import("@/views/business/index.vue"),
                    name: "商家管理",
                    meta: {
                        parentId: 4,
                        id: '0',
                        title: `${langMap.message_business}`,
                        "requiresAuth": "true"
                    }
                },
                {
                    path: "home",
                    component: () => import("@/views/home/index.vue"),
                    name: "首页",
                    meta: {
                        parentId: 0,
                        id: '000',
                        title: `${langMap.message_home}`,
                        "requiresAuth": "true"
                    }
                },
                {
                    path: "order",
                    component: () => import("@/views/orderManagement/Order.vue"),
                    name: "订单",
                    meta: {
                        parentId: 1,
                        id: 101,
                        title: `${langMap.message_dingdan}`,
                        "requiresAuth": "true"
                    }
                }, {
                    path: "loginLog",
                    component: () => import("@/views/system/LoginLog.vue"),
                    name: "登录日志",
                    meta: {
                        parentId: 2,
                        id: 201,
                        title: `${langMap.message_rizhi}`,
                        "requiresAuth": "true"

                    }
                }, {
                    path: "commodityManagement",
                    component: () => import("@/views/commodity/CommodityManagement.vue"),
                    name: "商品管理",
                    meta: {
                        parentId: 3,
                        id: 301,
                        title: `${langMap.message_shpinguanli}`,
                        "requiresAuth": "true"
                    }
                },
            ]
        },
    ],
});
// router.beforeEach(async (to, from, next) => {
//     const token = sessionStorage.getItem("token");
//     if (to.path === '/login') {
//         next()
//     } else {
//         if (token) {
//             next()
//         } else {
//             const info = () => {
//                 ElMessage({
//                     message: '登录失效',
//                     type: 'error',
//                 })
//             };
//             info()
//             next('/login')
//         }
//     }
// })


export default router;
