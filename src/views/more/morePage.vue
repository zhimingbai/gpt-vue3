<script setup>
import navSection from '@/components/navSection.vue'
import { ref } from 'vue'

const sectionLinkList = ref([
  { imgSrc: 'src/assets/gzjh.png', name: '学习分析' },
  { imgSrc: 'src/assets/zongjie.png', name: '教研备课' },
  { imgSrc: 'src/assets/ribao.png', name: '日报&周报' },
  { imgSrc: 'src/assets/hetong.png', name: '合同生成' },
  { imgSrc: 'src/assets/huiyi.png', name: '会议纪要' },
  { imgSrc: 'src/assets/dianzi.png', name: '电子邮件' },
  { imgSrc: 'src/assets/zhaiyao.png', name: '摘要总结' },
  { imgSrc: 'src/assets/dnzh.png', name: '代码转换' },
  { imgSrc: 'src/assets/yufa.png', name: '语法校正' },
  { imgSrc: 'src/assets/jieshi.png', name: '代码解释' },
  { imgSrc: 'src/assets/sql.png', name: 'SQL生成' },
  { imgSrc: 'src/assets/tqdz.png', name: '提取地址' },
])
</script>
<template>
  <div class="more-page">
    <navSection></navSection>
    <main class="el-main">
      <div class="main">
        <div class="wenzi set-main">
          <h2 class="h2b">更多工具</h2>
          <div class="search-box">
            <input
              type="text"
              id="searchInput"
              placeholder="请输入所需的工具名.."
            />
            <button onclick="searchFunction()">
              <img src="@/assets/ss.png" width="40px" height="40px" />
            </button>
          </div>
        </div>
        <div class="container" id="buttonContainer">
          <a
            href="#"
            v-for="(item, index) in sectionLinkList"
            :key="index"
            class="item"
          >
            <div style="margin: 10px 0">
                <!-- TODO: 图片加载失败,不知道什么bug -->
              <img :src="item.imgSrc" width="40px" height="40px" />
            </div>
            <span>{{ item.name }}</span>
          </a>
        </div>
        <div class="xian"></div>
      </div>
    </main>
  </div>
</template>
<style scoped>
.more-page {
  font-size: 1.6rem;
}

.set-main {
  padding-top: 1.5rem;
}

.el-main {
  display: flex;
  height: 100%;
  padding: 5% 15% 5% 15%;
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
.main {
  width: 100%;
  height: 100%;
  padding: 2% 5% 3% 5%;
  border: 3px solid #6f86d6;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.6);
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 0 10%;
}
.container a {
  padding: 10%;
  box-sizing: border-box;
  text-align: center;
  border-radius: 15px;
  color: black;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 2px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}
.container a:hover {
  background-color: #00bfff;
  color: white;
}
.wenzi {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
.h2b {
  font-size: 40px;
  height: 60px;
  font-weight: 200;
  border-bottom: 2px solid #00c6fb;
}
.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 5px 5px 0;
  width: 380px;
  height: 40px;
}

.search-box input[type='text'] {
  border: none;
  outline: none;
  width: 300px;
}

.search-box button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.search-box button:hover {
  background-color: #ccc;
}
.xian {
  width: 80%;
  height: 20px;
  margin: 3% 10% 0 10%;
  border-bottom: 5px solid #00bfff;
}
</style>
