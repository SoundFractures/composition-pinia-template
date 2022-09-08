import { defineStore } from 'pinia'
import { ref, computed } from '@nuxtjs/composition-api'
export const useGeneralStore = defineStore('counter', () => {
  // State
  const count = ref(5)

  // Computed -> Prefix with 'return'
  const returnDoubleCount = computed(() => count.value * 2)

  // Methods -> Prefix with 'handle'
  const handleIncrement = () => {
    count.value++
  }

  // TODO | Find out how to do actions -> async stuff from api to store

  return {
    count,
    returnDoubleCount,
    handleIncrement,
  }
})
