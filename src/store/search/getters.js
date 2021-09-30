
import * as TYPES from './types'

export const getters = {
	[TYPES.GET_RESULT_USER](state) {
		return state.users
	},

	[TYPES.GET_RESULT_POST](state) {
		return state.posts
	},

	[TYPES.LOADING](state) {
		return state.isLoading
	},

	[TYPES.GET_CURRENT_PAGINATION_PAGE](state) {
		return state.callback
	}

}