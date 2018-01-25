var fs = require('fs'); // global module 不需要路径
var path = require('path');


module.exports = function(fileName,target,callback){
    fs.readdir(fileName,function(err,list){
        if(err){
            return  callback(err);
        }
        
        list =list.filter(function(file){
            return path.extname(file) ==='.'+ target;
        })
        callback(null,list);
        /*
        var newList = [];
        list.forEach(function(value){
            if (path.extname(value) === '.'+ target){
                newList.push(value);
            }
        })
         callback(null,newList);
        */
    })
    
    
           
        
    

   
};