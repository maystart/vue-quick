const CONSTANT = {
  LOTTERY_STATUS: [
    { code: '0', text: '申请兑现' },
    { code: '1', text: '待审核' },
    { code: '2', text: '取消' },
    { code: '3', text: '退回' },
    { code: '5', text: '查看物流' },
    { code: '9', text: '完成' }
  ]
};

export const get_constant = constant => {
  if (!constant) {
    return '';
  }
  return CONSTANT[constant];
}

export const get_constant_by_value = (constant, value) => {
  if (!constant) {
    return '';
  }
  if (!value) {
    return '';
  }
  var values = get_constant(constant);
  if (values && Array.isArray(values) && values.length) {
    for (var i = 0; i < values.length; i++) {
      if (values[i].code == value) {
        return values[i].text;
      }
    };
  }
}

//生成随机数
export const getUUID = function (len) {
  len = len || 6;
  len = parseInt(len, 10);
  len = isNaN(len) ? 6 : len;
  var seed = "0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ";
  var seedLen = seed.length - 1;
  var uuid = "";
  while (len--) {
    uuid += seed[Math.round(Math.random() * seedLen)];
  }
  return uuid;
};
