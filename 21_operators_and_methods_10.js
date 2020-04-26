/*
Complete a function that takes in two number parameters (num1, num2), 
and returns the result of num1 divided by num2. Your function should 
create a variable and assign it to the result of dividing num1 by num2 
using the / operator, then return that variable.
*/

function getQuotient(num1, num2) {
    // create a result variable,
    // assign it to num1 divided by num2
    // return the result variable
    let result = num1 / num2
    return result
}

var resultQuotient = getQuotient(20, 4);
console.log('should be 5:', resultQuotient);