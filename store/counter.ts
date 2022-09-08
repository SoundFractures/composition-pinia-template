import { defineStore } from 'pinia'
import { ref, computed } from '@nuxtjs/composition-api'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(5)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const subtract = () => {
    count.value--
  }

  return {
    state: { count },
    computed: { doubleCount },
    methods: { increment, subtract },
  }
})
