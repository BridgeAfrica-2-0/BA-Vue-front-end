import * as TYPES from './types';

export const mutations = {
  [TYPES.NEW_BUSINESS_NOTIFICATION](state, payload) {
    if (payload.init) state.buissness = payload.data;
    else state.buissness = [payload.data, ...state.buissness];
  }, //[TYPES.FIND_USER_BUSNESS]

  [TYPES.NEW_NETWORK_NOTIFICATION](state, payload) {
    if (payload.init) state.networks = payload.data;
    else state.networks = [payload.data, ...state.networks];
  }, //[TYPES.FIND_USER_NETWORK]

  [TYPES.NEW_PROFILE_NOTIFICATION](state, payload) {
    console.log(payload)
    if (payload.init) state.profile = state.profile.push(...payload.data);
    else state.profile = [...state.profile, payload.data];
  }, // [TYPES.INIT]
  [TYPES.DELETE_PROFILE_NOTIFICATION](state, payload) {
    state.profile = state.profile.filter(notif => !payload.includes(notif.id));
  },
  [TYPES.MARK_PROFILE_NOTIFICATION](state, payload) {
    state.profile = state.profile.map(notif => {
      if (payload.includes(notif.id)) {
        notif.mark_as_read = 1;
      }
      return notif;
    });
  },
};
