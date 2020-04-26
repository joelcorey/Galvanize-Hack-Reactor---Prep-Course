/*
Complete a function that takes in two number parameters (num1, num2), 
and returns the result of raising num1 to the num2 power. Your function 
should create a variable and assign it to the result of raising num1 to 
the num2 power using the ** operator, then return that variable.
*/

function getPower(num1, num2) {
    // create a result variable,
    // assign it to num1 raised to the num2 power
    // return the result variable
    let result = num1 ** num2
    return result
}

var resultPower = getPower(3, 4);
console.log('should be 81:', resultPower);