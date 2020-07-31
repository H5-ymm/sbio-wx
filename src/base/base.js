
  // 首页菜单
  export const  menus = [{
    title: '绑定样本',
    subTitle: '足不出户，轻松自测',
    icon: '../../images/icon1.png',
    path: '/pages/home/usageProcess',
    background: '#FEF2F2'
  },
  {
    title: '样本回寄',
    subTitle: '在线预约顺丰，上门取件免费寄送',
    icon: '../../images/icon2.png',
    path: '/pages/sample/send',
    background: '#EDF7FF'
  }]
  // 提示列表
  export const tipList =  [{
    title: '请确认您是否适合HPV检测',
    icon: '../../images/personal.png',
    child: [
      '仅供有过性生活的成年女性使用', 
      '处于妊娠期的女性不能使用',
      '哺乳期女性请避开产褥期使用',
      '做过全子宫切除的女性不能使用',
      '接受过盆腔放射治疗的女性不能使用',
      '处于急、亚急性生殖道感染期不能使用']
  },
  {
    title: '注意事项',
    icon: '../../images/tip.png',
    child: [
      '洗澡后可以取样，不影响检测结果', 
      '取样前3天请勿进行阴道冲洗',
      '取样前24小时内避免性生活',
      '私处用药者，请在停药3天后使用',
      '如您处于月经期，请于月经结束3天后使用',
      '私处治疗者，停止治疗并在医生评估痊愈后 方可使用'
    ]
  }]

export const gatherList = [{
  title: '温馨提示',
  icon: '../../images/tip1.png',
  child: [
    '取样全程无痛，少数人推进过程中可能有轻微不适， 请不用担心，若疼痛明显请停止操作；', 
    '99%用户首次使用即可成功取样(基于既往检测数据)；',
    '若取样失败无法检测，客服将与您联系免费重新寄送 取样套装并指导操作。'
  ]
}]
// 步骤列表
export const flowList = [{
  title: '绑定样本',
  subTitle: '足不出户，轻松自测',
  path: '/pages/home/intendedFor',
  btnText: '绑定样本'
},
{
  title: '样本采集',
  subTitle: '请参照盒内说明书或线上采样 流程，完成自取样。',
  path: '/pages/sample/gather',
  btnText: '采样流程',
},
{
  title: '样本回寄',
  subTitle: '在线预约顺丰，上门取件免费寄送',
  path: '/pages/sample/send',
  btnText: '预约快递',
}]

export const recipientsInfo = {
  name: '泰州硕世医学检验实验室',
  phone: '0523-86201500',
  address: '江苏省泰州市海陵区中国医药城G25栋9楼'
}