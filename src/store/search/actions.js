import * as TYPES from './types';

export const actions = {
  [TYPES.FIND_POST]({ commit, state }, data) {
    if (state.page == 1) commit(TYPES.RESET_RESULT);

    commit(TYPES.FIND_POST, data);
  }, // [TYPES.FIND_POST]

  [TYPES.RESET_RESULT]({ commit }) {
    commit(TYPES.RESET_RESULT);
  }, // [TYPES.FIND_POST]

  [TYPES.FIND_USER]({ commit, state }, payload) {
    if (state.page == 1) commit(TYPES.RESET_RESULT);

    commit(TYPES.FIND_USER, payload);
  }, // [TYPES.FIND_USER]

  [TYPES.STACK_VALUE]({ commit }, payload) {
    commit(TYPES.STACK_VALUE, payload);
  }, //[TYPES.STACK_VALUE]

  [TYPES.LOADING]({ commit }, payload = null) {
    commit(TYPES.LOADING, payload);
  }, // [TYPES.LOADING]

  [TYPES.SET_CURRENT_PAGINATION_PAGE]({ commit }, payload) {
    if (typeof payload === 'number') commit(TYPES.SET_CURRENT_PAGINATION_PAGE, payload);
    else throw new Error(`${payload} should be a number`);
  }, //[TYPES.SET_CURRENT_PAGINATION_PAGE]

  [TYPES.SET_CURRENT_PAGINATE_CALLBACK]({ commit }, payload) {
    if (typeof payload === 'function') commit(TYPES.SET_CURRENT_PAGINATE_CALLBACK, payload);
    else throw new Error(`${payload} should be a function`);
  }, // [TYPES.SET_CURRENT_PAGINATE_CALLBACK]

  [TYPES.POST_KEYWORD]({ commit }, payload) {
    if (typeof payload === 'string') commit(TYPES.POST_KEYWORD, payload);
    else throw new Error(`${payload} should be a string`);
  }, // [TYPES.POST_KEYWORD]
};
