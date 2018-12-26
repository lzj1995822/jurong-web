import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main';
import CenterBaseData from '../components/centerManage/CenterBaseData';
import CenterBuild from '../components/centerManage/CenterBuild';
import ActivityManagement from '../components/centerManage/ActivityManagement';
import PublishAnnounce from '../components/centerManage/PublishAnnounce';
import StopBaseData from '../components/stopManage/StopBaseData';
import FeatureBuild from '../components/stopManage/FeatureBuild';
import StopActManage from '../components/stopManage/StopActManage';
import VillageBaseData from '../components/villageManage/VillageBaseData';
import VillageActManage from '../components/villageManage/VillageActManage';
import VolunteerBaseInfo from '../components/VolunteerService/VolunteerBaseInfo';
import VolunteerServiceTeam from '../components/VolunteerService/VolunteerServiceTeam';
import Announce from '../components/Announce';
import SystemConfig from '../components/SystemConfig';
import SystemOperation from '../components/SystemOperation';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QueryMain',
      component: Main,
      redirect: '/center-management/base-data', // 默认跳转到分中心基础数据
      children: [
        {
          path: 'center-management/base-data',     // 分中心基础数据
          name: 'CenterBaseData',
          component: CenterBaseData
        },
        {
          path: 'center-management/center-build',     // 分中心建设
          name: 'CenterBuild',
          component: CenterBuild
        },
        {
          path: 'center-management/activity-management',     // 分中心活动管理
          name: 'ActivityManagement',
          component: ActivityManagement
        },
        {
          path: 'center-management/publish-announce',     // 发布公告
          name: 'PublishAnnounce',
          component: PublishAnnounce
        },
        {
          path: 'stop-management/base-data',     // 所站基础数据
          name: 'StopBaseData',
          component: StopBaseData
        },
        {
          path: 'stop-management/features-build',     // 功能室建设
          name: 'FeatureBuild',
          component: FeatureBuild
        },
        {
          path: 'stop-management/activity-manage',     // 所站活动管理
          name: 'StopActManage',
          component: StopActManage
        },
        {
          path: 'village-management/base-data',     // 村站基础信息管理
          name: 'VillageBaseData',
          component: VillageBaseData
        },
        {
          path: 'village-management/activity-management',     // 村站活动管理
          name: 'VillageActManage',
          component: VillageActManage
        },
        {
          path: 'volunteer-service/base-info',     // 文明实践志愿服务队  基础信息
          name: 'VolunteerBaseInfo',
          component: VolunteerBaseInfo
        },
        {
          path: 'volunteer-service/service-team',     // 文明实践志愿服务队  基础信息
          name: 'VolunteerServiceTeam',
          component: VolunteerServiceTeam
        },
        {
          path: 'announce',     // 通知公告
          name: 'Announce',
          component: Announce
        },
        {
          path: 'system-config',     // 系统配置
          name: 'SystemConfig.',
          component: SystemConfig
        },
        {
          path: 'system-operation',     // 系统运维
          name: 'SystemOperation',
          component: SystemOperation
        }
      ]
    }
    // {
    //   path: '/',
    //   name: '',
    //   component: Main,
    //   redirect: '',
    //   children: []
    // }
  ]
});
