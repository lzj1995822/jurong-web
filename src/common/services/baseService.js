import axios from 'axios';
import CONFIG from 'common/constants/config';
import TfUrlSearchParams from 'common/factories/TfUrlSearchParams';

export default {
  /**
   * Http get request, default request data format is form data
   * @param conf: url
   * @param conf: params
   * @returns {Promise}
   */
  format (params) {
    if (params) {
      var reg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])(\s([0-1]\d|2[0-3]):[0-5]\d)?$/;
      for (let i in params) {
          // 格式化日期格式
        if (i === 'startDate' && params[i].indexOf('T') === -1) {
            if (params[i].indexOf(' ') > -1) {                // 带时分
              params[i] = params[i].replace(' ', 'T') + ':00';
            } else {                                          // 不带时分
              params[i] += 'T00:00:00';
            }
          }
        if (i === 'endDate' && params[i].indexOf('T') === -1) {
            if (params[i].indexOf(' ') > -1) {                // 带时分
              params[i] = params[i].replace(' ', 'T') + ':59';
            } else {                                         // 不带时分
              params[i] += 'T23:59:59';
            }
          }
        if (reg.test(params[i])) {
          if (params[i].indexOf(' ') > -1) {                // 带时分
            params[i] = params[i].replace(' ', 'T') + ':00';
          } else {                                          // 不带时分
            params[i] += 'T00:00:00';
          }
        }
      }
    }
    return params;
  },
  get (url, params) {
    this.format(params);
    var urlSearchParams = new TfUrlSearchParams(), i;
    // 重新组装参数为form data格式
    for (i in params) {
      if (typeof params[i] === 'boolean' || typeof params[i] === 'number' || params[i]) {
        urlSearchParams.append(i, params[i]);
      }
    }
    return new Promise((resolve, reject) => {
      axios.get(CONFIG.baseUrl + url + (params ? '?' + urlSearchParams.toString() : ''))
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    });
  },

  /**
   * Http post request, default request data format is form data
   * @param conf: url, params
   * @returns {Promise}
   */
  post (url, params) {
    this.format(params);
    var urlSearchParams = new TfUrlSearchParams(), i;

    // 重新组装参数为form data格式
    for (i in params) {
      if (typeof params[i] === 'boolean' || typeof params[i] === 'number' || params[i]) {
        urlSearchParams.append(i, params[i]);
      }
    }
    return new Promise((resolve, reject) => {
      axios.post(CONFIG.baseUrl + url, urlSearchParams.toString())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    });
  },

  /**
   * Http post request, request data format is json
   * @param url
   * @param data
   * @returns {Promise}
   */
  postJson (url, data) {
    this.format(data);
    return new Promise((resolve, reject) => {
      axios.post(CONFIG.baseUrl + url, data, {headers: {'Content-Type': 'application/json;charset=UTF-8', post: {'Content-Type': 'application/json;charset=UTF-8'}}})
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  },

  /**
   * Http put request, request data format is json
   * @param url
   * @param data
   * @returns {Promise}
   */
  putJson (url, data) {
    this.format(data);
    return new Promise((resolve, reject) => {
      axios.put(CONFIG.baseUrl + url, data, {headers: {'Content-Type': 'application/json;charset=UTF-8', post: {'Content-Type': 'application/json;charset=UTF-8'}}})
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  },

  /**
   * Http post request, default request data format is form data
   * @param conf: url, params
   * @returns {Promise}
   */
  delete (url, params) {
    var urlSearchParams = new TfUrlSearchParams(), i;
    // 重新组装参数为form data格式
    for (i in params) {
      if (typeof params[i] === 'boolean' || typeof params[i] === 'number' || params[i]) {
        urlSearchParams.append(i, params[i]);
      }
    }

    return new Promise((resolve, reject) => {
      axios.delete(CONFIG.baseUrl + url, urlSearchParams.toString())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    });
  },

  /**
   * export
   * @param url: 接口路径
   * @param params : 参数
   * @params name：名称
   * @params type ： 导出类型
   *    type :
   *        zip:压缩包
   *        xls:excel表格
   * */
  getExport (url, params, name, type) {
    window.showLoader();
    var xhr = new XMLHttpRequest(),
      urlSearchParams = new TfUrlSearchParams(), i;
    // 重新组装参数为form data格式
    for (i in params) {
      urlSearchParams.append(i, params[i]);
    }
    xhr.open('get', CONFIG.baseUrl + url + '?' + urlSearchParams.toString(), true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'));
    xhr.responseType = 'arraybuffer';

    xhr.onload = function () {
      window.hideLoader();
      var blob = new Blob([xhr.response], {type: 'application/vnd.ms-excel'}),
      objectUrl = URL.createObjectURL(blob),
      aForDownload = window.$('<a><span class="forDownload">下载</span></a>').attr('href', objectUrl).attr('download', name + '.' + type);
      window.$('body').append(aForDownload);
      window.$('.forDownload').click();
      aForDownload.remove();
    };
    xhr.send();
  }
};
