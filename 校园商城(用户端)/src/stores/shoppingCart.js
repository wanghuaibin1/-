// 封装购物车模块
import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { computed, ref, } from 'vue'
import { cartseAPI, cartaddAPI, cartdeAPI, cartupAPI } from '/src/api/user'
const useCart = defineStore("cartaa", {
    // 数据 data
    state: () => ({
        cartList: [{imgUrl:['https://gw.alicdn.com/imgextra/i1/4016040947/O1CN01RNXMXj1Irm7yAih9D_!!4016040947.jpg'],productName:'一方风顺+盆+土多肉植物 肉肉 萌肉肉组合盆栽室内阳台花卉含盆土',productPrice:'11.2',quantity:2}],
    }),
    // 计算 cpmputed
    getters: {
        // 是否全选
        isAll() {
            this.cartList.every((item) => item.selected)
        },
        // 1. 总的数量 所有项的count之和
        allCount() {
            return this.cartList.reduce((a, c) => a + c.quantity, 0)
        },
        // 3. 已选择数量
        selectedCount() {
            return this.cartList.filter(item => item.selected).reduce((a, c) => a + c.quantity, 0)
        },
        // 4. 已选择商品价钱合计
        selectedPrice() {
            return this.cartList.filter(item => item.selected).reduce((a, c) => a + c.quantity * c.productPrice, 0)
        }
    },
    //  方法 methods
    actions: {
        // 获取最新购物车列表action
        async updateNewList(context) {
            const userID = sessionStorage.getItem("userID");
            const { data: res } = await cartseAPI({ uid: userID })
            this.cartList = res.value.data
            this.cartList.map(item => {
                item.selected = false
            })
        },
        // 全选功能
        allCheck(selected) {
            // 把cartList中的每一项的selected都设置为当前的全选框状态
            this.cartList.forEach(item => item.selected = selected)
            // console.log(this.cartList);
        },
        // 单选功能
        singleCheck(cartId, selected) {
            // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
            const item = this.cartList.find((item) => item.cartId === cartId)
            item.selected = selected
        },
        // 删除购物车中的商品
        async delCart(i) {
            const { data: res } = await cartdeAPI({ pid: i.productId })
            console.log(res);
            if (res.value.code === 200) {
                ElMessage({
                    message: res.value.message,
                    type: 'success',
                })
                this.updateNewList()
            } else {
                ElMessage.error('删除失败')
            }
        },
        //修改购物车中商品数量
        async cartup(i) {
            const { data: res } = await cartupAPI({
                pid: i.productId,
                quantity: i.quantity
            })
        }

    },
});
export default useCart;
