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
} from '~/store/modules/general/index'

export type State = {
  general: GeneralState
}

export type VuexStore = GeneralStore<Pick<State, 'general'>>
// & DataStore<Pick<State, 'data'>> &

Vue.use(Vuex)

export const vuexStore = new Vuex.Store<State>({
  // plugins: [createLogger()],
  modules: { general },
})

export function useVuexStore(): VuexStore {
  return vuexStore as VuexStore
}

export const Mutations = {
  general: GeneralMTypes,
}

export const Actions = {
  general: GeneralATypes,
}

export default useVuexStore
