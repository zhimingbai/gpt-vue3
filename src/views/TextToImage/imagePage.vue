<script setup>
import navSection from '@/components/navSection.vue'
import { ref } from 'vue'
import img1 from '@/assets/ziran.png'
import img2 from '@/assets/xieshi.png'
import img3 from '@/assets/gudian.png'
// import { ElMessage } from 'element-plus'
import { useTokenStore } from '@/stores/index'

const styleImageList = ref([
  { imgSrc: img1, name: '自然' },
  { imgSrc: img2, name: '写实' },
  { imgSrc: img3, name: '古典' },
])

// 设置token数量
const tokenStore = useTokenStore()
const tokenCount = ref(tokenStore.token)

// 设置生成图片的约束条件
const constraints = ref({
  style: '自然',
  size: '512*512',
  num: 1,
  content: '无',
})

// 历史记录
const historyList = () => {
  ElMessage.error('功能正在开发')
}

// 处理风格点击
const styleClick = name => {
  constraints.value.style = name
}
// 处理图片尺寸点击
const sizeClick = size => {
  constraints.value.size = size
}

// 处理点击生成图片
const generateImage = () => {
  // 处理输入内容
  console.log(constraints.value)
  ElMessage.success('图片正在生成')
  // TODO: 生成图片axios
}
</script>
<template>
  <div class="image-page">
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
          <button class="main-bottom" @click="historyList()">
            <img
              src="@/assets/duihuak.png"
              width="25px"
              height="25px"
              style="margin: 10px"
            />
            <span>历史记录</span>
          </button>
        </div>
        <div class="main-mid">
          <span style="font-size: 15px; color: black"
            ><b>生产结果</b><br
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
          <div id="div3" class="div1n"></div>
        </div>
        <div class="main-right">
          <div style="display: flex; justify-content: space-around">
            <div>
              <span style="font-size: 15px; color: black"
                ><span style="color: red">*</span><b>创意图片</b></span
              >
            </div>
            <div class="tok">
              <span>您的tokens数：{{ tokenCount }}</span>
              <span id="token-display" STYLE="color: #00c6fb;"></span>
            </div>
          </div>

          <div style="margin-top: 20px">
            <span style="font-size: 15px; color: black"><b>风格</b></span>
            <br />
            <div
              style="
                display: flex;
                width: 100%;
                margin-top: 20px;
                justify-content: space-around;
              "
            >
              <div
                class="fenge"
                onClick="selectRadio('fengeRadio1')"
                v-for="(item, index) in styleImageList"
                :key="index"
                style="
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  align-items: center;
                "
              >
                <img
                  :src="item.imgSrc"
                  width="30px"
                  height="30px"
                  style="margin: 5px"
                />
                <input
                  type="radio"
                  name="fenge"
                  id="fengeRadio1"
                  :value="item.name"
                  @click="styleClick(item.name)"
                />{{ item.name }}
              </div>
            </div>
          </div>
          <div style="margin-top: 20px">
            <span style="font-size: 15px; color: black"><b>图片尺寸</b></span>
            <br />
            <div style="display: flex; width: 100%; margin-top: 20px">
              <div class="fenge1" onClick="selectRadio('fengeRadio4')">
                <img
                  src="@/assets/chicun.png"
                  width="50px"
                  height="50px"
                  style="margin: 5px"
                />
                <input
                  type="radio"
                  name="fenge1"
                  id="fengeRadio4"
                  value="1024*1024"
                  @click="sizeClick('512*512')"
                /><span style="font-size: 10px">1024*1024</span>
              </div>

              <div class="fenge1">
                <img
                  src="@/assets/chicun.png"
                  width="50px"
                  height="50px"
                  style="margin: 5px"
                />
                <input
                  type="radio"
                  name="fenge1"
                  id="fengeRadio5"
                  value="512*512"
                  @click="sizeClick('512*512')"
                /><span style="font-size: 10px">512*512</span>
              </div>
            </div>
          </div>
          <div style="margin: 20px 0">
            <span style="font-size: 15px; color: black"><b>生成数量</b></span>
            <br />
            <select
              id="ges"
              style="width: 100%; height: 40px; border-radius: 5px 5px 5px 5px"
              v-model="constraints.num"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
            <span>主要内容</span>
            <textarea
              v-model="constraints.content"
              id="questionInput"
              placeholder="描述要创建的图像，例如“晶莹剔透的牡丹花”"
              autocomplete="off"
              maxlength="300px"
              style="
                width: 100%;
                height: 10vh;
                border-radius: 10px 10px 10px 10px;
                resize: none;
                color: black;
              "
            ></textarea>
            <input
              name="button"
              type="button"
              value="提示词优化"
              style="
                width: 100px;
                height: 40px;
                border-radius: 5px 5px 5px 5px;
                background: white;
                border: grey solid 1px;
              "
            />
          </div>
          <button class="btnsc" @click="generateImage()">生成图片</button>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
.image-page {
  font-size: 1.6rem;
}

/* .set-main{
    margin-top: 20rem;
} */

.el-main {
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
  width: 35%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  text-align: left;
  border: 3px solid #82b4ff;
  padding: 20px 20px 0 20px;
  /* padding-right: 0; */
  background-color: white;
  overflow: auto;
}
.main-mid {
  width: 47%;
  height: 100%;
  text-align: left;
  border-top: 3px solid #82b4ff;
  border-bottom: 3px solid #82b4ff;
  background-color: white;
  padding: 20px 20px 0 20px;
}
.div1n {
  display: none;
  width: 100%;
  height: 65vh;
  line-height: 60px;
  padding: 10% 0 20px 20px;
  overflow-y: scroll;
}
.btnsc {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background: #82b4ff;
  border-radius: 5px 5px 5px 5px;
  border: solid 1px;
}
.fenge {
  width: 60px;
  height: 60px;
  margin: 0 20px;
  padding: 5px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 10px;
}
.fenge:hover {
  background-color: #6f86d6;
  color: white;
}
.fenge1 {
  width: 80px;
  height: 80px;
  margin: 0 20px;
  padding: 5px;
  text-align: center;
  border: 2px solid grey;
  border-radius: 10px;
}
.fenge1:hover {
  background-color: #6f86d6;
  color: white;
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
.tok {
  padding: 0;
}
</style>
