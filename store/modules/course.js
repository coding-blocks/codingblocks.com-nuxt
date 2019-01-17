import Vue from 'vue'
import api from '@/models'

export default {
  namespaced: true,
  state: () => {
    courses: []
  },
  mutations: {
    setCourses(state, courses) {
      Vue.set(state, 'courses', courses)
    }
  },
  actions: {
    async getCourses({ commit }) {
      const { data } = await api.findAll('course')
      commit('setCourses', data)
    }
  }
}
