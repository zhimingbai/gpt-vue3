<script setup>
import navSection from '@/components/navSection.vue'
import { ref } from 'vue'
// 图片路径,不知道为什么要这样，反正这就就是不报错
import img1 from '@/assets/gzjh.png'
import img2 from '@/assets/zongjie.png'
import img3 from '@/assets/ribao.png'
import img4 from '@/assets/hetong.png'
import img5 from '@/assets/huiyi.png'
import img6 from '@/assets/dianzi.png'
import img7 from '@/assets/zhaiyao.png'
import img8 from '@/assets/dnzh.png'
import img9 from '@/assets/yufa.png'
import img10 from '@/assets/jieshi.png'
import img11 from '@/assets/sql.png'
import img12 from '@/assets/tqdz.png'

const sectionLinkList = ref([
  { imgSrc: img1, name: '学习分析', herf: '/studyAnalysis' },
  { imgSrc: img2, name: '教研备课', herf: '#' },
  { imgSrc: img3, name: '日报&周报', herf: '/dailyReport' },
  { imgSrc: img4, name: '合同生成', herf: '/contact' },
  { imgSrc: img5, name: '会议纪要', herf: '/meeting' },
  { imgSrc: img6, name: '电子邮件', herf: '/email' },
  { imgSrc: img7, name: '摘要总结', herf: '/summary' },
  { imgSrc: img8, name: '代码转换', herf: '/code' },
  { imgSrc: img9, name: '语法校正', herf: '/grammer' },
  { imgSrc: img10, name: '代码解释', herf: '/code' },
  { imgSrc: img11, name: 'SQL生成', herf: '/sql' },
  { imgSrc: img12, name: '提取地址', herf: '/address' },
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
              id="searchInput"
              placeholder="请输入所需的工具名.."
              type="text"
            />
            <!-- TODO: 搜索功能, 目前没有实现,不会 -->
            <button>
              <img height="40px" src="@/assets/ss.png" width="40px" />
            </button>
          </div>
        </div>
        <div id="buttonContainer" class="container">
          <router-link
            v-for="(item, index) in sectionLinkList"
            :key="index"
            :to="item.herf"
            class="item"
          >
            <div style="margin: 10px 0">
              <img :src="item.imgSrc" height="40px" width="40px" />
            </div>
            <span>{{ item.name }}</span>
          </router-link>
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
