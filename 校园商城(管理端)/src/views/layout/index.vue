<template>
    <el-container class="layout-container-demo" style="height: 100vh">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            router unique-opened background-color="rgb(0,21,41)" text-color="#ffffffb3" active-text-color="#409EFF"
            @close="handleClose" popper-effect="light">
            <template v-for="item in menusList">
                <el-menu-item v-if="quanxian0(item)" :index="item.path">
                    <component :is="item.icon" style="width: 1rem;height: 1rem;margin-right: 0.5rem;"></component>
                    <span>{{ $t(item.title) }}</span>
                </el-menu-item>

                <el-sub-menu v-else-if="quanxian1(item)" :index="item.title">
                    <template #title>
                        <component :is="item.icon" style="width: 1rem;height: 1rem;margin-right: 0.5rem;"></component>
                        <span>{{ $t(item.title) }}</span>
                    </template>

                    <template v-for="obj in item.children">
                        <el-menu-item :index="obj.path">{{ $t(obj.meta.title)
                            }}</el-menu-item>
                    </template>

                </el-sub-menu>
            </template>
        </el-menu>

        <el-container>
            <el-header height="3rem">
                <div class="flex justify-between h-full">
                    <div class="flex h-full items-center  justify-between">
                        <el-icon size="20">
                            <Fold v-if="!isCollapse" @click="isCollapse = !isCollapse" />
                            <Expand v-else @click="isCollapse = !isCollapse" />
                        </el-icon>
                        <AppCrumbsRouter class="ml-4" />
                    </div>
                    <div class="flex h-full items-center  justify-between cursor-pointer">
                        <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认"
                            cancel-button-text="取消">

                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                        <div class="h-[3rem] flex items-center hover:bg-[rgb(176,170,170)] px-1">
                            <KSwitchDark />
                        </div>
                        <div class="h-[3rem] flex items-center hover:bg-[rgb(176,170,170)] px-1" title="全屏">
                            <el-icon sizze="20" class=" cursor-pointer mx-4" @click="toggleFullScreen">
                                <FullScreen />
                            </el-icon>
                        </div>
                        <div class="h-[3rem] flex items-center hover:bg-[rgb(176,170,170)] px-1">
                            <AppLanguage />
                        </div>
                        <div class="h-[3rem] flex items-center hover:bg-[rgb(176,170,170)] px-1">
                            <el-avatar size="20"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            <span class="ml-1">{{ $t(langMap.message_hello) }}</span>
                        </div>
                        <div class="h-[3rem] flex items-center hover:bg-[rgb(176,170,170)] px-1">
                            <el-icon size="20">
                                <Setting />
                            </el-icon>
                        </div>
                    </div>
                </div>
            </el-header>
            <ApplanbelRouter />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import useCounterStore from '@/stores/logon.js'
import ApplanbelRouter from '@/components/appRouter/appLabelRouter.vue'
import AppCrumbsRouter from '@/components/appRouter/appCrumbsRouter.vue';
import AppLanguage from '@/components/appRouter/appLanguage.vue'
import { KSwitchDark } from "@tomiaa/vue3-components"
import langMap from '@/locale/langMap'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useCounterStore()
const menusList = ref(store.menuList)
const isCollapse = ref(false)

const confirm = () => {
    store.$reset()
    // 退出登录业务逻辑实现
    sessionStorage.clear()
    // 2.跳转到登录页
    router.push('/login')
}
const token = sessionStorage.getItem("token")
const quanxian0 = computed(() => {
    return item => {
        if (!item.children || item.id === '000') {
            return true
        } else return false
    }
})
const quanxian1 = computed(() => {
    return item => {
        const even = (element) => element.meta.requiresAuth === 'user'
        const k = item.children.some(even)
        return k
    };
})
const handleOpen = (key, keyPath) => {

}
const handleClose = (key, keyPath) => {

}
const detection = () => {
    const items = [
        'fullscreenElement',
        'mozFullScreenElement',
        'webkitFullscreenElement',
        'msFullscreenElement'
    ]
    return items.some(item => {
        if (document[item]) {
            return true
        }
    })
}
const toggleFullScreen = () => {
    const elem = document.documentElement
    if (!detection()) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

}
</script>

<style scoped></style>