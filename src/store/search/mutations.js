import * as TYPES from './types'

export const mutations = {

  [TYPES.FIND_USER](state, payload) {

    if (state.page > 2)
      state.users = [...payload, ...state.users]
    else
      state.users = payload

  }, //[TYPES.FIND_USER]

  [TYPES.FIND_POST](state, payload) {

    if (state.page > 2)
      state.posts = [...payload, ...state.posts]
    else
      state.posts = payload

  }, //[TYPES.FIND_POST]

  [TYPES.STACK_VALUE](state, payload) {
    state.stack = payload
  }, //[TYPES.STACK_VALUE]


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

  [TYPES.FIND_MIXED_USER](state, payload) {
    state.users = [...state.users, ...payload].sort((a, b) => a.post_id > b.post_id)
  },

  [TYPES.RESET_RESULT](state) {
    state.users = []
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

  [TYPES.SET_CURRENT_PAGINATION_PAGE](state, payload) {

    if (state.callback) {
      if (typeof (payload) === 'number' || false === payload)
        if (payload)
          state.page = payload
        else
          state.payload = 1
      else
        console.error(`${payload} should be a number`)
    } else {
      state.payload = 1
    }

  },

  [TYPES.SET_CURRENT_PAGINATE_CALLBACK](state, payload) {
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