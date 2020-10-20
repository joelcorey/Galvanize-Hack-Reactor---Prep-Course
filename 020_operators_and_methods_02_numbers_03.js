/*
Using the `*` operator with numbers

Complete a function that takes in two number parameters, and returns 
their product when multiplied together. Your function should create a 
variable and assign it to the result of multiplying the number parameters 
together using the * operator, then return that variable.
*/

function getProduct(num1, num2) {
    // create a result variable,
    // assign it to num1 times num2
    // return the result variable
    
    let result = num1 * num2;
    return result;
}

var resultProduct = getProduct(9, 4);
console.log('should be 36:', resultProduct);