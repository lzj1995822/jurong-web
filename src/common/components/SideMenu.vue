<template>
  <ul class="side-menu" style="height: calc(100% - 60px);">
    <li v-for="menu in menus" :class="{'active': menu === currentMenu}" @click="changeMenu(menu)">
      <div class="title">
        <!--<img class="fl" :src="'/static/img/menu/' + menu.icon">-->
        <!--<img class="fl" :src="'/static/img/menu/icon-menu-4.png'">-->
        <span>{{menu.title}}</span>
        <i :class="{'icon-angle-right': menu !== currentMenu, 'icon-angle-down': menu === currentMenu}" v-show="menu.children"></i>
      </div>
      <!--<ul class="sub-menus" :style="{'max-height': menu === currentMenu ? ((menu.children && menu.children.length) * 37 - 1 + 'px') : 0}">-->
      <ul class="sub-menus" :style="{'height': menu === currentMenu ? 'initial' : 0}">
        <li v-for="subMenu in menu.children"
            v-if="userfactory.checkUserPermission(subMenu.requiredPermissions)"
            :class="{'active': subMenu === currentSubMenu}"
            @click="changeSubMenu(subMenu)">{{subMenu.title}}</li>
      </ul>
      <!--<div class="separate"></div>-->
    </li>
  </ul>
</template>

<script>
  import menus from 'common/constants/menus';
  import userfactory from 'common/factories/userFactory';
  export default {
    name: 'sideMenu',

    data () {
      return {
        menus,
        currentMenu: {},
        currentSubMenu: {},
        userfactory
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
        for (let i in this.menus) {
          if (this.$route.path.indexOf(this.menus[i].url) > -1) {
            this.currentMenu = this.menus[i];
            if (this.menus[i] && this.menus[i].children) {
              for (let j in this.menus[i].children) {
                if (this.$route.path.indexOf(this.menus[i].children[j].url) > -1) {
                  this.currentSubMenu = this.menus[i].children[j];
                }
              }
            }
          }
        }
      },
      /**
       * 切换一级菜单
       */
      changeMenu (menu) {
        if (this.currentMenu === menu) {
          // this.currentMenu = null;
        } else {
          this.currentMenu = menu;
          // 没有子菜单，直接跳转
          if (!menu.children || menu.children.length === 0) {
            location.replace(location.protocol + '//' + location.host + '/#/' + this.currentMenu.url);
          }
        }
      },
      /**
       * 点击菜单跳转
       */
      changeSubMenu (subMenu) {
        this.currentSubMenu = subMenu;
        location.replace(location.protocol + '//' + location.host + '/#/' + this.currentMenu.url + '/' + subMenu.url);
        event.stopPropagation();  // 阻止事件传播，避免第二次点击子菜单会关闭一级菜单
      }
    }
  };
</script>

<style lang="less">
  .side-menu {
    width: 230px;
    position: fixed;
    top: 100px;
    /*background: #333;*/
    background: #BACAFA;
    margin: 0;
    overflow-y: auto;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      width: 17px;
      height: 17px;
      background-color: transparent;
      border-radius: 9px;
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      background-color: #9fb6e9;
      border-radius: 9px;
      background-clip: content-box;
      border: 5px solid transparent;
    }
    >li {
      /*background: #333333;*/
      background: #BACAFA;
      color: #fff;
      cursor: pointer;
      position: relative;
      /*border-bottom: solid 1px #263844;*/
      &.active {
        .title {
          background: #A9B9ED;
          color: #5D81D2;
          span {
            /*color: #0FB9EF;*/
          }
        }
      }
      .title {
        font-size: 14px;
        font-weight: bold;
        padding: 20px 20px;
        &:hover {
          background: #7993DB;
        }
        img {
          margin: -5px 10px 0 0;
        }
        i {
          float: right;
          margin-right: -5px;
        }
      }
      .sub-menus {
        padding: 0;
        overflow: hidden;
        /*height: 0;*/
        transition: height 300ms;
        li {
          padding: 10px 0 10px 40px;
          position: relative;
          background: #A9B9ED;
          /*background: #283946;*/
          border-bottom: solid 1px #BACAFA;

          &:last-child {
            border-bottom: none;
          }
          &:hover {
            background: #7993DB;
          }
          &:before {
            content: '';
            background-color: #fff;
            width: 3px;
            height: 3px;
            border-radius: 10px;
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle;
          }
          &.active {
            color: #5D81D2;
            &:before {
              background: #5D81D2;
            }
          }
        }
      }
    }
  }
</style>
