var http = require('http');
var url = require('url');
var getParse = function(time){ 
    //var time = new Date(query)  //repeat
    
    var data = {
        "hour":time.getHours(),
        "minute":time.getMinutes(),
        "second":time.getSeconds(),
    }
    return (data);
}

var getUnix = function(time){
    //var time = new Date(query).getTime(); // repeat
    
    var data = {
        "unixtime":time.getTime()
    }
    //return JSON.stringify(data) // repeat
    return (data)
}

var server = http.createServer(function(req,res){
    var path = url.parse(req.url, true);
    var time = new Date(path.query.iso);
    var resData;
 
    if(path.pathname ==='/api/parsetime'){
        resData = getParse(time);
        
    }

    if(path.pathname ==='/api/unixtime'){
        resData = getUnix(time);
    }

    if(resData){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(resData));
    }else{ // listen to err
        res.writeHead(404);
        res.end();
    }
    
});

server.listen(process.argv[2]);