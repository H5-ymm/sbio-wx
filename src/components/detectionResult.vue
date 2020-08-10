
<template>
  <div class="detection-result weui-flex start-start" :class="{'negative': item.result == '阴性'}">
    <div class="result-left">
      <p class="title">本次HPV检测结果为</p>
      <p class="result-detail weui-flex start-start" >
        <img src="../assets/img/tip.png" alt="" class="tip-icon" v-if="item.result!='阴性'">
        <span>{{item.resultShow}}</span>
      </p>
    </div>
    <div class="result-type weui-flex__auto">{{item.result}}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      typeNum: 1
    }
  },
  computed: {
    text() {
      return this.typeNum == 1 ? '这表明您目前未处于HPV感染 期，请定期进行HPV检测。如有 明显不适症状，请及时前往医院就诊。' : '这表明您目前处于HPV感染期， 请认真阅读专家健康建议'
    },
    resultType() {
      return this.typeNum == 1 ? '阴性' : '阳性'
    }
  },
  created(){
    
  }
}
</script>
<style lang="scss">
.detection-result{
  height: 67px;
  background: url('../assets/img/bg.png') center;
  background-size: cover;
  color: #ffffff;
  font-size: 12px;
  padding: 30px 27px;
  border-radius: 10px;
  &.negative {
    background: url('../assets/img/negative.png') center;
    .result-type {
      text-shadow:0px 4px 5px rgba(141,178,113,0.55);
      background-size: cover;
    }
  }
  .result-left {
    width: 73%;
    .tip-icon {
      width: 12px;
      height: 10px;
      margin-top: 4px;
      margin-right: 5px;
    }
  }
  .title {
    margin-bottom: 16px;
    font-size: 14px;
  }
  .result-type {
    font-size: 25px;
    margin-top: -4px;
    text-shadow: 0px 8px 10px rgba(236,73,108,0.7);
    font-weight: 500;
  }
}
</style>