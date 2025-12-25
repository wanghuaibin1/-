<template>
  <div>
    <div>
      <el-table ref="tableRef" row-key="date" :data="tableData.list" style="width: 100%" border
        :cell-style="{ textAlign: 'center' }" :header-cell-style="{ 'text-align': 'center' }"
        @selection-change="handleSelectionChange">
        <el-table-column prop="logId" label="唯一日志ID" width="300">
        </el-table-column>
        <el-table-column prop="message" label="日志记录信息">
        </el-table-column>
        <el-table-column prop="operationDescription" label="本次操作描述" />
        <!-- <el-table-column prop="productStatus" label="商品状态" /> -->
        <el-table-column prop="actionTime" label="记录时间" sortable>
          <template #default="scope">
            {{ proxy.$dayjs(scope.row.actionTime).format('YYYY-MM-DD HH:mm:ss') }}
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

</template>

<script setup lang="ts">
import { reactive, ref, getCurrentInstance } from 'vue'

import { logselAPI } from "/src/api/business.js"
import { ElMessageBox, ElInput, ElMessage, genFileId } from 'element-plus'
import type { TableInstance } from 'element-plus'
const { proxy } = getCurrentInstance()




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



const selectCom = reactive({ list: [] })
const handleSelectionChange = (val) => {
  selectCom.list = val
}


//分页
const currentPage4 = ref(1) //当前页数
const pageSize4 = ref(10) //每页显示条目个数
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
  const { data: res } = await logselAPI({ pageNumber: currentPage4.value, count: pageSize4.value })
  console.log(res.value);

  tableData.list = res.value.data.records
  qm.zo = res.value.data.total
}
getAAAAA()



</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 250px;
}
</style>
