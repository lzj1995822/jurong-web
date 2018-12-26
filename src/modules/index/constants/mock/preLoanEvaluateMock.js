// 贷前信用评估 mock数据
module.exports = {
  'creditScore': 55,
  'carrierValidate': {
    'matchFlag': '1',
    'name': '张荣华',
    'mobile': '18869974705',
    'flagMsg': '匹配',
    'idNumber': '350321196811162210'
  },
  'carrierAgeInfo': {
    'mobile': '18930797269',
    'mobile_provider': '中国电信',
    'matchFlag': '>36',
    'flagMsg': '36个月以上(电信号码显示最长在网时间)'
  },
  'carrierStatusInfo': {
    'mobile': '18930797269',
    'mobile_provider': '中国电信',
    'matchFlag': '0',
    'flagMsg': '查询的手机号码在网'
  },
  'blackMobile': {
    'isBlack': '',
    'isOnBlacklist': 0,
    'mobileNo': '18869974705'
  },
  'riskList': {
    'idFound': -1,
    'found': 1,
    'score': 87,
    'antiFraudScore': 305.0,
    'model0Score': 91,
    'model1Score': 85,
    'model2Score': 87,
    'model3Score': 31,
    'riskInfo': [{
      'riskName': '疑似恶意欺诈',
      'riskValue': '高风险'
    },
      {
        'riskName': '失信名单',
        'riskValue': '高风险'
      },
      {
        'riskName': '异常支付行为',
        'riskValue': '中风险'
      }]
  },
  'poorJudicature': {
    'name': '张荣华',
    'idCardNo': '350321196811162210',
    'results': []
  },
  'badPublicSecurity': {
    'result': '涉案人员',
    'idCardNo': '350321196811162210',
    'name': '张荣华'
  },
  'multipleLoanInfo': {
    'RESULTS': [
      {
        'DATA': [
          {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF184163',
          'LOAN_TIME': '',
          'REGISTERTIME': '2017-04-12 12:37:06',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF003676',
          'LOAN_TIME': '',
          'REGISTERTIME': '2017-04-07 16:07:45',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF003130',
          'LOAN_TIME': '',
          'REGISTERTIME': '2017-06-27 16:55:17',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF003975',
          'LOAN_TIME': '',
          'REGISTERTIME': '2017-03-28 16:12:51',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF184098',
          'LOAN_TIME': '',
          'REGISTERTIME': '2017-04-08 09:36:51',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF001279',
          'LOAN_TIME': '',
          'REGISTERTIME': '2017-06-10 13:28:55',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }],
        'TYPE': 'T002',
        'CYCLE': '2016-02-04--2018-02-04'
      }, {
        'DATA': [
          {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF182524',
          'APP_TIME': '2017-05-07 02:23:05',
          'APP_AMOUNT': '1W～3W',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': 'Unknown',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF182683',
          'APP_TIME': '2017-04-09 11:51:25',
          'APP_AMOUNT': '0W～0.2W',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': 'Yes',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF001668',
          'APP_TIME': '2017-04-10 10:53:15',
          'APP_AMOUNT': '0W～0.2W',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': 'Yes',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF004261',
          'APP_TIME': '2017-05-21 18:36:13',
          'APP_AMOUNT': '0W～0.2W',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': 'Yes',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF182683',
          'APP_TIME': '2017-03-27 13:33:49',
          'APP_AMOUNT': '0W～0.2W',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': 'Yes',
          'LOAN_AMOUNT': ''
        }],
        'TYPE': 'T004',
        'CYCLE': '2016-02-04--2018-02-04'
      }, {
        'DATA': [{
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF004261',
          'LOAN_TIME': '2017-05-21 18:36:13',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF004261',
          'LOAN_TIME': '2017-04-07 18:07:46',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF184098',
          'LOAN_TIME': '2017-04-08 09:36:51',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF004261',
          'LOAN_TIME': '2017-03-24 18:06:28',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF182683',
          'LOAN_TIME': '2017-04-19 13:33:49',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF001668',
          'LOAN_TIME': '2017-04-10 10:53:15',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF182683',
          'LOAN_TIME': '2017-05-02 11:51:25',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': '0W～0.2W'
        }],
        'TYPE': 'T007',
        'CYCLE': '2016-02-04--2018-02-04'
      }, {
        'DATA': [
          {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF184031',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF184031',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }, {
          'PLATFORM': '',
          'P_TYPE': '2',
          'P_CODE': 'TF184031',
          'LOAN_TIME': '',
          'REGISTERTIME': '',
          'OVERDUE_TIME': '',
          'APP_AMOUNT': '',
          'OVERDUE_AMOUNT': '',
          'OVERDUE_COUNTS': '',
          'APP_RESULT': '',
          'APP_TIME': '',
          'LOAN_AMOUNT': ''
        }],
        'TYPE': 'T009',
        'CYCLE': '2016-02-04--2018-02-04'
      }, {
        'DATA': [
          {
            'PLATFORM': '',
            'P_TYPE': '',
            'P_CODE': 'TF183557',
            'APP_TIME': '',
            'APP_AMOUNT': '',
            'LOAN_TIME': '',
            'REGISTERTIME': '',
            'OVERDUE_TIME': '2017-03-27 13:33:49',
            'OVERDUE_AMOUNT': '0W～0.2W',
            'OVERDUE_COUNTS': '2',
            'APP_RESULT': '',
            'LOAN_AMOUNT': ''
          }, {
            'PLATFORM': '',
            'P_TYPE': '',
            'P_CODE': 'TF207201',
            'APP_TIME': '',
            'APP_AMOUNT': '',
            'LOAN_TIME': '',
            'REGISTERTIME': '',
            'OVERDUE_TIME': '2017-03-27 15:33:49',
            'OVERDUE_AMOUNT': '0W～0.2W',
            'OVERDUE_COUNTS': '1',
            'APP_RESULT': '',
            'LOAN_AMOUNT': ''
          }
        ],
        'TYPE': 'T012',
        'CYCLE': '2016-02-04--2018-02-04'
      }],
    'CITY': '台州',
    'PROVINCE': '浙江',
    'MOBILE': '18869974705'
  }
};
