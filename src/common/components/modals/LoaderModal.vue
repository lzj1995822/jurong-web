<template>
  <div class="loader" v-show="show">
    <div class="wrap">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loader',

    data () {
      return {
        show: true
      };
    }
  };
</script>

<style lang="less" scoped>
  .loader {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: #000;
    opacity: 0.5;
    z-index: 9999;
    .wrap {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      margin: auto;
      width: 175px;
      height: 100px;
    }
    span {
      display: block;
      background: #ccc;
      width: 7px;
      height: 10%;
      border-radius: 14px;
      margin-right: 5px;
      float: left;
      margin-top: 25%;
      &:nth-child(1) {
        animation: load 2.5s 1.4s infinite linear;
      }
      &:nth-child(2) {
        animation: load 2.5s 1.2s infinite linear;
      }
      &:nth-child(3) {
        animation: load 2.5s 1s infinite linear;
      }
      &:nth-child(4) {
        animation: load 2.5s 0.8s infinite linear;
      }
      &:nth-child(5) {
        animation: load 2.5s 0.6s infinite linear;
      }
      &:nth-child(6) {
        animation: load 2.5s 0.4s infinite linear;
      }
      &:nth-child(7) {
        animation: load 2.5s 0.2s infinite linear;
      }
      &:nth-child(8) {
        animation: load 2.5s 0s infinite linear;
      }
      &:nth-child(9) {
        animation: load 2.5s 0.2s infinite linear;
      }
      &:nth-child(10) {
        animation: load 2.5s 0.4s infinite linear;
      }
      &:nth-child(11) {
        animation: load 2.5s 0.6s infinite linear;
      }
      &:nth-child(12) {
        animation: load 2.5s 0.8s infinite linear;
      }
      &:nth-child(13) {
        animation: load 2.5s 1s infinite linear;
      }
      &:nth-child(14) {
        animation: load 2.5s 1.2s infinite linear;
      }
      &:nth-child(15) {
        animation: load 2.5s 1.4s infinite linear;
      }
      &:last-child {
        margin-right: 0px;
      }
    }
    @keyframes load {
      0% {
        background: #ccc;
        margin-top: 25%;
        height: 10%;
      }
      50% {
        background: #444;
        height: 100%;
        margin-top: 0%;
      }
      100% {
        background: #ccc;
        height: 10%;
        margin-top: 25%;
      }
    }
  }
</style>
