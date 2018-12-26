<template>
  <div class="parent">
    <div v-if="this.result">
      <h3>个人信息</h3>
      <table>
        <thead>
        <tr>
          <th>手机号</th>
          <th>姓名</th>
          <th>身份证</th>
          <th>运营商</th>
          <th>号码所属省份</th>
          <th>当前可用余额</th>
          <th>套餐名称</th>
          <th>最近一次更新时间</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{this.result.mobile}}</td>
          <td>{{this.result.name}}</td>
          <td>{{this.result.id_card}}</td>
          <td>{{this.result.carrier}}</td>
          <td>{{this.result.province}}</td>
          <td>{{this.result.available_balance}}</td>
          <td>{{this.result.package_name}}</td>
          <td>{{this.result.last_modify_time}}</td>
        </tr>
        </tbody>
      </table>
      <!--<h3>账户余额</h3>
      <table>
        <thead>
        <tr>
          <th>余额</th>
          <th>总余额</th>
          <th>欠费</th>
          <th>本月话费</th>
          <th>备注信息</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{result.currRemainingAmount.curFee}}</td>
          <td>{{result.currRemainingAmount.curFeeTotal}}</td>
          <td>{{result.currRemainingAmount.oweFee}}</td>
          <td>{{result.currRemainingAmount.realFee}}</td>
          <td>{{result.currRemainingAmount.remark}}</td>
        </tr>
        </tbody>
      </table>-->
      <h3>账单信息</h3>
      <table>
        <thead>
        <tr>
          <th>时间</th>
          <th>总费用</th>
          <th>固定费用</th>
          <th>语音通信费</th>
          <th>上网费</th>
          <th>短信费</th>
          <th>增值业务费</th>
          <th>优惠费</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(val, key) in result.bills ">
          <td>{{val.bill_month}}</td>
          <td>{{val.total_fee/100}}</td>
          <td>{{val.base_fee/100}}</td>
          <td>{{val.voice_fee/100}}</td>
          <td>{{val.net_fee/100}}</td>
          <td>{{val.sms_fee/100}}</td>
          <td>{{val.extra_service_fee/100}}</td>
          <td>{{val.discount/100}}</td>
        </tr>
        </tbody>
      </table>
      <h3>通话记录</h3>
      <table>
        <thead>
        <tr>
          <th>通话号码</th>
          <th>通话费用</th>
          <th>主叫/被叫</th>
          <th>通话地</th>
          <th>通话时长</th>
          <th>通话类型</th>
          <th>通话时间</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in result.calls ">
          <td>{{d.peer_number}}</td>
          <td>{{d.fee/100}}</td>
          <td>{{d.call_type}}</td>
          <td>{{d.location }}</td>
          <td>{{d.duration }}</td>
          <td>{{d.location_type}}</td>
          <td>{{d.time}}</td>
        </tr>
        </tbody>
      </table>
      <h3>短信记录</h3>
      <table>
        <thead>
        <tr>
          <th>对方号码</th>
          <th>通信时间</th>
          <th>费用</th>
          <th>收发地址</th>
          <th>发送/接收</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in result.smses">
          <td>{{d.peer_number}}</td>
          <td>{{d.time}}</td>
          <td>{{d.fee }}</td>
          <td>{{d.location }}</td>
          <td>{{d.send_type}}</td>
        </tr>
        </tbody>
      </table>
      <h3>充值记录</h3>
      <table>
        <thead>
        <tr>
          <th>充值时间</th>
          <th>充值金额</th>
          <th>充值方式</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in result.recharges">
          <td>{{d.time }}</td>
          <td>{{d.amount/100}}</td>
          <td>{{d.type}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableResult',
    data () {
      return {
      };
    },
    props: ['result'],
    mounted () {
      this.init();
    },
    methods: {
      init () {
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../../../assets/less/variables.less';
  .parent {
    font-family: @defaultFontFamily;
    font-size: 14px;
  }
</style>
