import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Center from '../components/sideMenu/Center';
import Activity from '../components/sideMenu/Activity';
import Stop from '../components/sideMenu/Stop';
import ActivityManage from '../components/sideMenu/ActivityManage';
import SpecialActivity from '../components/sideMenu/specialActivity/SpecialActivity';
import Notice from '../components/sideMenu/Notice';
import System from '../components/sideMenu/System';
// import Center from '../components/sideMenu/Center';
Vue.use(Router);

export default new Router({
  routes: [
    // API调用
    {
      path: '/',
      name: 'QueryMain',
      component: Main,
      redirect: '/home', // 默认跳转到首页
      children: [
        {
          path: 'home',     // 首页
          name: 'Home',
          component: Home
        },
        {
          path: 'center',     // 分中心建设
          name: 'Center',
          component: Center
        },
        {
          path: 'activity',     // 文明实践
          name: 'Activity',
          component: Activity
        },
        {
          path: 'stop',     // 所站建设
          name: 'Stop',
          component: Stop
        },
        {
          path: 'activity-management',     // 活动管理
          name: 'ActivityManage',
          component: ActivityManage
        },
        {
          path: 'special-activity',     // 特色活动
          name: 'SpecialActivity',
          component: SpecialActivity
        },
        {
          path: 'notice',     // 通知公告
          name: 'Notice',
          component: Notice
        },
        {
          path: 'system',     // 系统设置
          name: 'System',
          component: System
        }
      ]
    }
  ]
});
