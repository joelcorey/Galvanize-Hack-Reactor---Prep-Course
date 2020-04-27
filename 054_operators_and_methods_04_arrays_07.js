/*
Using .pop()

Complete a function that takes in one parameter, an array, removes the 
last element from the back of the array, and returns the removed element. 
Your function should create a popped variable, assign it to an expression 
using the .pop() method to remove the last element from the array, then 
return that popped variable.
*/

function applyPop(array) {
    // create a popped variable
    // assign it to an expression removing the last element from the array
    // return the popped variable

    let popped = array.pop();
    return popped;
}

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);