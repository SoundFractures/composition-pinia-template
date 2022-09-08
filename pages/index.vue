<script setup lang="ts">
  import { ref, computed, inject } from '@nuxtjs/composition-api'
  import useAnanas from '@/store'

  const ananas = useAnanas()
  const api = inject('globalKey')
  console.log('global', api)
  const count = ref<number>(0)
  const handleIncrementCount = () => {
    ananas.counter.state.count++
  }

  const doubleValue = computed(() => ananas.counter.computed.doubleCount)
</script>

<template>
  <v-row>
    <v-col class="text-center">
      <v-btn color="primary" @click="handleIncrementCount()">
        {{ doubleValue }}
      </v-btn>
    </v-col>
  </v-row>
</template>
