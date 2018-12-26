import Vue from 'vue';
import Login from './Login.vue';
import Modals from 'common/components/modals/index';
// import Resource from 'vue-resource'

// Vue.use(Resource)

new Vue({
  el: '#app',
  template: '<Login/>',
  components: { Login },

  beforeMount () {
    // 初始化全局弹框,loader
    Modals.init();
    // window.showLoader();
  }
});
