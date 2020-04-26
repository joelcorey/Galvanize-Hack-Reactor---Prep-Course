/*
Complete a function that takes in two number parameters (num1, num2), 
and returns their difference when num2 is subtracted from num1. Your 
function should create a variable and assign it to the result of 
subtracting num2 from num1 using the - operator, then return that 
variable.
*/

function getDifference(num1, num2) {
    // create a result variable,
    // assign it to num1 minus num2
    // return the result variable
    let result = num1 - num2
    return result
}

var resultDiff = getDifference(37, 19);
console.log('should be 18:', resultDiff);