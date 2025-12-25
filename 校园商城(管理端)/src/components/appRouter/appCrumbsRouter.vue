<template>
  <el-breadcrumb separator="/">
    <template v-if="rou.parentId === 0">
      <el-breadcrumb-item>
        {{ $t(langMap.message_home) }}
      </el-breadcrumb-item>
    </template>
    <template v-else>
      <el-breadcrumb-item >
        <a-dropdown placement="bottom">
          <a class="ant-dropdown-link flex" @click.prevent>
            {{ $t(langMap.message_home) }}
            <DownOutlined class="ml-2" />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item v-for="item in menusList" :key="item.id"
                :style="{ backgroundColor: item.id === rou.parentId ? 'rgb(230,247,255)' : '', color: item.id === rou.parentId ? 'rgb(0 176 255 )' : '' }">
                <a href="javascript:;">{{ $t(item.title) }}</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a-dropdown placement="bottom">
          <a class="ant-dropdown-link flex" @click.prevent>
            {{ $t(rou.current.title) }}
            <DownOutlined class="ml-2" />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item v-for="item in rou.current.children" :key="item.name"
                :style="{ backgroundColor: item.meta.id === route.meta.id ? 'rgb(230,247,255)' : '', color: item.meta.id === route.meta.id ? 'rgb(0 176 255 )' : '' }">
                <a href="javascript:;">{{ $t(item.meta.title) }}</a>

              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t(route.meta.title) }}</el-breadcrumb-item>
    </template>

  </el-breadcrumb>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'
import useCounterStore from '@/stores/logon.js'
import { DownOutlined } from '@ant-design/icons-vue';
import langMap from '@/locale/langMap'

const store = useCounterStore()
const route = useRoute()
const menusList = ref(store.menuList)

const rou = reactive({
  parentId: undefined,
  current: {},
})
watch(route, () => {
  rou.parentId = route.meta.parentId
  rou.current = (menusList.value.find(m => m.id === rou.parentId))
}, { immediate: true })

</script>

<style scoped></style>
