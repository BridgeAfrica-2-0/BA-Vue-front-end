import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'
import {state} from './state'

export const social = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}