<template>
    <div class="container">
        <div>
            <p class="text-3xl my-6 pl-6">为您推荐</p>
            <div class="flex h-[614px]">
                <div class="w-1/4 h-full cursor-pointer">
                    <img style="width: 100%; height: 100%" src="https://i1.mifile.cn/a4/xmad_15632723287643_WkFwH.jpg"
                        alt="">
                </div>
                <div class="w-1/2 h-full flex flex-wrap cursor-pointer bg">
                    <div class="w-1/2 h-1/2 py-4 bg-white">
                        <div class="h-[35%] w-full py-4 hover:text-red-500">
                            <p class="font-normal text-3xl text-center">时尚精装女装</p>
                            <p class="font-normal text-[14px]  text-center my-4">MCQ飞燕服经典呈现</p>
                        </div>
                        <div class="h-[60%] w-full flex justify-center items-center">
                            <div class="h-[90%] rounded-[8px] overflow-hidden	">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://lili-system.oss-cn-beijing.aliyuncs.com/example1.png" fit="contain" />
                            </div>

                        </div>
                    </div>
                    <div class="w-1/2 h-1/2 py-4 bg-white">
                        <div class="h-[35%] w-full py-4 hover:text-red-500">
                            <p class="font-normal text-3xl text-center">型格潮流男装</p>
                            <p class="font-normal text-[14px]  text-center my-4">champion火力全开</p>
                        </div>
                        <div class="h-[60%] w-full flex justify-center items-center">
                            <div class="h-[90%] rounded-[8px] overflow-hidden	">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://lili-system.oss-cn-beijing.aliyuncs.com/example2.png" fit="contain" />
                            </div>

                        </div>
                    </div>
                    <div class="w-1/2 h-1/2 py-4 bg-white">
                        <div class="h-[35%] w-full py-4 hover:text-red-500">
                            <p class="font-normal text-3xl text-center">大牌品质包</p>
                            <p class="font-normal text-[14px]  text-center my-4">精品好物等你挑 </p>
                        </div>
                        <div class="h-[60%] w-full flex justify-center items-center">
                            <div class="h-[90%] rounded-[8px] overflow-hidden	">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://lili-system.oss-cn-beijing.aliyuncs.com/example4.png" fit="contain" />
                            </div>

                        </div>
                    </div>
                    <div class="w-1/2 h-1/2 py-4 bg-white">
                        <div class="h-[35%] w-full py-4 hover:text-red-500">
                            <p class="font-normal text-3xl text-center">精品好物</p>
                            <p class="font-normal text-[14px]  text-center my-4">磨砂喜茶注塑杯定做</p>
                        </div>
                        <div class="h-[60%] w-full flex justify-center items-center">
                            <div class="h-[90%] rounded-[8px] overflow-hidden	">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://gw.alicdn.com/imgextra/i4/2404562843/O1CN01urU4LX1Ws8jzBxDJR_!!2404562843.jpg_Q75.jpg_.webp"
                                    fit="contain" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="w-1/4 h-full bg-white 	 nj">
                    <div class="w-full h-[8%] text-lg pl-6 pt-4">最近热卖 </div>
                    <div v-for="i in 4" class="w-full h-[23%] flex">
                        <div class="w-2/5">
                            <el-image style="width: 100%; height: 100%"
                                src="https://res.vmallres.com/uomcdn/CN/cms/2024-01/e8d8e5b7823d419cb9b15da6010b9c95.png"
                                fit="cover" />
                        </div>
                        <div class="w-3/5 flex flex-col justify-evenly">
                            <p class="text-wrap indent-4 text-base hover:text-red-500">GUCCI古驰Dionysus酒神系列GG
                                Supermini女士单肩包1件</p>
                            <el-statistic prefix="￥" :value="268500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between my-4">
            <div class="w-[32.5%]">
                <img src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/350f8e3fa0c94ffbbaa1828e2ea9aa68.png">
            </div>
            <div class="w-[32.5%]">
                <img src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/44072692ecfc4ba787ee35faf5b5618b.png">
            </div>
            <div class="w-[32.5%]">
                <img src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/44072692ecfc4ba787ee35faf5b5618b.png">
            </div>
        </div>
        <div class="flex justify-between">
            <div class="w-[49%] h-[345px] flex bg-white rounded-md">
                <div class="w-1/3 h-full">
                    <img src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/056bdd390f2640baba3129bd1d1da38d.jpg"
                        alt="">
                </div>
                <div class="w-2/3 h-full">
                    <!-- <div class="w-full h-1/6">新品</div> -->
                    <div class="h-full flex flex-wrap ko">
                        <div class="w-[50%] h-1/2 flex items-center">
                            <div class="w-1/2 h-[70%]">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://res4.vmallres.com/pimages//uomcdn/CN/pms/202304/gbom/6941487295494/800_800_92C397A019C9141026C913A25A2E96A8mp.png"
                                    fit="cover" />
                            </div>
                            <div class="w-[50%] h-[90px] flex justify-around flex-col ll">
                                <p class=" text-sm hover:text-red-500 " style="overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;word-break:break-all;text-indent:10px;
-webkit-box-orient:vertical;
-webkit-line-clamp:3; ">HUAWEI MateBook D 16 2023 13代酷睿标压 i9 16GB 1TB 16英寸护眼全面屏 深空灰</p>
                                <el-statistic class="text-lg" prefix="￥" :value="6999" />
                            </div>
                        </div>
                        <div class="w-[50%] h-1/2 flex items-center">
                            <div class="w-1/2 h-[70%]">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1706151618.3621328.png"
                                    fit="cover" />
                            </div>
                            <div class="w-[50%] h-[90px] flex justify-around flex-col ll">
                                <p class=" text-sm hover:text-red-500 " style="overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;word-break:break-all;text-indent:10px;
-webkit-box-orient:vertical;
-webkit-line-clamp:3; ">Redmi Note 13 Pro</p>
                                <el-statistic class="text-lg" prefix="￥" :value="1499" />
                            </div>
                        </div>
                        <div class="w-[50%] h-1/2 flex items-center">
                            <div class="w-1/2 h-[70%]">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://res5.vmallres.com/pimages//uomcdn/CN/pms/202305/gbom/6941487293797/800_800_73CD9E3F0CEF5E08D1DF2541D1AF6F7Cmp.png"
                                    fit="cover" />
                            </div>
                            <div class="w-[50%] h-[90px] flex justify-around flex-col ll">
                                <p class=" text-sm hover:text-red-500 " style="overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;word-break:break-all;text-indent:10px;
-webkit-box-orient:vertical;
-webkit-line-clamp:3; ">HUAWEI MateBook E 12.6英寸 2023款 WIFI i7 16GB+512GB 星云灰（含原野绿键盘）</p>
                                <el-statistic class="text-lg" prefix="￥" :value="7199" />
                            </div>
                        </div>
                        <div class="w-[50%] h-1/2 flex items-center">
                            <div class="w-1/2 h-[70%]">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/fcfc0bb7c71c45d090fa1563e6067908.jpg?x-oss-process=style/400X400"
                                    fit="cover" />
                            </div>
                            <div class="w-[50%] h-[90px] flex justify-around flex-col ll">
                                <p class=" text-sm hover:text-red-500 " style="overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;word-break:break-all;text-indent:10px;
-webkit-box-orient:vertical;
-webkit-line-clamp:3; ">2020新款 Apple iPad Air 4代</p>
                                <el-statistic class="text-lg" prefix="￥" :value="2000.00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[49%] h-[345px] flex bg-white rounded-md">
                <div class="w-1/3 h-full">
                    <img class="h-full"
                        src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/738062aa691741bbb2988184ab1763b2.jpg"
                        alt="">
                </div>
                <div class="w-2/3 h-full px-8 py-8">
                    <!-- <div class="w-full h-1/6">新品</div> -->
                    <div class="h-full flex flex-wrap ko">
                        <div class="w-1/2 h-1/3">
                            <el-image style="width: 100%; height: 100%"
                                src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/a974ed04af6a44d9b49fafb2f54a4667.png"
                                fit="contain" />
                        </div>
                        <div class="w-1/2 h-1/3">
                            <el-image style="width: 100%; height: 100%"
                                src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/35e83a5fcb01467bb7de698ba28daacc.png"
                                fit="contain" />
                        </div>
                        <div class="w-1/2 h-1/3">
                            <el-image style="width: 100%; height: 100%"
                                src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/6553f16af0c14303a225e7ece030d8ca.png"
                                fit="contain" />
                        </div>
                        <div class="w-1/2 h-1/3">
                            <el-image style="width: 100%; height: 100%"
                                src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/1c734fd23b314dae975c6886bbcda17c.png"
                                fit="contain" />
                        </div>
                        <div class="w-1/2 h-1/3">
                            <el-image style="width: 100%; height: 100%"
                                src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/ce746ad5433f4111b716a1bdec083b34.jpg"
                                fit="contain" />
                        </div>
                        <div class="w-1/2 h-1/3">
                            <el-image style="width: 100%; height: 100%"
                                src="https://lilishop-oss.oss-cn-beijing.aliyuncs.com/98cbf47a32b94de5bfdca1a453866969.jpeg"
                                fit="contain" />
                        </div>
                        <!-- <div v-for="i in 4" class="w-[45%] flex items-center">
                            <div class="w-[90px] h-[90px]">
                                <el-image style="width: 100%; height: 100%"
                                    src="https://res.vmallres.com/uomcdn/CN/cms/2024-01/e8d8e5b7823d419cb9b15da6010b9c95.png"
                                    fit="cover" />
                            </div>
                            <div class="w-[50%] h-[90px] flex justify-around flex-col ll">
                                <p class=" text-sm hover:text-red-500 " style="overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;word-break:break-all;text-indent:10px;
-webkit-box-orient:vertical;
-webkit-line-clamp:2; ">GUCCI古驰Dionysus酒神系列GG
                                    Supermini女士单肩包1件</p>
                                <el-statistic class="text-lg" prefix="￥" :value="268500" />
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
onMounted(() => {
    //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
</script>
<style scoped>
:deep(.ll .el-statistic__content) {
    font-size: 16px;
}

:deep(.el-statistic__content) {
    color: red;
}

.nj>div {
    cursor: pointer;
    border-bottom: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
}

.nj>div:nth-child(1) {
    cursor: auto;
}

.nj>div:nth-child(5) {
    border-bottom: none !important;
}

.bg>div {
    border-bottom: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
}

.bg>div:nth-child(3),
.bg>div:nth-child(4) {
    border-bottom: none;
}

.ko>div {
    cursor: pointer;
}
</style>