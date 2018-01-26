## 概念 
### 流（stream）
strean 是一个抽象接口,node中有很多对象实现了该接口，例如，对http服务器发起请求的request对象就是一个stream，还有标准输出（stdout）.
stream是**EventEmitter**的实例，有4种常用事件：
- data:当有数据可读时触发；
- end:没有更多的数据可读时触发；
- error:在接收和写入过程中发生错误触发；
- finish:所有数据已被写入到底层系统时触发；

### 管道(pipe)
可以通过pipe将输入定位到输出，输入输出可以是控制台或者文件流或者http请求。
pipe不仅可以将导向不同的位置，也可以在导流的过程中进行处理：链式流；
- 范例：
```javascript
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```
### 异步 (async)
异步编程是指由于异步I/O等因素，无法同步获得执行结果时， 在回调函数中进行下一步操作的代码编写风格,常见的如**setTimeout**函数、**ajax**请求等等。
node 里有**async**专门处理异步的模块。


## 作业反思
### 优化
- 要注意监听异常事件（error）;
```javascript
http.get(url,function(response){
    response.pipe(bl(function(err,data){ // 直到数据读取完毕 才会触发callback
        if(err) return console.error;  //要在callback中监听error信息
    }))   
}).on("error",console.error) // 注意引用中是否有监听时间
```
- 异步事件的监听

最初的设计实在回调中设定flag,当执行完成后，flag设为true;
所有flag都未true,执行最终的处理程序。这样的问题是如果需要监听的事件很多，要设置很多flag变量。
```javascript
var flag1=false, flag2=false, flag3 = false;
var checkAll = function(){
    if(flag1&flag2&flag3){
        });
    }
}
```
优化版本，是设置全局count计数，当完成一个事件，即count++;
当count=需要监听的事件数，执行最终的处理程序。
```javascript
var count = 0；
 if(count ==3){
                printResults(resultArr);
            }
```

- 功能相同，仅参数不同的函数，要写成通用函数，然后用循环将不同的参数传递进去。
