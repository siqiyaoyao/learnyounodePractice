

var date = new Date();
console.log(typeof(date));// object date
console.log(date); // Mon Jan 29 2018 09:29:24 GMT+0800 (中国标准时间) {}

var dateNoNew = Date();
console.log(typeof(dateNoNew)); // string
console.log(dateNoNew); // on Jan 29 2018 09:29:24 GMT+0800 (中国标准时间)

//时间格式化
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

var time1 = new Date().Format("yyyy-MM-dd hh:mm");
console.log(typeof(time1)); // string
console.log(time1); // 2018-01-29 09:51



url.format({
  protocol:"http:",
  host:"182.163.0:60",
  port:"60"
});
/*
返回值：
'http://182.163.0:60'
*/


url.resolve("http://whitemu.com","gulu");
/*
返回值：
'http://whitemu.com/gulu'
*/