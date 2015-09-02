var Promise = require('promise'); //Needed as node does not support out the box!
var FileReader = require('filereader'); //Needed as node does not support out the box!
var FileAPI = require('file-api');
var File = FileAPI.File;


var fileReader = new FileReader();

var readFile = function(){
    return new Promise(function(resolve, reject){
        fileReader.onload = function(foo){
            resolve(fileReader.result);
        };
        fileReader.onerror = function(){
            reject('error');
        }
    });
};

//readFile()
//    .then(function(response){
//        //console.log(f); //this outputs the load object when the load event is fired..
//        console.log('success');
//        console.log(response);
//    }, function(error){
//        console.log('nope');
//        console.log(error);
//    });

readFile()
    .then(function(response){
        //console.log(f); //this outputs the load object when the load event is fired..
        console.log('success');
        console.log(response);
    })
    .catch(function(error){
        console.log('nope');
        console.log(error);
    });

fileReader.readAsText(new File('./example-files/text.txt'));