<script setup>
import navSection from '@/components/navSection.vue'
</script>
<template>
  <div class="report-page">
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
            <span>2024-01-18</span>
          </div>
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
        </div>
        <div class="main-right">
          <div
            style="
              display: flex;
              justify-content: space-around;
              margin-bottom: 20px;
            "
          >
            <div>
              <span style="font-size: 15px; color: black"
                ><span style="color: red">*</span><b>教研备课</b></span
              >
            </div>
            <div class="tok">
              <span>您的tokens数：</span>
              <span id="token-display" STYLE="color: #00c6fb;"></span>
            </div>
          </div>
          <div>
            <textarea
              id="questionInput"
              placeholder="填写备课相关的内容概要"
              autocomplete="off"
              maxlength="300px"
              style="
                width: 100%;
                height: 30vh;
                border-radius: 10px 10px 10px 10px;
                resize: none;
                color: black;
              "
            ></textarea>
          </div>
          <div style="margin-top: 20px">
            <span style="font-size: 15px; color: black"
              ><span style="color: red">*</span><b>备课科目</b></span
            >
            <br />
            <select
              id="shijian"
              style="
                width: 100%;
                height: 40px;
                border-radius: 5px 5px 5px 5px;
                box-shadow: whitesmoke 1px 1px 1px 0px;
              "
              placeholder="选择备课事件科目"
            >
              <option>计算机网络原理</option>
              <option>计算机组成原理</option>
              <option>面向对象技术</option>
              <option>数据结构</option>
              <option>算法设计与分析</option>
              <option>计算机导论</option>
              <option>动态网站设计与开发</option>
              <option>JavaWeb程序设计</option>
            </select>
          </div>
          <div style="margin-top: 20px">
            <span style="font-size: 15px; color: black"
              ><span style="color: red">*</span><b>字数要求</b></span
            >
            <br />
            <input
              id="zishu"
              name="text"
              type="text"
              value="0"
              style="
                width: 100%;
                height: 40px;
                border-radius: 5px 5px 5px 5px;
                border: grey solid 1px;
              "
            />
          </div>
          <button
            id="btn"
            onclick="askQuestion()"
            style="
              margin-top: 20px;
              width: 40%;
              height: 40px;
              background: #82b4ff;
              border-radius: 5px 5px 5px 5px;
              border: solid 1px;
            "
          >
            生成内容
          </button>
          <button
            id="huan"
            onclick="askQuestion()"
            style="
              margin-left: 20px;
              margin-top: 20px;
              width: 40%;
              height: 40px;
              background: #ffffff;
              border-radius: 5px 5px 5px 5px;
              border: solid 1px;
            "
          >
            换一个
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
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
  width: 33%;
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
  width: 100%;
  height: 65vh;
  line-height: 60px;
  padding: 0 0 20px 20px;
  overflow-y: scroll;
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
  background-color: rgba(130, 180, 255, 0.58);
  padding: 15px;
  border-radius: 4px;
  margin: 20px;
  position: relative;
  font-size: 20px;
  font-weight: normal;
  float: right; /* 向右浮动 */
  clear: both; /* 清除浮动 */
  display: inline-block; /* 修改为内联块级元素 */
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
