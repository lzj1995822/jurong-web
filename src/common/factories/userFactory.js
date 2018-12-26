var user;

export default {
  /**
   * 设置用户数据
   */
  setUser (_user) {
    user = _user;
  },
  /**
   * 返回用户数据
   */
  getUser () {
    if (!user) {
      this.setUser(JSON.parse(sessionStorage.getItem('user')));
    }
    return user;
  },
  /**
   * 检测用户权限
   */
  checkUserPermission (permissions) {
    var result = false,
      requiredPermissions,
      i,
      j,
      _user = this.getUser();
    if (typeof permissions === 'string') {
      // 参数是一个权限，即字符串
      requiredPermissions = [];
      requiredPermissions.push(permissions);
    } else {
      // 参数是一个权限数组，即字符串数组
      requiredPermissions = permissions;
    }
    if (!requiredPermissions || requiredPermissions.length === 0) {
      result = true;
    } else {
      for (i in requiredPermissions) {
        for (j in _user.authorities) {
          if (requiredPermissions[i] === _user.authorities[j]) {
            result = true;
            break;
          }
        }
      }
    }
    return result;
  }
};
