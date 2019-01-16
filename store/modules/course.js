import {
  Module,
  VuexModule,
  getModule,
  MutationAction,
  Mutation,
  Action
} from 'vuex-module-decorators'
import store from '@/store'
import * as api from '../api'

@Module({
  // dynamic: true,
  stateFactory: true,
  namespaced: true,
  name: 'courses',
  store
})
class CourseModule extends VuexModule {
  courses = []

  @MutationAction({ mutate: ['courses'] })
  async fetchCourses() {
    const courses = await api.fetchCourses()
    return { courses }
  }
}

export default getModule(CourseModule)
