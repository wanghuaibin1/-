<template>
    <div class="whitespace-nowrap w-full   py-1"
        style="border-top: 1px solid #b0b0b0;border-bottom: 1px solid #b0b0b0;">
        <el-tag v-for="tag, index in store.tags" :key="tag.name" class="mx-1 cursor-pointer" closable hit
            :color="(tag.path === route.path ? 'rgb(9,96,189)' : '')" :style="{color:(tag.path === route.path ?'white':'')}"  @close="handleClose(tag, index)"
            @click="changeMenu(tag)">
            {{ $t(tag.meta.title) }}
        </el-tag>
    </div>
</template>

<script setup >
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useCounterStore from '@/stores/logon.js'
import langMap from '@/locale/langMap'

const store = useCounterStore()
const router = useRouter()
const route = useRoute()


watch(route, () => {
    const RoInformation = { path: route.path, meta: route.meta, name: route.name }
    store.increment(RoInformation)
}, { immediate: true })
const handleClose = (tag, index) => {
    const length = store.tags.length - 1
    store.titl(index)
    if (tag.path !== route.path || store.tags.length === 1) return
    if (index === length) {
        router.push({ path: store.tags[index - 1].path })
    } else {
        // 否则往右边跳转
        router.push({ path: store.tags[index].path })
    }
}
const changeMenu = (val) => {
    router.push({ path: val.path })
}
</script>

