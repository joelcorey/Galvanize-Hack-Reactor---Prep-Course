/*
Get length of string

Complete a function that takes in one parameter, a string, and returns 
the length of that string. Your function should create a variable and 
assign it to the length of the input string using the .length property, 
and return that variable.
*/

function getStringLength(string) {
    // create a length variable
    // assign it to the length of the string
    // return the length variable

    let length = string.length;
    return length;
}

var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9:', resultLength2);