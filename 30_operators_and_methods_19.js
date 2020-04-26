/*
Complete a function that takes in one number parameter, and returns the 
result of rounding the number up. Your function should create a variable 
and assign it to the result of applying the Math.ceil() method to the 
input parameter, then return that variable.
*/

function roundUp(num) {
    // create a result variable
    // assign it to input, rounded up
    // return result
    return Math.ceil(num)
}

var roundedUp = roundUp(16.8);
console.log('should be 17:', roundedUp);