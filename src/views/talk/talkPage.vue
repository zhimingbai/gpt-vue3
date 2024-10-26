<script setup>
import navSection from '@/components/navSection.vue'
// import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useTokenStore } from '@/stores/index'

// 显示token数
const tokenStore = useTokenStore()
const tokenCount = ref(tokenStore.token)

// 对话框内容
const questionInput = ref('')
async function sendQuestion() {
  if (questionInput.value.trim() === '') {
    return ElMessage.error('请输入内容')
  } else {
    console.log(questionInput.value)
    // 这里之后要发送axios请求，发送成功后清空输入框
    // TODO: 这里应该是发送axios请求，但是因为技术原因，暂且不实现
    // 这里报错，不影响，如果真的导入了ElMessage反而还会导致一些其他问题。
    ElMessage.success('发送成功')
    // toeken数量减少
    tokenCount.value -= 1
    tokenStore.token = tokenCount.value
    questionInput.value = ''
  }
}

// 历史记录
// TODO: 这里因为技术原因，暂且不实现
const btnHistory = () => {
  ElMessage.error('正在开发中')
}
</script>
<template>
  <div class="talk-page">
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
        <div class="el-r">
          <div>
            <button class="main-top" style="color: #fff" onclick="xinduihua()">
              +新对话
            </button>
          </div>
          <button class="main-bottom" @click="btnHistory()">
            <img
              src="@/assets/duihuak.png"
              width="25px"
              height="25px"
              style="margin: 10px"
            />
            <span>历史记录</span>
          </button>
        </div>
        <div class="box-right">
          <div style="width: 100%; height: 50vh">
            <div
              id="div1"
              style="
                display: none;
                width: 80%;
                padding: 0 10%;
                max-height: 85%;
                overflow-y: auto;
                scrollbar-width: thin;
              "
            ></div>
            <div
              id="div2"
              style="
                display: block;
                width: 100%;
                text-align: center;
                padding: 15% 0;
              "
            >
              <span class="box-title"> 欢迎使用智企知心GPT对话功能<br /> </span>
              <span class="box-content">
                从写一个任务开始，Chat可以完成其余的工作。不知道从哪里开始？
                从提示库中寻找灵感。
              </span>
            </div>
            <div
              id="div3"
              style="
                display: none;
                width: 80%;
                padding: 2% 10%;
                max-height: 85%;
                overflow-y: auto;
                scrollbar-width: thin;
              "
            >
              <span style="font-size: 20px">历史记录</span>
            </div>
          </div>

          <div class="bottom-box">
            <div class="bottom-box-an">
              <div class="an">
                <div class="an-button">设置</div>
                <div class="an-button">提示词</div>
                <div class="an-button">更多</div>
                <div class="an-button">
                  <select id="model" style="width: 100%; border: 0">
                    <option selected>讯飞星火</option>
                    <option>Vivo蓝心</option>
                    <option>腾讯混元</option>
                    <option>紫东太初</option>
                    <option>智企知心</option>
                  </select>
                </div>
              </div>
              <div class="tok">
                <span>您的tokens数：{{ tokenCount }}</span>
                <span id="token-display" STYLE="color: #00c6fb;"></span>
              </div>
            </div>

            <div class="input-box">
              <div id="container">
                <textarea
                  id="questionInput"
                  placeholder="说点什么吧"
                  v-model="questionInput"
                  @keyup.enter="sendQuestion()"
                ></textarea>
                <div id="submit-icon" @click="sendQuestion()">
                  <img src="@/assets/fasong.png" width="30px" height="30px" />️
                </div>
                <div id="loading-spinner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
.el-main {
  box-sizing: border-box;
  display: flex;
  height: 100vh;
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
.el-r {
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
  border: 2px solid honeydew;
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
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 0;
  border-radius: 0 15px 15px 0;
  border-right: 3px solid #00bfff;
  border-top: 3px solid #00bfff;
  border-bottom: 3px solid #00bfff;
}
.bottom-box {
  width: 70%;
  height: 25vh;
  padding: 20px;
  border-radius: 8px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(235, 235, 235) 4px 6px 6px 4px;
  text-align: center;
  margin: 20px 10%;
}
.bottom-box-an {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
}
.an {
  display: flex;
  align-items: center;
  position: relative;
}
.an-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid rgb(214, 214, 214);
  border-radius: 30px;
  font-size: 12px;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}
.input-box {
  width: 100%;
  margin: 0;
  padding-left: 20px;
}
.box-title {
  font-size: 24px;
  font-weight: 500;
  color: #3f7edd;
}
.box-content {
  font-size: 18px;
  font-weight: 500;
  color: #414141;
}
.char-response::after {
  content: '';
  border: 10px dashed rgba(130, 180, 255, 0.58);
  border-top: 10px solid white;
  border-bottom: 10px solid white;
  border-right: 10px solid white;
  position: absolute;
  top: 12px;
  right: -20px;
}
.char-response {
  color: black;
  background-color: whitesmoke;
  padding: 15px;
  border-radius: 4px;
  margin: 20px;
  position: relative;
  font-size: 20px;
  font-weight: normal;
  border: 1px solid rgba(130, 180, 255, 0.58);
  float: right; /* 向右浮动 */
  clear: both; /* 清除浮动 */
  display: inline-block; /* 修改为内联块级元素 */
}

.char-question {
  text-align: left;
  color: black;
  background-color: rgba(130, 180, 255, 0.58);
  padding: 15px;
  border-radius: 4px;
  margin: 20px;
  position: relative;
  font-size: 20px;
  font-weight: normal;
  float: left; /* 向左浮动 */
  clear: both; /* 清除浮动 */
  display: inline-block; /* 修改为内联块级元素 */
}
.char-question::after {
  content: '';
  border: 10px dashed rgba(130, 180, 255, 0.58);
  border-top: 10px solid white;
  border-bottom: 10px solid white;
  border-left: 10px solid white;
  position: absolute;
  top: 12px;
  left: -20px;
}
#container {
  width: 90%;
  margin: 20px 0;
  display: flex;

  align-items: center;
  border: 2px solid #00bfff;
  border-radius: 15px;
}
#questionInput {
  width: 85%;
  height: 24%;
  padding: 20px 10px;
  border-radius: 15px;
  border: 0;
  outline: none;
  resize: none;
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
#submit-icon {
  cursor: pointer;
  display: inline-block;
  width: 15%;
  height: 30px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.tok {
  padding: 0;
}
</style>
