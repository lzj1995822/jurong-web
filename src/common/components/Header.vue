<template>
  <div class="header">
    <!--<img class="logo fl" src="../../../static/img/logo/logo-black.png">-->
    <span class="title" v-if="showNavigation"></span>
    <navigation v-if="showNavigation"></navigation>
  </div>
</template>


<script>
  import Navigation from 'common/components/Navigation';
  export default {
    name: 'tf-header',
    components: {
      Navigation
    },
    data () {
      return {
        showNavigation: false   // 是否显示顶部导航菜单，默认隐藏
      };
    }
  };
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    height: 100px;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
    background: #fff;
    background: url("/static/img/header/banner.png");
    .logo {
      height: 40px;
      margin: 10px 20px;
    }
    .title {
      display: inline-block;
      border-left: solid 1px #cfcfcf;
      font-size: 16px;
      padding-left: 20px;
      margin-top: 20px;
    }
  }
</style>

