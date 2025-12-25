<script setup>
//轮播图
import { onMounted, ref } from 'vue'

const bannerList = ref({
  "result": [
    {
      "id": "16",
      "imgUrl": "https://res.vmallres.com/uomcdn/CN/cms/2024-02/7fe1dde6a36045c0a7b00ce58566a8b3.jpg",
      "hrefUrl": "/category/1005000",
      "type": "1"
    },
    {
      "id": "20",
      "imgUrl": "https://b.appsimg.com/upload/momin/2024/03/12/20/1710236952775.jpg",
      "hrefUrl": "/category/1005000",
      "type": "1"
    },
    {
      "id": "19",
      "imgUrl": "https://res.vmallres.com/uomcdn/CN/cms/2024-03/84c97bd81a944f57b7ad1a832b5f208d.jpg",
      "hrefUrl": "/category/1013001",
      "type": "1"
    },
    {
      "id": "17",
      "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/bi001/2024/0307/53/ias_45cf9a6248e2e5f0b74c6682f1ed3711_1135x545_85.jpg",
      "hrefUrl": "/category/1019000",
      "type": "1"
    },
    {
      "id": "18",
      "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/bi001/2023/0818/137/ias_34905cb68911bba1fd649722ffe80d54_1135x545_85.jpg",
      "hrefUrl": "/category/1013001",
      "type": "1"
    }
  ]
})

</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px" indicator-position="none">
      <el-carousel-item v-for="item in bannerList.result" :key="item.id">
        <!-- <img :src="item.imgUrl" alt=""> -->
        <el-image class=" cursor-pointer" style="width: 100%; height: 100%" :src="item.imgUrl" fit="cover" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped >
:deep(.el-carousel__arrow--left) {
  left: 210px;
}

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home-banner {
  width: 980px;
  height: 500px;
  /* position: absolute; */
  /* left: 0;
  top: 0; */
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>