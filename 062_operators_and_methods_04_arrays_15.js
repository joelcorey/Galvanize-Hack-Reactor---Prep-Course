/*
Using .slice() to make a copy

Complete a function that takes in one array parameter, and 
returns a copy of the array. Your function should create a 
copyOfArray variable and assign it to a call to the slice method 
on the array which will make a copy, and return the copyOfArray 
variable.
*/

function makeACopy(array) {
    // create a copyOfArray variable
    // assign it to a copy of the array
    // return the copyOfArray variable
    let copyOfArray = array.slice(0, array.length)
    return copyOfArray
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);