import * as types from '../mutation-types';

export const state = {
  user: null,
  appId: 12345,
  hash: '',
  phone_number: '',
};

export const mutations = {
  [types.LOGOUT](state) {
    state.user = null;
  },
};
