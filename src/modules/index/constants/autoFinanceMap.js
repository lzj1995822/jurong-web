module.exports = {
  registration: {
    bankCount: '注册银行数量',
    nonBankCount: '注册非银行数量',
    earliestTime: '最早注册时间',
    latestTime: '最近注册时间'
  },
  application: {
    bankCount: '申请银行数量',
    bankSuccessCount: '申请银行成功数量',
    backFailedCount: '申请银行失败数量',
    nonBankCount: '申请非银行数量',
    nonBankSuccessCount: '申请非银行成功数量',
    nonBankFailedCount: '申请非银行失败数量',
    earliestTime: '最早申请时间',
    latestTime: '最近申请时间',
    minAmount: '最小申请额度',
    maxAmount: '最大申请额度',
    totalAmount: '累计额度'
  },
  approval: {
    bankCount: '放款银行数量',
    nonBankCount: '放款非银行数量',
    earliestTime: '最早放款时间',
    latestTime: '最近放款时间',
    minAmount: '最小放款额度',
    maxAmount: '最大放款额度',
    totalAmount: '累计额度',
    monthToLatestApproval: '最近放款时间距今月数'
  },
  rejection: {
    bankCount: '银行驳回次数',
    nonBankCount: '非银行驳回次数'
  },
  overdue: {
    count: '累积逾期次数',
    earliestTime: '最早逾期时间:',
    latestTime: '最近逾期时间',
    minAmount: '最小逾期额度',
    maxAmount: '最大逾期额度',
    totalAmount: '累积逾期额度',
    monthToLatestOverdue: '最近逾期时间距今月数'
  },
  badJudicialRecord: {
    dishonest: '失信信息',
    executed: '执行信息',
    lawCase: '案件信息',
    netLoanOverdue: '网贷逾期',
    callLoan: '催收公告',
    courtNotice: '开庭公告',
    courtAnnouncement: '法院公告',
    lawCaseProcess: '案件流程'
  },
  dishonest: {
    execution: '履行情况',
    situation: '失信被执行人行为具体情形',
    time: '立案时间'
  },
  executed: {
    amount: '被执行的金额',
    state: '执行情况',
    time: '立案时间'
  },
  lawCase: {
    title: '标题',
    caseCause: '案由',
    time: '审结时间',
    judgeResult: '判决结果'
  },
  netLoanOverdue: {
    lastUpdateTime: '信息更新时间',
    unpaidAmount: '未还/罚息',
    totalAmount: '本金/本息',
    dataSource: '数据来源单位名称',
    time: '贷款时间'
  },
  callLoan: {
    amount: '标的金额',
    caseCause: '案由',
    time: '立案日期'
  },
  courtNotice: {
    cause: '案由',
    time: '开庭时间'
  },
  courtAnnouncement: {
    type: '公告类型',
    time: '发布时间'
  },
  lawCaseProcess: {
    status: '案件流程状态',
    time: '立案时间'
  }
};
