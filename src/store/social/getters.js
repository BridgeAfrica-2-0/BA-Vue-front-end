
import * as TYPES from './types'

export const getters = {

  [TYPES.FIND_USER_BUSNESS](state) {
    return state.buissness
  }, // [TYPES.FIND_USER_BUSNESS]

  [TYPES.FIND_USER_NETWORK](state) {
    return state.networks
  }, //[TYPES.FIND_USER_NETWORK]

  [TYPES.INIT](state) {
    return state.isLoading
  }, // [TYPES.INIT]
}