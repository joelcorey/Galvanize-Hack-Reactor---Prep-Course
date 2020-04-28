/*
getAllElementsButFirst

Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the 
elements but the first.
*/

function getAllElementsButFirst(array) {
    return array.slice(1, array.length);
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]