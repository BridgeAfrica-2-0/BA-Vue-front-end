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
    state.posts = [...state.posts, ...payload].sort((a, b) => a.post_id > b.post_id)
  },

  [TYPES.RESET_RESULT](state) {
    if (state.users.length)
      state.users = []
    else
      state.posts = []
  },

  [TYPES.LOADING](state, payload = null) {
    if (null != payload) {
      if (typeof (payload) == 'boolean')
        state.isLoading = payload
      else
        throw new Error('payload must be a bolean')
    }
    else
      state.isLoading = !state.isLoading
  },

  [TYPES.GET_CURRENT_PAGINATION_PAGE](state, payload) {
    if (typeof (payload) === 'number')
      state.page = payload
    else
      console.error(`${payload} should be a number`)
  },

  [TYPES.SET_CURRENT_PAGINATE_CALLBACT](state, payload) {
    if (typeof (payload) === 'function')
      state.callback = payload
    else
      console.error(`${payload} should be a function`)
  },

  [TYPES.POST_KEYWORD](state, payload) {
    if (typeof (payload) === 'string')
      state.postKeyword = payload
    else
      console.error(`${payload} should be a string`)
  }

}