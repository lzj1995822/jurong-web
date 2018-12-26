import axios from 'axios';
import TfUrlSearchParams from 'common/factories/TfUrlSearchParams';

export default {
  /**
   * 登录认证
   */
  authenticate (auth) {
    var params = new TfUrlSearchParams(),
      i;
    for (i in auth) {
      params.append(i, auth[i]);
    }
    return new Promise((resolve, reject) => {
      axios.post('http://47.254.44.188:8088/userLogin?' + params.toString())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

};
