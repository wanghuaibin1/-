import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('../views/Layout/index.vue'),
            children: [
                {
                    path: '',
                    component: () => import('../views/Home/index.vue')
                },
                {
                    path: 'detail',
                    component: () => import('/src/views/ProductDetails/index.vue')
                },
                {
                    path: 'shoppingcart',
                    component: () => import('/src/views/ShoppingCart/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: '登录',
            component: () => import("@/views/login/index.vue"),
        },
        {
            path: '/logon',
            name: '注册',
            component: () => import("@/views/Logon/index.vue"),
        },
        {
            path: "/:pathMatch(.*)",
            component: () => import("../components/404.vue"),
        },
    ],
    // 路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        }
    }
});
export default router;
