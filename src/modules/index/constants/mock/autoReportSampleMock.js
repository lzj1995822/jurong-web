// 汽车金融报告 mock 数据
module.exports = {
  'id': '962464a4-2c1f-4a4f-b63b-8e3691ceb90b',
  'success': true,
  'resultCode': 100000,
  'resultMsg': '执行成功',
  'resultData': {
    'idCard2FactorsVerification': {
      'idCardArea': '浙江省金华市永康县',
      'name': '章苏炳',
      'idCardNo': '330722196710302127',
      'matchFlag': '1',
      'flagMsg': '匹配'
    },
    'carrierValidate': {
      'mobileArea': '陕西渭南',
      'name': '章苏炳',
      'idNumber': '330722196710302127',
      'mobile': '15191377006',
      'matchFlag': '1',
      'flagMsg': '匹配'
    },
    'blackMobile': {
      'isOnBlacklist': 0
    },
    'carrierAgeInfo': {
      'mobile': '15191377006',
      'mobile_provider': '中国移动',
      'matchFlag': '>36',
      'flagMsg': '36个月以上(移动号码显示最长在网时间)'
    },
    'carrierStatusInfo': {
      'mobile': '15191377006',
      'mobile_provider': '中国移动',
      'matchFlag': '1',
      'flagMsg': '查询的手机号码在网'
    },
    'badInfo': '正常',
    'poorJudicature': {
      'discredit': {
        'count': 3,
        'datas': [{
          'jtqx': '有履行能力而拒不履行生效法律文书确定义务',
          'lxqk': '全部未履行',
          'sortTimeString': '2018年01月11日'
        },
          {
            'jtqx': '有履行能力而拒不履行生效法律文书确定义务',
            'lxqk': '全部未履行',
            'sortTimeString': '2017年10月20日'
          },
          {
            'jtqx': '有履行能力而拒不履行生效法律文书确定义务,违反财产报告制度',
            'lxqk': '全部未履行',
            'sortTimeString': '2017年09月01日'
          }]
      },
      'executed': {
        'count': 9,
        'datas': [{
          'caseState': '0',
          'execMoney': 23526082,
          'sortTimeString': '2018年01月11日'
        },
          {
            'caseState': '终结本次执行程序',
            'execMoney': 23526082,
            'sortTimeString': '2018年01月11日'
          },
          {
            'caseState': '0',
            'execMoney': 445315,
            'sortTimeString': '2017年10月25日'
          },
          {
            'caseState': '0',
            'execMoney': 287600,
            'sortTimeString': '2017年10月25日'
          },
          {
            'caseState': '0',
            'execMoney': 1500000,
            'sortTimeString': '2017年10月20日'
          },
          {
            'caseState': '终结本次执行程序',
            'execMoney': 1500000,
            'sortTimeString': '2017年10月20日'
          },
          {
            'caseState': '0',
            'execMoney': 73693,
            'sortTimeString': '2017年10月19日'
          },
          {
            'caseState': '0',
            'execMoney': 2539090,
            'sortTimeString': '2017年09月01日'
          },
          {
            'caseState': '终结本次执行程序',
            'execMoney': 2539089,
            'sortTimeString': '2017年09月01日'
          }]
      },
      'document': {
        'count': 5,
        'datas': [{
          'caseCause': '案外人执行异议之诉',
          'judgeResult': '本案按上诉人夏维亿自动撤回上诉处理。一审判决自本裁定书送达之日起发生法律效力。上诉人夏维亿已预交的上诉案件受理费100元退还给其本人。本裁定为终审裁定。',
          'sortTimeString': '2018年04月25日',
          'title': '杭州热联集团股份有限公司案外人执行异议之诉二审民事裁定书'
        },
          {
            'caseCause': '于2017年8月31日公开开庭审理了本',
            'judgeResult': '驳回原告夏维亿的诉讼请求。案件受理费100元，由原告夏维亿负担。如不服本判决，可在判决书送达之日起十五日内向本院递交上诉状，并按对方当事人的人数或者代表人的人数提出副本，上诉于浙江省高级人民法院。',
            'sortTimeString': '2017年12月18日',
            'title': '夏维亿与杭州热联集团股份有限公司、章苏炳案外人执行异议之诉一审民事判决书'
          },
          {
            'caseCause': '金融借款合同纠纷',
            'judgeResult': '一、被告新海薄板集团有限公司于本判决生效之日即归还原告浙江稠州商业银行股份有限公司丽水缙云支行借款本金21650000元，利息、罚息、复息1876082.07元，共计23526082.07元，并从2017年11月7日起至款还清日止，按合同约定另行计付借款本金21650000元的利息、罚息、复息。二、被告宋立新、章苏炳、浙江广鹰机械有限公司、王小英、吴广美、缙云县新航金属制品有限公司、宋微、浙江富盛机械有限公司、杨峥嵘对上述款项承担连带保证责任。如果未按本判决指定的期间履行给付金钱义务，应当依照《中华人民共和国民事诉讼法》第二百五十三条之规定，加倍支付迟延履行期间的债务利息。案件受理费159430元，减半收取79715元，由被告新海薄板集团有限公司、宋立新、章苏炳、浙江广鹰机械有限公司、王小英、吴广美、缙云县新航金属制品有限公司、宋微、浙江富盛机械有限公司、杨峥嵘负担。该费用于本判决生效之日向本院缴纳。如不服本判决，可在判决书送达之日起十五日内，向本院递交上诉状，并按对方当事人的人数提出副本，上诉于丽水市中级人民法院。',
            'sortTimeString': '2017年12月11日',
            'title': '浙江稠州商业银行股份有限公司丽水缙云支行与新海薄板集团有限公司、宋立新金融借款合同纠纷一审民事判决书'
          },
          {
            'caseCause': '民间借贷纠纷',
            'judgeResult': '驳回原告丽水步阳置业有限公司的起诉。如不服本裁定，可在裁定书送达之日起十日内，向本院递交上诉状，并按对方当事人的人数提出副本，上诉于浙江省丽水市中级人民法院。',
            'sortTimeString': '2017年12月01日',
            'title': '丽水步阳置业有限公司与新海薄板集团有限公司、宋立新民间借贷纠纷一审民事裁定书'
          },
          {
            'caseCause': '买卖合同纠纷',
            'judgeResult': '',
            'sortTimeString': '2017年06月20日',
            'title': '杭州热联集团股份有限公司、新海薄板集团有限公司买卖合同纠纷执行审查类执行裁定书'
          }]
      },
      'netLoan': {
        'count': 0,
        'datas': []
      },
      'exposure': {
        'count': 3,
        'datas': [{
          'caseCause': '金融借款合同纠纷',
          'execMoney': 2.352608207E7,
          'sortTimeString': '2018年01月11日'
        },
          {
            'caseCause': '民间借贷纠纷',
            'execMoney': 1500000,
            'sortTimeString': '2017年10月20日'
          },
          {
            'caseCause': '金融借款合同纠纷',
            'execMoney': 2539089.78,
            'sortTimeString': '2017年09月01日'
          }]
      },
      'courtBulletin': {
        'count': 0,
        'datas': []
      },
      'courtAnnounce': {
        'count': 0,
        'datas': []
      },
      'caseProcess': {
        'count': 0,
        'datas': []
      }
    },
    'riskList': {
      'score': 920.0,
      'antiFraudScore': 291.0,
      'model0Score': 91,
      'model1Score': 78,
      'model2Score': 92,
      'model3Score': 64,
      'riskInfo': [{
        'riskName': '身份认证失败',
        'riskValue': '中'
      },
        {
          'riskName': '异常支付行为',
          'riskValue': '高'
        }]
    },
    'creditScore': 550,
    'resultAudit': '人工审核',
    'creditStatus': '中等'
  }
};
