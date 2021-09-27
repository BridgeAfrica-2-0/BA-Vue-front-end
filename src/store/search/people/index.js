import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'
import {state} from './state'


console.log(getters)
export const search = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}