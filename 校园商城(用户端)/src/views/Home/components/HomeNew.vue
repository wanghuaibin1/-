<template>
  <div class="bg-[rgb(241,243,245)]" >
    <div class="container py-4">
      <div class="w-full flex justify-between my-4">
        <div class=" text-3xl text-black pl-6">甄选好物</div>
        <div class=" cursor-pointer text-slate-500 hover:text-red-500 text-lg flex  items-center">
          更多
          <el-icon size="18">
            <Right />
          </el-icon>
        </div>
      </div>
      <div class="flex justify-between">
        <Shangp v-for="i in cartStore.commodity " :title="i" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue';
import Shangp from './shangp.vue'
import { productAPI } from '/src/api/user'
import  useCart  from '/src/stores/logon'
// const cartStore = useCartStore()
const cartStore = useCart()
</script>

<style scoped></style>