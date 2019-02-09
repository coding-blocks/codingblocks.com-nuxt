import { RootState } from 'store'
import { Course } from '@/models/course'
import Vue from 'vue'
import { ActionContext, ActionTree, MutationTree } from 'vuex'
import api from '@/models'

export const name = 'course'

export interface State {
  onlineCourses: Array<Course>
  offlineCourses: Array<Course>
}

export const namespaced = true

export const state = (): State => ({
  onlineCourses: [],
  offlineCourses: [],
})

export interface Actions<S, R> extends ActionTree<S, R> {
  getCourses(context: ActionContext<S, R>): void
}

export const actions: Actions<State, RootState> = {
  async getCourses({ commit }) {
    const { data } = await api.findAll('course')
    commit('setCourses', data)
  },
}

export const mutations: MutationTree<State> = {
  setCourses(state, courses) {
    const offline: Array<Course> = []
    const online: Array<Course> = []
    courses.forEach(obj => {
      if (obj.courseType === 'offline') offline.push(obj)
      else if (obj.courseType === 'online') online.push(obj)
    })
    Vue.set(state, 'onlineCourses', online)
    Vue.set(state, 'offlineCourses', offline)
  },
}
