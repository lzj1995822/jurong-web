module.exports = {
  baseUrl: '',           // 服务端地址、域名（生产环境）
  userServerUrl: 'http://47.254.44.188',          // 测试服务器用户相关接口域名地址
  apiServerUrl: 'http://47.254.44.188',         // 测试服务器接口相关域名地址
  userPort: '8088',                               // 用户服务端口号
  apiPort: '8088',                                // api服务端口号
  getApiServiceUrl: function () {              // 获取完整的api服务地址
    return this.apiServerUrl + ':' + this.apiPort + '/';
  }
};
