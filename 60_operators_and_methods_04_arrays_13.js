/*
Using Array.isArray()

Complete a function that takes in one parameter, possibly an 
array, and returns whether the input in an array or not. Your 
function should create a variable, assign it to an expression 
that tells whether the input parameter is an array or not, using 
the Array.isArray() method, then return that variable.
*/

function isAnArray(input) {
    // create a result variable
    // assign it to a call to the applicable method
    // return the result variable

    return Array.isArray(input);
}

var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);