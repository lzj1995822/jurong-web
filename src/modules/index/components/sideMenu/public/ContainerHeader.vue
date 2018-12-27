<template>
	<div class="container-header">
      {{this.title}}
  </div>
</template>

<script>
    export default {
        name: 'ContainerHeader',
        computed: {
            title () {
              return this.$route.meta.title;
            }
        }
    };
</script>

<style scoped>
  .container-header {
    background: transparent !important;
    padding: 10px !important;
    font-size: 16px;
    border-bottom: #569ff7 2px solid;
  }
</style>
