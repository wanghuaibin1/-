<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="商品名称">
      <el-input @keyup.enter="search" v-model="formInline.name" placeholder="输入后回车搜索" clearable />
    </el-form-item>
    <!-- <el-form-item label="商品ID">
      <el-input v-model="formInline.productID" placeholder="输入后回车搜索" clearable />
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="success" @click="resetting">重置</el-button>
    </el-form-item>
  </el-form>
  <div>
    <div class="flex justify-between my-4">
      <el-button type="primary" @click="centerDialogVisible = true, f = '发布'">发布商品</el-button>
      <div>
        <el-button type="danger" @click="deleteComS">批量删除</el-button>
        <!-- <el-button type="danger">批量下架</el-button> -->
      </div>
    </div>
    <div>
      <el-table ref="tableRef" row-key="date" :data="tableData.list" style="width: 100%" border
        :cell-style="{ textAlign: 'center' }" :header-cell-style="{ 'text-align': 'center' }"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="40" />
        <el-table-column prop="avatar" label="商品名称" width="300">
          <template #default="props">
            <!-- {{ props.row }} -->
            <div class="flex">
              <div style="width: 100px;height: 100px;">
                <el-image style="width: 6.25rem; height: 6.25rem" preview-src-list
                  :src="props.row.imgUrl[0]" fit="cover">
                  <template #placeholder>
                    <div class="image-slot">Loading<span class="dot">...</span></div>
                  </template>
                </el-image>
              </div>
              <div class="ml-2 flex justify-between flex-col">
                <p class="indent-2 text-base"
                  style=" word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;margin-bottom: 0;">
                  {{ props.row.productName }}
                </p>
                <!-- <span class="mb-0  text-slate-950">{{ props.row.productId }}</span> -->
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="商品价格" sortable>
          <template #default="scope">
            <div style="display: flex; align-items: center">

              <span class=" text-red-800 font-bold">￥{{ scope.row.price }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="stockQuantity" label="商品库存" sortable />
        <el-table-column prop="productStatus" label="商品状态" />
        <el-table-column prop="createTime" label="创建时间" sortable>
          <template #default="scope">
            {{ proxy.$dayjs(scope.row.createTime).format('YYYY-MM-DD HH:mm:ss') }}
          </template>
        </el-table-column>
        <el-table-column prop="productDescription" label="商品描述">
          <template #default="props">
            <div>
              <p class="indent-4"
                style="word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow: hidden;">
                {{ props.row.productDescription }}
              </p>
            </div>
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
      <el-pagination class="mt-6" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
        :page-sizes="[5, 10, 15, 20]" :disabled="disabled" :background="background"
        layout="total, sizes, prev, pager, next, jumper" :total="qm.zo" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>

  <el-dialog v-model="centerDialogVisible" title="商品信息" width="50%" center align-center
    @close="ruleFormRef.resetFields()">

    <el-form :inline="true" :model="commodity.list" label-position="right" size="large" :rules="rules" ref="ruleFormRef">
      <el-form-item label="商品名称" prop="productName" class="w-full !mr-0">
        <el-input v-model="commodity.list.productName" placeholder="商品名称" clearable />
      </el-form-item>
      <el-form-item label="商品状态" prop="productStatus" class="w-full !mr-0">
        <el-select class="w-full" v-model="commodity.list.productStatus" placeholder="请选择商品状态" clearable>
          <el-option label="已上架" value="已上架" />
          <el-option label="未上架" value="未上架" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品价格" prop="price" class="w-1/2 !mr-0">
        <el-input-number v-model="commodity.list.price" :precision="1" :step="0.5" :max="999" :min="0" />
      </el-form-item>
      <el-form-item label="商品库存" prop="stockQuantity" class="w-1/2 !mr-0">
        <el-input-number v-model="commodity.list.stockQuantity" :min="0" :step="1" step-strictly />
      </el-form-item>
      <el-form-item label="商品描述" prop="productDescription" class="w-full !mr-0">
        <el-input v-model="commodity.list.productDescription" type="textarea" />
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
</template>

<script setup lang="ts">
import { reactive, ref, getCurrentInstance } from 'vue'
import { getCommodityAPI, deleteCommodityAPI, deleteCommodityS_API, getSeekCommodityAPI, postAddCommodityAPI, putModifyCommodityAPI } from "/src/api/business.js"
import { ElMessageBox, ElInput, ElMessage, genFileId } from 'element-plus'
import type { TableInstance } from 'element-plus'
const { proxy } = getCurrentInstance()

const formInline = reactive({
  name: '',
  productID: ''
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
const search = async () => {
  if (formInline.name.length === 0) return
  const { data: res } = await getSeekCommodityAPI({ name: formInline.name })
  tableData.list = res.value
}
const resetting = () => {
  formInline.name = ''
  currentPage4.value = 1
  pageSize4.value = 5
  getAAAAA()
}

const selectCom = reactive({ list: [] })
const handleSelectionChange = (val) => {
  selectCom.list = val
}
//批量删除
const deleteComS = () => {
  if (selectCom.list.length === 0) return ElMessage.error('未选择商品')

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
      const k = []
      selectCom.list.forEach(item => k.push(item.productId))
      const { data: res } = await deleteCommodityS_API(k)
      if (res.value) {
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
  const { data: res } = await getCommodityAPI({ yema: currentPage4.value, count: pageSize4.value })
  console.log(res);

  tableData.list = res.value.records
  qm.zo = res.value.total
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
      const { data: res } = await deleteCommodityAPI({
        id: row.productId
      })
      if (res.value) {
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
const xg = async (row) => {
  commodity.list = row
  centerDialogVisible.value = true
  f.value = '修改'
}
const f = ref('')
const ruleFormRef = ref()
//验证规则

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


const rules = reactive({
  productName: [
    { required: true, message: '请填写商品名称', trigger: 'blur' }
  ],
  productStatus: [
    { required: true, message: '请选择商品状态', trigger: 'change', }
  ],
  price: [{ required: true, validator: validatePassPrice, trigger: 'change' }],
  stockQuantity: [{ required: true, validator: validatePassInventory, trigger: 'change' }],
  productDescription: [
    { required: true, message: '请填写商品描述', trigger: 'blur' }
  ],
})

const centerDialogVisible = ref(false)
const commodity = reactive({
  list:
  {
    productId: '',
    productName: '',
    productStatus: '',
    price: '',
    stockQuantity: '',
    productDescription: ''
  }
})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (f.value === '发布') {
        const { data: res } = await postAddCommodityAPI(
          {
            "productName": commodity.list.productName,
            "productDescription": commodity.list.productDescription,
            "price": commodity.list.price,
            "imgUrl": "",
            "storeId": 0,
            "stockQuantity": commodity.list.stockQuantity,
            "productStatus": commodity.list.productStatus,
            "createTime": new Date()
          })
        if (res.value) {
          getAAAAA()
          ElMessage({
            type: 'success',
            message: '添加成功',
          })
          centerDialogVisible.value = false
          formEl.resetFields()
        }
      } else if (f.value === '修改') {
        const { data: res } = await putModifyCommodityAPI(
          {
            "productId": commodity.list.productId,
            "productName": commodity.list.productName,
            "productDescription": commodity.list.productDescription,
            "price": commodity.list.price,
            "imgUrl": "",
            "storeId": 0,
            "stockQuantity": commodity.list.stockQuantity,
            "productStatus": commodity.list.productStatus,
            "createTime": new Date()
          })
        if (res.value) {
          getAAAAA()
          ElMessage({
            type: 'success',
            message: '修改成功',
          })
          centerDialogVisible.value = false
          formEl.resetFields()
        }
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
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 250px;
}
</style>
