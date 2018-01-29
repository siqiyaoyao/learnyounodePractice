## 概念
### 元数据 （meta-data）
描述数据的数据（data about other data），对数据及信息资源的描述性信息
数据是指普通文件中的实际数据，而元数据指用来描述一个文件的特征的系统数据，诸如访问权限、文件拥有者以及文件数据块的分布信息等等。

### Date 对象
用于处理日期与时间，创建放过 new Date();
如果没有输入任何参数，则Date的构造器会依据系统设置的当前时间来创建一个Date对象。
提供UTC（格林威治时间，time中的世界标准时间）时间方法，也提供当地时间（js 客户端电脑所用时间）的方法。
在函数前是否有new，返回的对象不同。
```javascript
var date = new Date();
console.log(typeof(date));// object date
console.log(date); // Mon Jan 29 2018 09:29:24 GMT+0800 (中国标准时间) {}

var dateNoNew = Date();
console.log(typeof(dateNoNew)); // string
console.log(dateNoNew); // on Jan 29 2018 09:29:24 GMT+0800 (中国标准时间)
```
string 转 data

格式化
```javascript
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
```


### url 模块
url.parse(urlString,boolean,boolean)
将一个url的字符串解析并返回一个url的对象

url.format(urlobj) 将传入的url对象转换为一个url字符串并返回

url.resolve(from,to)
返回一个格式为‘from/to’的字符串对象，

url.resolve("http://whitemu.com","gulu");
/*
返回值：
'http://whitemu.com/gulu'
*/


### 网络传输
socket
http
request
respond

req.method ==='POST'

## 复习
### js 关于string的常用处理
.split( separator，howmany) 字符串以separater为标志物进行拆分，分割成字符串数组,字符串或正则表达式，howmany,返回数组的最大长度。
.joint(separator ) 返回一个字符串，将数组中的每个元素用separator进行连接放入一个字符串 
.toUpperCase( ) 转换为大写字母
.toLowerCase( ) 转换为小写字母
.reverse( ) 反转字符串
object.toString( ) 将其他类型的物件转换为字符串类型

### jquery 语法




 

