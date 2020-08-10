
<template>
  <div class="result-box-detail">
    <div class="weui-flex start result-content">
      <img src="../assets/img/line.png" alt=""
        class="line-icon" />
      <img src="../assets/img/text2.png" alt=""
      class="title_icon" />
    </div>
    <div class="tip-content">
      <div class="text">HPV感染是宫颈癌发生的重要致病因素，大部分感染会自行消退，与年龄及个人免疫功能有关。</div>
      <div class="text">HPV持续或反复感染会发生: 
        <div class="text1">
          <p>1.高危型HPV持续性感染可导致宫颈高级别病变，最终可发展为宫颈癌。</p>
          <p>2.HPV16和18亚性阳性建议进行阴道镜检查，其他高危型阳性建议在医生指导下定期随访。</p>
          <p>3.低危型HPV感染一般导致良性病变，如生殖器疣。</p>
        </div>
      </div>
      <div class="text">本报告仅对所检测样本负责，结果分析和危险性提示仅提供临床参考。</div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" >
.result-box-detail { 
  margin-bottom: 20px;
  border-top: 7px solid #F8F8F8;
  .result-content {
    margin: 20px 26px 0!important;
    .title_icon { 
      width: 96px!important;
    }
  }
  .tip-content {
    margin: 10px 30px;
    line-height: 25px;
    .text {
      color: #000;
      font-weight: 300;
      font-size: 14px;
      position: relative;
      padding-left: 10px;
      &::before {
        content: '.';
        font-size: 40px;
        color: #909090;
        top: -12px;
        left: -5px;
        position: absolute;
      }
    }
  }
}
</style>