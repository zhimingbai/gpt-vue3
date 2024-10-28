<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/index'
import router from '@/router'

// 判断是否登录
const isLogin = ref(false)

// 获取用户信息
const userStore = useUserStore()
// 监听用户登录状态
onMounted(() => {
  if (userStore.user.username) {
    isLogin.value = true
  }
})

// 退出登录
const logout = () => {
  // 如果是首页，就直接更改首页的用户信息
  if (location.href==='http://localhost:5173/'){
    userStore.removeUser()
    isLogin.value = false
  }
  userStore.removeUser()
  // isLogin.value = false
  location.reload()
}


</script>
<template>
<!-- 这里可以复用，应为全局组件 -->
  <nav class="shnav">
<!--  5个导航菜单  -->
    <div class="shnav1">

<!--      1、首页-->
      <div class="navl">
        <a href=""><router-link to="/">首页</router-link></a>
      </div>

<!--      2、通用-->
      <div class="navl">
        <a href="">通用</a>
        <ul class="subnav">
          <li><a href=""><router-link to="/talk">对话</router-link></a></li>
          <li><a href=""><router-link to="/image">图片</router-link></a></li>
          <li><a href=""><router-link to="/word">提取文字</router-link></a></li>
        </ul>
      </div>

<!--      3、助教助手-->
      <div class="navl">
        <a href="">助教助手</a>
        <ul class="subnav">
          <li><a href=""><router-link to="/studyAnalysis">学习分析</router-link></a></li>
          <li><a href=""><a href="#">教研备课</a></a></li>
        </ul>
      </div>

<!--      4、技术工具-->
      <div class="navl">
        <a href="">技术工具</a>
        <ul class="subnav">
          <li><a href=""><router-link to="/code">代码转换</router-link></a></li>
          <li><a href=""><router-link to="/code">代码解释</router-link></a></li>
          <li><a href=""><router-link to="/sql">SQL生成</router-link></a></li>
        </ul>
      </div>

<!--      5、更多-->
      <div class="navl">
        <a href=""><router-link to="/more">更多</router-link></a>
      </div>
    </div>

<!--  用户  -->
    <div style="margin-right: 2rem">

<!--      未登录-->
      <div class="navl" v-if="!isLogin">
        <router-link to="/login">登录</router-link>
      </div>

<!--      已登录-->
      <div class="navl" v-else>

        <div style="width: 100%">
          <!-- TODO bug: 这里头像和用户名稍微有点bug，如果名字太长会导致换行，需要调整 -->
          <img
            src="@/assets/geren.png"
            width="25rem"
            height="25rem"
            style="margin-right: 0.5rem"
          />
          <span>{{ userStore.user.username }}</span>
        </div>

        <ul class="subnav">
          <li id="geren"><a>个人中心</a></li>
          <li id="xiugai"><a>修改密码</a></li>
          <li @click="logout()"><a href="#">退出登录</a></li>
        </ul>

      </div>
    </div>
    <div id="Modal1" style="display: none">
      <table
        style="
          width: 40rem;
          background-color: white;
          border-radius: 3rem;
          text-align: center;
          padding: 2rem 5rem;
          line-height: 4rem;
        "
      >
        <tr align="center">
          <td colspan="2">个人中心</td>
        </tr>
        <tr>
          <td align="right">姓名：</td>
          <td align="left"><input type="text" id="name" /></td>
        </tr>
        <tr>
          <td align="right">性别：</td>
          <td align="left"><input type="text" id="sex" /></td>
        </tr>
        <tr>
          <td align="right">电话：</td>
          <td align="left"><input type="text" id="dianhua" /></td>
        </tr>
        <tr>
          <td align="right">
            <button id="submit1" class="btn">确认</button>
          </td>
          <td>
            <button id="close1" class="btn">取消</button>
          </td>
        </tr>
      </table>
    </div>
    <div id="Modal2" style="display: none">
      <table
        style="
          width: 400px;
          background-color: white;
          border-radius: 30px;
          text-align: center;
          padding: 20px 50px;
          line-height: 40px;
        "
      >
        <tr align="center">
          <td colspan="2">个人中心</td>
        </tr>
        <tr>
          <td align="right">旧密码：</td>
          <td align="left"><input type="text" id="oldpwd" /></td>
        </tr>
        <tr>
          <td align="right">新密码：</td>
          <td align="left"><input type="text" id="newpwd" /></td>
        </tr>
        <tr>
          <td align="right">重复密码：</td>
          <td align="left"><input type="text" id="againpwd" /></td>
        </tr>
        <tr>
          <td align="right">
            <button id="submit2" class="btn">确认</button>
          </td>
          <td><button id="close2" class="btn">取消</button></td>
        </tr>
      </table>
    </div>
  </nav>
</template>
<style scoped>

a:hover {
  color: #7878ef;
}

.sp {
  margin: 0;
  padding: 0;
  height: 96vh;
  position: relative;
  width: 100%;
  display: flex;
  border-top: 0.1rem;
  border-radius: 1rem;
}

.shnav {
  display: flex;
  width: 100%;
  position: absolute;
  z-index: 1;
  margin-top: 15px;
}

.shnav1 {
  width: 90%;
  display: flex;
  justify-content: center;
}

.navl {
  width: 10rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  transition: all 0.4s;
}

.navl>a{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 22px;
  border-bottom: 4px solid #8e8eff;
  padding-bottom: 7px;
}

.subnav {
  position: absolute;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  transition: .5s;
  border-radius: 0 0 10px 10px;
  background-color: rgba(142, 142, 255, 0.5);
  font-size: 20px;
  color: #ffffff;
}

.navl:hover{
  //background-color: #00ff0a;
}

.navl:hover>.subnav{
  max-height: 500px;
}

.subnav li{
  margin: 8px;
}


.text-slider {
  width: 30rem;
  height: 5rem;
  overflow: hidden;
  position: relative;
}

.text-slider ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  top: 0;
  animation: slide 5s infinite;
}

@keyframes slide {
  0%,
  33.33% {
    top: 0;
  }
  36.66%,
  66.66% {
    top: -0.5rem;
  }
  70%,
  100% {
    top: -1rem;
  }
}

.text-slider li {
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.text-container {
  display: flex;
  flex-direction: row;
}
</style>
