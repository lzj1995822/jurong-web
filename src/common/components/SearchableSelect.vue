  <template>
  <div class="searchable-select">
    <div class="value" @click="toggleList">
      <span v-if="!editable">{{selectedOption[displayKey] || defaultValue}}</span>
      <input v-if="editable" type="text" :value="selectedOption[displayKey] || defaultValue" @keyup="inputItem"/>
      <!--<i class="fr icon-caret-down"></i>-->
    </div>
    <div class="options-wrap" v-show="showList">
      <div class="div-bor">
        <i class="icon-search"></i>
        <input type="text" v-model="keyword">
      </div>
      <ul>
        <li v-for="option in options" v-show="option[displayKey].indexOf(keyword) > -1" :value="option[valueKey]" @click="selectItem(option)">{{option[displayKey]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchableSelect',

    props: ['options', 'displayKey', 'valueKey', 'editable', 'defaultValue'],

    data () {
      return {
        showList: false,
        keyword: '',
        selectedOption: {}
      };
    },

    mounted () {
      this._initEventListeners();
    },

    methods: {
      toggleList () {
        this.showList = !this.showList;
        this.keyword = '';
      },
      /**
       * 选择
       */
      selectItem (option) {
        this.$emit('input', option[this.valueKey]);
        this.showList = false;
        this.selectedOption = option;
        this.keyword = '';
      },
      /**
       * 输入值时广播触发v-model
       */
      inputItem (e) {
        this.$emit('input', e.target.value);
      },
      /**
       * 初始化事件监听
       */
      _initEventListeners () {
        var self = this;
        // 监听本组件点击，阻止事件冒泡，防止误关闭下拉列表
        this.$el.addEventListener('click', event => {
          event.stopPropagation();
        });

        // 监听全局点击关闭下拉列表
        document.addEventListener('click', event => {
          self.showList = false;
          self.keyword = '';
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .searchable-select {
    display: inline-block;
    vertical-align: middle;
    width: 245px;
    height: 30px;
    position: relative;
    .value {
      display: inline-block;
      width: 230px;
      min-height: 30px;
      border: solid 1px #ddd;
      cursor: pointer;
      padding: 0 7px;
      span {
        display: inline-block;
        padding: 7px 0;
      }
      input {
        width: calc(100% - 10px);
        border: none;
        outline: none;
        padding: 0;
        height: 30px;
        box-shadow: initial;
      }
    }
    .options-wrap {
      position: absolute;
      top: 30px;
      background: #fff;
      width: 244px;
      z-index: 99;
      border: solid 1px #ddd;
      border-top: none;
      input[type="text"] {
        width: 170px;
        margin: 10px 5px;
        padding-left: 30px;
      }
      .div-bor {
        position: relative;
        width: 200px;
      }
      .icon-search {
        position: absolute;
        left: 13px;
        top:20px;

        z-index: 5;
      }
      ul {
        max-height: 300px;
        overflow: auto;
        margin-top: 0;
        padding-top: 0;
        li {
          padding: 5px;
          cursor: pointer;
          &:hover {
            background: #ddd;
          }
        }
      }
    }
  }
</style>
