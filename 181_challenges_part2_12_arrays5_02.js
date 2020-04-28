/*
removeFromFrontOfNew

Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but 
the first element of the given array.
Notes:
You should be familiar with the 'slice' method.
*/

function removeFromFrontOfNew(arr) {
    return arr.slice(1, arr.length)
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]