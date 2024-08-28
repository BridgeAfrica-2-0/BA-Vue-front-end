import * as TYPES from "./types";

export const getters = {
  [TYPES.NEW_BUSINESS_NOTIFICATION](state) {
    return state.buissness;
  }, // [TYPES.NEW_BUSINESS_NOTIFICATION]

  [TYPES.NEW_PROFILE_NOTIFICATION](state) {
    return state.profile;
  }, //[TYPES.NEW_PROFILE_NOTIFICATION]

  [TYPES.NEW_NETWORK_NOTIFICATION](state) {
    return state.networks;
  }, // [TYPES.NEW_NETWORK_NOTIFICATION]

  [TYPES.UPDATE_ALBUM](state, payload) {
    return state.updateAlbum;
  }
};
