

var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    //console.log("startServer");
    if(req.method !== 'GET'){
        return res.end("Please GET only");
    }

   var getUrl =  url.parse(req.url,true);
   var data;
   console.log(getUrl.pathname);
   if(getUrl.pathname ==='/api/parsetime'){
        data = getUrl.query.iso;
        //console.log(data);
        var time = new Date(data);
       // console.log(time.getHours());
        
        ///*
        var resData ={
            "hour":time.getHours(),
            "minute":time.getMinutes(),
            "second":time.getSeconds(),
        }
        //console.log(resData);
        //*/
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(resData));
        res.end();
   }
   if(getUrl.pathname ==='/api/unixtime'){
    data = getUrl.query.iso;
    //console.log(data);
    var time = new Date(data).getTime();        
        //console.log(time);
        var resData ={
            "unixtime":time,
            
        }
        //console.log(resData);        
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(resData));
        res.end();
   }

   
});

server.listen(process.argv[2]);
