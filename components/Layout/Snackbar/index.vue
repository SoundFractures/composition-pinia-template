<script lang="ts">
  import {
    defineComponent,
    computed,
    useContext,
    ref,
    onMounted,
  } from '@nuxtjs/composition-api'
  import { STATUS_ICONS } from '~/lib/models'
  import { Mutations } from '~/store'

  export default defineComponent({
    props: {
      top: {
        type: Boolean,
        default: false,
      },
      right: {
        type: Boolean,
        default: false,
      },
      bottom: {
        type: Boolean,
        default: false,
      },
      left: {
        type: Boolean,
        default: false,
      },
      transition: {
        type: String,
        default: 'fade-transition',
      },
    },
    setup(props) {
      const { $vuex } = useContext()
      onMounted(() => {
        $vuex.subscribe((mutation) => {
          if (mutation.type === Mutations.layout.LAYOUT_SET_SNACKBAR) {
            show.value = true
          }
        })
      })

      const snackbar = computed(() => $vuex.state.layout.snackbar)
      const snackbarIcon = computed(
        () =>
          STATUS_ICONS[
            $vuex.state.layout.snackbar.color.toUpperCase() as keyof typeof STATUS_ICONS
          ],
      )

      const show = ref<boolean>(false)
      const handleCloseSnackbar = () => {
        show.value = false
      }

      return {
        show,
        snackbar,
        props,
        handleCloseSnackbar,
        snackbarIcon,
      }
    },
  })
</script>

<template>
  <v-snackbar
    v-model="show"
    v-bind="props"
    :color="snackbar.color"
    :min-width="150"
    :timeout="snackbar.timeout"
    @click="handleCloseSnackbar()"
  >
    <v-row
      align="center"
      justify="space-between"
      no-gutters
      @click="handleCloseSnackbar()"
    >
      <v-icon v-if="!$layout.isMobile()" class="mx-1">
        {{ snackbarIcon }}
      </v-icon>

      <span class="white--text">
        {{ snackbar.message }}
      </span>
    </v-row>
    <template #action><div></div></template>
  </v-snackbar>
</template>
