# 模块（module）和回调（callback）



## 相关概念


### 模块（module）
本次用到的是**module.exports**的方法输出模块。
模块的exports 可以输出任何对象，包括函数，变量等，相当于把一个脚本里的对象暴露，导出模块的公有属性和方法，其他脚本也可以使用。

#### 用例
输出模板的两种写法：匿名函数/具体函数

```javascript
// Export
// first
module.exports = function(){

};

// second
function foo (){
}
module.exports = foo;

```

获取用require 方法，如果只写名称不写路径，会在全局范围内找，可能会引起错误。
```javascript
// Import
var mymodule = require('./mymodule.js');
mymodule(); // = foo()

```
### 回调（callback）
原理，因为函数function可以作为参数传入另一个主体函数中，因此在执行主体函数的时候就可以调用回调函数。从而改变主体函数的使用灵活性。
回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。
用例：
```javascript
// main function
function main(foo,value){
    console.log("mian function");
    foo(value);
}

// argument for input
var testValue = "callback";

// anonymous callback function as argument 
main(function(value){
    console.log(value);
},testValue);

```

## 作业反思
最初版本
```javascript
// module.js
var fs = require('fs'); // global module 不需要路径
var path = require('path');


module.exports = function(callback,fileName,target){
    fs.readdir(fileName,function(err,list){
        if(err){
            return  callback(err);
        }
        
        list.forEach(function(value){
            if (path.extname(value) == target){
               callback(null,value);
            }
        })
    })
   
};
```
```javascript
// main.js

var mymodule = require('./module.js');

var fileName = process.argv[2];
var target = "."+process.argv[3];

function callback(err,file){
    if(err){
        return console.error(err);
    } 
    else{
       
        console.log(file);
        
    }
}
mymodule(callback,fileName,target);
```
### 问题：
- 回调函数（callback）的设计
在最初的版本中，我将callback函数写在了循环里面，等于每一循环，都需要执行一次回调。回调函数最好是在条件满足下，立即响应并只响应一次。所以有循环的情况，可以把循环结果存储成数组格式，或者打包成一个对象，然后在循环结束时，作为参数给回调函数并返回。这样能保证在数据完整的时候能够立即对数据进行处理。更符合当前场景。

- 回调函数的参数位置
应该放在其他参数的后面
### 优化：

## Delete a file
-当对象是数组的时候，可以用**arr.forEach** 替代**for** 循环
```javascript
 /*
        for(var i=0;i< list.length;i++){
            if(path.extname(list[i]) == target){
                console.log(list[i]);
            }
        }
*/
        list.forEach(function(value){
            if (path.extname(value) == target){
                console.log(value);
            }
        })
```
- 当数组需要做筛选的时候，可以直接用**arr.filter**来进行，最终返回一个新的数组
```javascript
/*
        var newList = [];
        list.forEach(function(value){
            if (path.extname(value) === '.'+ target){
                newList.push(value);
            }
        })
         callback(null,newList);
        */

        list =list.filter(function(file){
            return path.extname(file) ==='.'+ target;
        })
        callback(null,list);
```
- 注意 **==**与**===**
==， 两边值类型不同的时候，要先进行类型转换，再比较。
===，不做类型转换，类型不同的一定不等。
=== 更为严格
