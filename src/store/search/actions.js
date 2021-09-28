import axios from 'axios'
import * as TYPES from './types'

export const actions = {
    
    [TYPES.FIND_USER]({commit},payload) {
        commit(TYPES.RESET_RESULT)
        axios.get(`search/listUsers/?q=${payload}`)
        .then(({ data }) => {
            commit(TYPES.FIND_USER, data.data)
        })
    }, 

    [TYPES.FIND_PROFESSION]({commit},payload) {
        commit(TYPES.RESET_RESULT)
        axios.get(`search/listProfessions/?q=${payload}`)
        .then(({ data }) => {
            commit(TYPES.FIND_PROFESSION, data.data)
        })
    },

    [TYPES.FIND_COMMUNITY]({commit},payload) {
        commit(TYPES.RESET_RESULT)
        axios.post(`search/community/profession`, payload)
        .then(({ data }) => {
            commit(TYPES.FIND_COMMUNITY, data.data)
        })
    },

    [TYPES.LOADING]({commit}){
        commit(TYPES.LOADING)
    }

}