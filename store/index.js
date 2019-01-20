import Vue from 'vue'
import Vuex from 'vuex'
import member from '@/store/modules/member'
import course from '@/store/modules/course'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    state: {},
    modules: {
      member,
      course
    }
  })
