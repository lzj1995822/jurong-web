<template>
  <transition name="modal">
    <div class="modal-mask special-activity-detail">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
                添加
              <span class="fr close" @click="$emit('close')">x</span>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click="save">保存</button>
              <button class="btn btn-default" @click="$emit('close', false)">取消</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'AddOffice',
        props: [],
        data () {
          return {};
        },
        mounted () {},
        components: {},
        methods: {
          save () {
            this.$emit('close', true);
          }
        }
    };
</script>

<style scoped>

</style>
