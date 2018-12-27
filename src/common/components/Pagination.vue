<template>
  <div class="text-right">
    <ul class="pagination">
      <li @click="goPage(1)" :class="pageNum === 1 ? 'disable': ''"><span>首页</span></li>
      <li @click="goPage(pageNum - 1)" :class="pageNum === 1 ? 'disable': ''"><span>上一页</span></li>
      <li v-if="pageNum > 5"><span>...</span></li>
      <li v-for="i in pages"
          v-if="Math.abs(pageNum - i) < 5 || (pageNum < 5 && i < 10) || (pages - pageNum < 5 && pages - i < 9)"
          @click="goPage(i)" :class="pageNum === i ? 'active': ''">
        <span>{{i}}</span>
      </li>
      <li v-if="pages - pageNum > 4"><span>...</span></li>
      <li @click="goPage(pageNum + 1)" :class="pageNum === pages ? 'disable': ''"><span>下一页</span></li>
      <li @click="goPage(pages)" :class="pageNum === pages ? 'disable': ''"><span>尾页</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data () {
      return {
        pageNum: 1
      };
    },
    props: ['pages'],
    mounted () {
      this.init();
    },
    methods: {
      init () {

      },
      /**
       * 分页跳转
       */
      goPage (pageNum) {
        if (pageNum === this.pageNum || pageNum < 1 || pageNum > this.pages) {
          return;
        }
        if (pageNum < 1) {
          this.pageNum = 1;
        } else if (pageNum > this.pages) {
          this.pageNum = this.pages;
        } else {
          this.pageNum = pageNum;
        }
        this.$emit('query', pageNum);
      }
    }
  };
</script>

<style lang="less" scoped>
  .text-right{
    text-align: right;
    margin-right:10px;
  }
  .pagination {
    padding: 0;
    overflow: hidden;
    border: solid 1px #ddd;
    border-right: none;
    display: inline-block;
    li {
      float: left;
      cursor: pointer;
      &>span {
        display: inline-block;
        min-width: 10px;
        height: 26px;
        padding: 5px 10px;
        text-align: center;
        line-height: 26px;
        border-right: solid 1px #ddd;
      }
      &.active {
        background-color: #A4B1E7;
        color: #fff;
      }
      &:hover {
        background-color: #A4B1E7;
        color: #fff;
      }
      &.disable {
        color: #ddd;
        cursor: initial;
        background-color: initial;
        &:hover {
          background-color: initial;
        }
      }
    }
  }
</style>
