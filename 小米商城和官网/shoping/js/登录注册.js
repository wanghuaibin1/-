let language = document.querySelector('.language');
let language_switch = document.querySelector('.language-switch');
language.addEventListener('mouseover', function () {
    language_switch.style.display = "block";
})
// language.onmouseover = function () {
//     language_switch.style.display = "block";
// }
language.onmouseout = function () {
    language_switch.style.display = "none";
}



let mi_form_input = document.querySelectorAll('.mi-form-input')
let inp = document.querySelector('.mi-form-content').querySelectorAll('input')
let labe = document.querySelectorAll('.mi-floating-labe')
let tips = document.querySelectorAll('.tips');
const w = 0;
//登录框
let Sign_in = document.querySelectorAll('.Sign-in');
let dl01;
setTimeout(function () {
    Sign_in[0].disabled = true
})
function dl() {
    setTimeout(function () {
        if (inp[0].value === "" || inp[1].value === "") {
            // Sign_in.style.opacity = ".4"
            Sign_in[0].className = "Sign-in op"
            Sign_in[0].disabled = true
            // ign_in.style.cursor = "default"
        } else {
            Sign_in[0].style.opacity = "1"
            Sign_in[0].style.cursor = "pointer"
            Sign_in[0].disabled = false
        }
    })
}
// Sign_in.onclick=function(){
//     console.log("000");
// }

// 文本框获取焦点函数
//账号文本框
function obtain() {
    labe[0].className = "mi-floating-labe obtain"
}
function yanse() {
    setTimeout(function () {
        if (inp[0].value === "") {
            labe[0].style.color = "#ff5c00"
            tips[0].style.display = "block"
        } else {
            labe[0].style.color = "#7f7a7a"
            tips[0].style.display = "none"
        }
    })
}
inp[0].onfocus = function () {
    dl01 = setInterval(dl,)
    obtain()
    mi_form_input[0].className = "mi-form-input input-border"
}
// 文本框失去焦点函数
function lose() {
    labe[0].className = "mi-floating-labe lose"
}

inp[0].onblur = function () {
    clearInterval(dl01)
    if (inp[0].value === "") {
        lose()
        let yans = setInterval(yanse,)//定时器检查输入状态
    } else {
        true
    }
    mi_form_input[0].className = "mi-form-input"
}


// 文本框获取焦点函数
//密码文本框
function obtain1() {
    labe[1].className = "mi-floating-labe obtain"
}
function yanse1() {
    setTimeout(function () {
        if (inp[1].value === "") {
            labe[1].style.color = "#ff5c00"
            tips[1].style.display = "block"
        } else {
            labe[1].style.color = "#7f7a7a"
            tips[1].style.display = "none"
        }
    })
}

inp[1].onfocus = function () {
    dl01 = setInterval(dl,)
    obtain1()
    mi_form_input[1].className = "mi-form-input input-border"
}
// 文本框失去焦点函数
function lose1() {
    labe[1].className = "mi-floating-labe lose"
}

inp[1].onblur = function () {
    clearInterval(dl01)
    if (inp[1].value === "") {
        lose1()
        let yans1 = setInterval(yanse1,)//定时器检查输入状态
    } else {
        true
    }
    mi_form_input[1].className = "mi-form-input"
}

let show = document.querySelector('.show');
let show_d = document.querySelector('.show').querySelectorAll('path');
show.onclick = function () {
    if (inp[1].type === "password") {
        show_d[0].style.display = "none"
        show_d[1].style.display = "block"
        inp[1].type = "text"
    } else {
        show_d[1].style.display = "none"
        show_d[0].style.display = "block"
        inp[1].type = "password"
    }
}



//条约按钮
let antchboox = document.querySelectorAll('.ant-checkbox')
let inner = document.querySelectorAll('.ant-checkbox-inner')
let dj = 0;
antchboox[0].onclick = function () {
    if (dj === 0) {
        this.className = "ant-checkbox ant-checkbox001"
        inner[0].className = "ant-checkbox-inner ant-checkbox-dianji "
        dj = 1;
    } else {
        this.className = "ant-checkbox"
        inner[0].className = "ant-checkbox-inner"
        dj = 0;
    }

}
let lj = 0;
antchboox[1].onclick = function () {
    if (lj === 0) {
        this.className = "ant-checkbox ant-checkbox001"
        inner[1].className = "ant-checkbox-inner ant-checkbox-dianji "
        lj = 1;
    } else {
        this.className = "ant-checkbox"
        inner[1].className = "ant-checkbox-inner"
        lj = 0;
    }

}





let login = document.querySelector('.login');
let register = document.querySelector('.register');
let underline = document.querySelector('.tabs-nav-Underline');
let content = document.querySelector('.ant-tabs-content')
let animated = document.querySelectorAll('.tabs-content-animated')

function yanzheng() {
    //register.addEventListener('click', function () {
    underline.style.left = "64px"
    // this.style.color = "#fff"
    login.style.color = ""
    content.style.marginLeft = "-100%"
    document.title = "小米账号---注册"
    animated[0].className = "tabs-content tabs-content-animated"
    animated[1].className = "tabs-content-animated"
    // })
}



register.onclick = function () {
    yanzheng()
}

login.addEventListener('click', function () {
    underline.style.left = "0"
    this.style.color = "#fff"
    register.style.color = ""
    content.style.marginLeft = "0"
    document.title = "小米账号---登录"
    animated[1].className = "tabs-content tabs-content-animated"
    animated[0].className = "tabs-content-animated"
})


//判断注册点击事件
window.onload = function () { //页面加载完成后再执行
    var type = sessionStorage.getItem("type");
    // console.log(type); //打印type值
    if (type == 'type') {
        var obj = "." + register;
        obj.onclick = yanzheng(); //要触发的点击事件  $('#xxx').click()
        sessionStorage.setItem("type", ""); //清除 type 防止在test页面刷新后依然触发$('#xxx').click()
    }
}



//国家地区文本框
let registe_js = document.querySelectorAll('.register-js');
let search_input = document.querySelector('.ant-select-selection-search-input')
search_input.addEventListener('focus', function () {
    this.parentNode.style.backgroundColor = "rgb(15,15,15)"
    registe_js[0].style.borderColor = "#ff5c00"
    registe_js[0].style.boxShadow = "0 0 0 2px rgb(255 92 0 /20%)"
})
search_input.addEventListener('blur', function () {
    this.parentNode.style.backgroundColor = ""
    registe_js[0].style.border = ""
    registe_js[0].style.boxShadow = ""
})
//手机号文本框
let shojihao = document.getElementById('shojihao')
let mi_register = document.querySelector('.mi-floating-register')
let phone_number = document.querySelector('.phone-number')
let address = document.querySelector('.guojiama')
let geshi;
shojihao.addEventListener('input', updateValue);
function updateValue(e) {
    phone_number.innerHTML = "请输入手机号码"
    if (e.target.value === "") {
        phone_number.style.display = "block"
        geshi=false;
        mi_register.style.color = "#ff5c00"
        address.style.color = "#ff5c00"
    } else if (e.target.value.length > 0 && e.target.value.length < 11) {
        phone_number.style.display = "block"
        geshi=false;
        mi_register.style.color = "#7f7a7a"
        address.style.color = "#7f7a7a"
        phone_number.innerHTML = "手机号码格式错误"
    } else if (e.target.value.length = 11) {
     geshi=true;
        phone_number.style.display = "none"
    }
}

shojihao.addEventListener('focus', function () {
    zc()
    mi_register.className = "obtain mi-floating-labe mi-floating-register"
    registe_js[1].style.borderColor = "#ff5c00"
    registe_js[1].style.boxShadow = "0 0 0 2px rgb(255 92 0 /20%)"

})

shojihao.onblur = function () {
    registe_js[1].style.borderColor = ""
    registe_js[1].style.boxShadow = ""
    if (shojihao.value === "") {
        phone_number.style.display = "block"
        mi_register.className = "mi-floating-labe mi-floating-register lose"
        mi_register.style.color = "#ff5c00"
        address.style.color = "#ff5c00"
    } else {
        // phone_number.style.display = "none"
        address.style.color = "#7f7a7a"
        mi_register.style.color = "#7f7a7a"
    }


}

function hh() {
    //Vue监听器
    const vm = new Vue({
        el: '#app',
        data: {
            username: ''
        },
        watch: {
            //username(newVal, oldVal) newVal是变化后的值 oldVal是变化之前的值
            username(newVal) {
                phone_number.innerHTML = "请输入手机号码"
                if (newVal === "") {
                    phone_number.style.display = "block"
                } else if (newVal.length > 0 && newVal.length < 11) {
                    phone_number.style.display = "block"
                    phone_number.innerHTML = "手机号码格式错误"
                } else if (newVal.length = 11) {
                    phone_number.style.display = "none"
                }
            }
        }

    })

}

//验证码文本框
let yanzhengma = document.getElementById('yanzhengma')
let yanzhengma_tishi = document.querySelector('.mi-floating-yanzhengma')
let verification_code = document.querySelector('.verification-code')

yanzhengma.addEventListener('focus', function () {
    zc()
    yanzhengma_tishi.className = "mi-floating-labe mi-floating-yanzhengma obtain"
    registe_js[2].style.borderColor = "#ff5c00"
    registe_js[2].style.boxShadow = "0 0 0 2px rgb(255 92 0 /20%)"
})

yanzhengma.addEventListener('blur', function () {

    yanzhengma_tishi.className = "mi-floating-labe mi-floating-yanzhengma obtain"
    registe_js[2].style.borderColor = ""
    registe_js[2].style.boxShadow = ""
    if (yanzhengma.value === "") {
        verification_code.style.display = "block"
        yanzhengma_tishi.className = "mi-floating-labe mi-floating-yanzhengma lose"
        yanzhengma_tishi.style.color = "#ff5c00"
    } else {
        verification_code.style.display = "none"
        yanzhengma_tishi.style.color = "#7f7a7a"
    }
})

yanzhengma.addEventListener('input', up);
function up(e) {

    if (e.target.value === "") {
        verification_code.style.display = "block"
        yanzhengma_tishi.style.color = "#ff5c00"
    } else {
        verification_code.style.display = "none"
        yanzhengma_tishi.style.color = "#7f7a7a"
    }
}

//注册按钮
setTimeout(function () {
    Sign_in[1].disabled = true
})
function zc() {
    setInterval(function () {
        if (shojihao.value === "" || yanzhengma.value === "") {
            // Sign_in.style.opacity = ".4"
            Sign_in[1].className = "Sign-in op"
            Sign_in[1].disabled = true
            // ign_in.style.cursor = "default"
        } else {
            Sign_in[1].style.opacity = "1"
            Sign_in[1].style.cursor = "pointer"
            Sign_in[1].disabled = false
        }
    })
}



//登录与注册验证部分
// localStorage.clear() //删除储存在localStorage里面的全部数据
// console.log( Object.keys (localStorage));
function jjj() {

    let account_number = document.querySelector('.account-number').value;
    let login_password = document.getElementById('whb1').value;
    let verification_login_password = localStorage.getItem(account_number);
    if (dj == 1) {
        let jjj;
        for (let i = 0; i < Object.keys(localStorage).length; i++) {
            if (Object.keys(localStorage)[i] === account_number) {
                jjj = true;
            } else {
                jjj = false;
            }

        }
        if (jjj) {
            if (login_password === verification_login_password) {
                alert("登录成功")
                window.location.href = "../index.html"
            } else {
                alert("密码错误");
            }
        } else {
            alert("账号错误");
        }
    } else {
        alert("请您同意用户条款")
    }
}
function kkk() {
    let registered_account = document.getElementById('shojihao').value;
    let registered_password = document.getElementById('yanzhengma').value;
    if (lj == 1) {
        if(geshi){
        let kkk;
        console.log(kkk);
        for (let i = 0; i < Object.keys(localStorage).length; i++) {
            if (Object.keys(localStorage)[i] === registered_account) {
                kkk = false;
                console.log("01");
            } else {
                kkk = true;
                console.log("02");
            }
        }
        if (kkk) {
            localStorage.setItem(registered_account, registered_password);
            alert('注册成功')
            window.location.href = "登录注册.html"
        } else {
            alert("账号已注册")
        }
    }else{
        alert("账号格式不对")
    }
    } else {
        alert("请您同意用户条款");
    }
}