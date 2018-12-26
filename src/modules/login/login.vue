<template>
  <div class="login">
    <!--<hd></hd>-->
    <div class="body">
      <div id="wrap" class="wrap" style="margin-top:-60px">
        <canvas id="canvas"></canvas>
        <div class="form">
          <div class="input-wrap">
            <i class="icon-user"></i>
            <input type="text" class="user" placeholder="用户名" v-model="auth.userId"/>
          </div>
          <div class="input-wrap">
            <i class="icon-lock"></i>
            <input type="password" class="pwd" placeholder="密码" v-model="auth.userPwd" @keyup="enterToLogin"/>
          </div>
          <div class="error" v-if="authError">{{errorMessage}}</div>
          <input type="button" class="login-btn" value="登录" @click="login"/>
          <hr>
          <div class="option-wrap">
            <input type="checkbox" id="remember-me" class="pointer" v-model="rememberMe"/>
            <label for="remember-me" class="pointer">记住我</label>
            <a class="fr pointer">注册新账号</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from 'common/components/Header';
  import Footer from 'common/components/Footer';
  import interceptors from 'common/factories/interceptors';
  import loginService from './services/loginService';
  import animateFactory from './factories/animateFactory';
  // import CONFIG from 'common/constants/config';

  export default {
    data () {
      return {
        // 用户名、密码
        auth: {
          userId: 'center',     // 用户名
          userPwd: '123456'      // 密码，写死方便测试
          // client_id: 'webapp',
          // client_secret: 'webapp',
          // grant_type: 'password'
        },
        verifyCode: '',     // 验证码
        // verifyCodeUrl: CONFIG.baseUrl + '/xuan/verifyCode',
        timestamp: (new Date()).getTime(),
        rememberMe: false, // 记住我
        authError: false,  // 用户名、密码错误
        codeError: false,  // 验证码错误
        errorMessage: ''   // 错误信息
      };
    },

    components: {
      hd: Header,
      ft: Footer
    },

    mounted () {
      this.init();
    },

    methods: {
      /**
       * 初始化
       */
      init () {
        var wrap = document.getElementById('wrap');
        // 显示背景动画
        animateFactory.start(wrap.offsetWidth, wrap.offsetHeight);
        // 初始化拦截器
        interceptors.init();
        // 清除缓存的token
        sessionStorage.removeItem('token');
        // this.auth.userId = localStorage.getItem('user_name');
        // this.rememberMe = JSON.parse(localStorage.getItem('remember_me'));
      },
      /**
       * 登录方法
       */
      login () {
        // if (!this._validate()) {
        //   return;
        // }
        // 验证验证码
        // TODO 暂时注释验证码逻辑
//        loginService.verifyCode(this.verifyCode)
//        .then((res) => {
//          if (res.status === 200 && res.data === '验证码正确') {
            // 登录请求
            loginService.authenticate(this.auth)
            .then((res) => {
              if (res && res.status === 200) {
                // 登录成功后保存access_token
                // sessionStorage.setItem('access_token', res.data.access_token);
                // $.cookie('token', res.data.content.token, { expires: 30, path: '/' });
                // $.cookie('userType', res.data.content.userType, { expires: 30, path: '/' });
                sessionStorage.setItem('token', res.data && res.data.content && res.data.content.token);
                sessionStorage.setItem('userType', res.data && res.data.content && res.data.content.userType);
                location.href = '/#/home';
                // 记住我功能
                // if (this.rememberMe) {
                //   localStorage.setItem('user_name', this.auth.username);
                //   localStorage.setItem('remember_me', this.rememberMe);
                // } else {
                //   localStorage.removeItem('user_name');
                //   localStorage.removeItem('remember_me');
                // }
              } else {
                this.errorMessage = res.data.message;
              }
            });
      },
      /**
       * 回车登录
       */
      enterToLogin (event) {
        if (event.keyCode === 13) {
          this.login();
        }
      },
      /**
       * 刷新验证码
       */
      refreshVerifyCode () {
        this.timestamp = (new Date()).getTime();
      }
      /**
       * 记住我
       */
//      rememberMeFun () {
//        this.rememberMe = !this.rememberMe;
//      },
      /**
       * 验证表单
       */
//       _validate () {
//         this.authError = false;
//         this.codeError = false;
//         var result = true;
//         if (!this.auth.username || !this.auth.password) {
//           this.authError = true;
//           result = false;
//         }
//         // TODO 暂时注释验证码逻辑
// //        if (!this.verifyCode) {
// //          this.codeError = true;
// //          result = false;
// //        }
//         return result;
//       }
    }
  };
</script>

<style src="assets/less/font-icons/style.css"></style>
<style src="assets/less/style.less"></style>
<style lang="less" scoped>
  @import '../../assets/less/variables.less';
  .login {
    color: #fff;
    //background-color: #3D3D3D;
    .body {
      width: initial;
    }
    .wrap {
      width: 100%;
      min-height: 500px;
      background: url('/static/img/login-bg.png');
      background-size: cover;
      text-align: center;
      padding: 140px 0;
      &>div {
        text-align: initial;
        width: 600px;
        display: inline-block;
      }
      canvas {
        position: absolute;
        top: 60px;
        left: 0;
      }
      .slogan {
        font-size: 48px;
        line-height: 1.8;
        font-family: @defaultFontFamily;
        font-weight: 100;
        letter-spacing: 2px;
        vertical-align: middle;
        color:#f1f1f1;
        position: absolute;
        left: 150px;
        top: 145px;
        span {
          margin-left: 7px;
          margin-top: 45px;
        }
        .word {
          font-size: 30px;
        }
      }
      span{
        font-size:24px;
        position:absolute;
        top:135px;
        margin-left:50px;
      }
      input[type="text"],
      input[type="password"] {
        -webkit-box-shadow:  1px  1px 1px rgba(0,0,0,.075);
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,.075);
      }
      .form {
        /*background: rgba(255, 255, 255, 0.2);*/
        background: #fff;
        width: 310px;
        padding: 40px 25px 50px;
        /*margin-left: 665px;*/
        font-size: 14px;
        vertical-align: middle;
        border-radius: 2%;
        position: absolute;
        right: 180px;
        .input-wrap {
          position: relative;
          margin-top: 20px;
          i {
            position: absolute;
            top: 12px;
            left: 10px;
            color: #999;
          }
          input[type="text"],
          input[type="password"] {
            width: 275px;
            height: 34px;
            padding: 0 10px 0 25px;
            border: 1px solid #cccccc;
            outline: none;
          }
        }
        .code-wrap {
          margin-top: 20px;
          input {
            width: 100px;
            height: 34px;
            padding: 0 10px;
            margin-right: 60px;
          }
          img {
            vertical-align: middle;
            margin-right: 10px;
          }
          div {
            cursor: pointer;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .login-btn {
          width: 310px;
          height: 35px;
          background: #1d94d4;
          border: none;
          cursor: pointer;
          color: #fff;
          margin-top: 20px;
          border-radius: 2%;
          &:hover {
            background: #1d94d4;
          }
        }
        hr {
          margin: 20px 0 10px;
        }
        .option-wrap {
          input {
            vertical-align: middle;
          }
          label,
          a {
            color: #333;
          }
        }
        .error {
          margin-top: 10px;
        }
      }
    }
    .info {
      overflow: hidden;
      font-size: 14px;
      text-align: center;
      background: #e6e6e6;
      &>div {
        padding: 20px;
        text-align: initial;
        display: inline-block;
        color:#666666;
      }
      .about {
        width: 30%;
        p {
          line-height: 2;
        }
      }
      .connect {
        width: 30%;
        span{
          margin-left: 20px;
        }
        ul {
          padding: 0;
          li {
            margin: 20px 20px 5px;
            &::before {
              margin-right: 5px;
            }
          }
        }
      }
      .qr-code {
        width: 135px;
        img {
          width: 130px;
          margin-top: 15px;
        }
      }
    }
  }
</style>
