<script setup>
import navSection from '@/components/navSection.vue'
import { ElMessage } from 'element-plus';

// TODO: 功能正在开发，该页面暂不可用


// 历史记录
const history = () => {
  ElMessage.error('该功能正在开发中，请等待更新');
}
// 点击提交
const submit = () => { 
  ElMessage.error('该功能正在开发中，请等待更新');
}
</script>
<template>
  <div class="word-page">
    <navSection></navSection>
    <main class="el-main">
      <div
        style="
          display: flex;
          width: 100%;
          box-shadow:
            rgba(1, 4, 9, 0.4) 0px 6px 12px -3px,
            rgba(1, 4, 9, 0.4) 0px 6px 18px 0px;
          border-radius: 20px;
        "
      >
        <div class="el-row">
          <div class="main-top">
            <span style="color: #fff">+新对话</span>
          </div>
          <div class="main-bottom">
            <img
              src="@/assets/duihuak.png"
              width="25px"
              height="25px"
              style="margin: 10px"
            />
            <span @click="history()">2024-01-18</span>
          </div>
        </div>
        <div class="main-mid">
          <span style="font-size: 15px; color: black"
            ><b>生成结果</b><br
          /></span>
          <div id="div1" class="div1n">
            <div id="loading-spinner"></div>
            <span id="dengdai" style="display: none">正在生成请等待。。。</span>
          </div>
          <div
            id="div2"
            style="display: block; text-align: center; margin-top: 6%"
          >
            <img src="@/assets/jieguo.png" style="margin-top: 15%" /><br />
            <span style="font-size: 15px; color: blue; text-align: center"
              >暂无内容<br />暂无生成结果，快去创建吧！！
            </span>
          </div>
        </div>
        <div class="main-right">
          <span style="font-size: 15px; color: black; margin-bottom: 20px"
            ><span style="color: red">*</span><b>提取文字</b></span
          >
          <div style="width: 100%">
            <input
              name="file"
              type="file"
              id="fileInput"
              class="wenj"
              accept="image/*"
            />
          </div>
          <button class="tiq" @click="submit()">提取</button>
        </div>
      </div>
    </main>
  </div>
</template>
<style>
.word-page {
  font-size: 1.6rem;
}
.el-main {
  display: flex;
  height: 100%;
  padding: 5% 10% 20px 10%;
  position: relative;
  animation: fadeIn 2s forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.el-row {
  width: 18%;
  height: 80vh;
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
  border: 3px solid #82b4ff;
  border-radius: 15px 0 0 15px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 50px;
  background: #82b4ff;
  border-radius: 10px 10px 10px 10px;
  line-height: 50px;
  text-align: center;
}
.main-bottom {
  width: 100%;
  height: 60px;
  display: flex;
  background: white;
  border-radius: 10px 10px 10px;
  margin-top: 10px;
  border: #82b4ff solid 2px;
  justify-content: center;
  align-items: center;
}
.main-right {
  height: 80vh;
  border-radius: 0 15px 15px 0;
  text-align: left;
  border: 3px solid #82b4ff;
  padding: 20px 20px 0 20px;
  background-color: white;
  overflow-y: hidden;
}
.main-mid {
  width: 47%;
  height: 80vh;
  text-align: left;
  border-top: 3px solid #82b4ff;
  border-bottom: 3px solid #82b4ff;
  background-color: white;
  padding: 20px 20px 0 20px;
}
.div1n {
  display: none;
  width: 75%;
  height: 65vh;
  color: black;
  background-color: rgba(130, 180, 255, 0.58);
  line-height: 60px;
  padding: 20px;
  margin: 30px;
  font-size: 30px;
  border-radius: 10px;
  overflow-y: scroll;
}
.wenj {
  width: 80%;
  padding: 0 20px;
  height: 300px;
  font-size: 25px;
  align-content: center;
  border-radius: 5px;
  background: white;
  border: grey solid 1px;
}
.wenj::-webkit-file-upload-button {
  padding: 10px 15px;
  background-color: #3366cc;
  color: #fff;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.wenj::file-selector-button {
  padding: 10px 15px;
  background-color: #3366cc;
  color: #fff;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.tiq {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background: #82b4ff;
  border-radius: 5px 5px 5px 5px;
  border: solid 1px;
}
.tiq:hover {
  color: white;
  background-color: #6f86d6;
}
#loading-spinner {
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  display: none;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
