var http = require('http');
var fs = require('fs');

var url = process.argv[3];
var server = http.createServer(function(request,respond){
    respond.write(200,{'content-type':'text/plain'});// 为何要写头？
   fs.createReadStream(url).pipe(respond); // 将读取到的流赋予respond输出
       
});
server.listen(Number(process.argv[2]));