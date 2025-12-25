<template>
    <div class="goods-image" style="position: sticky; top: 16px;">
        <!-- 预览大图 -->
        <div class="large" v-show="show" :style="[{ backgroundImage: `url(${title.images[currIndex]})` }, bgPosition]"></div>
        <!-- 商品大图 -->
        <div class="middle">
            <!-- 商品大图 -->
            <img ref="target" class="h-full w-full" :src="title.images[currIndex]" alt="" />
            <!-- 鼠标进入图片的遮罩 -->
            <div class="layer" v-show="show" :style="[position]"></div>
        </div>
        <!-- 缩略小图 -->
        <div class="small px-6">
            <div class="w-1/5" v-for="(img, i) in title.images" :key="img" :class="{ active: i === currIndex }">
                <!-- 鼠标移入商品大图旁边的小图商品大图位置就会显示该图 -->
                <img @mouseenter="currIndex = i" :src="img" alt="" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, watch, defineProps } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const props = defineProps(['title'])
// 控制预览大图与遮罩层的显示与隐藏
const show = ref(false)
// 控制商品大图显示那张图片
const currIndex = ref(0)
// ref 获取 DOM 元素
const target = ref(null)
// 记录遮罩半透明图在商品大图中的坐标位置
const position = reactive({
    top: 0,
    left: 0
})
// 记录遮罩层做覆盖的区域在预览时的预览大图的坐标位置
const bgPosition = reactive({
    backgroundPositionX: 0,
    backgroundPositionY: 0
})
// 第三方 vueuse 提供的方法 useMouseInElement 获取鼠标在某块区域的坐标
const { elementX, elementY, isOutside } = useMouseInElement(target)
// 侦听器监测鼠标进入商品大图时的坐标从而操纵遮罩层和预览大图的效果
watch([elementX, elementY, isOutside], () => {
    // isisOutside.value 为 true 的时候代表鼠标未进入目标元素，为 false 时代表鼠标进入目标元素
    // 为 true 是不记录坐标以免损耗性能
    if (isOutside.value) {
        // 鼠标未进入目标元素不显示遮罩层和预览大图
        show.value = false
        return
    }
    // 鼠标进入目标元素显示遮罩层和预览大图
    show.value = true
    // 判断边界值，根据遮罩层大小、商品图片大小判断
    // left 的边界值（左、右）
    if (elementX.value < 100) {
        position.left = 0
    } else if (elementX.value > 350) {
        position.left = 250
    } else {
        position.left = elementX.value - 100
    }
    // top 的边界值（上、下）
    if (elementY.value < 100) {
        position.top = 0
    } else if (elementY.value > 350) {
        position.top = 250
    } else {
        position.top = elementY.value - 100
    }
    // 遮罩层所覆盖的商品图片部分在预览大图中的坐标，加单位
    bgPosition.backgroundPositionY = -position.top * 2 + 'px'
    bgPosition.backgroundPositionX = -position.left * 2 + 'px'
    // 遮罩层相对于商品大图左上角坐标，加单位
    position.top += 'px'
    position.left += 'px'
})

</script>
<style scoped>
.layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    left: 0;
    top: 0;
    position: absolute;
}

.middle {
    width: 480px;
    height: 500px;
    position: relative;
    cursor: move;

}

.large {
    position: absolute;
    top: 0;
    left: 450px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
}

.goods-image {
    width: 50%;
    height: 650px;
    display: flex;
    z-index: 500;
    flex-direction: column
}



.small {
    width: 100%;
    display: flex;
}

li {
    width: 68px;
    height: 68px;
    margin-left: 12px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover,
    &.active {
        border: 2px solid @xtxColor;
    }
}
</style>
