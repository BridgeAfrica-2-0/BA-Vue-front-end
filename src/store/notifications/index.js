import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'

export const notification = {
    namespaced: true,
    state,
    getters,
    mutations
}