/*
joinArrays

Write a function called "joinArrays".

Given two arrays, "joinArrays" returns an array with the elements of 
"arr1" in order, followed by the elements in "arr2".
*/

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]