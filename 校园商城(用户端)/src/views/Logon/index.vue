<template>
    <div style="background-image: url(https://www.dscmall.cn/storage/uploads/image/2019/12/04/da188c7e091a7afe07cc76ea5c349079.jpg) ">
        <div class="h-[80vh] flex items-center">
            <div class="w-1/3 m-auto">
                <div class="flex justify-between h-16 items-center">
                    <div class="text-2xl text-gray-500">注册</div>
                    <div>已有账号？ <span class="text-blue-500 cursor-pointer" @click="$router.push('/login')">立即登录</span>
                    </div>
                </div>
                <div class="w-full rounded-md	  bg-white flex items-center justify-center pb-8 pt-12">
                    <div class="w-3/4">
                        <el-form ref="ruleFormRef" size="large" label-position="top" :model="ruleForm" status-icon
                            :rules="rules" label-width="120px" class="demo-ruleForm">
                            <el-form-item prop="name">
                                <el-input v-model="ruleForm.name" autocomplete="off" placeholder="用户名" clearable />
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" placeholder="密码"
                                    autocomplete="off" clearable />
                            </el-form-item>
                            <el-form-item prop="phone">
                                <el-input v-model="ruleForm.phone" type="text" maxlength="11" placeholder="手机号"
                                    autocomplete="off" clearable />
                            </el-form-item>
                            <el-form-item prop="email">
                                <el-input v-model="ruleForm.email" type="text" placeholder="邮箱" autocomplete="off"
                                    clearable />
                            </el-form-item>
                            <el-form-item prop="code">
                                <el-input v-model.number="ruleForm.code" clearable placeholder="验证码">
                                    <template #append>
                                        <el-button @click="sendCode(ruleFormRef)"
                                            :disabled="isSending || countdown > 0">
                                            {{ isSending ? '发送中...' : countdown > 0 ? `${countdown}秒后重试` : '发送验证码' }}
                                        </el-button>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="w-full" type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
                                <!-- <el-button @click="resetForm(ruleFormRef)">重置</el-button> -->
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[20vh]">
            <div class="h-full w-[20%] m-auto ">
                <div class="flex items-center justify-around h-2/3 text-xl text-gray-500">
                    <div>帮助</div>
                    <div>隐私</div>
                    <div>条款</div>
                </div>
                <p class=" text-center">Copyright © 2024 - Presentlilishop版权所有</p>
            </div>
        </div>
    </div>

</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { logonAPI, codeAPI, mailboxAPI } from '/src/api/login.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()


const ruleFormRef = ref<FormInstance>()
const isSending = ref(false)
const countdown = ref(0)
const sendCode = (formEl) => {
    formEl.validateField('email').then(async (res) => {
        // if (!res) return
        // const { data: k } = await codeAPI({ phone: ruleForm.phone })  手机验证码
        const { data: k } = await mailboxAPI({ email: ruleForm.email })
        if (k.value.code === 200) {
            ElMessage({
                message: k.value.message,
                type: 'success',
            })


        } else if (k.value.code === 400) {
            ElMessage.error('发送失败')
        }

        //邮箱验证码
        if (countdown.value > 0 || isSending.value) {
            return; // 防止重复点击发送
        }
        // 假设在这个方法中实现发送验证码的逻辑
        // 可以调用sendVerificationCode()方法发送验证码
        // 这里只是简单模拟发送过程
        isSending.value = true;
        startCountdown();

        setTimeout(() => {
            // 假设发送成功后将isSending重置为false
            isSending.value = false;
        }, 2000); // 这里使用2秒的延迟来模拟发送过程，你需要替换为实际的发送逻辑
    })

}
const startCountdown = () => {
    countdown.value = 60;
    const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}
const ruleForm = reactive({
    name: '',
    password: '',
    phone: '',
    code: '',
    email: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
    name: [
        { required: true, message: '请填写用户名', trigger: 'blur' },
        { min: 3, max: 20, message: '用户名过短' }
    ],
    password: [
        { required: true, message: '请填写密码', trigger: 'blur' },
        // { min: 6, max: 99, message: '请填写六位以上的密码' }
    ],
    phone: [
        { required: true, message: '请填写手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '请填写正确的手机号' }
    ],
    code: [
        { required: true, message: '请填写验证码', trigger: 'blur' },
    ],
    email: [
        { required: true, message: '请填写邮箱', trigger: 'blur' },
    ]
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            const { data: res } = await logonAPI({
                name: ruleForm.name,
                password: ruleForm.password,
                phone: ruleForm.phone,
                code: ruleForm.code,
                email: ruleForm.email
            })
            console.log(res);

            if (res.value.code === 200) {
                ElMessage({
                    message: res.value.message,
                    type: 'success',
                })
                router.push('/login')
            } else {
                ElMessage.error('注册失败')
            }
        } else {
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<style scoped></style>
