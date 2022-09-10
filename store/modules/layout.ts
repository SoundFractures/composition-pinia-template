/* eslint-disable import/named */
import {
  Store as VuexStore,
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { State as RootState } from '@/store'
import { COLORS, Snackbar } from '~/lib/models'

// TYPE | STATE
export type State = {
  loading: {
    app: boolean
    view: boolean
  }
  navigation: {
    drawer: boolean
  }
  snackbar: Snackbar
}

// Actual State
const state: State = {
  loading: {
    app: false,
    view: false,
  },
  navigation: {
    drawer: false,
  },
  snackbar: {
    message: '',
    color: COLORS.SUCCESS,
    timeout: 1500,
  },
}
// ENUM | MUTATIONS
export enum MutationTypes {
  LAYOUT_SET_LOADING_APP = 'LAYOUT_SET_LOADING_APP',
  LAYOUT_SET_LOADING_VIEW = 'LAYOUT_SET_LOADING_VIEW',
  LAYOUT_SET_NAVIGATION_DRAWER = 'LAYOUT_SET_NAVIGATION_DRAWER',
  LAYOUT_SET_SNACKBAR = 'LAYOUT_SET_SNACKBAR',
}

// Mutation contracts
type Mutations<S = State> = {
  [MutationTypes.LAYOUT_SET_LOADING_APP](state: S, payload: boolean): void
  [MutationTypes.LAYOUT_SET_LOADING_VIEW](state: S, payload: boolean): void
  [MutationTypes.LAYOUT_SET_NAVIGATION_DRAWER](state: S, payload: boolean): void
  [MutationTypes.LAYOUT_SET_SNACKBAR](state: S, payload: Snackbar): void
}

// Define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LAYOUT_SET_LOADING_APP](state: State, payload: boolean) {
    state.loading.app = payload
  },
  [MutationTypes.LAYOUT_SET_LOADING_VIEW](state: State, payload: boolean) {
    state.loading.view = payload
  },
  [MutationTypes.LAYOUT_SET_NAVIGATION_DRAWER](state: State, payload: boolean) {
    state.navigation.drawer = payload
  },
  [MutationTypes.LAYOUT_SET_SNACKBAR](state: State, payload: Snackbar) {
    state.snackbar = payload
  },
}

// ENUM | ACTIONS
export enum ActionTypes {}

// Actions context
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

// Actions contracts
interface Actions {}

// Define actions
const actions: ActionTree<State, RootState> & Actions = {}

// TYPE | GETTERS
export type Getters = {
  // userIsSuperUser: () => boolean
}

// Getters
const getters: GetterTree<State, RootState> & Getters = {
  // userIsSuperUser: () => {
  //   return state.user?.roles?.includes(USER_ROLES.SUPERUSER)!
  // },
}

// setup store type
export type Store<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>
}

export const LayoutModule: Module<State, RootState> = {
  state,
  mutations,
  actions,
  getters,
}
