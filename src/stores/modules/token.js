import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore(
  'token',
  () => {
    // token数量
    const token = ref(100)
    // 设置token数量
    const setToken = (value) => {
      token.value = value
    }
    // 删除token
    const removeToken = () => {
      token.value = ''
    }
    return {
      token,
      setToken,
      removeToken,
    }
  },
  {
    persist: true,
  },
)
