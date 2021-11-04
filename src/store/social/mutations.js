import { state } from '../search/state';
import * as TYPES from './types';

export const mutations = {
  [TYPES.FIND_USER_BUSNESS](state, payload) {
    state.buissness = payload;
  }, //[TYPES.FIND_USER_BUSNESS]

  [TYPES.FIND_USER_NETWORK](state, payload) {
    state.networks = payload;
  }, //[TYPES.FIND_USER_NETWORK]

  [TYPES.INIT](state) {
    state.isLoading = true;
  }, // [TYPES.INIT]
};
