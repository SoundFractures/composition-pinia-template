import Vue from 'vue'
import Vuex from 'vuex'
// { createLogger } from 'vuex'
// General
import {
  GeneralModule as general,
  Store as GeneralStore,
  State as GeneralState,
  MutationTypes as GeneralMTypes,
  ActionTypes as GeneralATypes,
} from '~/store/modules/general'

import {
  LayoutModule as layout,
  Store as LayoutStore,
  State as LayoutState,
  MutationTypes as LayoutMTypes,
  ActionTypes as LayoutATypes,
} from '~/store/modules/layout'

export type State = {
  general: GeneralState
  layout: LayoutState
}

export type VuexStore = GeneralStore<Pick<State, 'general'>> &
  LayoutStore<Pick<State, 'layout'>>

Vue.use(Vuex)

export const vuexStore = new Vuex.Store<State>({
  // plugins: [createLogger()],
  modules: { general, layout },
})

export function useVuexStore(): VuexStore {
  return vuexStore as VuexStore
}

export const Mutations = {
  general: GeneralMTypes,
  layout: LayoutMTypes,
}

export const Actions = {
  general: GeneralATypes,
  layout: LayoutATypes,
}

export default useVuexStore
