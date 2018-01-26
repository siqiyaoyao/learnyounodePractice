var http = require('http');
var url = process.argv[2];// first command-line

/*
http.get(url,function(respond){ //参数=argument
    respond.setEncoding("utf8");
    respond.on("data",function(data){
        console.log(data);
    })

});

*/

// 注意监听异常 dont forget to listen to error event

http.get(url,function(respond){
    respond.setEncoding("utf8");
    respond.on('data',function(data){
        console.log(data);
    });
    respond.on('error',function(error){
        console.error;
    });
}).on('error',console.error);