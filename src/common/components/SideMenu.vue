<template>
  <ul class="side-menu" style="height:calc(100% - 60px)">
    <li v-for="menu in menus"  @click="directTo(menu.url)" :class="{'active': menu.url === currentUrl}">
      <!--<img class="fl" :src="'/static/img/menu/' + menu.icon">-->
      <img class="fl" :src="menu.url === currentUrl ? '/static/img/menu/' + menu.iconHover: '/static/img/menu/' + menu.icon ">
      <span class="fl ellipsis title">{{menu.title}}</span>
      <span class="fl ellipsis" :title="menu.desc">{{menu.desc}}</span>
      <!--<div class="separate"></div>-->
    </li>
  </ul>
</template>

<script>
  import menus from 'common/constants/menus';

  export default {
    name: 'sideMenu',

    data () {
      return {
        menus,
        currentUrl: ''
      };
    },

    mounted () {
      this.init();
    },

    methods: {
      init () {
        // 菜单active状态，只对index模块生效
        if (location.pathname === '/') {
          this.currentUrl = menus && menus.length && menus[0].url;
        }
      },
      /**
       * 点击菜单跳转
       */
      directTo (url) {
        this.currentUrl = url;
        location.replace(location.protocol + '//' + location.host + '#/' + url);
      }
    }
  };
</script>

<style lang="less">
  .side-menu {
    width: 210px;
    position: fixed;
    top: 100px;
    background: #A4B1E7;
    height: 100%;
    margin: 0;
    overflow-y: auto;
    li {
      height: 68px;
      color: #fff;
      cursor: pointer;
      position: relative;
      &:hover {
        /*background: #1f3a4d;*/
      }
      &.active {
        background: rgba(189, 203, 245, .2);
        color: #5e8df7;
        &::before {
          content: '';
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-right-color: #F5F9FC;
          position: absolute;
          right: -1px;
          top: 25px;
        }
        li{
          color:#5e8df7;
        }
      }
      img {
        vertical-align: middle;
        margin: 18px 20px;
        width: 28px;
        height:28px;
      }
      span {
        display: inline-block;
        width: 120px;
        font-size: 12px;
        &.title {
          margin-top: 18px;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 3px;
        }
      }
      .separate {
        position: absolute;
        width: 84%;
        height: 1px;
        bottom: 0;
        background: #263844;
        margin-left: 7%;
      }
    }
  }
</style>
