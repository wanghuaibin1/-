<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import HeaderCart from './components/HeaderCart.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useRouter } from 'vue-router'
import useCounterStore from '/src/stores/logon'
import useCart from '/src/stores/shoppingCart'
import { ref, reactive, onMounted } from 'vue';
const router = useRouter()
const store = useCounterStore()
const cart = useCart()

const token = ref(sessionStorage.getItem("token"));
const confirm = () => {
    store.$reset()
    cart.$reset()
    // 退出登录业务逻辑实现
    sessionStorage.clear()
    token.value = sessionStorage.getItem("token");
    // 2.跳转到登录页
    router.push('/')
}
const k = ref(false)
onMounted(() => {
    //     // 节流函数
    //     const ti = () => {
    //         let time = null;
    //         return () => {
    //             if (time) {
    //                 return;
    //             };
    //             time = setTimeout(() => {
    //                 if (document.documentElement.scrollTop > 1000) {
    //                     k.value = true
    //                 } else {
    //                     k.value = false
    //                 }
    //                 time = null;
    //             }, 400);
    //         }
    //     };
    // window.onscroll = console.log(5);;
})
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="token">
                    <li><a href="javascript:;"><i class=" iconfont icon-user"></i>xxx</a></li>
                    <li>
                        <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认"
                            cancel-button-text="取消">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li><a href="javascript:;">会员中心</a></li>
                </template>

                <template v-else>
                    <li><a href="javascript:;" @click="$router.push('/logon')">立即注册</a></li>
                    <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">店铺入住</a></li>
                </template>
                <HeaderCart />
            </ul>
        </div>
    </nav>
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
    <div class="swiper-top" :style="{ display: k ? 'block' : 'none' }"> <a href="#top"
            style=" z-index: 99;width:100%; height:100%;display: block;"></a></div>
</template>


<style scoped>
.app-topnav {
    background: rgb(0, 0, 0);

    ul {
        display: flex;
        height: 32px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: rgb(39, 186, 155);
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}

.swiper-top {
    position: fixed;
    width: 150px;
    height: 174px;
    background-image: url(/src/assets/images/QQ图片20220808163029.png);
    overflow: hidden;
    display: block;
    z-index: 100;
    cursor: pointer;
    left: calc(50% + 530px);
    bottom: 60px;
    transform: translateY(0px);

}

.swiper-top:hover {
    background-image: url(/src/assets/images/QQ图片20220808162645.png);
    animation: rockMove steps(4) .4s infinite;
}

@keyframes rockMove {
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: -600px;
    }
}
</style>