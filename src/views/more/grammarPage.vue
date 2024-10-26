<script setup>
import navSection from '@/components/navSection.vue'
</script>
<template>
  <div class="grammar-page">
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
        <div class="main-right">
          <div
            style="
              width: 100%;
              height: 100%;
              text-align: left;
              padding-left: 20px;
              padding-right: 20px;
              overflow-y: scroll;
            "
          >
            <div style="margin-top: 40px">
              <select
                id="select"
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
                <option>中文</option>
                <option>英语</option>
                <option>俄语</option>
                <option>法语</option>
                <option>日语</option>
                <option>韩语</option>
                <option>阿拉伯语</option>
                <option>葡萄牙语</option>
                <option>德语</option>
                <option>意大利语</option>
                <option>泰语</option>
                <option>荷兰语</option>
                <option>希腊语</option>
              </select>
              <button
                onclick="askQuestion()"
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
                立即校正
              </button>
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
                  border: 1px #c0c4cc solid;
                  border-radius: 10px;
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                  cursor: pointer;
                  resize: none;
                  color: black;
                  margin-top: 40px;
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
                style="
                  width: 40%;
                  height: 60vh;
                  border: 1px #c0c4cc solid;
                  border-radius: 10px;
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                  resize: none;
                  color: black;
                  margin-top: 40px;
                  background: linear-gradient(
                    314deg,
                    #ecf4ff,
                    #e9f0ff 36%,
                    #e5eaff 71%,
                    #e7fbff
                  );
                  overflow-y: auto;
                  scrollbar-width: thin;
                "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
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
  width: 100%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  text-align: left;
  border: 3px solid #82b4ff;
  padding: 20px 20px 0 20px;
  background-color: white;
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
  font-size: 15px;
  font-weight: normal;
  float: right; /* 向右浮动 */
  clear: both; /* 清除浮动 */
  display: inline-block; /* 修改为内联块级元素 */
}
</style>
