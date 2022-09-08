<script setup lang="ts">
  import { useContext, ref } from '@nuxtjs/composition-api'
  import { Meet } from '~/utils/models/Competition/Meet.model'

  const { $api, $store } = useContext()

  const loading = ref<boolean>(false)
  const items = ref<Meet[]>([])
  const handleGetMeets = async () => {
    loading.value = true
    await $api.competition.meet
      .list()
      .then((data) => {
        $store().counter.handleIncrement()
        items.value = data
      })
      .finally(() => {
        loading.value = false
      })
  }
</script>

<template>
  <div>
    <v-row justify="start" no-gutters>
      <v-btn color="primary" :loading="loading" @click="handleGetMeets">
        Get meets {{ $store().counter.count }}
      </v-btn>
    </v-row>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.id"
        class="primary ma-2"
        dense
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
