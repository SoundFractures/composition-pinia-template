<script setup lang="ts">
  // import memberApi from '@/utils/api/Competition/Meet.api'
  // const api = memberApi()

  import { useContext, ref } from '@nuxtjs/composition-api'
  const { $api } = useContext()
  const loading = ref<boolean>(false)

  const handleGetMeets = async () => {
    loading.value = true
    await $api.competition.meet
      .list()
      .then((data) => {
        console.log(data)
      })
      .finally(() => {
        setTimeout(() => {
          loading.value = false
        }, 1000)
      })
  }
</script>

<template>
  <v-row>
    <v-col class="text-center">
      <v-btn color="primary" :loading="loading" @click="handleGetMeets">
        Get meets
      </v-btn>
    </v-col>
  </v-row>
</template>
