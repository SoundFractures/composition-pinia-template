<script lang="ts">
  import { useContext, ref, defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    auth: false,
    setup() {
      const { $notify } = useContext()

      const fireSnackbar = () => {
        $notify.info({ message: 'DAJ DELAJ $LAYOUT' })
      }
      return {
        fireSnackbar,
      }
    },
  })
</script>

<template>
  <div>
    <v-row justify="start" no-gutters>
      <v-btn color="primary" @click="fireSnackbar">
        {{ $i18n.t('home') }} - FIRE SNACKBAR
      </v-btn>
    </v-row>
  </div>
</template>
