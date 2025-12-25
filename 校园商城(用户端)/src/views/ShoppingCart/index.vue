<script setup>
import useCart from '/src/stores/shoppingCart'
import { useRouter } from 'vue-router'
import { reactive, onMounted } from 'vue';
const cartStore = useCart()
const router = useRouter()
onMounted(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
        cartStore.updateNewList()
    }
})
// 单选功能
const singleCheck = (i, selected) => {
    cartStore.singleCheck(i.cartId, selected)
}
//全选功能
const allCheck = (selected) => {
    cartStore.allCheck(selected)
}
//删除功能
const f = (i) => {
    cartStore.delCart(i)
}


//商品数量加减防抖函数
const debounce = (fn, time) => {
    let timer = null
    return (...args) => {
        const context = this
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(context, ...args)
        }, time)
    }
}

const g = debounce((evt, str) => {
    const fn = (evt) => {
        cartStore.cartup(evt)
    }
    fn(evt)
}, 1000)
</script>

<template>
    <div class="xtx-cart-page">
        <div class="container m-top-20">
            <div class="cart">
                <table>
                    <thead>
                        <tr>
                            <th width="120">
                                <el-checkbox :model-value="cartStore.isAll" @change="allCheck" />
                            </th>
                            <th width="400">商品信息</th>
                            <th width="220">单价</th>
                            <th width="180">数量</th>
                            <th width="180">小计</th>
                            <th width="140">操作</th>
                        </tr>
                    </thead>
                    <!-- 商品列表 -->
                    <tbody>
                        <tr v-if="cartStore.cartList.length !== 0" v-for="i in cartStore.cartList">

                            <td>
                                <el-checkbox :model-value="i.selected"

                                @change="(selected) => singleCheck(i, selected)" />
                            </td>
                            <td>
                                <div class="goods">
                                    <RouterLink to="/"><img
                                        :src="i.imgUrl[0]"
                                            alt="" /></RouterLink>
                                   <div>
                                        <p class="name ellipsis">
                                            {{ i.productName }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="tc">
                                <p>&yen;{{ i.productPrice }}</p>
                            </td>
                            <td class="tc">
                                <el-input-number :min="1" v-model="i.quantity" @change="g(i)" />
                            </td>
                            <td class="tc">
                                <p class="f16 red">&yen;{{ (i.productPrice * i.quantity).toFixed(2) }}</p>
                            </td>
                            <td class="tc">
                                <p>
                                    <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消"
                                        @confirm="f(i)">
                                        <template #reference>
                                            <a href="javascript:;">删除</a>
                                        </template>
                                    </el-popconfirm>
                                </p>
                            </td>
                        </tr>
                        <tr v-else>
                            <td colspan="6">
                                <div class="cart-none">

                                    <el-empty
                                        image=" https://res.vmallres.com/portal/1.24.2.300.Re.20240204175745/h5/images/cart-big.svg"
                                        description="您的购物车里面什么都没有哦~">
                                        <el-button type="primary">去逛逛</el-button>
                                    </el-empty>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <!-- 操作栏 -->
            <div class="action pl-[30px]">
                <div class="flex items-center justify-center">
                    共 {{ cartStore.allCount }} 件商品，已选择<span class="text-red-700 mx-2 font-semibold"> {{
                                    cartStore.selectedCount }}
                    </span> 件，
                </div>
                <div class="flex">
                    <div class="flex justify-center items-center mr-6">
                        总计：
                        <span class="text-red-700 font-bold text-2xl">¥ {{ cartStore.selectedPrice.toFixed(2) }} </span>
                    </div>
                    <div
                        class="w-[180px] h-full cursor-pointer text-white bg-red-600 flex justify-center items-center text-2xl">
                        立即结算
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.xtx-cart-page {
    margin-top: 20px;

    .cart {
        background: #fff;
        color: #666;

        table {
            border-spacing: 0;
            border-collapse: collapse;
            line-height: 24px;

            th,
            td {
                padding: 10px;
                border-bottom: 1px solid #f5f5f5;

                &:first-child {
                    text-align: left;
                    padding-left: 30px;
                    color: #999;
                }
            }

            th {
                font-size: 16px;
                font-weight: normal;
                line-height: 50px;
            }
        }
    }

    .cart-none {
        text-align: center;
        padding: 120px 0;
        background: #fff;

        p {
            color: #999;
            padding: 20px 0;
        }
    }

    .tc {
        text-align: center;

        a {
            color: $xtxColor;
        }

        .xtx-numbox {
            margin: 0 auto;
            width: 120px;
        }
    }

    .red {
        color: $priceColor;
    }

    .green {
        color: $xtxColor;
    }

    .f16 {
        font-size: 16px;
    }

    .goods {
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
        }

        >div {
            width: 280px;
            font-size: 16px;
            padding-left: 10px;

            .attr {
                font-size: 14px;
                color: #999;
            }
        }
    }

    .action {
        display: flex;
        background: #fff;
        margin-top: 20px;
        height: 60px;
        font-size: 16px;
        justify-content: space-between;

        .xtx-checkbox {
            color: #999;
        }

        .batch {
            a {
                margin-left: 20px;
            }
        }

        .red {
            font-size: 18px;
            margin-right: 20px;
            font-weight: bold;
        }
    }

    .tit {
        color: #666;
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
    }

}
</style>