import axios from 'axios'
import * as TYPES from './types'




export const actions = {

  [TYPES.FIND_USER]({ commit }, payload) {
    commit(TYPES.LOADING, true)
    commit(TYPES.RESET_RESULT)
    axios.get(`search/listUsers/?q=${payload}`)
      .then(({ data }) => {
        commit(TYPES.FIND_USER, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_MIXED_POST]({ commit }) {

  },


  [TYPES.FIND_POST]({ commit }, payload) {

    const { data, lauchLoader, endLoader } = payload

    commit(TYPES.LOADING, lauchLoader)

    if (lauchLoader)
      commit(TYPES.RESET_RESULT)

    axios.post(`search/people/post`, data)
      .then(({ e }) => {
        commit(TYPES.FIND_MIXED_POST, e.data)
        commit(TYPES.LOADING, endLoader)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_BUISNESS_POST]({ commit }, payload) {
    const { data, lauchLoader, endLoader } = payload

    commit(TYPES.LOADING, lauchLoader)

    if (lauchLoader)
      commit(TYPES.RESET_RESULT)

    axios.post(`search/busness/post`, data)
      .then(({ e }) => {
        commit(TYPES.FIND_MIXED_POST, e.data)
        commit(TYPES.LOADING, endLoader)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_NETWORK_POST]({ commit }, payload) {
    const { data, lauchLoader, endLoader } = payload

    commit(TYPES.LOADING, lauchLoader)

    if (lauchLoader)
      commit(TYPES.RESET_RESULT)

    axios.post(`search/network/post/`, data)
      .then(({ e }) => {
        commit(TYPES.FIND_MIXED_POST, e.data)
        commit(TYPES.LOADING, endLoader)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_USER]({ commit }, payload) {
    commit(TYPES.LOADING, true)
    commit(TYPES.RESET_RESULT)
    axios.get(`search/listUsers/?q=${payload}`)
      .then(({ data }) => {
        commit(TYPES.FIND_USER, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_PROFESSION]({ commit }, payload) {
    commit(TYPES.LOADING, true)
    commit(TYPES.RESET_RESULT)
    axios.get(`search/listProfessions/?q=${payload}`)
      .then(({ data }) => {
        commit(TYPES.FIND_PROFESSION, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.FIND_COMMUNITY]({ commit }, payload) {
    commit(TYPES.RESET_RESULT)
    commit(TYPES.LOADING, true)
    axios.post(`search/community/profession`, payload)
      .then(({ data }) => {
        commit(TYPES.FIND_COMMUNITY, data.data)
        commit(TYPES.LOADING, false)
      })
      .catch(e => commit(TYPES.LOADING, false))
  },

  [TYPES.LOADING]({ commit }, payload = null) {
    commit(TYPES.LOADING, payload)
  }

}