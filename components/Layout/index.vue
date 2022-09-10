<script lang="ts">
  import {
    defineComponent,
    computed,
    useContext,
  } from '@nuxtjs/composition-api'
  import { Mutations } from '~/store'

  export default defineComponent({
    setup() {
      const { $vuex, $layout, $i18n } = useContext()
      // Loading
      const returnLoading = computed(() => $vuex.state.layout.loading.app)

      // Locales
      const handleChangeLocale = async () => {
        await $layout.switchLocale($i18n.locale === 'sl' ? 'en' : 'sl')
      }
      // Navigation
      const returnShowNavigation = computed(() => $layout.navigation.show())
      const handleOpenDrawer = () => {
        $layout.navigation.handleDrawer()
      }
      return {
        returnLoading,
        handleChangeLocale,
        handleOpenDrawer,
        returnShowNavigation,
      }
    },
  })
</script>

<template>
  <v-app>
    <template v-if="!returnLoading">
      <LayoutNavigation />
      <v-app-bar flat dense height="54%" app>
        <v-row align="center" no-gutters>
          <v-app-bar-nav-icon
            v-if="!returnShowNavigation"
            plain
            color="primary"
            @click="handleOpenDrawer()"
          />
          <v-spacer />
          <v-btn text color="primary" small @click="handleChangeLocale()"
            >Switch locale - Current: {{ $i18n.locale.toString() }}</v-btn
          >
        </v-row>
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    </template>
    <template v-else>
      <SharedLoading :size="75" :width="4" />
    </template>
  </v-app>
</template>
