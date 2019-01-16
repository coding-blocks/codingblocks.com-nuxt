import {
  Module,
  VuexModule,
  getModule,
  MutationAction
} from 'vuex-module-decorators'
import * as api from '../api'
import store from '@/store'

@Module({
  // dynamic: true,
  stateFactory: true,
  namespaced: true,
  name: 'members',
  store
})
class MemberModule extends VuexModule {
  members = []

  @MutationAction({ mutate: ['members'] })
  refreshMembers() {
    const members = api.fetchMembers()
    return { members }
  }
}

export default getModule(MemberModule)
