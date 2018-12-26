<template>
  <div class="wrap">
    <ul class="navigation">
      <!--<li v-for="(item, index) in navigations">-->
        <!--<span>{{item.title}}</span>-->
        <!--<ul class="hide">-->
          <!--<li v-for="sub in item.children">-->
            <!--<a @click="directTo(item.url, sub.url)">{{sub.title}}</a>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</li>-->
      <li class="logout">
        <img src="/static/img/header/login-out.png" alt="" @click="logout">
      </li>
      <li>
        <img class="fl avatar" src="/static/img/avatar.png">
        <span class="fl name">admin</span>
        <ul class="hide">
          <li>
            <span>最近登录</span>
          </li>
          <li>
            <span>2018-11-11</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import navigations from 'common/constants/navigations';
  import userFactory from '../factories/userFactory';

  export default {
    name: 'navigation',
    data () {
      return {
        navigations,
        user: {},
        userFactory
      };
    },
    components: {

    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        this.user = JSON.parse(sessionStorage.getItem('user'));
      },
      /**
       * 点击菜单跳转
       */
      directTo (parentUrl, childUrl) {
        if (childUrl === 'logout') {
          this.logout();
          return;
        }
        location.replace(location.protocol + '//' + location.host + '/#/' + parentUrl + '/' + childUrl);
      },
      /**
       * 退出
       */
      logout () {
        location.replace(location.protocol + '//' + location.host + '/login.html');
      }
      /**
       * 检测用户是否有权限
       */
//      checkPermissions (requiredPermissions) {
//        var result = false, i, j;
//        if (!requiredPermissions || requiredPermissions.length === 0) {
//          result = true;
//        } else {
//          for (i in requiredPermissions) {
//            for (j in this.user.authorities) {
//              if (requiredPermissions[i] === this.user.authorities[j]) {
//                result = true;
//                break;
//              }
//            }
//          }
//        }
//        return result;
//      }
    }
  };
</script>

<style lang="less" scoped>
  .wrap {
    color: #666;
    display: inline-block;
    float: right;
    padding: 0 20px 0;
    .navigation {
      margin: 0;
      display: table;
      height: 100px;
      .logout{
        cursor: pointer;
      }
      &>li {
        margin-left: 10px;
        position: relative;
        display: table-cell;
        vertical-align: middle;
        padding: 0 10px;
        .search {
          width: 220px;
          height: 32px;
          background: #F6F6F6;
          border-radius: 20px;
          margin-right: 20px;
          &:before {
            margin-left: 10px;
          }
          input {
            height: 30px;
            width: 180px;
            border: none;
            outline: none;
            background: transparent;
            padding: 0 5px;
          }
        }
        .avatar {
          width: 32px;
        }
        .name {
          padding: 10px 0 0 10px;
        }
        .border-right {
          border-right: solid 1px #ccc;
          padding-right: 15px;
        }
        &>ul {
          position: absolute;
          white-space: nowrap;
          padding-top: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          top: 75px;
          background: #B4BADC;
          li {
            padding: 5px 10px;
            cursor: pointer;
            color:#fff;
            &:hover {
              /*background: #eee;*/
              /*color:#fff;*/
              background: #fff;
              color:#B4BADC;
            }
            a {
              color: #666;
              text-decoration: none;
            }
          }
        }
        &:hover {
          &>ul {
            display: block;
          }
        }
      }
    }
  }
</style>
