import Vue from 'vue'
import api from '@/models'

export default {
  namespaced: true,
  state: () => ({
    onlineCourses: [],
    offlineCourses: [],
  }),
  mutations: {
    setCourses(state, courses) {
      const offline: any[] = []
      const online: any[] = []
      courses.forEach(obj => {
        if (obj.courseType === 'offline') offline.push(obj)
        else if (obj.courseType === 'online') online.push(obj)
      })
      Vue.set(state, 'onlineCourses', online)
      Vue.set(state, 'offlineCourses', offline)
    },
  },
  actions: {
    async getCourses({ commit }) {
      const { data } = await api.findAll('course')
      commit('setCourses', data)
    },
  },
}
