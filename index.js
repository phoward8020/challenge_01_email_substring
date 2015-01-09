/*
 * DO NOT MODIFY THIS FILE
 *
 * This code is the app.
 * It reads from std in and calls your function
 * then outputs the return value to stdout.
 *
 * example usage: node index.js < ./lib/test00.txt
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');
var words="";

var findEmailSubstring = require('./lib/findEmailSubstring.js')

process.stdin.on('data', function(chunk) {
    words += chunk;
});

process.stdin.on('end', function() {
    console.log(findEmailSubstring(words));
});