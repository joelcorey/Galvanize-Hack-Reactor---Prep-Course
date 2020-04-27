/*
IF ELSE statement with truthy/falsy

Complete a function that takes in one parameter, determines if that parameter is 
truthy or falsy, and returns a specific string for each case. Your function should 
use an if else statement to determine if the input parameter is truthy, and if it is, 
should return the string 'Input is truthy', or, if the input parameter is falsy, should 
return the string 'Input is falsy'.
*/

function isItTruthy(param) {
    // if param is truthy
      // return 'Input is truthy'
    // otherwise
      // return 'Input is falsy'
  
    if (param) return 'Input is truthy';
    else return 'Input is falsy';
}

var result1 = isItTruthy('anything');
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);