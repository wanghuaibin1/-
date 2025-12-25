<template>
    <div class="container flex flex-col py-6">
        <div class=" flex justify-between bg-white min-h-[714px]">
            <ProductImage v-for="i in commodity.list " :title="i" />
            <ProductParameter v-for="i in commodity.list " :title="i" />
        </div>
    </div>
    <el-affix :offset="0">
        <div class="w-full py-8 bg-white"
            style="border-top: 1px solid rgba(0, 0, 0, .1);border-bottom: 1px solid rgba(0, 0, 0, .1);">
            <div class="container flex items-center ">
                <div class="text-2xl cursor-pointer  text-black  mr-[100px]" :style="l === 0 ? styleObject : ''"
                    @click="ll(0)">详情</div>
                <div class="text-2xl cursor-pointer text-black mr-[100px]" :style="l === 1 ? styleObject : ''"
                    @click="ll(1)">
                    参数</div>
                <div class="text-2xl cursor-pointer text-black" :style="l === 2 ? styleObject : ''" @click="ll(2)">评价
                </div>
            </div>
        </div>
    </el-affix>

    <div class="container relative">
        <div ref="myElement">
            <div>
                <p><img src="https://res.vmallres.com//uomcdn/CN/pms/202309/E2E12C2D123C9AF92AEA814F77DD60ED.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/EE039E33463D4AE01BD52D5F208EE9A9.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"></p>
            </div>
            <div>
                <p><img src="https://res.vmallres.com//uomcdn/CN/pms/202309/44960CB716DDAAF4DE5F8339022FA692.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/3D46DC831E963E8242AC5504F2769DA1.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/2C8DB00F13D456A3CD6C235ADF176F0E.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/0FFDC3836CC2809074953231255D2866.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/20E6D7738704C122F90EE1A6304D30DA.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/45E53D25603303B3888C02F38B462F9D.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/E481438C91A89709291B729E769EDD6F.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"><img
                        src="https://res.vmallres.com//uomcdn/CN/pms/202309/5F720DC52C9086E84E85F08E938AB58F.jpg"
                        style="width: 100%; min-width: 0%; display: block; height: auto;"></p>
            </div>
        </div>
    </div>
    <div class="container" ref="cs">
        <el-divider />

        <div class=" flex py-10">
            <div class="w-1/3">
                <div dir="auto" class=" text-4xl text-center ">主体</div>
            </div>
            <div class="w-2/3 pr-16">
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="text-xl ">品牌</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">华为</div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class=" text-xl       ">型号</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">ALN-AL10
                        </div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="   text-xl     ">传播名</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">HUAWEI
                            Mate 60 Pro+</div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class=" text-xl       ">颜色</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">宣白、砚黑
                        </div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="   text-xl     ">上市时间</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">2023年9月
                        </div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="   text-xl     ">软件名称</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">
                            华为终端鸿蒙智能设备操作系统软件V4.0</div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="   text-xl     ">操作系统</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">
                            鸿蒙操作系统4.0</div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="   text-xl     ">双卡</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">双卡双待双通
                        </div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="    text-xl    ">特色功能</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">
                            卫星通话*、双向北斗卫星消息*、静谧通话、随动表情、AI隔空操控、相机百宝箱、智能可变光圈、物理光圈10档可调、超级夜景、超级微距、微距视频、视频HDR
                            Vivid、微电影、小艺智慧语音、灵动熄屏显示、中转站、智感支付、3D动态天气熄屏显示、低电量应急模式、超空间存储压缩、万能卡片、大文件夹、口罩人脸识别、超级终端、音频分享、AI字幕、跨设备剪贴板、隐私中心、超级隐私模式、安全中心、纯净模式、多机位、畅连通话、分布式通信、畅连大文件闪传、多屏协同、智能截屏、智慧视觉、华为分享、华为打印、无线投屏、应用分身、密码保险箱
                        </div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">
                            *卫星通话需开通卫星业务运营商的相关业务使用，该功能实现与运营商业务部署相关，请以当地运营商实际业务为准。

                            *HUAWEI Mate 60 Pro+为北斗卫星消息提供移动终端硬件，需在空旷无遮蔽处使用。首次使用前需在有地面网络的环境下，通过畅连 App
                            激活。此功能仅限中国大陆地区（不含港澳台地区）。华为将配合公众测试验证，功能及活动规则详情请以官方信息为准。</div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="    text-xl    ">系统导航方式
                        </div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">
                            手势导航、屏幕内三键导航、悬浮导航</div>
                    </div>
                </div>
                <div class="" style="margin-left: 76px;">
                    <div class="   ">
                        <div dir="auto" class="    text-xl    ">系列</div>
                    </div>
                    <div class="  ">
                        <div dir="auto" class="mt-4 mb-8" style="color: rgba(0, 0, 0, .7);">Mate系列
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mb-[10rem]" v-if="!comment.list" ref="pj">
        <el-divider />
        <div class="flex h-[80px]">
            <div class="w-1/5 flex items-center justify-center">
                <span class="text-5xl text-red-600 mr-2     ">99%</span><span class="text-xl"
                    style="color: rgba(0, 0, 0, .6);">好评</span>
            </div>
            <div class="w-4/5 pl-8 felx  flex-wrap ">
                <div v-for="i in 12" class="mr-6 mb-4 cursor-pointer h-9 inline-block	">
                    <div class="bg-slate-300 py-2 leading-4 px-4" style="border-radius: 20px;">电池不错<span>888</span>
                    </div>
                </div>
            </div>
        </div>
        <el-divider />
        <Comment v-for="i in 10" />
    </div>
    <div class="container mb-[10rem]" ref="pj" v-else>
        <el-divider />
        <div class="flex text-3xl text-center h-[30px]">
            暂无评论
        </div>
    </div>
    <div class="swiper-top" :style="{ display: k ? 'block' : 'none' }"> <a href="#top"
            style=" z-index: 99;width:100%; height:100%;display: block;"></a></div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import ProductImage from './components/product_image.vue'
import ProductParameter from './components/Product_parameter.vue'
import Comment from './components/comment.vue'
import { useRoute } from 'vue-router'
import { getInfoAPI, comByAPI } from '/src/api/user'

const router = useRoute()
const styleObject = reactive({
    color: 'red',
    fontSize: '30px'
})
const commodity = reactive({
    list: []
})
const comment = reactive({
    list: []
})
const k = ref(false)

onMounted(async () => {
    const { data: res } = await getInfoAPI({ id: router.query.id })
    commodity.list.push(res.value)

    const { data: com } = await comByAPI({ id: router.query.id })
    comment.list.push(com.value)
    // 节流函数
    const ti = () => {
        let time = null;
        return () => {
            if (time) {
                return;
            };
            time = setTimeout(() => {
                if (document.documentElement.scrollTop > 1000) {
                    k.value = true
                } else {
                    k.value = false
                }
                time = null;
            }, 400);
        }
    };
    window.onscroll = ti();;
})
const myElement = ref()
const cs = ref()
const pj = ref()
const l = ref(0)
const ll = (i) => {
    l.value = i
    const distanceToTop = ref(0)
    if (i === 0) {
        const rect = myElement.value.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        distanceToTop.value = rect.top + scrollTop - 89.1;

    } else if (i === 1) {
        const rect = cs.value.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        distanceToTop.value = rect.top + scrollTop - 88;
    } else {
        const rect = pj.value.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        distanceToTop.value = rect.top + scrollTop - 88;
    }

    window.scrollTo({
        top: distanceToTop.value,
        behavior: 'instant' // 平滑滚动效果
    });
}
</script>

<style scoped>
.swiper-top {
    position: fixed;
    width: 150px;
    height: 174px;
    background-image: url(/src/assets/images/QQ图片20220808163029.png);
    overflow: hidden;
    display: block;
    z-index: 100;
    cursor: pointer;
    left: calc(50% + 530px);
    bottom: 60px;
    transform: translateY(0px);

}

.swiper-top:hover {
    background-image: url(/src/assets/images/QQ图片20220808162645.png);
    animation: rockMove steps(4) .4s infinite;
}

@keyframes rockMove {
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: -600px;
    }
}
</style>