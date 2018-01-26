

var http = require("http");
var bl = require("bl");
var bufArr = [];
var flag1=false, flag2=false, flag3 = false;

var checkAll = function(){
    if(flag1&flag2&flag3){

        bufArr.forEach(function(data){
            console.log(data);
        });
    }
}
http.get(process.argv[2],function(response){
    response.pipe(bl(function(err,data){
        if(err) return console.error(err);
        data = data.toString();
        bufArr[0] =data;
        flag1 = true;
        console.log("1");
        checkAll();
    }));
}).on("error",console.error);

http.get(process.argv[3],function(response){
    response.pipe(bl(function(err,data){
        if(err) return console.error(err);
        data = data.toString();
        bufArr[1] =data;
        flag2 = true;
        console.log("2");
        checkAll();

    }));
}).on("error",console.error);

http.get(process.argv[4],function(response){
    response.pipe(bl(function(err,data){
        if(err) return console.error(err);
        data = data.toString();
        bufArr[2] =data;
        flag3 = true;
        console.log("3");
        checkAll();
    }));
}).on("error",console.error);

