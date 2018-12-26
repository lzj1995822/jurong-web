<template>
  <div class="breadcrumbs">
    <img src="/static/img/icon-location.png">
    <span>当前位置：</span>
    <ul>
      <li v-for="(nav, index) in navigators" :class="{'icon-angle-right': index > 0}">
        <a :href="'#/' + nav.url">{{nav.title}}</a>
        <!--<a @click="directTo(nav.url)">{{nav.title}}</a>-->
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import menus from 'common/constants/menus';
  import navigations from 'common/constants/navigations';

  const allMenus = menus.concat(navigations);

  export default {
    name: 'breadcrumbs',

    data () {
      return {
        paths: [],
        navigators: [],
        i: 0
      };
    },

    mounted () {
      this.paths = this.$route.path.substring(1).split('/');
      this._initBreadcrumbs(allMenus);
      this.navigators.unshift({title: '首页', url: 'home'});
    },

    methods: {
      /**
       * 初始化面包屑导航栏
       */
      _initBreadcrumbs (menus) {
        for (var j = 0; j < menus.length; j++) {
          if (menus[j].url === this.paths[this.i]) {
            this.navigators.push({
              title: menus[j].title,
              url: this.i > 0 ? this.navigators[this.i - 1].url + '/' + menus[j].url : menus[j].url
            });
            if (++this.i < this.paths.length && menus[j].children) {
              this._initBreadcrumbs(menus[j].children);
            }
          }
        }
      },
      /**
       * 点击菜单跳转（已弃用）
       */
      directTo (url) {
//        location.replace(location.protocol + '//' + location.host + '#/' + url);
        location.replace(location.origin + (url === 'home' ? '' : location.pathname) + '#/' + url);
      }
    },

    watch: {
      '$route' (to, from) {
        this.i = 0;
        this.navigators.length = 0;
//        this.navigators.push({title: '首页', url: 'home'});
        this.paths = to.path.substring(1).split('/');
        this._initBreadcrumbs(allMenus);
        this.navigators.unshift({title: '首页', url: 'home'});
        scrollTo(0, 0);     // 切换路由，滚动条滚动到顶端
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../../assets/less/variables.less';
  .breadcrumbs {
    padding-left: 35px;
    background: #EDF0FA !important;
    position: fixed;
    width: 100%;
    left: 212px;
    top:100px;
    z-index: 5;
    line-height: 34px;
    img {
      width: 18px;
      vertical-align: middle;
      margin-right: 3px;
    }
    ul {
      display: inline-block;
      padding-left: 0;
      margin: 0;
      li {
        display: inline-block;
        &:before {
          margin: 0 5px;
        }
        a {
          text-decoration: none;
          color: initial;
          font-family: @defaultFontFamily;
          &:hover {
            color: @themeColor;
          }
        }
      }
    }
  }
</style>
