<script setup>
import navSection from '@/components/navSection.vue'
import { ref } from 'vue'
// import router from '@/router';

// TODO: 目前已知bug，因为原本页面是原生写的，因此关于js的逻辑在这里就没有写，后期的话再补上
/**
 * 目前，首页的页面基本完成，原本页面有关模板引擎的东西我就全部删掉了，首页的视频不显示是因为这个，
 * 视频根js逻辑有关，因为没写所以目前没有，有关a标签跳转的，跳转的路径我目前都是跳本页 #
 * 有些css样式我也做了更改，有关 px 的，我统一换成了 rem，rem的基准是 10px 这样做是为了响应式开发
 * 后续我希望使用less或scss，或者是 Tailwind CSS 来进行重写
 */

// TODO: showContent() 目前只返回index和调用的对象，因为原本的函数中牵扯到一些原生的页面逻辑操作

const currentId = ref(1)
function showContent(index) {
  console.log(index)
  // router.push('/mp4')
  currentId.value = index
}
</script>
<template>
  <div class="index-page">
    <navSection></navSection>
    <!-- 这里看作单独一个组件 -->
    <div class="sp">
      <div
        style="position: absolute; max-width: 50%; margin: 0 20% 0; top: 30%"
      >
        <div style="display: flex">
          <img
            src="@/assets/zqzxlogo.png"
            width="70rem"
            height="70rem"
            alt="logo"
          />
          <div
            style="
              font-size: 4rem;
              font-weight: 600;
              color: black;
              margin-left: 5%;
            "
          >
            智企知心GPT智能助教平台
          </div>
        </div>
        <div
          style="
            font-size: 3.2rem;
            font-weight: 400;
            color: black;
            margin-top: 2rem;
          "
        >
          助力教育场景与大模型结合，创造智能化教学新范式
        </div>
        <div style="display: flex; width: 100%; margin-top: 3rem">
          <router-link to="/talk" class="annv" style="line-height: 5rem">
            点击体验
          </router-link>
          <!-- <button class="annv text-slider" id="textSlider">
            <ul>
              <li><a href="#">文生图</a></li>
              <li><a href="#">提取文字</a></li>
              <li><a href="#">文生图</a></li>
            </ul>
          </button> -->
        </div>
      </div>
      <div class="todown">
        <div class="jiantou jfirst"></div>
        <div class="jiantou jsecond"></div>
        <div class="jiantou jthird"></div>
        <div
          style="
            text-align: center;
            color: black;
            font-family: '微软雅黑 Light', serif;
          "
        >
          滑动查看更多
        </div>
      </div>
      <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
      <div class="todown">
        <div class="jiantou jfirst"></div>
        <div class="jiantou jsecond"></div>
        <div class="jiantou jthird"></div>
        <div
          style="
            text-align: center;
            color: black;
            font-family: '微软雅黑 Light', serif;
          "
        >
          滑动查看更多
        </div>
      </div>
    </div>
    <div class="jm2">
      <div class="jm2-box">
        <div class="wenzi">
          <h2 class="h2b">功能介绍</h2>
        </div>
        <div style="display: flex">
          <div class="vertical-nav">
            <button
              class="nav-button"
              style="border-radius: 2rem 0 0 0"
              @click="showContent(1)"
              id="button1"
            >
              <img
                src="@/assets/luntan.png"
                width="40"
                height="40"
                style="margin-right: 2rem"
                alt=""
              />
              智能对话
            </button>
            <button
              class="nav-button"
              @click="showContent(2)"
              id="button2"
            >
              <img
                src="@/assets/tuwen.png"
                width="45"
                height="45"
                style="margin-right: 2rem"
                alt=""
              />
              知心图文
            </button>
            <button
              class="nav-button"
              @click="showContent(3)"
              id="button3"
            >
              <img
                src="@/assets/tiqu.png"
                width="40"
                height="40"
                style="margin-right: 2rem"
                alt=""
              />
              提取文字
            </button>
            <button
              class="nav-button"
              @click="showContent(4)"
              id="button4"
            >
              <img
                src="@/assets/gongzuo.png"
                width="40"
                height="40"
                style="margin-right: 2rem"
                alt=""
              />
              学习分析
            </button>
            <button
              class="nav-button"
              style="border-radius: 0 0 0 2rem"
              @click="showContent(5)"
              id="button5"
            >
              <img
                src="@/assets/tese.png"
                width="40"
                height="40"
                style="margin-right: 2rem"
                alt=""
              />
              特色模型
            </button>
          </div>
          <!--          TODO: 这里之后大概率可以用v-for重写-->
          <div class="gnnr">
            <div class="content" v-if="currentId == 1">
              <div id="text1">
                <h1>智能对话</h1>
                <p>
                  智企知心拥有强大的自然语言处理能力，能够迅速的理解用户输入的内容，并做出回答。
                </p>
              </div>
              <video
                width="80%"
                height="60%"
                loop="loop"
                muted="muted"
                autoplay
              >
                <source src="@/assets/对话.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="content" v-if="currentId == 2">
              <div id="text2">
                <h1>知心文生图</h1>
                <p>
                  智企知心可以根据用户输入的关键词和参数设置，智能的生成图片。
                </p>
              </div>
              <video
                width="80%"
                height="60%"
                loop="loop"
                muted="muted"
                autoplay
              >
                <source src="@/assets/图片.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="content" v-if="currentId == 3">
              <div id="text3">
                <h1>提取文字</h1>
                <p>
                  智企知心拥有强大的自然语言处理能力，能够迅速的理解用户输入的内容，并做出回答。
                </p>
              </div>
              <video
                width="80%"
                height="60%"
                loop="loop"
                muted="muted"
                autoplay
              >
                <source src="@/assets/tiqu文字.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="content" v-if="currentId == 4">
              <div id="text4">
                <h1>学习分析</h1>
                <p>
                  通过写学习的大概内容，学习时间，学习分析书写要求，字数要求等等，智企知心能智能生成具体的学习分析。
                </p>
              </div>
              <video
                width="80%"
                height="60%"
                loop="loop"
                muted="muted"
                autoplay
              >
                <source src="@/assets/学习分析.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="content" v-if="currentId == 5">
              <div id="text5">
                <h1>特色模型</h1>
                <p>
                  智企知心支持多种环境的本地大模型部署，包括教育、医疗、金融等行业，其适应所有办公环境的能力极大地扩展了智企知心项目的应用场景，大模型+传统行业的模式
                </p>
              </div>
              <div style="display: flex; width: 100%; height: 100%">
                <img
                  src="@/assets/ts1.png"
                  width="50%"
                  height="120%"
                  style="padding: 0.5rem"
                />
                <img
                  src="@/assets/ts2.png"
                  width="50%"
                  height="100%"
                  style="padding: 0.5rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jm2">
      <div class="tp3">
        <div class="biaot">知心文生图</div>
        <div class="gallery">
          <img class="photo" src="@/assets/tu1.png" alt="1" />
          <img class="photo" src="@/assets/tu2.png" alt="2" />
          <img class="photo" src="@/assets/tu3.png" alt="3" />
          <img class="photo" src="@/assets/tu4.png" alt="4" />
          <img class="photo" src="@/assets/tu5.png" alt="5" />
        </div>
        <div class="caption">
          一款强大的人工智能绘画工具，为用户提供了各种创意的绘图功能。
        </div>
        <div class="an-tu">
          <a href="#" class="tpt">前去体验<span class="arrow"></span></a>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>星火大队-版权所有 © 智企知心网站 2024</span>
    </div>
  </div>
</template>

<style scoped>
.annv {
  width: 20rem;
  height: 5rem;
  margin: 2rem 7%;
  background-color: #00c6fb;
  font-family: '微软雅黑 Light', serif;
  font-size: 2rem;
  font-weight: 600;
  color: black;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
}

.annv::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300%;
  height: 300%;
  background-color: rgba(85, 85, 255, 0.5);
  transition: all 0.5s;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
}

.annv:hover::before {
  transform: translate(-50%, -50%) scale(1);
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
  padding: 0 2rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  font-weight: 400;
  background-color: #00c6fb;
}

.btn:hover {
  cursor: pointer;
  background-color: white;
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

.cube {
  top: 40%;
  left: 75%;
  width: 10rem;
  height: 10rem;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate-spiral 15s infinite linear;
}

.face {
  position: absolute;
  width: 10rem;
  height: 10rem;
  background-image: url('@/assets/logo2.png');
  background-size: 10rem;
}

@keyframes rotate-spiral {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    transform: rotateY(720deg) rotateX(720deg);
  }
}

.front {
  transform: rotateX(90deg) translateZ(5rem);
}

.back {
  transform: rotateX(-90deg) translateZ(5rem);
}

.right {
  transform: rotateY(90deg) translateZ(5rem);
}

.left {
  transform: rotateY(-90deg) translateZ(5rem);
}

.top {
  transform: rotateX(0deg) translateZ(5rem);
}

.bottom {
  transform: rotateX(180deg) translateZ(5rem);
}

.todown {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 20rem;
  margin-bottom: 2rem;
}

.jiantou {
  width: 0;
  height: 0;
  margin-left: 33%;
  border-top: 2rem solid #8d8d8d;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  margin-bottom: 0.8rem;
  animation-name: jiantou;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation-timing-function: linear;
}

.jfirst {
  animation-delay: 0s;
}

.jsecond {
  animation-delay: 0.5s;
}

.jthird {
  animation-delay: 1s;
}

@keyframes jiantou {
  50% {
    opacity: 0;
  }
}

.jm2 {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: black;
}

.jm2-box {
  width: 75%;
  height: 80vh;
  padding: 5% 5rem;
}

/*.img1 {*/
/*	width: 400px;*/
/*	height: 300px;*/
/*	border-radius: 20px;*/
/*	margin-left: 8%;*/
/*	margin-bottom: 0;*/
/*	border: 1px solid #b5fff8;*/
/*	box-shadow: 0 0 20px #58a6ff;*/
/*	animation: pulse 2s infinite;*/
/*}*/

#text1 {
  font-size: 1.8rem;
  animation: slideIn 3s forwards;
}

#text2 {
  font-size: 1.8rem;
  animation: slideIn 3s forwards;
}

#text3 {
  font-size: 1.8rem;
  animation: slideIn 3s forwards;
}

#text4 {
  font-size: 1.8rem;
  animation: slideIn 3s forwards;
}

#text5 {
  font-size: 1.8rem;
  animation: slideIn 3s forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(-10rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.tp3 {
  width: 75%;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 0.2rem solid blueviolet;
  border-radius: 2rem;
  padding: 5% 5rem;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  box-sizing: border-box;
}

.gallery {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  overflow: hidden;
  text-align: center;
  padding: 3rem 4.5rem;
}

.photo {
  width: 15%;
  height: 15%;
  border: 0;
  border-radius: 2rem;
  transition: transform 1s;
  margin: 2rem;
  transform: scale(1);
}

.photo:hover {
  z-index: 1;
  position: relative;
  transform: scale(1.5);
}

@keyframes slide1 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

.biaot {
  font-family: Arial, sans-serif;
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(to right, yellow, pink);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInOut 2s ease-in-out infinite alternate;
  padding: 1rem;
}

.caption {
  font-size: 2rem;
  color: white;
  text-align: center;
}

.an-tu {
  margin: 4rem 0;
  text-align: center;
}

.footer {
  background-color: #cccccc;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
}

.vertical-nav {
  width: 30%;
}

.nav-button {
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 2rem;
  background-color: #fff;
  border: 0.05rem solid #ccc;
  margin: 0;
  cursor: pointer;
  transition:
    border-right,
    color 0.3s; /* 添加过渡效果 */
}

.nav-button.selected {
  border-right: 1rem solid blue; /* 选中状态下的右边蓝色边 */
  color: blue; /* 选中状态下的背景色 */
  background-color: aliceblue;
}

.content {
  /* display: none; */
  width: 100%;
}

.wenzi {
  width: 17rem;
  border-bottom: 0.2rem solid #00c6fb;
  margin-bottom: 3rem;
}

.h2b {
  font-size: 4rem;
  height: 4rem;
  font-weight: 200;
}

.gnnr {
  width: 70%;
  height: 60vh;
  padding: 3rem;
  text-align: center;
  border-bottom: 0.05rem solid #ccc;
  border-top: 0.05rem solid #ccc;
  border-right: 0.05rem solid #ccc;
}

.tpt {
  position: relative;
  width: 40rem;
  height: 4rem;
  padding: 1rem 4rem;
  border: 0.2rem solid palegreen;
  background-color: #6f86d6;
  font-size: 3rem;
  color: white;
  border-radius: 1.5rem;
  text-align: center;
}

.tpt:hover {
  color: black;
  background-color: lightgrey;
}

.arrow {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 0.6rem solid transparent;
  border-left: 1rem solid white;
  transition: all 0.3s;
  animation: moveArrow 1s linear infinite;
}

@keyframes moveArrow {
  0% {
    right: 1rem;
    opacity: 1;
  }
  50% {
    right: 2rem;
    opacity: 0;
  }
  100% {
    right: 1rem;
    opacity: 1;
  }
}
</style>
