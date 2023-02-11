export function replaceKey(arr,old,newKey){
  for(var i=0;i<arr.length;i++){
    var obj = arr[i];
    obj[newKey] = obj[old];
    delete obj[old];
  }
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
export function formatDate(t,fmt) {
  var o = {
    "M+" : t.getMonth()+1,                 //月份
    "d+" : t.getDate(),                    //日
    "h+" : t.getHours(),                   //小时
    "m+" : t.getMinutes(),                 //分
    "s+" : t.getSeconds(),                 //秒
    "q+" : Math.floor((t.getMonth()+3)/3), //季度
    "S"  : t.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (t.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}

export function fixNum(value) {
  var param = [];
  var k = 10000,
      sizes = ['', '万', '亿', '万亿'],
      i;
  if(value < k){
    param[0] =value
    param[1]=''
  }else{
    i = Math.floor(Math.log(value) / Math.log(k));

    param[0] = ((value / Math.pow(k, i))).toFixed(1);
    param[1] = sizes[i];
  }
  return param.join('');
}

export function pluck(obj, key) {
  var arr = obj.map(o=>o[key])
}

export function getStorageSync(key,defaultVal=null){
  const val = Taro.getStorageSync(key);
  if(!val) {
    return defaultVal;
  }
  return val
}

export function setStorageSync(key,val){
  try{
    Taro.setStorageSync(key,val)
  } catch(e) {
    console.log(e)
  }
}
