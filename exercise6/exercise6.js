var mymodule = require('./module.js');

var fileName = process.argv[2];
var target = process.argv[3];
function callback(err,list){
    if(err){
        return console.error(err);
    } 
    
       list.forEach(function(file){
        console.log(file);
       })
       
        
    
}

mymodule(callback,fileName,target,);