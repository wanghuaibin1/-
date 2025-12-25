<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import Co from './components/co.vue'
import HomeNew from './components/HomeNew.vue'
import Recommend from './components/Recommend.vue'
import Shangpin from './components/shangpin.vue'
import data from '/src/assets/js/shangp'
import userLogin from '/src/stores/logon'
import useCart from '/src/stores/shoppingCart'
import { ref, reactive, onMounted } from 'vue';
const cartStore = userLogin()
const cart = useCart()

const sp = ref()
const goods = reactive({
  list: []
})
const num = ref(0)
const k = ref([])
const da = () => {
  k.value = data.value.slice(num.value, num.value + 8);
  k.value.forEach((item => goods.list.push(item)))
}
onMounted(() => {
  const token = sessionStorage.getItem("token");
  if (token) {
    cartStore.commodityact()
    cart.updateNewList()
  }
  da()
  // 判断元素是否出现在视口内
  const isShow = () => {
    const rect = sp.value.getBoundingClientRect();
    // 判断元素右下角到视口地部的距离是否小于
    return rect.bottom < 950;
  };
  // 懒加载
  const lazyLoad = () => {
    if (num.value >= 25) return
    isShow()
    if (isShow()) {
      num.value += 8
      da()
    }
  };
  // 节流函数
  const throttle = (fn, delay) => {
    let timer = null;
    return () => {
      if (timer) {
        return;
      };
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, delay);
    }
  };
  window.onscroll =throttle(lazyLoad, 500);
})

</script>

<template>

  <div class="container flex flex-col py-6">
    <HomeCategory />
    <HomeBanner />
    <Co />
    <div class="flex justify-between mt-4 h-[300px]  mk">
      <div class="h-full w-[24%] ">
        <div style="text-stroke: #979797 .7px;background-color: #ffffff;height: 35%;padding-top: 20px;">
          <p class=" text-center text-2xl  font-normal mb-3" style="color: #333;">新品好物</p>
          <p class=" text-center text-xl" style="#666">每天都有好物上新</p>
        </div>
        <el-image style="width: 100%; height: 65%"
          src="https://res8.vmallres.com/pimages//uomcdn/CN/pms/202305/gbom/6941487291205/800_800_C843FF4CC5559FE993FB1A8A86BD1EAFmp.png"
          fit="scale-down" />
      </div>
      <div class="h-full w-[24%] ">
        <div style="text-stroke: #979797 .7px;background-color: #ffffff;height: 35%;padding-top: 20px;">
          <p class=" text-center text-2xl font-normal mb-3" style="color: #333;">逛好店店</p>
          <p class=" text-center text-xl" style="#666">万家宝藏好店等你来</p>
        </div>
        <el-image style="width: 100%; height:65%"
          src="https://res3.vmallres.com/pimages//uomcdn/CN/pms/202306/gbom/6941487298976/800_800_F902AD5D19AD0CD8B517A8A2FBF5BA8Cmp.png"
          fit="scale-down" />
      </div>
      <div class="h-full w-[24%] ">
        <div style="text-stroke: #979797 .7px;background-color: #ffffff;height: 35%;padding-top: 20px;">
          <p class=" text-center text-2xl font-normal mb-3" style="color: #333;">Mate 60 Pro+</p>
          <p class=" text-center text-xl" style="#666">超可靠玄武架构</p>
        </div>
        <el-image style="width: 100%; height: 65%"
          src="https://res6.vmallres.com/pimages//uomcdn/CN/pms/202401/gbom/6942103109591/800_800_650AA2D1F4312445D02527C6CC0FD74Fmp.png"
          fit="scale-down" />
      </div>
      <div class="h-full w-[24%] ">
        <div style="text-stroke: #979797 .7px;background-color: #ffffff;height: 35%;padding-top: 20px;">
          <p class=" text-center text-2xl font-normal mb-3" style="color: #333;">大牌推荐</p>
          <p class=" text-center text-xl" style="#666">大品牌值得信赖</p>
        </div>
        <el-image style="width: 100%; height: 65%"
          src="https://res6.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/GB57010218/800_800_CD67CDAA3453C0E22AB416A32A2449F0mp.png"
          fit="scale-down" />
      </div>
    </div>
  </div>
  <HomeNew v-if="cartStore.commodity" />
  <img class="container cursor-pointer"
    src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/9dadefa61e594328a0bc922c54c6320a.png" alt="">
  <Recommend />

  <div class="bg-[rgb(241,243,245)]" ref="sp">
    <div class="container py-4">
      <div class="w-full flex justify-between my-4">
        <div class=" text-3xl text-black pl-6">猜你喜欢</div>
        <div class=" cursor-pointer text-slate-500 hover:text-red-500 text-lg flex  items-center">
          更多
          <el-icon size="18">
            <Right />
          </el-icon>
        </div>
      </div>
      <div class="flex justify-between flex-wrap">
        <Shangpin v-for="i in goods.list" :title="i" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<style>
.mk>div:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
}
</style>