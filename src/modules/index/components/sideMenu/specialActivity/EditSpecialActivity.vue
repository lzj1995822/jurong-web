<template>
  <transition name="modal">
    <div class="modal-mask special-activity-detail">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              特色活动详情
              <span class="fr close" @click="$emit('close')">x</span>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="item-wrap">
                <div class="left">
                  <img :src="detailList && detailList.resultPic && detailList.resultPic[0]" alt="">
                </div>
                <div class="right">
                  <div class="header">
                    <h4>{{detailList && detailList.planName}}</h4>
                  </div>
                  <div class="content">
                    <div class="item-wrap">
                      <i class="icon icon-clock"></i>
                      <span class="activity-time">活动时间：{{detailList.expireTime}}</span>
                    </div>
                    <div class="item-wrap">
                      <i class="icon icon-address"></i>
                      <span class="activity-address">活动地址：{{detailList.practiceName}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-wrap">
                <div class="dividing-line"></div>
                <div class="img-wrap">
                  <img id="pictures1" src="/static/img/icon/activity-content.png" usemap="#cut_over" v-show="showPic1">
                  <img id="pictures2" src="/static/img/icon/activity-picture.png" usemap="#cut_over" v-show="showPic2">
                  <map name="cut_over" id="cut_over">
                    <area shape="rect" coords="0,0,310,49" class="left-image" @click="showPic(1)"/>
                    <area shape="rect" coords="320,0,640,49" class="right-image" @click="showPic(0)"/>
                  </map>
                </div>
                <div class="activity-contents" v-show="showPic1">
                  <p>{{detailList.resultContent}}</p>
                </div>
                <div class="activity-picture" v-show="showPic2">
                  <ul class="pictures">
                    <li v-for="(video, $index) in detailList && detailList.resultVideo" v-show="typeof (detailList && detailList.resultVideo) !== 'string' && detailList.resultVideo">
                      <video :src="video" controls = "true"></video>
                    </li>
                    <li v-show="typeof (detailList && detailList.resultVideo) === 'string'">
                      {{detailList && detailList.resultVideo}}
                    </li>
                    <li v-for="(image, $index) in detailList && detailList.resultPic" v-show="detailList && detailList.resultPic">
                      <img :src="image" alt="">
                    </li>
                  </ul>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click="$emit('close')">确认</button>
              <button class="btn btn-default" @click="$emit('close')">取消</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import specialService from './service/specialService';
    export default {
        name: 'EditSpecialActivity',
        props: ['id'],
        data () {
          return {
            detailList: [],
            showPic1: true,
            showPic2: false
          };
        },
        mounted () {
          this.init();
        },
        components: {},
        methods: {
          init () {
            specialService.getSpecialActivityDetail(this.id)
              .then(res => {
                if (res.data && res.data.success) {
                    this.detailList = res.data.content;
                }
              });
          },
          /**
           *  切换tab图片
           */
          showPic (flag) {
            if (flag) {
              this.showPic1 = true;
              this.showPic2 = false;
            } else {
              this.showPic1 = false;
              this.showPic2 = true;
            }
          }
        }
    };
</script>

<style scoped lang="less">
.special-activity-detail{
  /*top: 5% !important;*/
  .modal-container{
    min-width: 800px !important;
    .close{
      font-weight: normal;
      cursor: pointer;
    }
  }
  .item-wrap{
    margin-bottom: 15px;
    .left{
      float: left;
      margin-right: 30px;
      img{
        width: 360px;
        height: 230px;
      }
    }
    .right{
      text-align: left;
      padding-top: 30px;
      height: 200px;
      .header{
        font-size: 20px;
        margin-bottom: 40px;
      }
    }
  }
  .content{
    position: relative;
    .icon{
      display: inline-block;
      width: 18px;
      height: 18px;
      vertical-align: -4px;
    }
    .icon-clock{
      background:url("/static/img/icon/clock.png") ;
    }
    .icon-address{
      background:url("/static/img/icon/clock.png") ;
    }
  }
  .dividing-line {
    border: 1px solid #f69444;
  }
  .img-wrap {
    margin-top: 20px;
    img{
      margin-left:70px;
    }
  }
  .activity-contents {
    margin-top: 40px;
    text-align: left;
    line-height: 30px;
    font-size: 16px;
    padding: 0 15px;
  }
  .activity-picture {
    text-align: left;
    /*padding: 20px 0;*/
    ul{
      height: 230px;
      /*float: left;*/
      overflow: auto;
      li{
        float: left;
        margin-right: 10px;
        width: 345px;
        height: 230px;
        margin-bottom: 10px;
        img,video{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
