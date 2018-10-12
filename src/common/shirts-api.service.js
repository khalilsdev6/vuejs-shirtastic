import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { SHIRTS_API_URL } from './config';

const ShirtsApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = SHIRTS_API_URL;
  },

  setHeader() {
    // Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  getShirts() {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get('shirts')
        .then(result => resolve(result.data))
        .catch((error) => {
          reject(`[Create] ShirtsApiService ${error}`);
        });
    });
  },
};

export default ShirtsApiService;
