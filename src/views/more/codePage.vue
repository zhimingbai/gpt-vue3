<script setup>
import navSection from '@/components/navSection.vue'
import { ref } from 'vue'
import { useTokenStore } from '@/stores/index.js'
// import { ElMessage } from 'element-plus'

// token数量
const tokenStore=useTokenStore()
const tokenCount=ref(tokenStore.token)

// 转换按钮
const askQuestion = () => {
  ElMessage.error('功能正在开发')
}
// 历史记录
const history = () => {
  ElMessage.error('功能正在开发')
}
</script>
<template>
  <div class="code-page">
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
          <div class="main-bottom" @click="history()">
            <img
              src="@/assets/duihuak.png"
              width="25px"
              height="25px"
              style="margin: 10px"
            />
            <span>2024-01-18</span>
          </div>
        </div>
        <div class="box-right">
          <div
            style="
              margin-top: 40px;
              display: flex;
              justify-content: left;
              align-items: center;
            "
          >
            <select
              id="select1"
              style="
                text-align: center;
                font-size: 14px;
                width: 25%;
                height: 50px;
                border: 1px #c0c4cc solid;
                border-radius: 5px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                cursor: pointer;
              "
            >
              <option>C#</option>
              <option>Java</option>
              <option>Python</option>
            </select>
            <img src="@/assets/zhuanhuan.png" width="20px" />
            <select
              id="select2"
              style="
                text-align: center;
                font-size: 14px;
                width: 25%;
                height: 50px;
                border: 1px #c0c4cc solid;
                border-radius: 5px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                cursor: pointer;
              "
            >
              <option>Java</option>
              <option>C#</option>
              <option>Python</option>
            </select>
            <button
              @click="askQuestion()"
              style="
                background: #82b4ff;
                width: 80px;
                height: 50px;
                border: #3f7edd solid 1px;
                border-radius: 10px;
                color: #ffffff;
                margin-left: 10px;
              "
            >
              立即转换
            </button>
            <div class="tok">
              <span>您的tokens数：{{ tokenCount }}</span>
              <span id="token-display" STYLE="color: #00c6fb;"></span>
            </div>
          </div>
          <div style="display: flex">
            <textarea
              id="questionInput"
              placeholder="请输入"
              autocomplete="off"
              maxlength="300px"
              style="
                width: 40%;
                height: 60vh;
                font-size: 20px;
                border: 1px #c0c4cc solid;
                border-radius: 10px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                cursor: pointer;
                resize: none;
                color: black;
                margin-top: 20px;
              "
            ></textarea>
            <div style="margin: 230px 20px 0 20px">
              <img src="@/assets/zhuanhuan.png" width="30px" />
            </div>
            <textarea
              id="div1"
              readonly
              autocomplete="off"
              maxlength="300px"
              class="div1n"
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style>
.code-page {
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
  height: 100%;
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
  border: 3px solid #00bfff;
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
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: #82b4ff solid 2px;
}

.box-right {
  width: 80%;
  padding: 20px;
  background-color: white;
  border-radius: 0 15px 15px 0;
  border-right: 3px solid #00bfff;
  border-top: 3px solid #00bfff;
  border-bottom: 3px solid #00bfff;
}

.div1n {
  width: 100%;
  height: 60vh;
  font-size: 25px;
  border: 1px #c0c4cc solid;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  resize: none;
  color: black;
  margin-top: 20px;
  background: linear-gradient(
    314deg,
    #ecf4ff,
    #e9f0ff 36%,
    #e5eaff 71%,
    #e7fbff
  );
  overflow-y: auto;
  scrollbar-width: thin;
}

#Modal1 {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

#Modal2 {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 0 20px;
  font-size: 14px;
  border-radius: 10px;
  font-weight: 400;
  background-color: #00c6fb;
}

.btn:hover {
  cursor: pointer;
  background-color: white;
}

.tok {
  padding: 0;
  margin-left: 15%;
}
</style>
