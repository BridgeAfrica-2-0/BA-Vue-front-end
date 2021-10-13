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

    [TYPES.RESET_RESULT](state) {
        state.users = []
    },

    [TYPES.LOADING](state, payload = null) {
        if (null != payload)
            state.isLoading = payload
        else
            state.isLoading = !state.isLoading
    },

}