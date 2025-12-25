<template>
    <div class="w-[24%] pb-3 bg-white cursor-pointer ll  overflow-auto ">
        <!-- 图片 -->
        <div class="h-[300px] w-full">
            <div>
                <el-image style="width: 100%; height: 100%" :src="title.pict_url" lazy />
            </div>
        </div>
        <!-- 文字描述 -->
        <div>
            <p class=" text-lg font-normal text-center	px-6" style="      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;">{{ title.title }}</p>
            <div class="flex items-center justify-center">
                <div v-if="title.miniDetail" class=" text-xs text-center px-1 my-1 text-red-600 mr-1"
                    style="border: 1px solid rgb(255, 0, 0);border-radius: 4px;">限时直降</div>
                <div class=" text-xs text-center px-1 my-1 mr-1"
                    style="border: 1px solid rgba(0, 0, 0, 0.5);border-radius: 4px;">{{ title.month_sale }}</div>
            </div>
            <div class="flex pt-3 items-center justify-center">
                <div class=" text-xl font-semibold	  text-red-500">￥{{ title.real_wap_price }}</div>
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