<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="订单编号">
      <el-input @keyup.enter="search" v-model="formInline.orderId" placeholder="输入后回车搜索" clearable />
    </el-form-item>
    <el-form-item label="订单状态">
      <el-select class="w-full" v-model="formInline.status" placeholder="选择后回车搜索" clearable>
        <el-option label="取消订单" value="已取消" />
        <el-option label="待付款" value="待付款" />
        <el-option label="待发货" value="待发货" />
        <el-option label="待收货" value="待收货" />
        <el-option label="待评价" value="待评价" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="success" @click="resetting">重置</el-button>
    </el-form-item>
  </el-form>




  <div>
    <div class="flex justify-between my-4">
      <el-button type="primary" @click="centerDialogVisibleCreate = true">添加订单</el-button>
      <div>
        <!-- <el-button type="danger">批量下架</el-button> -->
      </div>
    </div>
    <div>
      <el-table ref="tableRef" row-key="date" :data="tableData.list" style="width: 100%" border empty="订单为空"
        :cell-style="{ textAlign: 'center' }" :header-cell-style="{ 'text-align': 'center' }"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40" />
        <el-table-column prop="orderId" label="订单编号" sortable />
        <el-table-column prop="phoneNumber" label="手机号" sortable>
          <template #default="scope">
            {{ phon(scope.row.phoneNumber) }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="收货地址" sortable />
        <el-table-column prop="productPrice" label="商品价格" sortable>
          <template #default="scope">
            <div style="text-align: center;">
              <span class=" text-red-800 font-bold">￥{{ scope.row.productPrice }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="quantity" label="购买数量" sortable />
        <el-table-column prop="status" label="订单状态" />
        <el-table-column prop="createDate" label="创建时间" sortable>
          <template #default="scope">
            {{ proxy.$dayjs(scope.row.createDate).format('YYYY-MM-DD HH:mm:ss') }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="{ row }">
            <el-button type="danger" @click="qinChuBanJi(row)">删除</el-button>
            <el-button type="success" @click="xg(row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination v-if="lp" class="mt-6" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
        :page-sizes="[5, 10, 15, 20]" :disabled="disabled" :background="background"
        layout="total, sizes, prev, pager, next, jumper" :total="qm.zo" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>

  <el-dialog v-model="centerDialogVisible" title="修改订单" width="50%" center align-center
    @close="ruleFormRef.resetFields()">
    <el-form :inline="true" :model="commodity.list" label-position="right" size="large" :rules="rulesEmbellish"
      ref="ruleFormRef">
      <el-form-item label="手机号码" prop="phoneNumber" class="w-full !mr-0">
        <el-input v-model="commodity.list.phoneNumber" placeholder="手机号码" clearable />
      </el-form-item>
      <el-form-item label="订单状态" prop="status" class="w-full !mr-0">
        <el-select class="w-full" v-model="commodity.list.status" placeholder="请选择订单状态" clearable>
          <el-option label="取消订单" value="已取消" />
          <el-option label="待付款" value="待付款" />
          <el-option label="待发货" value="待发货" />
          <el-option label="待收货" value="待收货" />
          <el-option label="待评价" value="待评价" />
        </el-select>
      </el-form-item>
      <el-form-item label="收货地址" prop="address" class="w-full !mr-0">
        <el-cascader v-model="commodity.list.address" :options="options" :placeholder="commodity.list.address"
          clearable />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确定
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false, ruleFormRef.resetFields()">取消</el-button>
      </span>
    </template>
  </el-dialog>





  <el-dialog v-model="centerDialogVisibleCreate" title="添加订单" width="50%" center align-center
    @close="ruleFormRefCreate.resetFields()">
    <el-form :inline="true" :model="commodityCreate.list" label-position="right" size="large" :rules="rulesCreate"
      ref="ruleFormRefCreate">
      <el-form-item label="订单编号" prop="orderId" class="w-full !mr-0">
        <el-input v-model="commodityCreate.list.orderId" placeholder="订单编号" clearable />
      </el-form-item>
      <el-form-item label="商品数量" prop="quantity" class="w-1/2 !mr-0">
        <el-input-number v-model="commodityCreate.list.quantity" :min="0" :step="1" step-strictly />
      </el-form-item>
      <el-form-item label="商品价格" prop="productPrice" class="w-1/2 !mr-0">
        <el-input-number v-model="commodityCreate.list.productPrice" :precision="1" :step="0.5" :max="999" :min="0" />
      </el-form-item>
      <el-form-item label="手机号码" prop="phoneNumber" class="w-full !mr-0">
        <el-input v-model="commodityCreate.list.phoneNumber" placeholder="手机号码" clearable />
      </el-form-item>
      <el-form-item label="订单状态" prop="status" class="w-full !mr-0">
        <el-select class="w-full" v-model="commodityCreate.list.status" placeholder="请选择订单状态" clearable>
          <el-option label="取消订单" value="已取消" />
          <el-option label="待付款" value="待付款" />
          <el-option label="待发货" value="待发货" />
          <el-option label="待收货" value="待收货" />
          <el-option label="待评价" value="待评价" />
        </el-select>
      </el-form-item>
      <el-form-item label="收货地址" prop="address" class="w-full !mr-0">
        <el-cascader v-model="commodityCreate.list.address" :options="options" placeholder="请选择收货地址" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitFormCreate(ruleFormRefCreate)">
          确定
        </el-button>
        <el-button @click="resetFormCreate(ruleFormRefCreate)">重置</el-button>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false, ruleFormRefCreate.resetFields()">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, computed, getCurrentInstance } from 'vue'
import { getOrderSelectAPI, deleteOrderdityAPI, postOrderdityAPI, postOrderAPI } from "/src/api/business.js"
import { ElMessageBox, ElInput, ElMessage, genFileId } from 'element-plus'
import dizhi from '/src/assets/data.js'
import type { TableInstance } from 'element-plus'
import { DishDot } from '@element-plus/icons-vue/dist/types'

const { proxy } = getCurrentInstance()

const options = []
function convertToNewFormat(data) {
  const result = {
    value: data.name,
    label: data.name,
    children: [],
  };
  if (data.cityList) {
    data.cityList.forEach(city => {
      const cityObj = {
        value: city.name,
        label: city.name,
        children: [],
      };
      // Check if the city has areas
      if (city.areaList && Array.isArray(city.areaList)) {
        city.areaList.forEach(area => {
          const areaObj = {
            value: area,
            label: area,
          };
          cityObj.children.push(areaObj);
        });
      }
      // Add the city object to the result
      result.children.push(cityObj);
    });
  }
  options.push(result)
}
dizhi.forEach(item => {
  convertToNewFormat(item);
})

const phon = computed(() => {
  return item => {
    return item.toString().slice(0, 2).padEnd(7, '*') + item.toString().slice(-2);
  }
})

const formInline = reactive({
  orderId: '',
  status: ''
})

const tableRef = ref<TableInstance>()

const tableData = reactive({
  list: [
    {
      "productId": 17,
      "productName": "骚炳的腰子",
      "productDescription": "一个虚弱的腰子",
      "price": 0.01,
      "imgUrl": "http://www.javacg.icu:7742/img/6f5b5f08-a345-4551-abb4-62568b4b7f76.jpg",
      "storeId": 1,
      "stockQuantity": 2,
      "productStatus": "上架",
      "createTime": "2023-10-09T20:14:51.000+00:00"
    }
  ]
})

//搜索
const lp = ref(true)
const search = async () => {
  if (!formInline.orderId && !formInline.status) return
  const { data: res } = await getOrderSelectAPI({
    pageNumber: 1,
    count: 5,
    orderId: formInline.orderId,
    status: formInline.status
  })
  if (res.value.code === 400) {
    tableData.list = []
    lp.value = false
    return
  }
  lp.value = true
  tableData.list = res.value.data.records
  qm.zo = res.value.data.total
}
const resetting = () => {
  formInline.orderId = ''
  formInline.status = ''
  lp.value = true
  currentPage4.value = 1
  pageSize4.value = 5
  getAAAAA()
}

const selectCom = reactive({ list: [] })
const handleSelectionChange = (val) => {
  selectCom.list = val
}

//分页
const currentPage4 = ref(1) //当前页数
const pageSize4 = ref(5) //每页显示条目个数
const background = ref(false)
const disabled = ref(false) //是否禁用分页
const qm = reactive({
  zo: 200
})
const handleSizeChange = (val: number) => {
  //每页显示数量改变
  pageSize4.value = val
  getAAAAA()
}
const handleCurrentChange = (val: number) => {
  // 页码值变化
  currentPage4.value = val
  getAAAAA()
}
const getAAAAA = async () => {
  lp.value = true
  const { data: res } = await getOrderSelectAPI({ pageNumber: currentPage4.value, count: pageSize4.value })
  if (res.value.code === 400) {
    tableData.list = []
    lp.value = false
    return
  }
  tableData.list = res.value.data.records
  qm.zo = res.value.data.total
}
getAAAAA()

/**
 *根据id删除商品
 * @param row 商品id
 */
const qinChuBanJi = (row) => {
  ElMessageBox.confirm(
    '确定要删除商品吗?',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      const { data: res } = await deleteOrderdityAPI({
        orderId: row.orderId
      })
      if (res.value.code === 200) {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
        getAAAAA()
        return
      }
      ElMessage.error('删除失败')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消',
      })
    })
}

//修改部分
const xg = async (row) => {
  console.log(row);
  commodity.list = row
  centerDialogVisible.value = true
}
const ruleFormRef = ref()
const addressEmbellish = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请选择收货地址'))
  } else {
    callback()
  }
}
const rulesEmbellish = reactive({
  phoneNumber: [
    { required: true, message: '请填写手机号', trigger: 'blur' },
    // { type: 'number',message: '请填写正确的手机号', trigger: 'blur' },
    { min: 10, message: '请填写完整正确的手机号', trigger: 'blur' },
  ],
  status: [
    { required: true, message: '请选择订单状态', trigger: 'change', }
  ],
  address: [{ required: true, validator: addressEmbellish, trigger: 'change' }],
})

const centerDialogVisible = ref(false)
const commodity = reactive({
  list:
  {
    phoneNumber: '',
    status: '',
    address: ''
  }
})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const { data: res } = await postOrderdityAPI(commodity.list)
      if (res.value.code === 200) {
        getAAAAA()
        ElMessage({
          type: 'success',
          message: '修改成功',
        })
        centerDialogVisible.value = false
        formEl.resetFields()
      } else {
        ElMessage({
          message: '修改失败',
        })
        centerDialogVisible.value = false
        formEl.resetFields()
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}









const ruleFormRefCreate = ref()
//验证规则
const addressEmbellishCreate = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请选择收货地址'))
  } else {
    callback()
  }
}
const validatePassPrice = (rule: any, value: any, callback: any) => {
  if (value === 0) {
    callback(new Error('请填写商品价格'))
  } else {
    callback()
  }
}
const validatePassInventory = (rule: any, value: any, callback: any) => {
  if (value === 0) {
    callback(new Error('请填写商品库存'))
  } else {
    callback()
  }
}
const rulesCreate = reactive({
  orderId: [
    { required: true, message: '请填写订单编号', trigger: 'blur' },
    { min: 10, message: '请填写完整的编号号', trigger: 'blur' },
  ],
  quantity: [{ required: true, validator: validatePassPrice, trigger: 'change' }],
  productPrice: [{ required: true, validator: validatePassInventory, trigger: 'change' }],
  phoneNumber: [
    { required: true, message: '请填写手机号', trigger: 'blur' },
    // { type: 'number',message: '请填写正确的手机号', trigger: 'blur' },
    { min: 10, message: '请填写完整正确的手机号', trigger: 'blur' },
  ],
  status: [
    { required: true, message: '请选择订单状态', trigger: 'change', }
  ],
  address: [{ required: true, validator: addressEmbellishCreate, trigger: 'change' }],
})
const centerDialogVisibleCreate = ref(false)
const commodityCreate = reactive({
  list:
  {
    orderId: '',
    quantity: '',
    productPrice: '',
    phoneNumber: '',
    status: '',
    address: []
  }
})
const submitFormCreate = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const { data: res } = await postOrderAPI({
        "orderId": commodityCreate.list.orderId,
        "userId": 0,
        "productId": 0,
        "quantity": commodityCreate.list.quantity,
        "address": commodityCreate.list.address.join(''),
        "phoneNumber": commodityCreate.list.phoneNumber,
        "productPrice": commodityCreate.list.productPrice,
        "status": commodityCreate.list.status,
        "createDate": "",
        "paymentTime": "",
        "deliveryTime": "",
        "endTime": "",
      })
      if (res.value.code === 200) {
        getAAAAA()
        ElMessage({
          type: 'success',
          message: '添加成功',
        })
        centerDialogVisible.value = false
        formEl.resetFields()
      } else {
        ElMessage({
          message: '添加失败',
        })
        centerDialogVisible.value = false
        formEl.resetFields()
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetFormCreate = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 250px;
}
</style>
