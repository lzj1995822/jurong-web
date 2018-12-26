import XLSX from 'xlsx';

export default {
  /**
   * 导出数据为excel
   * map: key对应的中文，作为表头显示
   */
  export2Excel (data, map) {
    downloadExl(data, 'xlsx', map);
  }
};

function downloadExl (json, type, map) {
  var tmpDown, // 导出的二进制对象
    tmpdata = json[0],
    keyMap = [], // 获取keys
    k,
    outputPos,
    tmpWB,
    href;
  json.unshift({});
  for (k in tmpdata) {
    keyMap.push(k);
    json[0][k] = map[k];
  }
  tmpdata = []; // 用来保存转换好的json
  json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
    v: v[k],
    position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
  }))).reduce((prev, next) => prev.concat(next)).forEach(function (v, i) {
    tmpdata[v.position] = {
      v: v.v
    };
  });
  outputPos = Object.keys(tmpdata); // 设置区域,比如表格从A1到D10
  tmpWB = {
    SheetNames: ['sheet1'], // 保存的表标题
    Sheets: {
      'sheet1': Object.assign({},
        tmpdata, // 内容
        {
          '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
        })
    }
  };
  tmpDown = new Blob([s2ab(XLSX.write(tmpWB,
    {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'}// 这里的数据是用来定义导出的格式类型
  ))], {
    type: ''
  }); // 创建二进制对象写入转换好的字节流
  href = URL.createObjectURL(tmpDown); // 创建对象超链接
  document.getElementById('hf').href = href; // 绑定a标签
  document.getElementById('hf').click(); // 模拟点击实现下载
  setTimeout(function () { // 延时释放
    URL.revokeObjectURL(tmpDown); // 用URL.revokeObjectURL()来释放这个object URL
  }, 100);
}

/**
 * 字符串转字符流
 */
function s2ab (s) {
  var buf = new ArrayBuffer(s.length),
    view = new Uint8Array(buf),
    i;
  for (i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

/**
 * 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
 */
function getCharCol (n) {
  let s = '',
    m = 0;
  while (n > 0) {
    m = n % 26 + 1;
    s = String.fromCharCode(m + 64) + s;
    n = (n - m) / 26;
  }
  return s;
}
