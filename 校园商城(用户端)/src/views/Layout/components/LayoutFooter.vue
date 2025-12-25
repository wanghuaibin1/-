<template>
  <footer class="app_footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="flex items-center justify-between w-[1056px] h-[71px] m-auto">
        <div class="flex items-center">
          <div class="flex items-center justify-center text-xl text-[#333] rounded-[50%] w-[40px] h-[40px]"
            style="border: 1.4px solid #cecece">多</div>
          <div class="text-[#1c2438] ml-4 text-lg text-center ">品类齐全，轻松购物</div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center justify-center text-xl text-[#333] rounded-[50%] w-[40px] h-[40px]"
            style="border: 1.4px solid #cecece">快</div>
          <div class="text-[#1c2438] ml-4 text-lg text-center ">多仓直发，极速配送</div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center justify-center text-xl text-[#333] rounded-[50%] w-[40px] h-[40px]"
            style="border: 1.4px solid #cecece">好</div>
          <div class="text-[#1c2438] ml-4 text-lg text-center ">正品行货，精致服务</div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center justify-center text-xl text-[#333] rounded-[50%] w-[40px] h-[40px]"
            style="border: 1.4px solid #cecece">省</div>
          <div class="text-[#1c2438] ml-4 text-lg text-center ">天天低价，畅选无忧</div>
        </div>
      </div>
      <div class="w-[952px] flex  flex-row justify-between m-auto">
        <div class="text-[#80848f]">
          <ul>
            <li class="text-xl text-[#333] mb-4">购物指南</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">购物流程</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">会员介绍</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">生活旅行</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">常见问题</li>
          </ul>
        </div>
        <div class="text-[#80848f]">
          <ul>
            <li class="text-xl text-[#333] mb-4">配送方式</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">上门自提</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">配送查询</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">收取标准</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">物流规则</li>
          </ul>
        </div>
        <div class="text-[#80848f]">
          <ul>
            <li class="text-xl text-[#333] mb-4">支付方式</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">在线支付</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">公司转账</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">余额支付</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">积分支付</li>
          </ul>
        </div>
        <div class="text-[#80848f]">
          <ul>
            <li class="text-xl text-[#333] mb-4">售后服务</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">售后政策</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">退款说明</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">返修/退货</li>
            <li class="text-xs cursor-pointer text-center text-[#333] mb-4">取消订单</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
        </div>
        <div class="flex items-center justify-center text-[#999] h-14">
          <div class="mr-4">
            <a href="">京ICP备20009696号-1 </a>
          </div>
          <div>
            <a data-v-932c3d82="" href="https://pickmall.cn" class="flex ">四川科技职业学院 </a>
          </div>
        </div>
        <p class=" text-center text-[#999] my-4">Copyright © 2021 Spiritron 四川科技职业学院</p>
      </div>
    </div>
  </footer>
</template>

<style scoped >
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;

  .contact {
    background: #fff;

    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }

    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }

    dt {
      line-height: 1;
      font-size: 18px;
    }

    dd {
      margin: 36px 12px 0 0;
      float: left;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;

      .iconfont {
        font-size: 36px;
        display: block;
        color: #666;
      }

      &:hover {
        .iconfont {
          color: $xtxColor;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }

    .download {
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      border: none;

      span {
        display: block;
      }

      a {
        display: block;
        line-height: 1;
        padding: 10px 25px;
        margin-top: 5px;
        color: #fff;
        border-radius: 2px;
        background-color: $xtxColor;
      }
    }

    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: auto;
      height: auto;
      border: none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;

    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 130px;
    padding-top: 50px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>