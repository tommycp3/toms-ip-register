var fs = require("fs");

// Synchronous read
var data = fs.readFileSync('./ipfiles/IP1.txt.zip');
console.log("Synchronous read: " + data.toString());


var crypto = require('crypto');

console.log(crypto.createHash('md5').update(data).digest('hex'));

console.log("Program Ended");