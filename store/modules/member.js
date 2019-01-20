import api from '@/models/'

export default {
  namespaced: true,
  state: () => {
    members: []
  },
  mutations: {
    setMembers(state, members) {
      state.members = members
    }
  },
  actions: {
    getMembers({ commit }) {
      const { data } = api.findAll('member')
      commit('setMembers', data)
    }
  }
}
