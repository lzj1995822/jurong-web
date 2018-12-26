export default {
  excludeKeys: ['total', 'num'],        // 需要排除的key，即查询条件，节省表格显示空间
  /**
   * 格式化查询结果
   * @param data: 查询结果
   * @param excludeParams: 需要从结果中排除的key，有些api结果里需要排除这些参数
   */
  format (data, dataType, excludeParams) {
    this.excludeKeys = ['total', 'num'];
    if (excludeParams && excludeParams.length > 0) {
      excludeParams.forEach(param => {
        this.excludeKeys.push(param.name);
      });
    }
    if (data.hasOwnProperty('RESULTS')) {
      return this._format1(data);
    } else if (data.hasOwnProperty('result')) {
      return this._format2(data);
    } else if (dataType === 'n-primitive-1-array') {
      return this._formatNPrimitive1Array(data);
    } else if (dataType === 'n-primitive-1-object') {
      this._formatNPrimitive1Object(data);
    } else {
      return this.formatNPrimitive(data);
    }
    // else if (data.hasOwnProperty('items')) {
    //   return this._format2(data);
    // } else if (data.hasOwnProperty('lists')) {
    //   return this._format3(data);
    // }
  },

  /**
   * 只包含原始类型
   */
  formatNPrimitive (data) {
    var results = [], obj = {}, key;
    for (key in data) {
      obj[key] = data[key];
    }
    results.push(obj);
    return results;
  },
  // 返回数据示例：黑名单-多头借贷
  // "resultData": {
  //   "RESULTS": [
  //     {
  //       "DATA": [
  //         {
  //           "P_CODE": "TF112660",
  //           "APP_AMOUNT": "0W～0.2W"
  //         },
  //       ],
  //       "TYPE": "T004",
  //       "CYCLE": "2015-06-27--2017-06-27"
  //     }
  //   ],
  //   "CITY": "衢州",
  //   "PROVINCE": "浙江",
  //   "MOBILE": "15068922663"
  // }
  _format1 (data) {
    var results = [], key, resultIndex, dataIndex, dataKey, obj;
    this.excludeKeys.push('results');
    if (data.RESULTS && data.RESULTS.length) {
      for (resultIndex in data.RESULTS) {
        if (data.RESULTS[resultIndex].DATA && data.RESULTS[resultIndex].DATA.length) {
          for (dataIndex in data.RESULTS[resultIndex].DATA) {
            obj = {};
            for (key in data) {
              if (this.excludeKeys.indexOf(key.toLowerCase()) === -1) {
                obj[key] = data[key];
              }
            }
            for (key in data.RESULTS[resultIndex]) {
              if (key !== 'DATA') {
                obj[key] = data.RESULTS[resultIndex][key];
              }
            }
            for (dataKey in data.RESULTS[resultIndex].DATA[dataIndex]) {
              obj[dataKey] = data.RESULTS[resultIndex].DATA[dataIndex][dataKey];
            }
            results.push(obj);
          }
        }
      }
    }
    return results;
  },
  // 返回数据示例：黑名单-风险名单
  // "resultData": {
  //   "result": {
  //     "isBadRelated": "2",
  //     "isConcern": "2",
  //     "isBad": "1",
  //     "blackList": [
  //       {
  //         "itemName": "最早出现时间",
  //         "itemValue": "2015-09-25 16:59:35.2",
  //         "type": "欺诈",
  //         "mark": ""
  //       }
  //     ]
  //   },
  //   "mobile": "15059804288",
  //   "name": "林史超",
  //   "idNumber": "350524198512270536"
  // }
  _format2 (data) {
    var results = [], obj, key, index;
    if (data.result && data.result.blackList && data.result.blackList.length) {
      for (index in data.result.blackList) {
        obj = {};
        for (key in data) {
          if (key !== 'result') {
            obj[key] = data[key];
          }
        }
        for (key in data.result) {
          if (key !== 'blackList') {
            obj[key] = data.result[key];
          }
        }
        for (key in data.result.blackList[index]) {
          obj[key] = data.result.blackList[index][key];
        }
        results.push(obj);
      }
    }
    return results;
  },

  /**
   * 多个原始类型，一个数组
   * @param data
   * @private
   */
  _formatNPrimitive1Array (data) {
    var arrayKey, key, index, results = [], obj;
    // 查找数组的key
    for (key in data) {
      if (data[key] instanceof Array) {
        arrayKey = key;
        break;
      }
    }
    // 用数组对象 + 原始类型，生成返回数组里的对象
    if (data[arrayKey] && data[arrayKey].length) {
      for (index in data[arrayKey]) {
        obj = {};
        // 先拼装简单类型，排除数组类型
        for (key in data) {
          if (key !== arrayKey && this.excludeKeys.indexOf(key.toLowerCase()) === -1) {
            obj[key] = data[key];
          }
        }
        // 再拼装数组里面的对象
        for (key in data[arrayKey][index]) {
          obj[key] = data[arrayKey][index][key];
        }
        results.push(obj);
      }
    }
    return results;
  },
  /**
   * 多个原始类型，一个对象
   */
  // _formatNPrimitive1Object (data) {
  //   var objectKey, key, index, results = [], obj;
  //   // 查找对象的key
  //   for (key in data) {
  //     if (data[key] instanceof Object) {
  //       objectKey = key;
  //       break;
  //     }
  //   }
  //   // 用对象 + 原始类型，生成返回数组里的对象
  // },

  /**
   * 检测数据类型（resultData的结构）
   * 原始类型   数组    对象
   * primitive    array   object
   *    n          0        0      // 多个原始类型（n-primitive）
   *    n          1        0      // 多个原始类型，一个数组（n-primitive-1-array）
   *    x          n        n      // 多个数组或对象（n-list）
   */
  checkFormat (data) {
    var result = '',
      primitiveCount = 0,
      arrayCount = 0,
      objectCount = 0,
      key;
    for (key in data) {
      if (data[key] instanceof Array) {
        arrayCount++;
      } else if (data[key] instanceof Object) {
        objectCount++;
      } else {
        primitiveCount++;
      }
    }
    if (primitiveCount > 0 && arrayCount === 0 && objectCount === 0) {
      result = 'n-primitive';
    } else if (primitiveCount > 0 && arrayCount === 1 && objectCount === 0) {
      result = 'n-primitive-1-array';
    } else if (arrayCount > 0 || objectCount > 0) {
      result = 'n-list';
    }
    return result;
  },

  /**
   * 处理时间
   * time ---- 时间
   * format ---- 处理成什么样的格式
   */
  formatDate (time, format) {
    let t = new Date(time);
    var tf = function (i) {
      return (i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
        case 'MM':
          return tf(t.getMonth() + 1);
        case 'mm':
          return tf(t.getMinutes());
        case 'dd':
          return tf(t.getDate());
        case 'HH':
          return tf(t.getHours());
        case 'ss':
          return tf(t.getSeconds());
      }
    });
  }
};
