import * as TYPES from './types'

export const mutations = {

  [TYPES.FIND_USER](state, payload) {

    if (state.page > 1)
      state.users = [...state.users, ...payload]
    else {
      state.users = payload
      if (!state.startScrolling)
        state.startScrolling = true
    }

  }, //[TYPES.FIND_USER]

  [TYPES.FIND_POST](state, payload) {
    console.log(state.page)
    console.log(payload)
    if (state.page > 1)
      state.posts = [...state.posts, ...payload,]
    else {
      state.posts = payload
      if (!state.startScrolling)
        state.startScrolling = true
    }

  }, //[TYPES.FIND_POST]

  [TYPES.END_INITIAL_REQUEST](state, payload) {
    state.init = payload
  },

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

    if (typeof (payload) === 'number')
      state.page = payload
    else
      throw new Error(`${payload} should be a number`)


  },

  [TYPES.SET_CURRENT_PAGINATE_CALLBACK](state, payload) {
    if (typeof (payload) === 'function')
      state.callback = payload
    else
      throw new Error(`${payload} should be a function`)
  },

  [TYPES.POST_KEYWORD](state, payload) {

    if (typeof (payload) === 'string')
      state.postKeyword = payload
    else
      throw new Error(`${payload} should be a string`)
  }

}