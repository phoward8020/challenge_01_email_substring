function occurrences(string, subString) {
    var string = string.toLowerCase()
    var subString = subString.toLowerCase()
    var n = 0
    var pos = 0

    for (var i = 0; i < string.length; i++) {
      var x = string.indexOf(subString, x);
      if (x >= 0) { 
          n++; 
          x += 1; 
        } else break;
    }

    return(n);
};


var findEmailSubstring = function(input){

    var winner="this is test output";

    var arr = input.split("\n")
    var str = arr[0]
    for (var i = 0; i < arr.length; i++) {
      var x = occurrences(arr[i], str)
      var y = occurrences(winner, str)
      if (x > y) {
        winner = arr[i]
      };
    }
    
    return winner;

};


module.exports=findEmailSubstring;