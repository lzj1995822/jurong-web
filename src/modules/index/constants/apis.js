// API信息已经移到数据库，该文件废弃 2017-11-11
module.exports = {
  // 黑名单
  3: {
    name: '黑名单-企业失信',
    desc: '黑名单-企业失信',
    icon: 'icon-01-003.png',
    price: 1,
    url: 'blacklist/dishonest-enterprise',
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称/企业注册号/统一社会信用代码',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [     // 输出参数（应用级）
      {key: 'case_number', value: '案件编号'},
      {key: 'court', value: '法庭'},
      {key: 'date', value: '时间'},
      {key: 'doc_number', value: '卷宗号'},
      {key: 'ex_department', value: '执行法庭'},
      {key: 'execution_desc', value: '执行描述'},
      {key: 'execution_status', value: '执行状态'},
      {key: 'final_duty', value: '最终判决'},
      {key: 'number', value: '身份证'},
      {key: 'oper_name', value: '被执行人'},
      {key: 'province', value: '省份'},
      {key: 'publish_date', value: '发布时间'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3001', value: '字段keyword不能为空'},
      {key: '3002', value: '不存在该企业相关失信信息'}
    ]
  },
  4: {
    name: '黑名单-企业被执行人信息查询',
    desc: '企业被执行人信息查询',
    icon: 'icon-01-007.png',
    price: 1,
    url: 'blacklist/executed-enterprise',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业全名',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [     // 输出参数(应用级)
      {key: 'amount', value: '金额'},
      {key: 'case_date', value: '时间'},
      {key: 'case_number', value: '卷宗号'},
      {key: 'id', value: '编号'},
      {key: 'court', value: '法院'},
      {key: 'status', value: '状态'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3101', value: '字段name不能为空'},
      {key: '3102', value: '不存在该企业相关被执行人信息'}
    ]
  },
  71: {
    name: '黑名单-多头借贷信息查询',
    desc: '多头借贷信息查询',
    icon: 'icon-01-001.png',
    price: 1,
    url: 'blacklist/individual-multiple-loan',
    method: 'get',
    params: [
      {
        key: 'mobileNo',
        name: '手机号码',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [    // 输出参数(应用级)
      {key: 'PROVINCE', value: '省份'},
      {key: 'CITY', value: '城市'},
      {key: 'TYPE', value: '借贷类型'},
      {key: 'CYCLE', value: '查询时间段'},
      {key: 'P_TYPE', value: '平台类型'},
      {key: 'P_CODE', value: '平台代码'},
      {key: 'REGISTERTIME', value: '注册时间'},
      {key: 'APP_TIME', value: '申请时间'},
      {key: 'APP_AMOUNT', value: '申请金额区间'},
      {key: 'APP_RESULT', value: '申请结果'},
      {key: 'LOAN_TIME', value: '放款时间'},
      {key: 'LOAN_AMOUNT', value: '放款金额区间'},
      {key: 'OVERDUE_COUNTS', value: '逾期数量'},
      {key: 'OVERDUE_AMOUNT', value: '逾期/欠款金额区间'},
      {key: 'OVERDUE_TIME', value: '最近逾期时间'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3601', value: '字段mobileNo不能为空'},
      {key: '3602', value: '字段mobileNo不是有效的手机号码'}
    ]
  },
  82: {
    name: '黑名单-风险名单查询',
    desc: '风险名单查询',
    icon: 'icon-01-002.png',
    price: 1,
    url: 'blacklist/individual-risk-list',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'mobileNo',
        name: '手机号',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证号',
        type: 'string'
      },
      {
        key: 'email',
        name: '电子邮件',
        type: 'string'
      },
      {
        key: 'qqNo',
        name: 'QQ号码',
        type: 'string'
      },
      {
        key: 'username',
        name: '网站用户名',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [     // 输出参数(应用级)
      {key: 'name', value: '姓名'},
      {key: 'mobile', value: '手机号码'},
      {key: 'idNumber', value: '身份证号'},
      {key: 'isBadRelated', value: '关联人不良'},
      {key: 'isConcern', value: '建议关注用户'},
      {key: 'isBad', value: '是否信用不良'},
      {key: 'itemName', value: '字段'},
      {key: 'itemValue', value: '字段值'},
      {key: 'type', value: '风险名单类型'},
      {key: 'mark', value: '备注'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3501', value: '字段name不能为空'},
      {key: '3502', value: '字段mobileNo不能为空'},
      {key: '3503', value: '字段idCardNo不能为空'},
      {key: '3504', value: '字段mobileNo不是有效的手机号码'},
      {key: '3505', value: '字段idCardNo不是有效的身份证号码'},
      {key: '3506', value: '查无结果'}
    ]
  },
  17: {
    name: '黑名单-自然人失信人信息查询',
    desc: '自然人失信人信息查询',
    icon: 'icon-01-003.png',
    price: 1,
    url: 'blacklist/dishonest-individual',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证号',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [    // 输出参数（应用级)
      {key: 'case_number', value: '案件编号'},
      {key: 'court', value: '法庭'},
      {key: 'date', value: '时间'},
      {key: 'doc_number', value: '卷宗号'},
      {key: 'ex_department', value: '执行法庭'},
      {key: 'execution_desc', value: '执行描述'},
      {key: 'execution_status', value: '执行状态'},
      {key: 'final_duty', value: '最终判决'},
      {key: 'number', value: '身份证'},
      {key: 'oper_name', value: ''},
      {key: 'province', value: '省份'},
      {key: 'publish_date', value: '发布时间'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3201', value: '字段name不能为空'},
      {key: '3202', value: '字段idCardNo不能为空'},
      {key: '3203', value: '不存在该自然人相关失信信息'}
    ]
  },
  39: {
    name: '黑名单-自然人被执行人信息查询',
    desc: '自然人被执行人信息查询',
    icon: 'icon-01-004.png',
    price: 1,
    url: 'blacklist/executed-individual',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证号',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [        // 输出参数(应用级)
      {key: 'number', value: '身份证'},
      {key: 'amount', value: '金额'},
      {key: 'case_date', value: '时间'},
      {key: 'name', value: '姓名'},
      {key: 'case_number', value: '卷宗号'},
      {key: 'id', value: '编号'},
      {key: 'court', value: '法院'},
      {key: 'status', value: '状态'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3301', value: '字段name不能为空'},
      {key: '3302', value: '字段idCardNo不能为空'},
      {key: '3303', value: '不存在该自然人相关被执行人信息'}
    ]
  },
  85: {
    name: '黑名单-手机黑名单',
    desc: '手机黑名单',
    icon: 'icon-01-005.png',
    price: 1,
    url: 'blacklist/mobile-blacklist',
    method: 'get',
    params: [
      {
        key: 'mobileNo',
        name: '手机号码',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [     //  输出参数（应用级）
      {key: 'mobileNo', value: '手机号码'},
      {key: 'isBlack', value: '存在黑名单的手机号码'},
      {key: 'isOnBlacklist', value: '是否被列入黑名单'}
      // {key: 'isOnBlacklist', value: '是否被列入黑名单，0：没有黑名单 1：存在黑名单'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '3401', value: '字段mobileNo不能为空'},
      {key: '3402', value: '字段mobileNo不是有效的手机号码'}
    ]
  },

  // 身份验证
  21: {
    name: '身份验证-身份证实名验证',
    desc: '身份证实名验证',
    icon: 'icon-02-001.png',
    price: 1,
    url: 'identity/2factors-verification',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [     // 输出参数（应用级）
      {key: 'name', value: '姓名'},
      {key: 'idCardNo', value: '身份证'},
      {key: 'matchFlag', value: '匹配结果'},
      {key: 'flagMsg', value: '匹配结果消息'}
      // {key: 'matchFlag', value: '匹配结果，1：匹配，0：不匹配，-1,：无法验证'},
      // {key: 'flagMsg', value: '匹配结果消息(匹配，不匹配，无法验证)'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '6001', value: '字段name不能为空'},
      {key: '6002', value: '字段idCardNo不能为空'},
      {key: '6003', value: '字段idCardNo不是有效的身份证号码'}
    ]
  },

  // 运营商
  19: {
    name: '运营商-运营商三要素实名验证',
    desc: '运营商三要素实名验证',
    icon: 'icon-04-001.png',
    price: 1,
    url: 'carrier/3factors-verification',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证号',
        type: 'string'
      },
      {
        key: 'mobileNo',
        name: '手机号码',
        type: 'string'
      },
      {
        key: 'isDetail',
        name: '可选参数',
        desc: '输入1，返回详版信息',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [   // 输出参数（应用级)
      {key: 'flagMsg', value: '匹配结果消息'},
      // {key: 'flagMsg', value: '匹配结果消息(0：不匹配，1 ：匹配 ， -1 ：无法验证) 详版： 1：手机号、姓名、身份证号均一致 2：手机号和身份证号不一致，和姓名不一致 3：手机号和身份证号一致，和姓名不一致 4：手机号和姓名一致，身份证号不一致 5：证件类型非身份证，无法核查 6：手机号和身份证号一致，姓名无法核查 7：手机号和身份证号不一致，不再进行验证 8：手机号和姓名不一致，不再进行验证 9：查无此记录（包含未实名，未启用）'},
      {key: 'name', value: '姓名'},
      {key: 'matchFlag', value: '匹配结果状态信息码'},
      // {key: 'matchFlag', value: '匹配结果状态信息码，简版：-1~0 详版：1~9'},
      {key: 'idCardNo', value: '身份证'},
      {key: 'mobileNo', value: '手机号'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '4501', value: '字段idCardNo不能为空'},
      {key: '4502', value: '字段idCardNo不是有效的身份证号码'},
      {key: '4503', value: '字段name不能为空'},
      {key: '4504', value: '字段mobileNo不能为空'},
      {key: '4505', value: '字段mobileNo不是有效的手机号码'},
      {key: '4506', value: '无法查询状态'}
    ]
  },
  45: {
    name: '运营商-手机号码在网状态',
    desc: '手机号码在网状态',
    icon: 'icon-04-001.png',
    price: 1,
    url: 'carrier/service-status',
    method: 'get',
    params: [
      {
        key: 'mobileNo',
        name: '手机号',
        type: 'string'
      },
      {
        key: 'isDetail',
        name: '可选参数',
        desc: '输入1，返回详版信息',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'carrier', value: '运营商'},
      // {key: 'carrier', value: '返回运营商类型： 中国移动 中国联通 中国电信'},
      {key: 'mobileNo', value: '手机号'},
      {key: 'flagMsg', value: '在网状态'},
      {key: 'matchFlag', value: '在网状态码'}
      // {key: 'flagMsg', value: '在网状态描述，简版：0：在网 1：停机/启用/挂失 2：销号/预销号  详版： 0：正常在用； 1：停机； 2：在网但不可用； 3：不在网； 4：预销户； 5：其他； -1：无法查询；'},
      // {key: 'matchFlag', value: '在网状态码； 简版：0，1，2 详版：-1~5 '}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '7601', value: '字段mobileNo不能为空'},
      {key: '7602', value: '字段mobileNo不是有效的手机号码'},
      {key: '7604', value: '无法查询状态'}
    ]
  },
  42: {
    name: '运营商-手机号码在网时长',
    desc: '手机号码在网时长',
    icon: 'icon-04-001.png',
    price: 1,
    url: 'carrier/service-duration',
    method: 'get',
    params: [
      {
        key: 'mobileNo',
        name: '手机号',
        type: 'string'
      },
      {
        key: 'isDetail',
        name: '可选参数',
        desc: '输入1，返回详版信息',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'carrier', value: '运营商'},
      // {key: 'carrier', value: '返回运营商类型： 中国移动 中国联通 中国电信'},
      {key: 'mobileNo', value: '手机号'},
      {key: 'flagMsg', value: '在网时长'},
      {key: 'matchFlag', value: '在网时长区间'}
      // {key: 'flagMsg', value: '在网时长中文描述（例如：[0,6] 为 0到6个月)'},
      // {key: 'matchFlag', value: '简版：在网时长区间 ：[0-6]，[7-12] ，[13-24]，[25-36]，(36+) 详版：联通：(0,1], (1,2], [3-6], [7-12], [13-24], [25-36], [37,+) 移动：[0,3), [3,6), [6,12), [12,24), [24,+) 电信：[0-6), [6-12), [12-24), [24-36), [36,+) 备注：其中联通、电信为大于36月，移动为大于24个月'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '7501', value: '字段mobileNo不能为空'},
      {key: '7502', value: '字段mobileNo不是有效的手机号码'},
      {key: '7507', value: '查无结果'}
    ]
  },

  // 银行卡
  24: {
    name: '银联数据-银行卡三要素实名',
    desc: '银行卡三要素实名',
    icon: 'icon-03-001.png',
    price: 1,
    // url: 'idCardVerify/validateNameIDNumberBankAccount',
    url: '',    // url需要在页面上选择
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证号',
        type: 'string'
      },
      {
        key: 'bankCardNo',
        name: '银行卡号',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [     // 输出参数（应用级）
      {key: 'name', value: '姓名'},
      {key: 'idCardNo', value: '身份证号'},
      {key: 'bankCardNo', value: '银行卡号'},
      {key: 'matchFlag', value: '匹配结果'},
      {key: 'flagMsg', value: '匹配结果消息'}
      // {key: 'matchFlag', value: '匹配结果，1：匹配，0：不匹配，-1,：无法验证'},
      // {key: 'flagMsg', value: '匹配结果消息(匹配，不匹配，无法验证)'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '5001', value: '字段name不能为空'},
      {key: '5002', value: '字段idCardNo不能为空'},
      {key: '5003', value: '字段idCardNo不是有效的身份证号码'},
      {key: '5004', value: '字段bankCardNo不能为空'}
    ]
  },
  25: {
    name: '银联数据-银行卡四要素实名',
    desc: '银行卡四要素实名',
    icon: 'icon-03-001.png',
    price: 1,
    url: '',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名',
        type: 'string'
      },
      {
        key: 'idCardNo',
        name: '身份证号',
        type: 'string'
      },
      {
        key: 'bankCardNo',
        name: '银行卡号',
        type: 'string'
      },
      {
        key: 'mobileNo',
        name: '手机号',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [    //  输出参数（应用级）
      {key: 'flagMsg', value: '匹配结果消息'},
      // {key: 'flagMsg', value: '匹配结果消息(匹配，不匹配，无法验证)'},
      {key: 'name', value: '姓名'},
      {key: 'matchFlag', value: '匹配结果'},
      // {key: 'matchFlag', value: '匹配结果，1：匹配，0：不匹配，-1,：无法验证'},
      {key: 'idCardNo', value: '身份证'},
      {key: 'bankCardNo', value: '银行卡号'},
      {key: 'mobileNo', value: '手机号'}
    ],
    resultParams: [   // 输出参数(系统级)
      {name: 'resultCode', direction: '输出', type: 'int', desc: 'API调用结果代码，标识调用结果状态，具体含义参见系统级结果代码'},
      {name: 'resultMsg', direction: '输出', type: 'string', desc: 'API调用结果消息，描述API调用情况信息'},
      {name: 'resultData', direction: '输出', type: '复合', desc: 'API调用的实际返回结果数据，当且仅当resultCode=0时有值，具体含义参见应用级输出参数'},
      {name: 'success', direction: '输出', type: 'bool', desc: '调用成功标志，成功为 true，失败为 false'}
    ],
    systemCode: [    // 结果代码（系统级)
      {key: '0', value: '执行成功'},
      {key: '4', value: '用户余额不足'},
      {key: '5', value: 'IP地址不允许访问'},
      {key: '8', value: '服务暂不可用'},
      {key: '9', value: 'API接口异常'}
    ],
    applyCode: [    // 结果代码（应用级)
      {key: '5101', value: '字段name不能为空'},
      {key: '5102', value: '字段idCardNo不能为空'},
      {key: '5103', value: '字段bankCardNo不能为空'},
      {key: '5104', value: '字段mobileNo不能为空'},
      {key: '5105', value: '字段idCardNo不是有效的身份证号码'},
      {key: '5106', value: '字段mobileNo手机号码不存在'}
    ]
  },

  // 车辆
  64: {
    name: '车辆-车辆违章信息查询',
    desc: '车辆违章信息查询',
    icon: 'icon-06-001.png',
    price: 0,
    url: 'vehical/traffic-violation',
    method: 'get',
    params: [
      {
        key: 'plateNo',
        name: '车牌号码',
        type: 'string'
      },
      {
        key: 'engineNo',
        name: '发动机号',
        type: 'string'
      },
      {
        key: 'vin',
        name: '车架号',
        type: 'string'
      },
      {
        key: 'city',
        name: '城市',
        type: 'string'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'province', value: '省份'},
      {key: 'city', value: '城市'},
      {key: 'plateNo', value: '车牌号码'},
      {key: 'date', value: '时间'},
      {key: 'score', value: '分数'},
      {key: 'address', value: '地址'},
      {key: 'code', value: '代号'},
      {key: 'money', value: '金额'},
      {key: 'handled', value: '处理结果'},
      {key: 'action', value: '违章行为'}
    ]
  },

  // 工商
  9: {
    name: '工商-企业对外投资信息查询',
    desc: '企业对外投资信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/investment',
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称或企业注册号或统一社会信用代码'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'oper_name', value: '执行人'},
      {key: 'name', value: '名称'},
      {key: 'start_date', value: '时间'}
    ]
  },
  2: {
    name: '工商-企业工商照面信息查询',
    desc: '企业工商照面信息查询',
    icon: 'icon-05-020.png',
    url: 'enterprise/summary',
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称或企业注册号或统一社会信用代码'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'econ_kind', value: '类型'},
      {key: 'oper_name', value: '法人'},
      {key: 'address', value: '地址'},
      {key: 'term', value: '期限'},
      {key: 'status', value: '状态'},
      {key: 'name', value: '名称'},
      {key: 'regist_capi', value: '注册资金'},
      {key: 'start_date', value: '注册时间'},
      {key: 'reg_no', value: '注册号'}
    ]
  },
  5: {
    name: '工商-企业欠税信息查询',
    desc: '企业欠税信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/tax-arrears',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'overdue_type', value: '类型'},
      {key: 'oper_id_num', value: '编号'},
      {key: 'area', value: '区域'},
      {key: 'curr_overdue_amount', value: '当前欠税额'},
      {key: 'oper_name', value: '姓名'},
      {key: 'address', value: '地址'},
      {key: 'taxpayer_type', value: '类型'},
      {key: 'pub_date', value: '发布日期'},
      {key: 'overdue_period', value: '过期'},
      {key: 'pub_department', value: '发布机构'},
      {key: 'taxpayer_num', value: '税务编号'},
      {key: 'overdue_amount', value: '欠税总额'}
    ]
  },
  12: {
    name: '工商-企业经营异常查询',
    desc: '企业经营异常查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/abnormal-operation',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'name', value: '公司名称'},
      {key: 'reg_no', value: '公司注册号'},
      {key: 'province', value: '省份'},
      {key: 'in_reason', value: '列入原因'},
      {key: 'in_date', value: '列入时间'},
      {key: 'out_reason', value: '移出原因'},
      {key: 'out_date', value: '移出时间'},
      {key: 'department', value: '做出决定部门'}
    ]
  },
  6: {
    name: '工商-法院公告信息查询',
    desc: '法院公告信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/court-announcement',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'content', value: '内容'},
      {key: 'court', value: '法院'},
      {key: 'date', value: '日期'},
      {key: 'type', value: '状态'}
    ]
  },
  7: {
    name: '工商-法院开庭信息查询',
    desc: '法院开庭信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/court-session',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'court', value: '法庭名称'},
      {key: 'hearing_date', value: '开庭日期'},
      {key: 'case_no', value: '开庭案号'},
      {key: 'case_reason', value: '开庭案由'},
      {key: 'department', value: '承办部门'},
      {key: 'judge', value: '审判长'},
      {key: 'plaintiff', value: '原告'},
      {key: 'defendant', value: '被告'}
    ]
  },
  8: {
    name: '工商-法院判决信息查询',
    desc: '法院判决信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/court-judgement',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'date', value: '提交日期'},
      {key: 'type', value: '法院判决类型'},
      {key: 'title', value: '判决标题'}
    ]
  },
  35: {
    name: '工商-域名信息查询',
    desc: '域名信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/domain-name',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'company', value: '公司名称'},
      {key: 'type', value: '主办单位性质'},
      {key: 'home_url', value: '主页URL'},
      {key: 'number', value: '网站备案许可号'},
      {key: 'eid', value: '企业ID'},
      {key: 'site_name', value: '网站名称'},
      {key: 'check_date', value: '核查日期'},
      {key: 'ename', value: '公司名称'},
      {key: 'domain', value: '域名信息'}
    ]
  },
  36: {
    name: '工商-企业证书信息查询',
    desc: '企业证书信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/certificate',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'type', value: '资质证书类型'},
      {key: 'num', value: '证书编号'},
      {key: 'issue_date', value: '发证时间'},
      {key: 'validity_end', value: '截止日期'},
      {key: 'status', value: '证书状态'},
      {key: 'remarks', value: '备注信息'}
    ]
  },
  15: {
    name: '工商-企业新闻信息查询',
    desc: '企业新闻信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/news',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'title', value: '新闻标题'},
      {key: 'time', value: '发布日期'},
      {key: 'content', value: '新闻简介'},
      {key: 'source', value: '新闻来源'},
      {key: 'url', value: '原文链接'}
    ]
  },
  13: {
    name: '工商-司法拍卖信息查询',
    desc: '司法拍卖信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/court-auction',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'full_name', value: '拍卖标题'},
      {key: 'restrict', value: '权利限制情况'},
      {key: 'basis', value: '权利来源'},
      {key: 'description', value: '拍品介绍'},
      {key: 'court', value: '处置法院'},
      {key: 'start_price', value: '拍卖起拍价'},
      {key: 'date', value: '拍卖日期'}
    ]
  },
  16: {
    name: '工商-专利信息查询',
    desc: '专利信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/patent',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'patent_name', value: '专利名称'},
      {key: 'type_name', value: '专利类型'},
      {key: 'request_date', value: '申请日期'}
    ]
  },
  48: {
    name: '工商-企业查询',
    desc: '企业查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/list',
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称/企业注册号/统一社会信用代码'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'name', value: '企业名称'},
      {key: 'oper_name', value: '法人代表'},
      {key: 'start_date', value: '注册日期'},
      {key: 'reg_no', value: '企业注册号'},
      {key: 'credit_no', value: '统一社会信用代码'}
    ]
  },
  1: {
    name: '工商-企业工商详细信息查询',
    desc: '企业工商详细信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/detail',
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称/企业注册号/统一社会信用代码'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'name', value: '名称'},
      {key: 'reg_no', value: '注册编号'},
      {key: 'oper_name', value: '企业法人'},
      {key: 'regist_capi', value: '注册资本'},
      {key: 'status', value: '当前状态'},
      {key: 'econ_kind', value: '注册类型'},
      {key: 'term_start', value: '注册期限起始时间'},
      {key: 'term_end', value: '注册期限终止时间'},
      {key: 'end_date', value: '终止时间'},
      {key: 'address', value: '地址'},
      {key: 'check_date', value: '核准日期'},
      {key: 'belong_org', value: '登记机关'},
      {key: 'start_date', value: '开业日期'},
      {key: 'partners', value: '主要股东信息'},
      {key: 'stock_type', value: '股东类型'},
      {key: 'identify_no', value: '证件号'},
      {key: 'identify_type', value: '证件类型'},
      {key: 'should_capi_items', value: '应出资'},
      {key: 'shoud_capi', value: '认缴出资额'},
      {key: 'invest_type', value: '出资方式'},
      {key: 'should_capi_date', value: '出资时间'},
      {key: 'real_capi_items', value: '实出资'},
      {key: 'real_capi', value: '实缴出资额'},
      {key: 'invest_type', value: '出资方式'},
      {key: 'real_capi_date', value: '实缴时间'},
      {key: 'employees', value: '主要员工信息'},
      {key: 'job_title', value: '职位'},
      {key: 'changerecords', value: '注册信息变更情况'},
      {key: 'change_item', value: '变更内容'},
      {key: 'change_date', value: '变更日期'},
      {key: 'before_content', value: '变更前'},
      {key: 'after_content', value: '变更后'},
      {key: 'branches', value: '分支机构情况'},
      {key: 'scope', value: '经营范围'},
      {key: 'abnormal_items', value: '经营异常信息'}
    ]
  },
  41: {
    name: '工商-企业工商详细信息实时查询',
    desc: '企业工商详细信息实时查询',
    icon: 'icon-05-020.png',
    url: 'enterprise/real-time-detail',
    price: 1,
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称/企业注册号/统一社会信用代码'
      },
      {
        key: 'province',
        name: '省份'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'name', value: '名称'},
      {key: 'reg_no', value: '注册编号'},
      {key: 'oper_name', value: '企业法人'},
      {key: 'regist_capi', value: '注册资本'},
      {key: 'status', value: '当前状态'},
      {key: 'econ_kind', value: '注册类型'},
      {key: 'term_start', value: '注册期限起始时间'},
      {key: 'term_end', value: '注册期限终止时间'},
      {key: 'end_date', value: '终止时间'},
      {key: 'address', value: '地址'},
      {key: 'check_date', value: '核准日期'},
      {key: 'belong_org', value: '登记机关'},
      {key: 'start_date', value: '开业日期'},
      {key: 'partners', value: '主要股东信息'},
      {key: 'employees', value: '主要员工信息'},
      {key: 'job_title', value: '职位'},
      {key: 'changerecords', value: '注册信息变更情况'},
      {key: 'change_item', value: '变更内容'},
      {key: 'change_date', value: '变更日期'},
      {key: 'before_content', value: '变更前'},
      {key: 'after_content', value: '变更后'},
      {key: 'branches', value: '分支机构情况'},
      {key: 'stock_type', value: '股东类型'},
      {key: 'identify_no', value: '证件号'},
      {key: 'identify_type', value: '证件类型'},
      {key: 'scope', value: '经营范围'},
      {key: 'abnormal_items', value: '经营异常信息'}
    ]
  },
  10: {
    name: '工商-企业法人对外投资&任职查询',
    desc: '企业法人对外投资&任职查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/legal-representative',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'representativeInvestList', value: '法定代表人对外任职信息'},
      {key: 'frName', value: '法人姓名'},
      {key: 'entName', value: '企业（机构）名称'},
      {key: 'regNo', value: '企业注册号'},
      {key: 'entType', value: '企业（机构）类型'},
      {key: 'regCap', value: '注册资本'},
      {key: 'regCapCur', value: '注册币种'},
      {key: 'entStatus', value: '企业状态'},
      {key: 'canDate', value: '注销日期'},
      {key: 'revDate', value: '吊销日期'},
      {key: 'regOrg', value: '登记机关'},
      {key: 'position', value: '任职职务'},
      {key: 'lerepsign', value: '是否法定代表人'},
      {key: 'esDate', value: '开业日期'},
      {key: 'representativePositionList', value: '企业法人对外投资信息'},
      {key: 'subConam', value: '认缴出资额（万元）'},
      {key: 'currency', value: '认缴资本币种'},
      {key: 'fundedRatio', value: '出资比例'},
      {key: 'creditCode', value: ''},
      {key: 'subCurrency', value: ''}
    ]
  },
  18: {
    name: '工商-自然人对外投资&任职查询',
    desc: '自然人对外投资&任职查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'individual/investment',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '姓名'
      },
      {
        key: 'idCardNo',
        name: '身份证号'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'representativeCompanyList', value: '企业法定代表人信息'},
      {key: 'shareholderList', value: '企业股东信息'},
      {key: 'manageCompanyList', value: '企业主要管理人员信息'},
      {key: 'regNo', value: '企业注册号'},
      {key: 'entType', value: '企业类型'},
      {key: 'subConAm', value: '认缴出资额（单位：万元）'},
      {key: 'regCapCur', value: '注册币种'},
      {key: 'ryName', value: '查询人姓名'},
      {key: 'entName', value: '企业名称'},
      {key: 'regCap', value: '注册资本（单位：万元）'},
      {key: 'currency', value: '认缴出资币种'},
      {key: 'entStatus', value: '企业状态'},
      {key: 'position', value: '任职职务'}
    ]
  },
  11: {
    name: '工商-企业工商年报查询',
    desc: '企业工商年报查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/annual-report',
    method: 'get',
    params: [
      {
        key: 'keyword',
        name: '企业名称',
        desc: '企业名称或企业注册号或统一社会信用代码'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'report_year', value: '年报年份'},
      {key: 'report_date', value: '发布日期'},
      {key: 'name', value: '名称'},
      {key: 'reg_no', value: '企业注册号'},
      {key: 'telephone', value: '企业联系电话'},
      {key: 'email', value: '电子邮箱'},
      {key: 'address', value: '企业通信地址'},
      {key: 'address', value: '企业通信地址'},
      {key: 'oper_name', value: '法定代表人'},
      {key: 'zip_code', value: '邮政编码'},
      {key: 'reg_capi', value: '注册资本'},
      {key: 'if_invest', value: '企业是否有投资信息或购买其他公司股权'},
      {key: 'if_website', value: '是否有网站或网店'},
      {key: 'if_equity', value: '有限责任公司本年度是否发生股东股权转'},
      {key: 'if_external_guarantee', value: '是否提供对外担保'},
      {key: 'collegues_num', value: '从业人数'},
      {key: 'status', value: '企业经营状态'},
      {key: 'sale_income', value: '营业总收入'},
      {key: 'debit_amount', value: '负债总额'},
      {key: 'net_amount', value: '年度净利润'},
      {key: 'prac_person_num', value: '实际员工数量'},
      {key: 'profit_reta', value: '所有者权益合计'},
      {key: 'profit_total', value: '利润总额'},
      {key: 'tax_total', value: '纳税总额'},
      {key: 'total_equity', value: '资产总额'},
      {key: 'fare_scope', value: '主营业务'},
      {key: 'serv_fare_income', value: '主营业务收入'},
      {key: 'websites', value: '网站信息'},
      {key: 'web_type', value: '网站类型'},
      {key: 'web_name', value: '网站名称'},
      {key: 'web_url', value: '网站网址'},
      {key: 'stock_changes', value: '股东变更信息'},
      {key: 'before_percent', value: '变更前股权比例'},
      {key: 'after_percent', value: '变更后股权比例'},
      {key: 'change_date', value: '股权变更日期'},
      {key: 'invest_items', value: '投资信息'},
      {key: 'invest_invest_name', value: '投资企业名称'},
      {key: 'invest_invest_reg_no', value: '投资企业注册号'},
      {key: 'invest_invest_capi', value: '投资金额'},
      {key: 'invest_invest_percent', value: '投资占比'},
      {key: 'partners', value: '股东信息'},
      {key: 'stock_name', value: '股东名称'},
      {key: 'stock_type', value: '股东类型'},
      {key: 'stock_percent', value: '股东所占比例'},
      {key: 'identify_type', value: '证件类型'},
      {key: 'identify_no', value: '证件编号'},
      {key: 'should_capi_items', value: '认缴出资信息'},
      {key: 'should_capi_invest_type', value: '认缴出资方式'},
      {key: 'should_capi_shoud_capi', value: '认缴出资额'},
      {key: 'should_capi_should_capi_date', value: '认缴出资时间'},
      {key: 'real_capi_items', value: '实缴出资信息'},
      {key: 'real_capi_real_capi', value: '实缴出资额'},
      {key: 'real_capi_invest_type', value: '实缴出资方式'},
      {key: 'real_capi_real_capi_date', value: '实缴出资时间'},
      {key: 'guarantee_items', value: '债权信息'},
      {key: 'guarantee_creditor', value: '债权人信息'},
      {key: 'guarantee_debitor', value: '债务人信息'},
      {key: 'guarantee_debit_type', value: '主债权种类'},
      {key: 'guarantee_debit_amount', value: '主债权数额'},
      {key: 'guarantee_debit_period', value: '履行债务的期限'},
      {key: 'guarantee_guarant_method', value: '保证的方式'},
      {key: 'guarantee_guarant_period', value: '保证的期间'},
      {key: 'guarantee_guarant_scope', value: '保证担保的范围'}
    ]
  },
  14: {
    name: '工商-商标信息查询',
    desc: '商标信息查询',
    icon: 'icon-05-020.png',
    price: 1,
    url: 'enterprise/trademark',
    method: 'get',
    params: [
      {
        key: 'name',
        name: '企业名称'
      },
      {
        key: 'appKey',
        name: '用户令牌',
        desc: '由泰融分配',
        type: 'string'
      }
    ],
    keyMap: [
      {key: 'name', value: '名称'},
      {key: 'company', value: '公司名称'},
      {key: 'status', value: '商标状态'},
      {key: 'reg_number', value: '企业注册号'},
      {key: 'type_num', value: '商标分类码'},
      {key: 'type_name', value: '商标分类名'},
      {key: 'apply_date', value: '申请日期'},
      {key: 'period', value: '专用权期限'},
      {key: 'agent', value: '代理人名称'},
      {key: 'steps', value: '步骤'},
      {key: 'date', value: '商标流程日期'},
      {key: 'step', value: '商标流程内容'},
      {key: 'products', value: '产品'},
      {key: 'num', value: '产品服务列表'},
      {key: 'image_name', value: '图片'}
    ]
  }
  // 30: {
  //   name: '征信报告-央行个人简版征信报告',
  //   desc: '央行个人简版征信报告',
  //   icon: 'icon-05-020.png',
  //   url: 'creditReference/getPersonalCredit',
  //   method: 'get',
  //   params: [
  //     {
  //       key: 'loginname',
  //       name: '登录名称'
  //     },
  //     {
  //       key: 'password',
  //       name: '登录密码'
  //     },
  //     {
  //       key: 'code',
  //       name: '短信验证码'
  //     }
  //   ],
  //   keyMap: [
  //     // {key: 'name', value: '名称'},
  //     // {key: 'company', value: '公司名称'},
  //     // {key: 'status', value: '商标状态'},
  //     // {key: 'reg_number', value: '企业注册号'},
  //     // {key: 'type_num', value: '商标分类码'},
  //     // {key: 'type_name', value: '商标分类名'},
  //     // {key: 'apply_date', value: '申请日期'},
  //     // {key: 'period', value: '专用权期限'},
  //     // {key: 'agent', value: '代理人名称'},
  //     // {key: 'steps', value: '步骤'},
  //     // {key: 'date', value: '商标流程日期'},
  //     // {key: 'step', value: '商标流程内容'},
  //     // {key: 'products', value: '产品'},
  //     // {key: 'num', value: '产品服务列表'},
  //     // {key: 'image_name', value: '图片'}
  //   ]
  // },
  // 57: {
  //   name: '征信报告-行业情况报告',
  //   desc: '行业情况报告',
  //   icon: 'icon-05-020.png',
  //   url: 'companyData/getCompanyListInfo',
  //   method: 'get',
  //   params: [
  //     {
  //       key: 'companyRegNumber',
  //       name: '企业名称'
  //     }
  //   ],
  //   keyMap: [
  //     {key: 'name', value: '名称'},
  //     {key: 'oper_name', value: '企业法人'},
  //     {key: 'start_date', value: '开业时间'}
  //   ]
  // },
  // 31: {
  //   name: '征信报告-个人互联网信用分析报告',
  //   desc: '个人互联网信用分析报告',
  //   icon: 'icon-05-020.png',
  //   url: 'credit/individual/internet/reports',
  //   method: 'get',
  //   params: [
  //     {
  //       key: 'number',
  //       name: '报告编号'
  //     },
  //     {
  //       key: 'name',
  //       name: '认证人姓名'
  //     },
  //     {
  //       key: 'idCardNo',
  //       name: '身份证号码'
  //     },
  //     {
  //       key: 'status',
  //       name: '报告状态'
  //     }
  //   ],
  //   keyMap: [
  //     {key: 'name', value: '名称'},
  //     {key: 'oper_name', value: '企业法人'},
  //     {key: 'start_date', value: '开业时间'}
  //   ]
  // }
};
