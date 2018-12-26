<template>
  <div class="home">
    <section class="user-info">
      组织架构
    </section>

    <section class="summary">

    </section>
  </div>
</template>

<script>

  export default {
    name: 'home',

    data () {
      return {
      };
    },

    components: {
    },

    mounted () {
      console.log(1111);
    },

    methods: {
    },

    computed: {

    },

    watch: {

    }
  };
</script>

<style lang="less" scoped>
  .home {
    margin-top: 28px;
    background: #fff;
    /*padding: 20px;*/
    .user-info {
      padding-bottom: 20px;
      img {
        height: 60px;
      }
      .info-wrap {
        display: inline-block;
        margin-left: 20px;
        &>div {
          margin: 10px 0;
        }
      }
    }
    .title-wrap {
      display: block;
      margin-left: 0;
      background: #1D364A;
      color: #fff;
      padding: 10px;
    }
    .content-wrap {
      padding: 20px;
      .btn-wrap{
        .btn{
          height:32px;
        }
      }
    }
    .api-menus {
      margin: 0;
    }
    label {
      width: 70px;
      display: inline-block;
    }
    .time-wrap {
      display: inline-block;
      width: 30%;
    }
    .btn-wrap{
      display:inline-block;
    }
    #chartWrap {
      width: 100%;
      height: 450px;
      margin-top: 20px;
    }
  }
</style>
