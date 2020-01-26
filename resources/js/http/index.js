import 'nprogress/nprogress.css';
import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const instance = axios.create({
  baseURL: location.origin + '/api'
});

instance.interceptors.request.use(config => {
  NProgress.start();
  return config;
})

instance.interceptors.response.use(response => {
  NProgress.done();
  return response;
})

export default instance;