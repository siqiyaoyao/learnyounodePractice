
var http = require("http");
var bl = require("bl");

var resultArr = [];
var count = 0;
var printResults = function(arr){
    arr.forEach(function(data){
        console.log(data);
    });
}

var getUrl = function(index){
    http.get(process.argv[2+index],function(response){
        response.pipe(bl(function(err,data){ //将response中的数据流导入bl中进行处理 bl模块保证在数据流完整之后执行回调
            if(err) return console.error(err);
            data = data.toString();
            resultArr[index]=data;
            count++;
            console.log(index);
            if(count ==3){
                printResults(resultArr);
            }
        }));
    })
}


for(var i = 0; i < 3; i++){
    getUrl(i);
}