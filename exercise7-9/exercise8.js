
var http = require("http");
var bl = require("bl");
var stream = require("concat-stream");

var url = process.argv[2];

http.get(url,function(response){
    response.pipe(bl(function(err,data){ // 直到数据读取完毕 才会触发callback
        if(err) return console.error;
        var results = data.toString();
        console.log(results.length);
        console.log(results);
    }))

    response.on("error",console.error);

}).on("error",console.error)