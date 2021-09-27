import * as TYPES from './types'

export const mutations = {
    
    [TYPES.FIND_USER](state,payload) {
       state.user = payload
    },

    [TYPES.FIND_PROFESSION](state,payload) {
        console.log(payload)
        state.user = payload
    },
    [TYPES.RESET_RESULT](state) {
        state.user = []
    },   

}