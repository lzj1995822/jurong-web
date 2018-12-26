import Vue from 'Vue';
import AlertModal from './AlertModal';
import LoaderModal from './LoaderModal';

var AlertConstructor = Vue.extend(AlertModal),
    LoaderConstructor = Vue.extend(LoaderModal),
    alertVm,
    loaderVm;

export default {
  init () {
    this.initAlert();
    this.initLoader();
  },
  /**
   * 初始化alert弹框（单例）
   */
  initAlert () {
    window.alert = (msg, onCallBack) => {
      if (alertVm) {
        alertVm.msg = msg;
        alertVm.open = true;
      } else {
        alertVm = new AlertConstructor().$mount();
        alertVm.msg = msg;
        alertVm.$on('ok', () => {
          alertVm.open = false;
          typeof onCallBack === 'function' && onCallBack();
        });
        alertVm.open = true;
        document.body.appendChild(alertVm.$el);
      }
    };
  },
  /**
   * 初始化loader（单例）
   */
  initLoader () {
    // 显示进度条
    window.showLoader = () => {
      if (loaderVm) {
        loaderVm.show = true;
      } else {
        loaderVm = new LoaderConstructor().$mount();
        loaderVm.show = true;
        document.body.appendChild(loaderVm.$el);
      }
    };
    // 隐藏进度条
    window.hideLoader = () => {
      loaderVm.show = false;
    };
  }
};
