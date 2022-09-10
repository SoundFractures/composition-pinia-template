<script setup lang="ts">
  import { useContext, ref, computed } from '@nuxtjs/composition-api'
  // import { useStore } from 'vuex'
  import { Meet } from '~/utils/models/Competition/Meet.model'
  import { Mutations } from '~/store'
  const { $api, $vuex } = useContext()

  const loading = ref<boolean>(false)
  const items = ref<Meet[]>([])
  const userCount = computed({
    get() {
      return $vuex.state.general.user
    },
    set(value: number) {
      $vuex.commit(Mutations.general.SET_USER, value)
    },
  })
  const handleGetMeets = async () => {
    loading.value = true
    await $api.competition.meet
      .list()
      .then((data) => {
        userCount.value = userCount.value + 1
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
        Get meets {{ userCount }}
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
