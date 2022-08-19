function lbt_one() {
    let rotationChart_one = document.querySelector('.rotationChart-one')
    let rotationChart_one_ul = document.querySelector('.rotationChart-one-ul')
    let smallbtn_one = document.querySelectorAll('.swiper-pagination-one')
    let button_one = document.querySelectorAll('.swiper-button-one')
    let time = null;
    let nowimage = 0;
    let startX = null;
    let saveTranform = 0;
    let savebtn = 0;

    // window.onresize=function(){
    //     ImageAnimate()
    //     console.log("5");
    // }
    // 克隆第一个li  添加到ul
    rotationChart_one_ul.appendChild(rotationChart_one_ul.children[0].cloneNode(true));

    function ImageAnimate() {
        //检测是否有过渡类
        if (!rotationChart_one_ul.classList.contains("ultrans")) {
            rotationChart_one_ul.classList.add("ultrans");
        }
        nowimage++;
        checkColor(); //小圆点变色
        let img_width = rotationChart_one_ul.offsetWidth;
        rotationChart_one_ul.style.transform = "translatex(" + (-nowimage * img_width) + "px)";
        animateload();
    }
    /*
     * 动画完成之后的方法
     * */
    function animateload() {
        //做一个 ul动画完成时间
        setTimeout(function () {
            //判断nowimage
            if (nowimage >= rotationChart_one_ul.children.length - 1) {
                // console.log( rotationChart_one_ul.children.length - 1);
                nowimage = 0;
                //去掉元素的过渡类
                rotationChart_one_ul.classList.remove("ultrans");
                rotationChart_one_ul.style.transform = "translatex(0px)";
            }
            let img_width = rotationChart_one_ul.offsetWidth;
            saveTranform = -nowimage * img_width;
        }, 500);
    }
    /*
     * 对应点变色的方法
     * */
    function checkColor() {
        smallbtn_one[savebtn].classList.remove("check");
        //图片变化之后  切换下面点
        savebtn = nowimage >= rotationChart_one_ul.children.length - 1 ? 0 : nowimage;
        smallbtn_one[savebtn].classList.add("check");
    }

    /*
     * 循环计时器
     * */
    addInterval();
    function addInterval() {
        time = setInterval(function () {
            ImageAnimate();
        }, 6000);
    }


    /*
     *  rotationChart 事件
     *
     * */
    rotationChart_one.onmouseenter = function () {  /*指针移动到该 rotationChart时触发*/
        clearInterval(time);// 暂停定时器循环
    }
    rotationChart_one.onmouseleave = function () { /*指针移出 rotationChart时触发*/
        addInterval(); //开启定时器循环
    }
    rotationChart_one.onmousedown = function (e) {  /*按下触发*/
        startX = e.pageX || e.clientX; /*水平坐标*/

        rotationChart_one_ul.classList.remove("ultrans"); /*删除元素的一个或多个类名;*/
        e.preventDefault();/*阻止默认行为*/
        //按下之后添加鼠标移动事件
        rotationChart_one.addEventListener("mousemove", moveData);/*向moveData函数添加  鼠标被移动事件*/
    }

    rotationChart_one.onmouseup = function () { /*鼠标按键被松开*/
        rotationChart_one.removeEventListener("mousemove", moveData); /*移除鼠标移动事件*/
        rotationChart_one_ul.classList.add("ultrans");/*向元素添加一个或多个类名;*/
        //检测当前的移动距离
        if (cx > 0) {
            let img_width = rotationChart_one_ul.offsetWidth;
            if (Math.abs(cx) >= img_width / 2) {  /*Math.abs（）返回数的绝对值*/
                nowimage--;
            }
        }
        else if (cx < 0) {
            let img_width = rotationChart_one_ul.offsetWidth;
            if (Math.abs(cx) >= img_width / 2) {
                nowimage++;
            }
        }
        let img_width = rotationChart_one_ul.offsetWidth;
        rotationChart_one_ul.style.transform = "translatex(" + (-nowimage * img_width) + "px)";
        checkColor();
        animateload();
    }
    /*
     * 移动事件监听的方法2
     * */
    var cx = 0;
    function moveData(e) {
        var x = e.pageX || e.clientX; //相对当前元素的坐标
        cx = x - startX;
        if (cx > 0) {
            //检测当前图左边有没有图
            if (nowimage <= 0) {
                let img_width = rotationChart_one_ul.offsetWidth;
                nowimage = rotationChart_one_ul.children.length - 1;
                rotationChart_one_ul.style.transform = "translatex()";
                saveTranform = -img_width * 6;
            }
        }
        rotationChart_one_ul.style.transform = "translatex(" + (saveTranform + cx) + "px)";
    }

    /*
     * 小点添加事件  操作
     *
     * */
    for (var i = 0; i < smallbtn_one.length; i++) {
        smallbtn_one[i].index = i;
        smallbtn_one[i].onclick = function () {
            let img_width = rotationChart_one_ul.offsetWidth;

            smallbtn_one[savebtn].classList.remove("check");
            this.classList.add("check");
            savebtn = this.index;
            nowimage = this.index;
            rotationChart_one_ul.style.transform = "translatex(" + (-nowimage * img_width) + "px)";
            saveTranform = -nowimage * img_width;
        }
    }
    //左侧按钮
    button_one[0].addEventListener(('click'), function () {
        nowimage--;
        if (nowimage == -1) {
            //判断位置  先切换到假图再从假图拉
            setTimeout(function () {
                let img_width = rotationChart_one_ul.offsetWidth;
                rotationChart_one_ul.classList.remove("ultrans");
                rotationChart_one_ul.style.transform = "translatex(" + (-img_width * 6) + "px)";
                setTimeout(function () {
                    nowimage = 5
                    checkColor(); //小圆点变色
                    let img_width = rotationChart_one_ul.offsetWidth;
                    rotationChart_one_ul.classList.add("ultrans");
                    rotationChart_one_ul.style.transform = "translatex(" + (-nowimage * img_width) + "px)";
                })
            }, 0)
            nowimage = 5;
        } else {
            checkColor(); //小圆点变色
            let img_width = rotationChart_one_ul.offsetWidth;
            rotationChart_one_ul.style.transform = "translatex(" + (-nowimage * img_width) + "px)";
        }

    })
    //右侧按钮
    button_one[1].addEventListener('click', function () {
        nowimage++;
        checkColor(); //小圆点变色
        let img_width = rotationChart_one_ul.offsetWidth;
        rotationChart_one_ul.style.transform = "translatex(" + (-nowimage * img_width) + "px)";
        animateload()
    })
}



// $(".rotationChart-ul").each(function (i, ev) {
//     $(ev).append(ev.children[0].cloneNode(true))
//    console.log(ev.offsetWidth);
//    console.log(i);
//    $(ev).css("transform","translatex("+(-2*ev.offsetWidth)+"px)")
// })

// function Tmage() {
//     if (!$(".rotationChart-ul").hasClass("ultrans")) {
//         $(this).addClass("ultrans")
//     }
// }










function lbt_two() {
    let rotationChart_two = document.querySelector('.rotationChart-two')
    let rotationChart_two_ul = document.querySelector('.rotationChart-two-ul')
    let smallbtn_two = document.querySelectorAll('.swiper-pagination-two')
    let button_two = document.querySelectorAll('.swiper-button-two')
    let time_two = null;
    let nowimage_two = 0;
    let startX_two = null;
    let saveTranform_two = 0;
    let savebtn_two = 0;


    // 克隆第一个li  添加到ul
    rotationChart_two_ul.appendChild(rotationChart_two_ul.children[0].cloneNode(true));

    function ImageAnimate_two() {
        //检测是否有过渡类
        if (!rotationChart_two_ul.classList.contains("ultrans")) {
            rotationChart_two_ul.classList.add("ultrans");
        }
        nowimage_two++;
        checkColor_two(); //小圆点变色
        let img_width_two = rotationChart_two_ul.offsetWidth;
        rotationChart_two_ul.style.transform = "translatex(" + (-nowimage_two * img_width_two) + "px)";
        animateload_two();
    }
    /*
     * 动画完成之后的方法
     * */
    function animateload_two() {
        //做一个 ul动画完成时间
        setTimeout(function () {
            //判断nowimage
            if (nowimage_two >= rotationChart_two_ul.children.length - 1) {
                // console.log( rotationChart_two_ul.children.length - 1);
                nowimage_two = 0;
                //去掉元素的过渡类
                rotationChart_two_ul.classList.remove("ultrans");
                rotationChart_two_ul.style.transform = "translatex(0px)";
            }
            let img_width_two = rotationChart_two_ul.offsetWidth;
            saveTranform_two = -nowimage_two * img_width_two;
        }, 500);
    }
    /*
     * 对应点变色的方法
     * */
    function checkColor_two() {
        smallbtn_two[savebtn_two].classList.remove("check");
        //图片变化之后  切换下面点
        savebtn_two = nowimage_two >= rotationChart_two_ul.children.length - 1 ? 0 : nowimage_two;
        smallbtn_two[savebtn_two].classList.add("check");
    }

    /*
     * 循环计时器
     * */
    addInterval_two();
    function addInterval_two() {
        time_two = setInterval(function () {
            ImageAnimate_two();
        }, 6000);
    }


    /*
     *  rotationChart 事件
     *
     * */
    rotationChart_two.onmouseenter = function () {  /*指针移动到该 rotationChart时触发*/
        clearInterval(time_two);// 暂停定时器循环
    }
    rotationChart_two.onmouseleave = function () { /*指针移出 rotationChart时触发*/
        addInterval_two(); //开启定时器循环
    }
    rotationChart_two.onmousedown = function (e) {  /*按下触发*/
        startX_two = e.pageX || e.clientX; /*水平坐标*/

        rotationChart_two_ul.classList.remove("ultrans"); /*删除元素的一个或多个类名;*/
        e.preventDefault();/*阻止默认行为*/
        //按下之后添加鼠标移动事件
        rotationChart_two.addEventListener("mousemove", moveData_two);/*向moveData函数添加  鼠标被移动事件*/
    }

    rotationChart_two.onmouseup = function () { /*鼠标按键被松开*/
        rotationChart_two.removeEventListener("mousemove", moveData_two); /*移除鼠标移动事件*/
        rotationChart_two_ul.classList.add("ultrans");/*向元素添加一个或多个类名;*/
        //检测当前的移动距离
        if (cx > 0) {
            let img_width_two = rotationChart_two_ul.offsetWidth;
            if (Math.abs(cx) >= img_width_two / 2) {  /*Math.abs（）返回数的绝对值*/
                nowimage_two--;
            }
        }
        else if (cx < 0) {
            let img_width_two = rotationChart_two_ul.offsetWidth;
            if (Math.abs(cx) >= img_width_two / 2) {
                nowimage_two++;
            }
        }
        let img_width_two = rotationChart_two_ul.offsetWidth;
        rotationChart_two_ul.style.transform = "translatex(" + (-nowimage_two * img_width_two) + "px)";
        checkColor_two();
        animateload_two();
    }
    /*
     * 移动事件监听的方法2
     * */
    var cx = 0;
    function moveData_two(e) {
        var x = e.pageX || e.clientX; //相对当前元素的坐标
        cx = x - startX_two;
        if (cx > 0) {
            //检测当前图左边有没有图
            if (nowimage_two <= 0) {
                let img_width_two = rotationChart_two_ul.offsetWidth;
                nowimage_two = rotationChart_two_ul.children.length - 1;
                rotationChart_two_ul.style.transform = "translatex()";
                saveTranform_two = -img_width_two * 3;
            }
        }
        rotationChart_two_ul.style.transform = "translatex(" + (saveTranform_two + cx) + "px)";
    }

    /*
     * 小点添加事件  操作
     *
     * */
    for (var i = 0; i < smallbtn_two.length; i++) {
        smallbtn_two[i].index = i;
        smallbtn_two[i].onclick = function () {
            let img_width_two = rotationChart_two_ul.offsetWidth;

            smallbtn_two[savebtn_two].classList.remove("check");
            this.classList.add("check");
            savebtn_two = this.index;
            nowimage_two = this.index;
            rotationChart_two_ul.style.transform = "translatex(" + (-nowimage_two * img_width_two) + "px)";
            saveTranform_two = -nowimage_two * img_width_two;
        }
    }
    //左侧按钮
    button_two[0].addEventListener(('click'), function () {
        nowimage_two--;
        if (nowimage_two == -1) {
            //判断位置  先切换到假图再从假图拉
            setTimeout(function () {
                let img_width_two = rotationChart_two_ul.offsetWidth;
                rotationChart_two_ul.classList.remove("ultrans");
                rotationChart_two_ul.style.transform = "translatex(" + (-img_width_two * 3) + "px)";
                setTimeout(function () {
                    nowimage_two = 2
                    checkColor_two(); //小圆点变色
                    let img_width_two = rotationChart_two_ul.offsetWidth;
                    rotationChart_two_ul.classList.add("ultrans");
                    rotationChart_two_ul.style.transform = "translatex(" + (-nowimage_two * img_width_two) + "px)";
                })
            }, 0)
            nowimage_two = 2;
        } else {
            checkColor_two(); //小圆点变色
            let img_width_two = rotationChart_two_ul.offsetWidth;
            rotationChart_two_ul.style.transform = "translatex(" + (-nowimage_two * img_width_two) + "px)";
        }

    })
    //右侧按钮
    button_two[1].addEventListener('click', function () {
        nowimage_two++;
        checkColor_two(); //小圆点变色
        let img_width_two = rotationChart_two_ul.offsetWidth;
        rotationChart_two_ul.style.transform = "translatex(" + (-nowimage_two * img_width_two) + "px)";
        animateload_two()
    })
}








function lbt_three() {
    let rotationChart_three = document.querySelector('.rotationChart-three')
    let rotationChart_three_ul = document.querySelector('.rotationChart-three-ul')
    let smallbtn_three = document.querySelectorAll('.swiper-pagination-three')
    let button_three = document.querySelectorAll('.swiper-button-three')
    let time_three = null;
    let nowimage_three = 0;
    let startX_three = null;
    let saveTranform_three = 0;
    let savebtn_three = 0;


    // 克隆第一个li  添加到ul
    rotationChart_three_ul.appendChild(rotationChart_three_ul.children[0].cloneNode(true));

    function ImageAnimate_three() {
        //检测是否有过渡类
        if (!rotationChart_three_ul.classList.contains("ultrans")) {
            rotationChart_three_ul.classList.add("ultrans");
        }
        nowimage_three++;
        checkColor_three(); //小圆点变色
        let img_width_three = rotationChart_three_ul.offsetWidth;
        rotationChart_three_ul.style.transform = "translatex(" + (-nowimage_three * img_width_three) + "px)";
        animateload_three();
    }
    /*
     * 动画完成之后的方法
     * */
    function animateload_three() {
        //做一个 ul动画完成时间
        setTimeout(function () {
            //判断nowimage
            if (nowimage_three >= rotationChart_three_ul.children.length - 1) {
                // console.log( rotationChart_three_ul.children.length - 1);
                nowimage_three = 0;
                //去掉元素的过渡类
                rotationChart_three_ul.classList.remove("ultrans");
                rotationChart_three_ul.style.transform = "translatex(0px)";
            }
            let img_width_three = rotationChart_three_ul.offsetWidth;
            saveTranform_three = -nowimage_three * img_width_three;
        }, 500);
    }
    /*
     * 对应点变色的方法
     * */
    function checkColor_three() {
        smallbtn_three[savebtn_three].classList.remove("check");
        //图片变化之后  切换下面点
        savebtn_three = nowimage_three >= rotationChart_three_ul.children.length - 1 ? 0 : nowimage_three;
        smallbtn_three[savebtn_three].classList.add("check");
    }

    /*
     * 循环计时器
     * */
    addInterval_two();
    function addInterval_two() {
        time_three = setInterval(function () {
            ImageAnimate_three();
        }, 6000);
    }


    /*
     *  rotationChart 事件
     *
     * */
    rotationChart_three.onmouseenter = function () {  /*指针移动到该 rotationChart时触发*/
        clearInterval(time_three);// 暂停定时器循环
    }
    rotationChart_three.onmouseleave = function () { /*指针移出 rotationChart时触发*/
        addInterval_two(); //开启定时器循环
    }
    rotationChart_three.onmousedown = function (e) {  /*按下触发*/
        startX_three = e.pageX || e.clientX; /*水平坐标*/

        rotationChart_three_ul.classList.remove("ultrans"); /*删除元素的一个或多个类名;*/
        e.preventDefault();/*阻止默认行为*/
        //按下之后添加鼠标移动事件
        rotationChart_three.addEventListener("mousemove", moveData_two);/*向moveData函数添加  鼠标被移动事件*/
    }

    rotationChart_three.onmouseup = function () { /*鼠标按键被松开*/
        rotationChart_three.removeEventListener("mousemove", moveData_two); /*移除鼠标移动事件*/
        rotationChart_three_ul.classList.add("ultrans");/*向元素添加一个或多个类名;*/
        //检测当前的移动距离
        if (cx > 0) {
            let img_width_three = rotationChart_three_ul.offsetWidth;
            if (Math.abs(cx) >= img_width_three / 2) {  /*Math.abs（）返回数的绝对值*/
                nowimage_three--;
            }
        }
        else if (cx < 0) {
            let img_width_three = rotationChart_three_ul.offsetWidth;
            if (Math.abs(cx) >= img_width_three / 2) {
                nowimage_three++;
            }
        }
        let img_width_three = rotationChart_three_ul.offsetWidth;
        rotationChart_three_ul.style.transform = "translatex(" + (-nowimage_three * img_width_three) + "px)";
        checkColor_three();
        animateload_three();
    }
    /*
     * 移动事件监听的方法2
     * */
    var cx = 0;
    function moveData_two(e) {
        var x = e.pageX || e.clientX; //相对当前元素的坐标
        cx = x - startX_three;
        if (cx > 0) {
            //检测当前图左边有没有图
            if (nowimage_three <= 0) {
                let img_width_three = rotationChart_three_ul.offsetWidth;
                nowimage_three = rotationChart_three_ul.children.length - 1;
                rotationChart_three_ul.style.transform = "translatex()";
                saveTranform_three = -img_width_three * 8;
            }
        }
        rotationChart_three_ul.style.transform = "translatex(" + (saveTranform_three + cx) + "px)";
    }

    /*
     * 小点添加事件  操作
     *
     * */
    for (var i = 0; i < smallbtn_three.length; i++) {
        smallbtn_three[i].index = i;
        smallbtn_three[i].onclick = function () {
            let img_width_three = rotationChart_three_ul.offsetWidth;

            smallbtn_three[savebtn_three].classList.remove("check");
            this.classList.add("check");
            savebtn_three = this.index;
            nowimage_three = this.index;
            rotationChart_three_ul.style.transform = "translatex(" + (-nowimage_three * img_width_three) + "px)";
            saveTranform_three = -nowimage_three * img_width_three;
        }
    }
    //左侧按钮
    button_three[0].addEventListener(('click'), function () {
        nowimage_three--;
        if (nowimage_three == -1) {
            //判断位置  先切换到假图再从假图拉
            setTimeout(function () {
                let img_width_three = rotationChart_three_ul.offsetWidth;
                rotationChart_three_ul.classList.remove("ultrans");
                rotationChart_three_ul.style.transform = "translatex(" + (-img_width_three * 8) + "px)";
                setTimeout(function () {
                    nowimage_three = 7
                    checkColor_three(); //小圆点变色
                    let img_width_three = rotationChart_three_ul.offsetWidth;
                    rotationChart_three_ul.classList.add("ultrans");
                    rotationChart_three_ul.style.transform = "translatex(" + (-nowimage_three * img_width_three) + "px)";
                })
            }, 0)
            nowimage_three = 7;
        } else {
            checkColor_three(); //小圆点变色
            let img_width_three = rotationChart_three_ul.offsetWidth;
            rotationChart_three_ul.style.transform = "translatex(" + (-nowimage_three * img_width_three) + "px)";
        }

    })
    //右侧按钮
    button_three[1].addEventListener('click', function () {
        nowimage_three++;
        checkColor_three(); //小圆点变色
        let img_width_three = rotationChart_three_ul.offsetWidth;
        rotationChart_three_ul.style.transform = "translatex(" + (-nowimage_three * img_width_three) + "px)";
        animateload_three()
    })
}


$(".play-button").each(function (e, ss) { // 遍历每个不同类下的元素获取点击下标
    let wangzhi = ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb561a6fa1f98a0ad33819ccb2f04adc.mp4", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db2e472a63900a782d01b066bfc5fcce.mp4", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95d64e75e7e95146a403acb7694df335.mp4", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c849219559d995adefb11d5f54a3c1c.mp4", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90cf7fc1d870df0ad73c5af13f6772ea.mp4", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7194236f31b2e1e3da0fe06cfed4ba2b.mp4"]
    $(wangzhi) //给这个dom元素转换为jquery对象  $(wangzhi)
    $(ss).click(function () {
        let shipin = $(`<div data-v-13bc80bf="" class="dialog-background">
        <div data-v-13bc80bf="" class="dialog-outer-video">
            <div data-v-13bc80bf="" class="close-button"></div>
            <div data-v-13bc80bf="" class="dialog-main">
                <div data-v-886cbd70="" class="" data-v-13bc80bf="">
                    <div data-v-886cbd70="" class="mi-video-player"><video data-v-886cbd70="" id="miPlayerVideo"
                            controls="controls" controlslist="nodownload noremoteplayback noplaybackrate"
                            disablepictureinpicture="" autoplay="autoplay"
                            poster="https://img.youpin.mi-img.com/ferriswheel/5ca95523_240d_4b0f_8b9f_a8e654adeb2a.jpeg?w=2560&amp;h=1228"
                            width="819" 
                            src="${wangzhi[e]}"> 
                            // <source data-v-886cbd70=""
                            //     src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb561a6fa1f98a0ad33819ccb2f04adc.mp4">
                        </video></div>
                </div>
            </div>
        </div>
    </div>`)
        $("body").append(shipin)
        document.body.parentNode.style.overflowY = "hidden"; //删除滚动条
        $(".close-button").click(function () {
            $(".dialog-background").remove(); //删除节点div包括子元素
            document.body.parentNode.style.overflowY = "auto"; //恢复滚动条
        })
    })
})


//jj()
function jj() {

    $(".bu .play-button").click(function () {
        $(`<div data-v-13bc80bf="" class="dialog-background">
           <div data-v-13bc80bf="" class="dialog-outer-video">
               <div data-v-13bc80bf="" class="close-button"></div>
               <div data-v-13bc80bf="" class="dialog-main">
                   <div data-v-886cbd70="" class="" data-v-13bc80bf="">
                       <div data-v-886cbd70="" class="mi-video-player"><video data-v-886cbd70="" id="miPlayerVideo"
                               controls="controls" controlslist="nodownload noremoteplayback noplaybackrate"
                               disablepictureinpicture="" autoplay="autoplay"
                               poster="https://img.youpin.mi-img.com/ferriswheel/5ca95523_240d_4b0f_8b9f_a8e654adeb2a.jpeg?w=2560&amp;h=1228"
                               width="819" 
                               src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb561a6fa1f98a0ad33819ccb2f04adc.mp4"> 
                               <source data-v-886cbd70=""
                                   src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb561a6fa1f98a0ad33819ccb2f04adc.mp4">
                           </video></div>
                   </div>
               </div>
           </div>
       </div>`).appendTo("body") //使用jquery在body后面创建div
        document.body.parentNode.style.overflowY = "hidden"; //隐藏滚动条
        $(".close-button").click(function () {
            $(".dialog-background").remove(); //删除节点div包括子元素
            document.body.parentNode.style.overflowY = "auto"; //恢复滚动条
        })
    })

    $(".trueWords-one .play-button").click(function () {
        $(`<div data-v-13bc80bf="" class="dialog-background">
        <div data-v-13bc80bf="" class="dialog-outer-video">
            <div data-v-13bc80bf="" class="close-button"></div>
            <div data-v-13bc80bf="" class="dialog-main">
                <div data-v-886cbd70="" class="" data-v-13bc80bf="">
                    <div data-v-886cbd70="" class="mi-video-player"><video data-v-886cbd70="" id="miPlayerVideo"
                            controls="controls" controlslist="nodownload noremoteplayback noplaybackrate"
                            disablepictureinpicture="" autoplay="autoplay"
                            poster="https://img.youpin.mi-img.com/ferriswheel/f234a443_b3e4_4238_9b92_77ff73d722a4.png?w=2560&amp;h=1228"
                            width="819"
                            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db2e472a63900a782d01b066bfc5fcce.mp4">
                            <source data-v-886cbd70=""
                                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db2e472a63900a782d01b066bfc5fcce.mp4">
                        </video></div>
                </div>
            </div>
        </div>
    </div>`).appendTo("body")
        document.body.parentNode.style.overflowY = "hidden";
        $(".close-button").click(function () {
            $(".dialog-background").remove();
            document.body.parentNode.style.overflowY = "auto";
        })

    })

    $(".trueWords-two .play-button").click(function () {
        $(` <div data-v-13bc80bf="" class="dialog-background">
        <div data-v-13bc80bf="" class="dialog-outer-video">
            <div data-v-13bc80bf="" class="close-button"></div>
            <div data-v-13bc80bf="" class="dialog-main">
                <div data-v-886cbd70="" class="" data-v-13bc80bf="">
                    <div data-v-886cbd70="" class="mi-video-player"><video
                            data-v-886cbd70="" id="miPlayerVideo" controls="controls"
                            controlslist="nodownload noremoteplayback noplaybackrate"
                            disablepictureinpicture="" autoplay="autoplay"
                            poster="https://img.youpin.mi-img.com/ferriswheel/72c9e098_a702_4c82_850a_22eb388b0945.png?w=2560&amp;h=1228"
                            width="819"
                            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95d64e75e7e95146a403acb7694df335.mp4">
                            <source data-v-886cbd70=""
                                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95d64e75e7e95146a403acb7694df335.mp4">
                        </video></div>
                </div>
            </div>
        </div>
    </div>`).appendTo("body")
        document.body.parentNode.style.overflowY = "hidden";
        $(".close-button").click(function () {
            $(".dialog-background").remove();
            document.body.parentNode.style.overflowY = "auto";
        })

    })

    $(".trueWords-three .play-button").click(function () {
        $(` 
        <div data-v-13bc80bf="" class="dialog-background">
            <div data-v-13bc80bf="" class="dialog-outer-video">
                <div data-v-13bc80bf="" class="close-button"></div>
                <div data-v-13bc80bf="" class="dialog-main">
                    <div data-v-886cbd70="" class="" data-v-13bc80bf="">
                        <div data-v-886cbd70="" class="mi-video-player"><video
                                data-v-886cbd70="" id="miPlayerVideo" controls="controls"
                                controlslist="nodownload noremoteplayback noplaybackrate"
                                disablepictureinpicture="" autoplay="autoplay"
                                poster="https://img.youpin.mi-img.com/ferriswheel/963d109e_6a94_45fa_8d5d_f5ebf3761298.png?w=2560&amp;h=1228"
                                width="819"
                                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c849219559d995adefb11d5f54a3c1c.mp4">
                                <source data-v-886cbd70=""
                                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c849219559d995adefb11d5f54a3c1c.mp4">
                            </video></div>
                    </div>
                </div>
            </div>
        </div>`).appendTo("body")
        document.body.parentNode.style.overflowY = "hidden";
        $(".close-button").click(function () {
            $(".dialog-background").remove();
            document.body.parentNode.style.overflowY = "auto";
        })

    })

    $(".review-one .play-button").click(function () {
        $(` 
        <div data-v-13bc80bf="" class="dialog-background"><div data-v-13bc80bf="" class="dialog-outer-video"><div data-v-13bc80bf="" class="close-button"></div> <div data-v-13bc80bf="" class="dialog-main"><div data-v-886cbd70="" class="" data-v-13bc80bf=""><div data-v-886cbd70="" class="mi-video-player"><video data-v-886cbd70="" id="miPlayerVideo" controls="controls" controlslist="nodownload noremoteplayback noplaybackrate" disablepictureinpicture="" autoplay="autoplay" poster="https://img.youpin.mi-img.com/ferriswheel/7dcc8f1d_7513_48a6_96ae_8fd335fae1af.png?w=1920&amp;h=1080" width="819" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90cf7fc1d870df0ad73c5af13f6772ea.mp4"><source data-v-886cbd70="" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90cf7fc1d870df0ad73c5af13f6772ea.mp4"></video></div></div></div></div></div>`).appendTo("body")
        document.body.parentNode.style.overflowY = "hidden";
        $(".close-button").click(function () {
            $(".dialog-background").remove();
            document.body.parentNode.style.overflowY = "auto";
        })

    })

    $(".review-two .play-button").click(function () {
        $(` 
        <div data-v-13bc80bf="" class="dialog-background"><div data-v-13bc80bf="" class="dialog-outer-video"><div data-v-13bc80bf="" class="close-button"></div> <div data-v-13bc80bf="" class="dialog-main"><div data-v-886cbd70="" class="" data-v-13bc80bf=""><div data-v-886cbd70="" class="mi-video-player"><video data-v-886cbd70="" id="miPlayerVideo" controls="controls" controlslist="nodownload noremoteplayback noplaybackrate" disablepictureinpicture="" autoplay="autoplay" poster="https://img.youpin.mi-img.com/ferriswheel/7dcc8f1d_7513_48a6_96ae_8fd335fae1af.png?w=1920&amp;h=1080" width="819" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7194236f31b2e1e3da0fe06cfed4ba2b.mp4"><source data-v-886cbd70="" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7194236f31b2e1e3da0fe06cfed4ba2b.mp4"></video></div></div></div></div></div>`).appendTo("body")
        document.body.parentNode.style.overflowY = "hidden";
        $(".close-button").click(function () {
            $(".dialog-background").remove();
            document.body.parentNode.style.overflowY = "auto";
        })

    })
}

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



window.onload = function () {
     lbt_one()
    lbt_three()
    setTimeout(function () {
        lbt_two()
    }, 2500)

}



window.onscroll = function () {
    let swiper_top = document.querySelector('.swiper-top')
    let header = document.querySelector('.index-header')
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 400) {
        swiper_top.style.display = "block"
        // header.style.backgroundColor = "rgb(21,27,34)"
        header.style.background = "rgba(21,27,34,0.7)"//防止css属性opacity影响子元素  在父元素的opacity改为background写法即可  等同于opacity:0.7
    }
    if (scrollTop <= 400) {
        swiper_top.style.display = "none"
        header.style.backgroundColor = ""
    }
}






















