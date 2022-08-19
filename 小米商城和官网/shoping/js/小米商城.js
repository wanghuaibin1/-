let xiazai = document.querySelector('.xiazai');
let download = document.querySelector('.download');
xiazai.onmouseover = function () {
    download.style.height = "175px"
}
xiazai.onmouseout = function () {
    download.style.height = "0";
}

let gowu = document.querySelector('.banxing-right-one')
let Shopping_Cart = document.querySelector('.banxing-right-one').querySelector('div')
gowu.onmouseover = function () {
    gowu.style.backgroundColor = "rgb(255,255,255)"
    gowu.style.color = "red"
    Shopping_Cart.style.height = "100px";
}
gowu.onmouseout = function () {
    gowu.style.backgroundColor = "rgb(66, 66, 66)"
    gowu.style.color = "rgb(176, 176, 176)"
    Shopping_Cart.style.height = "0";

}

let nav = document.querySelectorAll('.nav-item');
//let nav01=document.querySelector('.nav-box');
let item = document.querySelectorAll('.item-children')
//let ff = document.querySelectorAll(".item")
function hhh() {
    $(".header-nav .nav-box").on("mouseenter", ".nav-item", function () {
        $(this).addClass("ll")
        let inss = $(this).index() - 1;
        if (inss >= 0 && inss <= 6) {
            for (let i = 0; i < item.length; i++) {
                item[i].style.display = "none"

            }
            item[inss].style.display = "block"
            $(".item-children").addClass("kk");

        }

        // $(".nav-item").find("div").eq(inss).css("display","block").siblings("div").css("display","none")

        // item[inss].style.transition=".5s all"
    })
    $(".header-nav .nav-box").on("mouseleave", ".nav-item", function () {
        $(this).removeClass("ll")
    })
    $(".nav-item").mouseleave(function () {
        $(".item-children").removeClass("kk");
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = "block"

        }
    })
}

hhh()
// for (let i = 0; i < nav.length; i++) {
//     nav[i].setAttribute('dex', i);
//     nav[i].onmouseover = function () {
//         // for (let i = 0; i < nav.length; i++) {
//         //     this.className = "nav-item"
//         // }
//         // this.className = "nav-item nav"
//         let dex = this.getAttribute('dex')
//         for (let i = 0; i < item.length; i++) {
//             item[i].style.height = "0"
//         }
//         item[dex].style.height = "222px"
//         item[dex].style.transition = "0.5s ease";

//     }
//     nav[i].onmouseout = function () {

//         for (let i = 0; i < nav.length; i++) {
//             this.className = "nav-item"
//         }
//         let dex = this.getAttribute('dex')
//         for (let i = 0; i < item.length; i++) {
//             item[i].style.height = "0"
//         }
//         item[dex].style.transition = "0.3s ease";

//     }
// }

//轮播图左侧模块显示与隐藏

let shoji = document.querySelectorAll('.shoji')
let asideRight = document.querySelectorAll('.aside-right');
for (let i = 0; i < shoji.length; i++) {
    shoji[i].setAttribute('sho', i)
    shoji[i].onmouseover = function () {
        for (let i = 0; i < shoji.length; i++) {
            this.style.backgroundColor = ""
        }
        this.style.backgroundColor = "rgb(255,103,0)"
        let sho = this.getAttribute('sho')
        for (let i = 0; i < asideRight.length; i++) {
            asideRight[i].style.display = "none"
        }
        asideRight[sho].style.display = "block"
    }

    shoji[i].onmouseout = function () {
        for (let i = 0; i < shoji.length; i++) {
            this.style.backgroundColor = ""
        }
        let sho = this.getAttribute('sho')
        for (let i = 0; i < asideRight.length; i++) {
            asideRight[i].style.display = "none"
        }
    }
}




//头部搜索栏状态
let search = document.querySelector('.search-01')
let search01 = document.querySelector('.search01')
let searchBox = document.querySelector('.search-box');
search.onfocus = function () {
    search.style.borderColor = "red"
    search01.style.borderColor = "red"
    searchBox.style.display = "block"
}
search.onblur = function () {
    search.style.borderColor = "rgb(176, 176, 176)"
    search01.style.borderColor = "rgb(176, 176, 176)"
    searchBox.style.display = "none"
}

let plac = ["黑鲨5", "小米手机", "电视", "风扇", "红米", "耳机", "路由器"]
let pl = 0;
//给搜索框内设置一个函数
function placeholder() {
    pl++;
    if (pl === 7) {
        pl = 0;
    }
    search.placeholder = plac[pl]

}
// 添加定时器自动变化
setInterval(placeholder, 6000);










//轮播图


let map = document.querySelector('.rotationMap-map').querySelectorAll('img');
let left = document.querySelector('.button-left');
let right = document.querySelector('.button-right');
let rotation = document.querySelector('.rotation');
let yuandian = document.querySelector('.rotation-pagination').querySelectorAll('li')
let index = 0;

//右边按钮

let lock = true;   // 设置函数节流锁
right.onclick = function () {
    if (!lock) return;
    index++;
    for (let i = 0; i < map.length; i++) {
        map[i].style.opacity = "0"
    }
    map[index].style.opacity = "1"
    map[index].style.transition = "0.5s ease";

    if (index === 5) {
        index = 0;
        setTimeout(function () {
            for (let i = 0; i < map.length; i++) {
                map[i].style.opacity = "0"
                map[i].style.transition = "none";
            }
            map[index].style.opacity = "1"
            map[index].transition = "0.5s ease";
        }, 500)
    } yuan()//圆点高亮显示函数
    lock = false;
    setTimeout(() => {
        lock = true;
    }, 800);
}
//左边按钮
left.onclick = function () {
    if (!lock) return;
    index--;
    if (index === -1) {
        for (let i = 0; i < map.length; i++) {
            map[i].style.opacity = "0"
            map[i].style.transition = "none"
            map[5].style.opacity = "1"
        }
        index = 4;
        setTimeout(function () {
            for (let i = 0; i < map.length; i++) {
                map[i].style.opacity = "0"
            }
            map[index].style.opacity = "1"
            map[index].style.transition = "0.5s ease";
        }, 0)
    } else {
        for (let i = 0; i < map.length; i++) {
            map[i].style.opacity = "0"
        }
        map[index].style.opacity = "1"
        map[index].style.transition = "0.5s ease";
    } yuan()//圆点高亮显示函数
    lock = false;
    setTimeout(() => {
        lock = true;
    }, 800);
}
//自动播放
function zido() {
    index++;
    for (let i = 0; i < map.length; i++) {
        map[i].style.opacity = "0"
    }
    map[index].style.opacity = "1"
    map[index].style.transition = "0.5s ease";

    if (index === 5) {
        index = 0;
        setTimeout(function () {
            for (let i = 0; i < map.length; i++) {
                map[i].style.opacity = "0"
                map[i].style.transition = "none";
            }
            map[index].style.opacity = "1"
            map[index].transition = "0.5s ease";
        }, 500)
    } yuan()//圆点高亮显示函数
}
// 给自动播放函数设置定时器
let zido01 = setInterval(zido, 3000);
//划入关闭
rotation.onmouseover = function () {
    clearInterval(zido01); //关闭定时器
    // bo1.style.display = "block"//隐藏小箭头
}
//离开 开启定时器
rotation.onmouseout = function () {
    //先关闭定时器  再开启
    clearInterval(zido01);
    zido01 = setInterval(zido, 3000);
    // bo1.style.display = "none"
}

function yuan() {
    for (let i = 0; i < yuandian.length; i++) {
        if (i === index) {
            yuandian[i].className = "yanse"
        } else {
            yuandian[i].className = ""
        }
    }
}
//绑定点击圆点改变图片样式
for (let i = 0; i < yuandian.length; i++) {

    yuandian[i].setAttribute('whb', i);
    yuandian[i].onclick = function () {
        let whb = this.getAttribute('whb');
        index = whb;
        for (let i = 0; i < map.length; i++) {
            map[i].style.opacity = "0"
            map[i].transition = "0.5s ease";
            for (let i = 0; i < yuandian.length; i++) {
                yuandian[i].className = ""
            }
        }
        map[index].style.opacity = "1"
        map[index].transition = "0.5s ease";
        yuandian[i].className = "yanse"

    }
}

$(".more span").mouseover(function () {
    $(this).addClass("border-01").siblings().removeClass("border-01")
    $(this).parents(".homepage-content").find(".span-right").eq($(this).index()).css("display", "block").siblings(".span-right").css("display", "none")
})


// // 主页
// // 第三模块 热门与穿戴的显示与隐藏
// var smartWear = document.querySelector('.smartWear').querySelectorAll('span')
// var smart_wear = document.querySelectorAll('.smart-wear')

// for (let i = 0; i < smartWear.length; i++) {
//     smartWear[i].onmouseover = function () {
//         let chik = i;
//         for (let i = 0; i < smartWear.length; i++) {
//             smartWear[i].className = ""
//             for (let i = 0; i < smart_wear.length; i++) {
//                 smart_wear[i].style.display = "none"
//             }
//             smart_wear[chik].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }
// // 第五个模块 家电

// var jiadian = document.querySelector('.jiadian').querySelectorAll('span')
// var jia_dian = document.querySelectorAll('.jia-dian')

// for (let i = 0; i < jiadian.length; i++) {
//     jiadian[i].onmouseover = function () {
//         let chik = i;
//         for (let i = 0; i < jiadian.length; i++) {
//             jiadian[i].className = ""
//             for (let i = 0; i < jia_dian.length; i++) {
//                 jia_dian[i].style.display = "none"
//             }
//             jia_dian[chik].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }
// // 第六个模块  生活电器
// var householdAppliances = document.querySelector('.householdAppliances').querySelectorAll('span')
// var household_appliances = document.querySelectorAll('.household-appliances')

// for (let i = 0; i < householdAppliances.length; i++) {
//     householdAppliances[i].onmouseover = function () {
//         let shdq = i;
//         for (let i = 0; i < householdAppliances.length; i++) {
//             householdAppliances[i].className = ""
//             for (let i = 0; i < household_appliances.length; i++) {
//                 household_appliances[i].style.display = "none"
//             }
//             household_appliances[shdq].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }
// // 第八个模块 厨房家电
// var kitchenAppliances = document.querySelector('.kitchenAppliances').querySelectorAll('span')
// var kitchen_appliances = document.querySelectorAll('.kitchen-appliances')

// for (let i = 0; i < kitchenAppliances.length; i++) {
//     kitchenAppliances[i].onmouseover = function () {
//         let cfjd = i;
//         for (let i = 0; i < kitchenAppliances.length; i++) {
//             kitchenAppliances[i].className = ""
//             for (let i = 0; i < kitchen_appliances.length; i++) {
//                 kitchen_appliances[i].style.display = "none"
//             }
//             kitchen_appliances[cfjd].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }

// //第九个模块 智能家居

// var smartHome = document.querySelector('.smartHome').querySelectorAll('span')
// var smart_home = document.querySelectorAll('.smart-home')

// for (let i = 0; i < smartHome.length; i++) {
//     smartHome[i].onmouseover = function () {
//         let znjj = i;
//         for (let i = 0; i < smartHome.length; i++) {
//             smartHome[i].className = ""
//             for (let i = 0; i < smart_home.length; i++) {
//                 smart_home[i].style.display = "none"
//             }
//             smart_home[znjj].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }

// //第十个模块 运动出行



// var sportsTravel = document.querySelector('.sportsTravel').querySelectorAll('span')
// var sports_travel = document.querySelectorAll('.sports-travel')

// for (let i = 0; i < sportsTravel.length; i++) {
//     sportsTravel[i].onmouseover = function () {
//         let znjj = i;
//         for (let i = 0; i < sportsTravel.length; i++) {
//             sportsTravel[i].className = ""
//             for (let i = 0; i < sports_travel.length; i++) {
//                 sports_travel[i].style.display = "none"
//             }
//             sports_travel[znjj].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }

// //第十二个模块 日用百货

// var generalMerchandise = document.querySelector('.generalMerchandise').querySelectorAll('span')
// var general_merchandise = document.querySelectorAll('.general-merchandise')

// for (let i = 0; i < generalMerchandise.length; i++) {
//     generalMerchandise[i].onmouseover = function () {
//         let rybh = i;
//         for (let i = 0; i < generalMerchandise.length; i++) {
//             generalMerchandise[i].className = ""
//             for (let i = 0; i < general_merchandise.length; i++) {
//                 general_merchandise[i].style.display = "none"
//             }
//             general_merchandise[rybh].style.display = "block"
//         }

//         this.className = "border-01"
//     }

// }

//底部换图
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')


function huantu() {

    setTimeout(function () {
        if (img1.style.display === "block") {
            img1.style.display = "none"
            img2.style.display = "block"
        } else {
            img1.style.display = "block"
            img2.style.display = "none"
        }
    }, 0)

}
setInterval(huantu, 6000);







// 悬浮框
let dibu = document.querySelector('.suspension-top')

toggleTool()
function toggleTool() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 1000) {
        dibu.style.visibility = "inherit"
        $(".fixedtool").css("display", "block")
    } else if (scrollTop <= 1000) {
        dibu.style.visibility = "hidden"
        $(".fixedtool").css("display", "none")
    }
}

let flag=true;
window.onscroll = function () {
    toggleTool()
    if(flag){
        $(".homepage-content").each(function (i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                console.log(i);
                $(".fixedtool li").eq(i+1).addClass("current").siblings().removeClass()
            }
        })
    }
}
$(".fixedtool li").click(function () {
    flag = false;
    //console.log($(this).index());
    $(this).addClass("current").siblings().removeClass()
    let current = $(".homepage-content").eq($(this).index()).offset().top;
    $("body,html").stop().animate({
        scrollTop: current
    }, function () {
        flag = true;
    })
})


























