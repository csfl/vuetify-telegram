import * as types from '../mutation-types';

export const state = {
  user: null,
};

export const mutations = {
  [types.LOGOUT](state) {
    state.user = null;
  },
};
