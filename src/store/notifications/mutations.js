import * as TYPES from './types'

export const mutations = {

  [TYPES.NEW_BUSINESS_NOTIFICATION](state, payload) {
    state.buissness = payload
  }, //[TYPES.FIND_USER_BUSNESS]

  [TYPES.NEW_NETWORK_NOTIFICATION](state, payload) {
    state.networks = payload
  }, //[TYPES.FIND_USER_NETWORK]

  [TYPES.NEW_PROFILE_NOTIFICATION](state) {
    state.profile = true
  }, // [TYPES.INIT]

}