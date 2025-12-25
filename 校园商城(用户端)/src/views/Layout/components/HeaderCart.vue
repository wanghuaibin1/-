<script setup>
import { useCartStore } from '@/stores/cartStore'
import useCart from '/src/stores/shoppingCart'
// const cartStore = useCartStore()
const cartStore = useCart()
</script>

<template>
  <div class="cart">
    <div class="cursor-pointer px-2 flex items-center lo">
      <div class="curr">
        <el-icon size="22">
          <ShoppingCartFull />
        </el-icon>
      </div>
      <p class="inline-block ml-2" @click="$router.push('/shoppingcart')">购物车({{ cartStore.allCount }})</p>
    </div>

    <div class="layer p-6 pb-[75px]">
      <el-empty class="w-[500px]" v-if="cartStore.cartList.length === 0"
        image=" https://res.vmallres.com/portal/1.24.2.300.Re.20240204175745/h5/images/cart-big.svg"
        description="您的购物车是空的，赶紧选购吧~" />
      <div class="w-[500px]" v-else>
        <div class="mt-2" v-for="i in cartStore.cartList" :key="i">
          <div class="flex items-center cursor-pointer" to="">
            <img class="w-[120px] h-[120px]" :src="i.imgUrl[0]" alt="" />
            <p class="name ellipsis w-[50%] mx-4 text-zinc-700"> {{ i.productName }}</p>
            <!-- <p class="attr ellipsis">{{ i.attrsText }}33</p> -->
            <div class="right font-semibold	 text-base text-gray-700 flex ">
              <p class="price">&yen;{{ i.productPrice }}</p>
              <p class="count ml-2">x{{ i.quantity }}</p>
            </div>
          </div>
          <i class="iconfont icon-close-new" @click="cartStore.delCart(i.cartId)"></i>
        </div>
        <div class="foot">
          <div class="total text-black">
            <p>共<span class="text-red-600 mx-2 font-semibold"> {{ cartStore.allCount }} </span> 件商品</p>
            <div class="flex">
              <div class="flex justify-center items-center mr-6">
                总计：
                <span class="text-red-600 font-bold text-2xl">¥ {{ cartStore.selectedPrice.toFixed(2) }} </span>
              </div>
            </div>
          </div>
          <div
            class="w-[150px] h-4/5 rounded cursor-pointer text-white bg-red-600 flex justify-center items-center text-xl"
            @click="$router.push('/shoppingcart')">
            结算
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  /* width: 50px; */
  background-color: rgb(66, 66, 66);
  position: relative;
  /* display: flex; */
  align-items: center;
  z-index: 600;
  color: rgb(179, 179, 179);

  .curr {
    display: flex;
    align-items: center;
    height: 32px;
    line-height: 32px;
    text-align: center;
    position: relative;

    em {
      font-style: normal;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1px 6px;
      line-height: 1;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      font-family: Arial;
    }
  }

  &:hover {
    .layer {
      opacity: 1;
      transform: none;
    }
  }

  .layer {
    opacity: 0;
    transition: all 0.4s 0.2s;
    transform: translateY(-200px) scale(1, 0);
    position: absolute;
    top: 50px;
    right: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 4px;

    /* &::before {
      content: "";
      position: absolute;
      right: 14px;
      top: -10px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: scale(0.6, 1) rotate(45deg);
      box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    } */

    .foot {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 70px;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background: #f8f8f8;
      align-items: center;
    }
  }

  .list {
    /* height: 310px; */
    /* overflow: auto; */
    padding: 0 10px;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f8f8f8;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #eee;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }

    .item {
      border-bottom: 1px solid #f5f5f5;
      padding: 10px 0;
      position: relative;

      i {
        position: absolute;
        bottom: 38px;
        right: 0;
        opacity: 0;
        color: #666;
        transition: all 0.5s;
      }

      &:hover {
        i {
          opacity: 1;
          cursor: pointer;
        }
      }

      a {
        display: flex;
        align-items: center;

        img {
          height: 120px;
          width: 120px;
        }

        .center {
          padding: 0 10px;
          width: 250px;

          .name {
            font-size: 16px;
          }

          .attr {
            color: #999;
            padding-top: 5px;
          }
        }

        .right {
          position: absolute;
          right: 0;
          /* top: 0; */
          width: 100px;
          padding-right: 20px;
          text-align: center;

          /* .price {
            font-size: 16px;
          }

          .count {
            color: #999;
            margin-top: 5px;
            font-size: 16px;
          } */
        }
      }
    }
  }
}

.lo:hover {
  background-color: #ffffff;
  color: red;
}
</style>