
import * as TYPES from './types'

export const getters = {

	[TYPES.GET_RESULT_USER](state) {
		return state.users
	}, // [TYPES.GET_RESULT_USER]

	[TYPES.GET_RESULT_POST](state) {
		return state.posts
	}, //[TYPES.GET_RESULT_POST]

	[TYPES.STACK_VALUE](state) {
		return state.stack
	}, // [TYPES.STACK_VALUE]

	[TYPES.LOADING](state) {
		return state.isLoading
	}, //[TYPES.LOADING]

	[TYPES.POST_KEYWORD](state) {
		return state.postKeyword
	}, //[TYPES.POST_KEYWORD]

	[TYPES.GET_CURRENT_PAGINATE_CALLBACK](state) {
		return state.callback
	},// [TYPES.GET_CURRENT_PAGINATE_CALLBACK]

	[TYPES.GET_CURRENT_PAGINATION_PAGE](state) {
		return state.page
	}, //TYPES.GET_CURRENT_PAGINATION_PAGE

}