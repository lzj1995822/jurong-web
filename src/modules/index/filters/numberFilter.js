import Vue from 'vue';

export default {
  init () {
    /**
     * 百分比过滤器
     * 输入：0.25
     * 输出：25%
     */
    Vue.filter('percent', (_data, decimal) => {
      if (_data) {
        if (typeof decimal !== 'number') {
          decimal = 1;
        }
        return (_data * 100).toFixed(decimal) + '%';
      } else {
        return '0%';
      }
    });
    /**
     * 保留小数位过滤器
     * 输入：0.253
     * 输出：0.25
     */
    Vue.filter('toFixed', (_data, decimal) => {
      if (typeof _data === 'number') {
        if (typeof decimal !== 'number') {
          decimal = 2;
        }
        return _data.toFixed(decimal);
      } else if (typeof _data === 'string') {
        return _data;
      } else {
        return '';
      }
    });
  }
};







