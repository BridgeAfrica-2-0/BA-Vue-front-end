
import * as TYPES from './types'

export const getters = {

  [TYPES.NEW_BUSINESS_NOTIFICATION](state) {
    return state.buissness
  }, // [TYPES.NEW_BUSINESS_NOTIFICATION]

  [TYPES.NEW_PROFILE_NOTIFICATION](state) {
    return state.networks
  }, //[TYPES.NEW_PROFILE_NOTIFICATION]

  [TYPES.NEW_NETWORK_NOTIFICATION](state) {
    return state.profile
  }, // [TYPES.NEW_NETWORK_NOTIFICATION]

  [TYPES.NEW_MESSAGE](state) {
    return state.messages
  }, // [TYPES.NEW_NETWORK_MESSAGE]

  [TYPES.HAS_MESSAGE](state) {
    return state.messages.length ? state.messages.length : 0
  }, // [TYPES.  HAS_MESSAGE

}