<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  export default defineComponent({
    props: {
      size: {
        type: Number,
        default: 55,
      },
      width: {
        type: Number,
        default: 3,
      },
      meeting: {
        type: Boolean,
        default: false,
      },
    },
  })
</script>

<template>
  <v-container fill-height>
    <v-row justify="center" align="center" no-gutters
      ><v-progress-circular
        indeterminate
        :color="meeting ? 'accent' : 'primary'"
        :size="size"
        :width="width"
      ></v-progress-circular
    ></v-row>
  </v-container>
</template>
