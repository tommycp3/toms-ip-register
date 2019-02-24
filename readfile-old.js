// how to read files

var fs = require('fs');

console.log("Executed Before file reading");

var data = fs.readFile('./files/file', 'utf8'); 

console.log(data);
    


console.log("Executed After file reading, probably");