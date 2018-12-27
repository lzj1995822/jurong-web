<template>
  <div class="main">
    <side-menu></side-menu>
    <breadcrumbs></breadcrumbs>
    <!--<top-title></top-title>-->
    <div class="wrap">
      <container-header>qweqw</container-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Breadcrumbs from 'common/components/Breadcrumbs';
  import SideMenu from 'common/components/SideMenu';
  import TopTitle from 'common/components/TopTitle';
  import ContainerHeader from './sideMenu/public/ContainerHeader';
  export default {
    name: 'tf-main',

    data () {
      return {

      };
    },

    components: {
      TopTitle,
      Breadcrumbs,
      SideMenu,
      ContainerHeader
    }
  };
</script>

<style lang="less" scoped>
  .main {
    margin-top:20px;
    .wrap {
      padding: 60px 20px 20px 245px;
      &>div {
        background: #fff;
        padding: 20px;
      }
    }
  }
</style>
