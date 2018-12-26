import axios from 'axios';
import errorMap from 'common/constants/errorMap';

export default {
  init () {
    var accessToken = '', requestCount = 0; // 请求数量计数，用于统一管理加载状态

    // 拦截request请求
    axios.interceptors.request.use((config) => {
      // 显示loading
      window.showLoader();
      requestCount++;  // 请求数量+1
      // 如果没有设置请求类型，默认为form data
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      // 获取access_token
      if (!accessToken) {
        accessToken = sessionStorage.getItem('access_token');
      }
      // 把access_token添加到headers里
      if (accessToken) {
        config.headers['Authorization'] = 'Bearer ' + accessToken;
      }
      // 拼装完整的url
      // config.url = config.url + (accessToken ? (config.url.indexOf('?') > -1 ? '&' : '?') + 'access_token=' + accessToken : '');
      return config;
    }, (error) => {
      // 重置request计数
      requestCount = 0;
      // 隐藏loading
      window.hideLoader();
      return Promise.reject(error);
    });

    // 拦截response返回
    axios.interceptors.response.use(res => {
      if (--requestCount === 0) {  // 如果所有请求都返回了，隐藏loader
        // 隐藏loading
        window.hideLoader();
      }
      return res;
    }, (error) => {
      // 未授权跳转到登录页面
      if (error && error.response && error.response.status === 401) {
        // location.href = 'login.html';
      }
      // 处理定制的常规错误
      if (error.response && error.response.status === 400 && error.response.headers['x-tfapp-error'] && errorMap[error.response.headers['x-tfapp-error'].replace(/\./g, '_')]) {
        window.alert(errorMap[error.response.headers['x-tfapp-error'].replace(/\./g, '_')]);
      }
      if (error && error.response && error.response.status === 403) {
        window.alert(error && error.response && error.response.data.error_description);
      }
      // 重置request计数
      requestCount = 0;
      // 隐藏loading
      window.hideLoader();
      return Promise.reject(error);
    });
  }
};
