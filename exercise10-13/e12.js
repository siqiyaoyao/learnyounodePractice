var http = require('http');
var map = require('through2-map');



var server =http.createServer(function(req,res){
    // 限定请求方式
    if(req.method !=='POST'){
        return res.end('post only!');
    }
    
    req.pipe(map(function(chunk){
      
       return chunk.toString().toUpperCase().split('').join('');
    })).pipe(res);
});

server.listen(process.argv[2]);