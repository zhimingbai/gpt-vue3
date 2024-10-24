<script setup></script>
<template>
  <div class="talk-page">
    <nav class="shnav">
      <div class="shnav1">
        <div class="navl">
          <a href="#">首页</a>
        </div>
        <div class="navl">
          通用
          <div class="subnav">
            <a href="#">对话</a>
          </div>
          <div class="subnav">
            <a href="#">图片</a>
          </div>
          <div class="subnav">
            <a href="#">提取文字</a>
          </div>
        </div>
        <div class="navl">
          助教助手
          <div class="subnav">
            <a href="#">学习分析</a>
          </div>
          <div class="subnav">
            <a href="#">教研备课</a>
          </div>
        </div>
        <div class="navl">
          技术工具
          <div class="subnav">
            <a href="#">代码转换</a>
          </div>
          <div class="subnav">
            <a href="#">代码解释</a>
          </div>
          <div class="subnav">
            <a href="#">SQL生成</a>
          </div>
        </div>
        <div class="navl">
          <a href="#">更多</a>
        </div>
      </div>
      <div style="margin-right: 20px">
        <div shiro:guest class="navl">
          <!-- <a th:href="@{/login}">登录</a> -->
          <RouterLink to="/login">登录</RouterLink>
        </div>
        <div shiro:user class="navl">
          <div
            style="
              display: flex;
              width: 100%;
              justify-content: center;
              align-items: center;
            "
          >
            <img
              src="#"
              width="25px"
              height="25px"
              style="margin-right: 5px"
            />
            <div id="usenamePlaceholder"></div>
          </div>
          <div class="subnav" id="geren">
            <a>个人中心</a>
          </div>
          <div class="subnav" id="xiugai">
            <a onclick="resetPwd()">修改密码</a>
          </div>
          <div class="subnav">
            <a href="#">退出登录</a>
          </div>
        </div>
      </div>
      <div id="Modal1" style="display: none">
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
            <td><button id="close1" class="btn">取消</button></td>
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
    <main class="el-main">
      <div
        style="
          display: flex;
          width: 100%;
          box-shadow: rgba(1, 4, 9, 0.4) 0px 6px 12px -3px,
            rgba(1, 4, 9, 0.4) 0px 6px 18px 0px;
          border-radius: 20px;
        "
      >
        <div class="el-row">
          <div>
            <button class="main-top" style="color: #fff" onclick="xinduihua()">
              +新对话
            </button>
          </div>
          <button class="main-bottom" onclick="lishi()">
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
                <span>您的tokens数：</span>
                <span id="token-display" STYLE="color: #00c6fb;"></span>
              </div>
            </div>

            <div class="input-box">
              <div id="container">
                <textarea
                  id="questionInput"
                  placeholder="说点什么吧"
                  onkeypress="handleKeyPress(event)"
                ></textarea>
                <div id="submit-icon" onclick="submitText()">
                  <img
                    src="@/assets/fasong.png"
                    width="30px"
                    height="30px"
                  />️
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
.talk-page {
  font-size: 1.6rem;
  padding: 0;
  background-color: white;
  overflow-x: hidden;
  border-radius: 20px;
  background-image: url('@/assets/bg2.jpg');
  background-size: 100%;
}
a {
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
}
a:hover {
  color: mediumpurple;
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
  width: 120px;
  font-size: 25px;
  font-weight: 0;
  color: black;
  text-align: center;
  padding: 20px 10px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;
}
.navl:hover {
  border-radius: 25px;
  margin: 10px 0 120px 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.navl:hover .subnav {
  max-height: 300px; /* 设置二级导航显示高度 */
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
  transform: translateY(-20px); /* 初始位置 */
}
::-webkit-scrollbar {
  width: 10px;
  background-color: white;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px 10px 10px 10px;
  background-color: #82b4ff;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ccc;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
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
.el-main {
  box-sizing: border-box;
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
  width: 80%;
  height: 99.3%;
  background-color: white;
  margin: 0;
  border-radius: 0 15px 15px 0;
  border-right: 3px solid #00bfff;
  border-top: 3px solid #00bfff;
  border-bottom: 3px solid #00bfff;
}
.bottom-box {
  width: 70%;
  height: 20vh;
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
