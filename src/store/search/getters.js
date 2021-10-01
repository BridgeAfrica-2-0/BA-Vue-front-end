
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


	[TYPES.POST_KEYWORD](state) {
		return state.postKeyword
	},

	[TYPES.SET_CURRENT_PAGINATE_CALLBACK](state) {
		return state.callback
	}

}