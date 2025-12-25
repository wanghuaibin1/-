<template>
    <!-- 甄选好物 -->
    <div class="w-[24%] pb-6 bg-white cursor-pointer ll" @click="$router.push({ path: '/detail', query: { id: title.id} })">
        <!-- 图片 -->
        <div class="h-[300px] w-full">
            <el-image style="width: 100%; height: 100%"
                :src="title.image[0]" fit="cover" />
        </div>
        <!-- 文字描述 -->
        <div>
            <p class=" text-lg font-normal text-center	px-6">{{ title.productName }}</p>
            <!-- <p class="font-normal text-center	text-sm opacity-50 text-black my-1">双卫星通信 |超可靠玄武架构</p> -->
            <div class="flex items-center justify-center">
                <div class=" text-xs text-center px-1 my-1 text-red-600 mr-1"
                    style="border: 1px solid rgb(255, 0, 0);border-radius: 4px;">限时直降</div>
                <!-- <div class=" text-xs text-center px-1 my-1 mr-1"
                    style="border: 1px solid rgba(0, 0, 0, 0.5);border-radius: 4px;">限时直降</div> -->
            </div>
            <div class="flex items-center justify-center">
                <div class="font-medium	 text-lg ">￥{{ title.price }}</div>
                <div class="line-through opacity-50 text-xs ml-1">￥9999</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>
.ll {
    transition: all .4s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
}
</style>