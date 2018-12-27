<template>
    <div class="base-data">
      <ul class="tabs">
        <li :class="{'active': tab === 'office'}" @click="switchTab('office')">办公室</li>
        <li :class="{'active': tab === 'leading'}" @click="switchTab('leading')">领导机构</li>
      </ul>
      <div v-if="tab === 'office'">
       <div class="item-wrap">
         <button class="btn btn-primary" @click="addOfficeModal">新增</button>
       </div>
        <div class="container-wrap">
          <div class="table-wrap">
            <table>
              <thead>
              <tr>
                <th>序号</th>
                <th>编码</th>
                <th>办公室名称</th>
                <th>概况</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(list, $index) in officeList">
                <td>{{$index+1}}</td>
                <td>{{list.code}}</td>
                <td>{{list.officeName}}</td>
                <td>{{list.detail}}</td>
                <td>
                  <a>详情</a>
                  <a @click="deleteOffice($index)">删除</a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <pagination v-if="totalPage" :pages="totalPage" @query="query"></pagination>
        </div>
      </div>
      <add-office v-if="showAddOfficeModal" @close="closeAddOfficeModal"></add-office>
    </div>
</template>

<script>
  import Pagination from '../../../../common/components/Pagination';
  import AddOffice from './AddOffice';
    export default {
        name: 'CenterBaseData',
      components: {
          Pagination,
          AddOffice
      },
      props: [],
        data () {
          return {
            tab: 'office',
            officeList: [],
            params: {
              pageNum: 1,
              pageSize: 10
            },
            totalCount: 0,
            totalPage: 0,
            showAddOfficeModal: false
          };
        },
        mounted () {
          this.query();
        },
        comments: {
          Pagination
        },
        methods: {
          // 切换tab
          switchTab (tab) {
            this.tab = tab;
          },
          // 查询
          query (pageNum) {
              if (pageNum) {
                this.params.pageNum = pageNum;
              }
              this.officeList = [
              {id: 1, code: 111111, officeName: '1111111', detail: '12451212123212'},
              {id: 2, code: 222222, officeName: '2222222', detail: '25511223262323'},
              {id: 3, code: 333333, officeName: '3333333', detail: '45845214521452'},
              {id: 4, code: 444444, officeName: '4444444', detail: 'kjnnmnnmmk5245'}
            ];
              this.totalCount = this.officeList.length;
              this.totalPage = Math.ceil(this.totalCount / this.params.pageSize);
          },
          // 删除
          deleteOffice (id) {
          //  需要弹出框
          },
          // 显示新增弹框框
          addOfficeModal () {
            this.showAddOfficeModal = true;
          },
          // 关闭新增弹出框
          closeAddOfficeModal (flag) {
            if (flag) {
              this.query();
            }
            this.showAddOfficeModal = false;
          }
        }
    };
</script>

<style scoped>

</style>
