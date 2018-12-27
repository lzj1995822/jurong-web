module.exports = [
  // 分中心管理
  {
    url: 'center-management',
    title: '分中心管理',
    // icon: 'icon-menu-5.png',
    requirePermissions: [],
    children: [
      {
        title: '分中心基础数据',
        url: 'base-data',
        requiredPermissions: []
      },
      {
        title: '分中心建设',
        url: 'center-build',
        requiredPermissions: []
      },
      {
        title: '分中心活动管理',
        url: 'activity-management',
        requiredPermissions: []
      },
      {
        title: '发布公告',
        url: 'publish-announce',
        requiredPermissions: []
      }
    ]
  },
  // 所站管理
  {
    url: 'stop-management',
    title: '所站管理',
    // icon: 'icon-menu-5.png',
    requirePermissions: [],
    children: [
      {
        title: '所站基础数据',
        url: 'base-data',
        requiredPermissions: []
      },
      {
        title: '功能室建设',
        url: 'features-build',
        requiredPermissions: []
      },
      {
        title: '所站活动管理',
        url: 'activity-manage',
        requiredPermissions: []
      }
    ]
  },
  // 决策引擎规则集
  {
    url: 'village-management',
    title: '村站管理',
    // icon: 'icon-menu-5.png',
    requirePermissions: [],
    children: [
      {
        title: '村站基础信息管理',
        url: 'base-data',
        requiredPermissions: []
      },
      {
        title: '村站活动管理',
        url: 'activity-management',
        requiredPermissions: []
      }
    ]
  },
  {
    url: 'volunteer-service',
    title: '文明实践志愿服务队',
    // icon: 'icon-menu-5.png',
    requirePermissions: [],
    children: [
      {
        title: '基础信息',
        url: 'base-info',
        requiredPermissions: []
      },
      {
        title: '服务队伍',
        url: 'service-team',
        requiredPermissions: []
      }
    ]
  },
  {
    url: 'announce',
    title: '通知公告',
    // icon: 'icon-menu-5.png',
    requirePermissions: []
    // children: [
    //   {
    //     title: '通知公告',
    //     url: '',
    //     requiredPermissions: []
    //   }
    // ]
  },
  {
    url: 'system-config',
    title: '系统配置',
    // icon: 'icon-menu-5.png',
    requirePermissions: []
  },
  {
    url: 'system-operation',
    title: '系统运维',
    // icon: 'icon-menu-5.png',
    requirePermissions: []
  }
];
