<template>
  <div class="special-activity">
    <div>
      <div class="item-wrap">
        <label>选择分中心</label>
        <searchable-select :options="centerOpt" :display-key="'name'" :value-key="'id'" v-model="params.centerId"></searchable-select>
      </div>
      <div class="item-wrap">
        <label>选择实践所</label>
        <searchable-select :options="townOpt" :display-key="'name'" :value-key="'id'" v-model="townId"></searchable-select>
      </div>
      <div class="item-wrap">
        <label>选择实践站</label>
        <searchable-select :options="countryOpt" :display-key="'name'" :value-key="'id'" v-model="params.countryId"></searchable-select>
      </div>
      <div class="btn-wrap">
        <button class="btn btn-primary" @click="query(1)">查询</button>
      </div>
    </div>
    <div class="content">
      <ul class="activity">
        <li v-for="(list, $index) in activityList" @click="showDetailModal(list.resultId)">
          <dl>
            <dt>
              <img :src="list.pic && list.pic[0]" alt="">
            </dt>
            <dd class="desc">
              <p><span>{{list.planName}}</span></p>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <pagination v-if="totalPage" :pages="totalPage" @query="query"></pagination>
    <edit-special-activity v-if="showSpecialDetailModal" :id="specialDetailId" @close="closeDetailModal"></edit-special-activity>
  </div>
</template>

<script>
  import Pagination from 'common/components/Pagination';
  import SearchableSelect from 'common/components/SearchableSelect';
  import specialService from './service/specialService';
  import EditSpecialActivity from './EditSpecialActivity';
    export default {
        name: 'SpecialActivity',
        props: [''],
        data () {
          return {
            centerOpt: [],        // 分中心选择下拉框
            townOpt: [],          // 实践所选择下拉框
            countryOpt: [],       // 实践站选择下拉框
            params: {
              pageNum: 1,
              pageSize: 20,
              centerId: '',
              townId: '',
              countryId: ''
            },
            townId: '',
            showSpecialDetailModal: false,
            specialDetailId: '',
            activityList: [],     // 活动列表
            totalCount: 0,        // 总条数
            totalPage: 0          // 总页数
          };
        },
        components: {
          Pagination,
          SearchableSelect,
          EditSpecialActivity
        },
        mounted () {
          this.init();
        },
        methods: {
          /**
           * 初始化数据
           * */
          init () {
            this.initCenter();
            this.initTown();
          },
          /**
           * 初始化分中心数据
           **/
          initCenter () {
            specialService.getCenterData()
              .then(res => {
                if (res.data && res.data.success) {
                  this.centerOpt = res.data.contents;
                  this.centerOpt.unshift({name: '所有', id: ''});
                } else {
                  window.alert(res.data.message);
                }
              });
          },
          /**
           * 初始化实践所数据
           * */
          initTown () {
            specialService.getTownData()
              .then(res => {
                console.log(res.data);
                if (res.data && res.data.success) {
                  this.townOpt = res.data.contents;
                  this.townOpt.unshift({name: '所有', id: ''});
                } else {
                  window.alert(res.data.message);
                }
              });
          },
          /**
           * 初始化实践点数据
           * */
          initCountry (id) {
            specialService.getCountryDataByTownId(id)
              .then(res => {
                if (res.data && res.data.success) {
                  this.countryOpt = res.data.contents;
                  this.countryOpt.unshift({name: '所有', id: ''});
                } else {
                  window.alert(res.data.message);
                }
              });
          },
          /**
           * 查询特色活动
           * */
          query (pageNum) {
            if (pageNum) {
              this.params.pageNum = pageNum;
            }
            this.params.townId = this.townId;
            if (!this.params.centerId && !this.params.townId && !this.params.countryId) {
              window.alert('查询条件不能为空!');
              return;
            }
            specialService.getSpecialActivity(this.params)
              .then(res => {
                if (res.data && res.data.success) {
                  this.activityList = res.data.content && res.data.content.list;
                  this.totalCount = res.data.content && res.data.content.paginator.totalCount;
                  this.totalPage = res.data.content && res.data.content.paginator.totalPage;
                }
              });
          },
          /**
           * 显示特色活动详情
           * */
          showDetailModal (resultId) {
            this.showSpecialDetailModal = true;
            this.specialDetailId = resultId;
          },
          /**
           * 关闭特色活动详情
           * */
          closeDetailModal () {
            this.showSpecialDetailModal = false;
          }
        },
        watch: {
          // 监听实践所的数据的改变
          townId: {
            handler (curVal, oldVal) {
              this.initCountry(curVal);
            }
          }
        }
    };
</script>

<style scoped lang="less">
  .special-activity{
    margin-top:28px;
    .item-wrap {
      display: inline-block;
      width: 30%;
      margin: 10px 0;
      label{
        margin-right:10px;
      }
      select {
        width: 300px;
      }
      input[type="text"] {
        width: 275px;
      }
      .date-wrap {
        width: 300px;
      }
    }
    .btn-wrap{
      display: inline-block;
    }
    .content{
      ul.activity{
        li{
          display: inline-block;
          width: 18%;
          cursor: pointer;
          dl{
            img{
              width: 100%;
              height:180px;
            }
          }
          dd{
            padding: 2px 15px;
            box-shadow: 1px 1px 1px 2px #E7ECF8;
          }
        }
      }
    }
  }
</style>
