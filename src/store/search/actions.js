import axios from 'axios'
import * as TYPES from './types'




export const actions = {


  [TYPES.FIND_POST]({ commit, state }, payload) {

    const { credentials, lauchLoader, endLoader } = payload

    commit(TYPES.LOADING, lauchLoader)

    if (lauchLoader)
      commit(TYPES.RESET_RESULT)

    axios.post(`search/people/post/${state.postKeyword}`, credentials)
      .then(({ data: { data } }) => {
        commit(TYPES.LOADING, endLoader)
        commit(TYPES.FIND_MIXED_POST, data)
      })
      .catch(() => commit(TYPES.LOADING, false))
  },

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

  [TYPES.FIND_USER]({ commit, state }, payload) {
    commit(TYPES.LOADING, true)
    commit(TYPES.RESET_RESULT)
    //axios.get(`search/listUsers/${state.page}/?q=${payload}`)
    axios.get(`search/listUsers?q=${payload}`)
      .then(({ data }) => {
        commit(TYPES.FIND_USER, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_PROFESSION]({ commit, state }, payload) {
    commit(TYPES.LOADING, true)
    commit(TYPES.RESET_RESULT)
    //axios.get(`search/listProfessions/${state.page}/?q=${payload}`)
    axios.get(`search/listProfessions?q=${payload}`)
      .then(({ data }) => {
        commit(TYPES.FIND_PROFESSION, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_COMMUNITY]({ commit, state }, payload) {
    commit(TYPES.RESET_RESULT)
    commit(TYPES.LOADING, true)
    //axios.post(`search/community/profession/${state.page}/`, payload)
    axios.post(`search/community/profession`, payload)
      .then(({ data }) => {
        commit(TYPES.FIND_COMMUNITY, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.LOADING]({ commit }, payload = null) {
    commit(TYPES.LOADING, payload)
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