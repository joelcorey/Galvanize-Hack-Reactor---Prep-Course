/*
IF statement with undefined

Complete a function that takes in one parameter, determines if that parameter is 
defined, and returns a specific string if it is. Your function should use an if 
statement to determine if the input parameter is defined, and if it is, should 
return the string 'Input is defined'.
*/

function isItUndefined(param) {
    // if param is defined (or not undefined)
    // return 'Input is defined'

    if (param) return 'Input is defined';  
}

var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);