<template>
  <div class="sub-menu">
    <ul class="api-menus">
      <li v-for="sm in subMenus">
        <a :href="'#/' + menu.url + '/' + sm.url">
          <div class="img-wrap">
            <img :src="'/static/img/api/' + sm.icon">
            <div class="shadow"></div>
          </div>
          <div class="title">{{sm.title}}</div>
          <div class="price" v-show="sm.subPrices && sm.subPrices.length == 0">￥{{sm.price}}/次</div>
          <!--<div class="price" v-show="subPrices instanceof Array">￥{{sm.price}}/次</div>-->
          <!--处理特殊情况 多个价格的-->
          <!--<div class="price" v-show="!(subPrices instanceof Array) && sm.priceApiId === '122'">￥{{sm.price}}/次</div>-->
          <div class="price" v-show="sm.subPrices && sm.subPrices.length > 0" v-for="(value,key) in sm.subPrices">
            {{handleApiDisplayName(value.apiDisplayName)}} : ￥{{value.price}}/次
            <!--<div class="price" v-show="key === sm.url">-->
              <!--<div class="price" v-for="v in value">{{handleApiDisplayName(v.apiDisplayName)}}: ￥{{v.price}}/次</div>-->
            <!--</div>-->
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import menus from 'common/constants/menus';
  import apiService from '../services/apiService';

  export default {
    name: 'sub-menus',

    data () {
      return {
        menu: {},
        subMenus: [],     // 侧边栏的menu
        // subPrices: [],    // 有多个价格的接口价格
        prices: [],
        orgId: null
      };
    },

    mounted () {
      // this.orgId = JSON.parse(sessionStorage.getItem('user')).orgId;
      // this._initSubMenus();
    },

    methods: {
      /**
       * 根据menu type初始化sub menus
       */
      _initSubMenus () {
        var menuType = this.$route.params.menuType,
          i;
        for (i in menus) {
          if (menus[i].url === menuType) {
            this.menu = menus[i];
            this.subMenus = menus[i].children;
            break;
          }
        }
        // 获取页面所有接口的价格
        if (!sessionStorage.getItem('allPrices')) {
          apiService.getMenusApiPrices({page: 0, size: 1000, orgId: this.orgId, type: 'ALL'})
            .then(res => {
              sessionStorage.setItem('allPrices', JSON.stringify(res.data));
            });
        }
        this.prices = JSON.parse(sessionStorage.getItem('allPrices'));
        this.handleSubMenusPrice(this.subMenus);
      },
      /**
       * 处理 price
       * */
      handleSubMenusPrice (subMenus) {
        for (let i in subMenus) {
          subMenus[i].subPrices = [];
          for (let j in this.prices) {
            // if (this.prices[j].orgId === null) {
              if ((subMenus[i].priceApiId && this.prices[j].apiId === Number(subMenus[i].priceApiId)) || (this.prices[j].apiId === Number(subMenus[i].url))) {
                subMenus[i].price = this.prices[j].price;
                // subMenus[i].title = this.prices[j].apiDisplayName;
              }
              if (this.prices[j].routerApiId && this.prices[j].routerApiId === Number(subMenus[i].url)) {
                subMenus[i].subPrices.push(this.prices[j]);
                // this.subPrices.push(this.prices[j]);
              }
            // }
          }
        }
        // this.subPrices = this.handlePrices(this.subPrices);
      },
      /**
       * 处理价格
      */
      handlePrices (prices) {
        if (prices.length > 0) {
          var json = {};
          prices.forEach(function (v) {
            if (json[v.routerApiId]) {
              json[v.routerApiId].push(v);
            } else {
              json[v.routerApiId] = [v];
            }
          });
          return json;
        }
        return [];
      },
      /*
      * 处理展示价格类型（移动，电信，联通）
      * */
      handleApiDisplayName (name) {
        if (!name) {
          return;
        }
        if (name.indexOf('联通') > -1) {
          return '联通';
        } else if (name.indexOf('电信') > -1) {
          return '电信';
        } else if (name.indexOf('移动') > -1) {
          return '移动';
        }
        return name;
      }
    },

    watch: {
      /**
       * 监听路由变化，切换子菜单
       */
      '$route' (to, from) {
        this._initSubMenus();
      }
    }
  };
</script>

<style lang="less" scoped>
  .sub-menu {
    padding: 0 !important;
    background: initial !important;
    .api-menus{
      li{
        height:170px;
      }
    }
  }
</style>
