<style lang="scss">
	.logistics-box {
    margin: 36rpx;
    .logistics-num {
      color: #000000;
      font-size: 34rpx;
      span {
        margin-left: 40rpx;
      }
    }
    .logistics-flow {
      margin-top: 60rpx;
      position: relative;
      .logistics-item {
        margin: 20rpx 0;
        color: #666666;
        font-size: 26rpx;
        padding-bottom: 40rpx;
        .logistics-detail {
          position: relative;
          &::before {
            position: absolute;
            border-left: 1px dashed #979797;
            top: 40rpx;
            left: -42rpx;
            width: 2rpx;
            z-index: 21;
            content: '';
            height: 100%;
            z-index: -1;
          }
          .logistics-time {
            margin: 0 0 10rpx;
          }
        }
        .status {
          width: 80rpx;
        }
        &:nth-last-of-type(1) {
          .logistics-detail {
            position: relative;
            height: auto;
            &::before { 
              display: none;
            }
          }
        }
        &.logistics-finish {
          color: #000000;
          font-weight: 300;
          .status {
            color: #E0283C;
          }
        }
      }
      .logistics-icon {
        width: 38rpx;
        height: 38rpx;
        border-radius: 50%;
        margin: -6rpx 20rpx;
        border: 1px solid #999999;
        position: relative;
        z-index: 1;
        image {
          width: 56%;
          height: 56%;
        }
        &.logistics-icon1 {
          border: none;
          image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="logistics-box">
    <div class="logistics-num">顺丰快递 <span>{{logisticsOrderId}}</span></div>
    <div class="logistics-flow">
      <div class="weui-flex start-start logistics-item"  v-for="(item, index) in list" :key="index":class="index == 0 ? 'logistics-finish': ''">
        <div class="status">{{item.opName}}</div>
        <div class="logistics-icon weui-flex center " :class="index == 0 ? 'logistics-icon1': ''">
          <img :src="`../assets/img/logistics/${index+1}.png`" alt="" />
        </div>
        <div class="logistics-detail weui-flex__item">
          <div class="logistics-time">{{item.operatorTime}}</div>
          <div>{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
    logisticsOrderId: String
  }
}
</script>