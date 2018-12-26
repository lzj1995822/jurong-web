<template>
  <transition name="modal">
    <div class="modal-mask" v-if="open">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              提示
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{msg}}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click="confirm">确定</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'AlertModal',

    data () {
      return {
        msg: '',
        open: false
      };
    },

    mounted () {

    },

    methods: {
      /**
       * 确定
       */
      confirm () {
        this.$emit('ok');
      }
    }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    max-width: 500px !important;
    .modal-body {
      div {
        margin-bottom: 10px;
      }
    }
  }
</style>
