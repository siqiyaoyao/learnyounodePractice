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