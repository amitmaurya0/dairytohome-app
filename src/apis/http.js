import axios from 'axios';
import {store} from '../store/store';
import { BASE_URL } from './urls';
import * as RootNavigation from '../routes/RootNavigation.js'
import strings from '../configs/strings';

const http = axios.create ({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use (
  function (config) {
    const token = store.getState().user.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);


export const checkAuth = async res => {
  if (res.error_code == 301) {
    RootNavigation.navigate('LogoutPage', {isLogout: true})
  } else {
    return res
  }
}

export const checkError = async err => {

  if (err.response) {
    // client received an error response (5xx, 4xx)
    if (err.response.data.status == 402) {
      RootNavigation.navigate('LogoutPage', {isLogout: false})
    } else {
      return err.response.data
    }
  } else if (err.request) {

    return {status: false, message: strings.check_your_net}

    // client never received a response, or request never left
  } else {
    // anything else

    return {status: false, message: strings.check_your_net}
  }
}


export default http;