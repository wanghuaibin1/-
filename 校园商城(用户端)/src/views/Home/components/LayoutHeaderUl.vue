<script setup>
import { reactive } from 'vue'

const kk = reactive([
  {id:'1001',name:'美食'},
  {id:'1002',name:'服饰'},
  {id:'1003',name:'数码'},
  {id:'1004',name:'运动'},
])
</script>


<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li class="home" v-for="item in kk" :key="item.id">
      <RouterLink active-class="active" to="/">
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
</template>


<style >
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>