<script setup>
import LayoutHeaderUl from './LayoutHeaderUl.vue'

</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">宜品 · 杂货铺</RouterLink>
      </h1>

      <LayoutHeaderUl />
      <div class="search">
        <el-icon size="20">
          <Search />
        </el-icon>
        <input type="text" placeholder="搜一搜">
      </div>
    </div>
  </header>
</template>


<style  >
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 100px;
      width: 100%;
      text-indent: -9999px;
      background: url("/src/assets/images/宜品 · 杂货铺.png") no-repeat center 0px  / contain;
    }
  }


  .search {
    display: flex;
    align-items: center;
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
  }

  input {
    width: 140px;
    padding-left: 5px;
    color: #666;
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>