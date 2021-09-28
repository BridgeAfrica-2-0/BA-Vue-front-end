
import * as TYPES from './types'

export const getters = {
    [TYPES.GET_RESULT](state) {
        console.log(state.users)
        return state.users
    },
    [TYPES.LOADING](state) {
        return state.isLoading
    }  
}