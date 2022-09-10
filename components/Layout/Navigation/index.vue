<script lang="ts">
  import {
    defineComponent,
    useContext,
    computed,
  } from '@nuxtjs/composition-api'
  import { Mutations } from '~/store'

  export default defineComponent({
    props: {},
    setup() {
      const { $vuex, $layout } = useContext()

      const drawer = computed(() => $vuex.state.layout.navigation.drawer)
      const showNavigation = computed(() => $layout.navigation.show())

      const handleDrawer = (value: boolean) => {
        $vuex.commit(Mutations.layout.LAYOUT_SET_NAVIGATION_DRAWER, value)
      }
      return {
        drawer,
        showNavigation,
        handleDrawer,
      }
    },
  })
</script>
<template>
  <v-navigation-drawer
    dark
    :value="drawer"
    :permanent="showNavigation"
    width="250"
    app
    class="primary"
    @input="handleDrawer"
  >
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon><v-icon>home</v-icon></v-list-item-icon>
          <v-list-item-title>{{ $i18n.t('home') }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
