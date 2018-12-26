import baseService from 'common/services/baseService';
import CONFIG from 'common/constants/config';

export default {
  /**
   * 查询分中心数据
   * */
    getCenterData () {
      return new Promise((resolve, reject) => {
        baseService.postJson(CONFIG.getApiServiceUrl() + 'queryCenter')
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    /**
     * 查询实践所数据
     * */
    getTownData () {
      return new Promise((resolve, reject) => {
        baseService.postJson(CONFIG.getApiServiceUrl() + 'queryTown')
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
  /**
   * 根据实践所查询实践点数据
   * */
    getCountryDataByTownId (id) {
    return new Promise((resolve, reject) => {
      baseService.postJson(CONFIG.getApiServiceUrl() + 'queryCountryByTownId?townId=' + id)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
    },
  /**
   * 查询特色活动
   * */
  getSpecialActivity (params) {
    let param = '';
    for (let i in params) {
      param += i + '=' + params[i] + '&&';
    }
    param = param.slice(0, param.lastIndexOf('&&'));
    return new Promise((resolve, reject) => {
      baseService.postJson(CONFIG.getApiServiceUrl() + 'queryFeatureForFront?' + param)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 查询特色活动详情
   * */
  getSpecialActivityDetail (id) {
    return new Promise((resolve, reject) => {
      baseService.postJson(CONFIG.getApiServiceUrl() + 'querySingleFeature?resultId=' + id)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
