<script setup>
//轮播图左侧商品栏
const categoryStore = [
  {
    "id": "1005002",
    "name": "美食",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/cf82e5b4-bf1b-4c68-aa86-96f66e8e5282.png",
    "children": [
      {
        "id": "109201001",
        "name": "方便食品",
        "picture": "https://yanxuan.nosdn.127.net/f9872b4aad6c0a943d45629ac96ee8d3.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109206007",
        "name": "米面粮油",
        "picture": "https://yanxuan.nosdn.127.net/8578759aed2268f7aa8641273cac7cb3.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109264007",
        "name": "名酒馆",
        "picture": "https://yanxuan.nosdn.127.net/91413b1476a0697bb0592609a42d4498.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109285003",
        "name": "进口酒",
        "picture": "https://yanxuan.nosdn.127.net/bf705060f01b60fe9c11c345931b1891.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1135081",
        "name": "紫米410克",
        "desc": "一年一熟的御田胭脂米",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/a3c0bb3be38ccf510ecaedb81f5bcd9f.png",
        "orderNum": null
      },
      {
        "id": "1135080",
        "name": "加量50%不加价，贵州兴仁薏仁米600克",
        "desc": "粒粒饱满，颗颗香糯",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/3e93790bba8db8aab54ee5ba72799567.png",
        "orderNum": null
      },
      {
        "id": "1135079",
        "name": "免浸泡，12种谷物一次同享，五谷米400克",
        "desc": "无需浸泡，同煮同熟",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/bfe70bd66efe94f2f18061c707d2a097.png",
        "orderNum": null
      },
      {
        "id": "1135077",
        "name": "加量45%不加价，内蒙古赤峰黄小米700克",
        "desc": "赤峰好谷，米香浓郁",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/564eb51c22d898179b468f5dec52d502.png",
        "orderNum": null
      },
      {
        "id": "1135075",
        "name": "来自东北的“黑珍珠”，黑米470克*3袋",
        "desc": "米汁香稠，Q弹醇香",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/1452cfeb14b5d252fb1ba97b278e9cc3.png",
        "orderNum": null
      },
      {
        "id": "3464033",
        "name": "冻干藤椒豚骨面74克*12盒",
        "desc": "日式风味，汤浓肉鲜，椒麻过瘾",
        "price": "79.00",
        "picture": "https://yanxuan-item.nosdn.127.net/7a5ffe313fe5671709d5a9826f5a83a2.jpg",
        "orderNum": null
      }
    ]
  },
  {
    "id": "1010000",
    "name": "服饰",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/33e1f5de-0fdb-4cfa-9ba9-781233024b53.png",
    "children": [
      {
        "id": "109303000",
        "name": "钱包/胸包",
        "picture": "https://yanxuan.nosdn.127.net/237613bc9c22eb422dade63e3ed7c61a.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109311005",
        "name": "女式靴子",
        "picture": "https://yanxuan.nosdn.127.net/62c5dacf3e0cbe8e4188ccd263358d1a.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109311006",
        "name": "女式休闲鞋",
        "picture": "https://yanxuan.nosdn.127.net/8cd3a76ffffb14e9fe92ad2369117af0.png?quality=95&imageView",
        "children": null,
        "goods": null
      },

      {
        "id": "109318003",
        "name": "【年末狂欢季】",
        "picture": "https://yanxuan.nosdn.127.net/8f8092d5bf6a133a8cb59ab7b9f790e9.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1621018",
        "name": "懒人瘦出好身材，多功能甩脂塑形机",
        "desc": "懒人福音居家轻松塑身",
        "price": "589.00",
        "picture": "https://yanxuan-item.nosdn.127.net/540f84174dbf9b98d4072abbd886819e.png",
        "orderNum": null
      },
      {
        "id": "1436033",
        "name": "柔软透气，女式精梳棉内裤6条装",
        "desc": "爱慕供应商柔软透气",
        "price": "125.00",
        "picture": "https://yanxuan-item.nosdn.127.net/dc30e9603306e59d959e7fac6968244e.jpg",
        "orderNum": null
      },
      {
        "id": "1281002",
        "name": "轻灵碳素耐用型羽毛球拍单双拍",
        "desc": "超轻球拍，运动随心",
        "price": "119.00",
        "picture": "https://yanxuan-item.nosdn.127.net/89cc3ab3e332bb1df5dc20241b5ca4bb.png",
        "orderNum": null
      },
      {
        "id": "4001285",
        "name": "英伦长柄自动晴雨伞",
        "desc": "雨天有情调，英伦风设计，给你好品味",
        "price": "40.90",
        "picture": "https://yanxuan-item.nosdn.127.net/e77b8f4a8ddd1e777394d84347859f7c.png",
        "orderNum": null
      },
      {
        "id": "4001126",
        "name": "瑜伽裸感女式运动训练紧身裤",
        "desc": "面料韧性足，修身又舒适",
        "price": "83.90",
        "picture": "https://yanxuan-item.nosdn.127.net/872275c2e2edacc917e0364065c90121.png",
        "orderNum": null
      },
      {
        "id": "4000914",
        "name": "恍若没穿鞋，女式轻软舒弹健步鞋2.0",
        "desc": "宛若没穿鞋的轻盈，体验更自由的奔跑",
        "price": "159.00",
        "picture": "https://yanxuan-item.nosdn.127.net/feec7bde4d52521ae70ab4c5010ce992.png",
        "orderNum": null
      },
    ]
  },
  {
    "id": "1019000",
    "name": "严选",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/4b02f01f-a365-4b6c-9f7a-8b0f591dda02.png",
    "children": [
      {
        "id": "1065004",
        "name": "滋补保健",
        "picture": "https://yanxuan.nosdn.127.net/1e619a2b22f40bf83070e6f8f6e0c8ff.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109256014",
        "name": "床品家纺",
        "picture": "https://yanxuan.nosdn.127.net/e6580910c1f98ed61bda867aeaf07929.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109256015",
        "name": "锅具配件",
        "picture": "https://yanxuan.nosdn.127.net/50ccbf04857e86cccf44d25da0577deb.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109275000",
        "name": "清洁用品",
        "picture": "https://yanxuan.nosdn.127.net/926d919bc3e95f5c93dc5dc973faa378.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109309012",
        "name": "个护电器",
        "picture": "https://yanxuan.nosdn.127.net/7a0eea3c515ad247c092749bcdd29855.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [

      {
        "id": "4017718",
        "name": "油污克星Mootaa重油污清洁剂",
        "desc": "一喷快速溶解油污",
        "price": "26.90",
        "picture": "https://yanxuan-item.nosdn.127.net/53a1579ead54c61a9b296d20c78a67ff.jpg",
        "orderNum": null
      },
      {
        "id": "4010699",
        "name": "除味净化神器Mootaa冰箱抑菌清洁剂250ml",
        "desc": "除臭杀毒，持久保鲜，解决冰箱各种食材串味产生的难闻气味",
        "price": "35.00",
        "picture": "https://yanxuan-item.nosdn.127.net/838c1b94f15e3b200bea21cef8989592.png",
        "orderNum": null
      },
      {
        "id": "3999485",
        "name": "意大利大公鸡管家重油污克星清洁剂625ml",
        "desc": "强效去污，操作便捷",
        "price": "39.00",
        "picture": "https://yanxuan-item.nosdn.127.net/6a669deef604cd8f080991b3207a3078.png",
        "orderNum": null
      },
      {
        "id": "3998109",
        "name": "强力去垢不伤锅天然棕榈清洁刷长/短款",
        "desc": "短柄针对顽渍，长柄清洁死角",
        "price": "8.00",
        "picture": "https://yanxuan-item.nosdn.127.net/7537da93f26f0303d94c59f3889836ed.png",
        "orderNum": null
      },
      {
        "id": "3990408",
        "name": "1滴强力去污澳洲超浓缩不伤手洗洁精400ml",
        "desc": "温和高效去污，一瓶可作多用",
        "price": "17.90",
        "picture": "https://yanxuan-item.nosdn.127.net/9ffdc0b1f6dbbe2e9f10a187444c01a3.png",
        "orderNum": null
      },
      {
        "id": "3990343",
        "name": "【囤货装】日本橙油精华去油污泡沫3瓶装",
        "desc": "强力除油污，萃取橙油精华",
        "price": "67.50",
        "picture": "https://yanxuan-item.nosdn.127.net/188e05584a056b0e2f17e8c568da8c00.png",
        "orderNum": null
      },
      {
        "id": "4023839",
        "name": "日本冰块冰球制冰模具",
        "desc": "轻轻一拍，轻松取冰",
        "price": "29.80",
        "picture": "https://yanxuan-item.nosdn.127.net/2be38fc160992fe41f7d4a45bd0f90e5.png",
        "orderNum": null
      }
    ]
  },
  {
    "id": "1043000",
    "name": "数码",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/9660870d-6a59-4624-8064-b3a8cbf50d5c.png",
    "children": [
      {
        "id": "1008006",
        "name": "影音娱乐",
        "picture": "https://yanxuan.nosdn.127.net/f5797ca77cfe413e7753ec69f9bd4bb1.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1022000",
        "name": "3C数码",
        "picture": "https://yanxuan.nosdn.127.net/99b8f97b2e5449606fd558574aa15982.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1028001",
        "name": "乐器",
        "picture": "https://yanxuan.nosdn.127.net/da0ac345e98c04594b697b56ebc373a5.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243035",
        "name": "手机配件",
        "picture": "https://yanxuan.nosdn.127.net/0276d68f4b7a03bbd16675ada6e707ff.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243036",
        "name": "车载用品",
        "picture": "https://yanxuan.nosdn.127.net/3f45fbcdac7e8532b6a1570e6d7fe171.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243046",
        "name": "办公文具",
        "picture": "https://yanxuan.nosdn.127.net/801583d2f58274b13dc6a03daed1c3c9.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [

      {
        "id": "3468024",
        "name": "意外设计便携钢笔花信礼盒",
        "desc": "生活的美，诗人的心\n4.16-4.19号停止发货",
        "price": "398.00",
        "picture": "https://yanxuan-item.nosdn.127.net/cc1c57b701f202bc585d8fff3b65571e.png",
        "orderNum": null
      },
      {
        "id": "1512000",
        "name": "用心记录每一句诗，飞鸟集钢笔本册文具礼盒",
        "desc": "谱写情谊之歌",
        "price": "89.00",
        "picture": "https://yanxuan-item.nosdn.127.net/3892e311f3494d2bcc2c1f8ed9e34271.png",
        "orderNum": null
      },
      {
        "id": "1458011",
        "name": "谱写爱的篇章，莫扎特钢笔墨水礼盒",
        "desc": "谱写爱的乐章",
        "price": "88.00",
        "picture": "https://yanxuan-item.nosdn.127.net/b20165617d2f901e9ad926f39b737e87.png",
        "orderNum": null
      },
      {
        "id": "1111002",
        "name": "剪出精致感，金致圆柄复古剪刀",
        "desc": "轻薄设计，简约大方",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/4c6a9c8a579b00e5e9c7b002d15a33a2.jpg",
        "orderNum": null
      },
      {
        "id": "3994432",
        "name": "平台严选x敦煌博物馆鹿游仙踪植萃车载香氛",
        "desc": "复古敦煌色系，植萃天然香氛，安全健康孕婴可用",
        "price": "33.90",
        "picture": "https://yanxuan-item.nosdn.127.net/15db90ea8c8c7456c1fee4e18abb25da.png",
        "orderNum": null
      },
      {
        "id": "3992720",
        "name": "旅途手机好伴侣，三合一车载手机支架",
        "desc": "带安全锤和应急割刀的手机支架",
        "price": "49.00",
        "picture": "https://yanxuan-item.nosdn.127.net/2245a3d6898361236babb66d834e19c8.jpg",
        "orderNum": null
      }
    ]
  },
  {
    "id": "109243029",
    "name": "运动",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/7d19752c-baff-49b6-bd02-5ece1d729214.png",
    "children": [
      {
        "id": "109312000",
        "name": "健身大器械",
        "picture": "https://yanxuan.nosdn.127.net/6a1d37ffb2e28622a71e3c4415eaee35.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109312001",
        "name": "健身小器械",
        "picture": "https://yanxuan.nosdn.127.net/8c9f060e6fddb2b75af851a9a2c60087.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109312002",
        "name": "城市出行",
        "picture": "https://yanxuan.nosdn.127.net/b41b50710c3823f44a9f5b549a67ca81.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109312003",
        "name": "运动护具",
        "picture": "https://yanxuan.nosdn.127.net/ef9bcb99d88b3a1cfd9d2e120c158c21.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109313000",
        "name": "垂钓",
        "picture": "https://yanxuan.nosdn.127.net/c4eeeae307d0562cf3e95303146282b2.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109313003",
        "name": "户外装备",
        "picture": "https://yanxuan.nosdn.127.net/6bbd92c68741c857d842f0afd1c7bdd5.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [

      {
        "id": "3994179",
        "name": "运动健身跑步腰包",
        "desc": "防水反光设计，大容量双口袋收纳，运动跑步更时尚",
        "price": "40.00",
        "picture": "https://yanxuan-item.nosdn.127.net/610a693cfd6f01adc6923dc1c0ec91aa.jpg",
        "orderNum": null
      },
      {
        "id": "3993694",
        "name": "可触屏户外出行手套-合集",
        "desc": "户外轻松骑行",
        "price": "69.00",
        "picture": "https://yanxuan-item.nosdn.127.net/264df9f0faddb60e88a8b108058d25e6.png",
        "orderNum": null
      },
      {
        "id": "3988016",
        "name": "户外快干轻巧遮阳帽",
        "desc": "有效遮阳，可折叠收纳",
        "price": "44.00",
        "picture": "https://yanxuan-item.nosdn.127.net/310eac832a1d90fbea41c4e6a9e604e4.png",
        "orderNum": null
      },
      {
        "id": "3987478",
        "name": "可折叠户外防紫外线鸭舌帽",
        "desc": "可折叠，透气网纱棒球帽",
        "price": "44.00",
        "picture": "https://yanxuan-item.nosdn.127.net/87fbba3cf009e5b69dd14781c594ef79.png",
        "orderNum": null
      },
      {
        "id": "3550194",
        "name": "防晒快干长檐棒球帽",
        "desc": "遮阳防晒,保暖新潮",
        "price": "69.00",
        "picture": "https://yanxuan-item.nosdn.127.net/7d0b373a6a63882783202c836bae264d.png",
        "orderNum": null
      },
    ]
  },
]
</script>

<template>
  <div class="home-category ">
    <ul class="menu">
      <li v-for="item in categoryStore" :key="item.id" class=" opacity-50">
        <RouterLink to="/" >{{ item.name }}</RouterLink>
        <span class="float-right	mr-6"><el-icon>
            <ArrowRightBold />
          </el-icon></span>
        <div class="layer  opacity-100">
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <RouterLink to="/">
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ i.name }}
                  </p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>

      </li>
    </ul>
  </div>
</template>


<style scoped >
.home-category {
  width: 200px;
  height: 500px;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 36px;

  .menu {
    li {
      width: 200px;
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      /* opacity: 0.6; */

      &:hover {
        opacity: 1;
      }

      a {
        margin-right: 4px;
        color: #000000;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        width: 1040px;
        height: 500px;
        background: rgba(255, 255, 255, 0.95);
        position: absolute;
        left: 200px;
        top: 0;
        display: none;
        padding: 0 10px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 310px;
            height: 120px;
            /* margin-right: 15px; */
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            /* &:nth-child(3n) {
              margin-right: 0;
            } */

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              &:hover {
                color: red;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                &:hover {
                color: red !important;
              }
                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      /* // 关键样式  hover状态下的layer盒子变成block */
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>