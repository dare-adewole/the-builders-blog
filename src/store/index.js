import Vue from 'vue';
import Vuex from 'vuex';
import cache from './modules/cache';
import bus from '../bus';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endpoint: REST_ENDPOINT
//		endpoint:  'http://localhost:8000/wp-json/wp/v2'
  },

  mutations: {
    updateEndpoint (state, endpoint) {
      state.endpoint = endpoint;
      bus.$emit('clearError');
      bus.$emit('bumpViewKey', 'Updating content...');
    }
  },

  modules: {
    cache
  }
});
