import * as TYPES from './types'

export const mutations = {

  [TYPES.FIND_USER](state, payload) {
    if (state.page > 1)
      state.users = [...state.users, ...payload]
    else
      state.users = payload

  }, //[TYPES.FIND_USER]

  [TYPES.FIND_POST](state, payload) {
    console.log(payload)
    if (state.page > 1)
      state.posts = [...state.posts, ...payload]
    else
      state.posts = payload
  }, //[TYPES.FIND_POST]

  [TYPES.STACK_VALUE](state, payload) {
    state.stack = payload
  }, //[TYPES.STACK_VALUE]

  [TYPES.RESET_RESULT](state) {
    state.users = []
    state.posts = []
  }, //[TYPES.RESET_RESULT]

  [TYPES.LOADING](state, payload) {

    if (typeof (payload) == 'boolean')
      state.isLoading = payload
    else
      throw new Error('payload must be a bolean')

  }, // [TYPES.LOADING]

  [TYPES.SET_CURRENT_PAGINATION_PAGE](state, payload) {

    if (typeof (payload) === 'number')
      state.page = payload
    else
      throw new Error(`${payload} should be a number`)
  }, //[TYPES.SET_CURRENT_PAGINATION_PAGE]

  [TYPES.SET_CURRENT_PAGINATE_CALLBACK](state, payload) {
    if (typeof (payload) === 'function')
      state.callback = payload
    else
      throw new Error(`${payload} should be a function`)
  }, //[TYPES.SET_CURRENT_PAGINATE_CALLBACK]

  [TYPES.POST_KEYWORD](state, payload) {

    if (typeof (payload) === 'string')
      state.postKeyword = payload
    else
      throw new Error(`${payload} should be a string`)
  }, //[TYPES.POST_KEYWORD]

  [TYPES.FIND_BUISNESS_POST](state, payload) {
    state.posts = payload
  },

  [TYPES.FIND_NETWORK_POST](state, payload) {
    state.posts = payload
  },
  
}