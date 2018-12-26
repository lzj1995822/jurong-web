<template>
  <div class="date-wrap icon-calendar">
    <input class="time icon-calendar" type="text"  v-model="date" placeholder="请选择日期">
  </div>
</template>

<script>
  const Flatpickr = require('flatpickr'),
    Zh = require('flatpickr/dist/l10n/zh.js').zh;

  export default {
    name: 'dateFlatpicker',
    data () {
      return {
        date: '',
        conf: {},
        picker: null
      };
    },
    props: ['offset', 'noCalendar', 'enableTime', 'enableSeconds', 'initDate', 'defaultDate'],
    mounted () {
      this.init();
    },
    methods: {
      init () {
        // 默认取当天时间
//        var conf = {},
//        var conf = {defaultDate: new Date()},
//          picker,
          var dateStr = '';     // 格式化的时间字符串 2017-09-21 19:08
          this.conf.defaultDate = new Date();

        // 初始化控件为中文
        Flatpickr.localize(Zh);

        // 开始时间往前推一天
        if (this.$props && this.$props.offset) {
          this.conf.defaultDate = (new Date()).getTime() + this.$props.offset * 24 * 60 * 60 * 1000;
        }

        // 是否启用日历
        if (this.$props && this.$props.noCalendar) {
          this.conf.noCalendar = true;
        }

        // 是否启用时间
        if (this.$props && this.$props.enableTime) {
          this.conf.enableTime = true;
        }

        // 是否启用秒
        if (this.$props && this.$props.enableSeconds) {
          this.conf.enableSeconds = true;
        }

        // 是否有默认时间
        if (this.$props && this.$props.defaultDate) {
          this.conf.defaultDate = this.$props.defaultDate;
        }

        this.picker = new Flatpickr(this.$el.firstChild, this.conf);

        // 初始化后需要手动触发一次数据更新，此处组装数据并返回
        if (this.picker && this.picker.selectedDates && this.picker.selectedDates.length) {
          if (!this.$props || !this.$props.noCalendar) {
            dateStr += this.picker.selectedDates[0].getFullYear();                                                                                                         // 获取年份
            dateStr += '-';                                                                                                                                           // 中划线隔开
            dateStr += this.picker.selectedDates[0].getMonth() > 8 ? (this.picker.selectedDates[0].getMonth() + 1) : ('0' + (this.picker.selectedDates[0].getMonth() + 1));          // 获取月份
            dateStr += '-';                                                                                                                                           // 中划线隔开
            dateStr += this.picker.selectedDates[0].getDate() < 10 ? ('0' + this.picker.selectedDates[0].getDate()) : this.picker.selectedDates[0].getDate();                        // 获取天
            dateStr += ' ';                                                                                                                                           // 空格隔开
          }
          // 是否启用时间
          if (this.$props && this.$props.enableTime) {
            dateStr += this.picker.selectedDates[0].getHours() < 10 ? ('0' + this.picker.selectedDates[0].getHours()) : this.picker.selectedDates[0].getHours();                     // 获取小时
            dateStr += ':';                                                                                                                                           // 冒号隔开
            dateStr += this.picker.selectedDates[0].getMinutes() < 10 ? ('0' + this.picker.selectedDates[0].getMinutes()) : this.picker.selectedDates[0].getMinutes();               // 获取分钟
          }
          // 是否启用秒
          if (this.$props && this.$props.enableSeconds) {
            dateStr += ':';                                                                                                                                           // 冒号隔开
            dateStr += this.picker.selectedDates[0].getSeconds() < 10 ? ('0' + this.picker.selectedDates[0].getSeconds()) : this.picker.selectedDates[0].getSeconds();               // 获取秒
          }
          this.$emit('input', dateStr);
        }
      }
    },
    watch: {
      /**
       * 修改时间，广播消息
       */
      date (val, oldVal) {
        if (val !== oldVal) {
          this.$emit('input', val);
        }
      }
//      initDate (val, oldVal) {
//        debugger;
//        if (val !== oldVal) {
//          this.conf.defaultDate = val;
//          this.picker = new Flatpickr(this.$el.firstChild, this.conf);
//          console.log('================ ' + val);
//        }
//      }
    }
  };
</script>

<style src="assets/less/flatpickr.css"></style>
<style lang="less" scoped>
  .date-wrap {
    width: 300px;
  }
</style>
