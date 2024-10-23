import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'gptUser',
  () => {
    // user
    const user = ref({})
    // 设置用户信息
    function setUser(newUser) {
      user.value = newUser
    }
    // 获取用户信息
    function getUser() {
      return user.value
    }
    // 删除用户信息
    function removeUser() {
      user.value = {}
    }

    return {
      user,
      setUser,
      getUser,
      removeUser,
    }
  },
  {
    persist: true,
  },
)
