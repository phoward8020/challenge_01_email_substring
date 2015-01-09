//helper code reads data from stdin
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

//30,625  -- 122,500 = 62,461  n^2 + (n/2)^2