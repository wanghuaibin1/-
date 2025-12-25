import { defineStore } from "pinia";
import { loginAPI } from '/src/api/login.js'
import { productAPI } from '/src/api/user'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import router from "@/router";
import useCart from '/src/stores/shoppingCart'

// const router = useRouter()
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一 id
// 参数2：对象，可以提供state actions getters

const useCounterStore = defineStore("counter", {

    // 数据 data
    state: () => ({
        token: '',
        userID: '',
        commodity: ''
    }),
    // 计算 cpmputed
    getters: {},
    //  方法 methods
    actions: {
        async getLogin(context, state) {
            const cartStore = useCart()
            const { data: res } = await loginAPI(state)

            if (res.value.code === 200) {
                ElMessage({
                    message: res.value.message,
                    type: 'success',
                })
                sessionStorage.setItem("token", res.value.data.token);
                sessionStorage.setItem("userID", res.value.data.userId);
                this.token = res.value.data.token
                this.userID = res.value.data.userId
                cartStore.updateNewList()
                this.commodityact()
                router.push({ path: '/' });
            } else {
                ElMessage.error('登录失败')
            }
        },
        async commodityact() {
            const { data: res } = await productAPI({ count: 4})
            this.commodity = res.value.data
        },
        // 退出时清除用户信息
        clearUserInfo() {
            this.token = ''
        }
    },
});
export default useCounterStore;
