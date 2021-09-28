import * as TYPES from './types'

export const mutations = {
    
    [TYPES.FIND_USER](state,payload) {
       state.users = payload
    },

    [TYPES.FIND_PROFESSION](state,payload) {
        state.users = payload
    },

    [TYPES.RESET_RESULT](state) {
        state.users = []
    },
    
    [TYPES.LOADING](state) {
        state.isLoading = !state.isLoading
    },

}