<template>
  <div class="mb-[80px]">
    <div class="flex mb-14">
      <div class="w-1/3 flex">
        <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
        <div class="flex flex-col ml-1">
          <div class="text-xl text-black">爱吃糖的小涵</div>
          <div><span class="text-sm text-gray-500">2024-02-13 10:33:10</span><span
              class="text-base text-gray-500 pr-1"><el-icon>
                <LocationFilled />
              </el-icon>四川</span></div>
        </div>
      </div>
      <div calss="w-2/3">
        <el-rate size="large" v-model="value2" disabled :colors="colors" disabled-void-color="#7a7374" />
        <div class="text-lg text-black">
          产品很好！
        </div>
        <div class="mt-4 text-base text-gray-500"> 宣白,16GB+1TB,全款购买</div>
        <div class=" bg-[rgb(229,229,229)] rounded-3xl flex pl-2 w-[5.5rem] mt-6">
          <Dian/>
        </div>
      </div>
    </div>

    <el-divider />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dian from './Dianzan.vue'
const colors = ref(['#99A9BF', '#F7BA2A', '#ee3f4d']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
const value2 = ref(4)
</script>
<style scoped lang='scss'></style>