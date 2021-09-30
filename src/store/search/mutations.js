import * as TYPES from './types'

export const mutations = {

  [TYPES.FIND_USER](state, payload) {
    state.users = payload
  },

  [TYPES.FIND_PROFESSION](state, payload) {
    state.users = payload
  },

  [TYPES.FIND_COMMUNITY](state, payload) {
    state.users = payload
  },


  [TYPES.FIND_BUISNESS_POST](state, payload) {
    state.posts = payload
  },

  [TYPES.FIND_POST](state, payload) {
    state.posts = payload
  },

  [TYPES.FIND_NETWORK_POST](state, payload) {
    state.posts = payload
  },

  [TYPES.FIND_MIXED_POST](state, payload) {
    state.posts = [...state.posts, ...payload].sort((a, b) => a.id > b.id)
  },

  [TYPES.RESET_RESULT](state) {

    if (state.users.length)
      state.users = []
    else
      state.posts = []
  },

  [TYPES.LOADING](state, payload = null) {
    if (null != payload)
      state.isLoading = payload
    else
      state.isLoading = !state.isLoading
  },

}