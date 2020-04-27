/*
Using .shift()

Complete a function that takes in one parameter, an array, removes the 
first element from the front of the array, and returns the removed 
element. Your function should create a shifted variable, assign it to an 
expression using the .shift() method to remove the first element from the 
array, then return that shifted variable.
*/

function applyShift(array) {
    // create a shifted variable
    // assign it to an expression removing the first element from the array
    // return the shifted variable

    let shifted = array.shift();
    return shifted;
}

var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1);

var resultElement2 = applyShift(['islands', 'peninsulas', 'pacific']);
console.log('should log islands:', resultElement2);