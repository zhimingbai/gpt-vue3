<script setup>
import { ref, watch,onMounted } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import router from '@/router/index.js'

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

// 登录
const login = async () => {
  // 预校验
  // TODO: 登录的axios
  await from.value.validate()
  router.push('/main')
}

// 获取验证码图片
onMounted( async ()=>{
  // TODO: 获取验证码图片的axios
})
</script>
<template>
  <el-row>
    <el-col class="login-page" :span="12">
      <el-col :span="7" :offset="7" class="left">
        <section class="image">
          <img src="@/assets/zqzxlogo.png" alt="" />
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
    <el-col :span="6" :offset="3">
      <!--      注册-->
      <el-form
        :model="fromData"
        :rules="rules"
        ref="from"
        size="large"
        autocomplete="off"
        v-if="isRegister"
        class="form"
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
            type="primary"
            auto-insert-space
            class="large1"
            @click="register"
            >注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="isRegister = false"
            >← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <!--      登录-->
      <el-form
        :model="fromData"
        :rules="rules"
        ref="from"
        size="large"
        autocomplete="off"
        v-else
        class="form"
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
            v-model="fromData.repassword"
            :prefix-icon="Lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <section class="flex">
            <el-input
              v-model="fromData.code"
              type="text"
              placeholder="验证码"
            ></el-input>
            <img src="@/assets/code.png" alt="" />
          </section>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            auto-insert-space
            class="large1"
            @click="login"
            >登录
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="isRegister = true"
            >注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<style scoped>
body {
  font-size: 10px;
}

/* 左边 */
.login-page {
  height: 100vh;
  background-image: url('@/assets/login-page-bg.jpg');
  background-size: cover;
}

.left {
  margin-top: 19vh;
}

.image {
  width: 7rem;
  height: 7rem;
}

.image img {
  width: 100%;
}

.title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.ul-li {
  list-style: none;
  padding: 0;
  margin: 0 0 0 2rem;
}

ul li {
  font-size: 1rem;
  margin-bottom: 0.3rem;
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

.flex img{
  width: 7rem;
  height: 100%;
}

.form .large1 {
  width: 100vh;
}
</style>
