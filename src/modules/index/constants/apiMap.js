// API信息已经移到数据库，该文件废弃 2017-11-11
module.exports = {
  '/blacklist/company-dishonest': 3,  // 黑名单-企业失信人信息
  '/blacklist/company-executed': 4,   // 黑名单-企业被执行人信息
  '/blacklist/human-dishonest': 17,   // 黑名单-自然人失信人信息查询
  '/blacklist/human-executed': 39,    // 黑名单-自然人被执行人信息查询
  '/blacklist/loan': 71,              // 黑名单-多头借贷
  '/blacklist/risk-list': 82,         // 黑名单-风险名单查询
  '/blacklist/mobile-blacklist': 85,  // 黑名单-手机黑名单查询
  '/identity/basic': 21,              // 身份验证-身份证实名验证
  '/carrier/3factors-verification': 19,        // 运营商-运营商三要素实名验证
  '/unionpay/three-factor': 24,       // 银联数据-银行卡三要素实名验证
  '/unionpay/four-factor': 25,        // 银联数据-银行卡四要素实名验证
  '/carrier/service-status': 45,      // 运营商-手机号码在网状态
  '/carrier/service-duration': 42,    // 运营商-手机号码在网时长
  '/vehicle/traffic-violation': 64,             // 车辆-违章信息查询
  '/enterprise/investment': 9,           // 工商-对外投资
  '/enterprise/summary': 2,              // 工商-企业工商照面信息查询
  '/enterprise/overdue-tax': 5,          // 工商-企业欠税
  '/enterprise/abnormal-operation': 12,  // 工商-企业经营异常查询
  '/enterprise/court-announcement': 6,   // 工商-法院公告信息查询
  '/enterprise/court-session': 7,        // 工商-法院开庭信息查询
  '/enterprise/court-judgement': 8,       // 工商-法院判决信息查询
  '/enterprise/domain': 35,              // 工商-域名信息查询
  '/enterprise/certificate': 36,         // 工商-企业证书信息查询
  '/enterprise/news': 15,                // 工商-企业新闻信息查询
  '/enterprise/court-auction': 13,       // 工商-司法拍卖信息查询
  '/enterprise/patent': 16,              // 工商-专利信息查询
  '/enterprise/list': 48,                // 工商-企业查询
  '/enterprise/detail': 1,               // 工商-企业工商详细信息查询
  '/enterprise/real-time-detail': 41,    // 工商-企业工商详细信息实时查询
  '/enterprise/legal-representative': 10, // 工商-企业法人对外投资&任职查询
  '/enterprise/human': 18,               // 工商-自然人对外投资&任职查询
  '/enterprise/annual-report': 11,       // 工商-企业工商年报查询
  '/enterprise/trademark': 14            // 工商-商标信息查询
  // '/credit/cbank': 30,                   // 征信报告-央行个人简版征信报告
  // '/credit/industry': 57,                // 征信报告-行业情况报告
  // '/credit/individual': 31               // 征信报告-个人互联网信用分析报告

};
