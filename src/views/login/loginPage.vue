<script setup>
import { onMounted, ref, watch } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import router from '@/router/index.js'
import { useUserStore } from '@/stores/index'

// TODO: 进入这个页面有几率，会出现页面紊乱的情况

// 用于预校验
const from = ref()
// 表单数据
const fromData = ref({
  username: '',
  password: '',
  repassword: '',
  code: '',
})

// 校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 10, message: '用户名长度为2-10位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度为6-16位', trigger: 'blur' },
    { patten: /^\S{6,15}$/, message: '密码必须非空字符', trigger: 'blur' },
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度为6-16位', trigger: 'blur' },
    { patten: /^\S{6,15}$/, message: '密码必须非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== fromData.value.password) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback() // 校验通过
        }
      },
      trigger: 'blur',
    },
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      patten: /^[0-9]$/,
      message: '验证码必须为数字',
      trigger: 'blur',
    },
  ],
}
// 判断是否注册
const isRegister = ref(false)

// 切换时清空数据
// 切换的时候，表单清空
watch(isRegister, () => {
  fromData.value = {
    username: '',
    password: '',
    repassword: '',
    code: '',
  }
})

// 注册
const register = async () => {
  // 预校验
  // TODO: 注册的axios
  await from.value.validate()
}

// 存储到pinia中
const userStore = useUserStore()

// 登录
const login = async () => {
  // 预校验
  // TODO: 登录的axios
  await from.value.validate()
  // 存储到pinia中
  userStore.setUser(fromData.value)
  router.push('/talk')
}

// 获取验证码图片
onMounted(async () => {
  // TODO: 获取验证码图片的axios
})

// setTimeout(() => {
//   location.reload()
//   console.log(11)
// }, 0)
</script>
<template>
  <el-row style="width: 100%">
    <el-col :span="12" class="login-page">
      <el-col :offset="12" :span="8" class="left">
        <section class="image">
          <img alt="" src="@/assets/zqzxlogo.png" />
        </section>
        <!--        文字部分-->
        <section>
          <h3 class="title">欢迎使用 智企知心</h3>
          <ul class="ul-li">
            <li>智能对话</li>
            <li>知心图文</li>
            <li>提取文字</li>
            <li>工作报告</li>
            <li>特色模型</li>
          </ul>
        </section>
      </el-col>
    </el-col>
    <el-col :offset="3" :span="6">
      <!--      注册-->
      <el-form
        v-if="isRegister"
        ref="from"
        :model="fromData"
        :rules="rules"
        autocomplete="off"
        class="form"
        size="large"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="fromData.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="fromData.password"
            :prefix-icon="Lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="fromData.repassword"
            :prefix-icon="Lock"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            auto-insert-space
            class="large1"
            type="primary"
            @click="register"
            >注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-link :underline="false" type="info" @click="isRegister = false"
            ><span class="textBlack">← 返回</span>
          </el-link>
        </el-form-item>
      </el-form>
      <!--      登录-->
      <el-form
        v-else
        ref="from"
        :model="fromData"
        :rules="rules"
        autocomplete="off"
        class="form"
        size="large"
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="fromData.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="fromData.password"
            :prefix-icon="Lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <section class="flex">
            <el-input
              v-model="fromData.code"
              placeholder="验证码"
              type="text"
            ></el-input>
            <img alt="" src="@/assets/code.png" />
          </section>
        </el-form-item>
        <el-form-item>
          <el-button
            auto-insert-space
            class="large1"
            type="primary"
            @click="login"
            >登录
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-link :underline="false" type="info" @click="isRegister = true">
            <span class="textBlack">注册 →</span>
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<style scoped>
/* 左边 */
.login-page {
  height: 100vh;
}

.textBlack {
  color: #333;
}

.left {
  margin-top: 19vh;
}

.image {
  width: 10rem;
  height: 10rem;
}

.image img {
  width: 100%;
}

.title {
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
}

.ul-li {
  list-style: none;
  padding: 0;
  margin: 0 0 0 2rem;
}

ul li {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* 右边 表单 */
.form {
  padding-top: 20vh;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex img {
  width: 11rem;
  height: 100%;
}

.form .large1 {
  width: 100vh;
}
</style>
