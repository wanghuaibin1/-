<template>
    <div class="w-[250px] ml-[10px] h-[500px]  px-6 py-2 absolute right-0" style=" box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 36px;">
        <div class="w-full h-1/2 flex flex-col items-center  justify-evenly">
            <el-avatar class=" cursor-pointer" :size="70" src="/src/assets/images/宜品 · 杂货铺.png" />
            <p class="-mt-6 cursor-pointer hover:text-red-700">Hi~欢迎来到宜品 · 杂货铺！</p>
            <div v-if="!token">
                <el-button type="success" round @click="$router.push('/login')">登录</el-button>
                <el-button type="danger" round @click="$router.push('/logon')">注册</el-button>
            </div>
        </div>
        <el-divider />
        <div class="w-full h-[40%]">
            <div style="    display: grid;
    grid-template-columns: auto auto auto auto;
    height: 100%;
    justify-items: center;
    align-content: space-evenly;">
                <div class=" cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <Star />
                    </el-icon>
                    <p class="mt-2 text-xs">宝贝收藏</p>
                </div>
                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <Present />
                    </el-icon>
                    <p class="mt-2 text-xs">收藏店铺</p>
                </div>
                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <ShoppingBag />
                    </el-icon>
                    <p class="mt-2 text-xs">购物车</p>
                </div>
                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <PieChart />
                    </el-icon>
                    <p class="mt-2 text-xs">我的足迹</p>
                </div>

                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <QuestionFilled />
                    </el-icon>
                    <p class="mt-2 text-xs">帮助中心</p>
                </div>
                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <EditPen />
                    </el-icon>
                    <p class="mt-2 text-xs">我的评论</p>
                </div>
                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <MapLocation />
                    </el-icon>
                    <p class="mt-2 text-xs">收获地址</p>
                </div>
                <div class="cursor-pointer flex items-center flex-col	">
                    <el-icon size="25">
                        <BellFilled />
                    </el-icon>
                    <p class="mt-2 text-xs">我的消息</p>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import useCounterStore from '/src/stores/logon'
const token = sessionStorage.getItem("token");
const store = useCounterStore()
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'],
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>
<style scoped ></style>