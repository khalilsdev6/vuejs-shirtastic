import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { USER_API_URL } from '@/common/config';

const UserApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = USER_API_URL;
  },

  setHeader() {
    // Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  login(email, password) {
    return new Promise((resolve, reject) => {
      if (!email) return reject(new Error('Email required'));
      if (!password) return reject(new Error('Password required'));

      setTimeout(() => Vue.axios
        .post('user', { email, password })
        .then(result => resolve(result))
        .catch((error) => {
          throw new Error(`[Create] UserApiService ${error}`);
        }), 2500);
    });
  },

  get() {

  },

  delete() {

  },

  update() {

  },
};

export default UserApiService;
