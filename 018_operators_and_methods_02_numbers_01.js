/*
Using the `+` operator with numbers

Complete a function that takes in two number parameters, and returns 
their sum when added together. Your function should create a variable 
and assign it to the result of adding the two input parameters together 
using the + operator, then return that variable.
*/

function getSum(num1, num2) {
    // create a result variable,
    // assign it to num1 and num2 added together
    // return the result variable

    let result = num1 + num2;
    return result;
}

var resultSum = getSum(4, 10);
console.log('should be 14:', resultSum);