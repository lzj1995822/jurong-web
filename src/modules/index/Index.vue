<template>
  <div class="index">
    <hd ref="header"></hd>
    <div class="body">
      <router-view></router-view>
    </div>
    <ft></ft>
  </div>
</template>

<script>
  import Header from 'common/components/Header';
  import Footer from 'common/components/Footer';
  import interceptors from 'common/factories/interceptors';

  export default {
    name: 'index',

    data () {
      return {

      };
    },

    components: {
      hd: Header,
      ft: Footer
    },

    beforeMount () {
      interceptors.init();
    },

    mounted () {
      this.init();
    },

    methods: {
      /**
       * 初始化
       */
      init () {
        // 显示顶部导航菜单
        this.$refs.header.showNavigation = true;
        window.hideLoader();
      }
    }
  };
</script>

<style src="assets/less/font-icons/style.css"></style>
<style src="assets/less/style.less"></style>
<style lang="less">
  .api-menus {
    overflow: hidden;
    margin-top: 10px;
    li {
      float: left;
      width: 240px;
      height: 145px;
      background: #fff;
      margin: 0 30px 30px 0;
      text-align: center;
      line-height: 80px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        img {
          margin-top: 15px;
          height: 55px;
        }
        .shadow {
          width: 25px;
          height: 1px;
          margin-top: 7px;
        }
      }
      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        text-decoration: none;
        line-height: initial;
        position: relative;
        color: #666;
      }
      .img-wrap {
        margin: 0 auto;
        height: 95px;
      }
      img {
        margin-top: 20px;
        height: 50px;
        transition: all .2s;
      }
      .shadow {
        width: 30px;
        height: 3px;
        margin: 5px auto 0;
        background: #D1E4EC;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        transition: all .2s;
      }
      .title {
        /*margin-top: 5px;*/
      }
      .price {
        font-size: 12px;
      }
    }
  }
</style>
