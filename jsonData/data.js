const express = require ('express')
const app = express()
const fs = require('fs');


app.use(express.urlencoded());
 

const x= fs.readFileSync('data.txt','utf8')

const words = x.split("\r\n");
var joy;
joy = words.join();
var data= "";
for ( i=0;i<joy.length;i++){  
    if(joy[i] != ',') {
       data=data+joy[i];
    } 
}
 console.log(data);
 var words2;
var words2 = data.split("`");


for (var i=0;i<words2.length-1;i++){
    console.log('{');
    console.log('"name":"'+words2[i]+'",');
    console.log('"company":"Novo Healthcare and Pharma Ltd",');
    console.log('"type":"'+words2[i+1]+'",');
    console.log('"strange":"'+words2[i+2]+'",');
    console.log('"ganare":"'+words2[i+3]+'",');
    console.log('"unitPrice":"'+words2[i+4]+'"');
    console.log('},');
    i=i+4;
}
console.log(words2.length);
console.log((words2.length-1)/5);
 app.listen(4000);
