<script setup>
import navSection from '@/components/navSection.vue'
import { ref } from 'vue'

/**
 * 目前，首页的页面基本完成，原本页面有关模板引擎的东西我就全部删掉了，首页的视频不显示是因为这个，
 * 视频根js逻辑有关，因为没写所以目前没有，有关a标签跳转的，跳转的路径我目前都是跳本页 #
 * 有些css样式我也做了更改，有关 px 的，我统一换成了 rem，rem的基准是 10px 这样做是为了响应式开发
 * 后续我希望使用less或scss，或者是 Tailwind CSS 来进行重写
 */

//  用来判断当前显示哪个内容
const currentId = ref(1)

//  更改currentId的值
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
            alt="logo"
            height="70rem"
            src="@/assets/zqzxlogo.png"
            width="70rem"
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
          <router-link class="annv" style="line-height: 5rem" to="/talk">
            <a href="">点击体验</a>
          </router-link>
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
              id="button1"
              class="nav-button"
              style="border-radius: 2rem 0 0 0"
              @click="showContent(1)"
            >
              <img
                alt=""
                height="40"
                src="@/assets/luntan.png"
                style="margin-right: 2rem"
                width="40"
              />
              智能对话
            </button>
            <button id="button2" class="nav-button" @click="showContent(2)">
              <img
                alt=""
                height="45"
                src="@/assets/tuwen.png"
                style="margin-right: 2rem"
                width="45"
              />
              知心图文
            </button>
            <button id="button3" class="nav-button" @click="showContent(3)">
              <img
                alt=""
                height="40"
                src="@/assets/tiqu.png"
                style="margin-right: 2rem"
                width="40"
              />
              提取文字
            </button>
            <button id="button4" class="nav-button" @click="showContent(4)">
              <img
                alt=""
                height="40"
                src="@/assets/gongzuo.png"
                style="margin-right: 2rem"
                width="40"
              />
              学习分析
            </button>
            <button
              id="button5"
              class="nav-button"
              style="border-radius: 0 0 0 2rem"
              @click="showContent(5)"
            >
              <img
                alt=""
                height="40"
                src="@/assets/tese.png"
                style="margin-right: 2rem"
                width="40"
              />
              特色模型
            </button>
          </div>
          <div class="gnnr">
            <div v-if="currentId == 1" class="content">
              <div id="text1">
                <h1>智能对话</h1>
                <p>
                  智企知心拥有强大的自然语言处理能力，能够迅速的理解用户输入的内容，并做出回答。
                </p>
              </div>
              <video
                autoplay
                height="60%"
                loop="loop"
                muted="muted"
                width="80%"
              >
                <source src="@/assets/对话.mp4" type="video/mp4" />
              </video>
            </div>
            <div v-if="currentId == 2" class="content">
              <div id="text2">
                <h1>知心文生图</h1>
                <p>
                  智企知心可以根据用户输入的关键词和参数设置，智能的生成图片。
                </p>
              </div>
              <video
                autoplay
                height="60%"
                loop="loop"
                muted="muted"
                width="80%"
              >
                <source src="@/assets/图片.mp4" type="video/mp4" />
              </video>
            </div>
            <div v-if="currentId == 3" class="content">
              <div id="text3">
                <h1>提取文字</h1>
                <p>
                  智企知心拥有强大的自然语言处理能力，能够迅速的理解用户输入的内容，并做出回答。
                </p>
              </div>
              <video
                autoplay
                height="60%"
                loop="loop"
                muted="muted"
                width="80%"
              >
                <source src="@/assets/tiqu文字.mp4" type="video/mp4" />
              </video>
            </div>
            <div v-if="currentId == 4" class="content">
              <div id="text4">
                <h1>学习分析</h1>
                <p>
                  通过写学习的大概内容，学习时间，学习分析书写要求，字数要求等等，智企知心能智能生成具体的学习分析。
                </p>
              </div>
              <video
                autoplay
                height="60%"
                loop="loop"
                muted="muted"
                width="80%"
              >
                <source src="@/assets/学习分析.mp4" type="video/mp4" />
              </video>
            </div>
            <div v-if="currentId == 5" class="content">
              <div id="text5">
                <h1>特色模型</h1>
                <p>
                  智企知心支持多种环境的本地大模型部署，包括教育、医疗、金融等行业，其适应所有办公环境的能力极大地扩展了智企知心项目的应用场景，大模型+传统行业的模式
                </p>
              </div>
              <div style="display: flex; width: 100%; height: 100%">
                <img
                  height="120%"
                  src="@/assets/ts1.png"
                  style="padding: 0.5rem"
                  width="50%"
                />
                <img
                  height="100%"
                  src="@/assets/ts2.png"
                  style="padding: 0.5rem"
                  width="50%"
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
          <img alt="1" class="photo" src="@/assets/tu1.png" />
          <img alt="2" class="photo" src="@/assets/tu2.png" />
          <img alt="3" class="photo" src="@/assets/tu3.png" />
          <img alt="4" class="photo" src="@/assets/tu4.png" />
          <img alt="5" class="photo" src="@/assets/tu5.png" />
        </div>
        <div class="caption">
          一款强大的人工智能绘画工具，为用户提供了各种创意的绘图功能。
        </div>
        <div class="an-tu">
          <router-link class="tpt" to="/talk"
            >前去体验<span class="arrow"></span
          ></router-link>
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
  font-family: '微软雅黑 Light', serif;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  //border: 1px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;

  display: inline-block;
  color: #fff;
  line-height: 60px;
  text-decoration: none;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #7878ef, #03a9f4);
  background-size: 400%;
  animation: animate 8s linear infinite;
}

.annv:before {
  content: '';
  position: absolute;

  left: -5px;
  top: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);

  background-size: 400%;
  opacity: 0;
  transition: all 1s;
}

.annv:hover:before {
  filter: blur(20px);
  opacity: 1;
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

@keyframes animate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400% 0;
  }
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
