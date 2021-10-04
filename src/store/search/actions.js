import axios from 'axios'
import * as TYPES from './types'




export const actions = {


  [TYPES.FIND_POST]({ commit, state }, data) {
    if (state.page > 1)
      commit(TYPES.RESET_RESULT)

    commit(TYPES.FIND_POST, data)
  }, // [TYPES.FIND_POST]

  [TYPES.FIND_USER]({ commit, state }, payload) {

    if (state.page > 1)
      commit(TYPES.RESET_RESULT)

    commit(TYPES.FIND_USER, payload)

  }, // [TYPES.FIND_USER]


  [TYPES.STACK_VALUE]({ commit }, payload) {
    commit(TYPES.STACK_VALUE, payload)
  }, //[TYPES.STACK_VALUE]


  [TYPES.LOADING]({ commit }, payload = null) {
    commit(TYPES.LOADING, payload)
  }, // [TYPES.LOADING]



  [TYPES.FIND_BUISNESS_POST]({ commit, state }, payload) {
    const { credentials, lauchLoader, endLoader } = payload

    commit(TYPES.LOADING, lauchLoader)

    if (lauchLoader)
      commit(TYPES.RESET_RESULT)

    axios.post(`search/business/post/${state.postKeyword}`, credentials)
      .then(({ data: { data } }) => {
        commit(TYPES.FIND_MIXED_POST, data)
        commit(TYPES.LOADING, endLoader)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_NETWORK_POST]({ commit, state }, payload) {
    const { credentials, lauchLoader, endLoader } = payload

    commit(TYPES.LOADING, lauchLoader)

    if (lauchLoader)
      commit(TYPES.RESET_RESULT)

    axios.post(`search/network/post/${state.postKeyword}`, credentials)
      .then(({ data: { data } }) => {
        commit(TYPES.FIND_MIXED_POST, data)
        commit(TYPES.LOADING, endLoader)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },



  [TYPES.SET_CURRENT_PAGINATION_PAGE]({ commit }, payload) {

    if (typeof (payload) === 'number')
      commit(TYPES.SET_CURRENT_PAGINATION_PAGE, payload)
    else
      console.error(`${payload} should be a number`)
  },


  [TYPES.SET_CURRENT_PAGINATE_CALLBACK]({ commit }, payload) {
    if (typeof (payload) === 'function')
      commit(TYPES.SET_CURRENT_PAGINATE_CALLBACK, payload)
    else
      console.error(`${payload} should be a function`)
  },


  [TYPES.POST_KEYWORD]({ commit }, payload) {
    if (typeof (payload) === 'string' || false === payload)
      commit(TYPES.POST_KEYWORD, payload)
    else
      console.error(`${payload} should be a string`)
  }

}