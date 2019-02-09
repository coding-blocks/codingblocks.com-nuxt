import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from 'store'

export const types = {}

export interface State {}

export const state = (): State => ({})

export const getters: GetterTree<State, RootState> = {}

export const actions: ActionTree<State, RootState> = {}

export const mutations: MutationTree<State> = {}
