<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

const isRegister = ref(false)
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
      <el-form size="large" autocomplete="off" v-if="isRegister" class="form">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="Lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="Lock" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" auto-insert-space class="large1"
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
      <el-form size="large" autocomplete="off" v-else class="form">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :prefix-icon="Lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <section class="flex">
          <el-checkbox>记住密码</el-checkbox>
          <el-link type="primary" :underline="false">忘记密码？</el-link>
        </section>
        <el-form-item></el-form-item>
        <el-form-item>
          <el-button type="primary" auto-insert-space class="large1"
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

.title{
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.ul-li{
  list-style: none;
  padding: 0;
  margin: 0 0 0 2rem;
}
ul li{
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

.form .large1 {
  width: 100vh;
}
</style>
