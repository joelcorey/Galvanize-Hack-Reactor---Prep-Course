/*
Complete a function that takes in one number parameter, and returns the 
result of rounding the number down. Your function should create a 
variable and assign it to the result of applying the Math.floor() method 
to the input parameter, then return that variable.
*/

function roundDown(num) {
    // create a result variable
    // assign it to input, rounded down
    // return result
    return Math.floor(num)
}

var roundedDown = roundDown(6.8);
console.log('should be 6:', roundedDown);
