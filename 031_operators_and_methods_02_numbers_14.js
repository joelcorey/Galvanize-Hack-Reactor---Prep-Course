/*
Using the `Number.parseInt()` method

Complete a function that takes in one string parameter, representing an 
integer, and returns the result of parsing an integer from the input. 
Your function should create a variable and assign it to the result of 
applying the Number.parseInt() method to the input parameter, then 
return that variable.
*/

function applyParseInt(numString) {
    // create a result variable
    // assign it to parsed integer from input string
    // return result
    
    return Number.parseInt(numString);
}

var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger);