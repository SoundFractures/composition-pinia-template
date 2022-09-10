<script lang="ts">
  import { useContext, ref, defineComponent } from '@nuxtjs/composition-api'
  // import { useStore } from 'vuex'
  import { Meet } from '~/lib/models/Competition/Meet.model'
  export default defineComponent({
    auth: false,
    setup() {
      const { $api } = useContext()

      const loading = ref<boolean>(false)
      const items = ref<Meet[]>([])
      const handleGet = async () => {
        loading.value = true
        await $api.competition.meet
          .list()
          .then((data) => {
            items.value = data
          })
          .finally(() => {
            loading.value = false
          })
      }
      return {
        handleGet,
        items,
        loading,
      }
    },
  })
</script>

<template>
  <div>
    <v-row justify="start" no-gutters>
      <v-btn color="primary" :loading="loading" @click="handleGet">
        {{ $i18n.t('home') }}
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
