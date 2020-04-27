/*
Accessing an Element in an Array

Complete a function that takes two parameters, an array and a numerical 
index, and returns the element in the array located at the numerical 
index. Your function should create a variable and assign it to an 
expression which accesses the element located at the numerical index, 
then return that variable.
*/

function accessAnElement(array, index) {
    // create a result variable,
    // assign it to an expression that accesses the element within array at the index
    // return the result variable

    return array[index];
}

var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('should be "Mouse":', resultElement);