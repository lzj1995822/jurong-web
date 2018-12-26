import Vue from 'vue';
import Index from './Index.vue';
import router from './router';
import Modals from 'common/components/modals/index';
import DateFilter from './filters/dateFilter';


// 全局引用jquery
window.$ = require('jquery');
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index },

  beforeMount () {
    // 初始化全局弹框,loader
    Modals.init();
    DateFilter.init();
    window.showLoader();
  },

  mounted () {
    this.init();
  },

  methods: {
    /**
     * 初始化
     */
    init () {
      // 如果没有access_token，返回登录页面
      if (!sessionStorage.getItem('token')) {
        location.href = 'login.html';
        return;
      }
      // 隐藏mask，防止先显示home，再跳到登录页面
      document.getElementById('mask').className = 'hide';
    },

    initModals () {

    }
  }
});
