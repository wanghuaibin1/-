<template>
  <div class="w-[700px] ">
    <div>
      <div class=" leading-10">
        <span class=" text-2xl leading-10" style="color: rgba(0,0,0,.9);">{{ title.productName }}</span>
      </div>
      <div class=" mt-5">
        <span class="text-sm " style="color: rgba(0, 0, 0, .6);">双卫星通信，超可靠玄武架构，全焦段超清影像，静谧通话</span>
      </div>
      <div class="mt-5 flex text-[rgb(207,10,44)]">
        <div class="leading-[3.5rem] mb-2">￥</div>
        <div class="text-4xl">{{ title.price }}</div>
      </div>
    </div>
    <div>
      <div>
        <span class="text-2xl">颜色</span>
        <div class="flex mt-4 pr-4">
          <div class="text-lg w-1/2 text-center py-4" style="border:1px solid rgba(0, 0, 0, 0.1);border-radius: 8px;">砚黑
          </div>
          <div class="text-lg w-1/2 ml-2 text-center py-4 "
            style="border:1px solid rgba(0, 0, 0, 0.1);border-radius: 8px;">宣白
          </div>
        </div>
      </div>
      <div class="mt-6">
        <span class="text-2xl">版本</span>
        <div class="flex mt-4">
          <div class="text-lg w-1/2 text-center py-4" style="border:1px solid rgba(0, 0, 0, 0.1);border-radius: 8px;">
            16G+1TB
          </div>
        </div>
      </div>
      <div class="mt-6">
        <span class="text-2xl">销售类型</span>
        <div class="flex mt-4">
          <div class="text-lg w-1/2 text-center py-4" style="border:1px solid rgba(0, 0, 0, 0.1);border-radius: 8px;">
            全款购买
          </div>
        </div>
      </div>
      <div class="mt-6">
        <span class="text-2xl">销售类型</span>
        <div class="flex mt-4">
          <div class="text-lg w-1/2 text-center py-4" style="border:1px solid rgba(0, 0, 0, 0.1);border-radius: 8px;">
            全款购买
          </div>
        </div>
      </div>
    </div>
    <div class=" pr-4"> <el-divider /></div>
    <div>
      <div class="mt-5 flex text-[rgb(207,10,44)]">
        <div class="leading-[3rem] text-2xl">￥</div>
        <div class="text-4xl">{{ title.price }}</div>
      </div>
      <div class="text-[rgba(0,0,0,.6)]">
        已选：<span>宣白·16GB+1TB·全款购买</span> <span>x1</span>
      </div>
      <div class="flex my-8  items-center justify-between">
        <div class="w-[120px] flex">
          <div class="w-8 h-8 text-center" style="border: 1px solid rgba(0, 0, 0, .05); border-radius: 100%;"
            @click="add">-</div>
          <div class="w-16 text-center">{{ input }}</div>
          <div class="w-8 h-8 text-center" style="border: 1px solid rgba(0, 0, 0, .05); border-radius: 100%;"
            @click="minus">+</div>
        </div>
        <div class="flex w-2/3 mr-[100px]  justify-around">
          <div class="w-[200px] h-[50px] flex justify-center items-center"
            style="background-image: linear-gradient(1.5708rad, rgb(255, 168, 72), rgb(255, 144, 77));border-radius: 26px;">
            <div class="text-white text-xl  cursor-pointer" @click="jiaru">加入购物车</div>
          </div>
          <div class="w-[200px] h-[50px] flex justify-center items-center"
            style="background: linear-gradient(1.5708rad, rgb(254, 89, 69), rgb(214, 26, 25));border-radius: 26px;">
            <div class="text-white text-xl  cursor-pointer">立即购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { cartaddAPI } from '/src/api/user'
import { ElMessage } from 'element-plus'
import useCart from '/src/stores/shoppingCart'
const cartStore = useCart()
const props = defineProps(['title'])
const input = ref(1)
const add = () => {
  if (input.value === 1) {
    return
  }
  input.value--
}
const minus = () => {
  if (input.value === 5) {
    return
  }
  input.value++
}
const jiaru = async () => {
  const { data: res } = await cartaddAPI({
    pid: props.title.id,
    quantity: input.value
  })
  if (res.value.code === 200) {
    ElMessage({
      message: "加入成功",
      type: 'success',
    })
    cartStore.updateNewList()
  } else {
    ElMessage.error('加入失败')
  }
}
</script>
<style scoped lang='scss'></style>