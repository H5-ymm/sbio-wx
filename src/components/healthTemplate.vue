
<template>
  <div class="result-box-detail result-box-health">
    <div v-if="result=='阳性'">
      <div class="weui-flex start result-content">
       <img src="../assets/img/line.png" alt=""
          class="line-icon" />
        <p class="title">诊疗建议</p>
      </div>
      <div class="tip-content tip-content-health">
        <div class="health-text">HPV检测结果为阳性时，根据型别的不同，处理方式也不同，分为以下三种情况：</div>
        <div class="text">检测结果为高危型HPV16、18阳性：
          <div class="text1">
            <p>提示发生宫颈上皮内瘤变或宫颈癌的风险增加，根据临床诊疗指南，建议您到正规医院进行阴道镜检查或遵医嘱。</p>
          </div>
        </div>
        <div class="text">检测结果为其他16种高危型HPV阳性： 
          <div class="text1">
            <p>提示发生宫颈上皮内瘤变或宫颈癌的风险增加，根据临床诊疗指南，建议您到正规医院进行细胞学检测（TCT）。</p>
          </div>
        </div>
        <div class="text">检测结果为低危型HPV6、11、81阳性：
          <div class="text1">
            <p>提示生殖器疣（良性病变）的风险增加，建议去正规医院进一步确。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-flex start result-content">
      <img src="../assets/img/line.png" alt=""
        class="line-icon" />
      <p class="title">健康建议</p>
    </div>
     <div class="recommed-box">
        <p class="recommed-title weui-flex center">接种HPV疫苗+定期HPV筛查</p>
        <div class="tip-content tip-content-health">
          <div class="health-text">1、接种HPV疫苗</div>
          <div class="recommed-text">
            <div class="text1">
              全球有3种HPV疫苗，针对可预防HPV型别的数量不同，国内均已上市，条件允许可接种HPV疫苗。
            </div>
          </div>
          <div class="health-text">2、接种HPV疫苗还需要定期HPV筛查吗？</div>
          <div class="recommed-text">
            <div class="text1">
              HPV疫苗只能覆盖部分型别，且无数据表明可保护终身免疫，所以HPV疫苗+定期HPV筛查是目前预防宫颈癌的最佳组合方式。
            </div>
          </div>
          <div class="health-text">3、建议HPV筛查周期</div>
          <div class="text recommed-text">
            HPV筛查阳性：6-12个月
          </div>
          <div class="text recommed-text">
            HPV筛查阴性：1年
          </div>
        </div>
     </div>
     <div class="recommed-box">
        <p class="recommed-title recommed-title1 weui-flex center">提高自身免疫力</p>
        <div class="tip-content tip-content-health">
          <div class="health-text">提升免疫力首选生活方式调整，其次是适当干预。</div>
          <div class="health-text">1、生活方式调整</div>
          <div class="text recommed-text">
            饮食：注意饮食营养均衡、增加食物多样化、增加膳食纤维摄取，减少高油脂食物摄取。另外可以适当食用可增强免疫力的中药材。
          </div>
          <div class="text recommed-text">睡眠：与人体免疫力密切相关，需规律作息、保证充足睡眠。</div>
          <div class="text recommed-text">运动：定期进行适度运动有益于提升免疫力，例如快走、慢跑、瑜伽、游泳等。</div>
          <div class="health-text">2、适当干预</div>
          <div class="recommed-text">干预之前对个体免疫力进行评估，可遵医嘱进行检查评估，也可寻求中医辨证论治。根据评估进行干预，例如体质调理、睡眠管理等。</div>
          <div class="recommed-text">Tips： 以上建议仅供参考，如有条件可经过专业医生评估后遵医嘱。</div>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  props: {
    result: String
  }
}
</script>
<style lang="scss">
.result-box-detail.result-box-health { 
  margin-bottom: 20px;
  border-top: none;
  .result-content {
    margin: 20px 26px 0!important;
    .title_icon { 
      width: 96px!important;
    }
  }
  .health-text {
    color: #000;
    font-size: 14px;
    margin-left: 10px;
  }
  .title {
    color: #000;
    font-size: 18px;
    margin-left: 10px;
  }
  .tip-content.tip-content-health{
    margin: 18px 10px 10px 30px;
    line-height: 24px;
    .recommed-text {
      font-weight: 300;
      margin-left: 30px;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .text {
      color: #000;
      font-weight: 400;
      font-size: 14px;
      position: relative;
      padding-left: 10px;
      &::before {
        content: '.';
        font-size: 40px;
        color: #000000;
        top: -12px;
        left: -8px;
        position: absolute;
      }
      &.recommed-text {
        font-weight: 300;
        margin-left: 20px;
        &::before {
          content: '.';
          font-size: 32px;
          color: #333333;
          font-weight: 300;
          top: -10px;
          left: -4px;
          position: absolute;
        }
      }
      .text1 {
        font-weight: 300;
      }
    }
  }
  .recommed-box {
    width: 100%;
    margin: 20px auto;
  }
  .recommed-title {
    width: 213px;
    box-sizing: border-box;
    height: 30px;
    background:rgba(243,102,129,1);
    border-radius:5px;
    font-size: 15px;
    margin:0 auto;
    color: #ffffff;
    &.recommed-title1 {
      width: 180px;
    }
  }
}
</style>