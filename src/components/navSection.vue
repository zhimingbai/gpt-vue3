<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isLogin = ref(false)
</script>
<template>
  <!-- 这里可以复用，应为全局组件 -->
  <nav class="shnav">
    <div class="shnav1">
      <div class="navl">
        <router-link to="/">首页</router-link>
      </div>
      <div class="navl">
        通用
        <div class="subnav">
          <!-- <a href="#">对话</a> -->
          <router-link to="/talk">对话</router-link>
        </div>
        <div class="subnav">
          <!-- <a href="#">图片</a> -->
          <router-link to="/image">图片</router-link>
        </div>
        <div class="subnav">
          <!-- <a href="#">提取文字</a> -->
          <router-link to="/word">提取文字</router-link>
        </div>
      </div>
      <div class="navl">
        助教助手
        <div class="subnav">
          <!-- <a href="#">学习分析</a> -->
          <router-link to="/studyAnalysis">学习分析</router-link>
        </div>
        <div class="subnav">
          <a href="#">教研备课</a>
        </div>
      </div>
      <div class="navl">
        技术工具
        <div class="subnav">
          <!-- <a href="#">代码转换</a> -->
           <router-link to="/code">代码转换</router-link>
        </div>
        <div class="subnav">
          <a href="#">代码解释</a>
        </div>
        <div class="subnav">
          <!-- <a href="#">SQL生成</a> -->
           <router-link to="/sql">SQL生成</router-link>
        </div>
      </div>
      <div class="navl">
        <!-- <a href="#">更多</a> -->
        <router-link to="/more">更多</router-link>
      </div>
    </div>
    <div style="margin-right: 2rem">
      <div class="navl" v-if="!isLogin">
        <!-- <a href="#">登录</a> -->
        <router-link to="/login">登录</router-link>
      </div>
      <div class="navl" v-else>
        <div
          style="
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            src="@/assets/geren.png"
            width="25rem"
            height="25rem"
            style="margin-right: 1.5rem"
          />
          <div id="usenamePlaceholder"></div>
        </div>
        <div class="subnav" id="geren">
          <a>个人中心</a>
        </div>
        <div class="subnav" id="xiugai">
          <a>修改密码</a>
        </div>
        <div class="subnav">
          <a href="#">退出登录</a>
        </div>
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
  color: mediumpurple;
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
}

.shnav1 {
  width: 90%;
  display: flex;
  justify-content: center;
}

.navl {
  width: 12rem;
  font-size: 2.5rem;
  font-weight: 0;
  color: black;
  text-align: center;
  padding: 2rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;
}

.navl:hover {
  border-radius: 2.5rem;
  margin: 1rem 0 12rem 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.navl:hover .subnav {
  max-height: 30rem; /* 设置二级导航显示高度 */
  opacity: 1; /* 显示二级导航 */
  transform: translateY(0);
}

.subnav {
  max-height: 0;
  overflow: auto;
  transition:
    max-height 0.2s,
    opacity 0.5s,
    transform 0.5s;
  position: initial;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0);
  padding: 0;
  opacity: 0;
  transform: translateY(-0.2rem); /* 初始位置 */
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
</style>
