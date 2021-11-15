import * as TYPES from './types'

export const mutations = {
  
  [TYPES.NEW_BUSINESS_NOTIFICATION](state, payload) {
    if (payload.init)
      state.buissness = payload.data
    else
      state.buissness = [payload.data, ...state.buissness]
  }, //[TYPES.FIND_USER_BUSNESS]

  [TYPES.NEW_NETWORK_NOTIFICATION](state, payload) {
    if (payload.init)
      state.networks = payload.data
    else
      state.networks = [payload.data, ...state.networks]
  }, //[TYPES.FIND_USER_NETWORK]

  [TYPES.NEW_PROFILE_NOTIFICATION](state, payload) {
    if (payload.init)
      state.profile = payload.data
    else
      state.profile = [payload.data, ...state.profile]
  }, // [TYPES.INIT]

  [TYPES.NEW_MESSAGE](state, payload) {
    if (payload.init)
      state.messages = payload.data
    else
      state.messages = [payload.data, ...state.messages]
  }, // [TYPES.NEW_NETWORK_MESSAGE]

}