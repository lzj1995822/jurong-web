<template>
  <div class="main">
    <side-menu></side-menu>
    <breadcrumbs></breadcrumbs>
    <!--<top-title></top-title>-->
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Breadcrumbs from 'common/components/Breadcrumbs';
  import SideMenu from 'common/components/SideMenu';
  import TopTitle from 'common/components/TopTitle';

  export default {
    name: 'tf-main',

    data () {
      return {

      };
    },

    components: {
      TopTitle,
      Breadcrumbs,
      SideMenu
    }
  };
</script>

<style lang="less" scoped>
  .main {
    margin-top:20px;
    .wrap {
      padding: 70px 20px 20px 280px;
      &>div {
        background: #fff;
        padding: 20px;
      }
    }
  }
</style>
