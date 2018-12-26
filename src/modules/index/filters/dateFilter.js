import Vue from 'vue';

export default {
  init () {
    /**
     * 日期过滤器
     * 输入：2017-10-25T16:24:23
     * 输出：2017-10-25
     */
    Vue.filter('date', (_date) => {
      if (_date) {
        return _date.replace(/T.*/, '');
      }
      return _date;
    });

    /**
     * 日期过滤器
     * 输入：2017-10-25T16:24:23
     * 输出：2017-10-25 16:24:23
     */
    Vue.filter('dateTime', (_date) => {
      if (_date) {
        return _date.replace('T', ' ');
      }
      return _date;
    });
  }
};







