import * as TYPES from './types';

export const actions = {
  [TYPES.FIND_USER_BUSNESS]({ commit }, data) {
    commit(TYPES.FIND_USER_BUSNESS, data);
  }, // [TYPES.FIND_USER_BUSNESS]

  [TYPES.FIND_USER_NETWORK]({ commit }, data) {
    commit(TYPES.FIND_USER_NETWORK, data);
  }, // [TYPES.FIND_USER_NETWORK]

  [TYPES.INIT]({ commit }) {
    commit(TYPES.INIT);
  }, // [TYPES.INIT]/ [TYPES.INIT]
};
